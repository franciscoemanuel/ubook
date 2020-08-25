import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Snackbar from '@/components/app/Snackbar.vue';
import '@testing-library/jest-dom';

const localVue = createLocalVue();
localVue.use(Vuex);

const storeMock = snackbar => {
  const getters = {
    snackbar: () => snackbar
  };

  const store = new Vuex.Store({
    modules: {
      app: { getters, namespaced: true }
    }
  });

  return store;
};

describe('Snackbar.vue', () => {
  it('Should be visible when show is set to true in the store', () => {
    const store = storeMock({ show: true });
    const wrapper = shallowMount(Snackbar, { store, localVue });
    expect(wrapper.find('.snackbar').element).toBeVisible();
  });

  it('Should not be visible when show is set to false in the store', () => {
    const store = storeMock({ show: false });
    const wrapper = shallowMount(Snackbar, { store, localVue });
    expect(wrapper.find('.snackbar').element).not.toBeVisible();
  });

  it('Should render text that was set in the store', () => {
    const store = storeMock({ show: true, message: 'Teste' });
    const wrapper = shallowMount(Snackbar, { store, localVue });
    expect(wrapper.find('.snackbar').element).toBeVisible();
    expect(wrapper.find('.snackbar-text').element).toHaveTextContent('Teste');
  });

  it('Should render an icon that was set in the store prepended to the text', () => {
    const specifiedIcon = 'done';
    const store = storeMock({ show: true, message: 'Teste', icon: specifiedIcon });
    const wrapper = shallowMount(Snackbar, { store, localVue });
    const icon = wrapper.find('i');
    expect(icon.element.tagName).toBe('I');
    expect(icon.text()).toBe(specifiedIcon);
    expect(icon.classes()).toEqual(expect.arrayContaining(['material-icons']));
  });

  it('Should not render an icon when is not specfied in the store', () => {
    const store = storeMock({ show: true, message: 'Teste' });
    const wrapper = shallowMount(Snackbar, { store, localVue });
    expect(wrapper.find('i').element).not.toBeVisible();
  });

  it('Should render an close button whe the option is set in the store', () => {
    const specifiedIcon = 'done';
    const store = storeMock({ show: true, message: 'Teste', icon: specifiedIcon, closable: true });
    const wrapper = shallowMount(Snackbar, { store, localVue });
    expect(wrapper.find('.close-btn').element).toBeVisible();
  });

  it('Should not render an close button whe the option is set to false in the store', () => {
    const specifiedIcon = 'done';
    const store = storeMock({ show: true, message: 'Teste', icon: specifiedIcon, closable: false });
    const wrapper = shallowMount(Snackbar, { store, localVue });
    expect(wrapper.find('.close-btn').element).not.toBeVisible();
  });
});
