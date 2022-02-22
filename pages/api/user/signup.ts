import { NextApiRequest, NextApiResponse } from "next";
const formidable = require("formidable-serverless");

export const config = {
  api: {
    bodyParser: false,
  },
};

async function signup(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err: any, fields: any, files: any) => {
    console.log(fields);
  });
}

export default signup;
