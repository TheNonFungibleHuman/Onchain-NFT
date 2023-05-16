// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTMinting is ERC721URIStorage {
    uint256 private _currentTokenId = 0;
    
    constructor() ERC721("NFTMinting", "NFTM") {}
    
    function mint(string memory name) public {
        _currentTokenId++;
        _mint(msg.sender, _currentTokenId);
        _setTokenURI(_currentTokenId, svg(name));
    }
    
    function svg(string memory name) private pure returns (string memory) {
        return string(abi.encodePacked(
            "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>",
            "<rect x='0' y='0' width='100' height='100' rx='10' ry='10' fill='red' />",
            "<text x='50' y='50' font-size='16' text-anchor='middle' fill='white'>",
            name,
            "</text></svg>"
        ));
    }
    
    function tokenURI(uint256 tokenId) public view override(ERC721URIStorage) returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return ERC721URIStorage.tokenURI(tokenId);
    }
    
    function nameOf(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        bytes memory nameBytes = bytes(tokenName[tokenId]);
        require(nameBytes.length > 0, "Token name is not set");
        return string(nameBytes);
    }
    
    mapping (uint256 => string) private tokenName;
    
    function setTokenName(uint256 tokenId, string memory name) public {
        require(_exists(tokenId), "Token does not exist");
        require(ownerOf(tokenId) == msg.sender, "Not token owner");
        tokenName[tokenId] = name;
    }
}