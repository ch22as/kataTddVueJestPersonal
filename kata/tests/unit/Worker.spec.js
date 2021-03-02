import { mount, createLocalVue } from '@vue/test-utils';
import Worker from '@/components/Worker';   
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Worker', () =>{
    
    let store, actions;

    beforeEach(() =>{
        actions = { FECH: jest.fn() };
        
        store = new Vuex.Store({ actions })
    });

    const build = () => {
        const wrapper = mount(Worker, { store, localVue });
    
        return {
            wrapper,
            input: () => wrapper.find('input'),
            button: () => wrapper.find('button')
        }
    };


    it('Should render it', () =>{
        const { wrapper } = build();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('input', () =>{
        const { input } = build();

        expect(input().exists()).toBe(true);
        expect(input().attributes().type).toEqual("text");
        expect(input().attributes().placeholder).toEqual("Introduzca texto")
    });

    it('button', () =>{
        const { button } = build();

        expect(button().exists()).toBe(true);
        expect(button().text()).toEqual("Enviar");
        
    });

    it.skip('button click', () =>{
        const { button } = build();

        button().trigger('click');
        expect(actions.FECH).toHaveBeenCalled();
    })

})