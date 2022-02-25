const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.verifyToken = (req, res, next) => {
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(419).json({
        code: 419,
        msg: '토큰만료',
      });
    }
    return res.status(401).json({
      code: 401,
      msg: '유효하지않은토큰',
    });
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const rt = req.headers.refreshtoken;
    req.decoded = jwt.verify(req.headers.refreshtoken, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { refresh: rt } });
    let result = await this.newToken(user.userid);
    req.data = result;
    return next();
  }
  catch (error) {
    console.log('refreshToken실패...', error)
    return res.status(401).json({
      code: 401,
      msg: '유효하지않은토큰',
    });
  }
}

exports.newToken = async (userid) => {
  const token = jwt.sign({
    id: userid
  }, process.env.JWT_SECRET, {
    expiresIn: '30m',
    issuer: 'board',
  });
  const refreshToken = jwt.sign({}, process.env.JWT_SECRET, {
    expiresIn: '50m',
    issuer: 'board',
  });
  await User.update({ refresh: refreshToken }, { where: { userid } });
  return { token, refreshToken }
}