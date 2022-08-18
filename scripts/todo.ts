import { ethers } from "hardhat";

async function main() {
  const Todo = await ethers.getContractFactory("ToDOList");
  const todo = await Todo.deploy(Todo);

  await todo.deployed();

  console.log(`Contract address deployed to: ${todo.address}`);
  // interaction
  await todo.AddTodo("I want something tomorrow");
  const checktodo = await todo.checkTodoListByInput(0);
  console.log(checktodo);
  const checkalltodo = await todo.checkAllElementInTodo();

  console.log(checkalltodo);

  const deletetodo = await todo.deleteAllElementInTodo();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});