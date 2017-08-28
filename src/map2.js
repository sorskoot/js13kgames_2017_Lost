var pieces = [
    [
        5, 5,
        0, 0, 2, 1, 0,
        2, 1, 1, 1, 1,
        0, 1, 1, 1, 1,
        1, 1, 0, 1, 2,
        1, 1, 1, 2, 0
    ],
    [
        5, 7,
        0, 0, 1, 1, 0,
        0, 1, 1, 1, 1,
        0, 1, 0, 1, 1,
        1, 1, 0, 1, 2,
        1, 1, 1, 1, 0,
        1, 1, 1, 1, 0,
        0, 1, 2, 1, 0
    ], [
        5, 5,
        1, 1, 1, 1, 0,
        2, 1, 1, 1, 0,
        1, 1, 0, 1, 1,
        1, 1, 0, 0, 2,
        0, 1, 1, 1, 0
    ],
    [
        2, 5,
        0, 1,
        1, 2,
        1, 1,
        1, 0,
        2, 0,
    ],

    [
        5, 2,
        0, 1, 1, 1, 2,
        2, 1, 1, 0, 0
    ],
];
var mapWidth = 64;

let rnd = m => ~~(Math.random() * m);
let pl = pieces.length;
for (let i = 0; i < pl; i++) {
    pieces.push(pieces[i].slice(0, 2).concat(pieces[i].slice(2).reverse()));
}
pl = pieces.length;
pieces.forEach(e => {
    let x = e[0], y = e[1];
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

var addRoom = function (pos, roomnum, placement) {
    let placementPos, tx, ty, px = tox(pos), py = toy(pos);
    let currentPiece = pieces[2];//rnd(pl)
    switch (placement) {
        case 't'://top
            placementPos = toi(px - currentPiece.t, py + 1);
            break;
        case 'b'://bottom               
            placementPos = toi(px - currentPiece.b, py - currentPiece[1]);
            break;
        case 'l'://left
            placementPos = toi(px - currentPiece[0], py - currentPiece.l);
            break;
        case 'r'://right
            placementPos = toi(px + 1, py - currentPiece.r);
            break;
        default://undefined
            placementPos = pos;
    }


    currentPiece.slice(2).map((v, i) => {
        let y = ~~(i / currentPiece[0]);
        let x = i % currentPiece[0];
        ty = ~~(placementPos / mapWidth) + y;
        tx = placementPos % mapWidth + x;
        let tp = toi(tx, ty);
        if (tp < mapWidth * mapWidth) { map.tiles[tp] = v; }
    });

    if (roomnum > 0) {
        roomnum--;
        rooms[roomnum] = rooms[roomnum] || '';
        if (currentPiece.t !== undefined && placement != 't' && !~rooms[roomnum].indexOf('t')) {
            rooms[roomnum] += 't';
            roomnum = addRoom(toi(tox(placementPos) + currentPiece.t, toy(placementPos)), roomnum, 'b');
        }
        else if (currentPiece.b !== undefined && placement != 'b' && !~rooms[roomnum].indexOf('b')) {
            rooms[roomnum] += 'b';
            roomnum = addRoom(toi(tox(placementPos) + currentPiece.b, toy(placementPos)), roomnum, 't');
        }
        else if (currentPiece.r !== undefined && placement != 'r' && !~rooms[roomnum].indexOf('r')) {
            rooms[roomnum] += 'r';
            roomnum = addRoom(toi(tox(placementPos), toy(placementPos) + currentPiece.r), roomnum, 'l');
        }
        else if (currentPiece.l !== undefined && placement != 'l' && !~rooms[roomnum].indexOf('l')) {
            rooms[roomnum] += 'l';
            roomnum = addRoom(toi(tox(placementPos), toy(placementPos) + currentPiece.l), roomnum, 'r');
        }
    }
    return roomnum;
}
//for (let i = 0; i < 25; i++) {
addRoom(toi(32, 32), 25);
//}

//for (let i = 0; i < 25; i++) {
//addRoom(rnd(mapWidth * mapWidth));
//}


var Renderer = {
    canvas: null,
    ctx: null,
    size: 1024,
    scale: 0,
    Initialize: function () {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = this.size;
        this.canvas.height = this.size;
        this.ctx = canvas.getContext('2d');
        this.scale = this.canvas.width / mapWidth;
    },
    Update: function () {
        for (var y = 0; y < mapWidth; y++) {
            for (var x = 0; x < mapWidth; x++) {
                let pos = toi(x, y);
                var tile = map.tiles[pos];
                if (tile == 0) this.ctx.fillStyle = '#111111';
                else if (tile == 1) this.ctx.fillStyle = '#AAAAAA';
                else if (tile == 3) this.ctx.fillStyle = '#888888';
                else this.ctx.fillStyle = '#FFFFFF';
                this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
            }
        }
    }
};

Renderer.Initialize();
Renderer.Update();