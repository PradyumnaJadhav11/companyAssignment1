// Predefined list of question-answer pairs
const questionAnswerPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];

// Function to find the closest matching question
function findClosestQuestion(userInput) {
    let closestMatch = null;
    let maxMatches = 0;

    // Split the user's question into words
    const userWords = userInput.toLowerCase().split(/\s+/);

    // Loop through each predefined question
    questionAnswerPairs.forEach(pair => {
        const questionWords = pair.question.toLowerCase().split(/\s+/);
        let matchCount = 0;

        // Compare words between the user input and the predefined question
        userWords.forEach(userWord => {
            if (questionWords.includes(userWord)) {
                matchCount++;
            }
        });

        // Keep track of the question with the most word matches
        if (matchCount > maxMatches) {
            maxMatches = matchCount;
            closestMatch = pair;
        }
    });

    // Return the answer of the closest matching question
    return closestMatch ? closestMatch.answer : "Sorry, I don't understand the question.";
}

// Sample input from the user
const userInput = "What's the weather like today?";

// Get the closest answer based on the user's input
const answer = findClosestQuestion(userInput);

console.log(answer); // Output: "The weather is sunny."
