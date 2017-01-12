We want to create a tool that will allow our designer to configure animations. In order to facilitate this, we need to implement an AnimationSequence in JavaScript that can render these animations.

For example, if the designer wanted to configure the filling of a bar element, our usage of AnimationSequence would look something like this

var barSequence = new AnimationSequence(bar, [
  [100, { width: '10%' }],
  [200, { width: '20%' }],
  [200, { width: '50%' }],
  [200, { width: '80%' }],
  [300, { width: '90%' }],
  [100, { width: '100%' }]
]);

barSequence.animate();
where the first element of each step in the sequence is the number of milliseconds until the step occurs and the second element is an object containing any number of CSS properties.

How would you implement an AnimationSequence?

Guidelines

Feel free to implement any animation you like.
Each step time is relative to the previous step.
No libraries.


Get started: 

1. npm install
2. npm start
3. visit http://localhost:8080/

Run spec:

npm test