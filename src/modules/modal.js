const modal = () => {
  const btn = document.querySelector('.btn-header');
  const modal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  const btnMeasurer = document.querySelectorAll('.btn-sm');
  const servicesModal = document.querySelector('.services-modal');

  const mesure = () => {
    btnMeasurer.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.display = 'block';
        servicesModal.classList.add('services-modal--opened');
      });
    });
  };

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

  servicesModal.addEventListener('click', (e) => {
    if (e.target.closest('.services-modal__close')) {
      overlay.style.display = 'none';
      servicesModal.classList.remove('services-modal--opened');
    }
  });

  mesure();
};

export default modal;
