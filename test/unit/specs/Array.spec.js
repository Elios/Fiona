// describe用于将单独的测试聚合在一起，在TDD(测试驱动开发)中称之为测试序列(Suite)，可嵌套
// 第一个参数用于指示测试什么，第二个参数是一个匿名函数
// 测试序列至少有一个it块
// it 用于创建实际的测试，它在TDD中被称为测试用例(Test-Case)，第一个参数是对该测试的描述（日常用语）

// 测试用例用类名命名 describe('Array',function(){})
// 当测试用例用于测试指定方法或属性默认效果时用“#+成员名”方式命名 it('#slice',function(){})
// 当测试用例的测试内容不能归属于某个方法或属性成员时用“应该...输出 XXX”或“应该...完成 XXX 操作”的句式陈述 it('should be',function(){})

// 用 xdescribe 取代 describe 将跳过此条，xit 取代 it 同理
describe('Array', () => {
  let arr = []
  // 每个场景测试执行之前执行
  beforeEach(() => {
    arr.push(1)
  })
  // 每个场景测试执行之后执行
  afterEach(() => {
    arr.push(2)
  })
  // 所有场景测试执行之前执行（执行一次）
  before(() => {
    arr.push(3)
  })
  // 所有场景测试执行之后执行（执行一次）
  after(() => {
    arr.push(4)
  })

  it('should be empty', () => {
    let arr1 = []
    expect(arr1).to.be.lengthOf(0)
  })
})
