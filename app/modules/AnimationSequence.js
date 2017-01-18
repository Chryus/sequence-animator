class AnimationSequence {
  constructor(element, animationData) {
    this.dataSet = animationData;
    this.element = document.getElementById(element);
  }

  animate() {
    let delaySoFar = 0;
    
    for (let sequence of this.dataSet) {
      let delay = sequence[0] + delaySoFar;
      let styles = this.formatStyles(sequence);  

      setTimeout(() => {
        this.element.style = styles;
      }, delay);

      delaySoFar = delay;
    }
    return delaySoFar;
  }

  formatStyles(sequence) {
    let final = '';

    for (let i=1; i < sequence.length; i++) {
      let string = JSON.stringify(sequence[i]);
      string = string.replace(/\"/g, '').replace(/({|})/g, '');
      string += ';';
      final += i < sequence.length-1 ? string + ' ' : string;
    }
    return final;
  }
}

export default AnimationSequence;