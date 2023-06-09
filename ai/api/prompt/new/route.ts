import Prompt from "@app/ai/ai/ai/prompt";
import { connectedDB } from "@utils/database";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest)=> {
    const { userId, prompt, tag }  =await req.json()

    try {
        await connectedDB()
        const newPrompt = new Prompt({
            creator:userId,
            tag,
            prompt
        })
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt), {status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt...", { status: 500 })
    }
}