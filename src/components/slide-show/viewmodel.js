import {Parent, Child} from 'utils/parentChildComponent.utils';

export default Parent.extend({
    define: {
        previousSlide: {
            Type: Child
        },
        nextSlide: {
            Type: Child
        },
        carouselId: {
            value: ''
        }
    },
    openPrevious: () => {
        this.attr('activeItem', this.attr('previousSlide'));
    },
    openNext: () => {
        this.attr('activeItem', this.attr('nextSlide'));
    },
    goToThisSlide: ctx => {
        this.attr('activeItem', ctx);
    }
});
