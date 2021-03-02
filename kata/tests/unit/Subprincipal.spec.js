import { mount } from '@vue/test-utils';
import Subprincipal from '@/components/Subprincipal';

const build = () =>{
    const wrapper = mount(Subprincipal);

    return {
        wrapper,
        h1: () => wrapper.find('h1'),
        img: () => wrapper.find('img')
    }
}

describe('Subprincipal', () =>{
    it('it renders the component?', () =>{
        const { wrapper } = build();
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('it render right?', () =>{
        const { h1, img} = build();

        expect(h1().exists()).toBe(true);
        expect(img().exists()).toBe(true);
    })
})