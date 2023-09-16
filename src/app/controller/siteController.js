const CRUD =require('../models/CRUD')
const {multiMongoose,mongoose} = require('../../until/mongoose')
const { Mongoose } = require('mongoose')

class siteController{
    index(req,res,next){
        // res.render('home')
        CRUD.find({})
            .then(CRUD =>res.render('home',{
                CRUD: multiMongoose(CRUD)
            }))
            .catch(next)
    }
    
    //C
    create(req,res){
        res.render('create')
    }

    add(req,res,next){
        const ob1 = new CRUD(req.body)
        ob1.save()
        .then(() =>res.redirect('/'))
        .catch(next)
    }

    //R
    manage(req,res,next){
        CRUD.find({})
        .then((CRUD)=>res.render('manage',{
            CRUD: CRUD.map(CRUD => CRUD.toObject())
        }))
        .catch(next)
    }

    //U
    edit(req,res,next){
        CRUD.findById(req.params.id)
        .then(CRUD =>res.render('edit',{
            CRUD: mongoose(CRUD)
        }))
        .catch(next)
        // res.render('update')
    }
    update(req,res,next){
        CRUD.updateOne({_id: req.params.id},req.body)
        .then(()=>res.redirect('/manage'))
        .catch(next)
    }

    //D
    delete(req,res,next){
        CRUD.deleteOne({_id: req.params.id})
        .then(()=>res.redirect('/manage'))
        .catch(next)
    }

    //detail
    detail(req,res,next){
        // res.render('detail')
        CRUD.findOne({_id: req.params.id})
        .then(CRUD => res.render('detail',{
            CRUD: mongoose(CRUD)
        }))
        .catch(next)
    }

}

module.exports = new siteController;
