// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MemeAgentNFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;
    
    struct Agent {
        string name;
        string personality;
        uint256 createdAt;
        bool isActive;
    }
    
    mapping(uint256 => Agent) public agents;
    mapping(address => uint256[]) public userAgents;
    
    event AgentCreated(uint256 indexed tokenId, address indexed owner, string name);
    event AgentActivated(uint256 indexed tokenId);
    event AgentDeactivated(uint256 indexed tokenId);
    
    constructor() ERC721("AI Meme Agent", "AGENT") Ownable(msg.sender) {}
    
    function createAgent(
        string memory name,
        string memory personality
    ) public returns (uint256) {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        
        _mint(msg.sender, tokenId);
        
        agents[tokenId] = Agent({
            name: name,
            personality: personality,
            createdAt: block.timestamp,
            isActive: true
        });
        
        userAgents[msg.sender].push(tokenId);
        
        emit AgentCreated(tokenId, msg.sender, name);
        return tokenId;
    }
    
    function toggleAgent(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not agent owner");
        agents[tokenId].isActive = !agents[tokenId].isActive;
        
        if (agents[tokenId].isActive) {
            emit AgentActivated(tokenId);
        } else {
            emit AgentDeactivated(tokenId);
        }
    }
    
    function getUserAgents(address user) public view returns (uint256[] memory) {
        return userAgents[user];
    }
    
    function getAgent(uint256 tokenId) public view returns (Agent memory) {
        require(_ownerOf(tokenId) != address(0), "Agent does not exist");
        return agents[tokenId];
    }
}
