import Joi from "joi";

export const productCreateSchema = Joi.object({
    name:Joi.string().min(3).max(40).required(),
    image:Joi.string().required(),
    price:Joi.number().min(1).required(),
    quantity:Joi.number().min(1).required(),
    description:Joi.string()
})