const main = async () => {
    // all contracts
    const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
    const WETH = await ethers.getContractFactory("WETH");

    const [deployer] = await ethers.getSigners();

    const WETHInstance = await WETH.deploy();
    const Uniswapv2Router02Instance = await UniswapV2Router02.deploy(
        "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
        "0x0B306BF915C4d645ff596e518fAf3F9669b97016"
    )

    // 0x0B306BF915C4d645ff596e518fAf3F9669b97016
    console.log(`WETH Contract Address %s`, WETHInstance.address);
    // console.log(`UniswapV2Router02 Contract Address %s`, Uniswapv2Router02Instance.address);
};



main()
    .then(() => process.exit(0))
    .catch((error) => console.log(error));