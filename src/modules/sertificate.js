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
      const modalSertificateClose = document.createElement('span');

      overlay.style.display = 'block';
      modalSertificate.innerHTML = `<img class="img-sertificate" src= "./images/documents/original/document4.jpg"></img>`;
      modalSertificate.classList.add('is-open');
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
