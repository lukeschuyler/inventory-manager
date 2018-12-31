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

  let user;
  try {
    user = await User.getOne({ email });
  }
  catch(e) {
    return next(e);
  }

  if (!user) {
    return res.status(401).json({ 
      message: 'Invalid email or password.'
    });
  }
    
  // password check
  try {
    await user.comparePassword(password, user.password_hash);
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      error: 2,
      msg: 'Incorrect password.'
    });
  }
  
  const token = await crypto.randomBytes(16).toString('hex');

  try {
    // destroy all existing tokens ensuring there is only one per user at a time
    await UserToken.destroy({ user: userRecord.id });

    // create new token
    await UserToken.create({
      token,
      user: userRecord.id
    });

  } catch (e) {
    return this.res.serverError(e);
  }
  
  User.addUser(user)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}
