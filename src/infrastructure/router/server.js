import express from "express";
const baseURL = express();
import { urlencoded, json } from "body-parser";

baseURL.use(urlencoded({ extended: true }));
baseURL.use(json());

import router from "./router.js";
baseURL.use("/api/v1/", router);

//サーバ起動
const port = process.env.PORT || 3000;
baseURL.listen(port);
console.log("listen on port " + port);
