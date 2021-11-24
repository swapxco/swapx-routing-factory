pragma solidity >=0.5.0;

interface ISwapXCallee {
    function swapXCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
