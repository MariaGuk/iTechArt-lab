let typingTimer;
const DONE_TYPING_INTERVAL = 1000;
const originalInput = document.getElementById('original_input');
const copiedInput = document.getElementById('copied_input');

originalInput.addEventListener('keyup', () => {
  typingTimer = setTimeout(originalDoneTyping, DONE_TYPING_INTERVAL);
});

copiedInput.addEventListener('keyup', () => {
  typingTimer = setTimeout(doneTyping, DONE_TYPING_INTERVAL);
});

function originalDoneTyping() {
  copiedInput.value = originalInput.value;
};
originalDoneTyping();

function doneTyping() {
  originalInput.value = copiedInput.value;
};

doneTyping();

