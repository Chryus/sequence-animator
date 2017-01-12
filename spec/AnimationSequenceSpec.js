import AnimationSequence from '../app/AnimationSequence.js'

describe("AnimationSequence", function() {
  var animationSequence;

  beforeEach(() => {
    animationSequence = new AnimationSequence();
  });


  it("should respond properly to methods", () => {
    expect(animationSequence.jasper).toBe('jasper');
  })
});