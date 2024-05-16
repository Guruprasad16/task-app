import express from "express";
import dotenv from "dotenv";
import appSetup from "./startup/init";
import routerSetup from "./startup/router";
import securitySetup from "./startup/security";

const app = express();
dotenv.config();

appSetup(app);
routerSetup(app);
securitySetup(app, express);
