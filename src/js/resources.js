import { ImageSource, Loader } from 'excalibur';

const Resources = {
    Bus: new ImageSource('/images/bus.png'),
    CarSpriteSheet: new ImageSource('/images/carspritesheet.png'),
    Background : new ImageSource('/images/background.png'),
    GameOverBG : new ImageSource('/images/gameoverBG.png'),
    Oil : new ImageSource('/images/oil.png'),
    Smashed: new ImageSource('/images/smashed.png'),
    Mofi: new ImageSource('/images/mofi.png'),
};

const ResourceLoader = new Loader(Object.values(Resources));

export { Resources, ResourceLoader };