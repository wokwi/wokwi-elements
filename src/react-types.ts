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

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wokwi-7segment': Partial<SevenSegmentElement>;
      'wokwi-arduino-uno': Partial<ArduinoUnoElement>;
      'wokwi-lcd1602': Partial<LCD1602Element>;
      'wokwi-led': Partial<LEDElement>;
      'wokwi-neopixel': Partial<NeoPixelElement>;
      'wokwi-pushbutton': Partial<PushbuttonElement>;
      'wokwi-resistor': Partial<ResistorElement>;
      'wokwi-membrane-keypad': Partial<MembraneKeypadElement>;
      'wokwi-potentiometer': Partial<PotentiometerElement>;
      'wokwi-neopixel-matrix': Partial<NeopixelMatrixElement>;
      'wokwi-ssd1306': Partial<SSD1306Element>;
      'wokwi-buzzer': Partial<BuzzerElement>;
      'wokwi-rotary-dialer': Partial<RotaryDialerElement>;
      'wokwi-servo': Partial<ServoElement>;
      'wokwi-dht22': Partial<DHT22Element>;
      'wokwi-arduino-mega': Partial<ArduinoMegaElement>;
      'wokwi-arduino-nano': Partial<ArduinoNanoElement>;
    }
  }
}
