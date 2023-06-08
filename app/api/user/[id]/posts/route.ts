import Prompt from "@models/prompt";
import { connectedDB } from "@utils/database";
import { NextRequest } from "next/server";

export const GET = async(req: NextRequest, { params }: any ) => {

    try {
         await connectedDB();
         const prompts = await Prompt.find({
            creator: params.id
         }).populate('creator')
         return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all prompt...", { status: 500 })
    }
}