// форма входа
let message =  document.getElementById('message');

document.getElementById('signinForm').addEventListener('submit', function(event) 
{
  event.preventDefault();

  let email = document.getElementById('signinEmail').value.trim();
  let password = document.getElementById('signinPassword').value.trim();

  if(email === 'iryna@gmail.com' && password === 'iryna1234')
  {
    message.textContent = 'Login successfull!';
    message.style.color = 'green';
    setTimeout(() => {window.location.href = 'registration.html';}, 2000);
  }
  else
  {
    message.textContent = 'Invalid password or login';
    message.style.color = 'red';
  }
}
);

// закрытие и открытие формы входа и регистрации
document.getElementById('openBtn').addEventListener('click', (e) => {e.preventDefault();
  document.getElementById('signin').style.display = 'block';
  document.body.classList.add('no-scroll');
  document.getElementById('overlay').classList.add('active');});
document.getElementById('closeBtn').addEventListener('click', () =>{
  document.getElementById('signin').style.display = 'none'; 
  document.body.classList.remove('no-scroll');
  document.getElementById('overlay').classList.remove('active');});

document.getElementById('registerBtn').addEventListener('click', (e) => {e.preventDefault();
  document.getElementById('signin').style.display = 'none';});
document.getElementById('registerBtn').addEventListener('click', (e) => {e.preventDefault();
  document.getElementById('register').style.display = 'block';});

// открытие и закрытие доп. блоков
document.getElementById('whereBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('wherePanel').style.display = 'block';
});

document.getElementById('wherePanel').addEventListener('click', e => e.stopPropagation());
document.addEventListener('click', () => {
  document.getElementById('wherePanel').style.display = 'none';
});


document.getElementById('datesBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('datesPanel').style.display = 'block';
});

document.getElementById('datesPanel').addEventListener('click', e => e.stopPropagation());
document.addEventListener('click', () => {
  document.getElementById('datesPanel').style.display = 'none';
});


// сокращение и разворачивание хеддера

const full = document.getElementById('headerFull');
const mini = document.getElementById('headerMini');
full.classList.add('is-shown');
mini.classList.add('is-hidden');

window.addEventListener('scroll', () => {
  const atTop = window.scrollY < 5;

  full.classList.toggle('is-shown', atTop);
  full.classList.toggle('is-hidden', !atTop);

  mini.classList.toggle('is-shown', !atTop);
  mini.classList.toggle('is-hidden', atTop);
});
document.body.classList.add('js-ready');

