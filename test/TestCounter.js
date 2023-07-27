const counter = artifacts.require("Counter");

contract("Testing Counter test contract for test purposes", async accounts => {
  it("we have something there", async () => {
    const instance = await counter.deployed();
    const start_value = await instance.get.call();
    assert.equal(start_value, 0, 'Increment failed');
    await instance.inc();
    var current_value = await instance.get.call();
    assert.equal(current_value, 1, 'Increment failed');
    await instance.dec();
    current_value = await instance.get.call();
    assert.equal(current_value, 0, 'Decrement failed');
  });
});
