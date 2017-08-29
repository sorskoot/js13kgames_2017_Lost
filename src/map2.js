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
    ]
];

var mapWidth = 64;

let rnd = m => ~~(Math.random() * m);

let pl = pieces.length;
for (let i = 0; i < pl; i++) {
    let clone = pieces[i].slice();
    for (let j = 0; j < clone.length; j++)
        clone[j] = clone[j].slice().reverse();
    pieces.push(clone);
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
mapCanvas.style.width = '512px';
mapCanvas.style.height = '512px';
mapCanvas.style.imageRendering = 'pixelated';
document.body.appendChild(mapCanvas);
document.body.style.backgroundColor = '#000';
//END

var mapContext = mapCanvas.getContext('2d');
mapContext.fillStyle = "rgba(0, 0, 0, 0)";
mapContext.fillRect(0, 0, mapWidth, mapWidth);

var addRoom = (exit) => {
    let piece = pieces[rnd(pieces.length)];
    let exits = [];
    let clear = false;
    for (let q = 0; q < 10; q++) {
        //calcalate new position so that the '2s' go on top of eachother, but tiles not overlap
        //if they overlap try a different '2'
        //if there isn't a 2, try another piece
        let targetX = exit.x - piece.exits[0].x;
        let targetY = exit.y - piece.exits[0].y;
        var imgData = mapContext.getImageData(targetX, targetY, piece.size.w, piece.size.h);
        clear = imgData.data.every(d => d === 0)
        if (clear) {
            q = 1000;
        }
    }
    if (!clear) {
        return [];
    }
    piece.forEach((i, py) => {
        i.forEach((j, px) => {
            if (j === 1) {
                mapContext.fillStyle = "#888";
                mapContext.fillRect(targetX + px, targetY + py, 1, 1);
            }
            if (j === 2) {
                exits.push({ x: targetX + px, y: targetY + py });
            }
        })
    });
    return exits;
}

let exits = [{ x: 32, y: 32 }];
for (let i = 0; i < 3; i++) {
    let newExits = [];
    exits.forEach(exit => {
        let q = addRoom(exit);
        newExits = newExits.concat(q);
    });
    exits = newExits;
}
