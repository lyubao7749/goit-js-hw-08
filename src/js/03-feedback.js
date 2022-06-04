import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

let formData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input' , throttle(onFormInput, 500));

getFormStorage();

function getFormStorage() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    
    if (savedFormData) {
      try {
        const parcedFormData = JSON.parse(savedFormData);
        refs.email.value = parcedFormData.email || '';
        refs.message.value = parcedFormData.message || '';  
      } catch (err) {
        console.log(err.stack);
      };
    
    }  
}
  
function onFormInput (event) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; 
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  //  console.log(localStorage.getItem(STORAGE_KEY));
}

function onFormSubmit(event) {
    event.preventDefault();
    if (refs.email.value === '' || refs.message.value === '') {
      return alert('Fill all the fields');
    } 
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
  