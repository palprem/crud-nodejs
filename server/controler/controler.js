const { findByIdAndUpdate } = require('../model/model');
var UserDB=require('../model/model');
//create and save new server
exports.create=(req, res)=>{
    //validate request
    if(!req.body){
        req.status(400).send({message:"Contect can not be empty!"});
        return;
    }
    //new user
    const user=new UserDB({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    });
    // save data in database
    user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect('/add-user');
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "some error occurred white creating a create operation"
        });
    });
}
//retrive and return
exports.find=(req, res)=>{
    UserDB.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error occoured while retrving user information"})
    })
}
//update a new indtified user by id
exports.update=(req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"data to update can not be empty"});
    }
    const id= req.params.id;
    UserDB.findByIdAndUpdate(id, req.body,{
        useFindAndModify:false
    })
    .then(data=>{
        if(!data){
            res.status(404).send({message:'cannot update user ${id}. maybe user not found'})
        }else{
            res.send(data)
        }
    })
}
//delete a user with spesfic id
exports.delete=(req, res)=>{
    const id=req.params.id;
    UserDB.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:'cannot delete with id ${id}. maybe id is worng'})
        }else{
            res.send({
                message:"user was deleted successly!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:'could not delete user with id=' +id
        });
    });
}