import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import sendForm from './modules/sendForm';
import validate from './modules/validate';
import sertificate from './modules/sertificate';

modal();
slider();
timer('3 november 2024');
validate();
sendForm({
  formId: ['form1', 'form2'],
  someElem: [{ type: 'number', id: 'calc-total' }],
});
sertificate();
