import { Scene, Vector, Label, Color, Actor, Font, FontUnit, TextAlign } from 'excalibur';
import { Resources } from './resources.js';
import { Utility } from './utility.js';
import '../css/style.css'

export class IntroScene extends Scene {
    async onInitialize(engine) {
        try {
            // Load the custom font
            await Utility.loadPressStart2PFont();

            // Create the background actor
            const background = new Actor();
            const backgroundSprite = Resources.Background.toSprite();
            background.graphics.use(backgroundSprite);
            background.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
            this.add(background);

            // Create the start label with the loaded font
            const startLabel = new Label({
                text: "This is Mofi's racing game!\nPress Enter to Continue",
                pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
                color: Color.Yellow,
                font: new Font({
                    size: 48,
                    family: 'Press Start 2P',
                    textAlign: TextAlign.Center,
                })
            });
            startLabel.anchor.setTo(0.5, 0.5);
            this.add(startLabel);

            // Set up the input listener
            engine.input.keyboard.on('press', (evt) => {
                if (evt.key === 'Enter') {
                    engine.goToScene('levelOne');
                }
            });

            console.log('IntroScene initialized');
        } catch (error) {
            console.error('Error during scene initialization for scene intro:', error);
        }
    }
}
