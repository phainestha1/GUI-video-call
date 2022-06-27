import express, { Request, Response } from "express";
import { getInfo } from "../controller/rootApi";

const router = express.Router();

router.route("/").get(getInfo);

export default router;
