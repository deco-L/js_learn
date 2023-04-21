const apiKey = "api_key";
const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";

async function askQuestion(question) {
	const response = await fetch(endpoint, {
    method: "POST",
    headers: {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
		"prompt": question,
		"max_tokens": 2048,
		"temperature": 0.7,
		"stop": "\n"
    })
	});
	const data = await response.json();
	const answer = data.choices[0].text.trim();
	return answer;
}

// example usage
askQuestion("What is the meaning of life?").then(answer => {
	console.log(answer);
});
