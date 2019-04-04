import TopNav from '@/client/components/navigator/TopNav'

describe('topNav', () => {
  let vm
  before(() => {
    vm = new TopNav().$mount()
  })
  after(() => {
    vm.destroy()
  })
  it('should be topNav', () => {
    expect(vm.$el.getAttribute('class')).to.eql('topNav')
  })
})
