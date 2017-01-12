import css from './styles/index.css';
import AnimationSequence from './modules/AnimationSequence'
import Form from './modules/Form'

document.getElementById("animationForm").onsubmit = function() {
  event.preventDefault();
  let form = new Form(event.target.animationInput.value)
  let myJSON = form.parseFormData()
  let sequence = new AnimationSequence('bar', myJSON)
  sequence.animate()
}