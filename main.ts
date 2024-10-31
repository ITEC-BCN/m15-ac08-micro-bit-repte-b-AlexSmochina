input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", temp), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1023
    )
    music.play(music.stringPlayable("C F C5 A D B E G ", temp), music.PlaybackMode.UntilDone)
    if (input.acceleration(Dimension.X) < 100) {
        temp = 200
    }
})
let temp = 0
temp = 100
