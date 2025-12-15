import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import {sequelizeConfig} from './src/config/connection.js';
import morgan from "morgan";
import helmet from "helmet";
//import routes
import router from './src/routes/indexRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5432;

//Settings
app.set("port", port);


//Utilities
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());


//Endpoint to check server
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running smoothly" });
});

app.use("/api", router);

sequelizeConfig  
.authenticate()
  .then(() => {
    console.log('Connection success');
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Connection fail', error);
  });