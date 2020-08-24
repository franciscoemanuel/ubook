import { shallowMount } from '@vue/test-utils';
import Btn from '@/components/app/Btn.vue';
import { rgbToHex } from '@/utils';

describe('Btn.vue', () => {
  it('should emit an event when clicked', () => {
    const wrapper = shallowMount(Btn);
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('should not emit an click event when disabled', () => {
    const wrapper = shallowMount(Btn, { propsData: { disabled: true } });
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('should render component with specified color', () => {
    const specifiedButtonColor = '#282c34';
    const wrapper = shallowMount(Btn, { propsData: { color: specifiedButtonColor } });
    expect(rgbToHex(wrapper.element.style.getPropertyValue('background-color'))).toBe(specifiedButtonColor);
  });

  it('should render component with specified text color', () => {
    const specifiedTextColor = '#282c34';
    const wrapper = shallowMount(Btn, { propsData: { textColor: specifiedTextColor } });
    expect(rgbToHex(wrapper.element.style.getPropertyValue('color'))).toBe(specifiedTextColor);
  });

  it('should render an icon prepended to the text', () => {
    const specifiedIcon = 'done';
    const wrapper = shallowMount(Btn, { propsData: { prependIcon: specifiedIcon } });
    const icon = wrapper.find('i');
    expect(icon.element.tagName).toBe('I');
    expect(icon.text()).toBe(specifiedIcon);
    expect(icon.classes()).toEqual(expect.arrayContaining(['material-icons', 'prepend-icon']));
  });

  it('should render as a flat button', () => {
    const wrapper = shallowMount(Btn, { propsData: { flat: true } });
    expect(wrapper.classes()).toContain('flat');
  });

  it('should render as a rounded button', () => {
    const wrapper = shallowMount(Btn, { propsData: { rounded: true } });
    expect(wrapper.classes()).toContain('rounded');
  });
});
