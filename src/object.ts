/**
 * @author WMXPY
 * @namespace Buffer
 * @description Object
 */

type ObjectRecord<T, K extends keyof T> = Record<K, T[K]>;

export class ObjectBuffer<T extends Record<string, any> = Record<string, any>> {

    public static create<T extends Record<string, any> = Record<string, any>>(): ObjectBuffer<T> {

        return new ObjectBuffer<T>();
    }

    private readonly _object: ObjectRecord<T, keyof T>;

    private constructor() {

        this._object = {} as T;
    }

    public addIfExist<K extends keyof T>(key: K, value: T[K]): this {

        if (value === undefined || value === null) {
            return this;
        }
        return this.add(key, value);
    }

    public add<K extends keyof T>(key: K, value: T[K]): this {

        this._object[key] = value;
        return this;
    }

    public build(): T {

        return { ...this._object } as T;
    }
}
