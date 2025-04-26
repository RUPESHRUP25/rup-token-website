// Page initialization
function initPage() {
  createWheel();
  updatePointsDisplay();
  checkDailySpin();
  
  document.getElementById('spin-button').addEventListener('click', showAdModal);
}

// Wheel functions
function createWheel() {
  const wheel = document.getElementById("wheel");
  wheel.innerHTML = '';
  
  const prizes = [
    { text: "150 Points", color: "#FF5252", value: 150 },
    { text: "250 Points", color: "#FF4081", value: 250 },
    { text: "200 Points", color: "#E040FB", value: 200 },
    { text: "300 Points", color: "#7C4DFF", value: 300 },
    { text: "350 Points", color: "#536DFE", value: 350 },
    { text: "400 Points", color: "#448AFF", value: 400 },
    { text: "450 Points", color: "#40C4FF", value: 450 },
    { text: "500 Points", color: "#18FFFF", value: 500 }
  ];
  
  const anglePerSector = 360 / prizes.length;

  prizes.forEach((prize, index) => {
    const sector = document.createElement("div");
    sector.classList.add("sector");
    sector.style.transform = `rotate(${index * anglePerSector}deg)`;
    sector.style.backgroundColor = prize.color;
    
    const prizeText = document.createElement("div");
    prizeText.textContent = prize.text;
    
    sector.appendChild(prizeText);
    wheel.appendChild(sector);
  });
}

function spinWheel() {
  // ... existing spin wheel logic ...
  // Update with Firebase save:
  points += reward;
  saveDataToFirebase('points', points);
  
  rewardsHistory.unshift({
    points: reward,
    date: new Date().toISOString(),
    type: 'spin'
  });
  saveDataToFirebase('rewards', rewardsHistory);
}
