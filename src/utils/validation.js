import {check,validationResult,oneOf } from 'express-validator'
import {response} from "../utils/response.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerRoles = [
    check('phone_no').notEmpty().withMessage('Phone number is required').isNumeric()
]

const registerValidate = async (req, res, next) => {
    // console.log('Request Body:', req.body); // Log request body for debugging
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('Validation Errors:', errors.array()); // Log validation errors for debugging
        return res.status(412).json(
            new ApiResponse(412, null, errors.array(), true, "VALIDATION_ERROR")
        );
    } 
    next();  // Proceed to the next middleware
}

export const validation = {registerValidate, registerRoles};