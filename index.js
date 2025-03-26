import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";  
import { userRouter } from "./routes/user.js";  
import { adminRouter } from "./routes/admin.js";
import { courseRouter } from "./routes/course.js";  

dotenv.config(); 
connectDB();

const app = express();
app.use(express.json()); //

// ✅ Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
