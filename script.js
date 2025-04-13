async function connectWallet() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    document.getElementById('walletAddress').innerText = "Connected: " + accounts[0];
  } else {
    alert('MetaMask not detected');
  }
}

function copyAddress() {
  const copyText = document.getElementById("tokenAddress");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied: " + copyText.value);
}

function spinNow() {
  const reward = Math.floor(Math.random() * 100) + 1;
  document.getElementById('spinResult').innerText = "You won " + reward + " RUP Tokens!";
}

function claimReward() {
  alert("Please fill the Google Form to claim your reward.");
  window.open("https://docs.google.com/forms/d/1c7wCT1bU1dqFXz-JdyZDlF8eCUgvNqr4KA3M3kH-42U/viewform", "_blank");
}
