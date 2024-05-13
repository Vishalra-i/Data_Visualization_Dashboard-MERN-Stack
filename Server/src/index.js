import app from "./app.js";
import connectDb from "./database/index.js";

// mongoose.connect('mongodb+srv://Vishal456:Vishal123%40@cluster0.0s0jwz0.mongodb.net/');
const PORT = process.env.PORT || 3200;

connectDb().then(
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    })
).catch((err)=>{
    console.log(err)
})
