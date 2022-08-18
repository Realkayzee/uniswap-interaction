import { ethers } from "hardhat";


async function main() {
    const Todo = await ethers.getContractAt("ToDoList", "0xbf8C47baccB9c8410fcfcc2E6d052b7b8Dc4FE85");
    

    //Interact

    await Todo.AddTodo("Let me see");
    const checktodo = await Todo.checkAllElementInTodo();
    console.log(checktodo);
    await Todo.deleteAllElementInTodo();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

  // TxHash = 0xf7093eb4f23264fa98a00a7407fc4f72ae9ea2902de7591a43be40a278b75b98