const Folder = require("../models/folder")
const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
const Gem = require("../models/gems");

router.post('/folder/createupdate',auth, async (req,res) => {
    let params = req.body
    // let count = await Folder.countDocuments({'items.path': `/${params.filename.split(" ").join("").toLowerCase()}`}).exec();
    // if(count > 0){
    //     return res.json({message: 'This file name already exists.'})
    // } 

    // let newdata = await Folder.findOne({text : params.text}).exec()

    
    // if (!newdata) {
       let newdata = new Folder()
        
    // }
    

    if(params.status){
        newdata.status = params.status
    }

    if(params.text) {
        newdata.text = params.text
    }

    // let obj = {
    //     text : params.filename,
    //     path : `/${params.filename.split(" ").join("").toLowerCase()}`
    // }
    // newdata.items.push(obj)


    await newdata.save()

    return res.send(newdata);
})

router.post('/folder/rename', async (req,res) => {
    let params = req.body
    let newdata = await Folder.findById(params.id).exec()
    newdata.text = params.text 
    await newdata.save()
    return res.send(newdata);
})

router.post('/file/rename', async (req,res) => {
    let params = req.body
    let count = await Folder.countDocuments({'items.path': `/${params.newname.split(" ").join("").toLowerCase()}`}).exec();
    if(count > 0){
        return res.json({message: 'This file name already exists.'})
    } 
    let newdata = await Folder.findById(params.id).exec()
    newdata.items.map( async (e) => {
        if (e.text === params.previousname) {
            e.text = params.newname
            e.path = `/${params.newname.split(" ").join("").toLowerCase()}`
            await newdata.save()
        }
    }) 
    let gems = await Gem.find({folder : params.id}).exec()
    for (let i=0 ;i<gems.length; i++) {
        for (let j =0; j<gems[i].globe.length; j++) {
            if (gems[i].globe[j].path === `/${params.previousname.split(" ").join("").toLowerCase()}`) {
                gems[i].globe[j].path = `/${params.newname.split(" ").join("").toLowerCase()}`
                await gems[i].save()
            }
        }
    }

    return res.send(newdata);
})


router.post('/file/createupdate',auth, async (req,res) => {
    let params = req.body
    let count = await Folder.countDocuments({'items.path': `/${params.filename.split(" ").join("").toLowerCase()}`}).exec();
    if(count > 0){
        return res.json({message: 'This file name already exists.'})
    } 

    let newdata = await Folder.findById(params.id).exec()

    
    if(params.status){
        newdata.status = params.status
    }

    if(params.text) {
        newdata.text = params.text
    }

    let obj = {
        text : params.filename,
        path : `/${params.filename.split(" ").join("").toLowerCase()}`
    }
    newdata.items.push(obj)


    await newdata.save()

    return res.send(newdata);
})

router.get('/folder/list', auth, async (req,res) => {
        const items = await Folder.find({}).lean({virtuals:true}).exec()
        return res.send(items);
})

router.post('/folder/delete', auth, async (req,res) => {
    let folder = await Folder.findById(req.body.id)
    if (!folder) return res.json({message : 'Please enter a valid folder name.'})
    await folder.remove()
    return res.sendStatus(200)
}),

router.post('/file/delete', auth, async (req,res) => {
    // let folder = await Folder.findById(req.body.id)
    // if (!folder) return res.json({message : 'Please enter a valid folder name.'})
    Folder.update({ _id: req.body.id }, { "$pull": { "items": { "text": req.body.filename } }}, { safe: true, multi:true }, function(err, obj) {
        //do something smart
        if (obj) {
            Gem.update({ 'globe.path': `/${ req.body.filename.split(" ").join("").toLowerCase()}` }, { "$pull": { "globe": { "path": `/${ req.body.filename.split(" ").join("").toLowerCase()}` } }}, { safe: true, multi:true }, function(err, obj) {
                //do something smart
                if (obj) {
                    return res.sendStatus(200)
                }
            });
        }
    });

    
    // console.log(folder.items);
    // return res.sendStatus(200)
}),


router.get('/folder/listgems/:path',auth,async (req,res) => {
    let folder = await Folder.findOne({'items.path': `/${req.params.path}`}).exec();
    let folderid = folder.id
    let gems = await Gem.find({folder : folderid, 'globe.path':`/${req.params.path}`}).exec()
    return res.send(gems);
})

module.exports = router;
