const JasmyCoin = artifacts.require("./JasmyCoin.sol");

contract("JasmyCoin", accounts => {
    it("コントラクトを作成したアカウントに500億のJASMYがあるはず", async () => {
        const jasmyCoinInstance = await JasmyCoin.deployed();

        let balance = await jasmyCoinInstance.balanceOf(accounts[0]);

        balance = web3.utils.fromWei(balance, "ether");

        assert.equal(balance, 50000000000, "500億JASMYがありません");
    });
});
