const OpenAI = require("openai");
const apiKey = process.env.OPENAI_API_KEY

const getInput = async(req, res)=>{
    const openai = new OpenAI(apiKey)
    try {
        const {prompt} = req.body
        if(!prompt){
            return res.status(400).json({error: "Prompt is required"});
        }
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[{
                role: "user",
                content: prompt
            }]
        })
        if(response && response.choices[0].message.content){
            return res.status(200).json({output: response.choices[0].message.content});
        }
        return res.status(400).json({error: "No response from AI"});
    } catch (error) {
       return res.status(500).json({error: "Internal Server Error"}); 
    }
}

module.exports =  {getInput} ;