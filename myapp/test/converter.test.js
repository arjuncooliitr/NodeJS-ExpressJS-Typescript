var converter = require('../app/converter');
var expect = require('chai').expect;

// test suite ==> Assemble
describe("converter tests", () => {
    // test spec
    it("should covert rgb to hex" ,() => {
        var result = converter.rgbToHex(255,0,0);
        expect(result).to.be.equal("ff0000");
    });

    it("should covert hex to rgb" ,() => {
        var result = converter.hexToRgb("ffff00");
        expect(result).to.be.deep.equal([255, 255, 0]);
    });

});
