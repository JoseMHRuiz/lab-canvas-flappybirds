// const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const shuffle = array => array.sort(() => Math.random() - 0.5);
// const tubeTop = randomInt(-400, -200)
// const tubeBottom = tubeTop+540
// randomInt()

const game = {
    canvasDom: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    score: 0,
    obstaclesTop: [],
    obstaclesBottom: [],
    interval: undefined,

    keys: {
        SPACE: 32
    },
    // background: undefined,
    // player: undefined,


    init() {
        // this.random = randomInt(-400, -200)
        this.canvasDom = document.getElementById("canvas");
        this.ctx = this.canvasDom.getContext("2d");
        this.setDimensions();
        this.reset()
        this.interval = setInterval(() => {
            this.clear();
            this.drawAll()
            this.moveAll()
            this.framesCounter++
            this.generateObstacles()
          if (this.isCollisionTop() || this.isCollisionBottom()) {
              clearInterval(this.interval)
              alert('GAMEOVER!!!')
          }

        }, 1000 / this.FPS);

        // scoreboard.init(this.ctx);
        // this.start();
    },
    setDimensions() {
        this.width = 400;
        this.height = 400;
        this.canvasDom.width = this.width
        this.canvasDom.height = this.height

    },
    drawAll() {
        this.background.draw()
        this.player.draw()
        this.obstaclesTop.forEach(obs => obs.draw())
        this.obstaclesBottom.forEach(obs => obs.draw())

    },
    moveAll() {
        this.background.move()
        this.player.move()
        this.obstaclesTop.forEach(obs => obs.move())
        this.obstaclesBottom.forEach(obs => obs.move())

    },
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },
    reset() {
        this.background = new Background(this.ctx, this.width, this.height, "./images/bg.png");
        this.player = new Player(this.ctx, this.width, this.height, this.keys)
        this.obstaclesTop = [];
        this.obstaclesBottom = []

        // this.scoreboard = scoreboard;
    },
    generateObstacles() {

        let random = randomInt(-400, -200)
        let randomBottom = random+540
        if (this.framesCounter % 250 == 0) {


            this.obstaclesTop.push(new ObstacleTop(this.ctx, this.width, this.height, 100, 100, random));
            this.obstaclesBottom.push(new ObstacleBottom(this.ctx, this.width, this.height, 100, 100, randomBottom));

            console.log(this.obstaclesBottom);
        }

    },
    isCollisionTop() {
        return this.obstaclesTop.some(obs => {
            return (
                this.player.posX + this.player.width >= obs.posX &&
                this.player.posY + this.player.height >= obs.posY &&
                this.player.posX <= obs.posX + obs.width
            );
        });
    },
    isCollisionBottom() {
        return this.obstaclesBottom.some(obs => {
            return (
                this.player.posX + this.player.width >= obs.posX &&
                this.player.posY + this.player.height >= obs.posY &&
                this.player.posX <= obs.posX + obs.width
            );
        });
    },
    
}