const validate = () => {
  const nameInput = document.querySelectorAll('.name-input');
  const phoneInput = document.querySelectorAll('.phone-input');

  const nameValidate = () => {
    nameInput.forEach((input) => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^A-Za-zА-Яа-яёЁ]+/g, '');
      });
    });
  };
  const phoneValidate = () => {
    phoneInput.forEach((input) => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^+0-9]/g, '');
        if (input.value.length > 16) {
          input.value = input.value.slice(0, 16);
        }
      });
    });
  };
  nameValidate();
  phoneValidate();
};
export default validate;
