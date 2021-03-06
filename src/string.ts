/**
 * @author WMXPY
 * @namespace Buffer
 * @description String
 */

export class StringBuffer {

    public static create(initial?: string): StringBuffer {

        return new StringBuffer(initial);
    }

    private _buffer: string[];

    private constructor(initial?: string) {

        if (initial) {
            this._buffer = [initial];
        } else {
            this._buffer = [];
        }
    }

    public get length(): number {
        return this.build().length;
    }
    public get parts(): number {
        return this._buffer.length;
    }

    public addIfExist(value?: string): this {

        if (value === undefined || value === null) {
            return this;
        }
        return this.add(value);
    }

    public add(value: string): this {

        this._buffer.push(value);
        return this;
    }

    public build(): string {

        return this._buffer.join('');
    }

    public clean(): this {

        this._buffer = [];
        return this;
    }

    public flush(): string {

        const result: string = this.build();
        this.clean();
        return result;
    }
}
