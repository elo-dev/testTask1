const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(() => {
      let time = new Date(seconds * 1000).toISOString().substring(11, 19);
      timerEl.innerHTML = time;
      if (seconds <= 0) {
        clearInterval(timer);
      }
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  inputEl.value = e.target.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);
});
