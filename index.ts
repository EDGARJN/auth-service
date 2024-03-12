import express, {Application, Request, Response, application} from "express";

var app:Application = express();

app.get("/auth", (req:Request, res:Response)=>{
    res.json({author:"EDGAR JN", message:"Welcome in the authentication service"});
});

app.get("/login",(req:Request, res:Response)=>{
    const AUTHOR = process.env.AUTHOR
    res.json({"author":`${AUTHOR}`, "message":"Login to seee more service in our platform."});

});
const PORT = process.env.PORT;
app.listen(PORT,()=>{console.log(`ASET-MICROSERVICE: authentication server listenning on port: ${PORT},  still on process to make strong authentication service...`)});