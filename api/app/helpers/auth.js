const UserToken = require('../models/user_token.js');
const User = require('../models/user.js');

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
  let userToken;
  try {
    userToken = await UserToken.getOne(token);
  }
  catch(e) {
    return res.status(401).json({
      message: 'No user with that token!'
    }); 
  }
  
  // TODO Clean up token fetching from db to return falsey value if invalid token
  // instead of "Custom Error"
  if (!userToken || !userToken.user) { 
    return res.status(401).json({
      message: 'No user with that token!'
    }); 
  }

  // attach user to request for ensuing acitons to always have
  let loggedInUser = userToken && await User.getOne(userToken.user_id);
  req.user = loggedInUser;

  return next();
}

module.exports = {
  isAuthenticated
}
