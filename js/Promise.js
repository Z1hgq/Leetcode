

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

CustomPromise.prototype.all = (args) => {
  if (!Array.isArray(args)) {
    return new CustomPromise((resolve ,reject) => reject('arguments must be an error'))
  }
  const result = new Array(args.length)
  let count = 0
  return new CustomPromise((resolve, reject) => {
    for (const index in args) {
      const func = args[index]
      if (!(func instanceof CustomPromise)) {
        reject(`arguments must all instance of CustomPromise`)
      }
      func.then(res => {
        result[index] = res
        count++
        if (count === args.length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

const p1 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})
const p2 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 2000)
})
const p3 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})
const all = new CustomPromise(() => {}).all([p1,p2,p3])
all.then(res => {
  console.log(res)
})