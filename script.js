function copyTokenAddress() {
  const tokenAddress = "0xAa93C8282927c384e5C40C8C0fE11a4B860B6074";
  navigator.clipboard.writeText(tokenAddress).then(() => {
    alert("Token Address Copied: " + tokenAddress);
  });
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
