var pieces = [
    [
        [0, 0, 2, 0, 0],
        [2, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 2],
        [0, 0, 0, 2, 0]
    ],
    [
        [0, 0, 2, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [2, 1, 0, 1, 2],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 2, 0, 0]
    ],
    [
        [0, 0, 2, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [2, 1, 1, 1, 2],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 2, 0, 0]
    ],
    [
        [0, 1, 1, 1, 0],
        [2, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 2],
        [0, 1, 1, 1, 0]
    ],
    [
        [0, 0, 0, 0],
        [2, 1, 1, 2],
        [0, 0, 0, 0],
    ],
    [
        [0, 2, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 2, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [2, 1, 1, 1, 1, 1, 1, 2],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 2, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 2, 0],
    ],
    [
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 1, 1, 0],
        [2, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 1, 1],
        [0, 1, 0, 0, 1, 1],
        [0, 0, 1, 1, 1, 2],
        [0, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 2, 0],
    ],
    [
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [2, 1, 1, 1, 1, 2],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 2, 0, 0],
    ],
    [
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [2, 1, 1, 1, 1, 0, 1, 1, 2, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 1, 1, 0, 0],
    ]
];

var mapWidth = 256;

let rnd = m => ~~(Math.random() * m);

let pl = pieces.length;
for (let i = 0; i < pl; i++) {
    let clone = pieces[i].slice();
    for (let j = 0; j < clone.length; j++)
        clone[j] = clone[j].slice().reverse();
    pieces.push(clone);
    let clone2 = pieces[i].slice();
    clone2 = clone2.reverse();
    pieces.push(clone2);
    let clone3 = clone.slice();
    clone3 = clone3.reverse();
    pieces.push(clone3);
}
for (let i = 0; i < pieces.length; i++) {
    pieces[i].size = { w: pieces[i][0].length, h: pieces[i].length };
    pieces[i].exits = [];
    for (let j = 0; j < pieces[i].size.h; j++) {
        for (let h = 0; h < pieces[i].size.w; h++) {
            if (pieces[i][j][h] === 2) {
                pieces[i].exits.push({ x: h, y: j });
            }
        }
    }
}

var mapCanvas = document.createElement('canvas');
mapCanvas.width = mapWidth;
mapCanvas.height = mapWidth;

//Temp during development
mapCanvas.style.width = '1024px';
mapCanvas.style.height = '1024px';
mapCanvas.style.imageRendering = 'pixelated';
document.body.appendChild(mapCanvas);
document.body.style.backgroundColor = '#000';
//END

var mapContext = mapCanvas.getContext('2d');
mapContext.fillStyle = "rgba(0, 0, 0, 0)";
mapContext.fillRect(0, 0, mapWidth, mapWidth);

let first = true;
var addRoom = (exit, special) => {
    let piece;
    let exits = [];
    let clear = false;
    let targetX;
    let targetY;
    let tries = 25;
    do {
        piece = pieces[rnd(pieces.length)];
        for (var q = 0; q < piece.exits.length; q++) {
            //calcalate new position so that the '2s' go on top of eachother, but tiles not overlap
            //if they overlap try a different '2'
            //if there isn't a 2, try another piece
            targetX = exit.x - piece.exits[q].x;
            targetY = exit.y - piece.exits[q].y;
            var imgData = mapContext.getImageData(targetX, targetY, piece.size.w, piece.size.h);
            clear = imgData.data.every(d => d === 0)
            if (clear) {
                break;
            }
        }

        tries--;
    } while (tries > 0 && !clear);
    if (!clear) {
        piece = [[1]];
        piece.exits = [{}];
        targetX = exit.x;
        targetY = exit.y;
        q = 0;
        // return [];
    }
    mapContext.fillStyle = "#4A4";
    if (!first) mapContext.fillRect(targetX + piece.exits[q].x || 0, targetY + piece.exits[q].y || 0, 1, 1);
    mapContext.fillStyle = !first ? "#888" : "#A44";
    if (special === 1) {
        mapContext.fillStyle = "#F0F";
    }
    if (special === 2) {
        mapContext.fillStyle = "#0FF";
    }
    first = false;
    piece.forEach((i, py) => {
        i.forEach((j, px) => {
            if (j === 1) {

                mapContext.fillRect(targetX + px, targetY + py, 1, 1);
            }
            if (j === 2) {
                exits.push({ x: targetX + px, y: targetY + py });
            }
        })
    });
    return exits;
}
let loops=10;
let exits = [{ x: mapWidth / 2, y: mapWidth / 2 }];
for (let i = 0; i < loops; i++) {
    let newExits = [];
    let special;
    exits.forEach((exit, ind) => {
        if (i == loops-1 && ind == exits.length - ~~(exits.length/3)) {
            special = 1;
        }
        if (i == loops-1 && ind ==  ~~(exits.length/3)) {
            special = 2;
        }
        let q = addRoom(exit, special);
        newExits = newExits.concat(q);
        special = 0;
    });
    exits = newExits;
}
