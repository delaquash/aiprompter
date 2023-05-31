import { connectedDB } from "@utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export const POST =async(req: NextApiRequest, res: NextApiResponse)=> {
    const { userId, prompt, tag }  =await res.json()
}