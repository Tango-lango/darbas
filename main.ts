input.onGesture(Gesture.Shake, function () {
    let kas_karenta = 0
    set_karenta = randint(0, 2)
    if (kas_karenta == 0) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
        basic.clearScreen()
    } else if (kas_karenta == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let set_karenta = 0
basic.showIcon(IconNames.Asleep)
basic.pause(500)
basic.clearScreen()
