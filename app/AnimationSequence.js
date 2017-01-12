class AnimationSequence {
  constructor(element, animationData) {
    this.dataSet = animationData;
    this.element = document.getElementById(element)
  }

  animate () {
    let previousDelay = 0
    let delay = 0
    let objects = null
    let styles = null
    for (let sequence of this.dataSet) {
      delay = sequence[0] + previousDelay
      objects = sequence.filter(this.isObject)
      styles = this.formatStyles(objects)
      this.updateDOM(delay, styles)
      previousDelay = delay
    }
  }

  updateDOM(delay, styles) {
    setTimeout(() => {
      console.log(delay);
      this.element.style = styles
    }, delay);
  }
  

  formatStyles(objects) {
    let final = ''
    objects.forEach((obj, index) => {
      let string = JSON.stringify(obj)
      string = string.replace(/\"/g, '').replace(/({|})/g, '')
      string += ';'
      final += index < objects.length-1 ? string + ' ' : string;
    });
    return final;
  }

  isObject (val) {
    return typeof val === 'object'
  }
}

export default AnimationSequence;