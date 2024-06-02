import { ImageSource, Loader } from 'excalibur';

const Resources = {
    Bus: new ImageSource('docs/bus.png'),
    Oil: new ImageSource('docs/oil.png'),
    Smashed: new ImageSource('docs/smashed.png'),
    GameOverBG: new ImageSource('docs/gameoverBG.png'),
    Mofi: new ImageSource('docs/mofi.png'),
    MofiSpriteSheet: new ImageSource('docs/mofispritesheet.png'),
    CarSpriteSheet: new ImageSource('docs/carspritesheet.png'),
    Background: new ImageSource('docs/background.png')
};

const ResourceLoader = new Loader(Object.values(Resources));

export { Resources, ResourceLoader };