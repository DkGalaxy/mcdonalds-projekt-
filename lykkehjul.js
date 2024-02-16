//Lykkehjul

let spinning = false;

const wheelSections = [
    { prize: "en Cheeseburger", startAngle: 0, endAngle: 60 },
    { prize: "en lille Cola", startAngle: 60, endAngle: 120 },
    { prize: "en lille Pommes Frites", startAngle: 120, endAngle: 180 },
    { prize: "en Sundae", startAngle: 180, endAngle: 240 },
    { prize: "en kop Filterkaffe", startAngle: 240, endAngle: 300 },
    { prize: "3 stk. Chili Cheese Tops", startAngle: 300, endAngle: 360 }
];

function spinWheel(spinCount, spinsCompleted = 0) {
    if (!spinning && spinsCompleted < spinCount) {
    spinning = true;

const randomAngle = Math.floor(Math.random() * 360);

const wheel = document.getElementById('wheel');

wheel.style.transition = 'transform 2s ease-in-out';
wheel.style.transform = `rotate(${randomAngle}deg)`;
   
setTimeout(() => {
    wheel.style.transition = 'none';
    wheel.style.transform = 'rotate(0deg)';

const normalizedAngle = (randomAngle + 360) % 360;
const winningSection = wheelSections.find(section => 
    normalizedAngle >= section.startAngle && normalizedAngle < section.endAngle
    );

const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = `Tillykke! Du har vundet ${winningSection.prize}`;

const popup = document.getElementById('popup');
    popup.style.display = 'block';

setTimeout(() => {
    popup.style.display = 'none';
    spinning = false;

        spinWheel(spinCount, spinsCompleted + 1);
    }, 2000);
}, 2000); 
}
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

const spinBtn = document.getElementById('spinBtn');
spinBtn.addEventListener('click', () => {
    spinWheel(1);
});