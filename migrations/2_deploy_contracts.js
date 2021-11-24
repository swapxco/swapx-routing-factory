// const Migrations = artifacts.require("Migrations");

// first we must retrieve the contracts that we're going to work on
const Factory = artifacts.require("FlatSwapXFactory.sol");

module.exports = async function (deployer, network, addresses) {

  let feeToSetter = addresses[0];

  // first we deploy the factory
  await deployer.deploy(Factory, feeToSetter);

  const factoryReference = await Factory.deployed();

  console.log("factory reference: ", Object.keys(factoryReference));
};
