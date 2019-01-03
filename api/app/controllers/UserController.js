const UserToken = require('../models/UserToken');
const User = require('../models/User');

/*
 * LOGIN
 */
module.exports.login = async ({ body }, res, next) => {
  let { email, password } = body;
  
  // First find user based on creds provided
  let err, user;
  [ err, user ] = await to(User.getOneByEmail(email));
  if (err) return next(err);

  // Respond unauthorized if not in db
  if (!user) {
    return res.status(401).json({ 
      message: 'Invalid email and password.'
    });
  }
    
  // password check
  [ err ] = await to(User.comparePassword(password, user.attributes.password_hash));
  console.log(err)
  if (err) {
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
    message: 'success',
    token
  });
}

/*
 * SIGNUP
 */
module.exports.signup = async ({ body }, res, next) => {
  let { email, password, fullName } = body;
  // First find user based on creds provided
  let err, user;
  [ err, user ] = await to(User.getOneByEmail(email));
  if (err) return next(err);

  // Respond unauthorized if not in db
  if (user) {
    return res.status(401).json({ 
      message: 'Email already in use.'
    });
  }

  [ err, user ] = await to(User.addUser({ email, name: fullName, password_hash: password }));
  if (err) return next(err);

  // create new token
  const token = await require('crypto').randomBytes(16).toString('hex');
  [ err ] = await to(UserToken.create(token, user.id));
  if (err) return next(err);
  
  return res.status(200).json({
    message: 'success',
    token
  });
}

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
