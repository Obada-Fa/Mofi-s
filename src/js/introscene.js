// src/js/introscene.js

import { Scene, Vector, Label, Color, Actor, Font, TextAlign } from 'excalibur';
import { Resources } from './resources.js';
import '../css/style.css'; // Ensure CSS is imported to apply styles

export class IntroScene extends Scene {
    onInitialize(engine) {
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
                family: 'Press Start 2P', // Ensure this matches the CSS font-family
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
    }
}
