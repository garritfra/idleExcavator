const precision = 10;

export default class BigDouble {
  constructor(mantissa, exponent) {
    this.mantissa = mantissa;
    this.exponent = exponent;
    this.normalize();
  }

  normalize() {
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

  add(other) {
    if (!(other instanceof BigDouble)) {
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
      return false;
    }

    this.normalize();
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
      return false;
    }

    this.normalize();
    return true;
  }

  subtract(other) {
    if (!(other instanceof BigDouble)) {
      console.log("[BigDouble | subtract] Argument must be of type BigDouble but is " + other.constructor.name);
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
      else {
        return false;
      }
    } else {
      console.log("[BigDouble | subtract] Could not subtract " + other);
    }

    this.normalize();
    return true;
  }

  getTimes(mantissa, exponent) {
    return new BigDouble(this.mantissa * mantissa, this.exponent + exponent).normalize();
  }

  times(mantissa, exponent) {
    this.mantissa *= mantissa;
    this.exponent += exponent;
    this.normalize();
    //console.log("times: " + mantissa + "e" + exponent + " to " + this.mantissa + "e" + this.exponent);
    return this;
  }

  toString() {
    if (this.exponent < 2) {
      //console.log(this.mantissa + "e" + this.exponent);
      return (this.mantissa * Math.pow(10, this.exponent)).toFixed(2);
    }
    return this.mantissa.toFixed(2) + "e" + this.exponent;
  }

  log() {
    console.log(this);
  }

  
}
