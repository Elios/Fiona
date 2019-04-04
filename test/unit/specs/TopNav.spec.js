import TopNav from '../../../src/client/components/navigator/TopNav'

xdescribe('topNav', () => {
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
