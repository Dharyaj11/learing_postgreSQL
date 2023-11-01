
const express = require('express')
const router = express.Router()
const db=require("../db/index")

router.post("/newshops",async(req,res)=>{

    try {
      // console.log(global.food_items);
      console.log(req.body);
      const result=await db.query("INSERT INTO shop (name,location,price_range) values($1,$2,$3) returning *",[req.body.name,req.body.location,req.body.price_range]);
      console.log(result.rows[0]);
      res.status(200).json({
        status:"success",
        result: result.rows.length,
        data: {
          shops:result.rows[0],
        }
      });
  } catch (error) {
      console.log(error.message);
      res.send("Server Error")
      
  }
  })

  module.exports = router;