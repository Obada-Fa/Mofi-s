import { ImageSource, Loader } from 'excalibur';


const Resources = {
    Bus: new ImageSource(`public/images/bus.png`),
    Oil: new ImageSource(`public/images/oil.png`),
    Smashed: new ImageSource(`public/images/smashed.png`),
    GameOverBG: new ImageSource(`public/images/gameoverBG.png`),
    Mofi: new ImageSource(`public/images/mofi.png`),
    MofiSpriteSheet: new ImageSource(`public/images/mofispritesheet.png`),
    CarSpriteSheet: new ImageSource(`public/images/carspritesheet.png`),
    Background: new ImageSource(`public/images/background.png`)
};
const ResourceLoader = new Loader(Object.values(Resources));

export { Resources, ResourceLoader };