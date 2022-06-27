import { Request, Response } from "express";

export const getInfo = async (req: Request, res: Response) => {
  console.log("getInfo is working...");
  res.send("Hello I'm alive now!!");
};
