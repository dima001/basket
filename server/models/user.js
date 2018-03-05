const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    // firstName: {
    //     type: String,
    //     trim: true
    // },
    // lastName: {
    //     type: String,
    //     trim: true
    // },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{value} is now valid email.'
    },
    password: {
        type: String,
        trim: true,
        minlength: 2
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
            }
        }]
    }
});

UserSchema.method.toJSON = function(){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    if (!Array.isArray(user.tokens)) {
        user.tokens = [];
    }
    user.tokens.push({access, token});
    console.log(user);
    user.set({ tokens: {access, token}});

    return user.save().then((r) => {
        console.log("generateAuthToken return",r);
      return token;
    }).catch((e) =>{
        console.log("error during save token",e)
    });
  };

UserSchema.methods.removeToken = function (token) {
    var user = this;
  
    return user.update({
      $pull: {
        tokens: {token}
      }
    });
  };
  
UserSchema.statics.findByToken = function(token){
    var User = this;
    var decoded;

    try{
        decoded = jwt.verify(token, 'abc123');
    }catch(e){
        return new Promise((resolve, reject) => {
            return Promise.reject();
        });
    }
    console.log(decoded);
    return User.findOne({'tokens.token': token});
};

UserSchema.statics.CheckExistsEmail = function(email){
    var User = this;
    return User.findOne({email}).then((user) => {
        if (!user) {
          return Promise.resolve(false);
        }
        return Promise.resolve(true);
    });
};

UserSchema.statics.findByCredentials = function (email, password) {
    var User = this;
    return User.findOne({email}).then((user) => {
      if (!user) {
        return Promise.reject();
      }
      
      var body = _.pick(user, ['email', 'password']);
      return new Promise((resolve, reject) => {
        // Use bcrypt.compare to compare password and user.password
        console.log(user.toJSON().password);
        console.log(password);
        // resolve(user);
        if(password === user.toJSON().password)
            resolve(user);
        else
         reject();

        // bcrypt.compare(password, user.toJSON().password, (err, res) => {
        //   if (res) {
        //     console.log("we have a result");
        //     resolve(user);
        //   } else {
        //     console.log("we don't have a result");
        //     reject();
        //     // resolve(user);

        //   }
        // });
      });
    });
  };
  
  UserSchema.pre('save', function (next) {
    var user = this;
  
    if (user.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash;
          next();
        });
      });
    } else {
      next();
    }
  });
  
  var User = mongoose.model('Users', UserSchema);
  
module.exports = {User};