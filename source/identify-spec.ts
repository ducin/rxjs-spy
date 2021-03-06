/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { interval } from "rxjs";
import { mapTo } from "rxjs/operators";
import { identify } from "./identify";

describe("identify", () => {

    it("should identify objects", () => {

        const source = interval(1000);
        const mapped = source.pipe(mapTo(0));

        const sourceId = identify(source);
        const mappedId = identify(mapped);

        expect(sourceId).to.be.a("string");
        expect(mappedId).to.be.a("string");
        expect(sourceId).to.not.equal(0);
        expect(mappedId).to.not.equal(0);
        expect(sourceId).to.not.equal(mappedId);
    });

    it("should return any already-assigned identity", () => {

        const source = interval(1000);
        const mapped = source.pipe(mapTo(0));

        const sourceId = identify(source);
        const mappedId = identify(mapped);

        expect(identify(source)).to.equal(sourceId);
        expect(identify(mapped)).to.equal(mappedId);
    });
});
