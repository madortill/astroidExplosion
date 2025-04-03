(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,461);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgX+AkBMAAAhIBMAv9AAAMAAABIBg");
	mask.setTransform(153.5,230.5);

	// Layer_3
	this.instance = new lib.Image();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,307,461), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgX+AkBMAAAhIBMAv9AAAMAAABIBg");
	mask.setTransform(153.5,230.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3CEB4").s().p("AgGAAIAHgGQAEABACAEIgIAIQgDgCgCgFg");
	this.shape.setTransform(175.2,160.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3CEB4").s().p("AgHgCIAHgGIAIAKIgJAHg");
	this.shape_1.setTransform(164.325,168.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3BB99").s().p("AgHAEIAFgMIAKAIIgIAJQgFgCgCgDg");
	this.shape_2.setTransform(175.5,168.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3CEB4").s().p("AgIgBIAJgHQAEAAADADIAAAOg");
	this.shape_3.setTransform(164.95,169.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E94A3").s().p("AgCAIIgCgLQACgFADABIAEAMQgCADgDAAIgCAAg");
	this.shape_4.setTransform(173.35,170.5663);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E94A3").s().p("AgEAFIAAgOIAJAJIgBAKg");
	this.shape_5.setTransform(166.325,170.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D3CEB4").s().p("AgJgBIALgJQADAEAFABIgPAQg");
	this.shape_6.setTransform(174.45,169.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D3CEB4").s().p("AgLAAIAAgLIAXAQIgIAHg");
	this.shape_7.setTransform(174.1,159.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3CEB4").s().p("AgLAEIAPgOIAIAKIgTALg");
	this.shape_8.setTransform(168.375,163.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3CEB4").s().p("AgIAFQAAgSALgbIAGBLIgGAGQgMgRABgTg");
	this.shape_9.setTransform(163.274,164.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8E94A3").s().p("AgiAEQAigYAjAUIAAAKg");
	this.shape_10.setTransform(169.425,158.0632);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8E5D4").s().p("AgeAFIABgKIA7AAIACALg");
	this.shape_11.setTransform(169.9,170.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3BB99").s().p("AgKAhIgDhBIAJgJQAjAogfArg");
	this.shape_12.setTransform(176.36,164.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D3CEB4").s().p("AgKgKIAVgBIgMAWg");
	this.shape_13.setTransform(130.025,179.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4B2311").s().p("AgOANIANgWIAJgJQATAcggAJg");
	this.shape_14.setTransform(131.3255,179.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D3CEB4").s().p("AgQARIADgHQAggKgTgbIAQAAQACAfgBAEQgEASgYACg");
	this.shape_15.setTransform(132.1393,180.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8E94A3").s().p("AgGAGIgBgLIAPALg");
	this.shape_16.setTransform(123.575,161.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4B2311").s().p("AgEACIADgHIAGAFQAAAAgCAGQgGgDgBgBg");
	this.shape_17.setTransform(140.6292,137.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E94A3").s().p("AgEgUIAGADIADAmg");
	this.shape_18.setTransform(120.375,156.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4B2311").s().p("AgYACIAAgDIAxAAIAAADg");
	this.shape_19.setTransform(134.275,136.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D3CEB4").s().p("AgaAEIAvgUIAGAMQgKARgJADIgHABQgLAAgQgNg");
	this.shape_20.setTransform(137.1,150.4221);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4B2311").s().p("AgRAVQgSgQAHgVQACgHAIgHQAIgGAFAAQAKACAJAGQAKAGADAIQAEAIgBAPIgBAcIgFAAQgYAAgRgQg");
	this.shape_21.setTransform(128.9051,155.9293);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E8E5D4").s().p("AghApQgRgEgJAAIAAgcQABgQAFgIQARgYAggCQAggBAgAWIgjAfQgUASgQAKQgEADgIAAIgKgBg");
	this.shape_22.setTransform(133.3,145.065);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D3CEB4").s().p("AgFgBIAGgEIAFAFIgIAGQgEgGABgBg");
	this.shape_23.setTransform(163.8219,403.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E8E5D4").s().p("AgGAGQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAABAAQACgJAEAAQABgBADACIAIAFQgJAHgDAAIgBAAIgDgBg");
	this.shape_24.setTransform(168.1464,308.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8E94A3").s().p("AAOBaIgTgoQgUgfgEgoQgCgcAEgxQAmgPAHAoIAMA7IgBB1g");
	this.shape_25.setTransform(249.9554,280.7355);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4B2311").s().p("AgBgEIADAGIgCADg");
	this.shape_26.setTransform(241.175,296.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1F1513").s().p("AgIgGIAIgHIAKASIgKAIg");
	this.shape_27.setTransform(249.5,287.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1F1513").s().p("AgJgFIAJgIIAJAUIgIAHg");
	this.shape_28.setTransform(250.45,289.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1F1513").s().p("AgFgUIALAoIgKABg");
	this.shape_29.setTransform(238.45,263.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1F1513").s().p("AgSgVIAIgHIAOAOIAPABIgIAoIgHACg");
	this.shape_30.setTransform(252.5,292.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4B2311").s().p("AgHA7IABh2IAKAAIAEB3g");
	this.shape_31.setTransform(253.675,285.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F76607").s().p("AhygsICzgmQAJgCANACIAWADQAJARgEANQgEANgRALQgXAQgrAkIhDAzIgPAGg");
	this.shape_32.setTransform(203.4115,274.7375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E8E5D4").s().p("Ag+AdIAOhTIBhALQADAAAEAHIAHAKIgJBRg");
	this.shape_33.setTransform(106.075,159.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8E94A3").s().p("AgCAbIgGg4QAGABACgBIAJA7g");
	this.shape_34.setTransform(180.825,164.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1F1513").s().p("Ag1BdQgegSgOggQgYg0AggxQAfgxA6gCQAIAAAfACIA/BEIAGA5QgNApgaAYQgaAYgiACIgIABQgcAAgagRgAhJgCQAAASAMARIAGAMIAaAQIA+ACQAFABADgEIAZgZQAfgrgkgoQgBgEgEgBIgYgRQgjgUgiAZIBFAGIAQANQABAFADACIADBBIgFAMIgNAJQgEgBgCAFIg7gBIgKgJQgEgDgDAAIgJgLIgHhLQgMAbAAATgAgZgOIAFAGIAUgMIgIgJg");
	this.shape_35.setTransform(169.723,165.0607);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4B2311").s().p("AgKgJIAVASIgNABg");
	this.shape_36.setTransform(154.775,139.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1F1513").s().p("AgEACIAKgTIgJAjg");
	this.shape_37.setTransform(156.3,160.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8E94A3").s().p("AgPgBIAagKIAFALIgKAMg");
	this.shape_38.setTransform(129.3,182.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4B2311").s().p("AAJgUIABARIgTAXg");
	this.shape_39.setTransform(154.85,163.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4B2311").s().p("AgGATIACgmIALAIIgEAfg");
	this.shape_40.setTransform(112.825,159.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1F1513").s().p("AgHAUIACgnIANAIIgFAfg");
	this.shape_41.setTransform(142.725,175.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4B2311").s().p("AgjgJIAJgKIAOAAIAwAeIgjAJg");
	this.shape_42.setTransform(125.625,164.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1F1513").s().p("AgRAZQAZgCAEgSQABgEgDgfIAIgHQAQAogKAQQgJAPgqAEg");
	this.shape_43.setTransform(132.6555,180.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4B2311").s().p("AgrAQIBXgnIhJAvg");
	this.shape_44.setTransform(146.5,171.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1F1513").s().p("AgWhFIATAyIAIAnIAUAdIAAAAIAAABIAAgBIABALIgJAKQgzg0AMhXg");
	this.shape_45.setTransform(120.345,156.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4B2311").s().p("AgCA6IgTgxIADgJIAZg8IAKAJQAFAGAAADQgDAYgPBPIgGgDg");
	this.shape_46.setTransform(120.1771,148.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1F1513").s().p("AhIASIAKgIQAGgFAEgBIB9gYQgcAdgoAJQgOADgUAAQgUAAgXgDg");
	this.shape_47.setTransform(139.075,167.2625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1F1513").s().p("AgpgfIAvgHQAXgBANASIgIAHIgQgBIgJAKIgWAAIAKAWIAIAGIgEAHIgaAKg");
	this.shape_48.setTransform(130.275,178.7974);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4B2311").s().p("AhoB5IAUgNQAMgIAIAAQBSAAAthEQAuhEgnhMQgBgCABgFIABgIQAdAgAEApQAFAogUAqQgEAJgEANIgFAYIgQAPIh9AZQgEABgGAFIgKAIg");
	this.shape_49.setTransform(140.3663,156.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1F1513").s().p("AhtCUIAjgKIhAgqIAAABIgUgeIgDgmQAPhPADgYQABgDgGgGIgJgJQAeg+BXgLQBSgMAxAqQBEA7ADBNQACBJg0AwIAGgXQADgOAEgJQAUgrgEgnQgFgpgdggIgBAJQAAAEABACQAmBMguBFQgtBEhSgBQgIAAgMAIIgUANgAhgAOQgIAHgCAHQgHAWASAQQASARAdgBIABgcQABgQgEgIQgDgIgKgGQgJgGgLgCIgBAAQgEAAgIAGgAgWgFQAUAQANgFQAJgDALgRIgGgMgAgmhoQggABgRAZQgFAIgBAQIAAAcQAIABASADQAPADAHgFQAQgJAVgSIAiggQgdgVgfAAIgEAAgAAiiLQABACAHACQACgGAAgBIgHgFgAgxiRIAyAAIAAgFIgyAAgAieBCIAAABIAAABgAieBDg");
	this.shape_50.setTransform(136.7287,151.4252);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8E94A3").s().p("AABCsQgCgZgDgMIgfj5IAChHIAQAUQAKAMACAJQAFAQACAZIAFApIARBsIAMCLIgMABQgRAAgGgOg");
	this.shape_51.setTransform(101.175,351.5394);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8E94A3").s().p("AgDCTIg6hPIg7hFIgYgnIAag3IATgmQAOghAfATIALAIIAOARIAtAhIAZAtIAOAQIBaC3g");
	this.shape_52.setTransform(123.225,334.1029);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E8E5D4").s().p("AAAAIIgNgIIAEgEQADgDACAAQACgBAFACIALAEQgLAKgDAAIAAAAg");
	this.shape_53.setTransform(154.7,284.121);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D3CEB4").s().p("AgFAOIAEgbIAHABIAAAag");
	this.shape_54.setTransform(70.9,262.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4B2311").s().p("AgKADIADgHIASAJg");
	this.shape_55.setTransform(86.775,171.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8E94A3").s().p("AgWgDIADgJIAqANIgEAMg");
	this.shape_56.setTransform(85.125,174.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8E94A3").s().p("AgYAAIAEgOIAtAQIgDANg");
	this.shape_57.setTransform(85.725,168.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4B2311").s().p("AgIgFIARABIgRAKg");
	this.shape_58.setTransform(120.875,136.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D3CEB4").s().p("AgLARIALgiIAMAIIgWAbg");
	this.shape_59.setTransform(242.925,347.475);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1F1513").s().p("AgFgBIABgDIAKABIgIAIg");
	this.shape_60.setTransform(176.3,342.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1F1513").s().p("AgLgNIAOgBIAJAcIgOABg");
	this.shape_61.setTransform(178.3,347.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1F1513").s().p("AgTADIACgOIAlAJIgBAOg");
	this.shape_62.setTransform(170.85,371.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D3CEB4").s().p("AgOAAIASgIQALgBAAASg");
	this.shape_63.setTransform(152.2,407.3975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4B2311").s().p("AgMgKIAJgJIAQAmIgOABg");
	this.shape_64.setTransform(177.325,344.225);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1F1513").s().p("AACgdIAJAAQgBALABAWQgDATgSAHg");
	this.shape_65.setTransform(178.925,368.15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4B2311").s().p("AgZAHIACgOIAxgCQgGATgQAAIgdgDg");
	this.shape_66.setTransform(175.3,372.125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8E94A3").s().p("AADATQgGgBgLgHIgRgMIAOgLQAIgGAHgBQAGAAAKAEIASAHIABANIgQAKQgIAFgEAAIgCgBgAgIgCQAAACAEAFIAIgFIgFgGIgHAEg");
	this.shape_67.setTransform(164.05,403.1556);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8E94A3").s().p("AgHAbQgIgBgIgLIgOgTIAOgOQAJgJAHAAQAHAAALAIIAbASIgbAUQgLAJgFAAIgCgBgAgHgFQgEABgCAIQAAABAAAAQAAAAAAABQABAAAAAAQABABABAAQAAABABAAQAAABABAAQAAAAABAAQAAAAAAAAQAEgBAIgHIgHgEIgEgCIgBAAg");
	this.shape_68.setTransform(168.6,307.8589);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4B2311").s().p("AABBQIgKieIANgCIAGChIgCAAIgHgBg");
	this.shape_69.setTransform(179.025,357.0833);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4B2311").s().p("AgNAoIAbhPIgQBPIgLAAg");
	this.shape_70.setTransform(114.425,148.075);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4B2311").s().p("AAuAYQgLgJgIgFIhxgxQBFAVARAEQAcAGA6AJIgVAnIgTgQg");
	this.shape_71.setTransform(110.35,138.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C15517").s().p("AgDAOIgVgSIALgMIAnAAIgJAdIgLAEgAgYgEIAAAAIgBABgAgYgEg");
	this.shape_72.setTransform(156.225,138.75);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C15517").s().p("AgMgCIAbgCIgdAIg");
	this.shape_73.setTransform(176.3,133.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C15517").s().p("AgYgCIAmgDIALADIgxAIg");
	this.shape_74.setTransform(161.325,136.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C3BB99").s().p("AgQADQgIgfAKgfIAjAzIgBgBIgBBFIgMAAQgSglgFgUg");
	this.shape_75.setTransform(235.8849,262.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8E94A3").s().p("AAyE4IgUgKIgSgMQgEgDgDgBIgRgKIgUgSQgEgDgFgBIgKgJIgVgUIgJgKIg8hWIC4hzIgagRIgKgUIgJgKIgDgJIglgzIgQghQgYhPgBgdQgBgcARg2ICKD3IAjAvIAEAXIAgA7IgJAKQgGAGgEAAQgKgBgQgDIgdgHIAXDUIgDAog");
	this.shape_76.setTransform(222.3,272.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1F1513").s().p("AgIgGIANAAIAEAIIgHAGg");
	this.shape_77.setTransform(221.125,268.85);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1F1513").s().p("AgHgBIAGgGIAJAJIgIAGg");
	this.shape_78.setTransform(222.175,269.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1F1513").s().p("AgGgCIAGgGIAHALIgHAHg");
	this.shape_79.setTransform(217.3,262.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1F1513").s().p("AgHABIANgJIACANQgDAEgFAAg");
	this.shape_80.setTransform(200.075,282.425);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1F1513").s().p("AgHABIAHgIIAIAJIgIAGg");
	this.shape_81.setTransform(214.2,294.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1F1513").s().p("AgIAAIAHgIIAKAIIgJAIg");
	this.shape_82.setTransform(217.225,297.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1F1513").s().p("AgHgBIAHgIQAFABAEADIgCAPg");
	this.shape_83.setTransform(218.1,298.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1F1513").s().p("AgHACIAIgIQADABAEADIgIAIQgFAAgCgEg");
	this.shape_84.setTransform(222.675,301.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1F1513").s().p("AgKgEIAIgGIANAUIgMABg");
	this.shape_85.setTransform(218.3,264.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1F1513").s().p("AgJgGIAIgGIALARIgKAIg");
	this.shape_86.setTransform(229.425,264.125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4B2311").s().p("AgJAAIAIgHIALAOIgNABg");
	this.shape_87.setTransform(220.675,267.375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1F1513").s().p("AgJgEIAJgGIAKASIgEADg");
	this.shape_88.setTransform(223.075,271.125);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1F1513").s().p("AgFgLIABgBIAKASIgIAHg");
	this.shape_89.setTransform(233.55,271.275);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1F1513").s().p("AgIgGIAIgGIAJATIgHAGg");
	this.shape_90.setTransform(234.225,273.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1F1513").s().p("AgIgGIAIgGIAJATIgHAGg");
	this.shape_91.setTransform(216.45,261.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1F1513").s().p("AgIgFIAHgHIAKASIgIAGg");
	this.shape_92.setTransform(235.325,275.15);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1F1513").s().p("AgIgGIAIgGIAJATIgHAGg");
	this.shape_93.setTransform(236.35,277.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1F1513").s().p("AgMAAIAIgJIARAKIgHAJg");
	this.shape_94.setTransform(224,302.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1F1513").s().p("AgNAAIAIgIIATAJIgHAIg");
	this.shape_95.setTransform(225.925,303.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4B2311").s().p("AgIgIIAPgBIABAKIgOAJg");
	this.shape_96.setTransform(240.9,302.05);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4B2311").s().p("AgLAAIAGgJIARAKIgJAJg");
	this.shape_97.setTransform(221.575,300.95);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4B2311").s().p("AgKACIACgPIATARIgGAKg");
	this.shape_98.setTransform(219.875,299.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4B2311").s().p("AgLgJIANgBIAKAOIgIAHg");
	this.shape_99.setTransform(219.275,266.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1F1513").s().p("AgOgHIAJgHIAUATIgHAJg");
	this.shape_100.setTransform(215.575,296.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1F1513").s().p("AgRgSIAKgIIAZA0IgBABg");
	this.shape_101.setTransform(231.225,267.35);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1F1513").s().p("AgTgYIAIgIIAfA6IgIAGg");
	this.shape_102.setTransform(227.225,260.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4B2311").s().p("AgfANIA1goIAKAJIg9Aug");
	this.shape_103.setTransform(203.875,280.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1F1513").s().p("AggAJIAGgIIAlAGIADgoIANAAIAGBDg");
	this.shape_104.setTransform(229.975,303.475);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4B2311").s().p("AgMg6IANgBIAMB3IgNAAg");
	this.shape_105.setTransform(231.375,294.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4B2311").s().p("AgVgUIAPgBIALgBIACgcIAKgBIAFBDIgJAkg");
	this.shape_106.setTransform(237.3,270.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4B2311").s().p("Ag2A2QArglAWgQQARgKAEgNQAEgNgJgRIAJgKQAUAkgBAKQgCAJgfAWIhDAwg");
	this.shape_107.setTransform(211.6052,272.025);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1F1513").s().p("Ag1goIAeAHQAPADAKABQADAAAGgGIAJgKIAIgGIAaArIhYgHIAFBCIgOABg");
	this.shape_108.setTransform(234.475,283);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1F1513").s().p("AghA1IgNgoIAKhiIBFAAIAOBiIgLAAIgMg5QgHgpgmAQQgEAwACAbQAEApATAgIgHAGg");
	this.shape_109.setTransform(249.375,277.85);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1F1513").s().p("AhqAPICXhdQAIgFAJgKIAQgSIADgDIAaATIi5ByIA9BWIgIAKg");
	this.shape_110.setTransform(215.95,283.425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4B2311").s().p("AgcgUIANAAIAsAqg");
	this.shape_111.setTransform(203.8,226.15);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C15517").s().p("AgZADIAzgIIgCAIIgcACg");
	this.shape_112.setTransform(167.425,138.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C15517").s().p("AgXAJQAZgSAIAAQAIAAAGATg");
	this.shape_113.setTransform(203.3,164.2244);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F76607").s().p("AgPAgIgEgcIgFgbIgBgoIAwABIADAbIgEBiIgLABQgYAAgCggg");
	this.shape_114.setTransform(203.425,171.5355);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4B2311").s().p("AgHgJIAPADIgBAQg");
	this.shape_115.setTransform(180.125,157.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1F1513").s().p("AgOgEIAcgCIABAIIgcAGg");
	this.shape_116.setTransform(168.375,139.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1F1513").s().p("AgHgOIAPAdIgPAAg");
	this.shape_117.setTransform(157.6,145.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#8E94A3").s().p("AgGAIIgDgRIAPAAIAEATg");
	this.shape_118.setTransform(157.8,148.125);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1F1513").s().p("AgLgSIANgBIAJADIABAkg");
	this.shape_119.setTransform(155.675,142.125);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1F1513").s().p("AASAjIgCglIgsgNIA1gTIAEBFg");
	this.shape_120.setTransform(193.175,167.625);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4B2311").s().p("AgygBIALgFIAngBIAegIIAUACIABANIhjAQg");
	this.shape_121.setTransform(161.9,140.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D3CEB4").s().p("AAbAmIg+hDIALgJIAfAHIAKAQIADABIABADIAPATIAAAeIgEABIgFgBg");
	this.shape_122.setTransform(177.225,157.275);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#1F1513").s().p("AgKgZIAAgeIACgRIATBnIgKAqg");
	this.shape_123.setTransform(181.9,163.725);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4B2311").s().p("AAhAGIhYgFIgJgOQBVAGAdADQADABAFAGIAHAKg");
	this.shape_124.setTransform(171.425,152.75);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#1F1513").s().p("AgqgyIASACIAKAOQAGAIAFABQAHADAMgCIAUgCIAJAPIg9AEIgcA6g");
	this.shape_125.setTransform(161.325,154.05);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C3BB99").s().p("AgIgHIARAPIgQAAg");
	this.shape_126.setTransform(145.725,414.125);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C3BB99").s().p("AgJgTIATATIgTAUg");
	this.shape_127.setTransform(258.925,343.125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#1F1513").s().p("AgLggIAPgCIABATIADAKIAEAnIgPABg");
	this.shape_128.setTransform(240.425,297.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F76607").s().p("AgmAcIgGgxIACgEIgEgHIgKhfIALgHQAFAEAOAIQALAHADAHQAtBlAWA/QAJAdgcAYQgcAXgrADg");
	this.shape_129.setTransform(245.6953,299.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C15517").s().p("AgZAkQgQgGABgqIABAAIAygYIAeA1QgoAUgRAAQgFAAgEgBg");
	this.shape_130.setTransform(243.8688,253.3421);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C3BB99").s().p("AgmAeIAVgKIAYAhIAsBbIAHgCIAIgpIgEh3IgOhjIhFAAIgJBjQgUgWgIgMIgYgnIgFhEIgMgoIABABIAJgUIBrgNQAfAzAUBHQAOAxAQBTIABBfIgUBcIgTAWg");
	this.shape_131.setTransform(247.825,281.075);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4B2311").s().p("AgEgBQgBgFAFAAIAFANg");
	this.shape_132.setTransform(208.3417,321.375);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#1F1513").s().p("AgBAGIgGgNIAPAOg");
	this.shape_133.setTransform(209.05,321.45);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#1F1513").s().p("AgEgJIAJAJIgIAKg");
	this.shape_134.setTransform(199.425,287.05);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4B2311").s().p("AAIgKIACALIgTAKg");
	this.shape_135.setTransform(195.9,222.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1F1513").s().p("AgKgIIAUAHIgNAKg");
	this.shape_136.setTransform(190.5,270.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#1F1513").s().p("AgHgHIAJgLIAGAlIgMAAg");
	this.shape_137.setTransform(186.525,256.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#1F1513").s().p("AgLAMIACgWIANgHIAIAJIgLAag");
	this.shape_138.setTransform(198.85,284.275);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#1F1513").s().p("AgOgRIAdASIgBARg");
	this.shape_139.setTransform(198.325,312.975);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#1F1513").s().p("AgOAIIABgKIASgMIAKASIgJALg");
	this.shape_140.setTransform(178.425,286.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4B2311").s().p("AgHgPIAIgLIAHAqIgJALg");
	this.shape_141.setTransform(185.875,252.575);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#1F1513").s().p("AgEg1IAJA7IAAAkIgIAMg");
	this.shape_142.setTransform(185.45,245.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4B2311").s().p("AgngXIABgQIBIA5QADACABAIIACAMg");
	this.shape_143.setTransform(203.775,317.125);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1F1513").s().p("AgngjIABgRIBOBpg");
	this.shape_144.setTransform(191.8,304.875);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#1F1513").s().p("AgoA1IA+AAIAAhsIAPgJIAEBqIgDAWIhOABg");
	this.shape_145.setTransform(238,308.625);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4B2311").s().p("AgHANQgXgmgNgSIAIgMIBQBvQgfgLgVggg");
	this.shape_146.setTransform(203.5,292.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4B2311").s().p("AgmhCIAPgLIADADIA7CAIgCAYg");
	this.shape_147.setTransform(193.975,277.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4B2311").s().p("Agrg8IAJgKIBOB8IgBASg");
	this.shape_148.setTransform(183.475,294.15);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4B2311").s().p("AgnAtIAVhAQAMgmAJgZQADgHANgFQAPgHAGgDQglApgQA6QgMAqgEBEg");
	this.shape_149.setTransform(188.925,235.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4B2311").s().p("AiBhHQgBgBABgMIANAGQAHAEAEAEQBhBhCKAvIAAALQiOgbh1iBg");
	this.shape_150.setTransform(220.905,306.575);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4B2311").s().p("AhaA6IgVgHIgihvIANAAIAhBoIDCgoIAdgEQAPgBAHASIgJAJIgWgDQgNgBgJABIizAmg");
	this.shape_151.setTransform(200.625,264.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#1F1513").s().p("AgPA/IALgNQAFgIAAgGQADgXABghIABg5IAKA+IgBAPIgJBOg");
	this.shape_152.setTransform(165.4,241.925);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E8E5D4").s().p("Ag6BsIgFglIgBgxIAQhgIAlgoIAcABQAiAJAKAXQAIAUgKAiIgBA4QgBAhgCAXQgBAGgGAIIgLAOIgKACg");
	this.shape_153.setTransform(160.0579,236.975);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E8E5D4").s().p("AgLgSIAAAAIAXAdIgMAIg");
	this.shape_154.setTransform(51.925,274.925);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C15517").s().p("AgFAwIAEhiIAHBkIgIABg");
	this.shape_155.setTransform(206.2,173.025);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F76607").s().p("AgXBCIAAiLIAtAAIACBMIgGA/IgTAIg");
	this.shape_156.setTransform(109.225,178.575);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#1F1513").s().p("AA1B3IgChOQghgRgKAFQgJAEgGAkIgKgVIACgmIBDAEIACgMIiCggIAAgmQABgyANgMQANgLAyAFQALACAZAIQAVACAJgZIALAAIgGA7IgMgIIgHgLQgDgGgEAAIhhgMIgNBVIB0AaIAGgrIAKAAIgGDRg");
	this.shape_157.setTransform(106.35,167.05);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4B2311").s().p("AgHARIAGg/IAJAWIgIBHg");
	this.shape_158.setTransform(104.8,176.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#C15517").s().p("AgfBMIgBgnIAIhHQAFgkAKgFQAJgFAhASIgtAAIAACLIgTgBg");
	this.shape_159.setTransform(108.125,177.4707);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4B2311").s().p("Ag/gbIAKgqIBIgIIAtANIhuAKIAABYIgKAsg");
	this.shape_160.setTransform(188.375,173.85);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#4B2311").s().p("AAAAZIgIgxIALAAIAGAxg");
	this.shape_161.setTransform(195.825,173.625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C15517").s().p("AgXAYQgBgigBgCIACgpIAFAcIAEAbQADAnAigIIADADIgDAHIgaALQgUgIAAgWg");
	this.shape_162.setTransform(203.275,174.525);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F76607").s().p("AgvBQQgLgHABgTIAAgTIgCgUIAAhXIBugKIAJBXIgJA7IhHASIgMABQgKAAgFgDg");
	this.shape_163.setTransform(189.7,175.6667);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#4B2311").s().p("AgEgDIAJAAQADAEgEADIgIABQgCgFACgDg");
	this.shape_164.setTransform(142.4771,177.65);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E8E5D4").s().p("AjHCvIAAhiQAEgEgDgEIAFghIBKgwIgBABIALgLIgBABIALgLIgBABIALgVIAUgYIAKgkIAcg6IA9gEIBZAFIgMAJQgegCgJAAQg7ACgeAxQgfAxAXA1QAOAfAdASQAeATAigDQAigCAagYQAagYANgoIALADIAKCQQAFAWgNAIQgHAEgYADIgTAFIizAUg");
	this.shape_165.setTransform(162.8579,170.375);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E8E5D4").s().p("AhQEeIiLgPIgCgtIAFjRIAKhZIARhRIAKgTIAAAAIAWgnIAAAAIAKgKIAAAAIASgLIARgOIAOgIQA2ggBUACIAoAEIBDAgIALAIIAeAeIABgBIAHAUIAZAnIgBgBIAAAfIADASIgDBmIgoBPIABAAIgLAKIABAAIgLAKIhXAoIgCApQgCAEACAFIgEBjgAgmCaIgwAIIAQBHIAWAOQAqgEAJgPQAKgPgPgpQgNgSgVAAIgCAAgAgVj1QhXALgeA+IgaA8IgDAKQgMBYA0AzIAmAfIApAVIATAHQAtAHAggHQAogIAcgeIAQgQQAzgvgChJQgChOhFg7Qgmghg8AAQgPAAgSADg");
	this.shape_166.setTransform(134.8,159.4466);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#1F1513").s().p("AgJgFIATACIgKAJg");
	this.shape_167.setTransform(148.8,407.675);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4B2311").s().p("AgogHIALgKIAJAAIA9AVIgBAPg");
	this.shape_168.setTransform(152.8,409.0917);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#1F1513").s().p("AhFABIABgOICKANIgUAOg");
	this.shape_169.setTransform(163.775,410.875);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#1F1513").s().p("AgegEIAMgLIAxAfg");
	this.shape_170.setTransform(144.825,405.55);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#4B2311").s().p("AgFAGIAAgNIALABIgCAPg");
	this.shape_171.setTransform(168.4,371.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#4B2311").s().p("AgDgKIAHAAIgGAVg");
	this.shape_172.setTransform(165.275,374.225);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#1F1513").s().p("AgxAAIBXgVQACAAAEAFIAGAIIhjAeg");
	this.shape_173.setTransform(170.875,343.1477);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E8E5D4").s().p("AguCIIgDiEIgQh1IBigeIAAgCIABABIgBABIgBABIADAIIAUA7IALCfIgNA8IABAAIgBABIAAgBIgxACg");
	this.shape_174.setTransform(172.5,356.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C15517").s().p("AABAGQgFgBgPgJIAngBQgHALgJAAIgDAAg");
	this.shape_175.setTransform(99.775,394.7429);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C15517").s().p("AgwgEIABgTIAPgXIAdAlIA0A4g");
	this.shape_176.setTransform(92.8,389.55);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F76607").s().p("AgfAlIgeglIAJgjQAGgWAFgNQADgIAKgIQAJgIAIABQAIAAAJAJQAJAHADAJQAOAhATBEQAAAFACAFIAIAyIgoABIg0g5g");
	this.shape_177.setTransform(95.65,384.8235);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F76607").s().p("AhogOIgLg5QANgcAeAGQARADAbADIAqAEIAnADIATAEQAMACAFAEQAHADAIAJIALAPIAAA9IgJBNg");
	this.shape_178.setTransform(133.45,366.4292);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F76607").s().p("AhBBeIgCjaICHAjIg6CqQgNAqgQACIgCAAQgQAAgcgfg");
	this.shape_179.setTransform(100.525,314.5837);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F76607").s().p("AAfBLIgFAAQhNgEgOgXQgOgWAOhlIBBAlQAjAVAXAQQAHAEAEAPQAEANgBAMQgBARgLAJQgIAHgNAAIgIgBg");
	this.shape_180.setTransform(64.9536,337.461);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#1F1513").s().p("AgHAAIAHgGIAIAGQgCAEgDADg");
	this.shape_181.setTransform(118.525,319.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#1F1513").s().p("AgIAAIAHgIIAKAJIgIAHg");
	this.shape_182.setTransform(121.125,321.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D3CEB4").s().p("AgGAEIAAgBIAMgHIABAJg");
	this.shape_183.setTransform(85.975,332.625);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#1F1513").s().p("AgKgEQAEgDACgEIAPAOIgHAJg");
	this.shape_184.setTransform(119.875,320.625);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#1F1513").s().p("AgHgFIAHgIIAJAMIgDAPg");
	this.shape_185.setTransform(117.1,342.325);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#1F1513").s().p("AgKALIAKgWIALAIIgHAPg");
	this.shape_186.setTransform(110.275,324.95);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#1F1513").s().p("AgKgEIAHgHIAOAQIgIAHg");
	this.shape_187.setTransform(128.35,330.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#1F1513").s().p("AgFAFIAIgTIADARIgJAMQgCgFAAgFg");
	this.shape_188.setTransform(101.37,387.625);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#1F1513").s().p("AgMgIIAOgCIALAVg");
	this.shape_189.setTransform(76.5,365.15);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#1F1513").s().p("AgHgTIAKgBIAFAnIgKACg");
	this.shape_190.setTransform(104.35,358.125);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#1F1513").s().p("AgTAEIABgKIAlAEIABAJg");
	this.shape_191.setTransform(136.825,357.575);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#1F1513").s().p("AgRgIIAHgHIAcAeIAAABg");
	this.shape_192.setTransform(123.075,323.525);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#1F1513").s().p("AgRgIIAOgLIAVAlIghACg");
	this.shape_193.setTransform(106.575,336.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#1F1513").s().p("AgGggIANBAIgLABg");
	this.shape_194.setTransform(92.55,337.875);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#4B2311").s().p("AgPATIAQgmIAPABIgSAmg");
	this.shape_195.setTransform(109.075,328.05);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#1F1513").s().p("AgPgVIABgBIAeAmIgHAHg");
	this.shape_196.setTransform(126.425,327.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#4B2311").s().p("AgMARIAZgtIgQA5g");
	this.shape_197.setTransform(78.425,338.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#4B2311").s().p("AgTgYIAnAvIgOACg");
	this.shape_198.setTransform(74.675,361.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#1F1513").s().p("AAFgjIAMABQgDANgEAbQgGAWgVAIg");
	this.shape_199.setTransform(114.65,362.675);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#1F1513").s().p("AgLACQAGgfgBgQIAIAUIAKA5IgBAOQgXgPABgdg");
	this.shape_200.setTransform(121.673,361.75);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#1F1513").s().p("AgDATIgDhFIALAAIACBOIgCAXg");
	this.shape_201.setTransform(93.2,321.25);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#4B2311").s().p("AgFAjIgBhFIAMgBIABBGg");
	this.shape_202.setTransform(115.7,355.65);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#1F1513").s().p("AgbACQAMglArALIAAABIgLAxIgLABQgBgkggALg");
	this.shape_203.setTransform(82.475,335.4015);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#1F1513").s().p("AgWgfIACgQIArBeIgNABg");
	this.shape_204.setTransform(113.975,347.35);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#4B2311").s().p("AgLASQgHgcgGgNIACgQIAvBDIAAALIgDABQgYAAgJgWg");
	this.shape_205.setTransform(120.275,346.0546);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#1F1513").s().p("AAAAsQgGgFAAgEIgCgrIgBgsIATBpIgKgJg");
	this.shape_206.setTransform(91.725,363.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#4B2311").s().p("AABgGQgCgCgFgBIgKgBIgOABIgDgTIAhgCIAiAsIgCARQgagggFgFg");
	this.shape_207.setTransform(108.45,341.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#4B2311").s().p("AgMgwIAMgBIANBjIgMAAg");
	this.shape_208.setTransform(93.35,346.075);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#4B2311").s().p("AgBAuIgOhbIAfAKIgDBRg");
	this.shape_209.setTransform(96.25,335.425);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#4B2311").s().p("AgEAxIgIhhIALgBIAOBjg");
	this.shape_210.setTransform(105.325,365.05);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#4B2311").s().p("AgMgwIAMgBIANBiIgNABg");
	this.shape_211.setTransform(99.325,360.15);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#1F1513").s().p("AgkglIAOgBQADAMAEAZQAGASAbgGIATABIhAAbg");
	this.shape_212.setTransform(102.95,368.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#1F1513").s().p("AAKAaQgEgZgEgPQgCgIgJgMIgRgVIABgLQAVABAJAIQALALAAAVQABATADAaIAGAuIgLABIgFgpg");
	this.shape_213.setTransform(100.4,338.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#4B2311").s().p("AgNg1IALgBIAQBsIgLABg");
	this.shape_214.setTransform(103.3,350.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#4B2311").s().p("AgMg1IAMgBIANBtIgLAAg");
	this.shape_215.setTransform(84.35,343.575);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#1F1513").s().p("AgigTQgNgNgCgEQgFgKALgMIANACIAYAmIA5BGIgHAHQgzg2gbgYg");
	this.shape_216.setTransform(111.8597,335.775);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#1F1513").s().p("AgoApIAmhZIArAoIgIAGQgfgTgNAgIgTAmg");
	this.shape_217.setTransform(114.425,319.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#1F1513").s().p("AgQhLIAQAAIARCWIgOABg");
	this.shape_218.setTransform(97.675,347.625);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#4B2311").s().p("AhFABQABgQALgEQAHgDAPADIBpASIgBAKIgsgEQgZgCgRgDQgegFgNAag");
	this.shape_219.setTransform(127.95,357.0682);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#1F1513").s().p("AgXBNIAXgGIgQiuIAMAAIAcDPg");
	this.shape_220.setTransform(95.175,361.45);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#1F1513").s().p("AgcBXIASgKQAKgGAAgEQAHgxgBg6QAAgQgDgZIgDgqIAKgBIAFAqQADAZAFAQQAMAmgKAsQgFAXgWA9g");
	this.shape_221.setTransform(84.6349,361.525);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#1F1513").s().p("AgdiRIANgBIAhDgQABAKAEAOIAIAYIgDAUIgOABg");
	this.shape_222.setTransform(108.4,354.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#1F1513").s().p("Ag3AQIBdAMIAJhrIAJALIAABvIhFgEIgCAqg");
	this.shape_223.setTransform(72.375,348.15);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#1F1513").s().p("AgLgHIgOhnIgBgLQADgVASAAQAdAAACgBIAAAwIgagnIgDAXQgCAJAAAGIAWDOQABALgDAXQgThqgHgtg");
	this.shape_224.setTransform(89.25,344.275);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#4B2311").s().p("AAggcQgDgIgKgIQgJgIgJgBQgGAAgJAIQgKAHgEAIQgFAOgFAUIgJAlIgPAXIgLAAIAAgSIAlh0QAugHAPAJQARAKAMApIATBHIgIAUQgUhFgNghg");
	this.shape_225.setTransform(94.3,380.7596);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#1F1513").s().p("AhSBYIAAgLICUAHIhZi2IAHgHQA8BRAnCCg");
	this.shape_226.setTransform(131.1,341.175);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#8E94A3").s().p("AgLBWIAAABQADgXgBgLIgXjPQAAgFACgJIAEgXIAaAmIAAgBIAAABIAAAAIABBCIAOBiIASCuIgZAHg");
	this.shape_227.setTransform(91.92,350);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#8E94A3").s().p("AgCBxQgEgOgBgKIgijgIAKABQAGAAACACQAGAGAZAgIAhBRIABBEIgWBHIAAAAIgPAKIgHgXg");
	this.shape_228.setTransform(110.9,353.625);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FDFDFD").s().p("ABVCuIg8g8IgjgrIg8hZIhLi6IA0AFQAMAaAXA1QAVAvATAcQAaAqAuA8IBNBkQAHAIAIAWIAAASg");
	this.shape_229.setTransform(72.375,366.65);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#8E94A3").s().p("AgCCGIgKgVIgxg7IgBAAIgKgUIABAAIACgoIBFAEIAAhwIASg5QAggLABAlIAOBtIAFApQADAZAAARQABA7gHAwQgBAFgLAGIgSAJg");
	this.shape_230.setTransform(77.9813,352.7514);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#1F1513").s().p("AgEgEIAJgCIgIANg");
	this.shape_231.setTransform(162.35,294.725);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#1F1513").s().p("AgFgCIAJgCIACAGIgDADg");
	this.shape_232.setTransform(153.45,300.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#1F1513").s().p("AgNAGIgBgLIAdAAIAAALg");
	this.shape_233.setTransform(160.35,224.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4B2311").s().p("AAKgJIABALIgUAIg");
	this.shape_234.setTransform(160.85,295.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#4B2311").s().p("AgOAJIgBgPIAKgCIAVAOIgBADg");
	this.shape_235.setTransform(164.375,249.125);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#1F1513").s().p("AgIgUIALgCIAFAlIgJAIg");
	this.shape_236.setTransform(153.35,246.325);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#4B2311").s().p("AgGgYIAMAAIABAwIgLABg");
	this.shape_237.setTransform(152.975,241.65);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#4B2311").s().p("AgUAGIApgfIABANIglAmg");
	this.shape_238.setTransform(156.75,226.85);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#4B2311").s().p("AgHggIAPABIAABAIgPAAg");
	this.shape_239.setTransform(61.875,268.35);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#1F1513").s().p("AgaALIgVgRIAKgIIBUAGIABAPIgyAIg");
	this.shape_240.setTransform(158.025,249.325);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#4B2311").s().p("AAVgXIAJAIIg7Ang");
	this.shape_241.setTransform(150.775,302.725);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#4B2311").s().p("AAngYIACABIgBALIhQAlg");
	this.shape_242.setTransform(172.925,288.65);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#1F1513").s().p("AgNA6IAWh0IAFAUIgOBgg");
	this.shape_243.setTransform(153.725,233.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#1F1513").s().p("AgPhNIAPgCIAQCSIgLANg");
	this.shape_244.setTransform(62.475,280.075);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#8E94A3").s().p("AgNAdQgGAAgKgMQgJgMABgGQABgIAKgJQAKgJAJgBQAGAAAMAJIAbAUIgeAUQgMAIgIAAIgBAAgAgOgHQgCAAgCADIgFAFIAPAIQADAAAKgKIgLgEIgGgCIgCAAg");
	this.shape_245.setTransform(155.6237,284.0751);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#8E94A3").s().p("AgdgCIAmgjIAOATQAIAMgBAGQgBAIgKALIgRATgAgCAOIAMAAIAAgaIgIgBg");
	this.shape_246.setTransform(70.5306,262.975);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#4B2311").s().p("AAsDcIgJggQgGgSgGgMQhJiZgOiRIABgDIAJhOQAFAeAFA7QAHA1AKAiQAQA0AcBMIAwB/IgTAMg");
	this.shape_247.setTransform(172.4,264.125);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#F76607").s().p("AgYABIAAgRIAlgBIAMAHIgWAcg");
	this.shape_248.setTransform(100.45,130.975);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#C15517").s().p("AAAAaQgRgEhEgVIgBACIgJgPIAXgdIAaAFIAVAJIBvAjIAKAMIAAALIgKALQg6gKgcgGg");
	this.shape_249.setTransform(110.325,134.075);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#F76607").s().p("AiaAYIBOgLIBJgQIAIgCIAegJIBVgiIAZgFIATAbIhCAYIhcAbIgHACIgXAGIhFAMIAAAAIgfAIIgnABg");
	this.shape_250.setTransform(174.3,134.625);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#C15517").s().p("AgFA6IgPgTQgJgLgHgHQgZgVAWgYIBHgjIAPAiIADAmQgCAvgmAAIgPgCg");
	this.shape_251.setTransform(218.9046,393.7769);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#1F1513").s().p("AgJgEIATAAIgKAJg");
	this.shape_252.setTransform(210.8,322.725);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#1F1513").s().p("AgIA8QgSgFgIgHQgMgKADgSIAPhSQA8AiANAJQABAAgHANIgNAWIgTgKIgDAIIAWACQANALADAIQAFAMgMAJQgHAGgNAAIgEABQgKAAgJgDgAgYAgIAqASIAEgMIgrgOgAgUgUIAuAOIAEgMIgugRg");
	this.shape_253.setTransform(85.2763,170.6036);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#C3BB99").s().p("AgJgFIATAEIgLAHg");
	this.shape_254.setTransform(221.8,226.75);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#8E94A3").s().p("AgZgJIAMgIIAnAjg");
	this.shape_255.setTransform(224.225,228.325);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#C15517").s().p("AAYBAIgVgdIgJgKIAAAAIg3gzIgWgcQAsgPAdAJQAcAJAXAlIAVAkIAWAqg");
	this.shape_256.setTransform(208.4,226.7195);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#4B2311").s().p("AgMAAIAGgHIATAIIgFAHg");
	this.shape_257.setTransform(106.925,130.475);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#1F1513").s().p("AgKADIATgMIACALIgOAIg");
	this.shape_258.setTransform(123.825,133.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#4B2311").s().p("AgJAHIgMgHIACgMIAlALIAEAGIgGAIg");
	this.shape_259.setTransform(104,129.15);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#1F1513").s().p("AgLALIgLgLIABgLIAlADIAHAHIgRANg");
	this.shape_260.setTransform(121.175,134.95);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#4B2311").s().p("AhFAIIBFgbIBGADIAAAHQhTgCg3Afg");
	this.shape_261.setTransform(131.775,131.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#4B2311").s().p("Ag3gNIAFgIIBqAfIAAAMg");
	this.shape_262.setTransform(113.325,132.75);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#1F1513").s().p("AgGgTIAKAAIADAbIgKAMg");
	this.shape_263.setTransform(224.325,393.125);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#D3CEB4").s().p("AgKgIQAHgHATgFIgbApQgIgTAJgKg");
	this.shape_264.setTransform(226.1993,386.975);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#8E94A3").s().p("AgPAQIAVgaIgLgIIgLAiIACgxIAfAQIgOAzg");
	this.shape_265.setTransform(243.45,347.625);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E8E5D4").s().p("AmAJcIgggMQgBgTgKABIgUAIIgIAAIgUgCIgxgfIArgiIByhzIANgSIAvhmIALgoIAVgOIAxALIAeAEQAQgBAGgTIgBAAIABgBIAAABQASgHADgTQgBgXABgLIgGihIgIgdIgRgnIgLgBIABABIgBgBIAAAAIgGgHQgDgFgCABIhZAVIhRjGIABABIgthFQgagpgUgbQgJgNgDgJQgDgMAHgMIgBABIABgBIAAAAIA6gnIADgEIgBgHIA8goIgBABIAVgIIAKgNIgCABIACgBIAAAAICMhDIAVAHIBYCEIBPBZIgBAAIALAKIAdAkIBRBAIAAAAIAKAJIAKABIAAAAIAJALQBoBNCAAUIBPAAIA6gLIADAcQABAQgCAKQgEASgIAZIgPArIgggRIgCAxIAUATIAAATIgCATIgRBGIizBKIjVCAIgJAJIhsBSIh0BoIhVBcgAk8IJQgGABgJAGIgOALIARANQALAHAHABQAFABAJgFIAQgKIgBgOIgSgHQgJgEgHAAIgBAAgAkjmuIgPAOIAPAUQAIALAIABQAGACANgKIAbgVIgbgSQgMgIgIAAIAAAAQgGAAgJAJgAnbJEIAAAAIABABgAmfnpIABAAIgBABgAmenpIAAAAg");
	this.shape_266.setTransform(195.4167,349.075);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#1F1513").s().p("AgJgDIATgBIgJAJg");
	this.shape_267.setTransform(96.925,219.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#4B2311").s().p("AgkAYIAHgHQA0AKADg2IALgMIgEA7IghARQgGADgGAAQgNAAgLgQg");
	this.shape_268.setTransform(221.35,397.9039);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#1F1513").s().p("AgHgKIAPATIgNACg");
	this.shape_269.setTransform(161.625,121.15);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#4B2311").s().p("AgNgNIANgBIAOAcIgOABg");
	this.shape_270.setTransform(162.375,123.575);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#E8E5D4").s().p("AhcDnQgSgCgDgPQABgTgBgIIAFgnIADgcQABgPAEgLQAHgXgKgMQgIgKgXgIQAPgXAFgKQAIgUgcgPQgDgCACgPQADgPAEgJQAWgpBIiDIABgKIATABIAAgCIBwAzQAJAEALAJIASAQIABAAIgKATIgdBQQgIAZgVgCQgZgIgLgCQgygFgNALQgOALgBAyIAAAmICDAhIgDAMIhDgEIgOClg");
	this.shape_271.setTransform(103.1729,159.35);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#1F1513").s().p("AAAgEIAVABIgpAJg");
	this.shape_272.setTransform(166.825,115.45);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#1F1513").s().p("AgdgOIA7gBIAAAfg");
	this.shape_273.setTransform(157.825,118.575);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#4B2311").s().p("AgIABIAJgJIAIAHIgHAKg");
	this.shape_274.setTransform(150.375,134.475);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#4B2311").s().p("AgFAAIAGgKQAFABAAAGIgCAOg");
	this.shape_275.setTransform(151.2,135.35);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#1F1513").s().p("AgSgCIAmgCIgBAHIgmADg");
	this.shape_276.setTransform(160.825,135.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#4B2311").s().p("AgKgDIAVgCIgBAFIgTAGg");
	this.shape_277.setTransform(160.925,127.325);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#1F1513").s().p("AgTADIAAgFIALgEIAcAEIAAAJg");
	this.shape_278.setTransform(140.8,130.575);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#4B2311").s().p("AgUAFIAMgLIAdgGIgKAUIgYAGg");
	this.shape_279.setTransform(187.7,128.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#1F1513").s().p("AgYgDIAxgDIABAJIgyAEg");
	this.shape_280.setTransform(157.35,127.65);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#1F1513").s().p("AgPgBIACgPIAdAJIAAALIgMANg");
	this.shape_281.setTransform(153.2,136.65);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#4B2311").s().p("AgTAJIAAgMIAogFIgCARg");
	this.shape_282.setTransform(156.85,136.175);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#1F1513").s().p("AgTgKIAOgBIAdAHIABAMIgxAEg");
	this.shape_283.setTransform(164.375,126.175);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#4B2311").s().p("AglgKIAAgLIBLAhIgKAKg");
	this.shape_284.setTransform(146.65,132.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#4B2311").s().p("AgdABIA6gNIABAMIg6ANg");
	this.shape_285.setTransform(169.8,125.625);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#4B2311").s().p("Ag6AOIBugjIAIAJIhUAhIgdABg");
	this.shape_286.setTransform(180.35,131.075);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#1F1513").s().p("AgyAPQANgGAcgHQAXgGAGgWIAfAKIgNASIhXAZg");
	this.shape_287.setTransform(177.825,122.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4B2311").s().p("Ag8AQIAAgJIAKgFIBpgUIAGAJIgCAHQgEAAgFACIhIAQIgbADg");
	this.shape_288.setTransform(168.875,134.325);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#4B2311").s().p("AAUgNIgnAdQADgmAkAJg");
	this.shape_289.setTransform(78.85,232.599);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#4B2311").s().p("AAOgcIAQAAIALAJIhRAwg");
	this.shape_290.setTransform(92.975,222.25);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#4B2311").s().p("AgFgKQAEgCAEAAIADAZg");
	this.shape_291.setTransform(220.25,231.375);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#4B2311").s().p("AgJgMIASAYIgNABg");
	this.shape_292.setTransform(221.75,233.875);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#1F1513").s().p("AgKgJIAKABIAKASg");
	this.shape_293.setTransform(232.9,237.0917);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#1F1513").s().p("AgbgTIAPAAIAoAng");
	this.shape_294.setTransform(224.025,237.125);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#1F1513").s().p("AgKAaQgMgBgWgdIALACQAGABAEABQAWANAIgJQAIgGABgXIAdAfQgqAUgMAAIgBAAg");
	this.shape_295.setTransform(232.325,240.6799);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#1F1513").s().p("AAQARIgwgRQgFAAgEABIgSgjIAdgFIAIAMIBSAvIgBAAIABAUIgsgXg");
	this.shape_296.setTransform(223.875,230.175);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#1F1513").s().p("AgSAmQgJgdAGgcQADgLgJgSIgOggQAMgNAKAHQAGAEAJAMQAIAJALAPIASAaIgBgBIAKAVIgIATIgjgyQgKAeAIAgQAEATATAmIgPABQgRgegGgVg");
	this.shape_297.setTransform(234.575,259.2638);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#8E94A3").s().p("AAbAxQgEgCgGgBIgLgCIgygyIgTgZIAAABIgDgaIAxASIAsAXIAoAmQgBAXgIAHQgEAEgFAAQgJAAgNgIg");
	this.shape_298.setTransform(227.225,235.768);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#1F1513").s().p("AgyheQACgFAFgGIAKgKIAGAKIBfC7IgIAHIhgipQgSA2ACAcQABAdAXBPIgIAGQg3hhAphxg");
	this.shape_299.setTransform(219.204,248.775);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#E8E5D4").s().p("AC0HLQiLguhghiQgFgFgHgDIgMgHIhRhvIgJgJIALgbQAFAAADgEICCheQAdgXACgKQACgJgTgjQgIgSgOAAIgdAGIjDAmIghhnIgOhSIAAgkQADhFANgrQARg6AkgpIAAAAIAVgUIAAAAIAUgKIAnATIA7ArIAKAJIAAAAIAKAKIAUAdIAzAUIAAAVIgKAKQgFAGgCAFQgpBxA3BhIAPAhIAJAQIAQAUIAGAIIATAZIAQAQIgQARQgJALgIAEIiXBfIBRBkIAmAlIAuAhQACAEAGAAIATALIBXAiIgWj+IBYAHIhfiuIgLgTIiAj1IATAJQAKAGAFAGQAeAhA5BHQABACAHABIAKABIAPAgQAIASgDAMQgGAcAJAdQAGAVASAdIAjBJIAJgkIAZAnQAIAMAUAWIAMAoIgUAKQguACgIAKQgHAJAHArIARB9IAABtg");
	this.shape_300.setTransform(215.95,268.05);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#1F1513").s().p("AgZABIgCgLIADgIIAbgCIACANIAWAbIgNABg");
	this.shape_301.setTransform(199.5,222.025);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#4B2311").s().p("Ah8AjIACgJIASgCIAWgHIAIgCIBbgaIBDgZIAqgHIgaAVIjgBCg");
	this.shape_302.setTransform(182.35,135.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#4B2311").s().p("AAfBUIgLh/QgHgUgHAAQgIAAgaATIgBAAIgBBQIgLAPIgLhsIA/gcQASgCAFAOQADAIABARQAHAoAIBRIgMAMIgIABg");
	this.shape_303.setTransform(203.75,169.6175);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#E8E5D4").s().p("ACmDvIgRipIg3ATIhIAIIgVhoIgPgDIgBgDIgDgBIgLgQIABAAIgHgLQgFgGgDgBQgdgDhWgGIgUACQgMABgIgCQgFgCgGgHIgKgPIgEgUIgQgeIABABIAAgTICBgXIDghDQBZBpAkCrIhAAcIALBuIgGA/g");
	this.shape_304.setTransform(180.825,157.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#8E94A3").s().p("AgNAEIAGgHIAPAAIAFAHg");
	this.shape_305.setTransform(145.8,415.325);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#8E94A3").s().p("AAJAKIgQgPIABAQIgFAIIgTgFQgBgPAEgHQAGgKARAAQASAAAJAGQAKAJgCARIgQAFg");
	this.shape_306.setTransform(145.6819,413.85);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#C15517").s().p("AgPASIAUgUIgUgUQAPgMAIAEQAIADAAASQAAAIgGAMIgKAVg");
	this.shape_307.setTransform(259.475,343.3605);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#1F1513").s().p("AgGALIAGgWIAHAFIgDASg");
	this.shape_308.setTransform(256.475,300.975);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#1F1513").s().p("AgOBaIANhFIgBhdIAKgXQAUBmgkBZg");
	this.shape_309.setTransform(258.0154,290.75);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#4B2311").s().p("Ag2CEQAsgCAcgYQAbgYgJgcQgWhAgshkQgEgHgLgIQgNgHgGgFIgKAHIAIBNIgQACIgHgnQgHgqAHgJQAIgKAugDIBjDJIASgWIALABQgPBEhMApIg6AUg");
	this.shape_310.setTransform(247.55,299.575);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#4B2311").s().p("ABCBEQgVhGgfgzIhrANIgKgUIABAAIgCgPQgCgJACgFQACgFAHgHIAMgLQgBArAQAGQARAHAygZIgeg2IgzAXIAfgzIgMglIAVgBIAUApIAUAUIATAdIAHAYQAEAOAEAIQA/CEALBwIgLAXQgPhVgOgxg");
	this.shape_311.setTransform(248.175,263.25);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#F76607").s().p("AC3I/QgfgMgsgVIhJgkIgUgBIgPgPQgFAAABAFIAAAAIgCgNQgCgHgDgDIhJg6IgegTIgLgKIABAAIhPhqIhaiRIgxh/QgdhKgPg2QgLgigGg1QgFg7gFgdIABgRIALhcQANhVBFhRIALgHIAggSICkBSIgDAIIgSAWIAAAAIgVAUIABAAQgGAEgPAGQgNAGgDAGQgKAagMAmIgVBAIABBsIAKBHIApCBIBLCQIANAGIABAUQANASAXAnQAXAgAeALQgBAMABABQB0CCCPAbIBPAAIA8gUIALAdQAHARAAAMQABAVgDAfIgFAzQgxAWg3AAQg4AAg/gWg");
	this.shape_312.setTransform(208.3125,271.6813);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#4B2311").s().p("AgIACIAJgJIAIAIIgKAHg");
	this.shape_313.setTransform(176.525,213.675);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#E8E5D4").s().p("AgBgDIAFAEIgHADg");
	this.shape_314.setTransform(173.375,214.925);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#1F1513").s().p("AAOgMIAAAMIgJAMIgSABg");
	this.shape_315.setTransform(99.35,217.925);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#4B2311").s().p("AgUABIAogOIgnAbg");
	this.shape_316.setTransform(102.8,216.55);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#4B2311").s().p("AgdBHQAJgigIgUQgJgWgigKIAAgMIAzATIA+hrIgDgCIAJgDIASgLIAGAGQhEBSgMBTIgLBcg");
	this.shape_317.setTransform(169.025,227.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#8E94A3").s().p("AgJgLIATAKIgDAKIgPADg");
	this.shape_318.setTransform(63.775,248.125);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#1F1513").s().p("AgHAnIgDgBIgBACIAMhPIAMAAIgGBPg");
	this.shape_319.setTransform(61.9,261.125);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#4B2311").s().p("AgLAoIAJhNIAPgDIgNBQg");
	this.shape_320.setTransform(63.25,253.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#4B2311").s().p("AgdAOIA7gnIgLAvIgTgKIgcAOg");
	this.shape_321.setTransform(62.85,245.75);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#8E94A3").s().p("AgXAWQgHgMAPghIALAlIAMgIIgXgdQAXgOAHAFQAGAEAGAiIgNAcQgfAAgGgMg");
	this.shape_322.setTransform(52.3494,275.4188);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#4B2311").s().p("AgGAAIADgGIAIgBIACACIgCALIgEACg");
	this.shape_323.setTransform(206.3,178.875);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#1F1513").s().p("AgFgEIAIgCQADADABAEIgNAGg");
	this.shape_324.setTransform(207.55,178.775);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#1F1513").s().p("AAEgHIABANIgJACg");
	this.shape_325.setTransform(214.4,183.425);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#1F1513").s().p("AgPAEIAMgLIARgDIACAMIgaAJQgCgEgDgDg");
	this.shape_326.setTransform(209.425,177.75);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#4B2311").s().p("AgJgCIATgFIAAANIgSACg");
	this.shape_327.setTransform(177.825,186.175);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#1F1513").s().p("AgUgBIAogFIABAJIgoAEg");
	this.shape_328.setTransform(174.825,186.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#4B2311").s().p("AgQAAIAagKIAIAJIgjAMg");
	this.shape_329.setTransform(204.6,179.925);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#1F1513").s().p("AgSAHIALgJIASgIIAIAVg");
	this.shape_330.setTransform(109.85,186.25);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#4B2311").s().p("AgUABIABgKIATABIAWAIIgMAJg");
	this.shape_331.setTransform(106.9,186);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#1F1513").s().p("AgegDIA8gEIABAKIg7AFg");
	this.shape_332.setTransform(166.825,187.65);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#4B2311").s().p("AgOgCIAcgFIABAIIgcAHg");
	this.shape_333.setTransform(171.35,187.15);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#1F1513").s().p("AgYAAIAxgKIgmAUg");
	this.shape_334.setTransform(211.375,185.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#4B2311").s().p("AgTAAIAAgLIAnALIAAAMg");
	this.shape_335.setTransform(95.85,183.575);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#1F1513").s().p("AgiADIgBgKIBHAHIgBAIg");
	this.shape_336.setTransform(116.325,187.325);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#4B2311").s().p("AgYgBIAwgGIABALIgxAEg");
	this.shape_337.setTransform(161.375,188.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#4B2311").s().p("AgkAHIBIgRIABALIgtAKg");
	this.shape_338.setTransform(191.225,183.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#1F1513").s().p("AgngPIAeAAIAxAWIgLAJg");
	this.shape_339.setTransform(86.775,188.725);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#4B2311").s().p("AAAApIgIgWIAHg+IAIAgIACA3g");
	this.shape_340.setTransform(111.9,183.275);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#4B2311").s().p("AgnAJIBEgcIALAKIhOAdg");
	this.shape_341.setTransform(205.975,187.275);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#4B2311").s().p("AghAAIAAgIIBDAIIAAAJg");
	this.shape_342.setTransform(123.3,188.15);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#1F1513").s().p("AgiAaIAAgMIA3AKIAGg/IAIAeIABAmIgCALg");
	this.shape_343.setTransform(101.35,182.15);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#1F1513").s().p("AgdAfIABgMIAPgHQAKgFACgEQABgJABgOIABgZIANgBIgGAnQACAIgCASQADAPASACIAAALg");
	this.shape_344.setTransform(90.85,178.825);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#1F1513").s().p("Ag5AiQAYgDAHgEQANgJgFgVIAKgsIACAUIAAATQgBASAKAHQAIAFATgDIAcAEIhzAZg");
	this.shape_345.setTransform(184.575,182);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#1F1513").s().p("AgnAmIAIg6IALAAIAGAwIAPAAIAGg+IALgQQABADABAjQAAAVAUAIIgBAKIhNAYg");
	this.shape_346.setTransform(198.85,178.25);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#1F1513").s().p("AigAtICTAAIAFhiIAJgBIAABiICfAAIABAKIlBABg");
	this.shape_347.setTransform(142.825,183.55);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#1F1513").s().p("AgJAEIAMgJIAHAGQAAAEgEABg");
	this.shape_348.setTransform(201.375,383.55);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#1F1513").s().p("AgNABIAKgIIAQABIgSAOg");
	this.shape_349.setTransform(203.05,382.875);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#4B2311").s().p("AgNAFIATgTIAIAIIgRAVg");
	this.shape_350.setTransform(180.675,401.05);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#1F1513").s().p("AgSABIAbgLIAKAJIgbAMg");
	this.shape_351.setTransform(225.825,369.125);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#4B2311").s().p("AgVAPIApglIACABIglArg");
	this.shape_352.setTransform(188.875,393.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#4B2311").s().p("AAXgYIgsAxQgDgrAvgGg");
	this.shape_353.setTransform(194.1438,408.675);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#4B2311").s().p("AgaAKIAlgbIAQACIguAhg");
	this.shape_354.setTransform(199.225,385.725);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#4B2311").s().p("AgfAVIA4grIAHAIIg8Akg");
	this.shape_355.setTransform(194.025,389);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#4B2311").s().p("AgdATIA1gtIAGAHIgzAug");
	this.shape_356.setTransform(184.25,397.625);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#4B2311").s().p("AAAgKIhCAlIATgWQALgNAJgHQALgIAQgJIAcgQIAFAHQgWAZAYAUQAIAHAJALIAPATIgHAIg");
	this.shape_357.setTransform(211.65,395.475);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#4B2311").s().p("AgqAWIAUgPIBUhbIAKAKIhxCLQgFAFgJAGIgQAJg");
	this.shape_358.setTransform(173.025,410.075);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#4B2311").s().p("AhuA/IDTh/IAKAKIjMB3g");
	this.shape_359.setTransform(213.8,375.725);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#E8E5D4").s().p("AiCBsIAggxIBZhiIAngfIAAAAIBDgmIAhAkIgXAjQgPAUgNAJQgzAkh6BNQgGADgLAAIgTAAg");
	this.shape_360.setTransform(201.9,405.25);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E8E5D4").s().p("ACoAyQgfASgugFQgvgGgYgXQACgTgKgIQgJgGgSgBQgQABgGAJQgFAHABARIiyhCICWgmIAUADIA8AUIgBAAIABABIAAgBIAIALIBRAbIB4ANIgdA/IgLAEg");
	this.shape_361.setTransform(146.75,411.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#1F1513").s().p("AgUgBIAogLIABALIgDAGIglAIg");
	this.shape_362.setTransform(199.925,189.475);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#4B2311").s().p("AgOAGIAAgNIAdAEIgBALg");
	this.shape_363.setTransform(122.325,196.175);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#4B2311").s().p("AgTgCIAmgKIABANIgnAMg");
	this.shape_364.setTransform(195.925,190.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#1F1513").s().p("AgiADIABgNIBEAIIAAANg");
	this.shape_365.setTransform(117.325,195.675);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#1F1513").s().p("AgjgCIABgIIBGALIgBAKg");
	this.shape_366.setTransform(102.325,193.175);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#4B2311").s().p("AgngCIABgLIBPANIgCANg");
	this.shape_367.setTransform(109.85,194.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#4B2311").s().p("AgJAIIgjgQIALgJIBPAaIgBAIg");
	this.shape_368.setTransform(94.25,191.15);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#1F1513").s().p("AjSAiIiMgCIABgMQDKAFCVgJQC9gMCggmIAAAQQhiAahwANQhgALh0ACIg/ABIhMgBg");
	this.shape_369.setTransform(158.825,193.825);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#1F1513").s().p("AgEgEIAJgDIgIAPg");
	this.shape_370.setTransform(69.275,285.825);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#1F1513").s().p("AgDgHIAIACIgBANg");
	this.shape_371.setTransform(132.35,294.85);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#1F1513").s().p("AgEABIAJgKIAAATg");
	this.shape_372.setTransform(136.25,331.175);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#4B2311").s().p("AgKAAIAIgIIANAQIgNABg");
	this.shape_373.setTransform(73.775,377.325);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#1F1513").s().p("AAJgFIABALIgTAAg");
	this.shape_374.setTransform(70.75,284.425);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#1F1513").s().p("AgCgIIAJAAIgNASg");
	this.shape_375.setTransform(50.35,307.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#1F1513").s().p("AgFAJIAKgTIABAVg");
	this.shape_376.setTransform(49.125,309.05);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#1F1513").s().p("AgOgEIASgDIALAIIgcAHg");
	this.shape_377.setTransform(123.275,397.775);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#1F1513").s().p("AgKgIIAMgBIAJAJIgIAKg");
	this.shape_378.setTransform(74.65,379.075);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#1F1513").s().p("AgGgOIAKAAIADAdIgJAAg");
	this.shape_379.setTransform(145.275,353.65);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#4B2311").s().p("AgHALIAPgVIgGAVIgJAAg");
	this.shape_380.setTransform(50.825,305.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#1F1513").s().p("AgQAFIAhgLIAAALIgRACg");
	this.shape_381.setTransform(80.025,301.525);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#1F1513").s().p("AgHAUIALgoIADACIABAWIgEARg");
	this.shape_382.setTransform(164.2,375);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#4B2311").s().p("AgOgJIAJgIIAUAaIgIAJg");
	this.shape_383.setTransform(71.9,375.525);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#1F1513").s().p("AgMARIAYgiIABARIgNASg");
	this.shape_384.setTransform(158.625,387.325);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#1F1513").s().p("AgKgOIAVASIgJAKg");
	this.shape_385.setTransform(137.825,333.65);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#1F1513").s().p("AgTABIANgKIAZAFIgBAOg");
	this.shape_386.setTransform(106.8,405.875);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#C15517").s().p("AgIgOIAPACIACAPIgLAMg");
	this.shape_387.setTransform(165.775,349.625);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#1F1513").s().p("AgOAAIAKgJIATASg");
	this.shape_388.setTransform(130.4,293.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#4B2311").s().p("AgIgMIAIgKIAJAtg");
	this.shape_389.setTransform(138.925,336.35);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#4B2311").s().p("AgBgNIAQgLIgeAxg");
	this.shape_390.setTransform(54.2,299.55);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#4B2311").s().p("AgTARIAngiQAAAjgfAAIgIgBg");
	this.shape_391.setTransform(132.775,392.323);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#4B2311").s().p("AgdgYQAcAEAMAIQASALACAag");
	this.shape_392.setTransform(117.8,311.675);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#4B2311").s().p("AgeACIABgOIA8AMIAAANg");
	this.shape_393.setTransform(111.725,406.65);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#4B2311").s().p("AgjAKIBHgcIg8Alg");
	this.shape_394.setTransform(127.225,395.975);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#4B2311").s().p("AgbAEIALgMIAugPIABANIg9Aig");
	this.shape_395.setTransform(65.825,287.675);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#4B2311").s().p("AgdgSIAJgLIAyAxIgKAKg");
	this.shape_396.setTransform(77.925,382);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#4B2311").s().p("AgigoIAKgIIA7BZIgJAIg");
	this.shape_397.setTransform(67.775,369.625);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#1F1513").s().p("AgogUIAKgKIA8AfIALAAIgCATIgLAKg");
	this.shape_398.setTransform(83.975,387.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#4B2311").s().p("AgaAZIgVgIIBWgsIAJALIgrAgIgLAMg");
	this.shape_399.setTransform(142.45,402.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#4B2311").s().p("AgXAiIAjhUIAMABIguBkg");
	this.shape_400.setTransform(162.225,382.15);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#4B2311").s().p("AgchDIANAGQAIAEACAEQAHAZAbBgIgKAAg");
	this.shape_401.setTransform(142.725,345.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#4B2311").s().p("Agxg7IAcATQARAMAIAKQARAUAdAvIgKALg");
	this.shape_402.setTransform(131.75,325.225);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#4B2311").s().p("Ag3gnIABgOIBuBrg");
	this.shape_403.setTransform(138.35,299.65);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#4B2311").s().p("Ag9AvIBuhnIANAAIhyByg");
	this.shape_404.setTransform(152.475,394.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#1F1513").s().p("AhyAUIgKgEIAAgNQBlAMB/glIAVAIIiVAlg");
	this.shape_405.setTransform(127.275,406.325);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#1F1513").s().p("AgPByIAIjZIAMgMIAIBIIADCRIgUAOIgIAAg");
	this.shape_406.setTransform(166.2,361.525);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#4B2311").s().p("AAgB7QgOhphBh8IgBABIAJgTIBRDFIAAAWIAGAfg");
	this.shape_407.setTransform(161.65,335.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#4B2311").s().p("AgqgxQgGgKgIgPIgMgZIAnAAQgGAMADAMQACAJAKANQATAbAaAoIAsBFIgJARQhEhkgigxg");
	this.shape_408.setTransform(150.875,315.0625);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#4B2311").s().p("AivgiIAMgLIBiAzIAAAAQAQAKAFABQAMACAIgPIgJgxIAKgMIAJARQARA7AOALQANAKA+ABIBTgFIABANQgqAJgpAAQiIAAiEhcg");
	this.shape_409.setTransform(104.325,393.6729);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#4B2311").s().p("ABZA5IjQh3IABgOIDTBtIAJhMIAAg+IgMgPQgHgJgHgDQgGgEgLgCIgTgEIAAgKIA6AFIAEgbIAKAAIAJAUIAACCQgNBhg5BJQgHAIgOAIIgZANg");
	this.shape_410.setTransform(134.8,372.625);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#4B2311").s().p("ACvAVQhAgbgtgPQijg4ioA8IgYAGIgBgMQBwg8CZAVQC1AYCHBiIgKAIIhqgvg");
	this.shape_411.setTransform(100.75,286.1545);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#4B2311").s().p("AgtB0IACgXQAfAhAOgCQARgDAOgpIA6irIiIgjIAACMIgLAAIgKiMIhiAAIAAgMQAYAAAxgCQAsgBAcAFQAhAGAtAQIBMAdQAIADAIAKIAOASIg6gXIg9CsQgOAqgVAEIgFABQgSAAghgag");
	this.shape_412.setTransform(98.25,314.7465);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#4B2311").s().p("AhMiqQA8h+B4gVIASACQiaA5gzCUQgJAbAFAQQAFASAZALQAYALBFArQAXAOAFAUQAFAUgKAgQgGAVgSAGQgJACgagBIgwgBIg0gGIBLC7IgKAIQiVkABsjogAheBVQAOAXBOAEIAEAAQASADALgKQALgJABgQQABgNgEgNQgEgOgHgGQgXgPgjgVIhBgkQgOBlAOAWg");
	this.shape_413.setTransform(67.8557,333.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#E8E5D4").s().p("AApHTQgOgKgSg8IgJgRIgCgRIgThIQgMgpgRgKQgQgJguAHIglB1QgIgWgHgJIhMhkQgvg8gbgqQgTgdgVgvQgWgzgNgaIAxABQAaABAKgCQARgGAHgVQAKgggFgUQgGgUgWgOQhHgsgYgLQgYgLgGgSQgFgQAJgbQA0iUCag5IARgCIBiAAIAMDTIAKAgQAlAeAUgEQAUgFANgqIA+isIA5AWIA9AyIAAgBIATALIAoAoIBaB5IAKAJIAfBBIAAgBIAwCHIAEAdIgEAbIg7gFIiPgXQgQgCgHADQgLAEAAAQQAAARgGAgQgBAcAYAQIDSB4IhUB1IgEABIgBADIgpAjIABAAIhIAeIgSADIhTAFQg+gBgNgLgAjJDLIAaAmQAXg9AFgXQAKgsgMgnQgFgPgDgZIgFgqIgOhuIAKgxIAPABIANBmQAHAvAUBpIAAgBIABAsIACAsQAAAEAHAFIAKAJIAxAbIgsk0IgOhBIABABIAAgvQgCAAgfAAQgSABgCAVIgOAIQgrgLgMAmIAAgBIgaAuIgJBrIhfgLIAoBAIAAAAIAKAUIAAAAIAJAKIAaAyIAZAUIAAgBgAgQDlIA/gbIgkj5IgGguQgEgbAAgTQAAgVgKgLQgKgIgVgBIgfgKgAAciRIADAdIAvE3IANgBIAEgUIgBAAIAQgLIAAAAQAVgHAGgXQAEgbAEgNIgChHIgrhfIgjgtIgWgmgAF3ASQgniBg9hRIhKhXIhPhIIhCCYQgLALAEAKQACAFAOAMQAbAaAzA1IAPAVQAHANAGAdQAKAWAcgCg");
	this.shape_414.setTransform(101.9357,349.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#E8E5D4").s().p("AEhHBIhvhsIgJgCIgVgTQiHhji0gYQiZgVhxA8IgTANIg4ARIgRiTIgQACIAWCeIgDAUIABAAIgQAKIg3A8IAAAAIgRALQgMgYAGglQAJg0AAgJIgDgkIgDgjIANgcQAWg9AGgOQAEgIAJgKIAPgQIACgCIADABIAABCIAPgBIAFiPIAbiMIAPgKQAFAAAAgFIAogjIAAAAIAUgUIAegUIAAAAIAogeIAAAAIAVgUIgBAAICOhaIAJgKIAAABIATgBIANALQAIAHAGAAIC2ADQBoABBQgDQBJgBBUgRQBBgNBZgaQAFgBAJABIAPABIg/BrIgzgTIgeAAIgqAgIgXB0IACAzIAHAsIAVATIAYAEIAzgJIAfAAQAOCRBKCZQAGAMAFATIAKAgIhQAyIg9AeIACgBIgLACIgTASIg9ApIAAgBIgKACIgxAwgAGODSQgJABgKAJQgKAJgBAIQgBAHAJAMQAKAMAGAAQAIAAAOgIIAegUIgbgVQgMgJgHAAIAAAAgAnaAZIAgApIARgTQAKgLABgJQABgGgIgMIgOgSg");
	this.shape_415.setTransform(115.0471,260.18);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#4B2311").s().p("AgDAAQAEgCADADIgEABg");
	this.shape_416.setTransform(116.475,206.8984);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#4B2311").s().p("AgCAAIACgCIADAFg");
	this.shape_417.setTransform(234.075,232.325);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#4B2311").s().p("AgLAAIAQgEIAHAJg");
	this.shape_418.setTransform(100.8,127.475);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#C15517").s().p("AgCgNIAFAFIgBASIgBAEg");
	this.shape_419.setTransform(97.675,130.15);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#4B2311").s().p("AgKADIAVgIIgHAKg");
	this.shape_420.setTransform(253.875,327.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#4B2311").s().p("AgJAMIAIgUIAKgFIABAXQgDAEgFAAg");
	this.shape_421.setTransform(164.975,419.925);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#4B2311").s().p("AgMAEIAAgHIAaACIgBAFg");
	this.shape_422.setTransform(137.5,118.475);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#D3CEB4").s().p("AgMgIIAYAIIABAJg");
	this.shape_423.setTransform(91.55,402.025);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#C3BB99").s().p("AgKgBQAFAAADgDIANAKg");
	this.shape_424.setTransform(166.275,421.45);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#4B2311").s().p("AgHgMQAQAEgBAHQgBAEgKAKg");
	this.shape_425.setTransform(257.2257,362.775);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#C15517").s().p("AgIgLIATAVIgTABIgBABg");
	this.shape_426.setTransform(242.75,242.125);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#8E94A3").s().p("AgMgFIAaADIgbAIg");
	this.shape_427.setTransform(181.125,209.25);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#4B2311").s().p("AgDgLIAFAAIACAXIgFAAg");
	this.shape_428.setTransform(163.325,46.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#8E94A3").s().p("AgCARIAAgiIAEAAIABAiIgDABg");
	this.shape_429.setTransform(163.35,60.2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#4B2311").s().p("AgRgCIANgIIAXAHIgjANg");
	this.shape_430.setTransform(216.65,182.95);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#E8E5D4").s().p("AgEgUIAJAAIgBApg");
	this.shape_431.setTransform(45.4,342.225);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#C15517").s().p("AgWAFIAWgOIAXAHIgCAKIgmABg");
	this.shape_432.setTransform(99.7,128.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#4B2311").s().p("AAGAQIgdgVIAKgGIABgEIAbAQIAJAPg");
	this.shape_433.setTransform(99.225,132.725);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#4B2311").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_434.setTransform(163.325,55.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#8E94A3").s().p("AABATIgTgTIgBgTIARACIAWAaIgJALIgKgBg");
	this.shape_435.setTransform(231.75,234.15);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#4B2311").s().p("AAKgYIAKAbIgnAWg");
	this.shape_436.setTransform(196.875,128.625);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#8E94A3").s().p("AgpAEIAAgLIBSAHQACABgCADIgLAEg");
	this.shape_437.setTransform(135.8125,129.475);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#4B2311").s().p("AgIgGQAOgWAYgGIgeAwIgLAMIgSAJQARgkAEgFg");
	this.shape_438.setTransform(188.95,414.65);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#4B2311").s().p("AgpAPIAggdIAagJIAZADIhLAsg");
	this.shape_439.setTransform(180.775,211.35);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#C15517").s().p("AAGgaIAVAMIABALIgVAbIgiADg");
	this.shape_440.setTransform(57.1,248.575);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#4B2311").s().p("AgsgJIABgUIBYAuIgBANIgKAAg");
	this.shape_441.setTransform(83.375,178.975);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#8E94A3").s().p("AgDhRIAHACIAAChIgHAAg");
	this.shape_442.setTransform(164.275,90.225);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#4B2311").s().p("AgcgaIAOgGQAJgDABABQAHAJAaAlIgBAXg");
	this.shape_443.setTransform(238.925,239.7775);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#4B2311").s().p("AgFgBIAbggIAXAVIhZAuIAngjg");
	this.shape_444.setTransform(109.375,211.725);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#4B2311").s().p("AAABjIgHjIIADABIADAAIAJDKIgIgDg");
	this.shape_445.setTransform(163.875,72.075);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#4B2311").s().p("AhKgIICUABIABAKIiLAGg");
	this.shape_446.setTransform(147.375,128.075);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#4B2311").s().p("AhDgLIgWgVIANgDQAIgCAFACICaA9IgNALg");
	this.shape_447.setTransform(97.05,402.3179);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#4B2311").s().p("AgogsQgDAAgDgEIgGgFIAAgLIAmAKIANAGIARAGQAXAIAIAKQAKANgHAVQgEALgBAQIgDAbIgMABQAahYhggVg");
	this.shape_448.setTransform(88.0813,167.725);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#4B2311").s().p("AhgAeICWg9IAegGIANALIi3BAg");
	this.shape_449.setTransform(236.45,365.075);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#8E94A3").s().p("AghgVQAVgTA5APIhVA6QgLglASgRg");
	this.shape_450.setTransform(237.1509,389.2862);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#4B2311").s().p("AgjA4IgIh8IAMAAIAUBmQA1gLgHgzIAKA7IhOAmg");
	this.shape_451.setTransform(214.4,171.025);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#C15517").s().p("AgsAMIAKgUIAZgUIAAAAIAOgKIgBAAIApAUIgdAyIAAAAIgpAHg");
	this.shape_452.setTransform(193.35,127.975);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#C3BB99").s().p("AABAuIgIgJQgVgSgHgTQgJgUAHgZIBOAoIgKAzg");
	this.shape_453.setTransform(82.6295,182.55);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#4B2311").s().p("Ag0BWQAIgNAHgGQAegfATgwIAchbQAYgIABANQABAIgDASIgKAKQgGAGgCAFIgjBCQgVApgPAZQgEAHgNAHIgVAMIAMgVg");
	this.shape_454.setTransform(261.4375,316.5108);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#8E94A3").s().p("AASApIgegLIAAABIgKgLIAAABIgKgLIAAABIgKgLIAAABIgKgKIABABQgJgSAFgJQAGgKARAIQAUAJAZATIAsAeIgoAUg");
	this.shape_455.setTransform(181.1074,117.0722);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FDFDFD").s().p("AgsAcIAAABIgIgKQACgzA+gDIgBgDIALAKIAUALIgCgBQgBAGAEADIgCAJQgBAFABADQABADAEADIAHAGIgXALIgkAIg");
	this.shape_456.setTransform(106.525,125.075);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#4B2311").s().p("AiAA2IC5hnQAEgBAEgDIAzgGIANAKIh8AuQgTAEgHAIQgKAKAJATIgDAVIgLAAIgPghIhIAig");
	this.shape_457.setTransform(227.325,385.25);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#C3BB99").s().p("Ag7gDIALgTIApgUIAAAAQAvACAUAvIgOAJIAAAAIgZAUIgdAHg");
	this.shape_458.setTransform(187.75,123.45);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#8E94A3").s().p("AglAoIABABIgCgBIABAAIgTgKIgKgJQASgoAmgPQAngPAmAWIgtAvQgVAVgbAAIgLgBg");
	this.shape_459.setTransform(114.4625,119.1806);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#8E94A3").s().p("AgJB7QgGgFAAgDIAEjzIAQAAIALDrQAAAEgGAHIgKALIgJgGg");
	this.shape_460.setTransform(150.25,91.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#4B2311").s().p("AACDGQgFgJACgTIgQgeQgEgBAAgGIABgqQgJhTADg+QADhOAWhBIAGgNIAMACQg5C9BEDlQgTAAgHgMg");
	this.shape_461.setTransform(48.0125,331.05);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#C15517").s().p("AghgXQABgbAFgIQAGgGAigPIAUBgQAGA0g0ALg");
	this.shape_462.setTransform(214.6102,166.45);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#4B2311").s().p("AAfA1Qh/gThohNIALgKIBJAkQAsAVAfALQB7AtBjgsIATgCIABAMIghARIg6ALg");
	this.shape_463.setTransform(230.825,327.625);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#E8E5D4").s().p("AA2A8QgbgQgRgPQgWgUggghIg4g7IAggEIAJAJIBoAwQgUAIgBALQgBAJAPAPIAgAlIAfAmIgvgcg");
	this.shape_464.setTransform(88.725,195.025);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#C3BB99").s().p("ABJArIgVgBIgqgZQgYgPgSgGQgPgGgbgGIgrgKQgEgCgGgFIgKgKQA/gDBKAPQAvAKBbAaIhCAng");
	this.shape_465.setTransform(161.575,110.7007);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#C15517").s().p("Ag+AtIAIhuQACgQAFgGQAIgHAPAEIAGAFQADAEADAAQBgAVgaBYIgBAZQgBAOgDAKQgCAEgJAFIgQAHgAgrAMQgDASAMAKQAIAHASAFQAKADANgBQANAAAHgGQAMgJgFgMQgDgIgNgLIANgWQAHgNgBAAQgNgJg8gig");
	this.shape_466.setTransform(85.2987,171.4304);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#4B2311").s().p("Ag8A9IA8AAIgWgqIgVgkQgXglgdgJQgdgJgsAPIgCgNQAzgRA1AKQAtAIA1AcIAwAXIgBAAIAeALIA+A5IgDADIgWAAIgRgCIABAAIgegUIgpgjIgUgEIABABIhDgvIgJAKQAgA8AHANQALARgEANQgDALgRALg");
	this.shape_467.setTransform(216.9,227.0047);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FDFDFD").s().p("Ah+AXIAAgOQB3g5CGgCQgOAdgSAKQgVALgggLQgIgCgRAHQgTAKgKADIAnAsg");
	this.shape_468.setTransform(132.125,111.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#E8E5D4").s().p("AACAvIhqggIgVgJIgDgGIAlgIIAWgLIgGgGQgEgDgBgDQgBgDABgGIABgJIDPAuIABALIhFAcIgUAOg");
	this.shape_469.setTransform(118.75,129.075);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#C3BB99").s().p("AhpBeIAEg8IgDgcIACgTIAcgrIB8guIA4ADQgRAigwAEQg3AFgRASQgGAXgDA2QgJAwgvAQg");
	this.shape_470.setTransform(235.25,390.525);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#8E94A3").s().p("AhBAuIgNgdIgQgTIAAgeIAogLIAAAAIApgJIgBABIBGAKIAJAKIAAgBIAKALIAAgBIAKALIAAgBIAKALQgGAUgYAIQgcAGgNAGIg6AOgAheghIAAABIgBAAg");
	this.shape_471.setTransform(170.3,120.375);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#C3BB99").s().p("Ah0BFQAEgHATgSQAMgMAOgWIAXgjIADgHIBPgfIAngVIAAABIAKgCIAkgPQg2BTgvAqQg+A7hPARQgGgSAJgOg");
	this.shape_472.setTransform(206.23,192.625);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#C3BB99").s().p("AgfBYIACgTIAAgTIAOgzIAOgqQAIgaADgRQACgLgBgQIgCgbIAhgRIAGA0QADAggCAVQgCAegKA0QgLA7gDAXQgCATgLAKQgKAJgSACIgfAGIAShGg");
	this.shape_473.setTransform(246.7864,346.05);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#C15517").s().p("AhYA6QgZACgKgWQBFg5ArgUQBCgeBFATIgcAgIgoAjIgpAPIgbAaIAAAAIgkABQgFgDgjACg");
	this.shape_474.setTransform(99.2,213.4316);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#C3BB99").s().p("Ai0BhIgIgHIALgLIATAAQALgBAGgDQB7hLAyglQANgKAPgUIAXgiIAbAXQAQAXAUgKIAigRIAJAJQiNByjeA9IAAAAQgCAAgEgFg");
	this.shape_475.setTransform(206.6,408.2023);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#8E94A3").s().p("AhwAXQAfgyAWgMQAUgLAxAGQAMABASgDIAegGIArACIgDAJIgbgCIAAAIIAbAAIgEBYg");
	this.shape_476.setTransform(127.825,122.475);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#8E94A3").s().p("AhvAyIAAgRQAAgLACgGQABgIAOglQBGAAAOgBQAEgBAGgGIAJgLIAcgCIA8AfIACATIANAdIgDAQIhIAGg");
	this.shape_477.setTransform(151.125,122.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FDFDFD").s().p("AgcCXIgMgGIgmgKIgIgQQgEgKABgGQAZiUBhhrQADgDAJAAIAQgBIAeAWIgCAKQhICBgUAqQgFAJgCAPQgDAPAEACQAaAPgIAUQgEALgOAXg");
	this.shape_478.setTransform(90.7409,147.775);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#E8E5D4").s().p("AiLA1IAAgCIgogsQAKgEAUgKQARgHAIADQAgALAVgLQATgKANgeIAegEIAJAKQAFAGAFACIArAJQAbAHAPAFQASAIAZAOIAqAZIgUALIAAAAIgpAKIABAAIjYADIgrgCg");
	this.shape_479.setTransform(148.8,111.85);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#E8E5D4").s().p("AhzA3QAAgGgFAAIgIgHIhMgiIgdgDQABgDgBgCIAJgDIC+gKIAUgHIAxgDICUgoIAzAvIgMAMIhwAjIhiATQgFgDgDAFIgJAFIgnACIgpAFg");
	this.shape_480.setTransform(163.375,129.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#F76607").s().p("Ai2CJQB2i8CshiQAKAWAZgBQAjgDAFAEIg2A6Ig8ApIAAAAIgVAUIAAgBQglgIgCAlIgdAUIgVAVIAAgBIgnAkQAAAEgGAAIhLAyg");
	this.shape_481.setTransform(76,232.15);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#C15517").s().p("Ag1g5IA9gZIBngJIAEAaIgdAxQgSAcgLAUQgPAegVANQgWANgggEQgGgBgIABIgQACIgzAGg");
	this.shape_482.setTransform(245.3,370.675);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#C3BB99").s().p("ABQCZQgLgPgJgKQgKgMgFgEQgLgHgMANIgKgBQgGgBgCgCQg3hHgeghQgFgGgLgFIgTgJIgGgKIAAgVQASgLADgLQAEgNgLgSQgIgNggg9IAJgJIBEAuIgeAFIAeA8IgBgBIAEAaIA4AoIAKAJQAWAeALABQALACAugWIgegeIgLgUIAJgLIAXAUIA5A9IABgBIAMAlIggA0IAAAAIgMAKQgHAHgCAFQgDAFADAJIACAPIgSgZg");
	this.shape_483.setTransform(228.1,239.35);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#C15517").s().p("ACuA/Qg2gcgtgIQg2gKgxARIgcACIikhRIAqgbIABAAIANgIQBZgSBcAqQAlARB5BOQALAHANAPIAXAZg");
	this.shape_484.setTransform(202.75,216.5072);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#C3BB99").s().p("AAmB2QAAgRgDgIQgFgOgTACQgjirhZhpIAagVIAAgBIAngWIANABQAHABACADQBuB5AeCTIg5AgIAOCrIgSADQgIhSgHgog");
	this.shape_485.setTransform(203.725,152.925);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FDFDFD").s().p("AlmhbIgBgLIB4ApIBkAUIAKADIBZADICyBCIASAEIAbABIARgFQAYAYAvAFQAuAFAegSIANAVIgIAVIgZAJQgPAFgLAAQlugBkljBg");
	this.shape_486.setTransform(128.8,412.175);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#C3BB99").s().p("AhTD9IAhk7IAGgKIAVgMQAOgHAEgHQANgZAWgpIAjhDQADgFAGgGIAKgKQgBD7hFDFIgVA5gAgOBCIAAAoIAOAOIALgVQAGgMAAgIQAAgTgIgDIgFgBQgHAAgLAKg");
	this.shape_487.setTransform(259.4,334.525);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#C15517").s().p("AhHFOQADgfgBgVQAAgMgHgRIgLgcQBLgqAPhEIACgSQAlhZgUhmQgLhwg/iFQgEgIgEgOIgGgYQBTBvAtC0IAJAgIAEAlIAGAXIAHCdIgcBaQgUAygeAeQgHAHgHAMIgMAVIgpATIgTACIAFg0g");
	this.shape_488.setTransform(256.625,290.65);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#C3BB99").s().p("Ai8A/Ii4gDQgGAAgHgHIgOgLIAKgMIAogcIBbgvIA7gCQAigBAYACQD1AbEogrIgBAMIgoAoIgTALIgGgEIgCAGIACACIgPgBQgIgBgGABQhYAahCANQhUARhIABQg5AChFAAIg5AAg");
	this.shape_489.setTransform(139.8,214.9643);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FDFDFD").s().p("Ag+HSQiBmpC0l4QAKgVAYgZQAegcANgPIAWgcIAAABIAcgOIABAYIgWCeIgPARQgJAKgEAIQgHAOgWA8QgGgjgGgEQgGgFgXAOIgBAAQgOAiAGAMQAGAMAfAAIAEAkIACAkQABAJgJAzQgGAkALAZIgNAmIAAAAIgKAUIAAAAIgQAVIgDATIAAAAIgMAUIgHAMQgVBCgEBNQgDA/AJBTg");
	this.shape_490.setTransform(51.1951,293.525);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#8E94A3").s().p("AkcBrIj6glIhQgbIgzgWIAKgzIALAAIBkAcIBlAVIAnAEIAKADICLAOIFBgBIBugKIAdgHIA8gFIBzgXIB9giIAkgNIAEgCIAqgPIBOgnQACAdgEAOQgFAXgTAMIgOAIIgJAPIAAAAIgzAKIhFAdIhQAWQigAmi9AMQheAHh0AAQhDAAhKgDg");
	this.shape_491.setTransform(152.3225,185.0508);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#F76607").s().p("AlwETIgBgYIAPgJQAKgFAEgGIBziMIASgWIA0gvIAmgrIBthHQAEgBAAgDIATgPIDOh4IAcgNIB5gpIg9CXQgDADgFAAIi5BoIgdAPQgRAKgKAHQgJAHgLANIgTAXIgBAAIgnAeIgtAxQgvAHACArQgXAGgPAWQgEAGgRAkIgMALQgGAGgFAAIijAWg");
	this.shape_492.setTransform(202.875,393.425);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#D3CEB4").s().p("AgvBeQgzgChJgGIh8gLQgDgEgEADIitgfIgfgmIgggjQgPgQABgKQABgLAUgHIDOAoIBjAKICMADQBTABA3gBQB1gCBggLQBwgOBigbIBOgTIgXAlQgOAWgMALQgTASgEAGQgJAPAGASQj1A+jYAAIhAgBg");
	this.shape_493.setTransform(146.4218,199.4979);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#F76607").s().p("ABVJxIhWgRIibg+QgEgBgIACIgOADQgZgfgHgGQgKgIgngbIgVgRIg9g6IgJgLIgBgBIgTgUQh1h8g/inQhFjlA7i+IgBgUIAOgTIAGgWIAAABIAKgVIAAABIAfgyIAAAAIA3g8IAPgKIAAAAIA9gjIAJgPIAUgBIAYgGQCog8CjA4QAtAPBAAcIBqAvIAeALIAJAQIBwBeIAMAZQAIAPAGAKIBnCWQBCB9AOBpIAGAdIgJDaIgMAqIgkBVIgYAjIhvBpIhWAtQhgAchRAAQgbAAgZgDgAirmyQgxADgYAAIgjAMQh5AUg8B/QhsDoCVD/IA9BZIAuA4IAxAxIBFA0QCrB5CzglIAdgHIA8gmQAoAEAAgnIABgEIAEAAIAZgNQAOgIAHgIQA5hJANhjIAAiCIgJgUIgDgdQgchggIgZQgBgEgIgDIgNgHIgKgtIgVgTIAAgUQgdgwgSgUQgJgKgQgMIgcgUIgogoIgTgLQgBgagTgLQgMgIgdgEIgOgRQgJgLgHgCIhMgeQgsgQgigGQgXgEgiAAIgPAAg");
	this.shape_494.setTransform(106.2579,344.0905);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#1F1513").s().p("AkwdlQkfhTjjjpQj9kChGkyQhIk0B1lWQCGmFF5jHIAlgWQgrgOgsgmQgvgtgZgUQgugmgPg1QgMgrAGhBQAMhzAShLQAZhlAwhLQC4keFRg3QAXgEA1gGIAAkIQAsgUAQAIQAOAHACAoIAJDsIA+AAIAAjaIgJmKIgBgLQgBgGACgDIAOgTQAIgLAIgCQAYgGABAmQACBsAEBrIAJDFIAIDEQABAcAOAPQAMANAbALQC0BEBuByQB2B7ApC0IAUBTQAMAxAEAhQANBpg6A6Qg3A7gfAcQg1Awg5ASIAsAWQIgD8B0JLQBOGQiiFKQh1Dui+CSQi/CUkEAzQiQAciHAAQirAAicgtgAvoDwQgZAagKAUQi0F6CBGoIAJArQAAAFAFACIAPAeQgBASAGAKQAHAMASAAQA/CnB1B8IATAUIABABIAJALIA9A6IAVARQAnAbAKAIQAHAGAZAfIAxAnQEmDCFuABQAKAAAPgFIAZgJIAMACIAWAHICjgVQAFgBAGgGIAMgKIARgKIAIAIQAEAFACgBQDfg8CNh0QAvgQAKgvQADg4AFgXQASgRA3gFQAxgFARghIg5gDIgMgKIAPgCQAJgBAFABQAgAEAXgNQAVgNAQgeIA5hiQAMgKABgFQAAgHgRgEIhmAJIgNgLQATgCAKgJQALgKACgTQADgXALg8QAKg0ACgfQACgUgDggIgHhAIATgKIAPACIggE8IBLAAIAWg6QBGjFAAj8QADgSgBgHQgCgOgXAJIgHifIgGgWIgEgmIgKgfQgVhWgchCQghhOgvg9IgUgdIgUgUIgUgoIgUgWQgagmgIgJQgCgBgIADIgPAGIgXgUIgWgbIAXgBIAGAEIgEgHIg+g5IgdgLIgWgYQgNgPgLgIQh6hPgkgQQhdgrhaASIgMAIIAAABIg0gGQknArj2gbQgXgCgjABIg7ACIgXgVQhFgThDAeQgrAUhFA6QitBhh2C9IgiA2IAjgDQgNAPgeAcgAMiYWQgSARALAmIBWg7QgZgGgSAAQgYAAgMAKgAjyjnQBIAGAzACQDzALEahIQBPgSBAg6QAugrA2hUIgXgGQAUgMAFgXQADgOgBgdIgeicQgiAOgGAHQgGAIAAAbIgNAAIgFguIA5ggQgfiThuh6QgDgCgHgBIgMgCIgKgcIgpgUQgUgvgxgCIgsgfQgagTgUgJQgSgIgFAKQgFAJAIASIhHgKIBCgnQhbgcgvgJQhLgQg+ADIgeAEQiHACh2A6IAAAOICaAdIgBACIgeAGQgSADgMgBQgxgGgVALQgVALgfA0IDaAeIAFhfIACgJICBgBIgKALQgFAGgFABQgNABhGAAQgOAngCAHQgBAGAAALIgBARIAKASIgJAEIhUgHIjQguQgDgDABgGQAjAGAagaIAtgwQgmgWgoAPQgnAPgSArQg+ADgCA0IgRAEIgWAOIAEAcIgKAFIgPABQgKAAgDADQhhBrgaCVQgBAGAFAKIAHAQIAAAKQgPgEgIAIQgFAGgCAQIgJCDQgIAYAJAWQAIASAUATIgfADIA3A8QAgAhAYAVQAQAOAcARIAuAbICtAfIAEACIAEgBIB8ALgAgt34IgDD0QAAADAFAFIAKAHIALgMQAGgHAAgEIgLjsgABf6dIAIDJIAAClIAIgBIAAihIgLktIgFAAgABd9GIACAXIAHAAIgCgYg");
	this.shape_495.setTransform(153.5724,231.2667);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382,this.shape_383,this.shape_384,this.shape_385,this.shape_386,this.shape_387,this.shape_388,this.shape_389,this.shape_390,this.shape_391,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.shape_397,this.shape_398,this.shape_399,this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412,this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.shape_433,this.shape_434,this.shape_435,this.shape_436,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.shape_442,this.shape_443,this.shape_444,this.shape_445,this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.shape_460,this.shape_461,this.shape_462,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482,this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(36.7,37.4,233.8,387.70000000000005), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgX+AkBMAAAhIBMAv9AAAMAAABIBg");
	mask.setTransform(153.5,230.5);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(153.5,230.5,1,1,0,0,0,153.5,230.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(153.5,230.5,1,1,0,0,0,153.5,230.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,307,461), null);


// stage content:
(lib.firstAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(207,604.95,0.5751,0.5751,15.9751,0,0,166.3,397.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[207.1,604.9,203.7,602.4,199,599,183.3,587.4,168.3,577.7,122.2,547.8,103.1,547.8,94.5,547.8,81.7,556.2,74,561.2,56,574.7,38.4,586.9,23.2,593.1,2.3,601.5,-19.9,601.5,-45.1,601.5,-91,597.6,-115.8,595.5,-161,591.6]}},36).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,739.4,414.90000000000003,-76.89999999999998);
// library properties:
lib.properties = {
	id: '6D80FAC77807FF45865A920A0FFE4BDA',
	width: 392,
	height: 875,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Image.png", id:"Image"}
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
an.compositions['6D80FAC77807FF45865A920A0FFE4BDA'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;