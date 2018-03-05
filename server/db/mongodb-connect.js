// // const MongoClient = require('mongodb').MongoClient; ===
// const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// MongoClient.connect('mongodb://localhost:27017:Players', (err,db) => {
//     if(err){
//         console.log('Unable to conect to MongoDB server', err);
//         return;
//     }
//     console.log('Connecte to MongoDB server');

// db.collection('Players').insertOne({
//     name: 'Dima',
//     age: 25,
// }, (err, result) => {
//     if(err) {
//         return console.log('Unable to insert Player', err);
//     }
//     console.log(result.ops);
// });

// db.close();

// });