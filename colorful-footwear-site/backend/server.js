
const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());

app.get('/products',(req,res)=>res.json([
{id:1,name:'Red Runner',price:99,desc:'Stylish running shoe',image:'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'},
{id:2,name:'Blue Street',price:109,desc:'Urban sneaker',image:'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'},
{id:3,name:'Yellow Sport',price:119,desc:'Athletic footwear',image:'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'},
{id:4,name:'Premium White',price:129,desc:'Premium casual shoe',image:'https://images.pexels.com/photos/19090/pexels-photo.jpg'},
{id:5,name:'Color Splash',price:139,desc:'Trendy colorful sneaker',image:'https://images.pexels.com/photos/605090/pexels-photo-605090.jpeg'}
]));

app.listen(5000);
