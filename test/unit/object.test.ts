/**
 * @author WMXPY
 * @namespace Buffer
 * @description Object
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { ObjectBuffer } from '../../src';

describe('Given a {ObjectBuffer} Class', (): void => {

    const chance: Chance.Chance = new Chance('buffer-object');

    it('should be able to create', (): void => {

        const buffer: ObjectBuffer = ObjectBuffer.create();

        expect(buffer).to.be.instanceOf(ObjectBuffer);
    });

    it('should be able to add object', (): void => {

        const key: string = chance.string();
        const value: string = chance.string();

        const buffer: ObjectBuffer = ObjectBuffer.create();

        buffer.add(key, value);

        expect(buffer.build()).to.be.deep.equal({
            [key]: value,
        });
    });

    it('should be able to add object if exist', (): void => {

        const key: string = chance.string();
        const key2: string = chance.string();
        const value: string = chance.string();

        const buffer: ObjectBuffer = ObjectBuffer.create();

        buffer.addIfExist(key, value);
        buffer.addIfExist(key2, undefined);

        expect(buffer.build()).to.be.deep.equal({
            [key]: value,
        });
    });
});
