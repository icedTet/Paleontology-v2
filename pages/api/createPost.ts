// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success?: boolean;
  error?: string;
  id?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.headers.authorization) {
    res.status(401).json({ error: "Unauthorized" });
  }
  
  // res.status(200).json({ });
}
