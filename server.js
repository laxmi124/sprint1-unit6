const express = require('express');
const port = 8000;
const app = express();
const books = require('./books.json');
// const bodyParser = require('body-parser');
// const route = require('route');

// const body = bodyParser.json();
const response = {};

function logger(req,res,next){
   console.log(req.url);
   next()
};


function checkpermission(req,res,next){
    if(req.url === '/authors'){
        response.route = "/authors";
        response.permission = true;
        
    }
    if(req.url === '/libraries'){
        response.route = "/libraries"
        response.permission = true
    }
    next();
}

// var checkpermission = body.urlencoded({ permission: true })

app.use(logger);

app.get("/books",(req,res,next)=>{
    // res.json(books)
    res.send({route:"/books"})
})
app.get("/libraries",checkpermission,(req,res,next)=>{
    // res.json(books)
    res.send( response)
    next()
})
app.get("/authors",checkpermission,(req,res,next)=>{
    // res.json(books)
    res.send(response);
    next()
});




app.listen(port,()=>{
    console.log(`it's running on port ${port}`)
})