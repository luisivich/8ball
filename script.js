const answerButton = document.getElementById("answer-button");
const answerResult = document.getElementById("answer-result");

answerButton.addEventListener("click", () => {
  const questionInput = document.getElementById("question-input");
  const question = questionInput.value;

  fetch(`https://yesno.wtf/api`)
    .then((response) => response.json())
    .then((data) => {
      answerResult.textContent = data.answer;
    })
    .catch((error) => {
      answerResult.textContent = "An error occurred while fetching the answer.";
      console.error(error);
    });
});
