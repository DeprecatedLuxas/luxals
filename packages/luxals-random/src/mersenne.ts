import { timeSeed } from "./seed";

/**
 * Mersenne Twister
 *
 * Migrated to TypeScript
 *
 * Original C code here:
 * http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c
 *
 * The original port to JavaScript, on which this file is based, was done by Sean McCullough. It can be found at:
 * https://gist.github.com/banksean/300494
 */
export class MersenneTwister {
  private readonly N = 624;
  private readonly M = 397;
  private readonly UPPER_MASK = 0x80000000; // most significant w-r bits

  // Prettier ignore next two lines because of formatting number literals to lowercase
  // prettier-ignore
  private readonly LOWER_MASK = 0x7FFFFFFF; // least significant r bits
  // prettier-ignore
  private readonly MATRIX_A: number = 0x9908B0DF; // Constant vector a

  private mt: number[] = new Array(this.N); // State vector array
  private mti = this.N + 1; // mti==N+1 means mt[N] is not initialized

  constructor(seed?: number) {
    this.init(seed ?? timeSeed());
  }

  init(seed: number) {
    this.mt[0] = seed >>> 0;
    for (this.mti = 1; this.mti < this.N; this.mti++) {
      const s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);

      // eslint-disable-next-line operator-linebreak
      this.mt[this.mti] =
        // prettier-ignore
        ((((s & 0xFFFF0000) >>> 16) * 1812433253) << 16)
        // prettier-ignore
        + (s & 0x0000FFFF) * 1812433253
        + this.mti;
      this.mt[this.mti] >>>= 0;
    }
  }

  init_array(seeds: number[]) {
    let i = 1;
    let j = 0;
    this.init(19650218);
    let k = this.N > seeds.length ? this.N : seeds.length;
    let s: number;
    for (; k; k--) {
      s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
      // prettier-ignore
      this.mt[i] = (this.mt[i] ^ (((((s & 0xFFFF0000) >>> 16) * 1664525) << 16)
      // prettier-ignore
     + (s & 0x0000FFFF) * 1664525)) + seeds[j] + j;
      this.mt[i] >>>= 0;
      i++;
      j++;
      if (i >= this.N) {
        this.mt[0] = this.mt[this.N - 1];
        i = 1;
      }
      if (j >= seeds.length) {
        j = 0;
      }
    }

    for (k = this.N - 1; k; k--) {
      s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
      // prettier-ignore
      this.mt[i] = (this.mt[i] ^ (((((s & 0xFFFF0000) >>> 16) * 1566083941) << 16)
      // prettier-ignore
      + (s & 0x0000FFFF) * 1566083941)) - i;
      this.mt[i] >>>= 0;
      i++;
      if (i >= this.N) {
        this.mt[0] = this.mt[this.N - 1];
        i = 1;
      }
    }

    this.mt[0] = 0x80000000;
  }

  private mag01 = [0x0, this.MATRIX_A];

  /**
   * Generates a random unsigned 32-bit integer.
   * @returns {number} a random unsigned 32-bit integer
   */
  int(): number {
    let y: number;

    if (this.mti >= this.N) {
      let kk: number;

      if (this.mti === this.N + 1) {
        this.init(5489);
      }

      for (kk = 0; kk < this.N - this.M; kk++) {
        // prettier-ignore
        y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK);
        this.mt[kk] = this.mt[kk + this.M] ^ (y >>> 1) ^ this.mag01[y & 1];
      }

      for (; kk < this.N - 1; kk++) {
        // prettier-ignore
        y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK);
        // prettier-ignore
        this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ (y >>> 1) ^ this.mag01[y & 1];
      }

      // prettier-ignore
      y = (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK);
      this.mt[this.N - 1] = this.mt[this.M - 1] ^ (y >>> 1) ^ this.mag01[y & 1];
      this.mti = 0;
    }

    y = this.mt[this.mti++];

    y ^= y >>> 11;
    // prettier-ignore
    y ^= (y << 7) & 0x9D2C5680;
    // prettier-ignore
    y ^= (y << 15) & 0xEFC60000;
    y ^= y >>> 18;

    return y >>> 0;
  }

  /**
   * Generates a random unsigned 31-bit integer.
   * @returns {number} a random unsigned 31-bit integer
   */
  int31(): number {
    return this.int() >>> 1;
  }

  /**
   * Generates a random number on [0,1]-real-interval
   * @returns {number} a random number on [0,1]-real-interval
   */
  real1(): number {
    return this.int() * (1.0 / 4294967295.0); // 2^32-1
  }

  /**
   * Generates a random number on [0,1)-real-interval
   * @returns {number} a random number on [0,1)-real-interval
   */
  real2(): number {
    return this.int() * (1.0 / 4294967296.0); // 2^32
  }

  /**
   * Generates a random number on (0,1)-real-interval
   * @returns {number} a random number on (0,1)-real-interval
   */
  real3(): number {
    return (this.int() + 0.5) * (1.0 / 4294967296.0); // 2^32
  }

  /**
   * Generates a random number on [0,1) with 53-bit resolution
   * @returns {number} a random number on [0,1) with 53-bit resolution
   */
  res53(): number {
    const a = this.int() >>> 5;
    const b = this.int() >>> 6;
    return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
  }
}
