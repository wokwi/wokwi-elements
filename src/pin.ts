export type PinFunction = 'power' | 'i2c' | 'spi' | 'gpio' | 'pwm' | 'analog' | 'dac' | 'usart';

export interface ElementPin {
  /**
   * A name that uniquely identifies the pin, e.g. `GND` or `VCC`.
   * Pins that are connected internally must have the same name prefix, followed by a single dot,
   * and a unique suffix (e.g. `GND.1` and `GND.2`).
   */
  name: string;

  /** The x-coordinate of the pin, relative to the element's origin */
  x: number;

  /** The y-coordinate of the pin, relative to the element's origin */
  y: number;

  /** The functions of this pin. Leave empty for generic pins without a designated function. **/
  functions: PinFunction[];

  /**
   * List of signals carried by this pin. This is useful for pins such as I²C or SPI pins, where there are designated
   * signal names (e.g. for I²C we have `SCL` and `SDA`). Set to an empty array if the pin isn't tied to specific
   * protocol signals.
   */
  signals: string[];

  /**
   * Optional pin description
   */
  description?: string;
}
