// Function to call the Lambda function
async function callLambdaFunction() {
    const lambdaApiUrl = "https://4dq1ix3g56.execute-api.ap-southeast-2.amazonaws.com"; // Replace with your API Gateway URL

    try {
        const response = await fetch(lambdaApiUrl, {
            method: "GET", // Change to "POST" if your Lambda function expects it
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const counter = await response.json(); // Parse the JSON response
        console.log("Lambda function response:", counter);
    } catch (error) {
        console.error("Error calling Lambda function:", error);
    }
}

// Call the Lambda function when the window loads
window.onload = () => {
    callLambdaFunction();
};
