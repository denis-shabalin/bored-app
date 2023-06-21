const buttonNode = document.querySelector('.bored__btn');
const containerNode = document.querySelector('.container');
const textNode = document.querySelector('.bored__text');
const titleNode = document.querySelector('.bored__title');

function getNewActivity() {
   fetch('https://www.boredapi.com/api/activity/')
      .then(response => response.json())
      .then(data => {
         textNode.innerHTML = data.activity;
         containerNode.classList.add('container_green');
         titleNode.innerText = 'Ура, теперь не скучно \u{1F525}';
   })
   .catch(error => {
      console.error('Ошибка при выполнении запроса на API: ', error);
   });
};

buttonNode.addEventListener('click', getNewActivity);