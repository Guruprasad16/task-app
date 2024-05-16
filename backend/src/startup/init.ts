import { Express } from "express";

const appSetup = (app: Express) => {
  const APP_PORT = 3000;
  app.listen(APP_PORT, () => {
    console.log(`app listening on ${APP_PORT}`);
  });
};

export default appSetup;
