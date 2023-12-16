// main.js

document.addEventListener("DOMContentLoaded", function () {
    fetchChallenges();
});

function fetchChallenges() {
    // Simulated challenges, replace this with actual challenges fetched from a server
    const challenges = [
        { id: 1, name: "Challenge 1", flag: "6cde1ee351d185191b3a1de161a195491fc49518", points: 100 },
        { id: 2, name: "Challenge 2", flag: "flag2", points: 150 },
        // Add more challenges as needed
    ];

    const challengesDiv = document.getElementById("challenges");

    challenges.forEach(challenge => {
        const challengeDiv = document.createElement("div");
        challengeDiv.innerHTML = `
            <p>${challenge.name}</p>
            <input type="text" id="flag${challenge.id}" placeholder="Enter Flag">
            <button onclick="submitFlag(${challenge.id}, '${challenge.flag}', ${challenge.points})">Submit Flag</button>
        `;
        challengesDiv.appendChild(challengeDiv);
    });
}

function submitFlag(challengeId, correctFlag, points) {
    const flagInput = document.getElementById(`flag${challengeId}`);
    const submittedFlag = flagInput.value;

    // XOR decryption logic with the key (replace this with your encryption/decryption logic)
    const decryptedFlag = xorDecrypt(submittedFlag);

    if (decryptedFlag === correctFlag) {
        points += 50;
        alert(`Correct! Points: ${points}`);
    } else {
        alert("Incorrect flag");
    }
}

// Replace this with your actual XOR decryption logic
function xorDecrypt(text) {
    // Sample XOR decryption logic
    const key = "secretkey";
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}
