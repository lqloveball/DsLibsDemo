(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwUAjIAAhFMAgpAAAIAABFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-3.5,209,7);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpAuQgSgSAAgcQAAgaASgTQARgTAYAAQAZAAARATQASAUAAAZQAAAbgSATQgRATgZAAQgZAAgQgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE90D").ss(5,1,1).p("AABgZIgBAz");
	this.shape_1.setTransform(2.4,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(5,1,1).p("AAAgUQABASAAAQIAAAH");
	this.shape_2.setTransform(2.5,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9438").ss(5,1,1).p("AADgKIgFAV");
	this.shape_3.setTransform(0.5,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAB31").ss(5,1,1).p("AADgNIgFAb");
	this.shape_4.setTransform(1.1,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFD11D").ss(5,1,1).p("AAFgbIgJA3");
	this.shape_5.setTransform(1.9,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgMhBQAVBBAEBC");
	this.shape_6.setTransform(1.1,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6.5,12,41.8);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102,35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(4.3,1,1).p("AIIAAQAADXiYCYQiZCZjXAAQhLAAhEgTQh9gjhjhjQiYiYAAjXQAAjXCYiYQAHgIAIgHQCUiJDMAAQDXAACZCYQCYCYAADXg");
	this.shape.setTransform(52.4,52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-1.7,-1.9,109.7,108.2), null);


(lib.LoadPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.label = new cjs.Text("100%", "20px 'Arial'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 24;
	this.label.lineWidth = 159;
	this.label.parent = this;
	this.label.setTransform(321.5,491.1);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(100));

	// 图层 5
	this.instance = new lib.补间2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(211.5,454.5,0.022,1,0,0,0,-106,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-105,scaleX:1},99).wait(1));

	// 图层 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AwUAjIAAhFMAgpAAAIAABFg");
	this.shape.setTransform(316.5,454.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	// 图层 3
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.7,359.1,1,1,0,0,0,52.2,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AhdhyIAMBCAgFhxIgSBAABeAdIhDABABIg/Ig2AuAAXBTIAyAg");
	this.shape_1.setTransform(493,303.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#491E79").s().p("AhlBmIAAjLIDLAAIAADLg");
	this.shape_2.setTransform(386.2,337.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D332CB").s().p("AgyhFIAAAAIBlBGIhhBFg");
	this.shape_3.setTransform(288.9,405);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.498)").ss(5,1,1).p("AGOABIsbgB");
	this.shape_4.setTransform(327.2,405.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.8)").ss(5,1,1).p("AF/ixIAAkvAl+myII6OT");
	this.shape_5.setTransform(348.1,357.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#491E79").ss(5,1,1).p("AAABJIAAiR");
	this.shape_6.setTransform(386.5,346.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#3A2983").ss(5,1,1).p("AAAClIAAlJ");
	this.shape_7.setTransform(386.5,370.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4A239A").ss(5,1,1).p("ACgBfIk/AAIAAi9");
	this.shape_8.setTransform(402.5,397.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3928A5").ss(5,1,1).p("AC0AAIlnAA");
	this.shape_9.setTransform(436.5,407.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0052B5").ss(5,1,1).p("ACWhUIAACpIkrAA");
	this.shape_10.setTransform(469.5,398.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0075CC").ss(5,1,1).p("AAAiuIAAFd");
	this.shape_11.setTransform(484.5,372.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#008BEE").ss(5,1,1).p("AAAjCIAAGF");
	this.shape_12.setTransform(484.5,335.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00CCFF").ss(5,1,1).p("Ai9AAIF7AA");
	this.shape_13.setTransform(424.5,309.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#D33BDD").ss(5,1,1).p("AA1AAIhpAA");
	this.shape_14.setTransform(282.1,405.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#ED3BDD").ss(5,1,1).p("AA8AAIh3AA");
	this.shape_15.setTransform(270.9,405.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF49E0").ss(5,1,1).p("AAcAAIg3AA");
	this.shape_16.setTransform(262.1,405);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF3DE5").ss(5,1,1).p("AAhAmIhBgBIAthK");
	this.shape_17.setTransform(256.1,401.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF6FF0").ss(5,1,1).p("AgXAmIAvhL");
	this.shape_18.setTransform(259.7,393.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF8DF0").ss(5,1,1).p("AgoBBIBRiB");
	this.shape_19.setTransform(266.2,383.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFCBE9").ss(5,1,1).p("AgbAtIA3hZ");
	this.shape_20.setTransform(273,372.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFF3F9").ss(5,1,1).p("AgjA6IBHhz");
	this.shape_21.setTransform(279.4,362.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0033CC").ss(5,1,1).p("AAAAFIAAgJ");
	this.shape_22.setTransform(386.5,387.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0099FF").ss(5,1,1).p("AjMgiIGZAAIAABF");
	this.shape_23.setTransform(464,312.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1,1).p("AGmjsIC+AAApjDtIEMmr");
	this.shape_24.setTransform(344.3,332.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1}]}).wait(100));

	// 图层 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#850000","#E37500"],[0,1],-4.5,-333.3,0.3,26.8).s().p("Egx/BZEMAAAiyHMBj/AAAMAAACyHg");
	this.shape_25.setTransform(320,570);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1140);


// stage content:
(lib.cjsLoad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.LoadPanel();
	this.instance.parent = this;
	this.instance.setTransform(78,78,1,1,0,0,0,78,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,520,640,1140);
// library properties:
lib.properties = {
	id: 'EB14BC82AE2547EFB941F3FEED0893CC',
	width: 640,
	height: 1040,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['EB14BC82AE2547EFB941F3FEED0893CC'] = {
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