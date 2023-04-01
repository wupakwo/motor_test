basic.showIcon(IconNames.Giraffe)
music.playMelody("C5 B A G F E D C ", 120)
basic.forever(function () {
    sensors.actuator_motor_run(AnalogPin.P14, AnalogPin.P13, run_turn.forward, sensors.slideRheostat(AnalogPin.P0))
    sensors.actuator_servo(AnalogPin.P1, 0)
    basic.pause(1000)
    sensors.actuator_servo(AnalogPin.P1, 360)
    basic.pause(1000)
})
