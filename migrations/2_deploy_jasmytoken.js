const JasmyCoin = artifacts.require("./JasmyCoin.sol");

module.exports = function(deployer, network, accounts) {
  const name = "JasmyCoin";
  const symbol = "JASMY";
  const decimals = 18;
  const amount = 50000000000
  const tokens = web3.utils.toWei(amount.toString(), 'ether')
  const initSupply = web3.utils.toBN(tokens);

  return deployer.then(()=>{
    return deployer.deploy(
      JasmyCoin,
      name,
      symbol,
      decimals,
      initSupply
    );
  });
}
