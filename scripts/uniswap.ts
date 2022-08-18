import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");



async function main() {
    // I Specified a timestamp of 40minutes
    const timestamp = Math.floor((Date.now()/1000) * (60 * 40));

    const uniswap = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    const weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";


    const USDTuser = "0x69166e49d2fd23E4cbEA767d7191bE423a7733A5";
    const USDCuser = "0xDa9CE944a37d218c3302F6B82a094844C6ECEb17";

    await helpers.impersonateAccount(USDTuser);
    const USDTImpersonater = await ethers.getSigner(USDCuser);

    await helpers.impersonateAccount(USDCuser);
    const USDCImpersonater = await ethers.getSigner(USDCuser);

    const approvalamount = ethers.utils.parseUnits("1000", "18");
    const inputAmount = ethers.utils.parseUnits("100", "6");
    const outputExpectation = ethers.utils.parseUnits("50", "6");


    const Uniswap = await ethers.getContractAt("IUniswap", uniswap, USDTImpersonater);
    const Usdt = await ethers.getContractAt("IApprove", USDT, USDTImpersonater);
    const Usdc = await ethers.getContractAt("IApprove", USDC);
    const Weth = await ethers.getContractAt("IApprove", weth);


    // Interaction with uniswap swapExactTokensForTokens
    // we check for the user balance before and after
    // we approve and then send
    // we then swap and we compare

    await Usdt.approve(uniswap, approvalamount, {gasLimit: ethers.utils.hexlify(1000000)});
    const UserUsdtBalance = await Usdt.balanceOf(USDTuser);
    const UserUsdcBalance = await Usdc.balanceOf(USDTuser)
    console.log(`USDT balance before the swap: ${UserUsdtBalance}, USDC balance before swap ${UserUsdcBalance}`);





}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });