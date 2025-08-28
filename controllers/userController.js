const OpenAI = require("openai");
const { resErrorOccured, resFound, resServerError } = require("../utils/response");
const apiKey = process.env.OPENAI_API_KEY

const getInput = async(req, res)=>{
    const openai = new OpenAI(apiKey)
    try {
        const {prompt} = req.body
        if(!prompt){
            return resErrorOccured(res, "Prompt is required");
        }
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[{
                role: "user",
                content: prompt
            }]
        })
        if(response && response.choices[0].message.content){
            return resFound(res, response.choices[0].message.content);
        }
        return resErrorOccured(res, "No response from AI");
    } catch (error) {
       return resServerError(res, error); 
    }
}

module.exports =  {getInput} ;