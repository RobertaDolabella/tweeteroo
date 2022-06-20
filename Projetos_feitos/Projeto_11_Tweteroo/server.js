import express from 'express'
import cors from 'cors'
import { request } from 'express';

const server = express()

server.use(express.json());
server.use(cors())


const data = []

let user;
server.post('/sign-up', (request, response)=>{
    user = request.body

    response.send("OK")

})

server.get('/tweets', (request, response)=>{
    if(data.length>10){
        data.shift()
    response.send(data)
    }
    else{
        response.send(data)
    }
})


server.post('/tweets', (request, response)=>{
    const newTweet = request.body.tweet
    const newdata = {username: user.username,
        avatar: user.avatar,
        tweet: newTweet}

    data.push(newdata)

    response.send("OK")
})
server.listen(5000)
