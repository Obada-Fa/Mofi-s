import { ImageSource, Loader } from 'excalibur';

const Resources = {
    Bus: new ImageSource('docs/images/bus.png'),
    Oil: new ImageSource('docs/images/oil.png'),
    Smashed: new ImageSource('docs/images/smashed.png'),
    GameOverBG: new ImageSource('docs/images/gameoverBG.png'),
    Mofi: new ImageSource('docs/images/mofi.png'),
    MofiSpriteSheet: new ImageSource('docs/images/mofispritesheet.png'),
    CarSpriteSheet: new ImageSource('docs/images/carspritesheet.png'),
    Background: new ImageSource('docs/images/background.png')
};

const ResourceLoader = new Loader(Object.values(Resources));

export { Resources, ResourceLoader };