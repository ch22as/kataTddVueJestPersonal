import { mount } from '@vue/test-utils';
import Principal from '@/views/Principal';
import Subprincipal from '@/components/Subprincipal.vue'

const wrapper = mount(Principal);

describe('Principal', () =>{
    it('it renders the component', () =>{
       

        expect(wrapper.html()).toMatchSnapshot();
    });

    it(' it have the components?', () => {
        const subprincipal = wrapper.findAllComponents(Subprincipal);

        expect(subprincipal.exists()).toBe(true);
    })
});


