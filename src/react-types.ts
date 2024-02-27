/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { SevenSegmentElement } from './7segment-element';
import { ArduinoUnoElement } from './arduino-uno-element';
import { BuzzerElement } from './buzzer-element';
import { LCD1602Element } from './lcd1602-element';
import { LEDElement } from './led-element';
import { MembraneKeypadElement } from './membrane-keypad-element';
import { NeoPixelElement } from './neopixel-element';
import { NeopixelMatrixElement } from './neopixel-matrix-element';
import { PotentiometerElement } from './potentiometer-element';
import { PushbuttonElement } from './pushbutton-element';
import { ResistorElement } from './resistor-element';
import { RotaryDialerElement } from './rotary-dialer-element';
import { SSD1306Element } from './ssd1306-element';
import { ServoElement } from './servo-element';
import { DHT22Element } from './dht22-element';
import { ArduinoMegaElement } from './arduino-mega-element';
import { ArduinoNanoElement } from './arduino-nano-element';
import { Ds1307Element } from './ds1307-element';
import { LEDRingElement } from './led-ring-element';
import { SlideSwitchElement } from './slide-switch-element';
import { HCSR04Element } from './hc-sr04-element';
import { LCD2004Element } from './lcd2004-element';
import { AnalogJoystickElement } from './analog-joystick-element';
import { SlidePotentiometerElement } from './slide-potentiometer-element';
import { IRReceiverElement } from './ir-receiver-element';
import { IRRemoteElement } from './ir-remote-element';
import { PIRMotionSensorElement } from './pir-motion-sensor-element';
import { NTCTemperatureSensorElement } from './ntc-temperature-sensor-element';
import { HeartBeatSensorElement } from './heart-beat-sensor-element';
import { TiltSwitchElement } from './tilt-switch-element';
import { FlameSensorElement } from './flame-sensor-element';
import { GasSensorElement } from './gas-sensor-element';
import { FranzininhoElement } from './franzininho-element';
import { NanoRP2040ConnectElement } from './nano-rp2040-connect-element';
import { SmallSoundSensorElement } from './small-sound-sensor-element';
import { BigSoundSensorElement } from './big-sound-sensor-element';
import { MPU6050Element } from './mpu6050-element';
import { ESP32DevkitV1Element } from './esp32-devkit-v1-element';
import { KY040Element } from './ky-040-element';
import { PhotoresistorSensorElement } from './photoresistor-sensor-element';
import { RGBLedElement } from './rgb-led-element';
import { ILI9341Element } from './ili9341-element';
import { LedBarGraphElement } from './led-bar-graph-element';
import { MicrosdCardElement } from './microsd-card-element';
import { DipSwitch8Element } from './dip-switch-8-element';
import { StepperMotorElement } from './stepper-motor-element';
import { HX711Element } from './hx711-element';
import { KS2EMDC5Element } from './ks2e-m-dc5-element';
import { BiaxialStepperElement } from './biaxial-stepper-element';
import type React from 'react';
import { BreadboardElement } from './breadboard-element';

type WokwiElement<T> = Partial<T> & React.ClassAttributes<T>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wokwi-7segment': WokwiElement<SevenSegmentElement>;
      'wokwi-arduino-uno': WokwiElement<ArduinoUnoElement>;
      'wokwi-lcd1602': WokwiElement<LCD1602Element>;
      'wokwi-led': WokwiElement<LEDElement>;
      'wokwi-neopixel': WokwiElement<NeoPixelElement>;
      'wokwi-pushbutton': WokwiElement<PushbuttonElement>;
      'wokwi-resistor': WokwiElement<ResistorElement>;
      'wokwi-membrane-keypad': WokwiElement<MembraneKeypadElement>;
      'wokwi-potentiometer': WokwiElement<PotentiometerElement>;
      'wokwi-neopixel-matrix': WokwiElement<NeopixelMatrixElement>;
      'wokwi-ssd1306': WokwiElement<SSD1306Element>;
      'wokwi-buzzer': WokwiElement<BuzzerElement>;
      'wokwi-rotary-dialer': WokwiElement<RotaryDialerElement>;
      'wokwi-servo': WokwiElement<ServoElement>;
      'wokwi-dht22': WokwiElement<DHT22Element>;
      'wokwi-arduino-mega': WokwiElement<ArduinoMegaElement>;
      'wokwi-arduino-nano': WokwiElement<ArduinoNanoElement>;
      'wokwi-ds1307': WokwiElement<Ds1307Element>;
      'wokwi-neopixel-ring': WokwiElement<LEDRingElement>;
      'wokwi-slide-switch': WokwiElement<SlideSwitchElement>;
      'wokwi-hc-sr04': WokwiElement<HCSR04Element>;
      'wokwi-lcd2004': WokwiElement<LCD2004Element>;
      'wokwi-analog-joystick': WokwiElement<AnalogJoystickElement>;
      'wokwi-slide-potentiometer': WokwiElement<SlidePotentiometerElement>;
      'wokwi-ir-receiver': WokwiElement<IRReceiverElement>;
      'wokwi-ir-remote': WokwiElement<IRRemoteElement>;
      'wokwi-pir-motion-sensor': WokwiElement<PIRMotionSensorElement>;
      'wokwi-ntc-temperature-sensor': WokwiElement<NTCTemperatureSensorElement>;
      'wokwi-heart-beat-sensor': WokwiElement<HeartBeatSensorElement>;
      'wokwi-tilt-switch': WokwiElement<TiltSwitchElement>;
      'wokwi-flame-sensor': WokwiElement<FlameSensorElement>;
      'wokwi-gas-sensor': WokwiElement<GasSensorElement>;
      'wokwi-franzininho': WokwiElement<FranzininhoElement>;
      'wokwi-nano-rp2040-connect': WokwiElement<NanoRP2040ConnectElement>;
      'wokwi-small-sound-sensor': WokwiElement<SmallSoundSensorElement>;
      'wokwi-big-sound-sensor': WokwiElement<BigSoundSensorElement>;
      'wokwi-mpu6050': WokwiElement<MPU6050Element>;
      'wokwi-esp32-devkit-v1': WokwiElement<ESP32DevkitV1Element>;
      'wokwi-ky-040': WokwiElement<KY040Element>;
      'wokwi-photoresistor-sensor': WokwiElement<PhotoresistorSensorElement>;
      'wokwi-rgb-led': WokwiElement<RGBLedElement>;
      'wokwi-ili9341': WokwiElement<ILI9341Element>;
      'wokwi-led-bar-graph': WokwiElement<LedBarGraphElement>;
      'wokwi-microsd-card': WokwiElement<MicrosdCardElement>;
      'wokwi-dip-switch-8': WokwiElement<DipSwitch8Element>;
      'wokwi-stepper-motor': WokwiElement<StepperMotorElement>;
      'wokwi-hx711': WokwiElement<HX711Element>;
      'wokwi-ks2e-m-dc5': WokwiElement<KS2EMDC5Element>;
      'wokwi-biaxial-stepper': WokwiElement<BiaxialStepperElement>;
      'wokwi-breadboard': WokwiElement<BreadboardElement>;
    }
  }
}
