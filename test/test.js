var assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const mocha = require("mocha");

var Rx = require("rxjs");
var rxOp = require("rxjs/operators");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Asshole", function () {
  describe("Twink Asshole", function () {
    it("Twink asshole is open enough", function () {
      assert.equal(notEmpty("fuck"), true);
    });
    it("shot not be emtpy", function () {
      assert.notEqual(notEmpty(" "), true);
      assert.notEqual(notEmpty(null), true);
      assert.notEqual(notEmpty(undefined), true);
    });
    it("chai should work as clockwise", function () {
      expect(notEmpty(" ")).to.be.equal(false);
      expect(notEmpty(null)).to.be.equal(false);
      expect(notEmpty(undefined)).to.be.equal(false);
    });

    it("chai should work as clockwise", function () {
      expect(notEmpty(" ")).to.be.equal(false);
      expect(notEmpty(null)).to.be.equal(false);
      expect(notEmpty(undefined)).to.be.equal(false);
    });
  });

  describe("Twink Asshole", function () {
    it("SCHEDULER works just fine", function () {
      var array = [];
      obs$ = Rx.range(1, 5, Rx.asyncScheduler)
        .pipe(
          rxOp.tap((v) => {
            console.log("v is ", v);
            array.push(v);
          })
        )
        .subscribe(
          (v) => {
            expect(v).to.be.a.instanceOf(Number);
            expect(array.length).to.be.a.instanceOf(String);
          },
          done,
          done
        );
    });
  });
});

const notEmpty = (input) => !!input && input.trim().length > 0;
