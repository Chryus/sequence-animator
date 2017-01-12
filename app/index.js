import css from './index.css';
import AnimationSequence from './AnimationSequence'

document.getElementById("animationForm").onsubmit = function() {initAnimationSequence()};

function initAnimationSequence(e) {
  event.preventDefault()
  let input = event.target.animationInput.value
  let str = input.replace(/\'/g, '"')
    .replace(/\s(\w+):/g, "\"$1\":")
  let json = JSON.parse(str)
  let sequence = new AnimationSequence('bar', json)
  sequence.animate()
}