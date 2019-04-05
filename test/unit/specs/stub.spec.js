// sinon
// stub(存根)
// 会完全替换原函数，所以使用stub时原函数不会执行

// 适用场景：
// 替换掉那些使测试变慢或是难以测试的外部调用
// 根据函数返回值来触发不同的代码执行路径
// 测试异常情况，例如代码抛出了一个异常

import sinon from 'sinon'
import Vue from 'vue'

const vm = new Vue()

const saveUser = (user) => {
  vm.$axios.post('/logon', user)
}

describe('saveUser', sinon.test(() => {
  it('should be saved', function () {
    const post = this.stub(vm.$axios, 'post')
    const user = {
      uname: 'a',
      pwd: '123'
    }
    saveUser(user, () => {})
    sinon.assert.calledWith(post, user)
  })
}))
