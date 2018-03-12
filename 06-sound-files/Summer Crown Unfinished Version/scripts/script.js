/* ----------- API ------------- *\
// Available modules include (this is not a complete list):
var Scene = require('Scene');
var Textures = require('Textures');
var Materials = require('Materials');
var FaceTracking = require('FaceTracking');
var Animation = require('Animation');
var Reactive = require('Reactive');

// Example script

// Loading required modules
var Scene = require('Scene');
var FaceTracking = require('FaceTracking');

// Binding an object's property to a value provided by the face tracker
Scene.root.child('object0').transform.rotationY = FaceTracking.face(0).transform.rotationX;

// If you want to log objects, use the Diagnostics module.
var Diagnostics = require('Diagnostics');
Diagnostics.log(Scene.root);

*/

'use strict';

//Header
//Copyright 20__-present, Facebook, Inc.
//All rights reserved.

//This source code is licensed under the license found in the
//LICENSE file in the root directory of this source tree.

var Animation = require('Animation');
var FaceTracking = require('FaceTracking');
var Scene = require('Scene');
var Audio = require('Audio');
var Diagnostics = require('Diagnostics');

var ft = Scene.root
  .child('Device')
  .child('Camera')
  .child('Focal Distance')
  .child('facetracker0');

var music = Scene.root
  .child('Device')
  .child('Camera')
  .child('Focal Distance')
  .child('audiosource0');

var mouthIsOpen = FaceTracking.face(0)
  .mouth.openness.gt(0.3)
  .and(FaceTracking.count.gt(0));

mouthIsOpen.monitor().subscribe(function(e) {
  e.newValue == true ? Audio.play(music) : Audio.stopAll(music);
});
