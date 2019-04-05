import TopNav from '@/client/components/navigator/TopNav'
import Vue from 'vue'

xdescribe('topNav', () => {
  xit('should be topNav', () => {
    const TN = Vue.extend(TopNav)
    const vm = new TN().$mount()
    expect(vm.$el.querySelector('.topNav')).to.exist()
  })
})
