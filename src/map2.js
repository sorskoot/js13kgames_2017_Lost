var pieces = [
    [
        5, 5,
        0, 0, 2, 0, 0,
        2, 1, 1, 1, 0,
        0, 1, 1, 1, 0,
        0, 1, 0, 1, 2,
        0, 0, 0, 2, 0
    ],
    [
        5, 7,
        0, 0, 2, 0, 0,
        0, 1, 1, 1, 0,
        0, 1, 0, 1, 0,
        2, 1, 0, 1, 2,
        0, 1, 1, 1, 0,
        0, 1, 1, 1, 0,
        0, 0, 2, 0, 0
    ],
    [
        5, 5,
        0, 1, 1, 1, 0,
        2, 1, 1, 1, 0,
        0, 1, 0, 1, 0,
        0, 1, 0, 1, 2,
        0, 1, 1, 1, 0
    ],
    [
        2, 5,
        0, 0,
        0, 0,
        2, 2,
        0, 0,
        0, 0,
    ],

    [
        5, 2,
        0, 0, 2, 0, 0,
        0, 0, 2, 0, 0
    ],
];

var mapWidth = 256;

let rnd = m => ~~(Math.random() * m);
let pl = pieces.length;
for (let i = 0; i < pl; i++) {
    pieces.push(pieces[i].slice(0, 2).concat(pieces[i].slice(2).reverse()));
}
pl = pieces.length;
pieces.forEach(e => {
    let x = e[0],
        y = e[1];
    e.slice(2, x + 2).map((v, i, a) => {
        if (v === 2) e.t = i;
    });
    e.slice(2 + (y - 1) * x, (y - 1) * x + x + 2).map((v, i, a) => {
        if (v === 2) e.b = i;
    })
    for (let i = 0; i < e.length - 2; i += e[0]) {
        if (e[i + 2] === 2) e.l = ~~(i / e[1]);
        if (e[i + 1 + e[0]] === 2) e.r = ~~(i / e[1]);
    }
})

var mapCanvas = document.createElement('canvas');
mapCanvas.width = mapWidth;
mapCanvas.height = mapWidth;

//Temp during development
mapCanvas.style.width = '512px';
mapCanvas.style.height = '512px';
mapCanvas.style.imageRendering = 'pixelated';
document.body.appendChild(mapCanvas);
document.body.style.backgroundColor = '#000';
//END

var mapContext = mapCanvas.getContext('2d');
mapContext.fillStyle = "rgba(0, 0, 0, 0)";
mapContext.fillRect(0, 0, mapWidth, mapWidth);

// //console.log(mapContext.getImageData(32, 32, 1, 1).data.every(d => d === 0));
// mapContext.fillStyle = "rgba(255,255,255,255)";
// mapContext.fillRect(32, 32, 1, 1);
// //console.log(mapContext.getImageData(32, 32, 1, 1).data.every(d => d === 0));

var map = {
    tiles: Array(mapWidth * mapWidth).fill(0)
};
/// To Index
var toi = (x, y) => y * mapWidth + x,
    // to X,Y position
    tox = i => i % mapWidth,
    toy = i => ~~(i / mapWidth);

pieces[0].top = [2];
var RoomsToBuild = 25;
var rooms = [];

var pp = "tlbr";
var addRoom = function (px, py, roomnum, placement) {
    let placementPos, tx, ty, currentPiece,possible,tries=0;
    do {
        tries++;
        for (let i = 0; i < 150; i++) {          
            currentPiece = pieces[rnd(pl)];
            if (currentPiece[placement] !== undefined) {
                break;
            }
        }

        if (currentPiece[placement] === undefined) {
            console.log(`found undefined: ${placement}`)
            return roomnum;
        };

      //  console.log(`${placement} - ${roomnum}`);

        switch (placement) {

            case 'b': //bottom               
                placementPos = { x: px - currentPiece.b, y: py + currentPiece[1] };
                break;
            case 't': //top
                placementPos = { x: px - currentPiece.t, y: py };
                break;
            case 'l': //left
                placementPos = { x: px - currentPiece[0], y: py - currentPiece.r };
                break;
            case 'r': //right
                placementPos = { x: px, y: py - currentPiece.l };
                break;
        }

        //possible = mapContext.getImageData(px, py, currentPiece[0], currentPiece[1]).data.every(d => d === 0);
    } while (!possible && tries < 5);
    currentPiece.slice(2).map((v, i) => {
        let y = ~~(i / currentPiece[0]);
        let x = i % currentPiece[0];
        ty = placementPos.y + y;
        tx = placementPos.x + x;
        //if (tp < mapWidth * mapWidth) { map.tiles[tp] = v; }
        if (v) {
            mapContext.fillStyle = v === 1 ? "#888" : "#844";
            mapContext.fillRect(tx, ty, 1, 1);
        }
    });

    if (roomnum > 0) {
       // console.log(`start ${roomnum}`);
        roomnum--;
        rooms[roomnum] = rooms[roomnum] || '';

        if (currentPiece.r !== undefined && placement != 'r' && !~rooms[roomnum].indexOf('r')) {
         //   console.log(`-- R${currentPiece.r}`);
            rooms[roomnum] += 'r';
            addRoom(placementPos.x, placementPos.y + currentPiece.l, roomnum, 'l');            
        }

        if (currentPiece.l !== undefined && placement != 'l' && !~rooms[roomnum].indexOf('l')) {
           // console.log(`-- L${currentPiece.l}`)
            rooms[roomnum] += 'l';
            addRoom(placementPos.x + currentPiece[0], placementPos.y + currentPiece.r, roomnum, 'r');
        }
        if (currentPiece.b !== undefined && placement != 'b' && !~rooms[roomnum].indexOf('b')) {
            //console.log(`-- B${currentPiece.b}`)
            rooms[roomnum] += 'b';
            addRoom(placementPos.x + currentPiece.b, placementPos.y + currentPiece[1], roomnum, 't');
        }
        if (currentPiece.t !== undefined && placement != 't' && !~rooms[roomnum].indexOf('t')) {
            //console.log(`-- T${currentPiece.t}`)
            rooms[roomnum] += 't';
            addRoom(placementPos.x + currentPiece.t, placementPos.y, roomnum, 'b');
        }

    }
  //  console.log(`${rooms[roomnum]} - ${roomnum}`);
    return roomnum;
}
//for (let i = 0; i < 25; i++) {
var pos = addRoom(mapWidth/2, mapWidth/2, 2500, 't');
//}

//for (let i = 0; i < 25; i++) {
//addRoom(rnd(mapWidth * mapWidth));
//}


// var Renderer = {
//     canvas: null,
//     ctx: null,
//     size: 1024,
//     scale: 0,
//     Initialize: function () {
//         this.canvas = document.getElementById('canvas');
//         this.canvas.width = this.size;
//         this.canvas.height = this.size;
//         this.ctx = canvas.getContext('2d');
//         this.scale = this.canvas.width / mapWidth;
//     },
//     Update: function () {
//         for (var y = 0; y < mapWidth; y++) {
//             for (var x = 0; x < mapWidth; x++) {
//                 let pos = toi(x, y);
//                 var tile = map.tiles[pos];
//                 if (tile == 0) this.ctx.fillStyle = '#111111';
//                 else if (tile == 1) this.ctx.fillStyle = '#AAAAAA';
//                 else if (tile == 3) this.ctx.fillStyle = '#888888';
//                 else this.ctx.fillStyle = '#FFFFFF';
//                 this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
//             }
//         }
//     }
// };

// Renderer.Initialize();
// Renderer.Update();
