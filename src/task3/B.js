let typingTimer;
const doneTypingInterval = 1000;
const originalInput = document.getElementById('original_input');
const copiedInput = document.getElementById('copied_input');

originalInput.addEventListener('keyup', () => {
  typingTimer = setTimeout(originalDoneTyping, doneTypingInterval);
});

copiedInput.addEventListener('keyup', () => {
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

function originalDoneTyping() {
  copiedInput.value = originalInput.value;
};
originalDoneTyping();

function doneTyping() {
  originalInput.value = copiedInput.value;
};

doneTyping();

