import express from "express";
const app = 'express'

app.post('/user/signup', (req, res) => {
    res.json({
        message: "Sign up endpoint"
    })
})

app.post('/user/signin', (req, res) => {
    res.json({ 
        message: "sign in endpoint" 
    })
})

app.get('/user/purchases', (req, res) => {
     res.json({
        message: ""
     })
})

app.post('/course/purshase', (req, res) => {
    res.json({

    })
})

app.get('/courses', (req, res) => {
    res.json({
       message: ""
    })
})

app.listen(3000);