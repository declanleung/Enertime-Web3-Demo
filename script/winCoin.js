// test wallet (! not real wallet ! no metamask connection)
// window.to_address = '0x500164062093e41eCBBaAe62a7Eb7a17021B7a07';
var to_address = localStorage.getItem('account');
var private_key = 'fd97ffa0d79c599d862c17d36562cc5f2f473eee880061db9cc0cb2a59c180b3';
var send_account = '0x1eFb4e9395c1295d3102AC445d48A969B8Ac4D17';
var contract_address="0xc803C4D053fe33E883EaD1d4251136028F06e498";
let gas_limit = "0x350000"

window.ethersProvider = new ethers.providers.InfuraProvider("goerli")
let wallet = new ethers.Wallet(private_key)
let walletSigner = wallet.connect(window.ethersProvider)

window.send_abi = [
    "function transfer(address to, uint tokens) public returns (bool success)"
]

function send_token(send_token_amount) {  
    window.ethersProvider.getGasPrice().then((currentGasPrice) => {
      let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
      console.log(`gas_price: ${gas_price}`)

      if (contract_address) {
        // general token send
        const contract = new ethers.Contract(
          contract_address,
          send_abi,
          walletSigner
        )
  
        // How many tokens?
        let numberOfTokens = ethers.utils.parseUnits(send_token_amount.toString(), 2)
        console.log(`numberOfTokens: ${numberOfTokens}`)
  
        // Send tokens
        contract.transfer(to_address, numberOfTokens).then((transferResult) => {
          console.dir(transferResult)
          alert("sent token")
        })
      } // ether send
      else {
        const tx = {
          from: send_account,
          to: to_address,
          value: ethers.utils.parseEther(send_token_amount),
          nonce: window.ethersProvider.getTransactionCount(
            send_account,
            "latest"
          ),
          gasLimit: ethers.utils.hexlify(gas_limit),
          gasPrice: gas_price,
        }
        console.dir(tx)
        try {
          walletSigner.sendTransaction(tx).then((transaction) => {
            console.dir(transaction)
            alert("Send finished!")
          })
        } catch (error) {
          alert("failed to send!!")
        }
      }
    })
}
  