//Header
//Copyright 20__-present, Facebook, Inc.
//All rights reserved.

//This source code is licensed under the license found in the
//LICENSE file in the root directory of this source tree.

var Scene = require('Scene');
var FaceTracking = require('FaceTracking');

var faceSignalX = FaceTracking.face(0).cameraTransform.x.expSmooth(100);
var faceSignalX2 = FaceTracking.face(0).cameraTransform.x.expSmooth(96);

var faceSignalY = FaceTracking.face(0).cameraTransform.y.expSmooth(100);
var faceSignalY2 = FaceTracking.face(0).cameraTransform.y.expSmooth(96);

var scaleFactor = 3;

// rotate X left and right spring base on head Y rotation
Scene.root.find("left_springB_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);
Scene.root.find("left_springC_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);
Scene.root.find("left_springD_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);
Scene.root.find("left_springE_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);
Scene.root.find("left_springF_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);

Scene.root.find("right_springB_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);
Scene.root.find("right_springC_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);
Scene.root.find("right_springD_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);
Scene.root.find("right_springE_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);
Scene.root.find("right_springF_jnt").transform.rotationX = faceSignalY2.sub(faceSignalY).mul(scaleFactor);

// rotate Z left and right spring base on head X rotation
Scene.root.find("left_springB_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);
Scene.root.find("left_springC_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);
Scene.root.find("left_springD_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);
Scene.root.find("left_springE_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);
Scene.root.find("left_springF_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);

Scene.root.find("right_springB_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);
Scene.root.find("right_springC_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);
Scene.root.find("right_springD_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);
Scene.root.find("right_springE_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);
Scene.root.find("right_springF_jnt").transform.rotationZ = faceSignalX2.sub(faceSignalX).mul(scaleFactor);

