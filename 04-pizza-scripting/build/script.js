//Header
//Copyright 20__-present, Facebook, Inc.
//All rights reserved.

//This source code is licensed under the license found in the
//LICENSE file in the root directory of this source tree.

const Animation = require('Animation');
const FaceTracking = require('FaceTracking');
const Scene = require('Scene');

let ft = Scene.root
  .child('Device')
  .child('Camera')
  .child('Focal Distance')
  .child('facetracker0');

const pizzaWheel0 = ft.child('pizzas_123');
const pizzaWheel1 = ft.child('pizzas_456');
const pizzaWheel2 = ft.child('pizzas_789');

let mouthIsOpen = FaceTracking.face(0)
  .mouth.openness.gt(0.3)
  .and(FaceTracking.count.gt(0));

pizzaWheel0.hidden = pizzaWheel1.hidden = pizzaWheel2.hidden = mouthIsOpen.not();

let wheelDriver = Animation.timeDriver({ durationMilliseconds: 1500, loopCount: Infinity });
let wheelSampler = Animation.samplers.linear(0, -Math.PI * 2);

pizzaWheel0.transform.rotationX = Animation.animate(wheelDriver, wheelSampler);
pizzaWheel1.transform.rotationX = Animation.animate(wheelDriver, wheelSampler);
pizzaWheel2.transform.rotationX = Animation.animate(wheelDriver, wheelSampler);

mouthIsOpen.monitor().subscribe(e => {
  e.newValue == true ? wheelDriver.start() : wheelDriver.stop();
  e.newValue == true ? wheelDriver.start() : wheelDriver.reset();
});
