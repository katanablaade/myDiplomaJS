const sertificate = () => {
  const sertificateDocument = document.querySelectorAll(
    '.sertificate-document'
  );
  const overlay = document.querySelector('.overlay');

  const modalSertificate = document.createElement('div');
  modalSertificate.classList.add('modal-sertificate');
  document.body.append(modalSertificate);

  sertificateDocument.forEach((i) => {
    i.addEventListener('click', (e) => {
      e.preventDefault();

      overlay.style.display = 'block';
      modalSertificate.innerHTML = `<img class="img-sertificate" src= "./images/documents/original/document4.jpg"></img>`;
      modalSertificate.classList.add('is-open');
      const modalSertificateClose = document.createElement('span');
      modalSertificateClose.classList.add('close-sertificate');
      modalSertificateClose.textContent = 'x';
      modalSertificate.append(modalSertificateClose);
    });
  });

  modalSertificate.addEventListener('click', (e) => {
    if (e.target.matches('.close-sertificate')) {
      overlay.style.display = 'none';
      modalSertificate.classList.remove('is-open');
    }
  });
};
export default sertificate;
