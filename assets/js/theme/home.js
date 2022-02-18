import PageManager from './page-manager';
import youtubeCarouselFactory from '../chiara/youtube-carousel';

export default class Home extends PageManager {
    onReady() {
        if (this.context.hasCarouselVideo) {
            youtubeCarouselFactory($('[data-slick]'));
        }
    }
}
