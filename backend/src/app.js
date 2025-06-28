import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import userRouter  from './routes/user.routes.js'



// routes declaration
app.use("/api/v1/users", userRouter)

// global error handler
app.use((err, req, res, next) => {
    console.error(err);
    
  res.status(err.statusCode || 500).json({
    error: err.message || "Internal Server Error"
  });
});

// http://localhost:8000/api/v1/users/register

export {app}