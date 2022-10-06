const main = async () => {
  // all contracts
  const UniswapV2FactoryContract = await ethers.getContractFactory("UniswapV2Factory");
  const EkoTokenContract = await ethers.getContractFactory("EkoToken");

  const [deployer] = await ethers.getSigners();

  const Uniswapv2FactoryInstance = await UniswapV2FactoryContract.deploy(`${deployer.address}`);
  const EkoTokenInstance = await EkoTokenContract.deploy(1000);

  console.log(`Contract Deployed by Account %s \n \n`, deployer.address);

  // 0x610178dA211FEF7D417bC0e6FeD39F05609AD788
  console.log(`Uniswap Factory Contract Address %s`, Uniswapv2FactoryInstance.address);
  console.log(`Ekotoken Contract Address %s`, EkoTokenInstance.address);
  //  0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e
};



main()
  .then(() => process.exit(0))
  .catch((error) => console.log(error));