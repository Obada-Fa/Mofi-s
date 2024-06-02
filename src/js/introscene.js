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
            pos: new Vector(engine.drawWidth / 2, 230),
            color: Color.Yellow,
            font: new Font({
                size: 42,
                family: 'VT323',
                textAlign: TextAlign.Center,
            })
        });
        startLabel.anchor.setTo(0.5, 0.5);
        this.add(startLabel);

        // Create the Mofi image actor
        const mofiImage = new Actor({
            pos: new Vector(engine.drawWidth / 2 - 240, 450), // Position it next to the text
            scale: new Vector(0.3, 0.3) // Scale the image to 0.2
        });
        mofiImage.graphics.use(Resources.Mofi.toSprite());
        this.add(mofiImage);

        // Set up the input listener
        engine.input.keyboard.on('press', (evt) => {
            if (evt.key === 'Enter') {
                engine.goToScene('levelOne');
            }
        });

        console.log('IntroScene initialized');
    }
}
