//Header
//Copyright 20__-present, Facebook, Inc.
//All rights reserved.

//This source code is licensed under the license found in the
//LICENSE file in the root directory of this source tree.


var Scene = require('Scene');
var FT = require('FaceTracking');
var FG = require('FaceGestures');
var A = require('Animation');
var D = require('Diagnostics');
var P = require('Particle');
var R = require('Reactive')


// ███████████████████████████████████ PETALS FALLING WIND ███████████████████████████████████
var windXAnimDriver_sampleA = A.yoyoTimeDriver(1200);
var windXAnimSampler_sampleA = A.samplers.linear(-150,149);
windXAnimDriver_sampleA.start();
var windXA = A.animate(windXAnimDriver_sampleA, windXAnimSampler_sampleA);

var windYAnimDriver_sampleA = A.yoyoTimeDriver(300);
var windYAnimSampler_sampleA = A.samplers.linear(-140,-40);
windYAnimDriver_sampleA.start();
var windYA = A.animate(windYAnimDriver_sampleA, windYAnimSampler_sampleA);


var windXAnimDriver_sampleB = A.yoyoTimeDriver(1200);
var windXAnimSampler_sampleB = A.samplers.linear(-150,149);
windXAnimDriver_sampleB.start();
var windXB = A.animate(windXAnimDriver_sampleB, windXAnimSampler_sampleB);

var windYAnimDriver_sampleB = A.yoyoTimeDriver(300);
var windYAnimSampler_sampleB = A.samplers.linear(-140,-40);
windYAnimDriver_sampleB.start();
var windYB = A.animate(windYAnimDriver_sampleB, windYAnimSampler_sampleB);


var windXAnimDriver_sampleC = A.yoyoTimeDriver(1200);
var windXAnimSampler_sampleC = A.samplers.linear(-150,149);
windXAnimDriver_sampleC.start();
var windXC = A.animate(windXAnimDriver_sampleC, windXAnimSampler_sampleC);

var windYAnimDriver_sampleC = A.yoyoTimeDriver(300);
var windYAnimSampler_sampleC = A.samplers.linear(-140,-40);
windYAnimDriver_sampleC.start();
var windYC = A.animate(windYAnimDriver_sampleC, windYAnimSampler_sampleC);


var windMaster_sampleA = R.vector(windXA,windYA, 0);
var windMaster_sampleB = R.vector(windXB,windYB, 0);
var windMaster_sampleC = R.vector(windXC.div(2),windYC.div(2), 0);

var face_total = 2;
var adder = 2;

var petalsA_varA_driver = [];
var petalsA_varA_sampler = [];
var petalsA_varB_driver = [];
var petalsA_varB_sampler = [];
var petalsA_varC_driver = [];
var petalsA_varC_sampler = [];

var petalsB_varA_driver = [];
var petalsB_varA_sampler = [];
var petalsC_varA_driver = [];
var petalsC_varA_sampler = [];

var crownWind_sampleA_driver = [];
var crownWind_sampleA_sampler = [];
var crownWind_sampleB_driver = [];
var crownWind_sampleB_sampler = [];
var crownWind_sampleC_driver = [];
var crownWind_sampleC_sampler = [];

var petalsA_varA_emitter = [];
var petalsA_varB_emitter = [];
var petalsA_varC_emitter = [];
var petalsB_varA_emitter = [];
var petalsC_varA_emitter = [];

var crownAtiltLeft = [];
var crownAtiltRight = [];

var face_SignalX = [];
var face_SignalY = [];
var face_SignalZ = [];

var face_SignalX_lilyA = [];
var face_SignalY_lilyA = [];
var face_SignalX_lilyB = [];
var face_SignalY_lilyB = [];
var face_SignalX_lilyC = [];
var face_SignalY_lilyC = [];
var face_SignalX_lilyD = [];
var face_SignalY_lilyD = [];
var face_SignalX_lilyE = [];
var face_SignalY_lilyE = [];
var face_SignalX_lilyF = [];
var face_SignalY_lilyF = [];
var face_SignalX_lilyG = [];
var face_SignalY_lilyG = [];
var face_SignalX_lilyH = [];
var face_SignalY_lilyH = [];

var face_SignalX_runuA = [];
var face_SignalY_runuA = [];
var face_SignalX_runuB = [];
var face_SignalY_runuB = [];
var face_SignalX_runuC = [];
var face_SignalY_runuC = [];

