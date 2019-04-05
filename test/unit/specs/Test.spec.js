// sinon
// 手工创建spy
function createSpy (targetFunc) {
  const spy = () => {
    spy.args = arguments
    spy.returnValue = targetFunc.apply(this, arguments)
    return spy.returnValue
  }
  return spy
}

describe('sum', () => {
  it('should be three', function () {
    const sum = (a, b) => a + b
    const spySum = createSpy(sum)
    spySum(1, 2)
    console.log('args:' + spySum.returnValue)
  })
})
