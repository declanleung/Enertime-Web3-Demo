const connectButton = document.getElementById("connectButton");
const walletID = document.getElementById("walletID");
const reloadButton = document.getElementById("reloadButton");
const installAlert = document.getElementById("installAlert");

window.isConnected = false;

const startLoading = () => {
  connectButton.classList.add("loadingButton");
};

const stopLoading = () => {
  const timeout = setTimeout(() => {
    connectButton.classList.remove("loadingButton");
    clearTimeout(timeout);
  }, 300);
};

connectButton.addEventListener("click", () => {
  if (typeof window.ethereum !== "undefined") {
    startLoading();

    ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        localStorage.setItem("account",accounts[0]);
        var account = accounts[0];
        walletID.innerHTML = `Wallet connected: <span>${account}</span>`;
        window.isConnected = true;
        // console.log(account);

        getData(account)

        stopLoading();
        
      })
      .catch((error) => {
        console.log(error, error.code);

        alert(error.code);
        stopLoading();
      });
  } else {
    if (isMobile()) {
      mobileDeviceWarning.classList.add("show");
    } else {
      window.open("https://metamask.io/download/", "_blank");
      installAlert.classList.add("show");
    }
  }
});

reloadButton.addEventListener("click", () => {
  window.location.reload();
});
