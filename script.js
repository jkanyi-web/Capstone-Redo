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

// speakers section
const speakers = document.querySelector('.speakers');
speakers.innerHTML = `
  <h1>Featured Speakers</h1>
    <div class="orangeLine"></div>

    <div class="speakersContainer">
      <div class="firstLot">
        <div class="featuredSpeakers">
          <div class="image">
            <img src="./images/profile.jpg" alt="speaker image" class="profileImg">
          </div>
          <div class="details">
            <h1>Victor Kanyi</h1>
            <h5 class="profession">Professor of Physical health and Biology at Harvard fitness School</h5>
            <div class="orangeLine"></div>
            <h6 class="description">Kanyi Victor studies and practices static fitness, and published his seminal book
              The Wealth of fitness in 2006.</h6>
          </div>
        </div>

        <div class="featuredSpeakers">
          <div class="image">
            <img src="./images/profile.jpg" alt="speaker image" class="profileImg">
          </div>
          <div class="details">
            <h1>Jupiter Mars</h1>
            <h5 class="profession">Executive director of the Wikimedia Foundation</h5>
            <div class="orangeLine"></div>
            <h6 class="description">Jupiter is the Executive Director of the Wikimedia Foundation, the nonprofit
              organization that operates Wikimedia.</h6>
          </div>
        </div>

        <div class="featuredSpeakers">
          <div class="image">
            <img src="./images/profile.jpg" alt="speaker image" class="profileImg">
          </div>
          <div class="details">
            <h1>Catherine Nancy</h1>
            <h5 class="profession">Berkman Professor of Medicine and Biological Health Studies at Strathmore University
            </h5>
            <div class="orangeLine"></div>
            <h6 class="description">Nancy studies Biology and Advanced Genetics, and published the most sought after
              fitness educational article, The Power
              of Biology in 2021
            </h6>
          </div>
        </div>
      </div>

      <div class="secondLot">
        <div class="featuredSpeakers">
          <div class="image">
            <img src="./images/profile.jpg" alt="speaker image" class="profileImg">
          </div>
          <div class="details">
            <h1>John Collins</h1>
            <h5 class="profession">Internationally reknown and successful Physician and physical wellness activist</h5>
            <div class="orangeLine"></div>
            <h6 class="description">Collins studies Physical wellness, and published his seminal book The Fit Body &
              Mind in 2011.</h6>
          </div>
        </div>

        <div class="featuredSpeakers">
          <div class="image">
            <img src="./images/profile.jpg" alt="speaker image" class="profileImg">
          </div>
          <div class="details">
            <h1>Oguzie-Ibeh Richard</h1>
            <h5 class="profession">Director of Art Centre Nabi and a board member of CC Korea
            </h5>
            <div class="orangeLine"></div>
            <h6 class="description">As the main venue for new media art production in Korea, Richard promotes
              cross-disiplinary collaboration.</h6>
          </div>
        </div>

        <div class="featuredSpeakers">
          <div class="image">
            <img src="./images/profile.jpg" alt="speaker image" class="profileImg">
          </div>
          <div class="details">
            <h1>Akachukwu Smart</h1>
            <h5 class="profession">Berkman Professor of Biological Studies at Harvard Medical School</h5>
            <div class="orangeLine"></div>
            <h6 class="description">Smart is an established and successful proactive body builder who has his career set
              on body building and is thus one of
              the best candidates to discuss matters physical healt</h6>
          </div>
          
        </div>
      </div>
    </div>
`;