const { Pool }= require ('pg');
 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'yelp',
    password: '1234567890',
    port: 5432,
  })
 
module.exports={
    query : (text, params) => pool.query(text, params),
} 