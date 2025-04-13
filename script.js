const tokenAddress = "0xAa93C8282927c384e5C40C8C0fE11a4B860B6074";
const tokenDecimals = 18;

async function connectWallet() {
  if (window.ethereum) {
    await ethereum.request({ method: 'eth_requestAccounts' });
    window.web3 = new Web3(window.ethereum);
  } else {
    alert("Please install MetaMask to use this feature.");
  }
}

async function checkBalance() {
  await connectWallet();
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  const wallet = accounts[0];

  const contract = new web3.eth.Contract([
    { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }],
      "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }],
      "type": "function" }
  ], tokenAddress);

  const balance = await contract.methods.balanceOf(wallet).call();
  document.getElementById("balance").innerText = Balance: ${balance / (10 ** tokenDecimals)} RUP;
}

function claimTokens() {
  window.open("https://docs.google.com/forms/d/1c7wCT1bU1dqFXz-JdyZDlF8eCUgvNqr4KA3M3kH-42U/viewform", "_blank");
}

function copyTokenAddress() {
  const copyText = document.getElementById("tokenAddress");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Token address copied!");
}

function spinWheel() {
  alert("Spin & Win Coming Soon!");
}
