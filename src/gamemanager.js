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
        this.cursor = document.querySelector('[cursor]');        
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
    }


});





