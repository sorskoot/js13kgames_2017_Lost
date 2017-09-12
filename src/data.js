window.D = {
    player: {
        t: 1,  // type : player
        s: 2,  // sprite: 2    
        h: 10, // start health
    }, mobs: [{
        h: [3, 2], // health: between 2 and 5
        d: [1, 1], //damage between 1 and 2
        i: 6,  // color index 8
        m: 0, // minimal distance from start
        c: 70 // change=70%
    },
    {
        h: [4, 4], // health: between 4 and 8
        d: [3, 2], //damage between 2 and 5
        i: 7, // color index 8
        m: 10, // minimal distance from start
        c: 20 //change 30%        
    },
    {
        h: [6, 6], // health: between 6 and 12
        d: [5, 4], //damage between 4 and 9
        i: 9,  // color index 8
        m: 30, // minimal distance from start
        c: 10 // change 10%
    }],
    floors: [{
        t: 3, // type: floor
        b: 1, // biome: 1
        s: [1],
        i: [2, 5]
    }],
    items: [
        {
            t: 1,
            n: "a heart", //name
            s: 13, //sprite
            i: -1, // palette index
            m: 0, // minimal distance from start
            c: 70, // change of the item spawning
        }, {
            t: 2, // subtype : sword",
            n: "an iron sword", //name
            d: 3, // damage
            s: 5, //sprite
            i: 1, // palette index
            m: 0, // minimal distance from start
            c: 20, // change of the item spawning

        }, {
            t: 2, // subtype : sword",
            n: "a golden sword", //name
            d: 6, // damage
            s: 5, //sprite
            i: 23, // palette index
            m:6, // minimal distance from start
            c: 10, // change of the item spawning
        }, {
            t: 2, // subtype : sword",
            n: "a diamond sword", //name
            d: 10, // damage
            s: 5, //sprite
            i: 24, // palette index
            m: 12, // minimal distance from start
            c: 2, // change of the item spawning
        }, {
            t: 3, // subtype : shield",
            n: "an iron shield", //name
            b: 2, // block value
            s: 4, //sprite
            i: 0, // palette index
            m: 0, // minimal distance from start
            c: 20, // change of the item spawning
        }, {
            t: 3, // subtype : shield",
            n: "a golden shield", //name
            b: 4, // block value
            s: 4, //sprite
            i: 23, // palette index
            m: 6, // minimal distance from start
            c: 10, // change of the item spawning
        }, {
            t: 3, // subtype : shield",
            n: "a diamond shield", //name
            b: 7, // block value
            s: 4, //sprite
            i: 24, // palette index
            m: 12, // minimal distance from start
            c: 5, // change of the item spawning
        }],
    objs: [{ //objectives
        t: 8, // item type = 8
        p: 1, // piece =1
        n: "your plane's cabin",
        s: 6
    },
    {
        t: 8, // item type = 8
        p: 2,
        n: "your plane's left wing",
        s: 7
    },{
        t: 8, // item type = 8
        p: 3,
        n: "your plane's body",
        s: 8
    },{
        t: 8, // item type = 8
        p: 4,
        n: "your plane's right wing",
        s: 9
    },{
        t: 8, // item type = 8
        p: 5,
        n: "your plane's thruster",
        s: 10
    }]
}