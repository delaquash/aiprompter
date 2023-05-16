import mongoose from "mongoose";

declare var process : {
    env: {
      MONGO_URI: string
    }
  }

let isConnected = false

export const connectedDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("MongoDB is already connected!!!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName:"share_prompt",
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })
        isConnected = true;
        console.log("MongoDB is connected");
    } catch (error) {
        
    }
}