import express, { Request, Response } from 'express';
 
const testRoutes = express.Router(); 
 
testRoutes.route("/test").get(async function (req:Request, res:Response) {
  return res.json(
      {
          success: true,
          message: "kaze-r test api, vroom vroom!!",
          data: {}
      }
  );
});

module.exports = testRoutes;