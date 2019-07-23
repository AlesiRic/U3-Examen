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
        String
    ],
    comments:[
        String
    ],
    califications:[
        Number
    ]
})

const fanModel = mongoose.model('Fanpage', fanSchema, 'fanpage');



module.exports=fanModel;