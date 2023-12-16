// Base64 encode function
function sdiufidf(text) {
    return btoa(text);
}

// Base64 decode function
function base64Decode(encodedText) {
    return atob(encodedText);
}
document.addEventListener("DOMContentLoaded", () => {
    const challengesContainer = document.getElementById("challenges");
    const totalPointsElement = document.getElementById("total-points");
    let totalPoints = 0;

    window.checkFlag = function(index) {
        const challengeDiv = challengesContainer.querySelector(`.challenge[data-index="${index}"]`);
        const udsifhad = challengeDiv.querySelector("input").value;

        // Encode the user input to base64
        const daofihads = sdiufidf(udsifhad);

        const dafsdfa = [
            "bWl0ZXt3aDR0czRwcF9kZXNjcjFwdGkwbn0=", 
            "bWl0ZXtTaGVybG9ja19Ib2xtZXN9",
            "bWl0ZXtidXRfd2hlcmVfaXNfdGhlX3RleHQ/Pz99",
            "bWl0ZXsxc250X3RoMTVfMzQ1eX0=",
            "bWl0ZXtyb3RfNV9lbmNyeXB0aW9ufQ==",
            "bWl0ZXtjaW5lbWFfaXNfYXJ0fQ==",
            "bWl0ZXtzMHVyYzNfYzBkZV9leHBsMGl0NHRpb259" 
        ];

        const points = [5, 5, 10, 10, 20 , 20 , 30];

        let sadfhuhe = false;
        if (daofihads === dafsdfa[index]) {
            sadfhuhe = true;
        }

        const resultContainer = challengeDiv.querySelector(`#result${index}`);
        if (sadfhuhe) {
            totalPoints += points[index];
            totalPointsElement.textContent = totalPoints;
            resultContainer.innerHTML = `<p>Congratulations! You earned ${points[index]} points for Challenge ${index + 1}! ✔️</p>`;
        } else {
            resultContainer.innerHTML = `<p>Incorrect flag for Challenge ${index + 1}. Try again.</p>`;
        }
    };
});
