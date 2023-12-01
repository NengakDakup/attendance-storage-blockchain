const Web3 = require('web3');
// configure the dotenv for loading variables from the env file
const dotenv = require("dotenv");
dotenv.config()

const contractAddress = process.env.contractAddress;
const contractABI = '';

// Connect to your Ethereum node
// const web3 = new Web3(process.env.blockchainNodeURL); 


// const contract = new web3.eth.Contract(contractABI, contractAddress);

async function storeData(req, res){
    try {
        // Assuming the incoming data is in the request body
        const data = req.body.data; 

        // Call the smart contract's storeData function
        const accounts = await web3.eth.getAccounts();
        await contract.methods.storeData(data).send({
            from: accounts[0], // Use an appropriate account
        });

        res.status(200).json({ success: true, message: 'Data stored successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to store data' });
    }

}

module.exports = {storeData}