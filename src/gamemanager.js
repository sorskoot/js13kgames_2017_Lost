AFRAME.registerComponent('gamemanager', {
    schema: {
        state: { value: 'int', default: 0 }
        // 0 == player
        // 1 == enemy
    },
    init: function () {
        this.player = document.getElementById('player');
        this.camera = document.getElementById('camera');
        this.camera.deltaRot = 0;
        this.map = document.getElementById('mapgeo').components.map;
        this.message = document.querySelector('[canvas-text]').components['canvas-text'];
        this.cursor = document.querySelector('[cursor]');
        this.raycaster = AFRAME.scenes[0].querySelector('[raycaster]').components.raycaster;
        this.updateTileWithPlayer({x:0,y:0});
        window.GM = this;
    },
    update: function (d) {
        if (this.data.state > 1) return;
        switch (this.data.state) {
            case 0:
                this.player.components.player.move(d);
                break;
            case 1:
                this.cursor.setAttribute('cursor', { fuse: false });
                let mobs = document.querySelectorAll('[mob]');
                mobs.forEach(d => d.components.mob.move());
                setTimeout(() => {
                    this.cursor.setAttribute('cursor', { fuse: true });
                    this.data.state = 0;
                }, 500);
                break;
        }
    },

    updateTileWithPlayer: function (coords) {
        let oldposition = document.querySelector(`.player-position`);
        if (!!oldposition) {
            oldposition.classList.remove('player-position');
        }

        let newposition = document.querySelector(`#floor-${coords.x + (size / 2)}-${coords.y + (size / 2)}`);
        newposition.classList.add('player-position');

        this.updateSelectableTiles();
    },

    updateSelectableTiles:function (coords)
    {
        let oldselectables = document.querySelectorAll(`.selectable`);
        for (let i = 0; i < oldselectables.length; i++) {
            oldselectables[i].classList.remove('selectable');
        }

        let playerposition = document.querySelector(`.player-position`);
        let px = playerposition.id.split('-')[1];
        let py = playerposition.id.split('-')[2];

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let newtile = document.getElementById(`floor-${+px+i}-${+py+j}`);
                if(!!newtile && !newtile.classList.contains('player-position')){
                    newtile.classList.add('selectable');
                }
            }
        }

        this.raycaster.refreshObjects();
    }
});





