/**
 * @author WMXPY
 * @namespace Buffer
 * @description Array
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { ArrayBuffer } from '../../src';

describe('Given a {ArrayBuffer} Class', (): void => {

    const chance: Chance.Chance = new Chance('buffer-array');

    it('should be able to create', (): void => {

        const buffer: ArrayBuffer<string> = ArrayBuffer.create();

        expect(buffer).to.be.instanceOf(ArrayBuffer);
    });

    it('should be able to add element', (): void => {

        const buffer: ArrayBuffer<string> = ArrayBuffer.create();
        buffer.add(chance.string());

        expect(buffer).to.be.lengthOf(1);
    });

    it('should be able to add element if exists', (): void => {

        const buffer: ArrayBuffer<string> = ArrayBuffer.create();
        buffer.addIfExist(chance.string());
        buffer.addIfExist(null as any);

        expect(buffer).to.be.lengthOf(1);
    });
});
