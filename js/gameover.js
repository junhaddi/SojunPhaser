var gameOver = function(game) {}

gameOver.prototype = {
    create: function() {
        this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
        if(Game.jumpButton.isDown) {
            this.game.state.start('inGame');
        }
    }
}