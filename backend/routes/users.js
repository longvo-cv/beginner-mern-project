const router = require('express').Router();
let User = require('../models/user_model');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => res.status(400).json('Error + ', error));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const user = new User({ username });

  user
    .save()
    .then(() => {
      res.json('User added');
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
});

module.exports = router;
