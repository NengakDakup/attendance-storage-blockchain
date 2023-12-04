const { ethers } = require('ethers');
// ABI of smart contract
const contractABI = require('../abis/AttendanceStorage.json');

// configure the dotenv for loading variables from the env file
require("dotenv").config();

// contract details
const contractAddress = process.env.contractAddress;
const privateKey = process.env.privateKey;
// Ethereum node URL
const ethereumNodeURL = process.env.blockchainNodeURL;




async function storeData(req, res){
        try {
                // Connect to an Ethereum node
                const provider = new ethers.JsonRpcProvider(ethereumNodeURL);

                // Create a wallet using the private key
                const wallet = new ethers.Wallet(privateKey, provider);

                // Create a contract instance
                const contract = new ethers.Contract(contractAddress, contractABI, wallet);

                // Build the transaction
                const transaction = await contract.store(req.body);

                // Send the transaction
                const response = await wallet.sendTransaction(transaction);

                console.log('Transaction sent:', response.hash);
        } catch(error){
                console.error(error);
                res.status(500).json({success: false, message: error.message})
        }
        

   

}

module.exports = {storeData}