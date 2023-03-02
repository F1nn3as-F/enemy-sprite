input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
let Player: game.LedSprite = null
basic.showString("PLAY")
Player = game.createSprite(0, 2)
let Enemy = game.createSprite(randint(1, 5), randint(1, 5))
basic.forever(function () {
    if (Player.isTouching(Enemy)) {
        Player.delete()
        Enemy.delete()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.showString("PRESS START TO PLAY AGAIN")
    }
})
