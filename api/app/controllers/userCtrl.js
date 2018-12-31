const UserToken = require('../models/user_token.js');
const User = require('../models/user.js');

module.exports.getAll = (req, res, next) => {
  User.getAll()
  .then(users => res.status(200).json(users))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: { id } }, res, next) => {
  User.getOne(id)
  .then(user => res.status(200).json(user))
  .catch(error => next(error))
}

module.exports.deleteUser = ({ params: {id} }, res, next) => {
  User.deleteUser(id)
  .then(user => res.status(202).json(user))
  .catch(error => next(error))
}

module.exports.editUser = ({ body }, res, next) => {
  const id = body.id
  User.editUser(id, body)
  .then(user => res.status(200).json(user))
  .catch(error => next(error))
}

module.exports.login = async ({ body }, res, next) => {
  let { email, password } = body;
  
  // First find user based on creds provided
  let user;
  try {
    user = await User.getOneByEmail(email);
    console.log(user);
  }
  catch(e) {
    return next(e);
  }
  
  // Respond unauthorized if not in db
  if (!user) {
    return res.status(401).json({ 
      message: 'Invalid email and password.'
    });
  }
    
  // password check
  try {
    await User.comparePassword(password, user.attributes.password_hash);
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      error: 2,
      message: 'Incorrect password.'
    });
  }
  
  const token = await require('crypto').randomBytes(16).toString('hex');

  try {
    // destroy all existing tokens ensuring there is only one per user at a time
    await UserToken.destroy(user.id);

    // create new token
    await UserToken.create(token, user.id);

  } catch (e) {
    return res.status(500).json({
      error: 2,
      message: 'Internal Server Error.'
    });
  }
  
  return res.status(200).json({
    message: 'success'
  })
}
