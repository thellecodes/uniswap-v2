const { expect } = require('chai')
const { ethers } = require("hardhat");

describe("UniswapV2Router02", function () {
  let UniswapV2Router;
  let UniswapV2RouterInstance;
  let deployer;
  let addr1;
  let factoryContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  let WETH;
  let WethInstance;

  beforeEach(async function () {
    UniswapV2Router = await ethers.getContractFactory("UniswapV2Router02");
    WETH = await ethers.getContractFactory("WETH");
    WethInstance = await WETH.deploy();

    [deployer, addr1] = await ethers.getSigners();
  });


  it("should deploy Uniswapv2Router02", async function () {
    UniswapV2RouterInstance = UniswapV2Router.deploy(factoryContractAddress, WethInstance.address)
  });
});