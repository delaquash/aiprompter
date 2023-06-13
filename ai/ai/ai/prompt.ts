import { Schema, Types, model, models } from "mongoose";

interface IPageSchema {
    prompt: string;
    tag: string;
    creator: Types.ObjectId
}

const PromptSchema = new Schema({
    prompt: {
        type: String,
        required: [true, "Prompt is required..."]
    },
    tag: {
        type: String,
        required: [true, "Tag is required..."]
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const Prompt = models.Prompt<IPageSchema> || model<IPageSchema>("Prompt", PromptSchema)
export default Prompt;