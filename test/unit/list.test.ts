/**
 * @author WMXPY
 * @namespace Buffer
 * @description Array
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { ListBuffer } from '../../src';

describe('Given a {ListBuffer} Class', (): void => {

    const chance: Chance.Chance = new Chance('buffer-array');

    it('should be able to create', (): void => {

        const buffer: ListBuffer<string> = ListBuffer.create();

        expect(buffer).to.be.instanceOf(ListBuffer);
    });

    it('should be able to add element', (): void => {

        const buffer: ListBuffer<string> = ListBuffer.create();
        buffer.add(chance.string());

        expect(buffer).to.be.lengthOf(1);
    });

    it('should be able to add element if exists', (): void => {

        const buffer: ListBuffer<string> = ListBuffer.create();
        buffer.addIfExist(chance.string());
        buffer.addIfExist(null as any);

        expect(buffer).to.be.lengthOf(1);
    });
});
