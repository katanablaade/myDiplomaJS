const sendForm = ({ formId, someElem = [] }) => {
  formId.forEach((forms) => {
    const form = document.getElementById(forms);

    const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
    };

    const submitForm = () => {
      const formElements = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((value, key) => {
        formBody[key] = value;
      });

      someElem.forEach((elem) => {
        const element = document.getElementById(elem.id);
        if (element) {
          formBody[elem.id] = element.value;
        }
      });

      sendData(formBody)
        .then((data) => {
          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    try {
      if (!form) {
        throw new Error('Верните форму на место, пожалуйста');
      }
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        submitForm();
      });
    } catch (error) {
      console.log(error.message);
    }
  });
};
export default sendForm;
