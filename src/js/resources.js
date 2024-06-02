import { ImageSource, Loader } from 'excalibur';

const Resources = {
    Bus: new ImageSource('.../docs/images/bus.png'),
    CarSpriteSheet: new ImageSource('.../docs/images/carspritesheet.png'),
    Background : new ImageSource('.../docs/images/background.png'),
    GameOverBG : new ImageSource('.../docs/images/gameoverBG.png'),
    Oil : new ImageSource('.../docs/images/oil.png'),
    Smashed: new ImageSource('.../docs/images/smashed.png'),
    Mofi: new ImageSource('.../docs/images/mofi.png'),
    MofiSpriteSheet: new ImageSource('.../docs/images/mofispritesheet.png'),
};

const ResourceLoader = new Loader(Object.values(Resources));

export { Resources, ResourceLoader };