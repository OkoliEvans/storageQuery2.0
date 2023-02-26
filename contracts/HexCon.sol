//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract HexCon {

    bytes32 res;    
        

    function readStorageSlot1() public returns (bytes32 result) {        
        assembly {
            result := sload(0)
        }
        res = result;
    
    }

    function displayNum() public view returns(uint256) {
        return uint256(res);
    }

}