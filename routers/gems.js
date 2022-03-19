const express = require("express");
const router = new express.Router();
const Gem = require("../models/gems");
const Folder = require("../models/folder");
const auth = require("../middleware/auth")
router.post("/data", auth, async (req, res) => {
  let params = req.body;
  let newdata = new Gem();
  if (params._id && params._id.length > 1) {
    newdata = await Gem.findById(params._id).exec();
  }

  if (params.ID) {
    newdata.ID = params.ID;
  }

  if (params.Category) {
    newdata.Category = params.Category;
  }
  // if(params.TypeofGem){
  newdata.TypeofGem = params.TypeofGem;
  // }

  // if(params.Formation){
  newdata.Formation = params.Formation;
  // }
  if (params.Shape) {
    newdata.Shape = params.Shape;
  }

  if (params.Weight) {
    newdata.Weight = params.Weight;
  }

  // if(params.Color){
  newdata.Color = params.Color;
  // }
    newdata.Shades = params.Shades;
  // if(params.Clarity){
  newdata.Clarity = params.Clarity;
  // }
  if (params.Length) {
    newdata.Length = params.Length;
  }
  if (params.othercategory) {
    newdata.othercategory = params.othercategory
  }
  if (params.Width) {
    newdata.Width = params.Width;
  }
  if (params.Depth) {
    newdata.Depth = params.Depth;
  }
  if (params.Costperpiece) {
    newdata.Costperpiece = params.Costperpiece;
  }

  if (params.Costpercarat) {
    newdata.Costpercarat = params.Costpercarat;
  }

  if (params.specifyshape) {
    newdata.specifyshape = params.specifyshape;
  }

  if (params.TotalCost) {
    newdata.TotalCost = params.TotalCost;
  }

  if (params.Priceperpiece) {
    newdata.Priceperpiece = params.Priceperpiece;
  }

  if (params.Pricepercarat) {
    newdata.Pricepercarat = params.Pricepercarat;
  }

  if (params.TotalPrice) {
    newdata.TotalPrice = params.TotalPrice;
  }

  if (params.Enhancement) {
    newdata.Enhancement = params.Enhancement;
  }

  if (params.oldeushape) {
    newdata.oldeushape = params.oldeushape;
  }

  if (params.fancyshape) {
    newdata.fancyshape = params.fancyshape;
  }

  if (params.facetedshape) {
    newdata.facetedshape = params.facetedshape;
  }

  // if(params.QualityGrade){
  newdata.QualityGrade = params.QualityGrade;
  // }

  if (params.Description) {
    newdata.Description = params.Description;
  }

  if (params.Quantity) {
    newdata.Quantity = params.Quantity;
  }

  if (params.StockNumber) {
    newdata.StockNumber = params.StockNumber;
  }

  if (params.MineSource) {
    newdata.MineSource = params.MineSource;
  }

  if (params.othercolor) {
    newdata.othercolor = params.othercolor;
  }

  if (params.otherformation) {
    newdata.otherformation = params.otherformation;
  }

  if (params.othertypeofgem) {
    newdata.othertypeofgem = params.othertypeofgem;
  }

  if (params.otherfacetedshape) {
    newdata.otherfacetedshape = params.otherfacetedshape;
  }

  if (params.otheroldeushape) {
    newdata.otheroldeushape = params.otheroldeushape;
  }

  if (params.otherroughtypeofgem) {
    newdata.otherroughtypeofgem = params.otherroughtypeofgem;
  }

  if (params.roughtypeofgem) {
    newdata.roughtypeofgem = params.roughtypeofgem;
  }

  if (params.selectroughtypeofgem) {
    newdata.selectroughtypeofgem = params.selectroughtypeofgem;
  }

  if (params.othercabochonshape) {
    newdata.othercabochonshape = params.othercabochonshape;
  }

  if (params.cabochonshape) {
    newdata.cabochonshape = params.cabochonshape;
  }

  if (params.otherpearlsshape) {
    newdata.otherpearlsshape = params.otherpearlsshape;
  }

  if (params.specificsource) {
    newdata.specificsource = params.specificsource;
  }

  if (params.otherminesource) {
    newdata.otherminesource = params.otherminesource;
  }

  if (params.othercolorintensity) {
    newdata.othercolorintensity = params.othercolorintensity;
  }

  if (params.ColorIntensity) {
    newdata.ColorIntensity = params.ColorIntensity;
  }

  if (params.otherclarity) {
    newdata.otherclarity = params.otherclarity;
  }

  if (params.othershades) {
    newdata.othershades = params.othershades;
  }

  if (params.Size) {
    newdata.Size = params.Size
  }

  if (params.listshades) {
    newdata.listshades = params.listshades;
  }

  if (params.specificshades) {
    newdata.specificshades = params.specificshades;
  }

  if (params.selectminesource) {
    newdata.selectminesource = params.selectminesource;
  }

  if (params.cost) {
    newdata.cost = params.cost;
  }

  if (params.price) {
    newdata.price = params.price;
  }

  await newdata.save();

  newdata = await Gem.findById(newdata._id).exec();

  return res.send(newdata);
});

