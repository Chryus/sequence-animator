import Form from '../../app/modules/Form'

describe("Form", () => {
  let form;
  let data;

  beforeEach(() => {
    data = "[[100, { width: '10%' }, { background: 'purple' }]]"
    form = new Form(data);
  });

  describe("formatString", () => {
    it("formats a string for JSON parsing", () => {
      expect(form.formatString(data)).toEqual('[[100, {"width": "10%" }, {"background": "purple" }]]')
    });
  });

  describe("parseFormData", () => {
    it("parses a JSON string and returns an object", () => {
      expect(form.parseFormData()).toEqual([[ 100, Object({ width: '10%' }), Object({ background: 'purple' })]])
    });
  });
});