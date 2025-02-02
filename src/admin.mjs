import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import FAQ from "./models/faq.model.js"; 
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const admin = new AdminJS({
  resources: [
    {
      resource: FAQ,
      options: {
        properties: {
          translations: { type: "json" }
        }
      }
    }
  ],
  rootPath: "/admin"
});

const adminRouter = AdminJSExpress.buildRouter(admin);
app.use(admin.options.rootPath, adminRouter);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/faq_management", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => console.log("Admin Panel running on http://localhost:3000/admin"));
  })
  .catch((err) => console.error(err));
