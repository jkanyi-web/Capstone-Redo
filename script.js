// Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Speakers Section - Dynamic
const speakers = document.querySelector('.speakers');
const fSpeakers = document.createElement('div');
const ul = document.createElement('ul');

fSpeakers.innerHTML = `
   <h1>Featured Speakers</h1>
     <div class="orangeLine"></div>
`;

speakers.append(fSpeakers);
speakers.append(ul);

const presentation = document.querySelector('.speakers ul');

const candidates = [
  {
    Id: 1,
    name: 'Victor Kanyi',
    profession: 'Professor of Physical health and Biology at Harvard fitness School',
    description: 'Kanyi Victor studies and practices static fitness, and published his seminal book - The Wealth of fitness in 2006.',
    image: './images/profile.jpg',
  },
  {
    Id: 2,
    name: 'Jupiter Mars',
    profession: 'Executive director of the Wikimedia Foundation',
    description: 'Jupiter is the Executive Director of the Wikimedia Foundation, the nonprofit.',
    image: './images/profile.jpg',
  },
  {
    Id: 3,
    name: 'Catherine Nancy',
    profession: 'Berkman Professor of Medicine and Biological Health Studies at Strathmore University',
    description: 'Nancy studies Biology and Advanced Genetics, and published the most sought after fitness educational article, The Power of Biology in 2021',
    image: './images/profile.jpg',
  },
  {
    Id: 4,
    name: 'John Collins',
    profession: 'Internationally reknown and successful Physician and physical wellness activist',
    description: 'Collins studies Physical wellness, and published his seminal book The Fit Body & Mind in 2011',
    image: './images/profile.jpg',
  },
  {
    Id: 5,
    name: 'Austin Dunham',
    profession: 'Professor of Art in Humanitarian Sciences Cambridge University',
    description: 'Austin Dunham studies and practices static fitness, and published his seminal book - The Wealth of fitness in 2006.',
    image: './images/profile.jpg',
  },
  {
    Id: 6,
    name: 'Hassan Abdi',
    profession: 'Professor of Physical health and Biology at Harvard fitness School',
    description: 'Hassan studies and practices static fitness, and published his seminal book - The Wealth of fitness in 2006.',
    image: './images/profile.jpg',
  },
];

candidates.forEach((candidate) => {
  const list = document.createElement('li');
  list.classList.add(`speaker${candidate.id}`);
  list.innerHTML = `
    <div class="speaker-image">
      <div class="bg"></div>
      <img src="${candidate.image}" alt="speaker image">
    </div>
    <div class="speaker-info">
      <h1>${candidate.name}</h1>
      <h5>${candidate.profession}</h5>
      <div class="orangeLine"></div>
      <h6>${candidate.description}</h6>
    </div>  
  `;
  presentation.append(list);
});
