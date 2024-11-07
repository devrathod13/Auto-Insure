export const configAbi = [
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_vehicleModel",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_cubicCapacity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_premium",
                    "type": "uint256"
                }
            ],
            "name": "createInsurancePool",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "vehicleModel",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "cubicCapacity",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "premium",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                }
            ],
            "name": "InsurancePoolCreated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_poolId",
                    "type": "uint256"
                }
            ],
            "name": "getInsurancePool",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "vehicleModel",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cubicCapacity",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "premium",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "creator",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "exists",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct CarInsurance.InsurancePool",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "insurancePools",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "vehicleModel",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "cubicCapacity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "premium",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "exists",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "poolCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
  ];