const moreBtn = document.querySelector('.more-btn');
const moreContainer = document.querySelector('.more-speakers');
const showText = document.querySelector('.more-text');
const showIcon = document.querySelector('.fa-chevron-down');
const menuBar = document.querySelector('.menu');
const humBtn = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-xmark');
const Links = document.querySelectorAll('.link');
const desktopSpeakers = document.querySelectorAll('.speaker-desktop');
const firstMobileSpeakers = document.querySelectorAll('.speaker.first');
const moreSpeakers = document.querySelectorAll('.speaker.more');

const speakerData = [
  {
    name: 'Tobia koppers',
    image: './images/tobias-koppers.jpg',
    title: 'creater of webpack',
    about:
      'Working full time or open source. Father of two children. Likes to play board games',
  },
  {
    name: 'Rik Arends',
    image: './images/Rik Arends.jpg',
    title: 'React Developer',
    about: 'Working full time or open source, now working on react',
  },

  {
    name: 'Eleftheria Batsou',
    image: './images/Eleftheria Batsou.jpg',
    title: 'Manager at Hashnode ',
    about:
      'She has created tech courses for several platforms such as Packt, Udemy, and Skillshare ',
  },
  {
    name: 'Eva Ferreira',
    image: './images/Eva Ferreira.jpg',
    title: 'Front End Developer',
    about:
      'Eva is a Front-End developer who loves cats and makes many Harry Potter jokes.',
  },
  {
    name: 'Kyle Simpson',
    image: './images/Kyle Simpson.jpg',
    title: 'Software Engineer, Public Speaker, and Teacher, USA',
    about:
      'Kyle Simpson likes to explore JS and FP techniques and mentoring junior Devs',
  },
  {
    name: 'Evan You',
    image: './images/Evan You.jpg',
    title: 'Vue.js & Vite Creator, USA',
    about:
      'Evan is an independent software developer and the creator of the open source JavaScript framework Vue.js.',
  },
];

let show = false;
function showMore() {
  if (show) {
    moreContainer.classList.remove('show');
    showText.innerText = 'MORE';
    showIcon.classList.remove('fa-chevron-up');
    show = false;
  } else {
    moreContainer.classList.add('show');
    showText.innerText = 'LESS';
    showIcon.classList.add('fa-chevron-up');
    show = true;
  }
}
moreBtn.addEventListener('click', showMore);
humBtn.addEventListener('click', () => {
  menuBar.classList.toggle('on');
});
closeMenu.addEventListener('click', () => {
  menuBar.classList.toggle('on');
});

Links.forEach((item) => {
  item.addEventListener('click', () => {
    menuBar.classList.toggle('on');
  });
});

for (let i = 0; i < desktopSpeakers.length; i += 1) {
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('speaker-div');
  speakerDiv.innerHTML = `
  <img
  src="${speakerData[i].image}"
  alt="speaker-img"
  class="speaker-img"
/>
<div class="speaker-details">
  <h2 class="name">${speakerData[i].name}</h2>
  <p class="speaker-description">
    <i class="italic">${speakerData[i].title}</i>
  </p>
  <div class="speaker-underline"></div>
  <p class="about-speaker">${speakerData[i].about}</p>
</div>
  `;
  desktopSpeakers[i].appendChild(speakerDiv);
}

for (let i = 0; i < firstMobileSpeakers.length; i += 1) {
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('speaker-div');
  speakerDiv.innerHTML = `
  <img
  src="${speakerData[i].image}"
  alt="speaker-img"
  class="speaker-img"
/>
<div class="speaker-details">
  <h2 class="name">${speakerData[i].name}</h2>
  <p class="speaker-description">
    <i class="italic">${speakerData[i].title}</i>
  </p>
  <div class="speaker-underline"></div>
  <p class="speaker-description">${speakerData[i].about}</p>
</div>
  `;
  firstMobileSpeakers[i].appendChild(speakerDiv);
}

for (let i = 2; i < moreSpeakers.length; i += 1) {
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('speaker-div');
  speakerDiv.innerHTML = `
  <img
  src="${speakerData[i].image}"
  alt="speaker-img"
  class="speaker-img"
/>
<div class="speaker-details">
  <h2 class="name">${speakerData[i].name}</h2>
  <p class="speaker-description">
    <i class="italic">${speakerData[i].title}</i>
  </p>
  <div class="speaker-underline"></div>
  <p class="speaker-description">${speakerData[i].about}</p>
</div>
  `;
  moreSpeakers[i].appendChild(speakerDiv);
}
