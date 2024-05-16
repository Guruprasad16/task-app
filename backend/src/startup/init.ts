import { Express } from "express";
import mongooseConnect from "../databases/mongodb/mongodb";

const appSetup = async (app: Express) => {
  try {
    await mongooseConnect();

    const APP_PORT = Number(process.env.APP_PORT) || 3000;
    app.listen(APP_PORT, () => {
      console.log(`App listening on ${APP_PORT}`);
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

export default appSetup;
