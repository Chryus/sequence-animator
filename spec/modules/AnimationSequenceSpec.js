import AnimationSequence from '../../app/modules/AnimationSequence.js'
import jsdom  from "jsdom"

describe("AnimationSequence", () => {
  let animationSequence;
  let JSONData;

  beforeEach(() => {
    global.document = jsdom.jsdom('<html><body><div id="bar"></div></body></html>')
    JSONData = [[100, { width: '10%' }], [200, { width: '20%' }]]
    animationSequence = new AnimationSequence('bar', JSONData);
  });

  it("should respond properly to instance methods", () => {
    expect(animationSequence.dataSet).toEqual(JSONData);
    expect(animationSequence.element.toString()).toEqual('[object HTMLDivElement]');
  });

  describe("formatStyles", () => {
    it("converts an array of objects to a string of css styles", () => {
      let objects = [{ width: '10%' }, { background: 'blue' }] 
      expect(animationSequence.formatStyles(objects)).toEqual("width:10%; background:blue;")
    });
  });

  describe("isObject", () => {
    it("evaluatues whether an input is an object", () => {
      expect(animationSequence.isObject('foo')).toBeFalsey
      expect(animationSequence.isObject({foo: 'bar'})).toBeTruthy
      expect(animationSequence.isObject(100)).toBeFalsey
    });
  });

  describe("handleTimer", () => {
    it("sets a timer to update the styles of a DOM element after a specified number of milliseconds", () => {
      let objects = [{ width: '10%' }, { background: 'blue' }]
      let styles = animationSequence.formatStyles(objects)
      expect(animationSequence.handleTimer(500, styles)._idleTimeout).toEqual(500)
    });
  });

  describe("animate", () => {
    it("updates the style of a an element, returning the final style set", () => {
      expect(animationSequence.animate()).toEqual('width:20%;')
    });
  });
});