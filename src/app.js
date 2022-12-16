import express from "express";
import mongoose, { version } from "mongoose";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi  from "swagger-ui-express"
import user_router from "../routes/user_route.js";
import category_route from "../routes/category_route.js";
import sub_category_route from "../routes/sub_category_route.js";
import notice_route from "../routes/notice_route.js";
import vendor_route from "../routes/vendor_route.js";

const app = express();

app.use(express.json());
app.use("/",function(req,res){
  res.status(200).send("Welcome to sawhaaz Dhankuta Api")
})
//user API Route
app.use("/api/user", user_router);
//category API Route
app.use("/api/category", category_route);
app.use("/api/sub-category", sub_category_route);

//notice Api Route
app.use("/api/notice",notice_route)
//vendor APi Route
app.use("/api/vendor",vendor_route)

//Swagger configuration
const swaggerOptions={
  swaggerDefinition:{
    openapi:'3.0.0',
    info:{
      title:'sahajDhankuta Api Documentation',
      version:'1.0.0'

    }
  },
  apis:['./routes/*js']
}
const swaggerDocs=swaggerJSDoc(swaggerOptions)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))


dotenv.config();

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@cluster0.qdgptva.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => app.listen(process.env.PORTS || 5000))
  .then(() => console.log("Connected to database and listening to port 5000"))
  .catch((err) => console.log(err));
