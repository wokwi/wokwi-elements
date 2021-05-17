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
import { IRReceiverElement } from './ir-receiver-element';

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
      'wokwi-ir-receiver': WokwiElement<IRReceiverElement>;
    }
  }
}
