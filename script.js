let answers = {
    height: '',
    strength: ''
};

function selectAnswer(question, answer) {
    answers[question] = answer;
    if (allQuestionsAnswered()) {
        showResult();
    }
}

function allQuestionsAnswered() {
    return answers.height && answers.strength;
}

function showResult() {
    const resultDiv = document.querySelector('.result');
    const titan = determineTitan();
    resultDiv.textContent = `You are the ${titan}!`;
}

function determineTitan() {
    const { height, strength } = answers;

    if (height === "less than 58") {
        if (strength === 'Intelligence') return 'Cart Titan';
        if (strength === 'Physical strength') return 'Pure Titan (Your Basic)';
        if (strength === 'Agility') return 'Jaw Titan';
        if (strength === 'Endurance') return 'Female Titan';
    }

    if (height === "58 and above") {
        if (strength === 'Intelligence') return 'Beast Titan';
        if (strength === 'Physical strength') return 'Colossal Titan';
        if (strength === 'Agility') return 'Attack Titan';
        if (strength === 'Endurance') return 'Armored Titan';
    }

}
