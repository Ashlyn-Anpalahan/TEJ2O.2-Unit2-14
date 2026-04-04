/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Apr 2026
 * This program shows while loops in action.
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// button a (clockwise)
input.onButtonPressed(Button.A, function () {
    
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

// top edge: move right
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    
    loopCounter = 0

// right edge: move down
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    
    loopCounter = 0

// bottom edge: move left
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, 4 - loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    loopCounter = 0 

// left edge: move up
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.Y, 4 - loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// button b (counter clockwise)
input.onButtonPressed(Button.B, function () {
   
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    
    // left edge: move down
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    // bottom edge: move right
    loopCounter = 0
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    // right edge: move up
    loopCounter = 0
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.Y, 4 - loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    // top edge: move left
    loopCounter = 0
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, 4 - loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
