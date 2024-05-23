import express from "express";
import dotenv from "dotenv";
import appSetup from "./startup/init";
import routerSetup from "./startup/router";
import securitySetup from "./startup/security";
import setupSwagger from "./config/swaggerConfig";

const app = express();
dotenv.config();

appSetup(app);
securitySetup(app, express);
routerSetup(app);
setupSwagger(app);
