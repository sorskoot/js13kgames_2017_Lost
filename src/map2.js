var pieces = [
    [
        5, 5,
        0, 0, 0, 2, 0,
        2, 1, 1, 1, 1,
        0, 1, 1, 1, 1,
        1, 1, 0, 1, 0,
        1, 1, 1, 1, 0
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
    ],
    [
        2, 5,
        0, 1,
        1, 2,
        1, 1,
        1, 0,
        2, 0,
    ],
];

let rnd = m => ~~(Math.random() * m);

var mapWidth = 64;

var map = {
    tiles: Array(mapWidth * mapWidth).fill(0)
};
/// To Index
var toi = (x, y) => y * mapWidth + x;

var addRoom=(pos)=>{
    let piece = rnd(3);
    // let pos = rnd(toi(mapWidth - pieces[piece][0], 
    //                   mapWidth - pieces[piece][1]));
    console.log(pos);
    pieces[piece].slice(2).map((v, i) => {
        let y = ~~(i / pieces[piece][0]);
        let x = i % pieces[piece][0];
        let ty = (pos % mapWidth + y);
        let tp = toi((pos%mapWidth) + x, ty);
        if (tp < mapWidth * mapWidth) { map.tiles[tp] = v; }
    });
}
//for (let i = 0; i < 25; i++) {
    addRoom(toi(mapWidth/2,mapWidth/2));
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
                pos = toi(x, y);
                var tile = map.tiles[pos];
                if (tile == 0) this.ctx.fillStyle = '#351330';
                else if (tile == 1) this.ctx.fillStyle = '#64908A';
                else if (tile == 3) this.ctx.fillStyle = '#90648A';
                else this.ctx.fillStyle = '#424254';
                this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
            }
        }
    }
};

Renderer.Initialize();
Renderer.Update();