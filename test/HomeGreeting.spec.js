import { mount } from '@vue/test-utils'
import HomeGreeting from '@/components/Home/HomeGreeting.vue'

describe('HomeGreeting', () => {
  test('render HomeGreeting component', () => {
    const wrapper = mount(HomeGreeting)
    expect(wrapper.html()).toBeTruthy()
  })
})
