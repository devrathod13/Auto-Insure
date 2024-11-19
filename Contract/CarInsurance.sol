// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarInsurance {

    // Struct to hold the insurance pool details
    struct InsurancePool {
        string vehicleModel;
        uint256 cubicCapacity;
        uint256 premium;
        address creator;
        bool exists; // To check if the pool already exists
    }

    // Mapping to store insurance pools by pool ID
    mapping(uint256 => InsurancePool) public insurancePools;

    // Counter for the insurance pools
    uint256 public poolCount;

    // Event to emit when a new insurance pool is created
    event InsurancePoolCreated(
        uint256 poolId,
        string vehicleModel,
        uint256 cubicCapacity,
        uint256 premium,
        address creator
    );

    // Function to create an insurance pool
    function createInsurancePool(
        string memory _vehicleModel,
        uint256 _cubicCapacity,
        uint256 _premium
    ) public returns (uint256) {
        // Increment the pool count to create a new pool ID
        poolCount++;

        // Store the insurance pool details
        insurancePools[poolCount] = InsurancePool({
            vehicleModel: _vehicleModel,
            cubicCapacity: _cubicCapacity,
            premium: _premium,
            creator: msg.sender,
            exists: true
        });

        // Emit the event
        emit InsurancePoolCreated(poolCount, _vehicleModel, _cubicCapacity, _premium, msg.sender);

        return poolCount; // Return the created pool ID
    }

    // Function to get insurance pool details by pool ID
    function getInsurancePool(uint256 _poolId) public view returns (InsurancePool memory) {
        require(insurancePools[_poolId].exists, "Insurance pool does not exist!");
        return insurancePools[_poolId];
    }
}
