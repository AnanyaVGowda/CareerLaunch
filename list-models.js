const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  const models = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).listModels(); // This actually fails, let's just make a very basic fetch call
}
