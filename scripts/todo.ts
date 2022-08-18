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

  // 0xbf8C47baccB9c8410fcfcc2E6d052b7b8Dc4FE85