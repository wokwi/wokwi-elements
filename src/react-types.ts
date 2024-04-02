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
import { BreadboardElement } from './breadboard-element';
import { ShowPinsElement } from './show-pins-element';
import { MainBreadboardElement } from './main-breadboard-element';
import { McuBreadboardElement } from './mcu-breadboard-element';

import type React from 'react';

type WokwiElement<T> = Partial<T> & React.ClassAttributes<T>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      SevenSegment: WokwiElement<SevenSegmentElement>;
      ArduinoUno: WokwiElement<ArduinoUnoElement>;
      LCD1602: WokwiElement<LCD1602Element>;
      LED: WokwiElement<LEDElement>;
      NeoPixel: WokwiElement<NeoPixelElement>;
      Pushbutton: WokwiElement<PushbuttonElement>;
      Resistor: WokwiElement<ResistorElement>;
      MembraneKeypad: WokwiElement<MembraneKeypadElement>;
      Potentiometer: WokwiElement<PotentiometerElement>;
      NeopixelMatrix: WokwiElement<NeopixelMatrixElement>;
      SSD1306: WokwiElement<SSD1306Element>;
      Buzzer: WokwiElement<BuzzerElement>;
      RotaryDialer: WokwiElement<RotaryDialerElement>;
      Servo: WokwiElement<ServoElement>;
      DHT22: WokwiElement<DHT22Element>;
      ArduinoMega: WokwiElement<ArduinoMegaElement>;
      ArduinoNano: WokwiElement<ArduinoNanoElement>;
      DS1307: WokwiElement<Ds1307Element>;
      LEDRing: WokwiElement<LEDRingElement>;
      SlideSwitch: WokwiElement<SlideSwitchElement>;
      HCSR04: WokwiElement<HCSR04Element>;
      LCD2004: WokwiElement<LCD2004Element>;
      AnalogJoystick: WokwiElement<AnalogJoystickElement>;
      SlidePotentiometer: WokwiElement<SlidePotentiometerElement>;
      IRReceiver: WokwiElement<IRReceiverElement>;
      IRRemote: WokwiElement<IRRemoteElement>;
      PIRMotionSensor: WokwiElement<PIRMotionSensorElement>;
      NTCTemperatureSensor: WokwiElement<NTCTemperatureSensorElement>;
      HeartBeatSensor: WokwiElement<HeartBeatSensorElement>;
      TiltSwitch: WokwiElement<TiltSwitchElement>;
      FlameSensor: WokwiElement<FlameSensorElement>;
      GasSensor: WokwiElement<GasSensorElement>;
      Franzininho: WokwiElement<FranzininhoElement>;
      NanoRP2040Connect: WokwiElement<NanoRP2040ConnectElement>;
      SmallSoundSensor: WokwiElement<SmallSoundSensorElement>;
      BigSoundSensor: WokwiElement<BigSoundSensorElement>;
      MPU6050: WokwiElement<MPU6050Element>;
      ESP32DevkitV1: WokwiElement<ESP32DevkitV1Element>;
      KY040: WokwiElement<KY040Element>;
      PhotoresistorSensor: WokwiElement<PhotoresistorSensorElement>;
      RGBLed: WokwiElement<RGBLedElement>;
      ILI9341: WokwiElement<ILI9341Element>;
      LedBarGraph: WokwiElement<LedBarGraphElement>;
      MicrosdCard: WokwiElement<MicrosdCardElement>;
      DipSwitch8: WokwiElement<DipSwitch8Element>;
      StepperMotor: WokwiElement<StepperMotorElement>;
      HX711: WokwiElement<HX711Element>;
      KS2EMDC5: WokwiElement<KS2EMDC5Element>;
      BiaxialStepper: WokwiElement<BiaxialStepperElement>;
      Breadboard: WokwiElement<BreadboardElement>;
      ShowPins: WokwiElement<ShowPinsElement>;
      MainBreadboard: WokwiElement<MainBreadboardElement>;
      MCUBreadboard: WokwiElement<McuBreadboardElement>;
    }
  }
}
