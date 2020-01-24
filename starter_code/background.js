class Background {
    constructor(ctx, w, h, imgSource) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;

        this.image = new Image();
        this.image.src = imgSource;

        this.posX = 0;
        this.posY = 0;

        this.velX = 5;
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height);
    }

    move() {
        if (this.posX <= -this.width) {
            this.posX = 0;
        }
        this.posX -= this.velX;
        
    }
}









// class Background {
//     constructor(ctx, w, h, imgSource) {
//         this.ctx = ctx;
//         this.width = w;
//         this.height = h;

//         this.image = new Image();
//         this.image.src = imgSource;

//         this.posX = 0;
//         this.posY = 0;

//         this.velX = 5000;
//     }

//     draw() {
//         this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
//         this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height);

//     }
//     move() {
//         // debugger
//         if (this.posX <= -this.width) {
//             this.posX = 0;

//         }
//         this.posX -= this.velX;

//     }


// }













// // const background = {
// //     width: game.width,
// //     height: game.height,
// //     posX: 0,
// //     posY: 0,
// //     ctx: game.ctx,
// //     img: new Image(),

// //     draw() {
// //         this.img.src = './images/bg.png'
// //         this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height)
// //         console.log('asdf')

// //     }

// // }