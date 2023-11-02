const express = require('express')
const app = express()
const port = 5000
const db=require("./db/index")
const cors=require("cors")
// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// }) 
app.use(cors());
app.use(express.json());

app.use('/api',require('./Routes/Shops'));
app.use('/api',require('./Routes/ShopId'));
app.use('/api',require('./Routes/CreateShop'));

app.get('/', (req, res) => {
    res.send('Hellooo World!')
    console.log('hello')
  })

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })
