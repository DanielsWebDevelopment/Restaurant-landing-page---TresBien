const navbarToggle = document.getElementById('navbar-toggle');
const sidebar = document.getElementById('sidebar_nav');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    var faqQuestions = document.querySelectorAll(".question-text");
  
    faqQuestions.forEach(function(question) {
      // Add click event listener to toggle button
      const toggleButton = question.querySelector(".f-toggle-btn");
      toggleButton.addEventListener("click", function(e) {
        e.preventDefault();
  
        const answer = question.querySelector(".answer");
        answer.classList.toggle("hidden");
      });
    });
  });

function menuItems(){
  const menuContent = document.getElementById('menu__content');

  const specialsMenu = `
  <div class="specials_menu">
    <div class="specials__cards" id="specials_cards">
      <div class="specials_card">
        <div class="specials__image">
          <img src="./assets/food3.jpg" />
        </div>
        <div class="specials__title">
          <small>Special Dish</small>
        </div>
        <div class="specials__desc">
          <p>Indulge in our flavorful special dish of the day</p>
        </div>
        
        <div class="specials_options">
          <div class="special_options-title">
            <span>Limited Time</span>
          </div>
          <div class="special_options-title">
            <span>Chef's Pick</span>
          </div>
          <div class="special_options-title">
            <span>Customer Favorite</span>
          </div>
        </div>

        <div class="specials_info-cta">
          <a href="#">Learn More</a>
          <img src="./assets/arrow-right-line.png" />
        </div>
      </div>

      <div class="specials_card">
        <div class="specials__image">
          <img src="./assets/food4.jpg" />
        </div>
        <div class="specials__title">
          <small>Special Dish</small>
        </div>
        <div class="specials__desc">
          <p>Indulge in our flavorful special dish of the day</p>
        </div>
        
        <div class="specials_options">
          <div class="special_options-title">
            <span>Limited Time</span>
          </div>
          <div class="special_options-title">
            <span>Chef's Pick</span>
          </div>
          <div class="special_options-title">
            <span>Customer Favorite</span>
          </div>
        </div>

        <div class="specials_info-cta">
          <a href="#">Learn More</a>
          <img src="./assets/arrow-right-line.png" />
        </div>
      </div>
    </div>

    <div class="viewmore-btn">
      <div class="vm-btn" id="vm-btn">
        <a href="#">View More</a>
      </div>
    </div>

    <div class="specials__cards1" id="specials_cards1">
     
    </div>
  </div>`;

  menuContent.innerHTML += specialsMenu;
}

menuItems();

const vmBtn = document.getElementById('vm-btn');
const specialCards1 = document.getElementById('specials_cards1');

vmBtn.addEventListener('click', () => {
  specialCards1.innerHTML = '';

  const newCards = `
    <div class="specials_card new-specials-card">
        <div class="specials__image new-specials-image">
            <img src="./assets/new2.jpg" />
        </div>
        <div class="specials__title new-specials-title">
            <small>New Special Dish</small>
        </div>
        <div class="specials__desc new-specials-desc">
            <p>Try our delicious new special dish!</p>
        </div>
                    
        <div class="specials_options new-specials-opt">
            <div class="special_options-title new-specials-op-tl">
                <span>Limited Time</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Chef's Pick</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Customer Favorite</span>
            </div>
        </div>

          <div class="specials_info-cta  new-specials-inf-cta">
            <a href="#">Learn More</a>
            <img src="./assets/arrow-right-line.png" />
          </div>
        </div>
      </div>
      <div class="specials_card new-specials-card">
        <div class="specials__image new-specials-image">
            <img src="./assets/new1.jpg" />
        </div>
        <div class="specials__title new-specials-title">
            <small>New Special Dish</small>
        </div>
        <div class="specials__desc new-specials-desc">
            <p>Try our delicious new special dish!</p>
        </div>
                    
        <div class="specials_options new-specials-opt">
            <div class="special_options-title new-specials-op-tl">
                <span>Limited Time</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Chef's Pick</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Customer Favorite</span>
            </div>
        </div>

          <div class="specials_info-cta  new-specials-inf-cta">
            <a href="#">Learn More</a>
            <img src="./assets/arrow-right-line.png" />
          </div>
        </div>
      </div>

      <div class="specials_card new-specials-card">
        <div class="specials__image new-specials-image">
            <img src="./assets/new3.jpg" />
        </div>
        <div class="specials__title new-specials-title">
            <small>New Special Dish</small>
        </div>
        <div class="specials__desc new-specials-desc">
            <p>Try our delicious new special dish!</p>
        </div>
                    
        <div class="specials_options new-specials-opt">
            <div class="special_options-title new-specials-op-tl">
                <span>Limited Time</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Chef's Pick</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Customer Favorite</span>
            </div>
        </div>

          <div class="specials_info-cta  new-specials-inf-cta">
            <a href="#">Learn More</a>
            <img src="./assets/arrow-right-line.png" />
          </div>
        </div>
      </div>
      
      <div class="specials_card new-specials-card">
        <div class="specials__image new-specials-image">
            <img src="./assets/mg9.jpg" />
        </div>
        <div class="specials__title new-specials-title">
            <small>New Special Dish</small>
        </div>
        <div class="specials__desc new-specials-desc">
            <p>Try our delicious new special dish!</p>
        </div>
                    
        <div class="specials_options new-specials-opt">
            <div class="special_options-title new-specials-op-tl">
                <span>Limited Time</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Chef's Pick</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Customer Favorite</span>
            </div>
        </div>

          <div class="specials_info-cta  new-specials-inf-cta">
            <a href="#">Learn More</a>
            <img src="./assets/arrow-right-line.png" />
          </div>
        </div>
      </div>
      
      <div class="specials_card new-specials-card">
        <div class="specials__image new-specials-image">
            <img src="./assets/mg11.jpg" />
        </div>
        <div class="specials__title new-specials-title">
            <small>New Special Dish</small>
        </div>
        <div class="specials__desc new-specials-desc">
            <p>Try our delicious new special dish!</p>
        </div>
                    
        <div class="specials_options new-specials-opt">
            <div class="special_options-title new-specials-op-tl">
                <span>Limited Time</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Chef's Pick</span>
            </div>
            <div class="special_options-title new-specials-op-tl">
                <span>Customer Favorite</span>
            </div>
        </div>

          <div class="specials_info-cta  new-specials-inf-cta">
            <a href="#">Learn More</a>
            <img src="./assets/arrow-right-line.png" />
          </div>
        </div>
      </div>`;

      specialCards1.innerHTML = newCards;
      vmBtn.style.display = 'none';
});