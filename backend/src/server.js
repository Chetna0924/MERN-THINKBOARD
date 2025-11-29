import express from "express";
import connectDB from "./config/db.js";


const app = express();
const PORT= process.env.PORT||5001
import notesroute from "./routes/notesroute.js"
import rateLimiter from "./middleware/rateLimiter.js";
//middleware
app.use(express.json());


app.use(rateLimiter);
app.use("/api/notes",notesroute);
connectDB().then(()=>{

app.listen(PORT, ()=>{
    console.log("server startred on PORT:",PORT);

});
});


//mongodb+srv://chetnasharma0924:82ncEyDK5tj4o8co@cluster0.zhnhth6.mongodb.net/?appName=Cluster0
