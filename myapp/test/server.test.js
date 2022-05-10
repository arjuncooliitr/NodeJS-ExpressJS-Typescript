var expect = require('chai').expect;
var request = require('request');

// test suite ==> Assemble
describe("server converter tests", () => {
    // test spec
    it("should covert rgb to hex" ,(done) => {
        var url = "http://localhost:3000/rgbToHex?red=255&green=0&blue=0";
        request(url, (err, response, body) => {
            expect(body).to.be.equal("ff0800");
            done();
        });
   });
});
