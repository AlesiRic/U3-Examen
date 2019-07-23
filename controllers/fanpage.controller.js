const http = require('http');
const path = require('path');
const status = require('http-status');
const _config = require('../_config');
const jwt = require('jsonwebtoken')

var _fanpage;

const insertFanpage = (req, res) => {
    const fanp = req.body;
    _fanpage.create(fanp)
        .then((data) => {
            res.status(status.OK);
            res.json({ msg: "Usuario creado correctamente", data: data });
        })
        .catch((err) => {
            res.status(status.BAD_REQUEST);
            res.json({ msg: "Error!!!!", data: err });
        })
}

const comment=(req,res)=>{
  const { idFan} = req.params; 
  const newComment = req.body.comment;
  _fanpage.update({"_id":idFan}, { "$push":{"comments":newComment}})
      .then((data) => {
          res.status(status.OK);
          res.json({ msg: 'Comment added!!', data: data });
        })
        .catch((err) => {
          res.status(status.BAD_REQUEST);
          res.json({ msg: 'Unexpected Error!', err: err })
        }) 
}

const getComments=(req,res)=>{
    const {id}=req.params;
    _fanpage.findById(id).select({comments:1})
    .then((data)=>{
        res.status(status.OK);
        res.json({ msg: 'Comments found!!', data: data });
    })
    .catch((err)=>{
        res.status(status.BAD_REQUEST);
        res.json({ msg: 'Unexpected Error!', err: err })
    })
}

const getCalif=(req,res)=>{
    console.log("Haciendo calif");
    const {id}=req.params;
    var query={_id:id};
    _fanpage.find(query)
    .then((data)=>{
        var sum=0
        data[0]["calification"].forEach(calification => {
            sum=sum+calification
        });
        res.status(status.OK);
        res.json({ msg: 'Calificacion found!!', data: sum/data[0]["calification"].length });
    })
    .catch((err)=>{
        res.status(status.BAD_REQUEST);
        res.json({ msg: 'Unexpected Error!', err: err })
    })
}



module.exports = (Fanpage) => {
    _fanpage = Fanpage;
    return ({
        insertFanpage,
        comment,
        getComments,
        getCalif
    });
}
