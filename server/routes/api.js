const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/authenticate', (req, res) => {

    let token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRpbWEgQnJvZHNraSIsImFkbWluIjp0cnVlfQ.D15RBAoxxiAZvFbr74PkRYS5ZIZ2J1kHfbMJC_U3MSc';
    if(req.email === 'dima@gmail.com' && req.password === '1234')
      res.status(200).stringify(token1);
    res.status(200).stringify(token1);
  });

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/players', (req, res) => {
  console.log("get players");
  Player.getPlayers().then((players) => {
    console.log(players);
    res.send(players);
  }).catch((e) =>{
    console.log(e);
    res.status(400).send();
  })
});

module.exports = router;
