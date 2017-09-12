AFRAME.registerComponent('gamemanager', {
    schema: {
        state: { value: 'int', default: 0 }
        // 0 == player
        // 1 == enemy
    },
    init: function () {
        this.player = document.getElementById('player');
        this.camera = document.getElementById('camera');
        this.map = document.getElementById('mapgeo').components.map;
        this.message = document.querySelector('[canvas-text]').components['canvas-text'];
        this.camera.rot = 0;
        window.GM = this;
    },
    update: function (d) {
        switch (this.data.state) {
            case 0:
                console.log('player');
                this.player.components.player.move(d);
                break;
            case 1:
                console.log('enemy');
                let mobs = document.querySelectorAll('[mob]');
                mobs.forEach(d => d.components.mob.move());
                setTimeout(() => {
                    this.data.state = 0;
                }, 500);
                break;
        }
    }


});