var face_SignalX_budA = [];
var face_SignalY_budA = [];
var face_SignalX_budB = [];
var face_SignalY_budB = [];
var face_SignalX_budC = [];
var face_SignalY_budC = [];
var face_SignalX_budD = [];
var face_SignalY_budD = [];
var face_SignalX_budE = [];
var face_SignalY_budE = [];
var face_SignalX_budF = [];
var face_SignalY_budF = [];
var face_SignalX_budG = [];
var face_SignalY_budG = [];
var face_SignalX_budH = [];
var face_SignalY_budH = [];
var face_SignalX_budI = [];
var face_SignalY_budI = [];
var face_SignalX_budJ = [];
var face_SignalY_budJ = [];
var face_SignalX_budK = [];
var face_SignalY_budK = [];
var face_SignalX_budL = [];
var face_SignalY_budL = [];
var face_SignalX_budM = [];
var face_SignalY_budM = [];
var face_SignalX_budO = [];
var face_SignalY_budO = [];
var face_SignalX_budN = [];
var face_SignalY_budN = [];
var face_SignalX_budP = [];
var face_SignalY_budP = [];


crownAtiltLeft[0] = FT.face(0).cameraTransform.rotationZ.gt(0.4);
crownAtiltRight[0] = FT.face(0).cameraTransform.rotationZ.lt(-0.4);
crownAtiltLeft[1] = FT.face(1).cameraTransform.rotationZ.gt(0.4);
crownAtiltRight[1] = FT.face(1).cameraTransform.rotationZ.lt(-0.4);

// ████████████████ ON TILT RIGHT
crownAtiltRight[0].monitor().subscribe(function(e){
	if(e.newValue){
		triggered(0);
	}
});
crownAtiltRight[1].monitor().subscribe(function(e){
	if(e.newValue){
		triggered(1);
	}
});

// ████████████████ ON TILT LEFT
crownAtiltLeft[0].monitor().subscribe(function(e){
	if(e.newValue){
		triggered(0);
	}
});
crownAtiltLeft[1].monitor().subscribe(function(e){
	if(e.newValue){
		triggered(1);
	}
});

// ████████████████ ON HEAD SHAKE
FG.onShake(FT.face(0)).subscribe(function(){
	triggered(0);
});
FG.onShake(FT.face(1)).subscribe(function(){
	triggered(1);
});

// ████████████████  ON HEAD NOD
FG.onNod(FT.face(0)).subscribe(function(){
	triggered(0);
});
FG.onNod(FT.face(1)).subscribe(function(){
	triggered(1);
});

