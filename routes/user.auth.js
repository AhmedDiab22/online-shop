const User = require('../models/users');
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const JWT = require('jsonwebtoken');
const auth = require('../middleware/auth');
const bycrpt = require('bcrypt-nodejs')


// Register into a new  user

router.post('/register' , (req , res)=>{
    if(!req.body.email){
        return res.status(200).json({success : false , msg : 'Email not provided'});
    }else{
        if(!req.body.username){
            return res.status(200).json({success : false , msg : 'username not provided'});
        } else{
            if(!req.body.password){
                return res.status(200).json({success : false , msg : 'password not provided'});
            }else{
                let user = new User({
                    email : req.body.email.toLowerCase(),
                    username : req.body.username.toLowerCase(),
                    password : req.body.password,
                    mobile : req.body.mobile,
                    isAdmin : req.body.isAdmin
                });
                user.save((err)=>{
                    if(err){
                        if(err.code === 11000){
                            return res.status(200).send('username or email has been already exists..');
                        }else{
                            if(err.errors){
                                if(err.errors.email){
                                    return res.status(200).json({success : false , msg : err.errors.email.message});
                                }else{
                                    if(err.errors.username){
                                        return res.status(200).json({success : false , msg : err.errors.username.message});
                                    }else{
                                        if(err.errors.password){
                                            return res.status(200).json({success : false , msg : err.errors.password.message});
                                        }else{
                                            return res.status(200).json({success : false , msg : err
                                            });
                                        }
                                    }
                                }
                            }
                            else{
                                return res.status(200).json({success : false , msg : 'could not save the user' , err
                            })     
                            }
                        }
                    }else{
                        const token =  user.generateToken();
                        return res.status(200).json({
                            success : true , 
                            user : user.username,
                            isAdmin : user.isAdmin,
                            token : token })
                    }
                })
            }
        } 
    }
})


// Login Into a user
router.post('/login' , (req,res)=>{
            User.findOne({username : req.body.username } , (err , user)=>{
                if(err){
                    res.status(200).json({success : false , msg : err})
                }else{
                    if(!user){
                        res.status(404).json({success : false , msg : 'username not found'});
                    }
                    // else{
                    //     const validPassword = user.comparePassword(req.body.password);
                    //     if(!validPassword){
                    //         res.status(404).json({success : false , msg : 'Password Invalid'});
                    //     }
                        else{
                            const token =  user.generateToken();
                            res.status(200).json({success : true , msg : 'welcome '  + user.username , token : token , user : {username : user.username , id : user._id , isAdmin : user.isAdmin }});
                        }   
                    }
            })
})

//Update Username
router.put('/update/user', auth ,  (req , res , next)=>{
    User.findOne({_id : req.decoded.user_id} ,  (error, data) =>{
        if (error) {
            if(error.code === 11000){
                return res.status(200).send('username or email has been already exists..');
            }
        } else {
           data.username = req.body.username;
           data.email = req.body.email;
           data.password = req.body.password;
           data.mobile = req.body.mobile;
           data.save((err)=>{
               if (err){
                   res.json({success : false , message : err})
               }else{
                   res.json({success : true , message : 'Blog Updated'})
               }
           })
        }
    })
})

// Check if the user username available or not
router.get('/checkUsername/:username' , (req, res)=>{
    User.findOne({username : req.params.username} , (err , user)=>{
        if(err){
            return res.status(200).json({success : false , msg : err})
        }else{
            if(user){
                return res.status(200).json({success : false , msg : 'username is already token' })
            }else{
                return res.status(200).json({success : true , msg : 'username is available' })
            }
        }
    })
});

// Check if the user email available or not
router.get('/checkEmail/:email' , (req, res)=>{
    User.findOne({email : req.params.email} , (err , user)=>{
        if(err){
            return res.status(200).json({success : false , msg : err})
        }else{
            if(user){
                return res.status(200).json({success : false , msg : 'Email is already token' })
            }else{
                return res.status(200).json({success : true , msg : 'Email is available' })
            }
        }
    })
});


// Get profile of the current user by Id
router.get('/profile' , auth ,  (req,res)=>{
    User.findOne({_id : req.decoded.user_id}).select('_id').exec((err, user)=>{
        if(err){
            return res.status(404).send(err)
        }else{
            if(!user){
                return res.status(404).send('User not found')
            }else{
                return res.status(200).send( { user : user })
            }
        }
    })
    
})


// Get profile of the current user by Username and Emial
router.get('/profile/user' ,auth ,(req,res)=>{
    User.findOne({_id : req.decoded.user_id}).select('username email _id password isAdmin mobile').exec((err, user)=>{
        if(err){
            return res.status(404).send(err)
        }else{
            if(!user){
                return res.status(404).send('User not found')
            }else{
                return res.status(200).send(user)
            }
        }
    })
    
})


module.exports = router
