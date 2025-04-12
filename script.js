function copyTokenAddress() {
  const tokenAddress = "0xAa93C8282927c384e5C40C8C0fE11a4B860B6074";
  navigator.clipboard.writeText(tokenAddress).then(() => {
    alert("Token Address Copied: " + tokenAddress);
  });
}
