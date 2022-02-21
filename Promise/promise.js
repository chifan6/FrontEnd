function Promise(parameter) {
  this.PromiseState = "pending";
  this.PromiseResult = undefined;
  this.callbacks = [];
  let resolve = (data) => {
    if (this.PromiseState != "pending") return;
    this.PromiseResult = data;
    this.PromiseState = "fulfilled";
    // this.callback.onResolveed(data);
    for (let i = 0; i < this.callbacks.length; i++) {
      this.callbacks[i].onResolveed(data);
    }
  };
  let reject = (data) => {
    if (this.PromiseState != "pending") return;
    this.PromiseResult = data;
    this.PromiseState = "rejected";
    // this.callback.onRejected(data);
    for (let i = 0; i < this.callbacks.length; i++) {
      this.callbacks[i].onRejected(data);
    }
  };
  try {
    parameter(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function (onResolveed, onRejected) {
  return new Promise((resovle, reject) => {
    if (this.PromiseState === "fulfilled") {
      //p.then方法会返回一个Promise对象
      //返回的状态根据里面的内容来决定
      //如果是一个非Promise对象的话为成功
      //如果是一个Promise对象则安装Promise里面的状态来决定
      //方法的结果如果是一个非Promise对象
      try {
        let result = onResolveed(this.PromiseResult);
        if (result instanceof Promise) {
          result.then(
            (value) => {
              resovle(value);
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          resovle(result);
        }
      } catch (error) {
        reject(error);
      }
    }
    if (this.PromiseState === "rejected") {
      try {
        let res = onRejected(this.PromiseResult);
        if (res instanceof Promise) {
          res.then(
            (value) => {
              resovle(value);
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          resovle(res);
        }
      } catch (error) {
        reject(error);
      }
    }
    if (this.PromiseState === "pending") {
      //使用对象保存回调函数的话如果p指定了多个回调的话该方法不会保留多个结果而是替换掉原来的两个函数
      //所以应该使用数组的方法来保存
      this.callbacks.push({
        onRejected,
        onResolveed,
      });
    }
  });
};
