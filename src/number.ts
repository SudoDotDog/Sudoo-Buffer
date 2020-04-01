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
    private _step: number;

    private constructor(initial?: number) {

        if (initial) {
            this._buffer = initial;
        } else {
            this._buffer = 0;
        }
        this._step = 1;
    }

    public get value(): number {

        return this._buffer;
    }
    public get step(): number {

        return this._step;
    }

    public setStep(step: number): this {

        this._step = step;
        return this;
    }

    public resetStep(): this {

        this._step = 1;
        return this;
    }

    public add(step?: number): this {

        this._buffer += this._getStep(step);
        return this;
    }

    public minus(step?: number): this {

        this._buffer -= this._getStep(step);
        return this;
    }

    public getValue(): number {

        return this._buffer;
    }

    private _getStep(step?: number): number {

        if (typeof step === 'number') {
            return step;
        }
        return this._step;
    }
}
