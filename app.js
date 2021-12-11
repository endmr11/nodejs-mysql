const express = require('express');
const mysql = require('mysql');


const app =express();

const db= mysql.createConnection(
{
    host : 'localhost',
    user:'root',
    password :'',
    database:'nodemysql'
}
);

db.connect((err)=>{
    if (err) throw err;
    console.log('Connected');
});

app.get('/createdb',(req,res)=>{
 let sql ='CREATE DATABASE nodemysql';
 db.query(sql,(err,result)=>{
     if (err) throw err;
     console.log(result);
     res.send('Database Created');
         
 });
});

app.get('/createpoststable',(req,res)=>{
    let sql ='CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255),body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.send('Posts Table Created');
    });
});

app.get('/addpost1',(req,res)=>{
    let post ={
        title:'Bu biraşlık',
        body:'Bu bir içerik yazısı.'
    };
    let sql='INSERT INTO posts SET?';
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Posts Added');
    });
});

app.get('/addpost2',(req,res)=>{
    let post ={
        title:'Bu biraşlık2',
        body:'Bu bir içerik yazısı2.'
    };
    let sql='INSERT INTO posts SET?';
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Posts2 Added');
    });
});

app.get('/addpost3',(req,res)=>{
    let post ={
        title:'Bu biraşlık3',
        body:'Bu bir içerik yazısı3.'
    };
    let sql='INSERT INTO posts SET?';
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Posts3 Added');
    });
});


app.get('/getpost/:id',(req,res)=>{
    let sql=`SELECT * FROM posts WHERE id=${req.params.id}`;
    let query = db.query(sql,(err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send('Post Fetched');
    });
});

app.get('/updatepost/:id',(req,res)=>{
    let newTitle = 'Yeni Title';
    let sql=`UPDATE posts SET title = '${newTitle}' WHERE id=${req.params.id}`;
    let query = db.query(sql,(err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send('Post Updated');
    });
});

app.get('/deletepost/:id',(req,res)=>{
    let sql=`DELETE FROM posts WHERE id=${req.params.id}`;
    let query = db.query(sql,(err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send('Post Deleted');
    });
});


app.listen('3000',()=>{
    console.log('Server started on port 3000');
});