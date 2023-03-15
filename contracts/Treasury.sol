// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Treasury is Ownable {
    uint256 public totalFunds;
    address public payee;
    bool public isReleased;

    receive() external payable{}

    constructor() {
    }
    
    function withdrawFunds(address pay, uint256 amount) public onlyOwner {
        // isReleased = true;
        payable(pay).transfer(amount);
    }
}
