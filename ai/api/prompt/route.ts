import Prompt from "@app/ai/ai/ai/prompt";
import { connectedDB } from "@utils/database";
import { NextRequest } from "next/server";


export const GET = async(req: NextRequest) => {
    try {
         await connectedDB();
         const prompts = await Prompt.find({}).populate('creator')
         return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all prompt...", { status: 500 })
    }
}