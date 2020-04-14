/**
 * @author WMXPY
 * @namespace Buffer
 * @description Array
 */

export type ArrayBufferVerifyFunction<T> = (element: T) => boolean;
export class ArrayBuffer<T> {

    public static create<T>(initial: T[] = []): ArrayBuffer<T> {

        return new ArrayBuffer<T>(initial);
    }

    private readonly _initial: T[];

    private _buffer: T[];

    private constructor(initial: T[]) {

        this._initial = initial;
        this._buffer = initial;
    }

    public get length(): number {
        return this._buffer.length;
    }

    public addIfExist(value?: T): this {

        if (value === undefined || value === null) {
            return this;
        }
        return this.add(value);
    }

    public addIfValid(value: T, verifyFunction: ArrayBufferVerifyFunction<T>): this {

        if (!verifyFunction(value)) {
            return this;
        }
        return this.add(value);
    }

    public add(value: T): this {

        this._buffer.push(value);
        return this;
    }

    public addList(valueList: T[]): this {

        for (const value of valueList) {
            this.add(value);
        }
        return this;
    }

    public addListIfExist(valueList: T[]): this {

        for (const value of valueList) {
            this.addIfExist(value);
        }
        return this;
    }

    public addListIfValid(valueList: T[], verifyFunction: ArrayBufferVerifyFunction<T>): this {

        for (const value of valueList) {
            this.addIfValid(value, verifyFunction);
        }
        return this;
    }

    public reset(): this {

        this._buffer = this._initial;
        return this;
    }

    public flush(): T[] {

        const value: T[] = this._buffer;
        this.reset();
        return value;
    }
}
