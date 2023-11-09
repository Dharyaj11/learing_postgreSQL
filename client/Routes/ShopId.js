
const express = require('express')
const router = express.Router()
const db=require("../db/index")

router.get("/shops/:id",async(req,res)=>{

    try {
      // console.log(global.food_items);
      console.log(req.params.id);

      
    //   const result=await db.query(`select * from shop where id= ${req.params.id}`);
      const result=await db.query("select * from shop where id= $1",[req.params.id]);
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