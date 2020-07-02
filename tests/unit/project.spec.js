import { shallowMount } from '@vue/test-utils'
import Project from '@/components/Project.vue'

describe('Project.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Test Title';
    const wrapper = shallowMount(Project, {
      propsData: { title }
    });
    expect(wrapper.text()).toMatch(title)
  });

  it('renders props.description when passed', () => {
    const description = 'Test description';
    const wrapper = shallowMount(Project, {
      propsData: { description }
    });
    expect(wrapper.text()).toMatch(description);
  });

  it('renders props.url when passed', () => {
    const url = 'https://testurl.com';
    const wrapper = shallowMount(Project, {
      propsData: { url }
    });
    expect(wrapper.find('a.btn').attributes('href')).toBe(url);
  })

  it('renders props.image when passed', () => {
    const image = 'testimage.jpg'
    const wrapper = shallowMount(Project, {
      propsData: { image }
    });
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });

  it('sets props.technologies when passed', () => {
    const technologies = [ 'Test 1', 'Test 2' ];
    const wrapper = shallowMount(Project, {
      propsData: { technologies }
    });
    expect(wrapper.props('technologies')).toBe(technologies);
  })
});
