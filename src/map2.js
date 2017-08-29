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
                pieces[i].exits.push({ x: j, y: h });
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

var addRoom = () => {
    let piece = pieces[rnd(pieces.length)];
    draw(32, 32, piece);

};

var draw = (x, y, piece) => {
    piece.forEach((i, py) => {
        i.forEach((j, px) => {
            if (j) {
                mapContext.fillStyle = j === 1 ? "#888" : "#844";
                mapContext.fillRect(x + px, y + py, 1, 1);
            }
        })
    });
}

addRoom();