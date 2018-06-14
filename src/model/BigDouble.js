class BigDouble {
    constructor(mantissa, exponent) {
        this.mantissa = mantissa;
        this.exponent = exponent;

        while ( this.mantissa >= 10 ) {
            this.exponent += 1;
            this.mantissa -= 10;
        }
    }

    add(other) {
        if ( typeof(other) != BigDouble) {
            console.log("[BigDouble | add] Argument must be of type BigDouble");
        }

        if ( this.exponent - other.exponent > 0 && this.exponent - other.exponent < 7 ) {
            this.mantissa += other.exponent / Math.pow(10, this.exponent - other.exponent);
        }
        else if ( this.exponent - other.exponent < 0 ) {
            this.exponent = other.exponent;
            if ( this.exponent - other.exponent > -7 ) {
                this.mantissa = this.mantissa / Math.pow(10, other.exponent - this.exponent);
            }
            else {
                this.mantissa = other.mantissa;
            }
        }
        else if ( this.exponent - other.exponent === 0) {
            this.mantissa += other.mantissa;
        }

        while ( this.mantissa >= 10 ) {
            this.exponent += 1;
            this.mantissa -= 10;
        }
    }

}