for (var i=0; i<face_total; i++){

	petalsA_varA_emitter[i] = Scene.root.find('facetracker'+i).find("petalsA_varA_emitter");
	petalsA_varB_emitter[i] = Scene.root.find('facetracker'+i).find("petalsA_varB_emitter");
	petalsA_varC_emitter[i] = Scene.root.find('facetracker'+i).find("petalsA_varC_emitter");
	petalsB_varA_emitter[i] = Scene.root.find('facetracker'+i).find("petalsB_varA_emitter");
	petalsC_varA_emitter[i] = Scene.root.find('facetracker'+i).find("petalsC_varA_emitter");

	petalsA_varA_emitter[i].gravity = windMaster_sampleA;
	petalsA_varB_emitter[i].gravity = windMaster_sampleA;
	petalsA_varC_emitter[i].gravity = windMaster_sampleA;
	petalsB_varA_emitter[i].gravity = windMaster_sampleB;
	petalsC_varA_emitter[i].gravity = windMaster_sampleC;

	petalsA_varA_driver[i] = A.timeDriver({durationMilliseconds: 500, loopCount: Infinity});
	petalsA_varA_sampler[i] = A.samplers.linear(14,0);
	petalsA_varB_driver[i] = A.timeDriver({durationMilliseconds: 500, loopCount: Infinity});
	petalsA_varB_sampler[i] = A.samplers.linear(14,0);
	petalsA_varC_driver[i] = A.timeDriver({durationMilliseconds: 500, loopCount: Infinity});
	petalsA_varC_sampler[i] = A.samplers.linear(14,0);

	petalsB_varA_driver[i] = A.timeDriver({durationMilliseconds: 600, loopCount: Infinity});
	petalsB_varA_sampler[i] = A.samplers.linear(10,0);
	petalsC_varA_driver[i] = A.timeDriver({durationMilliseconds: 800, loopCount: Infinity});
	petalsC_varA_sampler[i] = A.samplers.linear(13,0);

	

	petalsA_varA_emitter[i].transform.rotationZ = FT.face(i).cameraTransform.rotationZ.mul(-1);
	petalsA_varB_emitter[i].transform.rotationZ = FT.face(i).cameraTransform.rotationZ.mul(-1);
	petalsA_varC_emitter[i].transform.rotationZ = FT.face(i).cameraTransform.rotationZ.mul(-1);
	petalsB_varA_emitter[i].transform.rotationZ = FT.face(i).cameraTransform.rotationZ.mul(-1);
	petalsC_varA_emitter[i].transform.rotationZ = FT.face(i).cameraTransform.rotationZ.mul(-1);



	// ████████████████  CROWN FLOWER IDLE WIND ANIMATION ███████████████████████████████████
	crownWind_sampleA_driver[i] = A.yoyoTimeDriver(1500);
	crownWind_sampleA_sampler[i] = A.samplers.easeInOutQuad(-0.04,0.04);
	crownWind_sampleA_driver[i].start();

	crownWind_sampleB_driver[i] = A.yoyoTimeDriver(1400);
	crownWind_sampleB_sampler[i] = A.samplers.easeInOutQuad(0.02,-0.02);
	crownWind_sampleB_driver[i].start();

	crownWind_sampleC_driver[i] = A.yoyoTimeDriver(1600);
	crownWind_sampleC_sampler[i] = A.samplers.easeInOutQuad(0.03,-0.03);
	crownWind_sampleC_driver[i].start();

	// ████████████████████████████ CROWN FLOWERS DYNAMICS ███████████████████████████████████████████████████████████████████████████████████████████████████████████████████
	face_SignalX[i] = FT.face(i).cameraTransform.x.expSmooth(100);
	face_SignalY[i] = FT.face(i).cameraTransform.y.expSmooth(100);
	face_SignalZ[i] = FT.face(i).cameraTransform.z.expSmooth(100);
	

	// LILY GROUP ANIMATION
	
	face_SignalX_lilyA[i] = FT.face(i).cameraTransform.x.expSmooth(adder+88);
	face_SignalY_lilyA[i] = FT.face(i).cameraTransform.y.expSmooth(adder+88);
	Scene.root.find("facetracker"+i).find("lilyA").transform.rotationX = face_SignalY_lilyA[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleC_driver[i], crownWind_sampleC_sampler[i]));
	Scene.root.find("facetracker"+i).find("lilyA").transform.rotationY = face_SignalX_lilyA[i].sub(face_SignalX[i]).div(5).mul(-1).add(A.animate(crownWind_sampleC_driver[i], crownWind_sampleC_sampler[i]));

	face_SignalX_lilyB[i] = FT.face(i).cameraTransform.x.expSmooth(adder+85);
	face_SignalY_lilyB[i] = FT.face(i).cameraTransform.y.expSmooth(adder+85);
	Scene.root.find("facetracker"+i).find("lilyB").transform.rotationX = face_SignalY_lilyB[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("lilyB").transform.rotationY = face_SignalX_lilyB[i].sub(face_SignalX[i]).div(5).mul(-1).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));

	face_SignalX_lilyC[i] = FT.face(i).cameraTransform.x.expSmooth(adder+86);
	face_SignalY_lilyC[i] = FT.face(i).cameraTransform.y.expSmooth(adder+86);
	Scene.root.find("facetracker"+i).find("lilyC").transform.rotationX = face_SignalY_lilyC[i].sub(face_SignalY[i]).div(7).add(A.animate(crownWind_sampleC_driver[i], crownWind_sampleC_sampler[i]));
	Scene.root.find("facetracker"+i).find("lilyC").transform.rotationY = face_SignalX_lilyC[i].sub(face_SignalX[i]).div(5).mul(-1).add(A.animate(crownWind_sampleC_driver[i], crownWind_sampleC_sampler[i]));

	face_SignalX_lilyD[i] = FT.face(i).cameraTransform.x.expSmooth(adder+92);
	face_SignalY_lilyD[i] = FT.face(i).cameraTransform.y.expSmooth(adder+88);
	Scene.root.find("facetracker"+i).find("lilyD").transform.rotationX = face_SignalY_lilyD[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("lilyD").transform.rotationZ = face_SignalX_lilyD[i].sub(face_SignalX[i]).div(4).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_lilyE[i] = FT.face(i).cameraTransform.x.expSmooth(adder+87);
	face_SignalY_lilyE[i] = FT.face(i).cameraTransform.y.expSmooth(adder+87);
	Scene.root.find("facetracker"+i).find("lilyE").transform.rotationX = face_SignalY_lilyE[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("lilyE").transform.rotationY = face_SignalX_lilyE[i].sub(face_SignalX[i]).div(5).mul(-1).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));

	face_SignalX_lilyF[i] = FT.face(i).cameraTransform.x.expSmooth(adder+87);
	face_SignalY_lilyF[i] = FT.face(i).cameraTransform.y.expSmooth(adder+87);
	Scene.root.find("facetracker"+i).find("lilyF").transform.rotationX = face_SignalY_lilyF[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("lilyF").transform.rotationY = face_SignalX_lilyF[i].sub(face_SignalX[i]).div(5).mul(-1).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_lilyG[i] = FT.face(i).cameraTransform.x.expSmooth(adder+87);
	face_SignalY_lilyG[i] = FT.face(i).cameraTransform.y.expSmooth(adder+87);
	Scene.root.find("facetracker"+i).find("lilyG").transform.rotationX = face_SignalY_lilyG[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("lilyG").transform.rotationY = face_SignalX_lilyG[i].sub(face_SignalX[i]).div(5).mul(-1).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));

	face_SignalX_lilyH[i] = FT.face(i).cameraTransform.x.expSmooth(adder+86);
	face_SignalY_lilyH[i] = FT.face(i).cameraTransform.y.expSmooth(adder+90);
	Scene.root.find("facetracker"+i).find("lilyH").transform.rotationX = face_SignalY_lilyH[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("lilyH").transform.rotationY = face_SignalX_lilyH[i].sub(face_SignalX[i]).div(5).mul(-1).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));


	// RUNU GROUP ANIMATION
	face_SignalX_runuA[i] = FT.face(i).cameraTransform.x.expSmooth(adder+90);
	face_SignalY_runuA[i] = FT.face(i).cameraTransform.y.expSmooth(adder+92);
	Scene.root.find("facetracker"+i).find("runuA").transform.rotationX = face_SignalY_runuA[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("runuA").transform.rotationY = face_SignalX_runuA[i].sub(face_SignalX[i]).div(8).mul(-1).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));

	face_SignalX_runuB[i] = FT.face(i).cameraTransform.x.expSmooth(adder+90);
	face_SignalY_runuB[i] = FT.face(i).cameraTransform.y.expSmooth(adder+93);
	Scene.root.find("facetracker"+i).find("runuB").transform.rotationX = face_SignalY_runuB[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("runuB").transform.rotationY = face_SignalX_runuB[i].sub(face_SignalX[i]).div(7).mul(-1).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_runuC[i] = FT.face(i).cameraTransform.x.expSmooth(adder+90);
	face_SignalY_runuC[i] = FT.face(i).cameraTransform.y.expSmooth(adder+91);
	Scene.root.find("facetracker"+i).find("runuC").transform.rotationX = face_SignalY_runuC[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleC_driver[i], crownWind_sampleC_sampler[i]));
	Scene.root.find("facetracker"+i).find("runuC").transform.rotationY = face_SignalX_runuC[i].sub(face_SignalX[i]).div(6).mul(-1).add(A.animate(crownWind_sampleC_driver[i], crownWind_sampleC_sampler[i]));


	// BUDS GROUP ANIMATION
	face_SignalX_budA[i] = FT.face(i).cameraTransform.x.expSmooth(adder+91);
	face_SignalY_budA[i] = FT.face(i).cameraTransform.y.expSmooth(adder+88);
	Scene.root.find("facetracker"+i).find("budA").transform.rotationX = face_SignalY_budA[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("budA").transform.rotationZ = face_SignalX_budA[i].sub(face_SignalX[i]).div(4).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_budB[i] = FT.face(i).cameraTransform.x.expSmooth(adder+85);
	face_SignalY_budB[i] = FT.face(i).cameraTransform.y.expSmooth(adder+85);
	Scene.root.find("facetracker"+i).find("budB").transform.rotationX = face_SignalY_budB[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("budB").transform.rotationY = face_SignalX_budB[i].sub(face_SignalX[i]).div(6).mul(-1).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));

	face_SignalX_budC[i] = FT.face(i).cameraTransform.x.expSmooth(adder+85);
	face_SignalY_budC[i] = FT.face(i).cameraTransform.y.expSmooth(adder+85);
	// Scene.root.find("facetracker"+i).find("budC").transform.rotationX = face_SignalY_budC[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	// Scene.root.find("facetracker"+i).find("budC").transform.rotationZ = face_SignalX_budC[i].sub(face_SignalX[i]).div(4).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("budC").transform.rotationX = face_SignalY_budC[i].sub(face_SignalY[i]).div(12).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i])).add(8.27/56.3);
	Scene.root.find("facetracker"+i).find("budC").transform.rotationZ = face_SignalX_budC[i].sub(face_SignalX[i]).div(12).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i])).add(-27.87/56.3);

	face_SignalX_budD[i] = FT.face(i).cameraTransform.x.expSmooth(adder+93);
	face_SignalY_budD[i] = FT.face(i).cameraTransform.y.expSmooth(adder+90);
	Scene.root.find("facetracker"+i).find("budD").transform.rotationX = face_SignalY_budD[i].sub(face_SignalY[i]).div(4).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("budD").transform.rotationY = face_SignalX_budD[i].sub(face_SignalX[i]).div(4).mul(-1).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_budE[i] = FT.face(i).cameraTransform.x.expSmooth(adder+86);
	face_SignalY_budE[i] = FT.face(i).cameraTransform.y.expSmooth(adder+86);
	// Scene.root.find("facetracker"+i).find("budE").transform.rotationX = face_SignalY_budE[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	// Scene.root.find("facetracker"+i).find("budE").transform.rotationZ = face_SignalX_budE[i].sub(face_SignalX[i]).div(4).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("budE").transform.rotationX = face_SignalY_budE[i].sub(face_SignalY[i]).div(10).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i])).add(12.28/56.3);
	Scene.root.find("facetracker"+i).find("budE").transform.rotationZ = face_SignalX_budE[i].sub(face_SignalX[i]).div(12).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i])).add(-9.53/56.3);

	face_SignalX_budF[i] = FT.face(i).cameraTransform.x.expSmooth(adder+91);
	face_SignalY_budF[i] = FT.face(i).cameraTransform.y.expSmooth(adder+94);
	Scene.root.find("facetracker"+i).find("budF").transform.rotationX = face_SignalY_budF[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleC_driver[i], crownWind_sampleC_sampler[i]));
	Scene.root.find("facetracker"+i).find("budF").transform.rotationY = face_SignalX_budF[i].sub(face_SignalX[i]).div(6).add(A.animate(crownWind_sampleC_driver[i], crownWind_sampleC_sampler[i]));

	face_SignalX_budG[i] = FT.face(i).cameraTransform.x.expSmooth(adder+87);
	face_SignalY_budG[i] = FT.face(i).cameraTransform.y.expSmooth(adder+87);
	Scene.root.find("facetracker"+i).find("budG").transform.rotationX = face_SignalY_budG[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("budG").transform.rotationY = face_SignalX_budG[i].sub(face_SignalX[i]).div(6).mul(-1).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));

	face_SignalX_budH[i] = FT.face(i).cameraTransform.x.expSmooth(adder+85);
	face_SignalY_budH[i] = FT.face(i).cameraTransform.y.expSmooth(adder+85);
	Scene.root.find("facetracker"+i).find("budH").transform.rotationX = face_SignalY_budH[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("budH").transform.rotationY = face_SignalX_budH[i].sub(face_SignalX[i]).div(6).mul(-1).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_budI[i] = FT.face(i).cameraTransform.x.expSmooth(adder+88);
	face_SignalY_budI[i] = FT.face(i).cameraTransform.y.expSmooth(adder+88);
	Scene.root.find("facetracker"+i).find("budI").transform.rotationX = face_SignalY_budI[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("budI").transform.rotationY = face_SignalX_budI[i].sub(face_SignalX[i]).div(6).mul(-1).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));

	face_SignalX_budJ[i] = FT.face(i).cameraTransform.x.expSmooth(adder+95);
	face_SignalY_budJ[i] = FT.face(i).cameraTransform.y.expSmooth(adder+85);
	Scene.root.find("facetracker"+i).find("budJ").transform.rotationX = face_SignalY_budJ[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("budJ").transform.rotationY = face_SignalX_budJ[i].sub(face_SignalX[i]).div(4).mul(-1).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_budK[i] = FT.face(i).cameraTransform.x.expSmooth(adder+86);
	face_SignalY_budK[i] = FT.face(i).cameraTransform.y.expSmooth(adder+86);
	Scene.root.find("facetracker"+i).find("budK").transform.rotationX = face_SignalY_budK[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("budK").transform.rotationY = face_SignalX_budK[i].sub(face_SignalX[i]).div(6).mul(-1).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));

	face_SignalX_budL[i] = FT.face(i).cameraTransform.x.expSmooth(adder+90);
	face_SignalY_budL[i] = FT.face(i).cameraTransform.y.expSmooth(adder+88);
	Scene.root.find("facetracker"+i).find("budL").transform.rotationX = face_SignalY_budL[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("budL").transform.rotationZ = face_SignalX_budL[i].sub(face_SignalX[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_budM[i] = FT.face(i).cameraTransform.x.expSmooth(adder+85);
	face_SignalY_budM[i] = FT.face(i).cameraTransform.y.expSmooth(adder+85);
	// Scene.root.find("facetracker"+i).find("budM").transform.rotationX = face_SignalY_budM[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	// Scene.root.find("facetracker"+i).find("budM").transform.rotationZ = face_SignalX_budM[i].sub(face_SignalX[i]).div(4).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("budM").transform.rotationX = face_SignalY_budM[i].sub(face_SignalY[i]).div(10).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i])).add(7.57/56.3);
	Scene.root.find("facetracker"+i).find("budM").transform.rotationZ = face_SignalX_budM[i].sub(face_SignalX[i]).div(12).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i])).add(44.28/56.3);



	face_SignalX_budN[i] = FT.face(i).cameraTransform.x.expSmooth(adder+87);
	face_SignalY_budN[i] = FT.face(i).cameraTransform.y.expSmooth(adder+87);
	Scene.root.find("facetracker"+i).find("budN").transform.rotationX = face_SignalY_budN[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("budN").transform.rotationY = face_SignalX_budN[i].sub(face_SignalX[i]).div(6).mul(-1).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_budO[i] = FT.face(i).cameraTransform.x.expSmooth(adder+87);
	face_SignalY_budO[i] = FT.face(i).cameraTransform.y.expSmooth(adder+87);
	Scene.root.find("facetracker"+i).find("budO").transform.rotationY = face_SignalY_budO[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));
	Scene.root.find("facetracker"+i).find("budO").transform.rotationY = face_SignalX_budO[i].sub(face_SignalX[i]).div(6).mul(-1).add(A.animate(crownWind_sampleB_driver[i], crownWind_sampleB_sampler[i]));

	face_SignalX_budP[i] = FT.face(i).cameraTransform.x.expSmooth(adder+85);
	face_SignalY_budP[i] = FT.face(i).cameraTransform.y.expSmooth(adder+85);
	Scene.root.find("facetracker"+i).find("budP").transform.rotationX = face_SignalY_budP[i].sub(face_SignalY[i]).div(3).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));
	Scene.root.find("facetracker"+i).find("budP").transform.rotationY = face_SignalX_budP[i].sub(face_SignalX[i]).div(6).mul(-1).add(A.animate(crownWind_sampleA_driver[i], crownWind_sampleA_sampler[i]));

	// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
	// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
	// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████

}	

