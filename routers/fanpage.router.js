const router = require('express').Router();

module.exports = (wagner) => {
    
    const fanCtrl = wagner.invoke((Fanpage) => 
        require('../controllers/fanpage.controller')(Fanpage));

    router.post('/',(req,res)=>
        fanCtrl.insertFanpage(req,res));

    router.put('/:id',(req,res)=>
        fanCtrl.comment(req,res));

    router.get('/:id',(req,res)=>
        fanCtrl.getComments(req,res));

    router.get('/calif/:id',(req,res)=>
        fanCtrl.getCalif(req,res));

    return router;
}