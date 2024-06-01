import { Engine, DisplayMode } from 'excalibur';
import { ResourceLoader } from './resources.js';
import { IntroScene } from './introscene.js';
import { LevelOneScene } from './levelone.js';
import { LevelTwoScene } from './leveltwo.js';
import { GameOverScene } from './gameover.js'; // Import GameOverScene
import { WinningScene } from './winningscene.js'; // Import WinningScene

export class Game extends Engine {
    constructor() {
        super({
            width: 1280,
            height: 670,
            displayMode: DisplayMode.FitScreen
        });

        this.start(ResourceLoader).then(() => this.onInitialize());
    }

    onInitialize() {
        this.addScene('intro', new IntroScene());
        this.addScene('levelOne', new LevelOneScene());
        this.addScene('levelTwo', new LevelTwoScene());
        this.addScene('gameOver', new GameOverScene());
        this.addScene('winning', new WinningScene()); // Add WinningScene

        this.goToScene('intro');
    }
}

new Game();
