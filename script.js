function calculateMarksheet() {
    const totalMarks = document.getElementById('totalMarks').value;
    const obtainedMarks = document.getElementById('obtainedMarks').value;
    let resultDiv = document.getElementById('result');

    if (totalMarks === '' || obtainedMarks === '' || totalMarks <= 0 || obtainedMarks < 0) {
        resultDiv.innerHTML = "<strong>Please enter valid marks!</strong>";
        return;
    }

    const percentage = (obtainedMarks / totalMarks) * 100;
    let grade = '';

    // Using only if-else statements for grading
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    resultDiv.innerHTML = `
        <strong>Total Marks:</strong> ${totalMarks}<br>
        <strong>Marks Obtained:</strong> ${obtainedMarks}<br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}%<br>
        <strong>Grade:</strong> ${grade}
    `;
}