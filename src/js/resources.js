import { ImageSource, Loader } from 'excalibur';

const Resources = {
    Bus: new ImageSource('/public/images/bus.png'),
    CarSpriteSheet: new ImageSource('/public/images/carspritesheet.png'),
    Background : new ImageSource('/public/images/background.png'),
    Oil : new ImageSource('/public/images/oil.png'),
    Smashed: new ImageSource('/public/images/smashed.png'),
};

const ResourceLoader = new Loader(Object.values(Resources));

export { Resources, ResourceLoader };