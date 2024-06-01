import { Scene, Label, Vector, Color, Font, FontUnit } from 'excalibur';

export class GameOverScene extends Scene {
    onInitialize(engine) {
        // Create a "Game Over" label
        const gameOverLabel = new Label({
            text: 'Game Over',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 3),
            color: Color.Red,
            font: new Font({
                family: 'Press Start 2P', // Retro font
                size: 48,
                unit: FontUnit.Px,
                color: Color.Red,
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
                family: 'Press Start 2P',
                size: 36,
                unit: FontUnit.Px,
                color: Color.Yellow,
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
                family: 'Press Start 2P',
                size: 36,
                unit: FontUnit.Px,
                color: Color.Gray,
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
            this.exitLabel.color = Color.Gray;
        } else {
            this.playAgainLabel.color = Color.Gray;
            this.exitLabel.color = Color.Yellow;
        }
    }
    
}
