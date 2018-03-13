// Get dependencies
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const path = require('path');
const http = require('http');

var {mongoose} = require('./server/db/mongoose');
var {Player} = require('./server/models/player')
var {User} = require('./server/models/user');
var {Team} = require('./server/models/team');
var {authenticate} = require('./server/middleware/authenticate');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email','password']);
  var user = new User(body);

  user.save().then(() => {
    user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  })
    //    res.send(user);
  .catch((e) => {
    res.status(400).send(0);
  })
})

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.post('/players', (req, res) => {
  Player.getPlayers().then((players) => {
    res.send(players);
  }).catch((e) =>{
    res.status(400).send();
  })
});

app.post('/player', (req, res) => {
  console.log("player");
  console.log(req.body);
  var body = _.pick(req.body, ['playerId']);
  console.log(body.playerId);
  Player.findPlayerByID(body.playerId).then((player) => {
    res.send(player); 
  }).catch((e) => {
    res.status(400).send();
  });
});

app.get('/team', (req, res) => {
  console.log("get");
  var body = _.pick(req.body, ['token']);
  User.findByToken(body.token).then((user) => {
    Team.findById(user._id).then( (team) => res.status(200).send(team));
  }).catch((e) => {
    res.status(400).send();
  });
});

app.post('/team', (req, res) => {
  console.log("post");
  var body = _.pick(req.body, ['token']);
  User.findByToken(body.token).then((user) => {
    Team.findById(user._id).then( (team) => res.send(team));
  }).catch((e) => {
    res.status(400).send();
  });
});

app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      // res.body(token).send(user);
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.post('/users/signup', (req, res) => {
  var body = _.pick(req.body, ['inputEmail', 'password']);
  User.CheckExistsEmail(body.email).then((Exists) => {
    if(!Exists){
      var newUser = new User({
        email: body.inputEmail,
        password: body.password,
        tokens: {access: "",
                token: ""}
      });
      newUser.save().then((user) => {
      return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
        }).catch((e) => {
          res.status(400).send();
        });
      }).catch((e) => {
        res.status(400).send();
      });
    }
    else{
      res.status(400).send();
    }
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


server.listen(port, () => console.log(`API running on localhost:${port}`));
module.exports = {app};