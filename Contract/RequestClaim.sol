// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RequestClaim {
    // Struct for storing claim request details
    struct ClaimRequest {
        uint256 id;
        string description; // Description of the claim
        string status;      // Status of the claim request (e.g., "Pending")
        address requester;  // Address of the user requesting the claim
        uint256 timestamp;  // Time the request was made
    }

    // Array to store all claim requests
    ClaimRequest[] public claimRequests;

    // Event to log new claim requests
    event ClaimRequested(
        uint256 id,
        string description,
        string status,
        address indexed requester,
        uint256 timestamp
    );

    // Function to request a new claim
    function requestClaim(string memory description) public {
        uint256 newId = claimRequests.length; // Generate a new ID based on the array length
        string memory initialStatus = "Pending"; // Default status for new claims

        // Create a new claim request and add it to the array
        claimRequests.push(
            ClaimRequest({
                id: newId,
                description: description,
                status: initialStatus,
                requester: msg.sender,
                timestamp: block.timestamp
            })
        );

        // Emit an event for the new claim request
        emit ClaimRequested(newId, description, initialStatus, msg.sender, block.timestamp);
    }

    // Function to get the total number of claim requests
    function getTotalClaims() public view returns (uint256) {
        return claimRequests.length;
    }

    // Function to get claim request details by ID
    function getClaimDetails(uint256 claimId) public view returns (
        uint256 id,
        string memory description,
        string memory status,
        address requester,
        uint256 timestamp
    ) {
        require(claimId < claimRequests.length, "Claim request does not exist.");
        ClaimRequest memory claim = claimRequests[claimId];
        return (claim.id, claim.description, claim.status, claim.requester, claim.timestamp);
    }
}
