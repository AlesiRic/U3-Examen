const mongoose = require('mongoose');

var fanSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    keywords:[
        {type:String}
    ],
    comments:[
        {type:String}
    ],
    califications:[
        {type:Number}
    ]
})

const fanModel = mongoose.model('Fanpage', fanSchema, 'fanpage');



module.exports=fanModel;