class Form {
  
  constructor(formData) {
    this.formData = formData
  }

  parseFormData() {
    let formattedString = this.formatString(this.formData)
    return JSON.parse(formattedString)
  }

  formatString(input) {
    return input.replace(/\'/g, '"')
      .replace(/\s(\w+):/g, "\"$1\":")
  }
}

export default Form;