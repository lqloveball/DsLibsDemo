(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"main_atlas_P_", frames: [[0,0,448,600],[952,0,326,421],[450,0,500,500],[1280,0,252,252],[952,423,52,112],[1978,30,16,28],[1978,0,16,28],[1006,423,150,30],[1139,459,44,24],[1502,444,477,34],[1158,423,109,34],[1006,455,131,34],[1756,222,220,220],[1534,222,220,220],[1280,254,220,220],[1534,0,220,220],[1756,0,220,220]]},
		{name:"main_atlas_NP_", frames: [[642,0,640,1140],[0,0,640,1140]]}
];


// symbols:



(lib.cdd_img_000005 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000007 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000008 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000009 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000010 = function() {
	this.spriteSheet = ss["main_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000011 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000012 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000013 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000014 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000015 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000016 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000017 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cdd_img_000018 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dclibs_img_000006 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dclibs_img_000007 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dclibs_img_000008 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dclibs_img_000009 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dclibs_img_000010 = function() {
	this.spriteSheet = ss["main_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.libs_img_000002 = function() {
	this.spriteSheet = ss["main_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.libs_mc_000011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.libs_img_000002();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.libs_mc_000011, new cjs.Rectangle(0,0,640,1140), null);


(lib.GalleyItem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Bitmap 24
	this.instance = new lib.dclibs_img_000006();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// Bitmap 23
	this.instance_1 = new lib.dclibs_img_000007();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// Bitmap 22
	this.instance_2 = new lib.dclibs_img_000008();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// Bitmap 21
	this.instance_3 = new lib.dclibs_img_000009();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// Bitmap 20
	this.instance_4 = new lib.dclibs_img_000010();
	this.instance_4.parent = this;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,220);


(lib.dclibs_mc_000004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgiNAC+IAAl7MBEcAAAIAAF7g");
	this.shape.setTransform(209.1,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dclibs_mc_000004, new cjs.Rectangle(-10,0,438.1,38), null);


(lib.dclibs_mc_000003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/B/Qg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhKAAg1g1g");
	this.shape.setTransform(18,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dclibs_mc_000003, new cjs.Rectangle(0,0,36,36), null);


(lib.dclibs_mc_000002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(48,0,74,0.008)").s().p("EgpPAUdMAAAgo6MBSfAAAMAAAAo6g");
	this.shape.setTransform(264,131);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dclibs_mc_000002, new cjs.Rectangle(0,0,528,261.9), null);


(lib.dclibs_mc_000001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30004A").s().p("EgsYAW+MAAAgt7MBYxAAAMAAAAt7g");
	this.shape.setTransform(284.1,147);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dclibs_mc_000001, new cjs.Rectangle(0,0,568.2,294.1), null);


(lib.cdd_mc_000025 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("EgswAVzMAAAgrlMBZhAAAMAAAArlg");
	this.shape.setTransform(286.5,139.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000025, new cjs.Rectangle(0,0,573,279), null);


(lib.cdd_mc_000024 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cdd_img_000013();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000024, new cjs.Rectangle(0,0,16,28), null);


(lib.cdd_mc_000023 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cdd_img_000012();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000023, new cjs.Rectangle(0,0,16,28), null);


(lib.cdd_mc_000022 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cdd_img_000011();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000022, new cjs.Rectangle(0,0,52,112), null);


(lib.cdd_mc_000021 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArtLuIAA3bIXbAAIAAXbg");
	this.shape.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000021, new cjs.Rectangle(0,0,150,150), null);


(lib.cdd_mc_000019 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(32,5,37,0.008)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000019, new cjs.Rectangle(0,0,250,250), null);


(lib.cdd_mc_000017 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#681574","#340549"],[0,1],6,-144,0,6,-144,653.7).s().p("Egx/BZEMAAAiyHMBj/AAAMAAACyHg");
	this.shape.setTransform(320,570);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000017, new cjs.Rectangle(0,0,640,1140), null);


(lib.cdd_mc_000013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#190233").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAANANQALANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAAagIQgBgMgEgGQgIgJgMAAQgKAAgHAIQgIAHAAAMIAyAAIAAAAg");
	this.shape.setTransform(122.9,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#190233").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_1.setTransform(113.3,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#190233").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_2.setTransform(103.9,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#190233").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_3.setTransform(96.9,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#190233").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_4.setTransform(90.7,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#190233").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_5.setTransform(78.5,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#190233").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_6.setTransform(73.7,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#190233").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAAagIQAAgMgGgGQgHgJgMAAQgKAAgIAIQgHAHgBAMIAzAAIAAAAg");
	this.shape_7.setTransform(65,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#190233").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_8.setTransform(58,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#190233").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_9.setTransform(51,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#190233").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_10.setTransform(43.6,20.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#190233").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_11.setTransform(36.5,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#190233").s().p("AgTA8QgKgGgFgLQgGgMABgOQAAgOAEgLQAFgLAKgGQAIgGAMAAQAIAAAGAEQAHADAEAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgKAAgJgFgAgQgJQgHAJAAARQAAASAHAJQAIAJAJAAQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_12.setTransform(26.7,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ArtCWIAAkrIXbAAIAAErg");
	this.shape_13.setTransform(75,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000013, new cjs.Rectangle(0,0,150,30), null);


(lib.cdd_mc_000012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#190233").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape.setTransform(121.9,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#190233").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_1.setTransform(114.5,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#190233").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAuQAKgNAPAAQAJAAAHAEQAIADAFAHQAFAFADAKQACAHAAALQAAAYgLANQgMAMgRAAQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAIQAHALANABQAJAAAIgJQAHgKAAgRQAAgRgHgJQgHgJgKAAQgKAAgHAJg");
	this.shape_2.setTransform(107.2,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#190233").s().p("AgqBBQAAgGACgFQAEgJAHgIQAHgJAOgLQATgRAIgJQAHgKAAgJQAAgKgHgGQgHgHgKAAQgKAAgIAHQgGAHgBAMIgPgBQABgTALgJQALgKARAAQATAAAKALQAMAKAAAPQAAAIgEAHQgDAIgHAHQgHAIgSAPIgRAQIgGAJIA+AAIAAAPg");
	this.shape_3.setTransform(91.8,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#190233").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_4.setTransform(79.5,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#190233").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_5.setTransform(74.7,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#190233").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAAagIQgBgMgEgGQgIgJgMAAQgKAAgIAIQgHAHgBAMIAzAAIAAAAg");
	this.shape_6.setTransform(66,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#190233").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_7.setTransform(59,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#190233").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAGgCIAOgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_8.setTransform(52,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#190233").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_9.setTransform(44.6,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#190233").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_10.setTransform(37.5,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#190233").s().p("AgUA8QgJgGgFgLQgGgMABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAHAAAHAEQAGADAFAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgKAAgKgFgAgQgJQgHAJAAARQAAASAHAJQAIAJAJAAQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_11.setTransform(27.7,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ArtCWIAAkrIXbAAIAAErg");
	this.shape_12.setTransform(75,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000012, new cjs.Rectangle(0,0,150,30), null);


(lib.cdd_mc_000011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#190233").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape.setTransform(124.4,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#190233").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_1.setTransform(117,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#190233").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAuQAKgNAPAAQAJAAAHAEQAIADAFAHQAFAFADAKQACAHAAALQAAAYgLANQgMAMgRAAQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAIQAHALANABQAJAAAIgJQAHgKAAgRQAAgRgHgJQgHgJgKAAQgKAAgHAJg");
	this.shape_2.setTransform(109.7,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#190233").s().p("AAIBBIAAhkQgGAFgIAGIgRAIIAAgPQAOgHAJgIQAJgJAFgJIAKAAIAACBg");
	this.shape_3.setTransform(93.8,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#190233").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_4.setTransform(77,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#190233").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_5.setTransform(72.2,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#190233").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAAagIQgBgMgEgGQgIgJgMAAQgKAAgHAIQgIAHAAAMIAyAAIAAAAg");
	this.shape_6.setTransform(63.5,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#190233").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_7.setTransform(56.5,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#190233").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgJABgEACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_8.setTransform(49.5,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#190233").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_9.setTransform(42.1,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#190233").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_10.setTransform(35,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#190233").s().p("AgUA8QgJgGgFgLQgFgMgBgOQAAgOAGgLQAEgLAJgGQAKgGALAAQAIAAAGAEQAGADAFAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgKAAgKgFgAgQgJQgHAJAAARQAAASAIAJQAHAJAKAAQAJAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_11.setTransform(25.2,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ArtCWIAAkrIXbAAIAAErg");
	this.shape_12.setTransform(75,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000011, new cjs.Rectangle(0,0,150,30), null);


(lib.cdd_mc_000010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBUQgcgdAAg1QAAg2AcgfQAcgeAsAAQAsAAAcAeQAbAeAAA1IAAAJIihAAQACAkASATQASATAbAAQAUAAAOgKQAPgLAIgXIAmAEQgJAigYASQgZATgmAAQguAAgcgegAA9gUQgCgcgMgNQgRgWgcAAQgZAAgRARQgRARgCAdIB4AAIAAAAg");
	this.shape.setTransform(200.3,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhACKQgYgRAAgkIAkAGQACAQALAHQANALAZAAQAYAAAOgLQAOgKAFgSQACgMAAgjQgXAcgkAAQgsAAgaghQgYggAAgsQAAgfAMgbQAKgaAWgOQAVgOAegBQAlAAAZAgIAAgbIAiAAIAAC8QAAAygLAWQgJAVgXAMQgWANggAAQgoAAgXgSgAgohoQgRAUAAAnQAAArARATQARATAYABQAagBASgTQAQgTABgpQAAgogSgVQgSgUgZAAQgYAAgRAUg");
	this.shape_1.setTransform(176.4,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQBgQgTgRAAgcQAAgQAHgNQAHgNAMgIQAMgHAPgEIAhgGQArgFAVgHIABgKQAAgXgLgJQgOgMgbAAQgaAAgMAJQgNAJgGAXIgkgFQAFgXALgOQAMgPAVgHQAVgIAcAAQAbAAASAHQARAGAIAKQAJAKADAPQACAKAAAYIAAAwQAAA0ACAOQADANAGANIgmAAQgGgMgBgPQgVARgTAHQgSAIgWAAQgkAAgTgSgAgIANQgXAEgJAEQgJAEgGAIQgFAIAAAJQAAAPAMAKQALAKAVAAQAVAAAQgJQARgKAIgQQAFgNAAgYIAAgNQgUAIgnAFg");
	this.shape_2.setTransform(153.6,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhyCWIAAkrIByAAQAdAAAPACQAWAEAPALQAPAKAKATQAJASAAAXQAAAmgZAaQgYAahAAAIhMAAIAAB6gAhKgGIBNAAQAmAAAQgPQARgOAAgaQAAgTgKgNQgJgOgQgEQgKgDgbAAIhMAAg");
	this.shape_3.setTransform(128.8,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBUQgcgdAAg1QAAg2AcgfQAcgeAsAAQAsAAAcAeQAbAeAAA1IAAAJIihAAQACAkASATQASATAbAAQAUAAAOgKQAPgLAIgXIAmAEQgJAigYASQgZATgmAAQguAAgcgegAA9gUQgCgcgMgNQgRgWgcAAQgZAAgRARQgRARgCAdIB4AAIAAAAg");
	this.shape_4.setTransform(102.3,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABvBvIAAiIQAAgWgEgKQgDgKgKgGQgJgFgNAAQgXAAgPAPQgPAPAAAiIAAB9IgkAAIAAiMQAAgZgJgMQgJgMgVAAQgPAAgNAIQgOAIgGAQQgGAQAAAdIAABwIglAAIAAjZIAhAAIAAAfQALgQARgKQARgJAVAAQAZAAAPAKQAPAKAGASQAagmApAAQAhAAARASQASARAAAmIAACUg");
	this.shape_5.setTransform(73.3,28.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhJBUQgcgdAAg3QAAg8AigdQAcgYAnAAQAtAAAdAeQAcAdAAA0QAAApgNAYQgMAYgYANQgZAOgcAAQgsAAgdgegAgtg+QgSAVAAApQAAAqASAVQASAUAbAAQAcAAASgVQASgVAAgpQAAgpgSgUQgSgVgcAAQgbAAgSAUg");
	this.shape_6.setTransform(44,29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABOCWIAAiNIibAAIAACNIgoAAIAAkrIAoAAIAAB7ICbAAIAAh7IAoAAIAAErg");
	this.shape_7.setTransform(17.3,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000010, new cjs.Rectangle(0,0,214.2,50.9), null);


(lib.cdd_mc_000009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AEAFCE","#5C5D64"],[0,0.992],6,-144,0,6,-144,653.7).s().p("Egx/BZEMAAAiyHMBj/AAAMAAACyHg");
	this.shape.setTransform(320,570);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000009, new cjs.Rectangle(0,0,640,1140), null);


(lib.cdd_mc_000008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9APoIAA/PMBV7AAAIAAfPg");
	this.shape.setTransform(275,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000008, new cjs.Rectangle(0,0,550,200), null);


(lib.cdd_mc_000007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("A/cDIIAAmPMA+5AAAIAAGPg");
	this.shape.setTransform(201.3,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000007, new cjs.Rectangle(0,0,402.6,40), null);


(lib.cdd_mc_000005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cdd_img_000010();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000005, new cjs.Rectangle(0,0,640,1140), null);


(lib.cdd_mc_000002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.test8 = new cjs.Text("800  click remove", "15px 'Arial'", "#FFFFFF");
	this.test8.name = "test8";
	this.test8.lineHeight = 19;
	this.test8.lineWidth = 131;
	this.test8.parent = this;
	this.test8.setTransform(2,1);

	this.timeline.addTween(cjs.Tween.get(this.test8).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000002, new cjs.Rectangle(0,-1,135,20.8), null);


(lib.cdd_mc_000001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cdd_img_000008();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.883,0.883);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000001, new cjs.Rectangle(0,0,441.7,441.7), null);


(lib.cdd_graphic_000004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAjxIGKHjIsTgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-25.1,80.7,50.3);


(lib.cdd_graphic_000003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AigCgQhChCAAheQAAhdBChDQBDhDBdAAQBeAABDBDQBCBDAABdQAABehCBCQhDBDheABQhdgBhDhDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-22.7,45.5,45.5);


(lib.cdd_graphic_000002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AANioIAABiABVAJIBTAAAANBHIAABiAinAJIBqAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-17.9,35.5,35.8);


(lib.cdd_graphic_000001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AphiLIHWAAIAAnWIEXAAIAAHWIHWAAIAAEXInWAAIAAHWIkXAAIAAnWInWAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-62,124,124);


(lib.BtnSkin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cdd_img_000014();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnSkin2, new cjs.Rectangle(0,0,150,30), null);


(lib.BtnSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArtCWIAAkrIXbAAIAAErg");
	this.shape.setTransform(75,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnSkin, new cjs.Rectangle(0,0,150,30), null);


(lib.WebGL2StagePage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		for(var i=0;i<11;i++){
			if(this['test'+i])this['test'+i].cache(0,0,150,30);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.test8 = new lib.cdd_mc_000002();
	this.test8.name = "test8";
	this.test8.parent = this;
	this.test8.setTransform(167,536.8,1,1,0,0,0,23,10.4);

	this.test7 = new lib.BtnSkin();
	this.test7.name = "test7";
	this.test7.parent = this;
	this.test7.setTransform(524.1,152.6,0.109,0.566,44.2,0,0,0.7,0);

	this.test2 = new lib.BtnSkin();
	this.test2.name = "test2";
	this.test2.parent = this;
	this.test2.setTransform(371.1,85.6,0.058,0.3,44.2,0,0,1.2,0);

	this.test6 = new lib.BtnSkin();
	this.test6.name = "test6";
	this.test6.parent = this;
	this.test6.setTransform(403.1,137.1,0.086,0.445,44.2,0,0,0.8,0);

	this.test0 = new lib.BtnSkin();
	this.test0.name = "test0";
	this.test0.parent = this;
	this.test0.setTransform(457.6,66.1,0.128,0.663,44.2,0,0,1.1,0);

	this.test5 = new lib.BtnSkin();
	this.test5.name = "test5";
	this.test5.parent = this;
	this.test5.setTransform(314.6,136.5,0.077,0.396,44.2,0,0,0.9,0);

	this.test3 = new lib.BtnSkin();
	this.test3.name = "test3";
	this.test3.parent = this;
	this.test3.setTransform(585.1,120.1,0.277,1.435,44.2,0,0,0.5,0);

	this.test4 = new lib.BtnSkin();
	this.test4.name = "test4";
	this.test4.parent = this;
	this.test4.setTransform(468.1,133.1,0.193,1,44.2,0,0,0.2,-0.1);

	this.test1 = new lib.BtnSkin();
	this.test1.name = "test1";
	this.test1.parent = this;
	this.test1.setTransform(537.1,67.1,0.193,1,44.2,0,0,0.2,-0.1);

	this.instance = new lib.cdd_img_000018();
	this.instance.parent = this;
	this.instance.setTransform(16,518.4);

	this.instance_1 = new lib.cdd_img_000017();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,169.5);

	this.instance_2 = new lib.cdd_img_000016();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78,98.5);

	this.instance_3 = new lib.cdd_img_000015();
	this.instance_3.parent = this;
	this.instance_3.setTransform(64.5,33.6);

	this.box1 = new lib.cdd_mc_000025();
	this.box1.name = "box1";
	this.box1.parent = this;
	this.box1.setTransform(30,566);

	this.box0 = new lib.cdd_mc_000025();
	this.box0.name = "box0";
	this.box0.parent = this;
	this.box0.setTransform(30,225.1);

	this.backBtn = new lib.BtnSkin2();
	this.backBtn.name = "backBtn";
	this.backBtn.parent = this;
	this.backBtn.setTransform(29.1,28,0.768,1.168,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backBtn},{t:this.box0},{t:this.box1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.test1},{t:this.test4},{t:this.test3},{t:this.test5},{t:this.test0},{t:this.test6},{t:this.test2},{t:this.test7},{t:this.test8}]}).wait(1));

	// bg
	this.bg = new lib.cdd_mc_000005();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(320,570,1,1,0,0,0,320,570);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.WebGL2StagePage, new cjs.Rectangle(0,0,640,1140), null);


(lib.NPCMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 33
	this.instance = new lib.cdd_mc_000022();
	this.instance.parent = this;
	this.instance.setTransform(26,56,1,1,0,0,0,26,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

	// 图层 40
	this.instance_1 = new lib.cdd_mc_000023();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36,112.5,1,1,0,0,0,8,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:126},0).wait(4));

	// 图层 41
	this.instance_2 = new lib.cdd_mc_000024();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16,126,1,1,0,0,0,8,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({y:112},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,140);


(lib.DynamicFontPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Create DynamicFont
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALgBIADAVQgKADgIAAQgNgBgGgEg");
	this.shape.setTransform(430.5,93.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBHIAAhTQAAgPgDgIQgCgGgHgFQgIgEgJAAQgOAAgLAKQgLAJAAAbIAABLIgYAAIAAiKIAVAAIAAAUQAQgYAcAAQANAAAKAFQALAFAFAHQAFAHADAKIABAYIAABUg");
	this.shape_1.setTransform(419.1,95.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguA2QgTgTABgjQAAgmAVgSQASgQAZAAQAdAAASATQATATgBAhQABAagJAQQgHAPgQAIQgPAJgTAAQgdAAgRgTgAgcgnQgMANAAAaQAAAbAMAOQAMANAQgBQASAAALgNQANgNAAgbQAAgagNgNQgLgOgSAAQgQAAgMAOg");
	this.shape_2.setTransform(404.1,95.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABhIAAjBICBAAIAAAXIhoAAIAAA8IBaAAIAAAWIhaAAIAABYg");
	this.shape_3.setTransform(388.9,93.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA2QgRgSAAgkQAAgVAIgRQAHgRAPgIQAQgJARAAQAWAAAPALQAPAMAEAVIgXADQgDgOgJgGQgJgIgLAAQgRABgLANQgMAMABAbQAAAcAKANQALAMAQAAQAPAAAJgIQAJgJACgSIAYADQgEAZgQAOQgPANgYAAQgbAAgSgTg");
	this.shape_4.setTransform(373.8,95.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBhIAAiLIAXAAIAACLgAgLhEIAAgcIAXAAIAAAcg");
	this.shape_5.setTransform(363.7,93.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABHBHIAAhWQAAgPgCgGQgCgHgHgEQgGgDgIAAQgPAAgJAKQgKAJAAAWIAABQIgXAAIAAhaQAAgPgGgIQgFgIgOAAQgKAAgIAFQgJAFgDAKQgEAKAAAUIAABHIgYAAIAAiKIAVAAIAAATQAHgKALgHQALgFAOgBQAPAAAKAHQAJAGAEAMQARgZAbAAQAUAAAMAMQALALAAAZIAABeg");
	this.shape_6.setTransform(349.5,95.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzA+QgMgLAAgSQAAgKAEgIQAFgJAIgGQAHgDAKgDIAVgDQAbgEAOgFIAAgGQAAgPgHgGQgJgIgRAAQgQAAgIAHQgIAFgEAPIgXgDQADgPAHgJQAHgKAOgEQAOgFARAAQASAAALAEQALAEAFAHQAGAGACAKIABAWIAAAeQAAAhACAJQABAJAEAIIgYAAQgEgHgBgKQgNALgMAFQgMAEgOAAQgXAAgMgLgAgFAIQgOADgHADQgGACgDAFQgDAFAAAHQAAAJAHAGQAHAGAOAAQANABAKgHQALgFAFgLQAEgIAAgQIAAgIQgNAFgZADg");
	this.shape_7.setTransform(330.7,95.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBHIAAhTQAAgPgDgIQgCgGgHgFQgIgEgJAAQgOAAgLAKQgLAJAAAbIAABLIgYAAIAAiKIAVAAIAAAUQAQgYAcAAQANAAAKAFQALAFAFAHQAFAHADAKIABAYIAABUg");
	this.shape_8.setTransform(315.7,95.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBfIgCgWQAHADAGgBQAIAAAFgCQAEgDADgFIAIgRIACgGIg1iLIAZAAIAeBRIAJAfIAKgfIAdhRIAYAAIg1CNQgIAXgFAIQgGAMgIAGQgIAGgLAAQgIAAgIgEg");
	this.shape_9.setTransform(301.6,98.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhPBhIAAjBIBDAAQAVAAAMADQARAEALAKQAQANAHAUQAIAUAAAaQAAAVgFARQgFARgIALQgJALgJAHQgKAGgNADQgOAEgQAAgAg1BKIApAAQASAAALgEQALgDAGgHQAJgJAFgPQAFgPAAgVQAAgfgJgQQgKgQgPgGQgKgEgWAAIgoAAg");
	this.shape_10.setTransform(285.4,93.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtA2QgSgTAAgiQAAgiASgUQASgTAcAAQAcAAARATQATATgBAiIAAAGIhnAAQABAXAMANQAMAMAQgBQANAAAKgGQAJgHAFgPIAYADQgFAVgQANQgPALgZAAQgeAAgRgTgAAogMQgCgSgHgJQgMgOgSAAQgPABgMAKQgLALgBATIBOAAIAAAAg");
	this.shape_11.setTransform(260.3,95.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALgBIADAVQgKADgIAAQgNgBgGgEg");
	this.shape_12.setTransform(249.2,93.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzA+QgMgLAAgSQAAgKAEgIQAFgJAIgGQAHgDAKgDIAVgDQAbgEAOgFIAAgGQAAgPgHgGQgJgIgRAAQgQAAgIAHQgIAFgEAPIgXgDQADgPAHgJQAHgKAOgEQAOgFARAAQASAAALAEQALAEAFAHQAGAGACAKIABAWIAAAeQAAAhACAJQABAJAEAIIgYAAQgEgHgBgKQgNALgMAFQgMAEgOAAQgXAAgMgLgAgFAIQgOADgHADQgGACgDAFQgDAFAAAHQAAAJAHAGQAHAGAOAAQANABAKgHQALgFAFgLQAEgIAAgQIAAgIQgNAFgZADg");
	this.shape_13.setTransform(237.7,95.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguA2QgSgTAAgiQAAgiASgUQATgTAcAAQAcAAASATQASATAAAiIAAAGIhoAAQABAXAMANQAMAMAQgBQAOAAAIgGQAKgHAFgPIAZADQgGAVgQANQgPALgZAAQgdAAgTgTgAAogMQgCgSgHgJQgMgOgSAAQgQABgKAKQgLALgCATIBOAAIAAAAg");
	this.shape_14.setTransform(222.8,95.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglBHIAAiKIAVAAIAAAUQAIgOAIgFQAFgFAIAAQAMAAANAIIgIAWQgJgFgJAAQgHAAgFAFQgHAEgCAIQgEANAAAPIAABIg");
	this.shape_15.setTransform(211.9,95.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtBXQgTgNgKgYQgKgYAAgbQAAgeALgWQAMgXAVgLQAVgMAZAAQAdAAATAOQAUAPAIAbIgZAGQgHgVgNgJQgMgKgUAAQgVAAgPAKQgPALgGASQgGASAAATQAAAYAHASQAHATAQAJQAPAJAQAAQAVAAAQgMQAOgNAGgYIAaAGQgJAfgVASQgUAQgeAAQgfAAgUgNg");
	this.shape_16.setTransform(196.8,93.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Back
	this.mc2 = new lib.dclibs_mc_000003();
	this.mc2.name = "mc2";
	this.mc2.parent = this;
	this.mc2.setTransform(249.2,523.6);
	this.mc2.filters = [new cjs.ColorFilter(0.24, 0.24, 0.24, 1, 77.52, 193.8, 193.8, 0)];
	this.mc2.cache(-2,-2,40,40);

	this.mc1 = new lib.dclibs_mc_000003();
	this.mc1.name = "mc1";
	this.mc1.parent = this;
	this.mc1.setTransform(204.1,523.6);
	this.mc1.filters = [new cjs.ColorFilter(0.24, 0.24, 0.24, 1, 193.8, 155.04, 0, 0)];
	this.mc1.cache(-2,-2,40,40);

	this.mc0 = new lib.dclibs_mc_000003();
	this.mc0.name = "mc0";
	this.mc0.parent = this;
	this.mc0.setTransform(159.1,523.6);
	this.mc0.filters = [new cjs.ColorFilter(0.24, 0.24, 0.24, 1, 193.8, 193.8, 193.8, 0)];
	this.mc0.cache(-2,-2,40,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc0},{t:this.mc1},{t:this.mc2}]}).wait(1));

	// box (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgsYAW+MAAAgt7MBYxAAAMAAAAt7g");
	mask.setTransform(321.1,292.1);

	// box
	this.box = new lib.dclibs_mc_000002();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(57.2,161.1);

	var maskedShapeInstanceList = [this.box];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Layer_3
	this.boxBg = new lib.dclibs_mc_000001();
	this.boxBg.name = "boxBg";
	this.boxBg.parent = this;
	this.boxBg.setTransform(37.1,145.1);

	this.timeline.addTween(cjs.Tween.get(this.boxBg).wait(1));

	// backBtn
	this.text = new cjs.Text("Select Color:", "18px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(92.6,531.7);

	this.textInput = new lib.dclibs_mc_000004();
	this.textInput.name = "textInput";
	this.textInput.parent = this;
	this.textInput.setTransform(48.1,465.1);

	this.text_1 = new cjs.Text("cache Image", "18px 'Arial'", "#190233");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.parent = this;
	this.text_1.setTransform(544.7,473.7);

	this.btn = new lib.BtnSkin();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(487.2,466.1,0.768,1.168,0,0,0,0.1,0);

	this.text_2 = new cjs.Text("Back", "18px 'Arial'", "#190233");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 22;
	this.text_2.parent = this;
	this.text_2.setTransform(86.6,35.6);

	this.backBtn = new lib.BtnSkin();
	this.backBtn.name = "backBtn";
	this.backBtn.parent = this;
	this.backBtn.setTransform(29.1,28,0.768,1.168,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backBtn},{t:this.text_2},{t:this.btn},{t:this.text_1},{t:this.textInput},{t:this.text}]}).wait(1));

	// bg
	this.bg = new lib.libs_mc_000011();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(320,570,1,1,0,0,0,320,570);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.DynamicFontPage, new cjs.Rectangle(0,0,640,1140), null);


(lib.CreatejsInputPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text5 = new lib.cdd_mc_000007();
	this.text5.name = "text5";
	this.text5.parent = this;
	this.text5.setTransform(30.1,814,1,1,0,0,0,0.2,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHBHIAAhWQAAgPgCgGQgCgHgHgEQgGgDgIAAQgPAAgJAKQgKAJAAAWIAABQIgXAAIAAhaQAAgPgGgIQgFgIgOAAQgKAAgIAFQgJAFgDAKQgEAKAAAUIAABHIgYAAIAAiKIAVAAIAAATQAHgKALgHQALgFAOgBQAPAAAKAHQAJAGAEAMQARgZAbAAQAUAAAMAMQALAMAAAYIAABeg");
	this.shape.setTransform(166.2,793.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA2QgRgTgBgjQAAgmAWgSQASgQAZAAQAdAAATATQASATAAAhQgBAagHAQQgJAPgPAIQgQAJgSAAQgcAAgTgTgAgdgnQgLANAAAaQAAAbALAOQAMAMARABQASAAAMgOQALgNABgbQgBgagLgNQgMgOgSAAQgRAAgMAOg");
	this.shape_1.setTransform(147.4,793.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALAAIADAUQgKADgIAAQgNgBgGgEg");
	this.shape_2.setTransform(136.3,791.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALAAIADAUQgKADgIAAQgNgBgGgEg");
	this.shape_3.setTransform(128.8,791.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguA2QgTgTABgjQAAgmAVgSQASgQAZAAQAdAAASATQATATgBAhQABAagJAQQgHAPgQAIQgPAJgTAAQgdAAgRgTgAgcgnQgMANAAAaQAAAbAMAOQAMAMAQABQASAAALgOQANgNAAgbQAAgagNgNQgLgOgSAAQgQAAgMAOg");
	this.shape_4.setTransform(117.4,793.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhIBhIAAjBIBIAAQAWAAANAGQANAGAIAMQAIANAAANQAAAMgHALQgHALgNAHQARAFAKALQAJANAAARQAAANgGAMQgGAMgIAGQgIAGgNAEQgNADgSAAgAguBKIAvAAIARgBQAJgCAGgDQAGgEAEgHQADgHAAgJQAAgLgFgIQgGgIgJgDQgKgEgSAAIgsAAgAgugOIApAAQAQAAAIgDQAKgCAFgHQAEgHAAgKQAAgKgEgHQgFgHgIgDQgJgDgUAAIgmAAg");
	this.shape_5.setTransform(101.2,791.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALAAIADAUQgKADgIAAQgNgBgGgEg");
	this.shape_6.setTransform(80.8,791.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnA+QgOgLgEgXIAYgDQABANAKAIQAIAHAQABQAQgBAIgGQAHgHAAgIQABgJgIgFQgEgCgTgGQgagGgJgEQgLgEgFgJQgFgJAAgKQAAgJAEgIQAFgIAGgFQAHgFAJgDQAJgCALAAQAQAAAMAEQANAGAFAIQAHAHACAOIgXAEQgCgMgHgFQgIgHgNAAQgQAAgHAGQgIAFABAHQAAAFACADQADAEAGADIAVAGQAZAHAKAEQAKADAFAJQAGAIAAAMQAAAMgHALQgHAKgNAGQgNAFgQAAQgaAAgPgLg");
	this.shape_7.setTransform(70.1,793.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA2QgSgTAAgiQAAgiASgUQATgTAcAAQAcAAASATQARATABAiIAAAGIhoAAQABAXAMANQAMAMAQAAQAOgBAIgGQAKgHAFgPIAZADQgGAVgQANQgPALgZAAQgdAAgTgTgAAngMQgBgSgHgJQgMgOgSAAQgQAAgKALQgLALgCATIBNAAIAAAAg");
	this.shape_8.setTransform(55.9,793.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBhIAAiqIg/AAIAAgXICYAAIAAAXIhAAAIAACqg");
	this.shape_9.setTransform(40.3,791.2);

	this.text4 = new lib.cdd_mc_000007();
	this.text4.name = "text4";
	this.text4.parent = this;
	this.text4.setTransform(30.1,714,1,1,0,0,0,0.2,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeBZQgOgJgIgRQgIgQAAgWQAAgVAHgQQAHgRAOgJQAOgJASAAQALAAAKAFQAKAGAGAIIAAhFIAYAAIAADAIgWAAIAAgRQgNAUgaAAQgQAAgOgJgAgYgOQgLANAAAaQAAAbALAOQAMANAOAAQAQAAAKgNQALgNAAgaQAAgbgLgOQgLgNgQAAQgPAAgKANg");
	this.shape_10.setTransform(142.4,691.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglBHIAAiKIAVAAIAAAVQAIgPAHgFQAHgFAIAAQAMAAAMAIIgIAWQgJgFgIAAQgJAAgFAFQgFAEgEAIQgDANAAAPIAABIg");
	this.shape_11.setTransform(132,693.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvA2QgSgSAAgkQABgmAVgSQASgQAZAAQAdAAATATQARATABAhQAAAagIAPQgJAQgPAIQgQAJgSAAQgcAAgTgTgAgdgnQgLANAAAaQAAAbALANQANANAQABQASAAAMgOQAMgNgBgbQABgagMgNQgNgNgRAAQgQAAgNANg");
	this.shape_12.setTransform(118.9,693.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBGIgXhTIgFgXIgcBqIgYAAIgriLIAZAAIAWBQIAIAeIAHgdIAWhRIAYAAIAVBQIAHAbIAIgbIAYhQIAXAAIgsCLg");
	this.shape_13.setTransform(101.7,693.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnA+QgOgMgEgWIAYgDQABAOAJAHQAKAHAPABQAQgBAIgGQAIgHgBgJQAAgIgGgEQgFgEgTgFQgZgGgKgEQgLgFgFgIQgFgIAAgLQAAgJAEgIQAFgIAGgFQAHgEAJgEQAKgCAKAAQAQAAANAEQALAGAHAIQAGAHACAOIgXAEQgCgMgHgFQgIgHgNABQgRgBgGAGQgIAFAAAHQAAAFADAEQAEADAFADIAVAGQAZAHAKAEQAKADAFAJQAGAHAAANQAAALgHAMQgHAJgNAGQgNAGgQAAQgaAAgPgLg");
	this.shape_14.setTransform(85.2,693.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnA+QgOgMgEgWIAYgDQABAOAJAHQAKAHAPABQAQgBAIgGQAIgHgBgJQAAgIgGgEQgFgEgTgFQgZgGgKgEQgLgFgFgIQgFgIAAgLQAAgJAEgIQAFgIAGgFQAHgEAJgEQAKgCAKAAQAQAAANAEQALAGAHAIQAGAHACAOIgXAEQgCgMgHgFQgIgHgNABQgRgBgGAGQgIAFAAAHQAAAFADAEQAEADAFADIAVAGQAZAHAKAEQAKADAFAJQAGAHAAANQAAALgHAMQgHAJgNAGQgNAGgQAAQgaAAgPgLg");
	this.shape_15.setTransform(71.7,693.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgzA+QgMgMAAgRQAAgKAEgIQAFgJAIgGQAHgDAKgDIAVgDQAbgEAOgFIAAgGQAAgPgHgFQgJgJgRABQgQgBgIAHQgIAFgEAPIgXgDQADgPAHgJQAHgJAOgFQAOgFARAAQASAAALAEQALAEAFAGQAGAHACAKIABAWIAAAeQAAAiACAJQABAIAEAIIgYAAQgEgIgBgJQgNALgMAFQgMAEgOAAQgXAAgMgLgAgFAJQgOACgHACQgGADgDAFQgDAFAAAHQAAAJAHAGQAHAGAOAAQANABAKgHQALgFAFgLQAEgIAAgPIAAgJQgNAFgZAEg");
	this.shape_16.setTransform(57.4,693.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhJBhIAAjBIBJAAQASAAAKACQAPADAJAGQAKAHAGAMQAGAMAAAOQAAAZgQAQQgQARgpAAIgwAAIAABPgAgvgEIAxAAQAYAAALgJQAKgJAAgRQAAgMgGgJQgGgIgKgDQgHgCgRAAIgwAAg");
	this.shape_17.setTransform(41.5,691.2);

	this.text2 = new lib.cdd_mc_000007();
	this.text2.name = "text2";
	this.text2.parent = this;
	this.text2.setTransform(30.1,378.1,1,1,0,0,0,0.2,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_18.setTransform(66.4,355.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguA2QgSgTAAgiQAAgiASgUQATgTAcAAQAcAAASATQARATABAiIAAAGIhoAAQABAXAMANQAMAMAQgBQAOAAAIgGQAKgHAFgPIAZADQgGAVgQAMQgPAMgZAAQgdAAgTgTgAAngMQgBgSgHgJQgMgOgSAAQgQABgKAKQgLALgCATIBNAAIAAAAg");
	this.shape_19.setTransform(55.9,357.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMBhIAAiqIg/AAIAAgXICYAAIAAAXIhAAAIAACqg");
	this.shape_20.setTransform(40.3,355.2);

	this.text3 = new lib.cdd_mc_000008();
	this.text3.name = "text3";
	this.text3.parent = this;
	this.text3.setTransform(30.1,463,1,1,0,0,0,0.2,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgzA+QgMgMAAgRQAAgKAEgJQAFgIAIgFQAHgFAKgCIAVgEQAbgDAOgFIAAgGQAAgOgHgHQgJgHgRAAQgQAAgIAFQgIAGgEAPIgXgDQADgPAHgJQAHgJAOgFQAOgFARAAQASAAALAEQALAFAFAFQAGAHACAKIABAVIAAAgQAAAhACAIQABAJAEAIIgYAAQgEgIgBgKQgNAMgMAEQgMAFgOAAQgXAAgMgLgAgFAIQgOADgHACQgGADgDAFQgDAFAAAGQAAAKAHAGQAHAHAOAAQANgBAKgFQALgHAFgKQAEgIAAgQIAAgIQgNAFgZADg");
	this.shape_21.setTransform(130.8,442.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgtA3QgTgTABgjQgBgiATgTQASgUAcAAQAcAAASATQARATABAiIAAAGIhoAAQABAXAMAMQALAMARAAQAOABAIgHQAJgHAGgPIAZADQgGAVgQAMQgPAMgZAAQgeAAgRgSgAAngNQgBgRgIgJQgLgNgSAAQgPAAgLALQgMAKgBASIBNAAIAAAAg");
	this.shape_22.setTransform(115.9,442.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglBIIAAiMIAVAAIAAAWQAIgPAHgFQAHgEAIAAQAMAAAMAHIgIAWQgJgFgIAAQgJAAgFAEQgFAFgEAJQgDAMAAAPIAABJg");
	this.shape_23.setTransform(105,442.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzA+QgMgMAAgRQAAgKAEgJQAFgIAIgFQAHgFAKgCIAVgEQAbgDAOgFIAAgGQAAgOgHgHQgJgHgRAAQgQAAgIAFQgIAGgEAPIgXgDQADgPAHgJQAHgJAOgFQAOgFARAAQASAAALAEQALAFAFAFQAGAHACAKIABAVIAAAgQAAAhACAIQABAJAEAIIgYAAQgEgIgBgKQgNAMgMAEQgMAFgOAAQgXAAgMgLgAgFAIQgOADgHACQgGADgDAFQgDAFAAAGQAAAKAHAGQAHAHAOAAQANgBAKgFQALgHAFgKQAEgIAAgQIAAgIQgNAFgZADg");
	this.shape_24.setTransform(91.9,442.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDBcQgHgFgDgHQgDgGAAgWIAAhPIgRAAIAAgTIARAAIAAgiIAXgOIAAAwIAYAAIAAATIgYAAIAABRQAAAKABADQACADACABQADACAFAAIALgBIADAVQgKACgIABQgNgBgGgDg");
	this.shape_25.setTransform(80.8,440.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAlBGIgegsIgHgLIgkA3IgdAAIA0hIIgvhDIAdAAIAVAhIAKAPIAKgPIAXghIAdAAIgxBCIA1BJg");
	this.shape_26.setTransform(70.2,442.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AguA3QgSgTAAgjQAAgiASgTQATgUAcAAQAcAAASATQARATABAiIAAAGIhoAAQABAXAMAMQAMAMAQAAQAOABAIgHQAKgHAFgPIAZADQgGAVgQAMQgPAMgZAAQgdAAgTgSgAAngNQgBgRgHgJQgMgNgSAAQgQAAgKALQgLAKgCASIBNAAIAAAAg");
	this.shape_27.setTransform(55.9,442.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMBhIAAiqIg/AAIAAgXICYAAIAAAXIhAAAIAACqg");
	this.shape_28.setTransform(40.3,440.1);

	this.text1 = new lib.cdd_mc_000007();
	this.text1.name = "text1";
	this.text1.parent = this;
	this.text1.setTransform(30.1,292,1,1,0,0,0,0.2,0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglBIIAAiMIAVAAIAAAWQAJgPAGgFQAHgEAIAAQAMAAAMAHIgIAWQgJgFgIAAQgIAAgGAEQgFAFgEAJQgDAMAAAPIAABJg");
	this.shape_29.setTransform(124.5,271.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgtA3QgTgUABgiQgBgiATgTQASgUAcAAQAcAAASATQARATABAiIAAAGIhoAAQABAXAMAMQALANARAAQAOAAAIgHQAJgHAGgPIAZADQgGAWgQALQgPAMgZAAQgeAAgRgSgAAngNQgBgRgIgJQgLgNgSAAQgPAAgLALQgMAKgBASIBNAAIAAAAg");
	this.shape_30.setTransform(111.4,271.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgmBOIAAARIgWAAIAAjAIAYAAIAABFQAPgTAXAAQAMAAAMAFQAMAFAHAKQAHAJAFAOQAEAMAAAPQAAAkgSAUQgSATgZAAQgXAAgPgUgAgagOQgMAOAAAYQAAAZAHAMQALASATAAQAPAAALgOQAMgNAAgbQAAgagLgNQgLgNgPAAQgPAAgLANg");
	this.shape_31.setTransform(96.7,269.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABHBIIAAhYQAAgOgCgGQgCgGgHgEQgGgEgIAAQgPAAgJAKQgKAKAAAVIAABRIgXAAIAAhaQAAgQgGgIQgFgIgOAAQgKAAgIAFQgJAGgDAKQgEAJAAAUIAABIIgYAAIAAiMIAVAAIAAAUQAHgKALgGQALgHAOABQAPAAAKAGQAJAGAEAMQARgZAbABQAUAAAMALQALALAAAYIAABgg");
	this.shape_32.setTransform(77.7,271.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgfBDQgLgFgFgHQgFgHgDgLIgBgWIAAhWIAYAAIAABNQAAATABAGQACAJAIAGQAHAFALAAQAJAAAKgFQAJgGAEgJQAEgJAAgSIAAhLIAYAAIAACMIgWAAIAAgVQgQAYgbgBQgNABgKgFg");
	this.shape_33.setTransform(58.9,272.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAyBhIhliXIAACXIgYAAIAAjBIAaAAIBlCXIAAiXIAYAAIAADBg");
	this.shape_34.setTransform(41.7,269.2);

	this.text0 = new lib.cdd_mc_000007();
	this.text0.name = "text0";
	this.text0.parent = this;
	this.text0.setTransform(30.1,207,1,1,0,0,0,0.2,0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgHQgDgGAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgGgFg");
	this.shape_35.setTransform(80.8,184.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAlBGIgegsIgHgLIgkA3IgdAAIA0hIIgvhDIAdAAIAVAhIAKAQIAKgQIAXghIAdAAIgxBCIA1BJg");
	this.shape_36.setTransform(70.2,186.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AguA2QgSgTAAgiQAAgiASgUQATgTAcAAQAcAAASATQARATABAiIAAAGIhoAAQABAXAMANQAMAMAQgBQAOAAAIgGQAKgHAFgPIAZADQgGAVgQANQgPALgZAAQgdAAgTgTgAAngMQgBgSgHgJQgMgOgSAAQgQABgKAKQgLALgCATIBNAAIAAAAg");
	this.shape_37.setTransform(55.9,186.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMBhIAAiqIg/AAIAAgXICYAAIAAAXIhAAAIAACqg");
	this.shape_38.setTransform(40.3,184.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALgBIADAVQgKADgIAAQgNgBgGgEg");
	this.shape_39.setTransform(411.6,93.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgrA2QgRgSAAgkQAAgVAHgRQAIgRAQgIQAPgJARAAQAWAAAPALQAPAMAEAVIgXADQgDgOgJgGQgJgIgLAAQgRABgMANQgLAMABAbQAAAcAKANQALAMAQAAQAPAAAJgIQAJgJACgSIAYADQgEAZgPAOQgRANgXAAQgbAAgSgTg");
	this.shape_40.setTransform(401.4,95.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AguA2QgSgTAAgiQAAgiASgUQATgTAcAAQAcAAASATQARATABAiIAAAGIhoAAQABAXAMANQAMAMAQgBQAOAAAIgGQAKgHAFgPIAZADQgGAVgQANQgPALgZAAQgdAAgTgTgAAogMQgCgSgIgJQgLgOgSAAQgQABgKAKQgLALgCATIBOAAIAAAAg");
	this.shape_41.setTransform(386.7,95.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaB7IAEgVIAMACQAHAAADgFQADgEAAgUIAAiSIAYAAIAACTQAAAagHAKQgJANgSAAQgKAAgJgCgAADhgIAAgcIAYAAIAAAcg");
	this.shape_42.setTransform(374.7,96.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmBOIAAARIgWAAIAAjAIAYAAIAABFQAPgTAXAAQAMAAAMAFQAMAFAHAKQAHAJAFAOQAEAMAAAPQAAAkgSAUQgSATgZAAQgXAAgPgUgAgagOQgMAOAAAYQAAAZAHAMQALASATAAQAPAAALgOQAMgNAAgbQAAgagLgNQgLgNgPAAQgPAAgLANg");
	this.shape_43.setTransform(366.1,93.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgwBWQgWgNgKgXQgLgWAAgZQAAgwAagbQAZgbAoAAQAbAAAVANQAWAMALAYQALAWAAAcQABAegMAWQgNAYgVAMQgWAMgZAAQgaAAgWgOgAgtg7QgUATAAArQAAAiATAVQATAUAbAAQAdAAASgUQATgUAAgmQAAgXgIgRQgIgSgPgJQgPgKgUAAQgaAAgTASg");
	this.shape_44.setTransform(347.8,93.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALgBIADAVQgKADgIAAQgNgBgGgEg");
	this.shape_45.setTransform(326.1,93.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgfBDQgLgFgFgHQgFgHgDgKIgBgXIAAhVIAYAAIAABMQAAASABAHQACAJAIAGQAHAFALAAQAJAAAKgFQAJgGAEgJQAEgKAAgSIAAhJIAYAAIAACKIgWAAIAAgUQgQAXgbABQgNAAgKgFg");
	this.shape_46.setTransform(314.7,96.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag8BiIAAjAIAWAAIAAASQAHgLAKgFQAKgFAMAAQASAAAOAJQAOAJAHARQAHARAAAUQAAAVgIAQQgIASgOAJQgPAJgQAAQgLAAgKgFQgJgFgGgIIAABEgAgbhBQgLAPAAAbQAAAaAKAMQALANAQAAQAPAAALgNQALgNAAgbQAAgbgLgOQgLgNgOAAQgPAAgMAOg");
	this.shape_47.setTransform(300.1,98.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAhBHIAAhTQAAgPgDgIQgCgGgHgFQgIgEgJAAQgOAAgLAKQgLAJAAAbIAABLIgYAAIAAiKIAVAAIAAAUQAQgYAcAAQANAAAKAFQALAFAFAHQAFAHADAKIABAYIAABUg");
	this.shape_48.setTransform(284.7,95.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMBhIAAjBIAZAAIAADBg");
	this.shape_49.setTransform(273.6,93.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALgBIADAVQgKADgIAAQgNgBgGgEg");
	this.shape_50.setTransform(258.6,93.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgnA+QgOgLgEgXIAXgDQADANAIAIQAKAHAOAAQARAAAIgGQAIgHAAgIQgBgJgGgFQgFgCgUgGQgZgGgKgEQgKgEgFgJQgFgJAAgKQAAgJAEgIQAEgIAIgGQAFgEAKgDQAKgCALAAQAPAAANAEQALAFAHAJQAFAHADAOIgYAEQgBgMgIgFQgHgHgNAAQgQAAgIAGQgGAFgBAHQABAFADAEQACADAHADIATAGQAaAHAKAEQAJADAHAIQAFAJAAAMQAAAMgHALQgHAKgNAGQgNAFgRAAQgaAAgOgLg");
	this.shape_51.setTransform(247.9,95.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgtA2QgSgTAAgiQAAgiASgUQASgTAcAAQAcAAARATQATATgBAiIAAAGIhnAAQABAXAMANQAMAMAQgBQANAAAKgGQAJgHAFgPIAYADQgFAVgQANQgPALgZAAQgeAAgRgTgAAogMQgCgSgHgJQgMgOgSAAQgPABgMAKQgLALgBATIBOAAIAAAAg");
	this.shape_52.setTransform(233.7,95.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMBhIAAiqIhAAAIAAgXICYAAIAAAXIhAAAIAACqg");
	this.shape_53.setTransform(218.1,93.2);

	this.text = new cjs.Text("Back", "18px 'Arial'", "#190233");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(86.6,35.6);

	this.backBtn = new lib.BtnSkin();
	this.backBtn.name = "backBtn";
	this.backBtn.parent = this;
	this.backBtn.setTransform(29.1,28,0.768,1.168,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backBtn},{t:this.text},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.text0},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.text1},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.text3},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.text2},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.text4},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text5}]}).wait(1));

	// bg
	this.bg = new lib.cdd_mc_000009();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.CreatejsInputPage, new cjs.Rectangle(0,0,640,1140), null);


(lib.CreatejsAutoScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NPCMovie();
	this.instance.parent = this;
	this.instance.setTransform(1071.3,487.2);

	this.instance_1 = new lib.NPCMovie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,481.2);

	this.instance_2 = new lib.NPCMovie();
	this.instance_2.parent = this;
	this.instance_2.setTransform(539.1,253.1);

	this.instance_3 = new lib.cdd_img_000015();
	this.instance_3.parent = this;
	this.instance_3.setTransform(64.5,33.6);

	this.backBtn = new lib.BtnSkin2();
	this.backBtn.name = "backBtn";
	this.backBtn.parent = this;
	this.backBtn.setTransform(29.1,28,0.768,1.168,0,0,0,0.1,0);

	this.bg = new lib.cdd_mc_000005();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(569,320,1.778,0.561,0,0,0,320,570);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.backBtn},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CreatejsAutoScreen, new cjs.Rectangle(0,0,1138,640), null);


(lib.cdd_mc_000020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.cdd_img_000009();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.box = new lib.cdd_mc_000019();
	this.box.name = "box";
	this.box.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000020, new cjs.Rectangle(-1,-1,252,252), null);


(lib.cdd_mc_000018 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzhzhMAnDAAAMAAAAnDMgnDAAAg");
	this.shape.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	mask.setTransform(125,125);

	// box
	this.box = new lib.cdd_mc_000019();
	this.box.name = "box";
	this.box.parent = this;

	var maskedShapeInstanceList = [this.box];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// 图层 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#200525").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_1.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000018, new cjs.Rectangle(-1,-1,252,252), null);


(lib.cdd_mc_000016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		this.gotoAndPlay(42+(Math.random()*40>>0))
		this.x = Math.random() * 600;
		this.y = Math.random() * 800;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(65));

	// 图层 1
	this.instance = new lib.cdd_graphic_000003("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.3,0,0.319,0.319);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1.07,scaleY:1.07},5).to({scaleX:1,scaleY:1},2).to({startPosition:0},22).to({scaleX:0.25,scaleY:0.25},3).to({_off:true},1).wait(65));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgegBQAegCAfAF");
	this.shape.setTransform(0.1,-22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhRgZQBbgHBIA7");
	this.shape_1.setTransform(5.2,-20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhkguQA7gEA1AZQA2AZAjAw");
	this.shape_2.setTransform(7.1,-18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhvhCQBHgFA9AlQA+AkAdBC");
	this.shape_3.setTransform(8.2,-16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah0hOQBOgGBCAsQBCAsAXBM");
	this.shape_4.setTransform(8.7,-14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah5iPQBLgGA/ApQBAApAaBFQAbBHgVBI");
	this.shape_5.setTransform(9.2,-8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah5i6QBdgHBGA9QBIA9AHBdQAIBdg9BI");
	this.shape_6.setTransform(9.2,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhqjiQBQgGBCAuQBDAvAWBOQAWBNghBKQggBLhJAlQhHAlhPgR");
	this.shape_7.setTransform(7.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhAjiQBagHBHA7QBHA7AKBbQALBag5BJQg4BJhaANQhaAOhLg2");
	this.shape_8.setTransform(3.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgQjiQBagHBHA7QBIA8AJBbQAKBag4BJQg5BJhbAMQhaANhLg2QhKg2gQhbQgQhaA1hM");
	this.shape_9.setTransform(-1.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADkAAQAABehDBDQhDBDheAAQhdAAhDhDQhDhDAAheQAAhdBDhDQBDhDBdAAQBeAABDBDQBDBDAABdg");
	this.shape_10.setTransform(-1.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},7).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-23.7,8.2,2.4);


(lib.cdd_mc_000015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(0 + (Math.random() * 50 >> 0))
		this.x = Math.random() * 600;
		this.y = Math.random() * 800;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(128));

	// 图层 2
	this.instance = new lib.cdd_graphic_000002("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.8,-1.7,0.209,0.209);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({scaleX:0.68,scaleY:0.68,rotation:19.9},4).to({scaleX:1,scaleY:1,rotation:29.7,x:-0.7,alpha:0},4).wait(1));

	// 图层 1
	this.instance_1 = new lib.cdd_graphic_000001("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-1.1,0.295,0.295,-67,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,rotation:5.2,y:-0.9,alpha:1},8).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-1,y:-1},3).to({scaleX:1.08,scaleY:1.08},8).to({scaleX:1,scaleY:1},10).to({scaleX:1.08,scaleY:1.08},8).to({scaleX:1,scaleY:1},10).to({scaleX:1.08,scaleY:1.08},8).to({scaleX:1,scaleY:1},10).to({scaleX:0.13,scaleY:0.13,rotation:32.7,y:-0.9},5).to({scaleX:0.21,scaleY:0.21},2).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cdd_mc_000014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(0 + (Math.random() * 50 >> 0))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(250));

	// 图层 1
	this.instance = new lib.cdd_graphic_000004("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.4,598.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({y:541.8,alpha:1},10).to({y:-429.9},172).to({y:-525.9,alpha:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cdd_mc_000006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.box = new lib.cdd_mc_000021();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(31,266);
	this.box.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box).to({x:235,alpha:1},14).to({x:233},4).wait(11).to({scaleX:0.53,scaleY:0.53,x:253,y:293},15).to({scaleX:1,scaleY:1,x:233,y:266},15).to({scaleX:0.99,skewY:180,x:356},15).to({scaleX:1,skewY:0,x:233},15).to({scaleX:1.69,scaleY:1.69,rotation:45,x:538.1,y:139},20).to({scaleX:1,scaleY:1,rotation:0,x:235,y:266},15).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,266,150,150);


(lib.cdd_mc_000003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btn = new lib.cdd_mc_000001();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(143.1,252.3,1,1,0,0,0,220.8,220.8);

	this.instance = new lib.cdd_img_000007();
	this.instance.parent = this;
	this.instance.setTransform(258.1,340,0.883,0.883);

	this.instance_1 = new lib.cdd_img_000005();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.3,763.2,0.883,0.883);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgI6A0zI6BAAQgjAAgYgZQgYgZAAgiQAAgjAYgZQAYgYAjAAIaBAAICcAAQAjAAAZAYQAYAZAAAjQAAAigYAZQgaAZgiAAgEgI6AucI6BAAQgjAAgYgZQgYgYAAgjQAAgjAYgYQAYgZAjAAIaBAAIH+AAQAiAAAYAZQAZAYAAAjQAAAjgZAYQgYAZgiAAgEgI6AnrI6BAAQgjAAgYgYQgYgZAAgjQAAgiAYgZQAYgZAjAAIaBAAIH+AAQAiAAAYAZQAZAZAAAiQAAAjgZAZQgYAYgiAAgEgI6AheI6BAAQgjAAgYgZQgYgYAAgjQAAgjAYgZQAYgYAjAAIaBAAIH+AAQAiAAAYAYQAZAZAAAjQAAAigZAZQgYAZgiAAgAo6brI6BAAQgjAAgYgZQgYgYAAgjQAAgjAYgZQAYgYAjAAIaBAAIH+AAQAiAAAYAYQAZAZAAAjQAAAigZAZQgYAZgiAAgAo6VUI6BAAQgjAAgYgYQgYgZAAgiQAAgjAYgZQAYgYAjAAIaBAAIH+AAQAiAAAYAYQAZAZAAAjQAAAigZAZQgYAYgiAAgAcfm9I6BAAQgjAAgYgZQgYgYAAgjQAAgjAYgZQAYgYAjAAIaBAAICcAAQAjAAAZAYQAYAZAAAjQAAAjgYAYQgaAZgiAAgAcftlI6BAAQgjAAgYgZQgYgYAAgjQAAgjAYgZQAYgYAjAAIaBAAIH+AAQAiAAAYAYQAaAZAAAjQAAAjgaAYQgYAZgiAAgEgkcgspQgiAAgZgYQgZgZABgiQgBgjAZgZQAZgYAiAAMAxJAAAQAjAAAYAYQAZAZAAAjQAAAigZAZQgZAYgiAAgEgkcgyKQgiAAgZgZQgZgYABgjQgBgjAZgYQAZgZAiAAMAmGAAAQAkAAAYAZQAZAYAAAjQAAAjgZAYQgYAZgkAAg");
	this.shape.setTransform(267.2,357.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000003, new cjs.Rectangle(-77.7,20.1,623.8,1273.1), null);


(lib.Boxccd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mc2 = new lib.GalleyItem();
	this.mc2.name = "mc2";
	this.mc2.parent = this;
	this.mc2.setTransform(145,150);

	this.mc3 = new lib.GalleyItem();
	this.mc3.name = "mc3";
	this.mc3.parent = this;
	this.mc3.setTransform(307,179.1,0.768,0.768,0,0,0,0,0.1);
	this.mc3.filters = [new cjs.ColorFilter(0.55859375, 0.55859375, 0.55859375, 1, 0, 0, 0, 0), new cjs.BlurFilter(8, 8, 1)];
	this.mc3.cache(-2,-2,224,224);

	this.mc4 = new lib.GalleyItem();
	this.mc4.name = "mc4";
	this.mc4.parent = this;
	this.mc4.setTransform(456,203,0.577,0.577,0,0,0,0,0.1);
	this.mc4.filters = [new cjs.ColorFilter(0.37, 0.37, 0.37, 1, 0, 0, 0, 0), new cjs.BlurFilter(10, 10, 1)];
	this.mc4.cache(-2,-2,224,224);

	this.mc1 = new lib.GalleyItem();
	this.mc1.name = "mc1";
	this.mc1.parent = this;
	this.mc1.setTransform(54,179.1,0.768,0.768,0,0,0,0,0.1);
	this.mc1.filters = [new cjs.ColorFilter(0.55859375, 0.55859375, 0.55859375, 1, 0, 0, 0, 0), new cjs.BlurFilter(11, 11, 1)];
	this.mc1.cache(-2,-2,224,224);

	this.afterOut = new lib.GalleyItem();
	this.afterOut.name = "afterOut";
	this.afterOut.parent = this;
	this.afterOut.setTransform(548,205.1,0.536,0.536,0,0,0,0,0.2);
	this.afterOut.alpha = 0;
	this.afterOut.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.afterOut.cache(-2,-2,224,224);

	this.mc0 = new lib.GalleyItem();
	this.mc0.name = "mc0";
	this.mc0.parent = this;
	this.mc0.setTransform(-8.9,203,0.577,0.577,0,0,0,0,0.1);
	this.mc0.filters = [new cjs.ColorFilter(0.37, 0.37, 0.37, 1, 0, 0, 0, 0), new cjs.BlurFilter(10, 10, 1)];
	this.mc0.cache(-2,-2,224,224);

	this.beforeOut = new lib.GalleyItem();
	this.beforeOut.name = "beforeOut";
	this.beforeOut.parent = this;
	this.beforeOut.setTransform(-83.9,207.1,0.536,0.536,0,0,0,0,0.2);
	this.beforeOut.alpha = 0;
	this.beforeOut.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.beforeOut.cache(-2,-2,224,224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.beforeOut},{t:this.mc0},{t:this.afterOut},{t:this.mc1},{t:this.mc4},{t:this.mc3},{t:this.mc2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Boxccd, new cjs.Rectangle(-88.9,150,763,220), null);


(lib.SelectImagesPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("Back", "18px 'Arial'", "#190233");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(324.6,500.5);

	this.backBtn = new lib.BtnSkin();
	this.backBtn.name = "backBtn";
	this.backBtn.parent = this;
	this.backBtn.setTransform(267.1,493,0.768,1.168,0,0,0,0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmBGIjkAAIAAiLIDkAAIAAhUICZCZIiZCZg");
	this.shape.setTransform(325.1,274.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#190233").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgJAIQgLAIgRAAQgTAAgMgNgAAbgIQgCgMgFgGQgHgJgMAAQgKAAgHAIQgIAHgBAMIA0AAIAAAAg");
	this.shape_1.setTransform(340.5,320.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#190233").s().p("AAWBAIAAg6QAAgLgFgGQgFgGgJAAQgHAAgGAFQgGADgDAGQgCAGAAALIAAAyIgQAAIAAiAIAQAAIAAAvQALgNAQAAQAKAAAIAEQAHAEADAIQAEAGAAAOIAAA6g");
	this.shape_2.setTransform(330.6,318.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#190233").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_3.setTransform(321.3,320.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#190233").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_4.setTransform(311.5,320.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#190233").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_5.setTransform(302.3,320.2);

	this.outBtn = new lib.BtnSkin();
	this.outBtn.name = "outBtn";
	this.outBtn.parent = this;
	this.outBtn.setTransform(285.1,301.1,0.488,1.168,0,0,0,0.1,0.1);

	this.text_1 = new cjs.Text("select", "18px 'Arial'", "#190233");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.parent = this;
	this.text_1.setTransform(147.6,416.5);

	this.selectBtn = new lib.BtnSkin();
	this.selectBtn.name = "selectBtn";
	this.selectBtn.parent = this;
	this.selectBtn.setTransform(90.1,409,0.768,1.168,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.selectBtn},{t:this.text_1},{t:this.outBtn},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.backBtn},{t:this.text}]}).wait(1));

	// outPutBox
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_6.setTransform(419.8,120.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_7.setTransform(415.7,121.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_8.setTransform(408.5,121.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_9.setTransform(400.4,123);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUAnIgQgYIgEgGIgUAeIgQAAIAdgoIgaglIAQAAIAMASIAFAJIAGgJIAMgSIAQAAIgbAlIAdAog");
	this.shape_10.setTransform(392.3,121.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAAWgHQgBgJgEgFQgGgIgKAAQgIAAgHAGQgGAGAAAKIAqAAIAAAAg");
	this.shape_11.setTransform(384.4,121.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA+QgOgMgEgWIAYgEQABAPAKAHQAIAIAQAAQAQAAAIgHQAHgGAAgKQABgHgIgFQgEgDgTgFQgZgHgKgEQgLgFgFgIQgFgJAAgKQAAgJAEgIQAFgIAGgFQAHgFAJgCQAJgDALAAQAQAAAMAEQAMAFAGAJQAHAHACAOIgXADQgCgKgHgHQgIgFgNAAQgRAAgGAEQgIAGAAAIQABAEACAEQAEAEAFACIAVAGQAZAHAKAEQAKADAFAJQAGAIAAAMQAAAMgHAKQgHALgNAFQgNAGgQAAQgaAAgPgLg");
	this.shape_12.setTransform(436.1,72.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtA3QgTgUABgiQgBgiATgTQASgUAcAAQAcAAASATQARATABAiIAAAGIhoAAQABAXAMAMQAMANAQAAQAOAAAIgHQAJgHAGgPIAZADQgGAWgQAMQgPALgZAAQgeAAgRgSgAAngNQgBgRgIgJQgLgNgSAAQgPgBgLALQgMALgBASIBNAAIAAAAg");
	this.shape_13.setTransform(421.9,72.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBZQgPgMAAgWIAXADQACAKAGAGQAJAGAPAAQAQAAAJgGQAJgHADgMQACgHAAgYQgQATgWAAQgdAAgQgVQgQgVAAgcQAAgUAIgQQAHgSAOgJQAOgJASAAQAYAAAQAUIAAgRIAWAAIAAB4QAAAggHAPQgGANgPAIQgOAIgUAAQgZAAgQgLgAgZhDQgLANAAAZQAAAcALAMQALAMAPAAQARAAALgMQALgMAAgaQAAgagMgOQgLgNgQABQgPgBgLANg");
	this.shape_14.setTransform(406.4,74.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzA+QgMgMAAgRQAAgKAEgJQAFgIAIgFQAHgEAKgDIAVgDQAbgEAOgFIAAgGQAAgPgHgFQgJgJgRABQgQAAgIAFQgIAGgEAPIgXgDQADgPAHgJQAHgJAOgFQAOgFARAAQASAAALAEQALAFAFAFQAGAHACAKIABAVIAAAfQAAAhACAKQABAIAEAIIgYAAQgEgIgBgJQgNALgMAEQgMAFgOAAQgXAAgMgLgAgFAJQgOACgHACQgGADgDAFQgDAFAAAGQAAAKAHAGQAHAGAOABQANAAAKgHQALgFAFgLQAEgIAAgPIAAgJQgNAFgZAEg");
	this.shape_15.setTransform(391.8,72.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABHBHIAAhXQAAgOgCgGQgCgGgHgEQgGgEgIAAQgPAAgJAKQgKAKAAAVIAABQIgXAAIAAhZQAAgRgGgHQgFgIgOAAQgKAAgIAFQgJAGgDAKQgEAJAAAUIAABHIgYAAIAAiLIAVAAIAAAUQAHgKALgGQALgHAOAAQAPABAKAGQAJAGAEAMQARgYAbgBQAUAAAMAMQALAMAAAXIAABfg");
	this.shape_16.setTransform(373.2,72.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBhIAAjBIAZAAIAADBg");
	this.shape_17.setTransform(358.3,69.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDBcQgHgFgDgGQgDgHAAgWIAAhPIgRAAIAAgTIARAAIAAgiIAXgPIAAAxIAYAAIAAATIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALAAIADAUQgKADgIgBQgNAAgGgDg");
	this.shape_18.setTransform(343.3,69.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgqA3QgSgUAAgiQAAgWAIgRQAHgRAPgIQAQgJARAAQAWAAAPAMQAOALAFAVIgXAEQgEgPgIgGQgJgIgLABQgRgBgLANQgLANAAAbQgBAcALANQALANARAAQANAAAKgJQAJgIADgSIAXACQgEAZgQANQgPAOgXAAQgcAAgRgSg");
	this.shape_19.setTransform(333.1,72.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguA3QgRgUgBgiQABgiARgTQATgUAcAAQAcAAARATQATATgBAiIAAAGIhnAAQABAXAMAMQAMANAQAAQANAAAKgHQAJgHAFgPIAYADQgFAWgQAMQgPALgZAAQgeAAgSgSgAAogNQgCgRgHgJQgMgNgSAAQgPgBgMALQgKALgCASIBOAAIAAAAg");
	this.shape_20.setTransform(318.4,72.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_21.setTransform(307.9,69.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AguA3QgSgUAAgiQAAgiASgTQATgUAcAAQAcAAASATQASATAAAiIAAAGIhoAAQABAXAMAMQAMANAQAAQAOAAAIgHQAKgHAFgPIAZADQgGAWgQAMQgPALgZAAQgdAAgTgSgAAogNQgCgRgHgJQgMgNgSAAQgQgBgKALQgLALgCASIBOAAIAAAAg");
	this.shape_22.setTransform(297.5,72.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmBcQgRgHgKgQQgKgPgBgUIAZgBQABAOAHAJQAFAJAOAGQANAGAPAAQAPAAALgFQAMgEAFgIQAGgHgBgJQABgJgGgHQgFgHgMgFQgIgCgagHQgagGgLgEQgOgIgGgKQgIgLABgOQAAgPAIgMQAIgNAQgGQAQgHATAAQAVAAARAHQAQAHAIANQAKANAAASIgYACQgCgTgMgJQgLgJgWAAQgXgBgKAJQgLAJAAAMQAAAKAHAHQAIAGAfAHQAeAHAMAGQARAGAIANQAIAMAAAPQAAAQgJANQgJAOgQAIQgRAHgVAAQgYAAgTgIg");
	this.shape_23.setTransform(280.9,69.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDBcQgHgFgDgGQgDgHAAgWIAAhPIgRAAIAAgTIARAAIAAgiIAXgPIAAAxIAYAAIAAATIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALAAIADAUQgKADgIgBQgNAAgGgDg");
	this.shape_24.setTransform(260.9,69.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA+QgOgMgEgWIAXgEQADAPAIAHQAKAIAOAAQARAAAIgHQAIgGAAgKQgBgHgGgFQgFgDgUgFQgZgHgKgEQgKgFgFgIQgFgJAAgKQAAgJAEgIQAEgIAIgFQAFgFAKgCQAKgDALAAQAPAAANAEQALAFAHAJQAFAHADAOIgYADQgBgKgIgHQgHgFgNAAQgQAAgIAEQgGAGgBAIQABAEADAEQACAEAHACIATAGQAaAHAKAEQAJADAHAJQAFAIAAAMQAAAMgHAKQgHALgNAFQgNAGgRAAQgaAAgOgLg");
	this.shape_25.setTransform(250.2,72.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgtA3QgSgUAAgiQAAgiASgTQASgUAcAAQAcAAARATQATATgBAiIAAAGIhnAAQABAXAMAMQAMANAQAAQANAAAKgHQAJgHAFgPIAYADQgFAWgQAMQgPALgZAAQgeAAgRgSgAAogNQgCgRgHgJQgMgNgSAAQgPgBgMALQgLALgBASIBOAAIAAAAg");
	this.shape_26.setTransform(236,72.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMBhIAAiqIhAAAIAAgXICYAAIAAAXIhAAAIAACqg");
	this.shape_27.setTransform(220.4,69.5);

	this.outPutBox = new lib.cdd_mc_000020();
	this.outPutBox.name = "outPutBox";
	this.outPutBox.parent = this;
	this.outPutBox.setTransform(373,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.outPutBox},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// selectBox
	this.selectBox = new lib.cdd_mc_000018();
	this.selectBox.name = "selectBox";
	this.selectBox.parent = this;
	this.selectBox.setTransform(22,142.1);

	this.timeline.addTween(cjs.Tween.get(this.selectBox).wait(1));

	// bg
	this.bg = new lib.cdd_mc_000017();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.SelectImagesPage, new cjs.Rectangle(0,0,640,1140), null);


(lib.HomePage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.instance = new lib.cdd_mc_000010();
	this.instance.parent = this;
	this.instance.setTransform(320,392.9,1,1,0,0,0,107.1,25.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 7
	this.text = new cjs.Text("threejs ScrollLamp ", "18px 'Arial'", "#190233");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(323.5,681.3);

	this.text_1 = new cjs.Text("webgl 2 Stage", "18px 'Arial'", "#190233");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.parent = this;
	this.text_1.setTransform(118.5,681.3);

	this.text_2 = new cjs.Text("createjs ScrollPanel", "18px 'Arial'", "#190233");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 22;
	this.text_2.parent = this;
	this.text_2.setTransform(524.5,628.3);

	this.text_3 = new cjs.Text("createjs Galley", "18px 'Arial'", "#190233");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 22;
	this.text_3.parent = this;
	this.text_3.setTransform(327.5,628.3);

	this.text_4 = new cjs.Text("dom auto screen", "18px 'Arial'", "#190233");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 22;
	this.text_4.parent = this;
	this.text_4.setTransform(132.5,631.3);

	this.text_5 = new cjs.Text("createjs auto screen", "18px 'Arial'", "#190233");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 22;
	this.text_5.parent = this;
	this.text_5.setTransform(527.5,573.3);

	this.text_6 = new cjs.Text("createjs dynamic font", "18px 'Arial'", "#190233");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 22;
	this.text_6.parent = this;
	this.text_6.setTransform(323.5,573.3);

	this.text_7 = new cjs.Text("createjs Input", "18px 'Arial'", "#190233");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 22;
	this.text_7.parent = this;
	this.text_7.setTransform(126.5,574.3);

	this.text_8 = new cjs.Text("createjs Dom Movie ", "18px 'Arial'", "#190233");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 22;
	this.text_8.parent = this;
	this.text_8.setTransform(529.5,519.3);

	this.text_9 = new cjs.Text("Select Images", "18px 'Arial'", "#190233");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 22;
	this.text_9.parent = this;
	this.text_9.setTransform(329.5,520.3);

	this.text_10 = new cjs.Text("HTML Page", "18px 'Arial'", "#190233");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 22;
	this.text_10.parent = this;
	this.text_10.setTransform(128.5,520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// 图层 1
	this.btn10 = new lib.BtnSkin();
	this.btn10.name = "btn10";
	this.btn10.parent = this;
	this.btn10.setTransform(323.2,692.1,1.168,1.168,0,0,0,75,15);

	this.btn9 = new lib.BtnSkin();
	this.btn9.name = "btn9";
	this.btn9.parent = this;
	this.btn9.setTransform(122.2,692.1,1.168,1.168,0,0,0,75,15);

	this.btn6 = new lib.BtnSkin();
	this.btn6.name = "btn6";
	this.btn6.parent = this;
	this.btn6.setTransform(528.2,639.1,1.168,1.168,0,0,0,75,15);

	this.btn3 = new lib.BtnSkin();
	this.btn3.name = "btn3";
	this.btn3.parent = this;
	this.btn3.setTransform(323.7,639.1,1.168,1.168,0,0,0,75,15);

	this.btn0 = new lib.BtnSkin();
	this.btn0.name = "btn0";
	this.btn0.parent = this;
	this.btn0.setTransform(121.6,639.1,1.168,1.168,0,0,0,75,15);

	this.btn7 = new lib.BtnSkin();
	this.btn7.name = "btn7";
	this.btn7.parent = this;
	this.btn7.setTransform(528.2,583,1.168,1.168,0,0,0,75,15);

	this.btn4 = new lib.BtnSkin();
	this.btn4.name = "btn4";
	this.btn4.parent = this;
	this.btn4.setTransform(323.7,583,1.168,1.168,0,0,0,75,15);

	this.btn1 = new lib.BtnSkin();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(121.6,583,1.168,1.168,0,0,0,75,15);

	this.btn8 = new lib.BtnSkin();
	this.btn8.name = "btn8";
	this.btn8.parent = this;
	this.btn8.setTransform(528.2,529.3,1.168,1.168,0,0,0,75,15);

	this.btn5 = new lib.BtnSkin();
	this.btn5.name = "btn5";
	this.btn5.parent = this;
	this.btn5.setTransform(323.7,529.3,1.168,1.168,0,0,0,75,15);

	this.btn2 = new lib.BtnSkin();
	this.btn2.name = "btn2";
	this.btn2.parent = this;
	this.btn2.setTransform(121.6,529.3,1.168,1.168,0,0,0,75,15);

	this.abtn2 = new lib.cdd_mc_000013();
	this.abtn2.name = "abtn2";
	this.abtn2.parent = this;
	this.abtn2.setTransform(529.4,469.7,1.168,1.168,0,0,0,75,15);

	this.abtn1 = new lib.cdd_mc_000012();
	this.abtn1.name = "abtn1";
	this.abtn1.parent = this;
	this.abtn1.setTransform(325.5,469.7,1.168,1.168,0,0,0,75,15);

	this.abtn0 = new lib.cdd_mc_000011();
	this.abtn0.name = "abtn0";
	this.abtn0.parent = this;
	this.abtn0.setTransform(121.6,469.7,1.168,1.168,0,0,0,75,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.abtn0},{t:this.abtn1},{t:this.abtn2},{t:this.btn2},{t:this.btn5},{t:this.btn8},{t:this.btn1},{t:this.btn4},{t:this.btn7},{t:this.btn0},{t:this.btn3},{t:this.btn6},{t:this.btn9},{t:this.btn10}]}).wait(1));

	// 动画元素层
	this.instance_1 = new lib.cdd_mc_000016();
	this.instance_1.parent = this;
	this.instance_1.setTransform(452,97.9);

	this.instance_2 = new lib.cdd_mc_000016();
	this.instance_2.parent = this;
	this.instance_2.setTransform(224,681.9);

	this.instance_3 = new lib.cdd_mc_000015();
	this.instance_3.parent = this;
	this.instance_3.setTransform(111.8,645.5);

	this.instance_4 = new lib.cdd_mc_000015();
	this.instance_4.parent = this;
	this.instance_4.setTransform(546.7,322.6);

	this.instance_5 = new lib.cdd_mc_000014();
	this.instance_5.parent = this;
	this.instance_5.setTransform(518.6,187.4,1,1,0,0,0,39.4,24.2);

	this.instance_6 = new lib.cdd_mc_000014();
	this.instance_6.parent = this;
	this.instance_6.setTransform(76.5,87.4,1,1,0,0,0,39.4,24.2);

	this.instance_7 = new lib.cdd_mc_000014();
	this.instance_7.parent = this;
	this.instance_7.setTransform(302.5,321.5,1,1,0,0,0,39.4,24.2);

	this.instance_8 = new lib.cdd_mc_000014();
	this.instance_8.parent = this;
	this.instance_8.setTransform(190.5,601.5,1,1,0,0,0,39.4,24.2);

	this.instance_9 = new lib.cdd_mc_000014();
	this.instance_9.parent = this;
	this.instance_9.setTransform(476.6,497.5,1,1,0,0,0,39.4,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// bg
	this.bg = new lib.cdd_mc_000005();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(320,570,1,1,0,0,0,320,570);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.HomePage, new cjs.Rectangle(0,0,640,1140), null);


(lib.CreatejsGalley = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.Boxccd();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(34.5,172.4);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Layer_1
	this.text = new cjs.Text("random", "18px 'Arial'", "#190233");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(290.5,621.4);

	this.btn = new lib.BtnSkin();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(233.1,613,0.768,1.168,0,0,0,0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBfIgDgWQAJADAFgBQAIAAAFgCQAFgDADgFIAHgRIACgGIg1iLIAaAAIAcBRIAJAfIAKgfIAfhRIAXAAIg1CNQgJAXgDAIQgHAMgIAGQgIAGgMAAQgGAAgJgEg");
	this.shape.setTransform(393,98.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguA2QgRgTgBgiQABgiARgUQATgTAcAAQAcAAARATQATATgBAiIAAAGIhnAAQABAXAMANQALAMARgBQANAAAKgGQAJgHAFgPIAYADQgFAVgQANQgPALgZAAQgeAAgSgTgAAogMQgCgSgHgJQgMgOgSAAQgPABgMAKQgLALgBATIBOAAIAAAAg");
	this.shape_1.setTransform(378.6,95.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_2.setTransform(368.1,93.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_3.setTransform(362.2,93.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzA+QgMgLAAgSQAAgKAEgIQAFgJAIgGQAHgDAKgDIAVgDQAbgEAOgFIAAgGQAAgPgHgGQgJgIgRAAQgQAAgIAHQgIAFgEAPIgXgDQADgPAHgJQAHgKAOgEQAOgFARAAQASAAALAEQALAEAFAHQAGAGACAKIABAWIAAAeQAAAhACAJQABAJAEAIIgYAAQgEgHgBgKQgNALgMAFQgMAEgOAAQgXAAgMgLgAgFAIQgOADgHADQgGACgDAFQgDAFAAAHQAAAJAHAGQAHAGAOAAQANABAKgHQALgFAFgLQAEgIAAgQIAAgIQgNAFgZADg");
	this.shape_4.setTransform(351.7,95.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBXQgYgMgMgXQgLgWAAgdQAAgcALgYQAMgYAWgMQAXgMAbAAQAVAAARAHQARAGAKAMQAJANAFAUIgXAGQgEgPgGgJQgHgIgMgFQgMgFgOAAQgRAAgNAFQgNAFgHAJQgIAJgFAKQgHASAAAVQAAAZAJARQAJASARAIQARAJASgBQARABAPgHQAQgGAIgHIAAgkIg4AAIAAgWIBRAAIAABGQgSAPgVAJQgUAHgVAAQgbAAgXgNg");
	this.shape_5.setTransform(333.6,93.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA+QgOgLgEgXIAYgDQABANAJAIQAKAHAPAAQAQAAAIgGQAIgHgBgIQAAgJgGgFQgFgCgUgGQgYgGgLgEQgKgEgFgJQgFgJAAgKQAAgJAEgIQAFgIAGgGQAHgEAJgDQAKgCAKAAQAQAAANAEQAMAFAGAJQAFAHADAOIgXAEQgCgMgIgFQgHgHgNAAQgRAAgHAGQgHAFAAAHQAAAFAEAEQACADAHADIAUAGQAZAHAKAEQAJADAHAIQAFAJAAAMQAAAMgHALQgHAKgNAGQgNAFgQAAQgaAAgPgLg");
	this.shape_6.setTransform(308.9,95.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaB7IAEgVIAMACQAHAAADgFQADgEAAgUIAAiSIAYAAIAACTQAAAagHAKQgJANgSAAQgKAAgJgCgAADhgIAAgcIAYAAIAAAcg");
	this.shape_7.setTransform(297.8,96.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtA2QgTgTABgiQgBgiATgUQASgTAcAAQAcAAARATQASATAAAiIAAAGIhnAAQABAXAMANQALAMARgBQAOAAAJgGQAIgHAGgPIAZADQgGAVgQANQgQALgYAAQgeAAgRgTgAAngMQgBgSgIgJQgLgOgSAAQgPABgLAKQgMALgBATIBNAAIAAAAg");
	this.shape_8.setTransform(288.8,95.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALgBIADAVQgKADgIAAQgNgBgGgEg");
	this.shape_9.setTransform(277.7,93.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzA+QgMgLAAgSQAAgKAEgIQAFgJAIgGQAHgDAKgDIAVgDQAbgEAOgFIAAgGQAAgPgHgGQgJgIgRAAQgQAAgIAHQgIAFgEAPIgXgDQADgPAHgJQAHgKAOgEQAOgFARAAQASAAALAEQALAEAFAHQAGAGACAKIABAWIAAAeQAAAhACAJQABAJAEAIIgYAAQgEgHgBgKQgNALgMAFQgMAEgOAAQgXAAgMgLgAgFAIQgOADgHADQgGACgDAFQgDAFAAAHQAAAJAHAGQAHAGAOAAQANABAKgHQALgFAFgLQAEgIAAgQIAAgIQgNAFgZADg");
	this.shape_10.setTransform(266.2,95.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguA2QgRgTAAgiQAAgiARgUQATgTAcAAQAcAAARATQATATgBAiIAAAGIhnAAQABAXAMANQAMAMAQgBQANAAAKgGQAJgHAFgPIAYADQgFAVgQANQgPALgZAAQgeAAgSgTgAAogMQgCgSgHgJQgMgOgSAAQgPABgMAKQgLALgBATIBOAAIAAAAg");
	this.shape_11.setTransform(251.3,95.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglBHIAAiKIAWAAIAAAUQAHgOAHgFQAHgFAHAAQAMAAANAIIgIAWQgJgFgJAAQgIAAgFAFQgFAEgEAIQgDANAAAPIAABIg");
	this.shape_12.setTransform(240.4,95.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqA2QgSgSAAgkQAAgVAHgRQAIgRAPgIQAQgJARAAQAXAAAOALQAOAMAFAVIgYADQgDgOgIgGQgJgIgLAAQgRABgLANQgMAMAAAbQAAAcALANQALAMARAAQAOAAAJgIQAJgJADgSIAXADQgEAZgQAOQgQANgWAAQgcAAgRgTg");
	this.shape_13.setTransform(228.5,95.9);

	this.text_1 = new cjs.Text("Back", "18px 'Arial'", "#190233");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.parent = this;
	this.text_1.setTransform(86.6,35.6);

	this.backBtn = new lib.BtnSkin();
	this.backBtn.name = "backBtn";
	this.backBtn.parent = this;
	this.backBtn.setTransform(29.1,28,0.768,1.168,0,0,0,0.1,0);

	this.bg = new lib.cdd_mc_000005();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(320,570,1,1,0,0,0,320,570);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.backBtn},{t:this.text_1},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CreatejsGalley, new cjs.Rectangle(-54.4,0,764,1140), null);


(lib.CreatejsDomMoviePage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtA2QgSgTAAgiQAAgiASgUQASgTAcAAQAcAAARATQATATgBAiIAAAGIhnAAQABAXAMANQALAMARgBQANAAAKgGQAIgHAGgPIAYADQgFAVgQANQgPALgZAAQgeAAgRgTgAAngMQgBgSgIgJQgLgOgSAAQgQABgLAKQgLALgBATIBNAAIAAAAg");
	this.shape.setTransform(448.3,95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBhIAAiLIAXAAIAACLgAgLhEIAAgcIAXAAIAAAcg");
	this.shape_1.setTransform(437.8,93.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBGIg1iLIAZAAIAeBTIAIAcIAJgaIAfhVIAYAAIg1CLg");
	this.shape_2.setTransform(428.1,95.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA2QgRgTgBgjQAAgmAWgSQASgQAZAAQAdAAATATQASATAAAhQgBAagHAQQgJAPgPAIQgQAJgSAAQgcAAgTgTgAgcgnQgMANAAAaQAAAbAMAOQALANARgBQASAAAMgNQALgNABgbQgBgagLgNQgMgOgSAAQgRAAgLAOg");
	this.shape_3.setTransform(413.8,95.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABEBhIAAihIg5ChIgWAAIg4ikIAACkIgYAAIAAjBIAmAAIAuCIIAIAdIALgfIAuiGIAiAAIAADBg");
	this.shape_4.setTransform(395.1,93.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABEBhIAAihIg5ChIgWAAIg4ikIAACkIgYAAIAAjBIAmAAIAuCIIAIAdIALgfIAuiGIAiAAIAADBg");
	this.shape_5.setTransform(365.2,93.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBWQgVgNgMgXQgLgWABgZQAAgwAagbQAZgbAoAAQAbAAAWANQAVAMALAYQAMAWgBAcQAAAegMAWQgMAYgVAMQgWAMgZAAQgaAAgWgOgAgtg7QgUATAAArQAAAiATAVQATAUAbAAQAdAAASgUQATgUAAgmQAAgXgIgRQgIgSgPgJQgQgKgTAAQgaAAgTASg");
	this.shape_6.setTransform(343.5,93.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPBhIAAjBIBDAAQAVAAAMADQARAEALAKQAQANAHAUQAIAUAAAaQAAAVgFARQgFARgIALQgJALgJAHQgKAGgNADQgOAEgQAAgAg1BKIApAAQASAAALgEQALgDAGgHQAJgJAFgPQAFgPAAgVQAAgfgJgQQgKgQgPgGQgKgEgWAAIgoAAg");
	this.shape_7.setTransform(323.6,93.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA2QgSgTAAgiQAAgiASgUQATgTAcAAQAcAAASATQARATABAiIAAAGIhoAAQABAXAMANQAMAMAQgBQAOAAAIgGQAKgHAFgPIAZADQgGAVgQANQgPALgZAAQgdAAgTgTgAAngMQgBgSgHgJQgMgOgSAAQgQABgKAKQgLALgCATIBNAAIAAAAg");
	this.shape_8.setTransform(298.5,95.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALgBIADAVQgKADgIAAQgNgBgGgEg");
	this.shape_9.setTransform(287.4,93.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzA+QgMgLAAgSQAAgKAEgIQAFgJAIgGQAHgDAKgDIAVgDQAbgEAOgFIAAgGQAAgPgHgGQgJgIgRAAQgQAAgIAHQgIAFgEAPIgXgDQADgPAHgJQAHgKAOgEQAOgFARAAQASAAALAEQALAEAFAHQAGAGACAKIABAWIAAAeQAAAhACAJQABAJAEAIIgYAAQgEgHgBgKQgNALgMAFQgMAEgOAAQgXAAgMgLgAgFAIQgOADgHADQgGACgDAFQgDAFAAAHQAAAJAHAGQAHAGAOAAQANABAKgHQALgFAFgLQAEgIAAgQIAAgIQgNAFgZADg");
	this.shape_10.setTransform(275.9,95.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtA2QgTgTABgiQgBgiATgUQASgTAcAAQAcAAARATQASATAAAiIAAAGIhnAAQABAXAMANQALAMARgBQAOAAAJgGQAIgHAGgPIAYADQgFAVgQANQgQALgYAAQgeAAgRgTgAAngMQgBgSgIgJQgLgOgSAAQgQABgLAKQgLALgBATIBNAAIAAAAg");
	this.shape_11.setTransform(261,95.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglBHIAAiKIAWAAIAAAUQAIgOAGgFQAGgFAJAAQAMAAAMAIIgIAWQgJgFgIAAQgIAAgGAFQgGAEgDAIQgDANAAAPIAABIg");
	this.shape_12.setTransform(250.1,95.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsBXQgUgNgLgYQgKgYAAgbQAAgeAMgWQAMgXAVgLQAVgMAYAAQAdAAAVAOQATAPAIAbIgZAGQgHgVgMgJQgOgKgTAAQgVAAgPAKQgPALgGASQgGASAAATQAAAYAHASQAHATAPAJQAPAJARAAQAWAAAOgMQAQgNAEgYIAaAGQgHAfgVASQgWAQgeAAQgeAAgTgNg");
	this.shape_13.setTransform(235,93.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALgBIADAVQgKADgIAAQgNgBgGgEg");
	this.shape_14.setTransform(214,93.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnA+QgOgLgEgXIAYgDQACANAIAIQAKAHAOAAQARAAAIgGQAIgHAAgIQgBgJgGgFQgFgCgUgGQgYgGgLgEQgKgEgFgJQgFgJAAgKQAAgJAEgIQAEgIAIgGQAFgEAKgDQAJgCAMAAQAPAAANAEQALAFAHAJQAFAHADAOIgYAEQgBgMgIgFQgHgHgNAAQgQAAgIAGQgGAFgBAHQAAAFAEAEQACADAHADIATAGQAaAHAKAEQAJADAHAIQAFAJAAAMQAAAMgHALQgHAKgNAGQgNAFgRAAQgaAAgOgLg");
	this.shape_15.setTransform(203.3,95.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtA2QgSgTAAgiQAAgiASgUQASgTAcAAQAcAAARATQATATgBAiIAAAGIhnAAQABAXAMANQALAMARgBQANAAAKgGQAIgHAGgPIAYADQgFAVgQANQgPALgZAAQgdAAgSgTgAAngMQgBgSgIgJQgLgOgSAAQgQABgLAKQgLALgBATIBNAAIAAAAg");
	this.shape_16.setTransform(189.1,95.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBhIAAiqIhAAAIAAgXICYAAIAAAXIhAAAIAACqg");
	this.shape_17.setTransform(173.5,93.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.text = new cjs.Text("Back", "18px 'Arial'", "#190233");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(86.6,35.6);

	this.backBtn = new lib.BtnSkin();
	this.backBtn.name = "backBtn";
	this.backBtn.parent = this;
	this.backBtn.setTransform(29.1,28,0.768,1.168,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backBtn},{t:this.text}]}).wait(1));

	// movie
	this.movie = new lib.cdd_mc_000006();
	this.movie.name = "movie";
	this.movie.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.movie).wait(1));

	// bg
	this.bg = new lib.cdd_mc_000005();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(320,570,1,1,0,0,0,320,570);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.CreatejsDomMoviePage, new cjs.Rectangle(0,0,640,1140), null);


(lib.cdd_mc_000004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgqMAzvMAAAhndMBUZAAAMAAABndg");
	mask.setTransform(270.1,331.1);

	// Layer_1
	this.content = new lib.cdd_mc_000003();
	this.content.name = "content";
	this.content.parent = this;

	var maskedShapeInstanceList = [this.content];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.content).wait(1));

}).prototype = getMCSymbolPrototype(lib.cdd_mc_000004, new cjs.Rectangle(0,20.1,540.2,642.1), null);


(lib.ScrollPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.scrollPanel = new lib.cdd_mc_000004();
	this.scrollPanel.name = "scrollPanel";
	this.scrollPanel.parent = this;
	this.scrollPanel.setTransform(61.2,174.1);

	this.timeline.addTween(cjs.Tween.get(this.scrollPanel).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape.setTransform(426.6,93.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA2QgTgTABgiQgBgiATgUQASgTAcAAQAcAAARATQASATAAAiIAAAGIhnAAQABAXAMANQALAMARgBQAOAAAJgGQAIgHAGgPIAZADQgGAVgQANQgQALgYAAQgeAAgRgTgAAngMQgBgSgIgJQgLgOgSAAQgPABgLAKQgMALgBATIBNAAIAAAAg");
	this.shape_1.setTransform(416.1,95.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBHIAAhTQAAgPgDgIQgCgGgHgFQgIgEgJAAQgOAAgLAKQgLAJAAAbIAABLIgYAAIAAiKIAVAAIAAAUQAQgYAcAAQANAAAKAFQALAFAFAHQAFAHADAKIABAYIAABUg");
	this.shape_2.setTransform(401.1,95.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzA+QgMgLAAgSQAAgKAEgIQAFgJAIgGQAHgDAKgDIAVgDQAbgEAOgFIAAgGQAAgPgHgGQgJgIgRAAQgQAAgIAHQgIAFgEAPIgXgDQADgPAHgJQAHgKAOgEQAOgFARAAQASAAALAEQALAEAFAHQAGAGACAKIABAWIAAAeQAAAhACAJQABAJAEAIIgYAAQgEgHgBgKQgNALgMAFQgMAEgOAAQgXAAgMgLgAgFAIQgOADgHADQgGACgDAFQgDAFAAAHQAAAJAHAGQAHAGAOAAQANABAKgHQALgFAFgLQAEgIAAgQIAAgIQgNAFgZADg");
	this.shape_3.setTransform(386.1,95.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBhIAAjBIBJAAQASAAAKACQAPADAJAGQAKAHAGAMQAGAMAAAOQAAAZgQAQQgQARgpAAIgwAAIAABPgAgvgEIAxAAQAYAAALgJQAKgJAAgRQAAgMgGgJQgGgIgKgDQgHgCgRAAIgwAAg");
	this.shape_4.setTransform(370.1,93.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_5.setTransform(357.6,93.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_6.setTransform(351.7,93.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA2QgSgTAAgjQABgmAVgSQASgQAZAAQAdAAATATQARATABAhQAAAagJAQQgIAPgPAIQgQAJgSAAQgcAAgTgTgAgdgnQgLANAAAaQAAAbALAOQANANAQgBQASAAAMgNQAMgNgBgbQABgagMgNQgNgOgRAAQgQAAgNAOg");
	this.shape_7.setTransform(341.2,95.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBHIAAiKIAVAAIAAAUQAIgOAIgFQAFgFAJAAQALAAANAIIgIAWQgJgFgJAAQgIAAgEAFQgHAEgCAIQgEANAAAPIAABIg");
	this.shape_8.setTransform(330.4,95.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqA2QgSgSAAgkQAAgVAIgRQAHgRAPgIQAQgJARAAQAWAAAPALQAPAMAEAVIgXADQgDgOgJgGQgJgIgLAAQgRABgMANQgLAMABAbQAAAcAKANQALAMAQAAQAOAAAKgIQAJgJACgSIAYADQgEAZgQAOQgPANgYAAQgbAAgRgTg");
	this.shape_9.setTransform(318.5,95.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglBcQgSgHgKgQQgKgPgBgUIAYgCQACAPAGAJQAGAKANAFQAOAGAQAAQAOAAALgEQAMgFAFgIQAFgHAAgJQAAgJgFgHQgFgGgMgGQgIgCgagHQgbgGgKgFQgOgHgHgLQgGgLAAgNQgBgOAJgNQAIgNAQgHQAQgGATAAQAVAAAQAHQARAHAIANQAKAOAAARIgZABQgBgSgMgJQgLgKgWAAQgWABgLAIQgLAIAAAMQAAALAHAGQAIAIAeAHQAgAHALAEQARAIAIALQAIANAAAPQAAAPgJAOQgIANgRAJQgRAHgUAAQgaAAgRgIg");
	this.shape_10.setTransform(302.2,93.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnA+QgOgLgEgXIAXgDQADANAIAIQAKAHAOAAQARAAAIgGQAIgHAAgIQgBgJgGgFQgFgCgUgGQgZgGgKgEQgKgEgFgJQgFgJAAgKQAAgJAEgIQAEgIAIgGQAFgEAKgDQAKgCALAAQAPAAANAEQALAFAHAJQAFAHADAOIgYAEQgBgMgIgFQgHgHgNAAQgQAAgIAGQgGAFgBAHQABAFADAEQACADAHADIATAGQAaAHAKAEQAJADAHAIQAFAJAAAMQAAAMgHALQgHAKgNAGQgNAFgRAAQgaAAgOgLg");
	this.shape_11.setTransform(279,95.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaB7IAFgVIALACQAHAAADgFQADgEAAgUIAAiSIAYAAIAACTQAAAagHAKQgIANgUAAQgJAAgJgCgAADhgIAAgcIAYAAIAAAcg");
	this.shape_12.setTransform(267.8,96.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtA2QgSgTAAgiQAAgiASgUQASgTAcAAQAcAAARATQATATgBAiIAAAGIhnAAQABAXAMANQALAMARgBQANAAAKgGQAIgHAGgPIAYADQgFAVgQANQgPALgZAAQgdAAgSgTgAAngMQgBgSgIgJQgLgOgSAAQgQABgLAKQgLALgBATIBNAAIAAAAg");
	this.shape_13.setTransform(258.8,95.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBbQgHgEgDgGQgDgHAAgVIAAhQIgRAAIAAgSIARAAIAAgjIAXgPIAAAyIAYAAIAAASIgYAAIAABRQAAAKABADQACADACACQADABAFAAIALgBIADAVQgKADgIAAQgNgBgGgEg");
	this.shape_14.setTransform(247.7,93.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzA+QgMgLAAgSQAAgKAEgIQAFgJAIgGQAHgDAKgDIAVgDQAbgEAOgFIAAgGQAAgPgHgGQgJgIgRAAQgQAAgIAHQgIAFgEAPIgXgDQADgPAHgJQAHgKAOgEQAOgFARAAQASAAALAEQALAEAFAHQAGAGACAKIABAWIAAAeQAAAhACAJQABAJAEAIIgYAAQgEgHgBgKQgNALgMAFQgMAEgOAAQgXAAgMgLgAgFAIQgOADgHADQgGACgDAFQgDAFAAAHQAAAJAHAGQAHAGAOAAQANABAKgHQALgFAFgLQAEgIAAgQIAAgIQgNAFgZADg");
	this.shape_15.setTransform(236.3,95.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguA2QgRgTgBgiQABgiARgUQATgTAcAAQAcAAASATQASATAAAiIAAAGIhoAAQABAXAMANQAMAMAQgBQANAAAJgGQAKgHAFgPIAYADQgFAVgQANQgQALgYAAQgdAAgTgTgAAogMQgCgSgHgJQgMgOgSAAQgPABgMAKQgKALgCATIBOAAIAAAAg");
	this.shape_16.setTransform(221.3,95.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglBHIAAiKIAWAAIAAAUQAIgOAHgFQAGgFAHAAQANAAAMAIIgIAWQgJgFgJAAQgHAAgFAFQgHAEgCAIQgEANAAAPIAABIg");
	this.shape_17.setTransform(210.5,95.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgqA2QgSgSAAgkQAAgVAIgRQAHgRAPgIQAQgJARAAQAWAAAPALQAOAMAFAVIgXADQgEgOgIgGQgJgIgLAAQgRABgLANQgLAMAAAbQgBAcALANQALAMARAAQANAAAKgIQAJgJADgSIAXADQgEAZgQAOQgPANgXAAQgcAAgRgTg");
	this.shape_18.setTransform(198.6,95.9);

	this.text = new cjs.Text("Back", "18px 'Arial'", "#190233");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(86.6,35.6);

	this.backBtn = new lib.BtnSkin();
	this.backBtn.name = "backBtn";
	this.backBtn.parent = this;
	this.backBtn.setTransform(29.1,28,0.768,1.168,0,0,0,0.1,0);

	this.bg = new lib.cdd_mc_000005();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(320,570,1,1,0,0,0,320,570);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.backBtn},{t:this.text},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollPanel, new cjs.Rectangle(-16.6,0,656.6,1467.2), null);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer_1
	this.instance = new lib.CreatejsGalley();
	this.instance.parent = this;
	this.instance.setTransform(320,570,1,1,0,0,0,320,570);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1));

	// DynamicFontPage
	this.instance_1 = new lib.DynamicFontPage();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320,570,1,1,0,0,0,320,570);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},1).wait(1));

	// ScrollPanel
	this.instance_2 = new lib.ScrollPanel();
	this.instance_2.parent = this;
	this.instance_2.setTransform(320,570,1,1,0,0,0,320,570);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({_off:true},1).wait(2));

	// CreatejsAutoScreen
	this.instance_3 = new lib.CreatejsAutoScreen();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({_off:true},1).wait(3));

	// WebGL2StagePage
	this.instance_4 = new lib.NPCMovie("synched",7);
	this.instance_4.parent = this;
	this.instance_4.setTransform(680.5,156.5);

	this.instance_5 = new lib.WebGL2StagePage();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,570,1,1,0,0,0,320,570);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},4).to({state:[]},1).wait(4));

	// CreatejsDomMoviePage
	this.instance_6 = new lib.CreatejsDomMoviePage();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320,570,1,1,0,0,0,320,570);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({_off:true},1).wait(5));

	// CreatejsInputPage
	this.instance_7 = new lib.CreatejsInputPage();
	this.instance_7.parent = this;
	this.instance_7.setTransform(320,570,1,1,0,0,0,320,570);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true},1).wait(6));

	// SelectImagesPage
	this.instance_8 = new lib.SelectImagesPage();
	this.instance_8.parent = this;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true},1).wait(7));

	// HomePage
	this.instance_9 = new lib.HomePage();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.1,520,640,1140);
// library properties:
lib.properties = {
	id: '5071EEE873294290BE1B32546711C71F',
	width: 640,
	height: 1040,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/main/main_atlas_P_.png?1510564339365", id:"main_atlas_P_"},
		{src:"images/main/main_atlas_NP_.jpg?1510564339365", id:"main_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5071EEE873294290BE1B32546711C71F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;