function triggered(num) { 

	var randomNum = Math.floor(Math.random() * 3) + 1 ;

	switch(randomNum){
		case 1:
			petalsA_varA_emitter[num].birthrate = A.animate(petalsA_varA_driver[num], petalsA_varA_sampler[num]);
			petalsA_varA_driver[num].reset();
				petalsA_varA_driver[num].start();
			break;
		case 2:
			petalsA_varB_emitter[num].birthrate = A.animate(petalsA_varB_driver[num], petalsA_varB_sampler[num]);
			petalsA_varB_driver[num].reset();
	  		petalsA_varB_driver[num].start();
			break;
		case 3:
			petalsA_varC_emitter[num].birthrate = A.animate(petalsA_varC_driver[num], petalsA_varC_sampler[num]);
			petalsA_varC_driver[num].reset();
	  		petalsA_varC_driver[num].start();
	  		break;
	}	

  		petalsB_varA_emitter[num].birthrate = A.animate(petalsB_varA_driver[num], petalsB_varA_sampler[num]);
  		petalsB_varA_driver[num].reset();
  		petalsB_varA_driver[num].start();

  		petalsC_varA_emitter[num].birthrate = A.animate(petalsC_varA_driver[num], petalsC_varA_sampler[num]);
  		petalsC_varA_driver[num].reset();
  		petalsC_varA_driver[num].start();
}