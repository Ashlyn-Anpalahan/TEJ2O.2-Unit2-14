# Copyright (c) 2020 MTHS All rights reserved
#
# Created by: Ashlyn
# Created on: Apr 2026
# This program shows while loops in action.

from microbit import *

# variables
sprite = None
counter = 0

# setup
display.show(Image.HAPPY)

while True:
    # button a (clockwise)
    if button_a.is_pressed():
        # setup
        display.clear()
        counter = 0

        # top edge: move right
        while counter <= 4:
            display.clear()
            display.set_pixel(counter, 0, 9)
            counter = counter + 1
            sleep(500)

        counter = 0
        # right edge: move down
        while counter <= 4:
            display.clear()
            display.set_pixel(4, counter, 9)
            counter = counter + 1
            sleep(500)

        counter = 0
        # bottom edge: move left
        while counter <= 4:
            display.clear()
            display.set_pixel(4 - counter, 4, 9)
            counter = counter + 1
            sleep(500)

        counter = 0
        # left edge: move up
        while counter <= 4:
            display.clear()
            display.set_pixel(0, 4 - counter, 9)
            counter = counter + 1
            sleep(500)

        display.show(Image.HAPPY)

    # button b (counter clockwise)
    if button_b.is_pressed():
        # setup
        display.clear()
        counter = 0

        # left edge: move down
        while counter <= 4:
            display.clear()
            display.set_pixel(0, counter, 9)
            counter = counter + 1
            sleep(500)

        counter = 0
        # bottom edge: move right
        while counter <= 4:
            display.clear()
            display.set_pixel(counter, 4, 9)
            counter = counter + 1
            sleep(500)

        counter = 0
        # right edge: move up
        while counter <= 4:
            display.clear()
            display.set_pixel(4, 4 - counter, 9)
            counter = counter + 1
            sleep(500)

        counter = 0
        # top edge: move left
        while counter <= 4:
            display.clear()
            display.set_pixel(4 - counter, 0, 9)
            counter = counter + 1
            sleep(500)

        display.show(Image.HAPPY)
