class AnimationSequence {
  constructor(element, animationData) {
    this.dataSet = animationData;
    this.element = document.getElementById(element)
  }

  animate() {
    let previousDelay = 0
    let styles = null
    for (let sequence of this.dataSet) {
      let delay = sequence[0] + previousDelay
      let objects = sequence.filter(this.isObject)
      styles = this.formatStyles(objects)
      this.handleTimer(delay, styles)
      previousDelay = delay
    }
    return styles
  }

  handleTimer(delay, styles) {
    let timerID = setTimeout(() => {
      console.log(delay);
      this.element.style = styles
    }, delay);
    return timerID
  }


  formatStyles(objects) {
    let final = ''
    objects.forEach((obj, index) => {
      let string = JSON.stringify(obj)
      string = string.replace(/\"/g, '').replace(/({|})/g, '')
      string += ';'
      final += index < objects.length - 1 ? string + ' ' : string;
    });
    return final;
  }

  isObject(val) {
    return typeof val === 'object'
  }
}

export default AnimationSequence;