'use strict';

import User from '../schema/user.js';
import path from 'path';
import { check, sanitizeBody,validationResult } from 'express-validator'


    function getUsers(req, res){
       res.sendFile(path.resolve('form/index.html'));
    }
    
    function getUsersLogin(req, res){
       res.sendFile(path.resolve('form/login.html'));
     } 


     
   function getUsersHome(req, res){
      res.sendFile(path.resolve('form/home.html'));
    } 
 
  
async function addUser(req, res){
    const userBody = req.body;

      const data = await User.create(userBody);
      console.log(userBody);
      return res
            . redirect('/login');
            
  }


 function login (req, res) {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  	 res.redirect('/login');
  }
//  const users = db('form').collection('cities');

//   let possibleDuplicate =  users.findOne({password});
//   if (possibleDuplicate === null) {
  
//     res.redirect('/login');
//   }
  else {
    
    const newUser = new User({
      username: username,
      password: password
  });
      User.createUser(newUser, function(err, user){
         if(err) throw err;

     });
     res.redirect('/home');
 }

 }
  export default {addUser, getUsers, getUsersLogin, login, getUsersHome};