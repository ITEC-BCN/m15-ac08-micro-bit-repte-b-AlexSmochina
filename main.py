def on_button_pressed_a():
    music.play(music.string_playable("E B C5 A B G A F ", 120),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global temp
    temp = 120
    led.plot_bar_graph(input.acceleration(Dimension.X), 1023)
    music.play(music.string_playable("C F C5 A D B E G ", temp),
        music.PlaybackMode.UNTIL_DONE)
    if inclinacion < 100:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

temp = 0
inclinacion = 0
inclinacion = input.acceleration(Dimension.X)