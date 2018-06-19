const precision = 10;

export default class BigDouble {
  mantissa: number;
  exponent: number;
  constructor(mantissa: number, exponent: number) {
    this.mantissa = mantissa;
    this.exponent = exponent;
    this.normalize();
  }

  private normalize() {
    while (this.mantissa < 1 && this.mantissa != 0) {
      this.exponent -= 1;
      this.mantissa *= 10;
    }
    while (this.mantissa >= 10) {
      this.exponent += 1;
      this.mantissa /= 10;
    }
    return this;
  }

  set(newDouble: BigDouble): void {
    this.mantissa = newDouble.mantissa;
    this.exponent = newDouble.exponent;
  }

  add(newDouble: BigDouble): boolean {
    if (!(newDouble instanceof BigDouble)) {
      console.log("[BigDouble | add] Argument must be of type BigDouble");
      return false;
    }
    if (
      this.exponent - newDouble.exponent > 0 &&
      this.exponent - newDouble.exponent < precision
    ) {
      this.mantissa +=
        newDouble.mantissa / Math.pow(10, this.exponent - newDouble.exponent);
    } else if (this.exponent - newDouble.exponent < 0) {
      this.exponent = newDouble.exponent;
      if (this.exponent - newDouble.exponent > -precision) {
        this.mantissa =
          this.mantissa / Math.pow(10, newDouble.exponent - this.exponent);
      } else {
        this.mantissa = newDouble.mantissa;
      }
    } else if (this.exponent - newDouble.exponent === 0) {
      this.mantissa += newDouble.mantissa;
    } else {
      console.log("[BigDouble | add] Could not add " + newDouble);
      return false;
    }

    this.normalize();
    return true;
  }

  addCount(mantissa: number, exponent: number): boolean {
    if (this.exponent - exponent > 0 && this.exponent - exponent < precision) {
      this.mantissa += mantissa / Math.pow(10, this.exponent - exponent);
    } else if (this.exponent - exponent < 0) {
      this.exponent = exponent;
      if (this.exponent - exponent > -precision) {
        this.mantissa = this.mantissa / Math.pow(10, exponent - this.exponent);
      } else {
        this.mantissa = mantissa;
      }
    } else if (this.exponent - exponent === 0) {
      this.mantissa += mantissa;
    } else {
      console.log(
        "[BigDouble | add] Could not add " + mantissa + "e" + exponent
      );
      return false;
    }

    this.normalize();
    return true;
  }

  subtract(newDouble: BigDouble): boolean {
    if (!(newDouble instanceof BigDouble)) {
      console.log(
        "[BigDouble | subtract] Argument must be of type BigDouble but is " +
          typeof newDouble
      );
      return false;
    }

    if (
      this.exponent - newDouble.exponent > 0 &&
      this.exponent - newDouble.exponent < precision
    ) {
      this.mantissa -=
        newDouble.mantissa / Math.pow(10, this.exponent - newDouble.exponent);
    } else if (this.exponent - newDouble.exponent < 0) {
      return false;
    } else if (this.exponent - newDouble.exponent === 0) {
      if (this.mantissa >= newDouble.mantissa) {
        this.mantissa -= newDouble.mantissa;
      } else {
        return false;
      }
    } else {
      console.log("[BigDouble | subtract] Could not subtract " + newDouble);
    }

    this.normalize();
    return true;
  }

  getTimes(mantissa: number, exponent: number): BigDouble {
    return new BigDouble(
      this.mantissa * mantissa,
      this.exponent + exponent
    ).normalize();
  }

  times(mantissa: number, exponent: number) {
    this.mantissa *= mantissa;
    this.exponent += exponent;
    this.normalize();
    //console.log("times: " + mantissa + "e" + exponent + " to " + this.mantissa + "e" + this.exponent);
    return this;
  }

  toString(): string {
    if (this.exponent < 2) {
      //console.log(this.mantissa + "e" + this.exponent);
      return (this.mantissa * Math.pow(10, this.exponent)).toFixed(2);
    }
    return this.mantissa.toFixed(2) + "e" + this.exponent;
  }

  log(): void {
    console.log(this);
  }
}
