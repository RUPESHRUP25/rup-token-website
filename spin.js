let wallet = 0;

document.getElementById('spinBtn').addEventListener('click', () => {
  const wheel = document.getElementById('wheel');
  const result = document.getElementById('result');
  const walletDisplay = document.getElementById('wallet');

  // Spin wheel randomly
  const degree = Math.floor(3600 + Math.random() * 360);
  wheel.style.transform = `rotate(${degree}deg)`;

  // Simulate prize logic
  setTimeout(() => {
    const prizes = [5, 10, 15, 20, 25, 50];
    const win = prizes[Math.floor(Math.random() * prizes.length)];
    wallet += win;
    result.innerText = `🎉 You won ${win} points!`;
    walletDisplay.innerText = wallet;
  }, 3000); // after animation ends
});
