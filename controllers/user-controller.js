const Model = require('../models')

module.exports = {
    getAllUser : (req, res)=>{
        Model.User.findAll()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    getUser : (req, res)=>{
        Model.User.findById(req.params.id)
        .then(user =>{
            res.status(200).json(user)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    createUser : (req, res) =>{
        Model.User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        })
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    deleteUser : (req, res)=>{
        Model.User.destroy({
            where : {id : req.params.id}
        })
        .then(del =>{
            res.status(200).json(del)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    updateUser : (req, res) =>{
        Model.User.update({
            name : req.body.name,
            email : req.body.email,
            password :req.body.password,
            role : req.body.role
        },{
            where : {id : req.params.id}
        })
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    updatePacth : (req, res) =>{
        Model.User.update({
            password :req.body.password
        },{
            where : {id : req.params.id}
        })
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }




}