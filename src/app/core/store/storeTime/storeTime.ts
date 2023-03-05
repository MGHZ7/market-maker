export class StoreTime {
  static fromString(timeString: string): StoreTime {
    const parts = timeString.split(":");
    return new StoreTime(parseInt(parts[0], 10), parseInt(parts[1], 10));
  }

  _hour: number;
  _minute: number;
  constructor(hour: number, minute: number) {
    this._hour = hour;
    this._minute = minute;
  }

  private _padTimeUnit = (unit: number) => {
    return `00${unit}`.slice(-2);
  };

  get timeString(): string {
    return `${this._padTimeUnit(this._hour)}:${this._padTimeUnit(
      this._minute
    )}`;
  }
}
