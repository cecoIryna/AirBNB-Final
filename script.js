// форма входа
let message1 =  document.getElementById('signinMessage');

document.getElementById('signinForm').addEventListener('submit', function(event) 
{
  event.preventDefault();

  let email = document.getElementById('signinEmail').value.trim();
  let password = document.getElementById('signinPassword').value.trim();

  if(email === 'iryna@gmail.com' && password === 'iryna1234')
  {
    message1.textContent = 'Login successfull!';
    message1.style.color = 'green';
    setTimeout(() => {window.location.href = 'registration.html';}, 2000);
  }
  else
  {
    message1.textContent = 'Invalid password or login';
    message1.style.color = 'red';
  }
}
);

let message2 =  document.getElementById('registerMessage');
document.getElementById('registerForm').addEventListener('submit', function(event) 
{
  event.preventDefault();

  let reg_email = document.getElementById('registerEmail').value.trim();
  let reg_password = document.getElementById('registerPassword').value.trim();
  let reg_repassword = document.getElementById('registerRepassword').value.trim();

  if(reg_email === 'iryna@gmail.com' && reg_password === 'iryna1234')
  {
    message2.textContent = 'You already registered';
    message2.style.color = 'red';
  }
  else if(reg_email === 'iryna@gmail.com')
  {
    message2.textContent = 'This user already exist';
    message2.style.color = 'red';
  }
  else if(reg_password === reg_repassword && reg_password.length>0 && reg_password.length<=50 && reg_email)
  {
    message2.textContent = 'Registration successfull!';
    message2.style.color = 'green';
    setTimeout(() => {window.location.href = 'index.html';}, 2000);
  }
  else
  {
    message2.textContent = 'Registration failed!';
    message2.style.color = 'red';
  }
}
);
// закрытие и открытие формы входа и регистрации
document.getElementById('openBtn').addEventListener('click', (e) => {e.preventDefault();
  document.getElementById('signin').style.display = 'block';
  document.body.classList.add('no-scroll');
  document.getElementById('overlay').classList.add('active');});
document.getElementById('closeBtnSig').addEventListener('click', () =>{
  document.getElementById('signin').style.display = 'none'; 
  document.body.classList.remove('no-scroll');
  document.getElementById('overlay').classList.remove('active');});

document.getElementById('registerBtn').addEventListener('click', (e) => {e.preventDefault();
  document.getElementById('signin').style.display = 'none';});
document.getElementById('registerBtn').addEventListener('click', (e) => {e.preventDefault();
  document.getElementById('register').style.display = 'block';});

document.getElementById('closeBtnReg').addEventListener('click', () =>{
  document.getElementById('register').style.display = 'none'; 
  document.body.classList.remove('no-scroll');
  document.getElementById('overlay').classList.remove('active');});

// открытие и закрытие доп. блоков
document.getElementById('whereBtn').addEventListener('click', (e) => {e.stopPropagation();
document.getElementById('wherePanel').style.display = 'block'; 
document.getElementById('whereBtn').classList.add('active');});

document.getElementById('wherePanel').addEventListener('click', e => e.stopPropagation());
document.addEventListener('click', () => {document.getElementById('wherePanel').style.display = 'none';
document.getElementById('whereBtn').classList.remove('active');});


document.getElementById('datesBtn').addEventListener('click', (e) => {e.stopPropagation();
document.getElementById('datesPanel').style.display = 'block';
document.getElementById('datesBtn').classList.add('active');});

document.getElementById('datesPanel').addEventListener('click', e => e.stopPropagation());
document.addEventListener('click', () => {document.getElementById('datesPanel').style.display = 'none';
document.getElementById('datesBtn').classList.remove('active');});


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

