require('dotenv').config();
console.log("ENV TEST:", process.env);

const express = require("express");
const mongoose = require("mongoose");;
const userRoutes = require("./routes/user.routes");
const blogCategoryRoutes = require('./routes/blogCategory.routes');
const blogListRoutes = require('./routes/blogList.routes');
const blogMediaRoutes = require('./routes/blogMedia.routes');


















const app = express();
app.use(express.json());



// Connect to MongoDB
 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("MongoDB Connected"))
   .catch(err => console.error(err));

app.use("/api/users", userRoutes);
app.use('/api/blog-categories', blogCategoryRoutes);
app.use('/api/blog-lists', blogListRoutes);
app.use('/api/blog-media', blogMediaRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
