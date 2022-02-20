function Promise(parameter) {
  this.PromiseState = "pending";
  this.PromiseResult = undefined;
  this.callback = {};
  let resolve = (data) => {
    if (this.PromiseState != "pending") return;
    this.PromiseResult = data;
    this.PromiseState = "fulfilled";
    this.callback.onResolveed(data);
  };
  let reject = (data) => {
    if (this.PromiseState != "pending") return;
    this.PromiseResult = data;
    this.PromiseState = "rejected";
    this.callback.onRejected(data);
  };
  try {
    parameter(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function (onResolveed, onRejected) {
  if (this.PromiseState === "fulfilled") {
    onResolveed(this.PromiseResult);
  }
  if (this.PromiseState === "rejected") {
    onRejected(this.PromiseResult);
  }
  if (this.PromiseState === "pending") {
    this.callback = {
      onRejected,
      onResolveed,
    };
  }
};
