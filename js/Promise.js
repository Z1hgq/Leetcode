

const STATE = {
  PENDING: 'pending',
  FULFILED: 'fulfilled',
  REJECTED: 'rejected'
}
class CustomPromise {
  constructor(callback) {
    this.state = STATE.PENDING
    this.result = undefined
    this.error = undefined
    this.onFulfilledList = []
    this.onRejectedList = []
    callback(this.resolve, this.reject)
  }
  resolve = (res) => {
    if (this.state === STATE.PENDING) {
      this.result = res
      this.state = STATE.FULFILED
      setTimeout(() => {
        for (const callback of this.onFulfilledList) {
          callback(res)
        }
      })
    }
  }
  reject = (err) => {
    if (this.state === STATE.PENDING) {
      this.error = err
      this.state = STATE.REJECTED
      setTimeout(() => {
        for (const callback of this.onRejectedList) {
          callback(err)
        }
      })
    }
  }

  then = (onFulfilled, onRejected) => {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (result) => result
    onRejected = typeof onRejected === 'function' ? onRejected : (reason) => reason
    
    if (this.state === STATE.FULFILED) {
      return new CustomPromise((resolve, reject) => {
        try {
          const res = onFulfilled(this.result)
          if (res instanceof CustomPromise) {
            res.then(resolve, reject)
          } else {
            resolve(res)
          }
        } catch (error) {
          reject(error)
        }
      })
    } else if (this.state === STATE.REJECTED) {
      return new CustomPromise((resolve, reject) => {
        try {
          const res = onRejected(this.error)
          if (res instanceof CustomPromise) {
            res.then(resolve, reject)
          } else {
            reject(res)
          }
        } catch (error) {
          onRejected(error)
        }
      })
    } else if (this.state === STATE.PENDING) {
      return new CustomPromise((resolve, reject) => {
        this.onFulfilledList.push(() => {
          try {
            const res = onFulfilled(this.result)
            if (res instanceof CustomPromise) {
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedList.push(() => {
          try {
            const res = onRejected(this.error)
            if (res instanceof CustomPromise) {
              res.then(resolve, reject)
            } else {
              reject(res)
            }
          } catch (error) {
            onRejected(error)
          }
        })
      })
    }
  }

  catch = (onRejected) => {
    return this.then(null, onRejected)
  }
}

const p = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    reject(2)
  }, 1000)
})
p.then((res) => {
  console.log(res, rej)
}, (err) => {
  console.log(err)
})
p.catch((err) => {
  console.log(err)
})