
const express = require('express')
const router = express.Router()
const db=require("../db/index")

router.get("/shops",async(req,res)=>{

    try {
      // console.log(global.food_items);
      
      const result=await db.query("select * from shop");
      // console.log(result);
      res.status(200).json({
        status:"success",
        result: result.rows.length,
        data: {
          shops:result.rows,
        }
      });
  } catch (error) {
      console.log(error.message);
      res.send("Server Error")
      
  }
  })

  module.exports = router;