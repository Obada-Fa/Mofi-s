import WebFont from 'webfontloader';

export class Utility {
    static async loadPressStart2PFont() {
        return new Promise((resolve, reject) => {
            WebFont.load({
                custom: {
                    families: ['Press Start 2P'],
                    urls: ['../fonts/PressStart2P-Regular.ttf']
                },
                active: () => {
                    resolve();
                },
                inactive: () => {
                    reject(new Error('Failed to load the font.'));
                }
            });
        });
    }
}
