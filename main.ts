let inclinacion = 0
let tempo = 0
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("A F E F D G E F ", 100), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    // Obtener la inclinación y ajustar el tempo
    inclinacion = input.rotation(Rotation.Pitch)
    tempo = 100 * (inclinacion / 3)
    music.setTempo(tempo)
    music.play(music.stringPlayable("G F G A - F E D ", tempo), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("G D A F C C5 A E ", 100), music.PlaybackMode.UntilDone)
})
