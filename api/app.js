import express from 'express';
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import cors from "cors";
 
const app = express();
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = ["https://tsukuyomi-tau.vercel.app/"];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));



app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);


app.listen(8800,()=>{
    console.log("server is running on port 8800");
});