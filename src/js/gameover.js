import { Scene, Label, Vector, Color, Font, FontUnit, Actor, TextAlign } from 'excalibur';
import { Resources } from './resources.js';

export class GameOverScene extends Scene {
    onInitialize(engine) {
        // Create the background actor
        const background = new Actor();
        const backgroundSprite = Resources.GameOverBG.toSprite();
        background.graphics.use(backgroundSprite);
        background.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        this.add(background);

        // Create a "Game Over" label
        const gameOverLabel = new Label({
            text: 'Game Over',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 3),
            color: Color.Red,
            font: new Font({
                family: 'VT323', // New font
                size: 48,
                unit: FontUnit.Px,
                color: Color.Red,
                textAlign: TextAlign.Center,
            })
        });
        gameOverLabel.anchor.setTo(0.5, 0.5);
        this.add(gameOverLabel);

        // Create a "Play Again" label
        this.playAgainLabel = new Label({
            text: 'Play Again',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            color: Color.Yellow,
            font: new Font({
                family: 'VT323', // New font
                size: 36,
                unit: FontUnit.Px,
                color: Color.Yellow,
                textAlign: TextAlign.Center,
            })
        });
        this.playAgainLabel.anchor.setTo(0.5, 0.5);
        this.add(this.playAgainLabel);

        // Create an "Exit" label
        this.exitLabel = new Label({
            text: 'Exit',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 50),
            color: Color.Gray,
            font: new Font({
                family: 'Pixelify Sans', // New font
                size: 36,
                unit: FontUnit.Px,
                color: Color.Black,
                textAlign: TextAlign.Center,
            })
        });
        this.exitLabel.anchor.setTo(0.5, 0.5);
        this.add(this.exitLabel);

        // Add keyboard navigation
        this.selectedOption = 0;
        this.updateSelection();

        engine.input.keyboard.on('press', (evt) => this.handleInput(evt, engine));
    }

    handleInput(evt, engine) {
        if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
            this.selectedOption = this.selectedOption === 0 ? 1 : 0;
            this.updateSelection();
        } else if (evt.key === 'Enter') {
            if (this.selectedOption === 0) {
                engine.goToScene('levelOne'); // Restart the level
            } else {
                window.close(); // Close the window (works in some browsers and environments)
            }
        }
    }

    updateSelection() {
        if (this.selectedOption === 0) {
            this.playAgainLabel.color = Color.Yellow;
            this.exitLabel.color = Color.Black;
        } else {
            this.playAgainLabel.color = Color.Black;
            this.exitLabel.color = Color.Yellow;
        }
    }
}
