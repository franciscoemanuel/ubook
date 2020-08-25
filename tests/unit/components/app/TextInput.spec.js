import { shallowMount } from '@vue/test-utils';
import TextInput from '@/components/app/TextInput.vue';
import { rgbToHex } from '@/utils';

describe('TextInput.vue', () => {
  it('should emit an input event with the correct value', () => {
    const wrapper = shallowMount(TextInput, { propsData: { outlined: true } });
    const textToEvaluate = 'test';
    const input = wrapper.find('input');
    input.element.value = textToEvaluate;
    input.trigger('input');
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')[0]).toEqual([textToEvaluate]);
  });

  it('should render an icon appended to the input', () => {
    const specifiedIcon = 'done';
    const wrapper = shallowMount(TextInput, { propsData: { appendIcon: specifiedIcon } });
    const icon = wrapper.find('i');
    expect(icon.element.tagName).toBe('I');
    expect(icon.text()).toBe(specifiedIcon);
    expect(icon.classes()).toEqual(expect.arrayContaining(['material-icons', 'append-icon']));
  });

  it('should render the component with the specified background color', () => {
    const specifiedInputColor = '#282c34';
    const wrapper = shallowMount(TextInput, { propsData: { backgroundColor: specifiedInputColor } });
    const inputContainer = wrapper.find('.input-container').element;
    expect(rgbToHex(inputContainer.style.getPropertyValue('background-color'))).toBe(specifiedInputColor);
  });

  it('should render the component outlined', () => {
    const wrapper = shallowMount(TextInput, { propsData: { outlined: true } });
    const inputContainer = wrapper.find('.input-container');
    expect(inputContainer.classes()).toContain('border');
  });
});
