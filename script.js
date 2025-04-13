function copyTokenAddress() {
  const address = document.getElementById("tokenAddress").innerText;
  navigator.clipboard.writeText(address);
  alert("Token Address Copied!");
}

function spinWheel() {
  const rewards = [5, 10, 15, 25, 0];
  const reward = rewards[Math.floor(Math.random() * rewards.length)];
  document.getElementById("rewardText").innerText = reward > 0 
    ? Congratulations! You won ${reward} RUP Tokens. 
    : "Try again! Better luck next time.";
}

function checkBalance() {
  const wallet = document.getElementById("walletAddress").value;
  if (!wallet) {
    alert("Please enter your wallet address.");
    return;
  }
  // Dummy balance check
  document.getElementById("balanceResult").innerText = Wallet ${wallet} has 100 RUP Tokens.;
}
