// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Pinsurance {

    // Struct to represent the details of each pool
    struct Pool {
        string name;
        string metadataUri;
        address creator;
        bool exists;
    }

    address public owner;
    uint256 public platformFee = 100 * 10**18; // Platform fee in wei (assuming the user pays in ETH)

    mapping(address => mapping(address => bool)) public userPools; // Track users' pools
    mapping(address => Pool) public pools; // Map pool address to pool details

    event PoolCreated(address indexed poolAddress, string poolName, string metadataUri, address creator);
    event PoolJoined(address indexed poolAddress, address indexed user);
    event PlatformFeePaid(address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender; // Set contract deployer as the owner
    }

    // Modifier to check if the pool exists
    modifier poolExists(address poolAddress) {
        require(pools[poolAddress].exists, "Pool does not exist");
        _;
    }

    // Function to create a new pool
    function createPool(string memory poolName, string memory metadataUri) external payable {
        require(msg.value == platformFee, "Incorrect platform fee sent");

        address poolAddress = address(uint160(uint256(keccak256(abi.encodePacked(poolName, msg.sender)))));

        require(!pools[poolAddress].exists, "Pool already exists");

        // Transfer platform fee to the owner
        payable(owner).transfer(msg.value);

        // Create the pool
        pools[poolAddress] = Pool({
            name: poolName,
            metadataUri: metadataUri,
            creator: msg.sender,
            exists: true
        });

        emit PoolCreated(poolAddress, poolName, metadataUri, msg.sender);
    }

    // Function to join an existing pool
    function joinPool(address poolAddress) external payable poolExists(poolAddress) {
        require(msg.value == platformFee, "Incorrect platform fee sent");

        Pool memory pool = pools[poolAddress];
        
        // Ensure the user is not already in the pool
        require(!userPools[poolAddress][msg.sender], "Already in the pool");

        // Transfer platform fee to the owner
        payable(owner).transfer(msg.value);

        // Mark the user as joined in the pool
        userPools[poolAddress][msg.sender] = true;

        emit PoolJoined(poolAddress, msg.sender);
    }

    // Function to check the status of a pool
    function getPoolStatus(address poolAddress) external view returns (bool exists, string memory poolName, string memory metadataUri, address creator) {
        Pool memory pool = pools[poolAddress];
        return (pool.exists, pool.name, pool.metadataUri, pool.creator);
    }

    // Function to withdraw platform fee if needed
    function withdrawFee(uint256 amount) external {
        require(msg.sender == owner, "Only owner can withdraw");
        require(amount <= address(this).balance, "Insufficient balance");
        payable(owner).transfer(amount);
    }

    // Function to update platform fee (only by owner)
    function setPlatformFee(uint256 newFee) external {
        require(msg.sender == owner, "Only owner can set fee");
        platformFee = newFee;
    }
}
