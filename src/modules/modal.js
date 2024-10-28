const modal = () => {
  const btn = document.querySelector('.btn-header');
  const modal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  console.log(overlay);

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'block';
    modal.classList.add('header-modal--opened');
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('.header-modal__close')) {
      overlay.style.display = 'none';
      modal.classList.remove('header-modal--opened');
    }
  });
};

export default modal;
