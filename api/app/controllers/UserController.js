const Controller = require('./Controller');
const UserToken = require('../models/UserToken');
const User = require('../models/User');

/*
 * UserController
 */

class UserController extends Controller {
  constructor() {
    super(User);
  }

  /*
   * LOGIN
   * @param { email }    from body
   * @param { password } from body
   */
  async login({ body }, res, next) {
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
    console.log(err);
    if (err) {
      return res.status(401).json({
        error: 2,
        message: 'Incorrect password.'
      });
    }
    
    // generate new token
    const token = await require('crypto').randomBytes(16).toString('hex');

    try {
      // destroy all existing tokens ensuring there is only one per user at a time
      await UserToken.destroy(user.id);

      // create new token in db
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
   * @param { email }    from body
   * @param { password } from body
   * @param { fullName } from body
   */
  async signup ({ body }, res, next) {
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
    
    // Create user
    [ err, user ] = await to(User.addUser({ email, name: fullName, password_hash: password }));
    if (err) return next(err);

    // Create new token
    const token = await require('crypto').randomBytes(16).toString('hex');
    [ err ] = await to(UserToken.create(token, user.id));
    if (err) return next(err);
    
    return res.status(200).json({
      message: 'success',
      token
    });
  }
}

module.exports = UserController;
