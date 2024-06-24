import Groq from "groq-sdk"

const apiKey = "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"

const groq = new Groq({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
})

export const hitGroq = async function (kodamInput) {
    const replay = await groq.chat.completions.create({
        messages: [{
            role: "user",
            content: `jawab dalam bahasa indonesia. kamu pandai berimajinasi, sekarang jelaskan kepada saya arti dari khodam ${kodamInput} dan berikan ciri ciri pemilik dari kodam tersebut.
            buat semasuk akal mungkin. dan jawab dengan imajinasi liar mu` 
        }],
        model: "llama3-70b-8192",
    });
    return replay.choices[0].message.content;
}