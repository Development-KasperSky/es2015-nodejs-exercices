const model = require('../models');

const get = (req, res) => {
  res.render('pages/creation');
};

const post = (req, res) => {

  const user = model.userList.add(req.body);

  if(user) {
    res.render('pages/created', {
      user
    });
  } else {
    res.render('pages/error', {
      user
    });
  }

};


module.exports = {
  get, post
};
