const buttonNode = document.querySelector('.js-btn');
const containerNode = document.querySelector('.js-container');
const textNode = document.querySelector('.js-text');
const titleNode = document.querySelector('.js-title');

function getNewActivity() {
   fetch('https://www.boredapi.com/api/activity/')
      .then(response => response.json())
      .then(data => {
         textNode.innerHTML = data.activity;
         renderUpdatedAppearance();
   })
   .catch(error => {
      console.error('Ошибка при выполнении запроса на API: ', error);
   });
};

function renderUpdatedAppearance() {
   containerNode.classList.add('container_green');
   titleNode.innerText = 'Ура, теперь не скучно \u{1F525}';
}

buttonNode.addEventListener('click', getNewActivity);