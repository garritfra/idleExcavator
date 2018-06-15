const precision = 7;

export default class BigDouble {
  constructor(mantissa, exponent) {
    this.mantissa = mantissa;
    this.exponent = exponent;

    while (this.mantissa >= 10) {
      this.exponent += 1;
      this.mantissa -= 10;
    }
  }

  add(other) {
    if (typeof other != BigDouble) {
      console.log("[BigDouble | add] Argument must be of type BigDouble");
      return false;
    }

    if (
      this.exponent - other.exponent > 0 &&
      this.exponent - other.exponent < precision
    ) {
      this.mantissa +=
        other.mantissa / Math.pow(10, this.exponent - other.exponent);
    } else if (this.exponent - other.exponent < 0) {
      this.exponent = other.exponent;
      if (this.exponent - other.exponent > -precision) {
        this.mantissa =
          this.mantissa / Math.pow(10, other.exponent - this.exponent);
      } else {
        this.mantissa = other.mantissa;
      }
    } else if (this.exponent - other.exponent === 0) {
      this.mantissa += other.mantissa;
    } else {
      console.log("[BigDouble | add] Could not add " + other);
    }

    while (this.mantissa >= 10) {
      this.exponent += 1;
      this.mantissa /= 10;
    }
    return true;
  }

  addCount(mantissa, exponent) {
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
    }

    while (this.mantissa >= 10) {
      this.exponent += 1;
      this.mantissa /= 10;
    }
    return true;
  }

  subtract(other) {
    if (typeof other != BigDouble) {
      console.log("[BigDouble | subtract] Argument must be of type BigDouble");
      return false;
    }

    if (
      this.exponent - other.exponent > 0 &&
      this.exponent - other.exponent < precision
    ) {
      this.mantissa -=
        other.mantissa / Math.pow(10, this.exponent - other.exponent);
    } else if (this.exponent - other.exponent < 0) {
      return false;
    } else if (this.exponent - other.exponent === 0) {
      if (this.mantissa >= other.mantissa) {
        this.mantissa -= other.mantissa;
      }
    } else {
      console.log("[BigDouble | subtract] Could not subtract " + other);
    }

    while (this.mantissa < 0) {
      this.exponent -= 1;
      this.mantissa *= 10;
    }
    return true;
  }

  toString() {
    if (this.exponent < 2) {
      return (this.mantissa * Math.pow(10, this.exponent)).toFixed(2);
      console.log(this.mantissa + "e" + this.exponent);
    }
    return Math.floor(this.mantissa * 100) / 100 + "e" + this.exponent;
  }

  log() {
    console.log("Man: " + this.mantissa + " Exp:" + this.exponent);
  }
}