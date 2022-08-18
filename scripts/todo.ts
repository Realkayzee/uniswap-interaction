import { ethers } from "hardhat";

async function main() {
    const Todo = await ethers.getContractFactory("ToDoList");
    const todo = await Todo.deploy();

    await todo.deployed();


    console.log(`The contract is deployed to: ${todo.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

  // Contract Address = 0xbf8C47baccB9c8410fcfcc2E6d052b7b8Dc4FE85
  // Contract Transaction = 0x1af364c8037c4af01b12f5d6c23ce5e4933757fbd6b1ced4d958b23b4d3691bf