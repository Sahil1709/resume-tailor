'use server';
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
    // dangerouslyAllowBrowser: true,
});

export async function getChatCompletion(resume: string, job_desc: string) {
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `My Resume:\n${resume}`
            }, {
                role: "user",
                content: `Job Description:\n${job_desc}\n\nTailor my resume based on the job description`
            }
        ],
        model: "mixtral-8x7b-32768",
    });
    return completion.choices[0]?.message?.content || ""
}
