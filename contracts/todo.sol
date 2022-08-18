// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.9;
// A contract that sends in user's to do list and save it.
contract ToDOList{
    string[] public Todo;


    function AddTodo(string memory _todo) public {
        Todo.push(_todo);
    }

    function checkTodoListByInput(uint256 id) public view returns(string memory) {
        return Todo[id];
    }

    function checkAllElementInTodo() public view returns (string[] memory){
        return Todo;
    }

    function deleteAllElementInTodo() public {
        for (uint256 i = Todo.length; i > 0; i-- ){
            Todo.pop();
        }
    }
}