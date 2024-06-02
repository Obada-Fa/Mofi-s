import { ImageSource, Loader } from 'excalibur';

const basePath = '/Mofi-s'; // Update 'repository' to your repo name if needed

const Resources = {
    Bus: new ImageSource(`${basePath}/docs/images/bus.png`),
    Oil: new ImageSource(`${basePath}/docs/images/oil.png`),
    Smashed: new ImageSource(`${basePath}/docs/images/smashed.png`),
    GameOverBG: new ImageSource(`${basePath}/docs/images/gameoverBG.png`),
    Mofi: new ImageSource(`${basePath}/docs/images/mofi.png`),
    MofiSpriteSheet: new ImageSource(`${basePath}/docs/images/mofispritesheet.png`),
    CarSpriteSheet: new ImageSource(`${basePath}/docs/images/carspritesheet.png`),
    Background: new ImageSource(`${basePath}/docs/images/background.png`)
};
const ResourceLoader = new Loader(Object.values(Resources));

export { Resources, ResourceLoader };