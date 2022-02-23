const Joi = require("joi");

const register = {
  body: Joi.object().keys({
    emailAddress: Joi.string().required().email(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string(),
    password: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    emailAddress: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
};
