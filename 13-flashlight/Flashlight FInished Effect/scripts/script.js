//Header
//Copyright 20__-present, Facebook, Inc.
//All rights reserved.

//This source code is licensed under the license found in the
//LICENSE file in the root directory of this source tree.



const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');

var faces=[];

for(var i=0; i<5; i++){
	var tempFaceTrackerObj = Scene.root.find("facetracker"+i)
	faces[i]={
		flashlightCtrl:tempFaceTrackerObj.child("flashlightCtrl"),
		tracker:FaceTracking.face(i),
        faceSignal_x:FaceTracking.face(i).cameraTransform.x.expSmooth(100),
        faceSignal_x_2:FaceTracking.face(i).cameraTransform.x.expSmooth(50),
        faceSignal_y:FaceTracking.face(i).cameraTransform.y.expSmooth(100),
        faceSignal_y_2:FaceTracking.face(i).cameraTransform.y.expSmooth(50)
	}
	faces[i].flashlightCtrl.transform.rotationX = faces[i].tracker.cameraTransform.rotationX.neg();
	faces[i].flashlightCtrl.transform.rotationY = faces[i].tracker.cameraTransform.rotationY.neg();
	faces[i].flashlightCtrl.transform.rotationZ = faces[i].tracker.cameraTransform.rotationZ.neg();

    faces[i].flashlightCtrl.transform.x = faces[i].faceSignal_x_2.sub(faces[i].faceSignal_x).mul(4);
    faces[i].flashlightCtrl.transform.y = faces[i].faceSignal_y_2.sub(faces[i].faceSignal_y).mul(4);

}

// SFX

const Audio = require("Audio");
const Time = require("Time");

const INTERVAL_LOWER_BOUND = 4000;
const INTERVAL_UPPER_BOUND = 7000;

const oneShots = [Scene.root.find("one_shot_1"),
                  Scene.root.find("one_shot_2"),
                  Scene.root.find("one_shot_3"),
                  Scene.root.find("one_shot_4"),
                  Scene.root.find("one_shot_5")];

var lastOneShot = -1;

scheduleSound();

function scheduleSound() {
    Time.setTimeout(function() {
        scheduleSound();
        lastOneShot = playSoundFromBin(oneShots, lastOneShot);
    }, Math.random() * (INTERVAL_UPPER_BOUND - INTERVAL_LOWER_BOUND) + INTERVAL_LOWER_BOUND);
}

function playSoundFromBin(soundSources, lastSoundIndex) {
  var nextSoundIndex = getNextRandom(lastSoundIndex, soundSources.length);
  var currentSource = soundSources[nextSoundIndex];
  Audio.play(currentSource);
  return nextSoundIndex;
}

function getNextRandom(lastRandom, upperBound) {
  var nextRandom = lastRandom;
  while (nextRandom == lastRandom) {
      nextRandom = Math.floor(Math.random() * upperBound);
  }
  return nextRandom;
}