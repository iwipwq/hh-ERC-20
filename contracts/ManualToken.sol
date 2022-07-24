// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ManualToken {
    uint256 initialSupply;
    mapping (address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    // transfer tokens
    // substract from address and amount and add to 'to' address

    function _transfer(address from, address to, uint256 amount) public {
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns(bool success) {
        // implement taking funds from a user
        require(_value <= allowance[_from][msg.sender]);
        allowance[_from][msg.sender] -= _value;
        _transfer(_from, _to, _value);
        return true;
    }
}