class Promise {
  constructor(parameter) {
    this.PromiseState = "pending";
    this.PromiseResult = undefined;
    this.callbacks = [];
    let resolve = (data) => {
      if (this.PromiseState != "pending") return;
      this.PromiseResult = data;
      this.PromiseState = "fulfilled";
      // this.callback.onResolveed(data);
      //设置为异步执行
      setTimeout(() => {
        for (let i = 0; i < this.callbacks.length; i++) {
          this.callbacks[i].onResolveed(data);
        }
      });
    };
    let reject = (data) => {
      if (this.PromiseState != "pending") return;
      this.PromiseResult = data;
      this.PromiseState = "rejected";
      // this.callback.onRejected(data);
      //设置为异步执行
      setTimeout(() => {
        for (let i = 0; i < this.callbacks.length; i++) {
          this.callbacks[i].onRejected(data);
        }
      });
    };
    try {
      parameter(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onResolveed, onRejected) {
    let _this = this;

    return new Promise((resovle, reject) => {
      if (typeof onRejected !== "function") {
        //如果then的第二个值没有传则将他设置为一个函数
        //并且将自动传进来的错误抛出
        onRejected = (reason) => {
          throw reason;
        };
      }
      if (typeof onResolveed !== "function") {
        onResolveed = (value) => value;
      }
      let callback = (type) => {
        //p.then方法会返回一个Promise对象
        //返回的状态根据里面的内容来决定
        //如果是一个非Promise对象的话为成功
        //如果是一个Promise对象则安装Promise里面的状态来决定
        //方法的结果如果是一个非Promise对象
        try {
          let result = type(_this.PromiseResult);
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
      };
      if (this.PromiseState === "fulfilled") {
        //在Promise中的then的方法是异步执行的
        //所以这里应该要将方法设置为异步执行
        //（加入队列中）
        setTimeout(() => {
          callback(onResolveed);
        });
      }
      if (this.PromiseState === "rejected") {
        //设置为异步执行
        setTimeout(() => {
          callback(onRejected);
        });
      }
      if (this.PromiseState === "pending") {
        //使用对象保存回调函数的话如果p指定了多个回调的话该方法不会保留多个结果而是替换掉原来的两个函数
        //所以应该使用数组的方法来保存
        //这两个方法是在上面的resolve,reject 中执行
        this.callbacks.push({
          onResolveed: function () {
            callback(onResolveed);
          },
          onRejected: function () {
            callback(onRejected);
          },
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(
      (value) => {},
      (reason) => {
        onRejected(reason);
      }
    );
  }

  static resovle(onResolveed) {
    return new Promise((resolve, reject) => {
      if (onResolveed instanceof Promise) {
        onResolveed.then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      } else {
        resolve(onResolveed);
      }
    });
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(promiseArr) {
    //返回一个Promise对象
    return new Promise((resolve, reject) => {
      let count = 0;
      const arr = [];
      //闲将PromiseArr遍历
      for (let i = 0; i < promiseArr.length; i++) {
        const element = promiseArr[i];
        element.then(
          (value) => {
            count++;
            arr[i] = value;
            if (count === promiseArr.length) {
              resolve(arr);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }

  static race(promiseArr) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
        const element = promiseArr[i];
        element.then(
          (vlaue) => {
            resolve(vlaue);
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }
}
