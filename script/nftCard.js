const attributes = new Array();
let count = 0;
function getData(address) {
        (async () => {
            // need to change this to the address of the user
            // address = '0xc2ccc02d040c9ab7bd869a8f4efcb3d0b4c85ee9'
            address = localStorage.getItem("account");
            console.log(address)
            // need to change this to the address of the contract 
            contract_address = "0x9744aeAa1e77835552246C999C83c06968421435"
            // need to change this to the tokenid of the contract
            const tokenIds = ['0', '1', '2']

            for (const tokenId of tokenIds) {
                const response = await fetch('https://eth-goerli.g.alchemy.com/nft/v2/rg_2mBENf6HH-qafRrtBrYZwMCV3B_fs/getOwnersForToken?contractAddress=' + contract_address + '&tokenId=' + tokenId, {
                    headers: {
                        'Accept': 'application/json',
                        'Host': 'eth-goerli.g.alchemy.com'
                    }
                });
                const data = await response.json();

                console.log(data.owners)

                if (data.owners.includes(address)) {
                    console.log("true")
                    const response_metadata = await fetch('https://eth-goerli.g.alchemy.com/nft/v2/rg_2mBENf6HH-qafRrtBrYZwMCV3B_fs/getNFTMetadata?contractAddress='+ contract_address + '&tokenId=' + tokenId + '&refreshCache=false', {
                        headers: {
                            'Accept': 'application/json',
                            'Host': 'eth-goerli.g.alchemy.com'
                        }
                    });
                    const nftData = await response_metadata.json();
                    console.log(nftData)
                    if (nftData.metadata.image.includes("ipfs://")) {
                        imgURL = "https://cf-ipfs.com/ipfs/" + nftData.metadata.image.split("//")[1]
                    } else {
                        imgURL = nftData.metadata.image
                    }
                    // attributes.push(nftData.metadata.attributes);

                    const container = document.getElementById('cards');

                    function returnCards() {
                        return "<div class=\"cards\">" + `
                        <div>
                        <div class="card">
                            <img src="${imgURL}" alt="NFT" style="height: 300px;width:auto">
                            <section id="text">
                            <div class="container">
                                <h3 id="nftName">${nftData.title}</h3>
                                <p id="nftDescription">Description: ${nftData.description}</p>
                            </div>
                            <br>
                            </section>
                        </div>
                        </div>
                        `;
                    }
                
                    container.innerHTML += returnCards();


                } else {
                    console.log("false")
                }
                count++;
            }
    
      })();
}
