import Joi from "joi";

import { UserData } from "../repositories/authRepository.js";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+|;:",.<>?]).*$/;

const userData = Joi.object<UserData>({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).pattern(passwordRegex).required()
});

const authSchema = {
    userData,
};

export default authSchema;