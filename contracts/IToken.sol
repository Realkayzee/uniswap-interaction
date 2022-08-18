

interface IApprove {
    function approve(address _spender, uint _value) external;
    function balanceOf(address _owner) external view returns (uint balance);
}