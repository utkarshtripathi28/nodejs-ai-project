import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
console.log("API Key:", apiKey); // Debugging line to check if the key is loaded
const openAi = new OpenAI(apiKey);
const main = async() => {
    try {
        const prompt = "Create a fitness training program for a beginner.";
        const response = await openAi.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }]
        })
        console.log(response.choices[0].message.content);
        // console.log("Response received", response.);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
await main()