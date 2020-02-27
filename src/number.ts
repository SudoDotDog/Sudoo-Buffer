/**
 * @author WMXPY
 * @namespace Buffer
 * @description Number
 */

export class NumberBuffer {

    public static create(initial?: number): NumberBuffer {

        return new NumberBuffer(initial);
    }

    private _buffer: number;

    private constructor(initial?: number) {

        if (initial) {
            this._buffer = initial;
        } else {
            this._buffer = 0;
        }
    }

    public get value(): number {

        return this._buffer;
    }

    public addIfExist(value?: number): this {

        if (value === undefined || value === null) {
            return this;
        }
        return this.add(value);
    }

    public add(value: number): this {

        this._buffer += value;
        return this;
    }

    public getValue(): number {

        return this._buffer;
    }
}
