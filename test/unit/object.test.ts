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
});
