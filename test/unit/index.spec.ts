import { expect } from "chai";
import { hello } from "../../src";


describe('simpleGreeting', function() {

    it('should say hello', function() {
        expect(hello('alaa')).to.equal('Hello alaa!');
    });

});
