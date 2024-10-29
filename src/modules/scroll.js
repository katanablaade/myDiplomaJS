const scroll = () => {
  const btnScroll = document.querySelector('.smooth-scroll');

  window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop;
    if (top >= 900) {
      btnScroll.style.display = 'block';
    } else {
      btnScroll.style.display = 'none';
    }
  });

  btnScroll.addEventListener('click', () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
  });
};
export default scroll;
