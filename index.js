import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import cors from 'cors';

import {createToken} from './src/resolvers/create'
import {verifyToken} from './src/resolvers/verify'

import graphQLHTTP from 'express-graphql';

import schema from './src/graphql';

import User from './src/Schemas/user';

const JsonParser = bodyParser.json();

const app = express();

const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://ZenyiOP:caca09@ds237563.mlab.com:37563/smairvision')
const db = mongoose.connection;
db.on('error',() => console.log('Failed to connect to mongoose'))
    .once('open',() => console.log('Connected to MongoDB'));


app.listen(PORT, () => {
    console.log('Server working on port ', PORT)
})

app.use((cors()));

app.get('/',(req,res) => {
    res.send("Bonjour to SMAIR VISION")
})

app.use('/login', JsonParser, (req,res) => {
    if(req.method === 'POST'){
        const token = createToken(req.body.email, req.body.password).then((token)=>{
            res.status(200).json({token});
        })
        .catch((err)=> {
            res.status(403).json({
                message: 'Login FAILED, invalid credentials'
            })
        })
    }
})

app.use('/verifyToken', JsonParser, (req,res) => {
    if(req.method === 'POST') {
        try{
            const token = req.headers['authorization']
            verifyToken(token)
            .then(user => {
                res.status(200).json({user});
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
        } catch(e){
            console.log(e.message);
            res.status(401).json({
                message:e.message
            })
        }
    }
})

app.use('/graphql',(req,res,next) => {

    const token = req.headers['authorization']
    try {
        req.user = verifyToken(token)
        next()
    } catch(e){
        res.status(401).json({
            message: e.message
        })
    }
})

app.use ('/graphql',graphQLHTTP((req,res)=> ({
    schema,
    graphiql:true,
    pretty:true
})))

app.get('/userList', function(req,res){
    User.find({}).then(function(users){
        res.send(users);
    })
})


app.post('/register', JsonParser, (req,res) => {
    var user = new User(req.body);
    console.log(req.body)

    user.save((err) => {
        if(err) throw err;
        res.send('User Registered');
    })
})