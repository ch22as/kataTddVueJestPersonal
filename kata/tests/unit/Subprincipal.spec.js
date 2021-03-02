import { mount } from '@vue/test-utils';
import Subprincipal from '@/components/Subprincipal';
import Worker from '@/components/Worker.vue'

const build = () =>{
    const wrapper = mount(Subprincipal);

    return {
        wrapper,
        h1: () => wrapper.find('h1'),
        img: () => wrapper.find('img'),
        worker: () => wrapper.findComponent(Worker) 
    }
}

describe('Subprincipal', () =>{
    it('it renders the component?', () =>{
        const { wrapper } = build();
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('it render right?', () =>{
        const { h1, img, worker} = build();

        expect(h1().exists()).toBe(true);
        expect(img().exists()).toBe(true);
        expect(worker().exists()).toBe(true);
    })

    it('h1', () => {
        const { h1 } = build();

        expect(h1().text()).toEqual("Subprincipal");
    })

    it('img', () => {
        const { img } = build();

        expect(img().attributes().alt).toEqual("Imagen random")
    })
})