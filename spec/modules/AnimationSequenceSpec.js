import AnimationSequence from '../../app/modules/AnimationSequence.js'
import jsdom  from "jsdom"

describe("AnimationSequence", () => {
  let animationSequence;
  let JSONData;

  beforeEach(() => {
    global.document = jsdom.jsdom('<html><body><div id="bar"></div></body></html>');
    JSONData = [[100, { width: '10%' }], [200, { width: '20%' }]];
    animationSequence = new AnimationSequence('bar', JSONData);
  });

  it("should respond properly to instance methods", () => {
    expect(animationSequence.dataSet).toEqual(JSONData);
    expect(animationSequence.element.toString()).toEqual('[object HTMLDivElement]');
  });

  describe("formatStyles", () => {
    it("converts an array of objects to a string of css styles", () => {
      let objects = [200, { width: '10%' }, { background: 'blue' }];
      expect(animationSequence.formatStyles(objects)).toEqual("width:10%; background:blue;");
    });
  });

  describe("animate", () => {
    it("updates the style of a an element, returning to cumulative delay of the sequence", () => {
      expect(animationSequence.animate()).toEqual(300);
    });
  });
});