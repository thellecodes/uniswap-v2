// We import Chai to use its asserting functions here.
const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("UniswapV2Core, UniswapV2Factory, UniswapV2Pair", function () {

    let UniswapV2ERC20;
    let UniswapV2Factory;
    let UniswapV2ERC20Instance;
    let UniswapV2FactoryInstance;
    let deployer;
    let addr1;
    let token1;
    let token1Instance;
    let token2;
    let token2Instance;
    let createdPair;
    let EkoToken;
    let EkoTokenInstance;

    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
        EkoToken = await ethers.getContractFactory("EkoToken");
        token1 = await ethers.getContractFactory("Token1");
        token2 = await ethers.getContractFactory("Token2");

        [deployer, addr1] = await ethers.getSigners();
    });

    it("should deploy Uniswapv2Factory", async function () {
        // deploy factory contract
        UniswapV2FactoryInstance = await UniswapV2Factory.deploy(deployer.address);

        //deploy tokens
        token1Instance = await token1.deploy(1000);
        token2Instance = await token2.deploy(1000);
        EkoTokenInstance = await EkoToken.deploy(1000);


        console.log(`Contract Deployed by Account %s \n \n`, deployer.address);
        console.log(`Local Uniswapv2Factory address %s  \n \n `, UniswapV2FactoryInstance.address)
        console.log(`EkoToken address %s \n \n `, EkoTokenInstance.address)
        console.log(`Token1 address %s \n \n `, token1Instance.address)
        console.log(`Token2 address %s \n \n `, token2Instance.address)

        expect(deployer.address).equal(deployer.address)
    });

    it("EkoToken / Token1", async function () {
        await UniswapV2FactoryInstance.createPair(EkoTokenInstance.address, token1Instance.address)
    })

    it("Get Pair Address - EkoToken & Token 1", async function () {
        const pair = await UniswapV2FactoryInstance.getPair(EkoTokenInstance.address, token1Instance.address);
        console.log(pair);
    });
});