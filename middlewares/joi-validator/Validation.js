const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  phone: Joi.number().integer().required(),
  isGold: Joi.boolean().required(),
});

function bodyValidationMiddleware(req, res, next) {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    res.status(404).send(error.details.map((mes) => mes.message));
  } else {
    next();
  }
}

module.exports = bodyValidationMiddleware;