router.post("/editdata",auth, async (req, res) => {
  // let key = req.body.ID;
  let params = req.body;
  let id = params._id
  let newdata = await Gem.findById({ _id : id }).exec();
  newdata.Category = params.Category;

  newdata.TypeofGem = params.TypeofGem;

  newdata.Formation = params.Formation;

  newdata.Shape = params.Shape;

  newdata.Weight = params.Weight;

  newdata.Color = params.Color;

  newdata.specifyshape = params.specifyshape

  newdata.Shades = params.Shades;

  newdata.otherminesource = params.otherminesource

  newdata.specificsource = params.specificsource

  newdata.Clarity = params.Clarity;

  newdata.Length = params.Length;

  newdata.Width = params.Width;

  newdata.Depth = params.Depth;

  newdata.Costperpiece = params.Costperpiece;

  newdata.cost = params.cost;

  newdata.price = params.price;

  newdata.Costpercarat = params.Costpercarat;

  newdata.TotalCost = params.TotalCost;

  newdata.othercolor = params.othercolor;

  newdata.otherformation = params.otherformation;

  newdata.othertypeofgem = params.othertypeofgem;

  newdata.othercategory = params.othercategory;

  newdata.otherpearlsshape = params.otherpearlsshape;

  newdata.Priceperpiece = params.Priceperpiece;

  newdata.Pricepercarat = params.Pricepercarat;

  newdata.facetedshape = params.facetedshape;

  newdata.fancyshape = params.fancyshape;

  newdata.MineSource = params.MineSource;

  newdata.ColorIntensity = params.ColorIntensity;

  newdata.othercolorintensity = params.othercolorintensity;

  newdata.otherfacetedshape = params.otherfacetedshape;

  newdata.otherclarity = params.otherclarity;

  newdata.TotalPrice = params.TotalPrice;

  newdata.Enhancement = params.Enhancement;

  newdata.QualityGrade = params.QualityGrade;

  newdata.Description = params.Description;

  newdata.Quantity = params.Quantity;

  newdata.StockNumber = params.StockNumber;

  newdata.oldeushape = params.oldeushape

  newdata.otheroldeushape = params.otheroldeushape

  newdata.Size = params.Size

  newdata.roughtypeofgem = params.roughtypeofgem

  newdata.selectroughtypeofgem = params.selectroughtypeofgem

  newdata.specificshades = params.specificshades

  newdata.otherroughtypeofgem = params.otherroughtypeofgem

  newdata.othercabochonshape = params.othercabochonshape

  newdata.cabochonshape = params.cabochonshape

  newdata.listshades = params.listshades

  newdata.othershades = params.othershades

  newdata.selectminesource = params.selectminesource

  await newdata.save()

  newdata = await Gem.findById(newdata._id).exec();

  return res.send(newdata);
});

router.get("/getgems",auth, async (req, res) => {
  const items = await Gem.find().exec();
  try {
    res.status(201).send(items);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/getcategory/:category",auth, async (req, res) => {
  const category = req.params.category
   const items = await Gem.find({Category : category}).exec();
  res.send(items)
});

router.post("/removeGem",auth, async (req, res) => {
  const id = req.body.id;
  Gem.findById(id, (err, data) => {
    if (err) return res.status(400).send(err);
    if (!data) return res.json("Data not found");
    data.remove(function (error) {
      if (error) return res.status(400).send(err);
      return res.status(200).send(data);
    });
  });
});

function escapeStringRegexp(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
}


router.post("/search",auth,async(req,res) => {
    const {keyword,path} = req.body;
    const $regex = escapeStringRegexp(keyword);
    let items;    
    if (path === '/gems') {
     items = await Gem.find( { $text: { $search: $regex } }).exec()
    } else {
      items = await Gem.find( { $text: { $search: $regex }, 'globe.path' : path }).exec()
    }


    // const items =  await Gem.find({$or:[{Category:{$regex}}, {TypeofGem :{$regex}}]}).sort({ "$natural": -1 }).exec()
    return res.status(200).send(items);
})

router.post("/gems/folder",auth,async(req,res) => {
  const folderName = req.body.folderName 
  const filename = req.body.filename 
  const data = req.body.data
  if (!data) {
    return res.json({message : 'No data selected for export.'})
  }
  const folder = await Folder.findOne({text : folderName}).exec()
  if (!folder) return res.json({message : 'No folder with that name.'})
  // let count = await Folder.countDocuments({'items.path': filename}).exec();
  // if(count > 0){
  //     return res.json({message: 'This file name already exists.'})
  // } 
  for (let i =0; i<data.length; i++) {
    const gem = await Gem.findById(data[i]._id).exec();
    gem.folder.push(folder.id)
    let obj = {
      path : filename
    }
    gem.globe.push(obj)
    await gem.save()
  }
  return res.send(200)
})


module.exports = router;
