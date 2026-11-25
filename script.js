const button = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');

if (button && moreText) {
  button.addEventListener('click', () => {
    moreText.classList.toggle('d-none');
    button.textContent = moreText.classList.contains('d-none')
      ? 'Подробнее'
      : 'Скрыть';
  });
}

const themeBtn = document.querySelector('#theme');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.textContent = document.body.classList.contains('dark-theme')
      ? 'Светлая тема'
      : 'Тёмная тема';
  });
}

const form = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const comment = document.querySelector('#comment').value;

    if (!name || !email.includes('@') || !comment) {
      formMessage.textContent = 'Заполни все поля и проверь email';
      formMessage.className = 'text-danger';
    } else {
      formMessage.textContent = 'Спасибо, ' + name + '!';
      formMessage.className = 'text-success';
    }
  });
}

const projects = [
  { title: 'Открытый мир', tech: 'Реалистичная Богемия XV века: города, замки и леса' },
  { title: 'Боевая система', tech: 'Историческое фехтование, арбалеты и раннее огнестрельное оружие' }
];

const list = document.querySelector('#projects');

if (list) {
  list.innerHTML = projects.map(project => `
    <div class="col-12 col-md-6">
      <article class="card p-3 shadow-sm">
        <h3>${project.title}</h3>
        <p>${project.tech}</p>
      </article>
    </div>
  `).join('');
}
