pragma solidity 0.5.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract JasmyCoin is ERC20, ERC20Detailed {
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initSupply
    )
        ERC20Detailed(name, symbol, decimals)
        public
    {
        _mint(msg.sender, initSupply);
    }
}
