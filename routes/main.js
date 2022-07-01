'use strict';

import express from 'express';
import controllers from '../controllers/main.js';
import { check, sanitizeBody, validationResult} from 'express-validator'

const urlencodedParser = express.urlencoded({extended: true});


const router = express.Router();

const loginValidate = [
    check('username').trim().notEmpty().withMessage('The username required')
    .isLength({ min: 8 }).withMessage('username must be minimum 8 length'),
   
    check('password').trim().notEmpty().withMessage('Password required')
    .isLength({ min: 5 }).withMessage('password must be minimum 5 length')
    .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
    .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
    .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
    .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character')
    .not().matches(/^$|\s+/).withMessage('White space not allowed')
  ];

router.get('/register', controllers.getUsers);
router.post('/register', urlencodedParser, controllers.addUser);
router.get('/login', controllers.getUsersLogin);
router.post('/login', urlencodedParser, loginValidate, controllers.login);
router.get('/home', controllers.getUsersHome);

export default router;