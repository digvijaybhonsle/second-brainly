import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const app = express();

app.post("/api/vi/signup", (req, res) => {
    const { username, password } = req.body;
})

app.post("/api/vi/signin", (req, res) => {
    const { username, password } = req.body;
})

app.post("/api/vi/content", (req, res) => {
    
})

app.get("/api/vi/content", (req, res) => {

})

app.delete("/api/vi/content", (req, res) => {

})

app.post("/api/vi/brain/share", (req, res) => {

})

app.get("/api/vi/brain/share", (req, res) => {
    
})

