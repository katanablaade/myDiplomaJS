const validate = () => {
  const nameInput = document.querySelectorAll('.name-input');
  const phoneInput = document.querySelectorAll('.phone-input');
  const calcInput = document.getElementById('calc-input');

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

  const calcValidate = () => {
    calcInput.addEventListener('keydown', (event) => {
      if (event.key === '+' || event.key === '-') {
        event.preventDefault();
      }
    });
  };
  nameValidate();
  phoneValidate();
  if (calcInput) {
    calcValidate();
  }
};
export default validate;
