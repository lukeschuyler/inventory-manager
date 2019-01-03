const { to } = require('await-to-js');

const UserToken = require('../models/UserToken');
const User = require('../models/User');

// High order function for allowing/disallowing users from performing actions
// based on auth status 
const isAuthenticated = async (req, res, next) => {
  const token = req.query.token;

  if (!token) {
    return res.status(401).json({
      message: 'No token provided!'
    }); 
  }
  
  // check for token in db
  let userToken, err;
  [ err, userToken ] = await to(UserToken.getOne(token));

  if (err) {
    return res.status(401).json({
      message: 'No user with that token!'
    }); 
  }

  // TODO Clean up token fetching from db to return falsey value if invalid token
  // instead of "CustomError: Empty Response"
  if (!userToken || !userToken.user) { 
    return res.status(401).json({
      message: 'No user with that token!'
    }); 
  }

  // attach user to request for ensuing acitons to always have
  [ err, loggedInUser ] = await to(User.getOne(userToken.user_id));

  if (err) {
    return  res.status(500).json({
      message: 'Something went wrong, please try again later.'
    });  
  }

  req.user = loggedInUser;

  return next();
}

module.exports = {
  isAuthenticated
}
