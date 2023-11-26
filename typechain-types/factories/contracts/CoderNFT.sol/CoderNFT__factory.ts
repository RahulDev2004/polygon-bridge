/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CoderNFT,
  CoderNFTInterface,
} from "../../../contracts/CoderNFT.sol/CoderNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "prmpt",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "updatePrompt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801562000010575f80fd5b50604051620029e2380380620029e283398181016040528101906200003691906200034d565b33828281600290816200004a919062000607565b5080600390816200005c919062000607565b506200006d6200010160201b60201c565b5f8190555050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000e7575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000de91906200072e565b60405180910390fd5b620000f8816200010560201b60201c565b50505062000749565b5f90565b5f60085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160085f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200022982620001e1565b810181811067ffffffffffffffff821117156200024b576200024a620001f1565b5b80604052505050565b5f6200025f620001c8565b90506200026d82826200021e565b919050565b5f67ffffffffffffffff8211156200028f576200028e620001f1565b5b6200029a82620001e1565b9050602081019050919050565b5f5b83811015620002c6578082015181840152602081019050620002a9565b5f8484015250505050565b5f620002e7620002e18462000272565b62000254565b905082815260208101848484011115620003065762000305620001dd565b5b62000313848285620002a7565b509392505050565b5f82601f830112620003325762000331620001d9565b5b815162000344848260208601620002d1565b91505092915050565b5f8060408385031215620003665762000365620001d1565b5b5f83015167ffffffffffffffff811115620003865762000385620001d5565b5b62000394858286016200031b565b925050602083015167ffffffffffffffff811115620003b857620003b7620001d5565b5b620003c6858286016200031b565b9150509250929050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200041f57607f821691505b602082108103620004355762000434620003da565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620004997fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200045c565b620004a586836200045c565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620004ef620004e9620004e384620004bd565b620004c6565b620004bd565b9050919050565b5f819050919050565b6200050a83620004cf565b620005226200051982620004f6565b84845462000468565b825550505050565b5f90565b620005386200052a565b62000545818484620004ff565b505050565b5b818110156200056c57620005605f826200052e565b6001810190506200054b565b5050565b601f821115620005bb5762000585816200043b565b62000590846200044d565b81016020851015620005a0578190505b620005b8620005af856200044d565b8301826200054a565b50505b505050565b5f82821c905092915050565b5f620005dd5f1984600802620005c0565b1980831691505092915050565b5f620005f78383620005cc565b9150826002028217905092915050565b6200061282620003d0565b67ffffffffffffffff8111156200062e576200062d620001f1565b5b6200063a825462000407565b6200064782828562000570565b5f60209050601f8311600181146200067d575f841562000668578287015190505b620006748582620005ea565b865550620006e3565b601f1984166200068d866200043b565b5f5b82811015620006b6578489015182556001820191506020850194506020810190506200068f565b86831015620006d65784890151620006d2601f891682620005cc565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6200071682620006eb565b9050919050565b62000728816200070a565b82525050565b5f602082019050620007435f8301846200071d565b92915050565b61228b80620007575f395ff3fe60806040526004361061011e575f3560e01c806370a082311161009f578063b88d4fde11610063578063b88d4fde1461039c578063be9eb325146103b8578063c87b56dd146103e0578063e985e9c51461041c578063f2fde38b146104585761011e565b806370a08231146102ce578063715018a61461030a5780638da5cb5b1461032057806395d89b411461034a578063a22cb465146103745761011e565b806323b872dd116100e657806323b872dd1461020a57806340c10f191461022657806342842e0e1461024e5780636352211e1461026a57806367db3b8f146102a65761011e565b806301ffc9a71461012257806306fdde031461015e578063081812fc14610188578063095ea7b3146101c457806318160ddd146101e0575b5f80fd5b34801561012d575f80fd5b506101486004803603810190610143919061184d565b610480565b6040516101559190611892565b60405180910390f35b348015610169575f80fd5b50610172610511565b60405161017f9190611935565b60405180910390f35b348015610193575f80fd5b506101ae60048036038101906101a99190611988565b6105a1565b6040516101bb91906119f2565b60405180910390f35b6101de60048036038101906101d99190611a35565b61061b565b005b3480156101eb575f80fd5b506101f461075a565b6040516102019190611a82565b60405180910390f35b610224600480360381019061021f9190611a9b565b61076f565b005b348015610231575f80fd5b5061024c60048036038101906102479190611a35565b610a7d565b005b61026860048036038101906102639190611a9b565b610b01565b005b348015610275575f80fd5b50610290600480360381019061028b9190611988565b610b20565b60405161029d91906119f2565b60405180910390f35b3480156102b1575f80fd5b506102cc60048036038101906102c79190611c17565b610b31565b005b3480156102d9575f80fd5b506102f460048036038101906102ef9190611c71565b610b93565b6040516103019190611a82565b60405180910390f35b348015610315575f80fd5b5061031e610c48565b005b34801561032b575f80fd5b50610334610c5b565b60405161034191906119f2565b60405180910390f35b348015610355575f80fd5b5061035e610c83565b60405161036b9190611935565b60405180910390f35b34801561037f575f80fd5b5061039a60048036038101906103959190611cc6565b610d13565b005b6103b660048036038101906103b19190611da2565b610e19565b005b3480156103c3575f80fd5b506103de60048036038101906103d99190611c17565b610e8b565b005b3480156103eb575f80fd5b5061040660048036038101906104019190611988565b610eed565b6040516104139190611935565b60405180910390f35b348015610427575f80fd5b50610442600480360381019061043d9190611e22565b610fcd565b60405161044f9190611892565b60405180910390f35b348015610463575f80fd5b5061047e60048036038101906104799190611c71565b61105b565b005b5f6301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104da57506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061050a5750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60606002805461052090611e8d565b80601f016020809104026020016040519081016040528092919081815260200182805461054c90611e8d565b80156105975780601f1061056e57610100808354040283529160200191610597565b820191905f5260205f20905b81548152906001019060200180831161057a57829003601f168201915b5050505050905090565b5f6105ab826110df565b6105e1576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60065f8381526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f61062582610b20565b90508073ffffffffffffffffffffffffffffffffffffffff16610646611139565b73ffffffffffffffffffffffffffffffffffffffff16146106a9576106728161066d611139565b610fcd565b6106a8576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b8260065f8481526020019081526020015f205f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b5f610763611140565b6001545f540303905090565b5f61077982611144565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107e0576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f806107eb84611207565b9150915061080181876107fc611139565b61122a565b61084d5761081686610811611139565b610fcd565b61084c576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036108b2576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108bf868686600161126d565b80156108c9575f82555b60055f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8154600190039190508190555060055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8154600101919050819055506109918561096d888887611273565b7c02000000000000000000000000000000000000000000000000000000001761129a565b60045f8681526020019081526020015f20819055505f7c0200000000000000000000000000000000000000000000000000000000841603610a0d575f6001850190505f60045f8381526020019081526020015f205403610a0b575f548114610a0a578360045f8381526020019081526020015f20819055505b5b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610a7586868660016112c4565b505050505050565b610a8782826112ca565b610afd6040518060400160405280601481526020017f7375636365737366756c6c79206d696e74656420000000000000000000000000815250826040518060400160405280600981526020017f206e66747320746f20000000000000000000000000000000000000000000000081525085611473565b5050565b610b1b83838360405180602001604052805f815250610e19565b505050565b5f610b2a82611144565b9050919050565b610b3a816110df565b610b70576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160095f8381526020019081526020015f209081610b8e919061205a565b505050565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bf9576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054169050919050565b610c50611515565b610c595f61159c565b565b5f60085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060038054610c9290611e8d565b80601f0160208091040260200160405190810160405280929190818152602001828054610cbe90611e8d565b8015610d095780601f10610ce057610100808354040283529160200191610d09565b820191905f5260205f20905b815481529060010190602001808311610cec57829003601f168201915b5050505050905090565b8060075f610d1f611139565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610dc8611139565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e0d9190611892565b60405180910390a35050565b610e2484848461076f565b5f8373ffffffffffffffffffffffffffffffffffffffff163b14610e8557610e4e8484848461165f565b610e84576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b50505050565b610e94816110df565b610eca576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81600a5f8381526020019081526020015f209081610ee8919061205a565b505050565b6060610ef8826110df565b610f2e576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60095f8381526020019081526020015f208054610f4a90611e8d565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7690611e8d565b8015610fc15780601f10610f9857610100808354040283529160200191610fc1565b820191905f5260205f20905b815481529060010190602001808311610fa457829003601f168201915b50505050509050919050565b5f60075f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b611063611515565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110d3575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016110ca91906119f2565b60405180910390fd5b6110dc8161159c565b50565b5f816110e9611140565b111580156110f757505f5482105b801561113257505f7c010000000000000000000000000000000000000000000000000000000060045f8581526020019081526020015f205416145b9050919050565b5f33905090565b5f90565b5f8082905080611152611140565b116111d0575f548110156111cf575f60045f8381526020019081526020015f205490505f7c01000000000000000000000000000000000000000000000000000000008216036111cd575b5f81036111c35760045f836001900393508381526020019081526020015f2054905061119c565b8092505050611202565b505b5b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b5f805f60065f8581526020019081526020015f2090508092508254915050915091565b5f73ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b5f8060e883901c905060e86112898686846117aa565b62ffffff16901b9150509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b5f805490505f8203611308576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113145f84838561126d565b600160406001901b17820260055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282540192505081905550611386836113775f865f611273565b611380856117b2565b1761129a565b60045f8381526020019081526020015f20819055505f80838301905073ffffffffffffffffffffffffffffffffffffffff8516915082825f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a4600183015b8181146114205780835f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001810190506113e7565b505f820361145a576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f81905550505061146e5f8483856112c4565b505050565b61150f8484848460405160240161148d9493929190612129565b6040516020818303038152906040527f7c4632a4000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506117c1565b50505050565b61151d6117e0565b73ffffffffffffffffffffffffffffffffffffffff1661153b610c5b565b73ffffffffffffffffffffffffffffffffffffffff161461159a5761155e6117e0565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161159191906119f2565b60405180910390fd5b565b5f60085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160085f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f8373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611684611139565b8786866040518563ffffffff1660e01b81526004016116a694939291906121cc565b6020604051808303815f875af19250505080156116e157506040513d601f19601f820116820180604052508101906116de919061222a565b60015b611757573d805f811461170f576040519150601f19603f3d011682016040523d82523d5f602084013e611714565b606091505b505f81510361174f576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b5f9392505050565b5f6001821460e11b9050919050565b5f6a636f6e736f6c652e6c6f6790505f80835160208501845afa505050565b5f33905090565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61182c816117f8565b8114611836575f80fd5b50565b5f8135905061184781611823565b92915050565b5f60208284031215611862576118616117f0565b5b5f61186f84828501611839565b91505092915050565b5f8115159050919050565b61188c81611878565b82525050565b5f6020820190506118a55f830184611883565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b838110156118e25780820151818401526020810190506118c7565b5f8484015250505050565b5f601f19601f8301169050919050565b5f611907826118ab565b61191181856118b5565b93506119218185602086016118c5565b61192a816118ed565b840191505092915050565b5f6020820190508181035f83015261194d81846118fd565b905092915050565b5f819050919050565b61196781611955565b8114611971575f80fd5b50565b5f813590506119828161195e565b92915050565b5f6020828403121561199d5761199c6117f0565b5b5f6119aa84828501611974565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6119dc826119b3565b9050919050565b6119ec816119d2565b82525050565b5f602082019050611a055f8301846119e3565b92915050565b611a14816119d2565b8114611a1e575f80fd5b50565b5f81359050611a2f81611a0b565b92915050565b5f8060408385031215611a4b57611a4a6117f0565b5b5f611a5885828601611a21565b9250506020611a6985828601611974565b9150509250929050565b611a7c81611955565b82525050565b5f602082019050611a955f830184611a73565b92915050565b5f805f60608486031215611ab257611ab16117f0565b5b5f611abf86828701611a21565b9350506020611ad086828701611a21565b9250506040611ae186828701611974565b9150509250925092565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b611b29826118ed565b810181811067ffffffffffffffff82111715611b4857611b47611af3565b5b80604052505050565b5f611b5a6117e7565b9050611b668282611b20565b919050565b5f67ffffffffffffffff821115611b8557611b84611af3565b5b611b8e826118ed565b9050602081019050919050565b828183375f83830152505050565b5f611bbb611bb684611b6b565b611b51565b905082815260208101848484011115611bd757611bd6611aef565b5b611be2848285611b9b565b509392505050565b5f82601f830112611bfe57611bfd611aeb565b5b8135611c0e848260208601611ba9565b91505092915050565b5f8060408385031215611c2d57611c2c6117f0565b5b5f83013567ffffffffffffffff811115611c4a57611c496117f4565b5b611c5685828601611bea565b9250506020611c6785828601611974565b9150509250929050565b5f60208284031215611c8657611c856117f0565b5b5f611c9384828501611a21565b91505092915050565b611ca581611878565b8114611caf575f80fd5b50565b5f81359050611cc081611c9c565b92915050565b5f8060408385031215611cdc57611cdb6117f0565b5b5f611ce985828601611a21565b9250506020611cfa85828601611cb2565b9150509250929050565b5f67ffffffffffffffff821115611d1e57611d1d611af3565b5b611d27826118ed565b9050602081019050919050565b5f611d46611d4184611d04565b611b51565b905082815260208101848484011115611d6257611d61611aef565b5b611d6d848285611b9b565b509392505050565b5f82601f830112611d8957611d88611aeb565b5b8135611d99848260208601611d34565b91505092915050565b5f805f8060808587031215611dba57611db96117f0565b5b5f611dc787828801611a21565b9450506020611dd887828801611a21565b9350506040611de987828801611974565b925050606085013567ffffffffffffffff811115611e0a57611e096117f4565b5b611e1687828801611d75565b91505092959194509250565b5f8060408385031215611e3857611e376117f0565b5b5f611e4585828601611a21565b9250506020611e5685828601611a21565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611ea457607f821691505b602082108103611eb757611eb6611e60565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302611f197fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611ede565b611f238683611ede565b95508019841693508086168417925050509392505050565b5f819050919050565b5f611f5e611f59611f5484611955565b611f3b565b611955565b9050919050565b5f819050919050565b611f7783611f44565b611f8b611f8382611f65565b848454611eea565b825550505050565b5f90565b611f9f611f93565b611faa818484611f6e565b505050565b5b81811015611fcd57611fc25f82611f97565b600181019050611fb0565b5050565b601f82111561201257611fe381611ebd565b611fec84611ecf565b81016020851015611ffb578190505b61200f61200785611ecf565b830182611faf565b50505b505050565b5f82821c905092915050565b5f6120325f1984600802612017565b1980831691505092915050565b5f61204a8383612023565b9150826002028217905092915050565b612063826118ab565b67ffffffffffffffff81111561207c5761207b611af3565b5b6120868254611e8d565b612091828285611fd1565b5f60209050601f8311600181146120c2575f84156120b0578287015190505b6120ba858261203f565b865550612121565b601f1984166120d086611ebd565b5f5b828110156120f7578489015182556001820191506020850194506020810190506120d2565b868310156121145784890151612110601f891682612023565b8355505b6001600288020188555050505b505050505050565b5f6080820190508181035f83015261214181876118fd565b90506121506020830186611a73565b818103604083015261216281856118fd565b905061217160608301846119e3565b95945050505050565b5f81519050919050565b5f82825260208201905092915050565b5f61219e8261217a565b6121a88185612184565b93506121b88185602086016118c5565b6121c1816118ed565b840191505092915050565b5f6080820190506121df5f8301876119e3565b6121ec60208301866119e3565b6121f96040830185611a73565b818103606083015261220b8184612194565b905095945050505050565b5f8151905061222481611823565b92915050565b5f6020828403121561223f5761223e6117f0565b5b5f61224c84828501612216565b9150509291505056fea264697066735822122078ac96fa69684aa38dbe9d763d71469cb905ce3fd8cacb2942fe73e8164444af64736f6c63430008150033";

type CoderNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoderNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CoderNFT__factory extends ContractFactory {
  constructor(...args: CoderNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override deploy(
    name: string,
    symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name, symbol, overrides || {}) as Promise<
      CoderNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CoderNFT__factory {
    return super.connect(runner) as CoderNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoderNFTInterface {
    return new Interface(_abi) as CoderNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): CoderNFT {
    return new Contract(address, _abi, runner) as unknown as CoderNFT;
  }
}
