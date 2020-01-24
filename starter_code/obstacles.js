const space = 100


// const randomFloat = (min, max) => Math.random() * (max - min) + min;
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const shuffle = array => array.sort(() => Math.random() - 0.5);
// const tubeTop = randomInt(-400, -200)
// const tubeBottom = tubeTop+540
class ObstacleTop {
    constructor(ctx, gameWidth, gameHeight, playerPosY0, playerHeight, posY) {
        this.ctx = ctx;
        this.width = 90;
        this.height = 440;

        this.posX = 450
        this.posY = posY,

        this.velX = 1;
        this.image = new Image();
        this.image.src = './images/obstacle_top.png';
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height
        );

    }

    move() {
        this.posX -= this.velX;
    }
}

class ObstacleBottom {
    constructor(ctx, gameWidth, gameHeight, playerPosY0, playerHeight, posY) {
        this.ctx = ctx;
        this.width = 90;
        this.height = 440;

        this.posX = 450;
        this.posY = posY;

        this.velX = 1;
        this.image = new Image();
        this.image.src = './images/obstacle_bottom.png';
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height
        );

    }

    move() {
        this.posX -= this.velX;
    }
}