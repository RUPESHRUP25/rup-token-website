function spin() {
  const rewards = ["5 RUP", "10 RUP", "20 RUP", "50 RUP", "Try Again"];
  const selected = rewards[Math.floor(Math.random() * rewards.length)];

  document.getElementById('result').innerText = You won: ${selected};

  if (selected !== "Try Again") {
    const claimUrl = https://docs.google.com/forms/d/1c7wCT1bU1dqFXz-JdyZDlF8eCUgvNqr4KA3M3kH-42U/viewform?usp=pp_url&entry.1234567890=${selected};
    const claimBtn = document.getElementById('claimBtn');
    claimBtn.href = claimUrl;
    claimBtn.style.display = 'inline-block';
  } else {
    document.getElementById('claimBtn').style.display = 'none';
  }
}
