// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity =0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token2 is ERC20 {
    constructor(uint256 initialSupply) ERC20("TOKEN2", "TK2") {
        _mint(msg.sender, initialSupply);
    }
}