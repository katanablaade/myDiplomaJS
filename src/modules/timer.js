const timer = (deadline) => {
  const timerDay = document.querySelector('.count_1 span');
  const timerHours = document.querySelector('.count_2 span');
  const timerMinutes = document.querySelector('.count_3 span');
  const timerSeconds = document.querySelector('.count_4 span');
  let intervalId;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24)
      .toString()
      .padStart(2, '0');
    const hours = Math.floor((timeRemaining / 60 / 60) % 24)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((timeRemaining / 60) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(timeRemaining % 60)
      .toString()
      .padStart(2, '0');

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    if (getTime.timeRemaining < 0) {
      timerDay.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      clearInterval(intervalId);
    } else {
      timerDay.textContent = getTime.days;
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
    }
  };

  intervalId = setInterval(updateClock, 1000);
  updateClock();
};

export default timer;
