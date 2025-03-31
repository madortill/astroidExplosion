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
// helper functions:

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
	mask.graphics.p("Egk3AmIMAAAhMPMBJvAAAMAAABMPg");
	mask.setTransform(236,244);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5650").s().p("AgFgFIALAGIgEAFg");
	this.shape.setTransform(299.625,211.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D5650").s().p("AgMgHIAEgFIAVARIgIAIg");
	this.shape_1.setTransform(301.1,213.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D5650").s().p("AgFAAIAHgIIAEASg");
	this.shape_2.setTransform(302.225,214.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B433F").s().p("AgKAJIATgTIACACIgUATg");
	this.shape_3.setTransform(233,247);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5650").s().p("AgDAFIAHgMIgFAPg");
	this.shape_4.setTransform(234.325,245.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B433F").s().p("AgLAeIAWg7IABACIgDA5g");
	this.shape_5.setTransform(230.8,250.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5650").s().p("AgOA/IAIh+IAVAAIAAB/g");
	this.shape_6.setTransform(230.225,260.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4B433F").s().p("AgGgKIANAHIgNAOg");
	this.shape_7.setTransform(294.75,271.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D5650").s().p("AAAgHIAKANIgTACg");
	this.shape_8.setTransform(232.95,271.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4B433F").s().p("AABgIQADAGAGABIgTAJg");
	this.shape_9.setTransform(299.675,268.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5650").s().p("AgJgCIAUgEIgLANg");
	this.shape_10.setTransform(304.4,265.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D5650").s().p("AgDADIADgFIAEAFg");
	this.shape_11.setTransform(310.85,258.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4B433F").s().p("AgPADIAfgTIgKAhg");
	this.shape_12.setTransform(312.475,235.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5D5650").s().p("AgWAHIAjgUIAKAJIgkASQgGgBgDgGg");
	this.shape_13.setTransform(302.05,266.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5650").s().p("AgZAGIAygXIABAUIguAQg");
	this.shape_14.setTransform(291.475,272);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#35302A").s().p("AgUAeIAUhBIAVAOIgWA5g");
	this.shape_15.setTransform(309.975,243.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5D5650").s().p("AgcAfIAehGIAbgBIggBQg");
	this.shape_16.setTransform(314.925,252);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4B433F").s().p("Ag7gYIBOAFIApAWIgJAWg");
	this.shape_17.setTransform(241.9,276.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4B433F").s().p("Agag2IAbgKIAaCBg");
	this.shape_18.setTransform(308.3,229.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4B433F").s().p("AARBgIgZABIgMiLIAAg1IAcgCIANDDg");
	this.shape_19.setTransform(316.075,238.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5D5650").s().p("AAGgGIAGAGIgXAHg");
	this.shape_20.setTransform(197.3625,87.2125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#35302A").s().p("AgmgEIBIgDIAGgBIAAABIgGAAIhJAQg");
	this.shape_21.setTransform(191.95,88.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4B433F").s().p("AgjAAIBGgTIgBAOIg+AZg");
	this.shape_22.setTransform(184.55,90.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5D5650").s().p("AgFAAIAEgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABABIAFAFIgGAFg");
	this.shape_23.setTransform(274.725,297.045);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5D5650").s().p("AgPAEIAbgMIAEALIgDAHg");
	this.shape_24.setTransform(320.875,267.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#35302A").s().p("AgJgLIATACIgBAVg");
	this.shape_25.setTransform(310.975,205.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4B433F").s().p("AgHgMIAcAFIgpAVg");
	this.shape_26.setTransform(320.125,268.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4B433F").s().p("AgYgSIAyAMIAAAZg");
	this.shape_27.setTransform(227.45,284);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4B433F").s().p("AgZADIABgVIAyAlg");
	this.shape_28.setTransform(314.475,206.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#35302A").s().p("AgcgDIA5gPIAAAZIg4ALg");
	this.shape_29.setTransform(291,284.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4B433F").s().p("AgegHIA9gJIg8Ahg");
	this.shape_30.setTransform(296.95,283.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4B433F").s().p("AAfgRIAAAUIg9APg");
	this.shape_31.setTransform(284.95,202.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5D5650").s().p("AgGgoIAQA9IgTAUg");
	this.shape_32.setTransform(328.725,226.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#35302A").s().p("AgKg7IAUABIABB1IgVABg");
	this.shape_33.setTransform(215.275,258.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5D5650").s().p("AgSAeIAOg/IAXAAIgRBDg");
	this.shape_34.setTransform(252.325,295.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4B433F").s().p("AAvgPIABAWIhfAJg");
	this.shape_35.setTransform(283.4,286.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#35302A").s().p("AhKACIAAgYICVAtg");
	this.shape_36.setTransform(237.55,285.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4B433F").s().p("Agcg7IAWgBIAiB5g");
	this.shape_37.setTransform(217.05,270.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#35302A").s().p("AhuACIAAgUIDdAlg");
	this.shape_38.setTransform(299.05,202.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4B433F").s().p("AgmBLIBNiWIg4CXg");
	this.shape_39.setTransform(218.05,244.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4B433F").s().p("AgNh3QADgKAAgJIASgVQAYBhgEBCQgGBXgxBFg");
	this.shape_40.setTransform(328.8855,244.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8E807E").s().p("AngGBIgBgIIgpgyIABAAIgjh6IgCh2IA5iXIAegeIAxgUIAVgeQAAgKAKAAIBGgUIAAAAIB4goIAwgWICXhhIATgUIApgVIAAAAIAogUIA9gPIDdAQIASAYIA8ARIABAIIApAyIgBAAIAoAqIAUAmIgDBTQAAAJgCAKIheCfIgMjCIgdABIAAA1IgeAUIgaiCIgcALQisg9iWBBQh6A1h/CTQgtA0gNAsQgRA3AYA6QAHAQgBAbIgBAuIhPgEIgUgUIAAABIgLgPIgJARIATB5gAl9AZIgUAUIgYA8IgIB/IAeABIADi7IAVgTIAGgQgAEVk3IASAVIAMALIgEgTIgWgRIgMgIg");
	this.shape_41.setTransform(272.125,243.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9C918C").s().p("AlbE6IACgBIhxgjIgTh6IAUgCIAAgBIAVAVIBtAwIAKgVIgqgXIACguQABgbgHgQQgYg7ARg2QANgsAtgzQB/iVB7g1QCVhACsA8IA2B4IgBAAIAVAOIAKghIALCKIgfBHIAZAKIAhhRIADABIBeigIgPEXIgnA8IgBAAIgbAOIgNAbIg8A7IAAAAIhQApIAAgBIgoAVIAAgBIg+AKIg5AOIheAgIj0ArIgYABIACABgABcCfIAEANIAvgPIAPgQIgPgGgADsBXIgkAWIgLARIA5gdIALgOgAE0AYIAHAAIgDgHgAEZhnIATAGIAYg6IgWgOg");
	this.shape_42.setTransform(279.725,256.6609);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B8B1AB").s().p("AAAgOIAQAQIgfANg");
	this.shape_43.setTransform(207.6,100.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5D5650").s().p("AgRADIAVgRIAOAOIgXAPg");
	this.shape_44.setTransform(172.95,102.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5D5650").s().p("AAAgGIAIAIIgPAFg");
	this.shape_45.setTransform(167.675,106.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4B433F").s().p("AgMAJIAZgSIgCATg");
	this.shape_46.setTransform(150.775,109.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#35302A").s().p("AgIgSIATgBIgVAng");
	this.shape_47.setTransform(202.925,95.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5D5650").s().p("AgXAIIAjgYIAMAMIgmAVg");
	this.shape_48.setTransform(169.95,104.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5D5650").s().p("Ag1AKIAZgSIBSgPIhcAug");
	this.shape_49.setTransform(178.7,100.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5D5650").s().p("AAFgeIAYAAIg5A+g");
	this.shape_50.setTransform(148.975,113.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4B433F").s().p("AgNAFIAbgOIAAASg");
	this.shape_51.setTransform(310.625,293.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8B1AB").s().p("AjoB4IBUhTIBHgwIA2gbICihCIBZgTIAFAUIghAJImRDag");
	this.shape_52.setTransform(162.275,85.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8E807E").s().p("AlUC9IAAgqIAFgjIATgVIARgqIAAAAIAAgBIAAABIAVgZQAAgGABgIIGQjaIBhAOIB0AdIAECGIABAAIgBABIAAgBIiiAVIglATIABAAIhTAPIABgoIg7AHIAAgBIgmATIgUAUIg9ApIAAgBIgnAUIgVAUIgZATIgiA/IgBASgAC2hWIhHATIAGAVIA/gaIBLgRgAEHhbIAXgHIgGgIg");
	this.shape_53.setTransform(169.9,97.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#35302A").s().p("AgLgTIAYABIgZAmg");
	this.shape_54.setTransform(43.425,160.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4B433F").s().p("AgdAfIA7g/IghBAg");
	this.shape_55.setTransform(45.175,155);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5D5650").s().p("AABgLQAEAIgBAIIgHAHg");
	this.shape_56.setTransform(179.8852,15.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5D5650").s().p("AgGAAIAHgFIAGAMg");
	this.shape_57.setTransform(180.2,16.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5D5650").s().p("AgPgCIAMgNIATATIgLAMg");
	this.shape_58.setTransform(170.75,29.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5D5650").s().p("AgLASIgCgbIAKgLIARASIgBAXg");
	this.shape_59.setTransform(172.7,31.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5D5650").s().p("AgbgJIALgPIAsAkIgMANg");
	this.shape_60.setTransform(167.55,26.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#5D5650").s().p("AgEAAIACgCIADgDIAEAGIgFAFIgEgGg");
	this.shape_61.setTransform(57,187.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5D5650").s().p("AgFAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIADgDIAGAHIgGAHIgFgIg");
	this.shape_62.setTransform(59.075,191);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5D5650").s().p("AgDAHQgDgCgBgCQAAgDACgEIADgHIAGAEQADADABACQABACgDAFIgEAIg");
	this.shape_63.setTransform(52.9,198.25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5D5650").s().p("AgFgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIADgEIAGAOIgGAHQgEgKgBgEg");
	this.shape_64.setTransform(344.9958,42.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4B433F").s().p("AgTgSIAoASIgpAUg");
	this.shape_65.setTransform(209.925,21.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A9A29D").s().p("Ag/g2IAWgXIBmABIADBcIgbAgIgfAaIg6AEg");
	this.shape_66.setTransform(161.3,186.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8E807E").s().p("AgxAzIAAh6IBjAXIAAB3IhPAAg");
	this.shape_67.setTransform(403,236.95);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B8B1AB").s().p("Al/IjIh7g6IhQhFQgBgKgJgBIgtg/IgVgyIgOguIAHk8IA0hHIAignIA5gvQAKAAAGgHIArgcIBSgtQAJABAHgGIFVjHIATgTQCJgwARgDQBagSBKAoIBAgZICQBGIAQAQIBABdIAYApIAjBfIAVFgIgSAkIgvBGQgHAEgCAJIhNBSIh0ClIgbAPIjXBIIidAiIgoAEIizAGgAAdmDIgUAUIiXBhIgvAWIh5AoIAAAAIhGAUQgKAAABAKIgVAeIgyAUIgdAeIhOCWIAAB4IA5B5IAoAyIACAIIAIACIAzAmICXAVIgCAAIBGAoIgOBAIAUAEIARhEID0gsIBfgJIA5gMIA+giIgBAAIApgUIgBAAIBRgoIgBAAIA9g8IApgVIADgHIgEgMIAAgBIAog7QAyhFAGhWQAEhDgYhhIgRg+IgTgmIgogqIAAAAIgogyIgCgIIgIgCIgzgmIgUgCIABABIjdgmIhlA5IABAAgAAjHyIgDADIAFAHIAGgFIgFgGIAAgBIgDACg");
	this.shape_68.setTransform(270.975,246.8457);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A9A29D").s().p("AgIAAIAAgCIASAFg");
	this.shape_69.setTransform(71.95,308.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A9A29D").s().p("AgMgPQACgGAHgCIARAkIgUAKg");
	this.shape_70.setTransform(70.8,311.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4B433F").s().p("AgEAFIAJgJIgJAJg");
	this.shape_71.setTransform(324.4625,385.5375);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4B433F").s().p("AgEAFIAJgKIgBAGIgEADIgDACg");
	this.shape_72.setTransform(326.425,383.475);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4B433F").s().p("AhAgBIAAgZICBAnIgPAOg");
	this.shape_73.setTransform(198.425,77.85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4B433F").s().p("AgHBKIgEiGIANgOIAKCUg");
	this.shape_74.setTransform(204.7,86.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A9A29D").s().p("AhKApIBShSIAlgSIBFAZIhDBKIigAUg");
	this.shape_75.setTransform(263.325,192.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4B433F").s().p("AAMAWQgJgEgLgHIgVgLIAUgVIAnAZIgKAMQgFAGgCAAIgBAAg");
	this.shape_76.setTransform(371.975,153.0063);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4B433F").s().p("AgKgJIABAAIAUASIgCABg");
	this.shape_77.setTransform(351,117.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4B433F").s().p("AgNAAIAIgJIAUANIgGAGg");
	this.shape_78.setTransform(344.85,113.275);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4B433F").s().p("AgUgFIAFgGIAkAXIgBAAg");
	this.shape_79.setTransform(347.9,114.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9C918C").s().p("AghApIgugtIAYgcIBMgIIA7AYIgBAVIhuAkg");
	this.shape_80.setTransform(335.85,102.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#35302A").s().p("AgBARIgMgTIAagOIABAcQgFAFgIAAIgCAAg");
	this.shape_81.setTransform(232.525,214.7571);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4B433F").s().p("AgTABIASgUIAVATIgTAUg");
	this.shape_82.setTransform(209.025,231.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4B433F").s().p("AgRAAIAVgSIAPASIgPATg");
	this.shape_83.setTransform(210.7,229.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#35302A").s().p("AgOAAIAbgRIABAcQgGAHgIAAg");
	this.shape_84.setTransform(218.45,222.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#35302A").s().p("AgZACIAngVIANATIgoAUg");
	this.shape_85.setTransform(229.7,216.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#35302A").s().p("AgVgHIAegNIANASIgpAXg");
	this.shape_86.setTransform(226.15,218.775);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4B433F").s().p("AgVAAIApgcIACAcIgqAdg");
	this.shape_87.setTransform(221.975,220.85);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#35302A").s().p("AgjAOIA6guIANASIg4Avg");
	this.shape_88.setTransform(214.675,225.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4B433F").s().p("AgiAZIAwhFIAVATIgyBGg");
	this.shape_89.setTransform(205.625,235.625);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#35302A").s().p("AgJAOIASgaIABAag");
	this.shape_90.setTransform(192.975,104.75);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#35302A").s().p("AgNAIIANgYQAGAFAIAIIgSAUg");
	this.shape_91.setTransform(136.875,106.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#35302A").s().p("AgOAJIAOgbIAPgCIgQAqQgHgIgGgFg");
	this.shape_92.setTransform(138.4,104.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#35302A").s().p("AgLADIAPgYIAIAIIgFAjg");
	this.shape_93.setTransform(135.15,109.725);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#35302A").s().p("AgdgMIA7gDIg7Afg");
	this.shape_94.setTransform(169.075,119.55);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4B433F").s().p("AgZgGIAzgNIgxAng");
	this.shape_95.setTransform(196.45,104.075);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#A9A29D").s().p("AgfATIAggoIAgAEQgCAIABAGIgWAYIABgBIgOACg");
	this.shape_96.setTransform(138.85,99.975);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#8E807E").s().p("AAWgYIgFAiIgRAPIgWAAg");
	this.shape_97.setTransform(203.8,110.625);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5D5650").s().p("AgQAdIAPg7IASATIAAApg");
	this.shape_98.setTransform(134.125,113.05);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#5D5650").s().p("AgHgTIApACQAXgBAOgKIgBAcIiMAdQAMgvAzgBg");
	this.shape_99.setTransform(159.025,121.15);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8E807E").s().p("AgEAKIhEAAQAGgEABgFIAVgfIgBAAIAVgnIAUAAIBMAdIgCAtIhJBBgAgDAJIAegNIgQgRg");
	this.shape_100.setTransform(206.45,101.075);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4B433F").s().p("AATAIIhvhOIAiACIBlATIAyA8IhcA8g");
	this.shape_101.setTransform(141.7,123.025);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#A9A29D").s().p("AkXBaIABgSIA6g/IACgSIAUgVIAogUIgBABIA9goIAUgVIAogUIAAABIA5gHIgBApIhRA+IgHAOIAQgFIA+gmIBdgvIgBAAIAmgVICOgTIgBAnIABgBIgVAhQgCAFgFAEIgBAAIg0ANIgTAbIgTATIgpAUIgUAUIhPAnIAAAAIgnAUIg8ADQgNAKgYAAIgqgBQgyAAgMAwIgKABg");
	this.shape_102.setTransform(173.975,109.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4B433F").s().p("AgIgXIAMgCIAFAyIgNABg");
	this.shape_103.setTransform(85.05,341.85);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4B433F").s().p("AAEAGIgOgGIAHgGIAOAHQgFAGgCAAIAAgBg");
	this.shape_104.setTransform(134.225,376.9519);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4B433F").s().p("AgFgIIALALIgGAGg");
	this.shape_105.setTransform(181.625,129.475);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5D5650").s().p("AgNABIAQgOIALAKIgTARQgFgFgDgIg");
	this.shape_106.setTransform(205.15,113.025);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4B433F").s().p("AgOgNIAVAAQADAIAFAFIgaAOg");
	this.shape_107.setTransform(203.075,114.525);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5D5650").s().p("AgLATIACgtIAVAJIgMAtg");
	this.shape_108.setTransform(214.675,99.75);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4B433F").s().p("AgLgRIAGgGIARArIgNAEg");
	this.shape_109.setTransform(182.75,132.175);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#5D5650").s().p("AgJAbIAAg1IATAAIgDA2g");
	this.shape_110.setTransform(169.675,134.05);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#35302A").s().p("Ag7AKIACgYIB0AEIAAAZg");
	this.shape_111.setTransform(145.9,136.35);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#5D5650").s().p("AgsAtIAFgjIABAAIBJhAIALAJIhPBkg");
	this.shape_112.setTransform(210,107.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5D5650").s().p("AgdgNIAAgZIA7gYIAAB9g");
	this.shape_113.setTransform(154.85,139.225);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#35302A").s().p("AgPAEIATgTIAMAMIgTATg");
	this.shape_114.setTransform(325.175,275.275);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#35302A").s().p("AgPAEIATgTIAMAMIgTATg");
	this.shape_115.setTransform(327.225,273.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#35302A").s().p("AgPAEIASgUIANANIgSAUg");
	this.shape_116.setTransform(329.2,271.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#35302A").s().p("AgQAEIARgUIAQAOIgUATg");
	this.shape_117.setTransform(331.175,269.125);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#35302A").s().p("AgNAAQACgIAHgFIASAUQgFAGgIABg");
	this.shape_118.setTransform(332.7,267.475);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#5D5650").s().p("AgOAEIAXgMIAGAHIgYAKg");
	this.shape_119.setTransform(313.225,313.3483);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4B433F").s().p("AgHgEIAHgGIAHAPIgHAGIgHgPg");
	this.shape_120.setTransform(331,282.025);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4B433F").s().p("AgSAKIASgjIATAOIgTAlg");
	this.shape_121.setTransform(338.8,258.125);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#35302A").s().p("AgigHIAkgGIAhAIIgXATg");
	this.shape_122.setTransform(232.425,302.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4B433F").s().p("AgdAHIABgSIA6AWIAAABg");
	this.shape_123.setTransform(236.975,320.875);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5D5650").s().p("AgegBIA5gTIAEAFIg9Akg");
	this.shape_124.setTransform(309.075,315.85);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5D5650").s().p("AgTgNIAogFIgDAdIgmAIg");
	this.shape_125.setTransform(269.975,306.075);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4B433F").s().p("AgXAAIAFgOIAqAOIgGAPg");
	this.shape_126.setTransform(337.075,286);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#35302A").s().p("AgvgIIBhgDIgBAQIhiAHg");
	this.shape_127.setTransform(276.975,323.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#35302A").s().p("Ag7gLIABAAIB0ADIACAUg");
	this.shape_128.setTransform(245.95,323.225);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4B433F").s().p("AggAYIAuhEIATAPIguBKg");
	this.shape_129.setTransform(335.475,263.675);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4B433F").s().p("AgogCIBRgZIgBAbIhPAcg");
	this.shape_130.setTransform(291.9,301.075);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#35302A").s().p("AhZgKICzgGIgBAgIiyABg");
	this.shape_131.setTransform(259,306.325);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#35302A").s().p("AhNACICdghIABAfIihAgg");
	this.shape_132.setTransform(279.825,304);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#35302A").s().p("AhQAJICDguIAcAFIACADIiiBDg");
	this.shape_133.setTransform(304.1,297.375);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#5D5650").s().p("Ag8gNIB1gJIAEAFIhxAog");
	this.shape_134.setTransform(346.075,274.05);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4B433F").s().p("AhRgHIAXgUICMAcIAAAbg");
	this.shape_135.setTransform(241.825,305.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#5D5650").s().p("AhlgJIDLgBIgCAUIjHABg");
	this.shape_136.setTransform(261.95,323.375);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#4B433F").s().p("Ah3AXIDvg/IAAAYIjvA5g");
	this.shape_137.setTransform(293.925,319.675);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#35302A").s().p("AhIBaIAAgTIBzikIAMANIASCHIiOAng");
	this.shape_138.setTransform(319.2875,285.025);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#5D5650").s().p("AgIgXIARALIgRAkg");
	this.shape_139.setTransform(180.875,11.45);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#5D5650").s().p("AgJgTIATAAIAAAng");
	this.shape_140.setTransform(206.95,18.025);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B8B1AB").s().p("AgFgTIAOAbIgRAMg");
	this.shape_141.setTransform(119.2,51.85);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4B433F").s().p("AgNAEIAXgZIADAiQAAAGgGADg");
	this.shape_142.setTransform(32.7,174.975);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#5D5650").s().p("AgNgGIAcgGIgPAZg");
	this.shape_143.setTransform(20.5,189.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#5D5650").s().p("AAAgJIAMAOIgYAFg");
	this.shape_144.setTransform(15.6,192.525);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#8E807E").s().p("AgFgEIACgDIADgCQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAIgGAOIgFgOg");
	this.shape_145.setTransform(140.8542,38.25);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5D5650").s().p("AgUgJIAoAAIABATg");
	this.shape_146.setTransform(337.95,51.025);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#35302A").s().p("AALgTIgDAjIgSAEg");
	this.shape_147.setTransform(41.075,164.125);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4B433F").s().p("AgUASIAUgqIAVARIgcAhg");
	this.shape_148.setTransform(31.325,177.95);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#35302A").s().p("AgZACIAigXIARATIgiAYg");
	this.shape_149.setTransform(151.825,84.925);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#5D5650").s().p("AgYAHIAigcIAPAUIgkAXg");
	this.shape_150.setTransform(18.025,190.825);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#35302A").s().p("AgYAFIAhgaIARAUIgiAXg");
	this.shape_151.setTransform(148.35,87.35);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#5D5650").s().p("AgTgNIAnABIgEAZg");
	this.shape_152.setTransform(25.95,209.45);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#4B433F").s().p("AgLAGIAFgZIASAng");
	this.shape_153.setTransform(28.725,210.15);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#35302A").s().p("AgdgLIA6gBIABAUIg5AFg");
	this.shape_154.setTransform(204.95,25.175);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#4B433F").s().p("AgkgSIA0AFIAVABIgUAfg");
	this.shape_155.setTransform(74.4,167.05);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#4B433F").s().p("AgdAKIABgdIA6AZIgDANg");
	this.shape_156.setTransform(316.825,40.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#5D5650").s().p("AgeAAIgBAAIAqgTIATABIACAgIg9AGg");
	this.shape_157.setTransform(210.975,23.925);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8E807E").s().p("AgPgNIAfgFIgaAlg");
	this.shape_158.setTransform(24.075,173.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#35302A").s().p("AgWATIAtgmIgTAng");
	this.shape_159.setTransform(37.775,168.075);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4B433F").s().p("AgngHIBPgCIAAATg");
	this.shape_160.setTransform(77.95,130.825);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#8E807E").s().p("AgOgIIAdgLIgDAng");
	this.shape_161.setTransform(48.025,118.425);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#9C918C").s().p("AgPgMIAhAGIgjASg");
	this.shape_162.setTransform(83.675,112.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#5D5650").s().p("AgVgeIAsAAIgpA+g");
	this.shape_163.setTransform(35.9,173.15);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#5D5650").s().p("AgZAEIAEgTIAvAPIgFAQg");
	this.shape_164.setTransform(82.9,169.275);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#35302A").s().p("AgjAKIBFgmIACAdIg2Acg");
	this.shape_165.setTransform(156.3,81.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#35302A").s().p("Ag5AMIgBgQIB1gIIgCAYg");
	this.shape_166.setTransform(76.225,112.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#5D5650").s().p("AgtAJQAAgJADgIIBYAAIgBARg");
	this.shape_167.setTransform(66.5714,119.225);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#8E807E").s().p("AgPglIAZgDIAGBOIgWADg");
	this.shape_168.setTransform(14.475,201.275);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#4B433F").s().p("AgCA5IgWh0IAxBQIgCAng");
	this.shape_169.setTransform(32.4,218.075);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#5D5650").s().p("AgfgiIASgLIAtBQIgTALg");
	this.shape_170.setTransform(149.15,35.375);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#4B433F").s().p("AgNBSIAbikIgFClg");
	this.shape_171.setTransform(66.625,143.625);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#35302A").s().p("AAkgWIAYADIgBASIh2AYg");
	this.shape_172.setTransform(167.95,35.875);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#35302A").s().p("AgQghIAFhLIAWARIAGA8IgECLIgUABg");
	this.shape_173.setTransform(50.8,127.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#5D5650").s().p("AAFg8IAYABIg5B4g");
	this.shape_174.setTransform(64.7,157.925);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A9A29D").s().p("AgZgoIAZADIAaBGIglAIg");
	this.shape_175.setTransform(34.75,227.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#8E807E").s().p("AgtAVIgEgRIBXgYIANApg");
	this.shape_176.setTransform(82.5,139.675);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#5D5650").s().p("AgzAGIBggeIAIASIhFAcIgkADg");
	this.shape_177.setTransform(87.2,129.25);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#A9A29D").s().p("AgzgSQALABAPgIIAagMQAfgMAUAhQgDAJAAAIIgoAfIg2AKg");
	this.shape_178.setTransform(57.075,119.9918);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#35302A").s().p("AhDBHIB3iNIAQARIhTBSIgiAoIgJACg");
	this.shape_179.setTransform(140.625,94.925);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#4B433F").s().p("AhRASICihBIABAeIihBBg");
	this.shape_180.setTransform(167.95,77.025);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#5D5650").s().p("AAvh5IgCBOIg8CgIgfAFg");
	this.shape_181.setTransform(27.2,160.15);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#35302A").s().p("AglgLQAOgwBAgyIg6DbQghhIANgxg");
	this.shape_182.setTransform(127.754,114.85);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E9E5DC").s().p("AgPAjQgigCgRAAQAGgKALgWQALgSAKgEQASgHAcgDIAxgDQgFALgKAaQgKAXgLAEQgPAFgXAAIgIAAg");
	this.shape_183.setTransform(129.025,28.6817);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#4B433F").s().p("AhfAeICThjIAlgFIALARIjHCEg");
	this.shape_184.setTransform(127.95,50.85);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#4B433F").s().p("AiKAQIEWhKIABAaIkZBag");
	this.shape_185.setTransform(188,29.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#35302A").s().p("AhhAhIAhgJIgEgTIhaASIgBgdIBzgXQBDgOAvgEQASgBAbAOIAtAZIjMAAIgBAXIAtAIIgBAag");
	this.shape_186.setTransform(192.05,72.918);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E9E5DC").s().p("AhIA5IAliJIBYgEIAUBSIiCBXg");
	this.shape_187.setTransform(125.9,44.15);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E9E5DC").s().p("AhUCGIADgkIgBAAIAbgnIAihAIgBgaIAVhtIATgBIAJAAQA9AXgDAwQgBAPgcBDIgRAyQgKAggKAQQgTAggnAAQgUAAgZgIg");
	this.shape_188.setTransform(50.3595,152.3473);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E9E5DC").s().p("AiqA3QAjhNBxgkQBwglA/AvQAKAHAGAXQAFAWgHAJQgcApiEAQQgrAFgiAAQhEAAgggUg");
	this.shape_189.setTransform(205.8587,37.3586);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#A9A29D").s().p("AhFC7QABgagCgSQgBgLgIgRIgMgbIAChOIAAAAIAdhOIAggqIgBACIBvh5IAJCPIABgDIgUBvIAAAaIg7BAIgBAoIAAgBIgUApIAAAAIgtAmIgSABIACgsg");
	this.shape_190.setTransform(40.9,146.95);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#A9A29D").s().p("Aj8CUQgGg5gBgcQgDgxAQgUQAVgdAzgbIBXguIAHgCIAUgSIABgVIAoAJIAAAxIASgmQAUACAqAAQAmABAYAGQAZAGAiAQIA5AcIAVAoIgBgBIgBAmIg6ABIkWBLIhShLIgLAOIBBA2IACAdIhfAtQg1gBAAgBgAgYhBIAOAGIgGgNQABgJgEgIg");
	this.shape_191.setTransform(181.9513,23.125);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E9E5DC").s().p("AltDlQgEhEBPhbQBJhTB5hMQB5hNB5gmQCDgpBZAVIhHA9QgkAfgYASIilB9QhiBLg9A3Qg9A2hEAWQgwAPg2AAQgWAAgXgDg");
	this.shape_192.setTransform(123.6879,80.6558);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#A9A29D").s().p("AkCFyIgTgnIgpgBIAAgpIAzgVIABgHIAIgCIBSgiICJirIAVgiIAAgBIBPiBIAAAAIA5h5IAEilIA8g2IBPASIAkgDIAIA9IhYAZIAFARIBgAAQADBdgLAqQgUBGhDAjIgUgBIg2gFIA2AmQgBASgBAlQgCAfgJASQgSAkghAvIg4BRIgYAXIg6AoIgUA7Ii8B5gAgiDjQgCAEAAADQABACADADIAGAFIAEgIQADgEgBgDQAAgCgEgDIgGgFIgEAIgAAdCbQAAABgBAAQAAABgBAAQAAABAAAAQAAAAAAABIAFAIIAHgHIgGgIIgEADgAAJB2IgCADIAEAGIAGgFIgEgHg");
	this.shape_193.setTransform(55.7658,175.075);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#5D5650").s().p("AgGAEIAHgcIAGAxg");
	this.shape_194.setTransform(24.6,223.775);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A9A29D").s().p("AgFALIgFgZIAVAdg");
	this.shape_195.setTransform(48.825,416.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#5D5650").s().p("AADgFIADADIgLAIg");
	this.shape_196.setTransform(335.525,450.475);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#5D5650").s().p("AgNAFIAVgMIAGAHIgYAIg");
	this.shape_197.setTransform(337.225,449.375);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#5D5650").s().p("AgcgBIA2gQIADASIgyARg");
	this.shape_198.setTransform(327.6,453.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#A9A29D").s().p("AAACIIg6hQIgBgUIgoAAIhkgwIB2h9IA+AVIAyAZICVBYQAGAFAHABQACAJAFAGIgkAdIgrAcIg6AVQgEAKACAKIgkhOIgJBkgAgMgwQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQABAFAFAKIAGgHIgHgOIgDADg");
	this.shape_199.setTransform(345.925,46.45);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E9E5DC").s().p("AgwADIBhgHQgDAFADAFg");
	this.shape_200.setTransform(224.8,25.55);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#35302A").s().p("AhNAcIgCgfIAIgTQAFgLACAAQAcAFB0AaIgDAbIhhAJg");
	this.shape_201.setTransform(221.975,22.4739);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A9A29D").s().p("AgpAmQgCgBgFALIgIATIgUgBIgogTIAAgoIB0hKIAsANIBKBUIgQAmQh0gZgbgFg");
	this.shape_202.setTransform(219.7,15.325);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#35302A").s().p("AgxgFIAWgVIBNAYIgBAdg");
	this.shape_203.setTransform(308.975,38.525);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#4B433F").s().p("AgNgGQAIgCACgIIARAZIgIAIg");
	this.shape_204.setTransform(422.725,209);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#4B433F").s().p("AgFgIIALAJIgGAHg");
	this.shape_205.setTransform(366.525,132.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#8E807E").s().p("AgEgBIADgDIAGAJg");
	this.shape_206.setTransform(232.35,354.425);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#5D5650").s().p("AgCgKIANANIgVAIg");
	this.shape_207.setTransform(229.5,128.35);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#4B433F").s().p("AgLAEIAXgRIABABIgQAbQgCgIgGgDg");
	this.shape_208.setTransform(184.75,237.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#4B433F").s().p("AgOgJIAdASIgXABg");
	this.shape_209.setTransform(231.475,365);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#4B433F").s().p("AgPgCIAPgQIAQAXIgOAOg");
	this.shape_210.setTransform(382.825,127.05);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#5D5650").s().p("AgCgKIAMALIgSAKg");
	this.shape_211.setTransform(233.65,122.575);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#35302A").s().p("AgSAAQADgHAHgEIAbABIgXAWg");
	this.shape_212.setTransform(86.925,243.275);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#35302A").s().p("AgFADIAFgJIAGAGIgGAHg");
	this.shape_213.setTransform(69.1,355);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#4B433F").s().p("AgJAIIAAABIAAgBIAAAAQgBgIAEgJIARATg");
	this.shape_214.setTransform(353,57.125);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D3CDC5").s().p("AgIgJIAOACQAEAIgBAJg");
	this.shape_215.setTransform(346.9455,61.05);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#4B433F").s().p("AgJAAIATgHIgLAPg");
	this.shape_216.setTransform(250.475,65.55);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#5D5650").s().p("AgJgBIAUgJIgIAVg");
	this.shape_217.setTransform(230.25,127.475);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#5D5650").s().p("AgGgOIANABIAAAcg");
	this.shape_218.setTransform(71.2,333.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#5D5650").s().p("AgPgCIANgNIASAUIgLALg");
	this.shape_219.setTransform(372.75,125.175);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#35302A").s().p("AgPgDIAMgMIATATIgNAMg");
	this.shape_220.setTransform(377.375,120.625);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#35302A").s().p("AgTgJIAdgBQAHADADAHIgOALg");
	this.shape_221.setTransform(373.025,117.15);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#5D5650").s().p("AgOAFIARgVIAMAMIgRAVg");
	this.shape_222.setTransform(169.025,231.075);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#5D5650").s().p("AgIALIgCgVIAUARQgGAEgIAAIgEAAg");
	this.shape_223.setTransform(79,419.2341);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#35302A").s().p("AgDgKIARAUIgbAAg");
	this.shape_224.setTransform(71.675,358.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#5D5650").s().p("AgGgGIANAHIgHAGg");
	this.shape_225.setTransform(369.5,121.75);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#35302A").s().p("AgKgGIALgMQAJACABAGIgCAdg");
	this.shape_226.setTransform(378.85,122.95);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#4B433F").s().p("AgKAKIADgTIASAUg");
	this.shape_227.setTransform(112.85,353);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#35302A").s().p("AgQgDIAOgLIATARIgNAMg");
	this.shape_228.setTransform(375.325,118.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#5D5650").s().p("AAAgBQAAgBAEAAIgHAFIADgEg");
	this.shape_229.setTransform(338.5125,367.525);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#5D5650").s().p("AgOgIIAHgGIAVAQIgMANg");
	this.shape_230.setTransform(371,123.35);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#5D5650").s().p("AgPAEIASgTIANAMIgUATg");
	this.shape_231.setTransform(377.225,319.225);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#4B433F").s().p("AgHgIIAPAKIgHAHg");
	this.shape_232.setTransform(133.375,319.625);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#5D5650").s().p("AgGAAIAGgFQACABAFAEIgEAEIgDACIgGgGg");
	this.shape_233.setTransform(220.85,136.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#35302A").s().p("AgPgDIAcgSIADAjQgDAHgGABg");
	this.shape_234.setTransform(68.525,317);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#5D5650").s().p("AgJACIALgLIAIATg");
	this.shape_235.setTransform(128.525,314.325);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#5D5650").s().p("AgKgCIAVgHIgKATg");
	this.shape_236.setTransform(216.575,139.75);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#5D5650").s().p("AgPgDIAMgMIATATIgMAMIgTgTg");
	this.shape_237.setTransform(127.125,312.85);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#5D5650").s().p("AgQADIAVgSIAMANIgUARg");
	this.shape_238.setTransform(215,141.05);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#5D5650").s().p("AgKgJIAVAHIgMAMg");
	this.shape_239.setTransform(125.65,311.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#5D5650").s().p("AgOAEIASgUIALAMIgRAVg");
	this.shape_240.setTransform(170.825,228.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#5D5650").s().p("AgGAAIAEgDQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAAAIAHAFIgHAGQgBAAgFgGg");
	this.shape_241.setTransform(204.975,147.0208);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#4B433F").s().p("AgDAEIgDgEIAHgFIAGAGIgHAFIgDgCg");
	this.shape_242.setTransform(120.775,307.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#35302A").s().p("AgMgDIAZgDIgVANQAAgHgEgDg");
	this.shape_243.setTransform(437.175,152.475);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#4B433F").s().p("AgJgEIATAEIgFAFg");
	this.shape_244.setTransform(111.325,301.675);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#35302A").s().p("AgUAAIANgQIAcAQIgSARg");
	this.shape_245.setTransform(221.05,297.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#8E807E").s().p("AgLAAIAXgHQgBAJgHAFIgCABQgIAAgFgIg");
	this.shape_246.setTransform(414.875,294.9594);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#4B433F").s().p("AgTAAQADgIAGgFIAeAFIgVAWg");
	this.shape_247.setTransform(155.125,179.425);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#5D5650").s().p("AgDAAIAGgCIAAAFg");
	this.shape_248.setTransform(245,189.05);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#35302A").s().p("AgQAAIAOgQIATAUIgRANg");
	this.shape_249.setTransform(324.325,195.65);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#5D5650").s().p("AgIgJIASAIIgLALg");
	this.shape_250.setTransform(349.4,199.775);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#5D5650").s().p("AACgHIACACIgHANg");
	this.shape_251.setTransform(93.725,248.725);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#5D5650").s().p("AgKAJIAUgTIABABIgSAUg");
	this.shape_252.setTransform(94.95,247.075);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#35302A").s().p("AAAgJIAOALIgaAIg");
	this.shape_253.setTransform(85.1,244.275);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#5D5650").s().p("AAJAKIgTgRIACgCIATATg");
	this.shape_254.setTransform(398.85,243.05);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#8E807E").s().p("AgPACIAHgLIAYARIgDACg");
	this.shape_255.setTransform(230.525,353.175);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#4B433F").s().p("AgUgHIACgBIATgCIAUAVg");
	this.shape_256.setTransform(354,118.85);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#35302A").s().p("AgLgQIAXAAIgCAhg");
	this.shape_257.setTransform(66.275,349.875);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#5D5650").s().p("AgPgXIAfAAIgGAvg");
	this.shape_258.setTransform(120.45,342.425);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#8E807E").s().p("AgDgJIATASIgfAAg");
	this.shape_259.setTransform(120.45,339.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#4B433F").s().p("AgOAFIACgcIAbAfIgPAQg");
	this.shape_260.setTransform(381.325,124.325);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#5D5650").s().p("AgTAPIATgdIAUAJIAAAUg");
	this.shape_261.setTransform(125.95,134.525);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#5D5650").s().p("AgRANIAYgkIALAMIgWAjg");
	this.shape_262.setTransform(374.95,322.075);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#4B433F").s().p("AgPgNIAHgIIAYAkIgJAHg");
	this.shape_263.setTransform(135.075,322);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#35302A").s().p("AgPgHIASgQIANAYIgSAXg");
	this.shape_264.setTransform(334.65,211.575);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#4B433F").s().p("AgQAKIAhgUIgGAVg");
	this.shape_265.setTransform(87.725,241.075);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#4B433F").s().p("AgMgIIAIgIIARAbIgGAGg");
	this.shape_266.setTransform(424.65,211.55);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#35302A").s().p("AgTASIARgxIAWAZIgcAmQgDgJgIgFg");
	this.shape_267.setTransform(67.225,319.875);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#8E807E").s().p("AgGAEIAGgNIAHAGIgHANIgGgGg");
	this.shape_268.setTransform(100.95,238.075);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#4B433F").s().p("AgTAIIACgTIAlAXg");
	this.shape_269.setTransform(91.95,314.875);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#4B433F").s().p("AgMgYIAbABIgcAwg");
	this.shape_270.setTransform(223.35,312.55);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#5D5650").s().p("AgNAIQAAgIACgIIAZARg");
	this.shape_271.setTransform(223.42,309.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#5D5650").s().p("AgUACIAkgOIAFAMIggANg");
	this.shape_272.setTransform(199.675,149.375);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#5D5650").s().p("AgIgNIARADIgJAYg");
	this.shape_273.setTransform(366.775,75.425);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#5D5650").s().p("AgTgCIAGgLIAhAOIgMANg");
	this.shape_274.setTransform(270.475,81.425);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#4B433F").s().p("AgCgQIAOAaIgXAHg");
	this.shape_275.setTransform(414.825,293.175);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#5D5650").s().p("AgagCIAMgNIAoARIgMAOg");
	this.shape_276.setTransform(273.95,83.125);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#35302A").s().p("AgOAIIAJgoIAUAyIgQAOg");
	this.shape_277.setTransform(205.225,279.65);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#35302A").s().p("AgXgFIARgOIAeAmIgdABg");
	this.shape_278.setTransform(326.725,198);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#8E807E").s().p("AgJgGIAXABIgbAMg");
	this.shape_279.setTransform(190.625,288.875);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#5D5650").s().p("AgSgLIAMgMIAZAjIgOAMg");
	this.shape_280.setTransform(351.075,201.975);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#4B433F").s().p("AAUgJIgDAPIgkAEg");
	this.shape_281.setTransform(321.9375,387.0875);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#4B433F").s().p("AgKATIAVgmIgGAlQgIAAgGACg");
	this.shape_282.setTransform(186.975,234.025);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#35302A").s().p("AgVgMIAUgPIAWAnIgTAQg");
	this.shape_283.setTransform(332.85,207.95);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#5D5650").s().p("AgGAGIANgQIgFAVg");
	this.shape_284.setTransform(337.1625,369.475);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#4B433F").s().p("AgLAEIADgbIAUApIgGAGg");
	this.shape_285.setTransform(356.95,210.05);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#4B433F").s().p("AgRgKIAjATIgeACg");
	this.shape_286.setTransform(372.275,115.125);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#8E807E").s().p("AgMABIAXgIIACAFIgUAKg");
	this.shape_287.setTransform(190.525,152.775);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4B433F").s().p("AglgJIAggKIArAWIgOARIg9gdg");
	this.shape_288.setTransform(358.7,107.075);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#5D5650").s().p("AgBAWIgTggIALgMIAeAsg");
	this.shape_289.setTransform(375.35,127.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#4B433F").s().p("AgcAGIAAgUIA5AHIAAAWg");
	this.shape_290.setTransform(92.925,285.25);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#4B433F").s().p("AgUAEIAdgZIANANIgrAeQgBgIACgKg");
	this.shape_291.setTransform(164.0688,193.275);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#35302A").s().p("AgdgFIA7gFQgCAKABAHIg5AEg");
	this.shape_292.setTransform(158.95,194.75);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#5D5650").s().p("AAQgOIAAAZIgfAEg");
	this.shape_293.setTransform(120.475,327.825);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#5D5650").s().p("AgSAVIACgqIAjAqIgTABIgSgBg");
	this.shape_294.setTransform(132.25,129.825);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#4B433F").s().p("AgEgIIAfgDIg1AXg");
	this.shape_295.setTransform(217.675,384.95);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#4B433F").s().p("AgXgSIAvAUIgbARg");
	this.shape_296.setTransform(351.9,101.675);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#4B433F").s().p("AgggDQAIgEADgKIA2ANIgVAXg");
	this.shape_297.setTransform(360.55,146.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#5D5650").s().p("AgfAIIA/gVIgCAZIg5ACg");
	this.shape_298.setTransform(354.975,270.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#5D5650").s().p("AghAKIA6gXIAKALIhCARg");
	this.shape_299.setTransform(195.05,151);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#5D5650").s().p("AgSAOIAHgeIAdAhg");
	this.shape_300.setTransform(60.2,402.275);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#4B433F").s().p("AAHgiIAIAwIgdAVg");
	this.shape_301.setTransform(217.375,94.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#4B433F").s().p("AgJgDIgBgVIAVAsIgNAFg");
	this.shape_302.setTransform(129.025,136.425);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#5D5650").s().p("AghABIANgOIA0AHIACAUg");
	this.shape_303.setTransform(278.75,84.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#5D5650").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_304.setTransform(156.925,420.95);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#5D5650").s().p("AgTAGIAFgOIAiARg");
	this.shape_305.setTransform(215.575,425.0125);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#4B433F").s().p("AgOggIASAAIALA3QgHADgDAHg");
	this.shape_306.setTransform(421.125,179.425);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#4B433F").s().p("AgZABIArgPIAJALIgvARg");
	this.shape_307.setTransform(109.55,374.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#4B433F").s().p("AgLgXIACgBIAVAtIgRAEg");
	this.shape_308.setTransform(335.125,378.55);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#5D5650").s().p("AgTAJIAcgdIALAKIgbAfg");
	this.shape_309.setTransform(173.175,226.325);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#4B433F").s().p("AgMAdIAFg5IAUAAIgGA5g");
	this.shape_310.setTransform(180.95,249);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#5D5650").s().p("AgaAOIAngoIANANIgmAog");
	this.shape_311.setTransform(380.15,316.175);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#4B433F").s().p("AgVgSIAggEQAJACACAKIgFAhg");
	this.shape_312.setTransform(210.15,289.925);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#4B433F").s().p("AgXAJIAageIAVABIgiAqg");
	this.shape_313.setTransform(167.425,190.125);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#5D5650").s().p("AgegHIAegDIAfAVg");
	this.shape_314.setTransform(282.975,64.875);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#35302A").s().p("AgYgUIAhAGIARAiIgfABg");
	this.shape_315.setTransform(212.6,75.95);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#5D5650").s().p("AgKgIIANgVIAIA7g");
	this.shape_316.setTransform(364.825,71.075);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#35302A").s().p("AgmAIIABgYIBMACIAAAXIgnAIg");
	this.shape_317.setTransform(107.975,384.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#4B433F").s().p("AgUgEIAogPIABAmIgpABg");
	this.shape_318.setTransform(113.95,383.85);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#4B433F").s().p("AgLgKIAXAKIgSALg");
	this.shape_319.setTransform(140.05,379.75);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#4B433F").s().p("AgZgMIALgLIAoAfIgRAQg");
	this.shape_320.setTransform(82.3,372.475);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#35302A").s().p("AgKgmIAVAAIAABNIgVAAg");
	this.shape_321.setTransform(63.4,334.025);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#5D5650").s().p("AgWAWIAgg0IANAMIggAxg");
	this.shape_322.setTransform(372.15,326.45);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#5D5650").s().p("AgOgDIAUgkIAJAxIgBATIAAALg");
	this.shape_323.setTransform(232.55,318.65);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#4B433F").s().p("AgTgZIAggBIAGAnIgNAOg");
	this.shape_324.setTransform(68.2,312.575);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#5D5650").s().p("AgTADIAngRIgaAdg");
	this.shape_325.setTransform(389.125,308.975);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#5D5650").s().p("AgHAXIAAgsIAJgBIAGAtg");
	this.shape_326.setTransform(389.15,300.05);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#4B433F").s().p("AgTAPIARgkIAWABIgZAqg");
	this.shape_327.setTransform(91.975,236.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#5D5650").s().p("AgRgXIAkAdIglASg");
	this.shape_328.setTransform(253.925,195.55);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#5D5650").s().p("AgTgRIAjAGQABAGADAGIgkASg");
	this.shape_329.setTransform(265.85,185.95);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#35302A").s().p("AgUgEIApgZIgTA7g");
	this.shape_330.setTransform(381.925,147.05);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#5D5650").s().p("AgeAIIAxgfIANAMIg0Ajg");
	this.shape_331.setTransform(211.4,143.775);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#4B433F").s().p("AgPAIIgEgmIAnA8g");
	this.shape_332.setTransform(364.025,129);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#5D5650").s().p("AgVATIAbgwIAQAIIgfAzg");
	this.shape_333.setTransform(235.6,119.625);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#35302A").s().p("AgmgKIBNgDIAAATIhMAHg");
	this.shape_334.setTransform(334.0333,97.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#4B433F").s().p("AgegOIAFgGIA4AWIgKATg");
	this.shape_335.setTransform(114.925,303.75);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#4B433F").s().p("AgfgIIAtgMIASARIg/AYg");
	this.shape_336.setTransform(305.075,189.125);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#4B433F").s().p("AgZgFIAtgOIAGAQIgzAXg");
	this.shape_337.setTransform(124.65,326.975);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#35302A").s().p("Ag4gCIBxAAIgDABIgmAFg");
	this.shape_338.setTransform(328.5,376.35);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#4B433F").s().p("AghgIIAOgRIA1AjIgKAQg");
	this.shape_339.setTransform(364.475,110);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#8E807E").s().p("AgWADIAkgUIAJAOIgkAVg");
	this.shape_340.setTransform(86.625,253.725);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#9C918C").s().p("AghAEIAbgZIAjAVIAAAAIABABIgBgBIAFARIgdAFg");
	this.shape_341.setTransform(363.075,131.975);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#5D5650").s().p("AgiAPIA4gqIANAMIg3Aqg");
	this.shape_342.setTransform(384.9,312);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#5D5650").s().p("AgVgXIAOgMIAdAsIgDAbg");
	this.shape_343.setTransform(353.825,206.775);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#4B433F").s().p("AAagbIABAZIgYAbIgdADg");
	this.shape_344.setTransform(327.55,99.25);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#4B433F").s().p("AgWAVIALgyQAGAAAHgBIAVAAIgkA+g");
	this.shape_345.setTransform(113.625,371.15);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#5D5650").s().p("AghgUIBDAXIgCAOIgtAEg");
	this.shape_346.setTransform(83.425,422.075);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#4B433F").s().p("AgyAIIAAgTIBjACIACAVg");
	this.shape_347.setTransform(73.075,419.125);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#4B433F").s().p("AgXgSIAOgPIAhBAIgZADg");
	this.shape_348.setTransform(385.45,130.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#35302A").s().p("AgegRIARgPIAsA9IgfAEg");
	this.shape_349.setTransform(208.125,284.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#5D5650").s().p("AgaAFIAAgVIA1AQIgDARg");
	this.shape_350.setTransform(98.575,286.225);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#4B433F").s().p("Ag2gFIBlgKIAIAIIhoAXg");
	this.shape_351.setTransform(244.775,67.125);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#5D5650").s().p("AgfABIAIgUIA3AWIgGARg");
	this.shape_352.setTransform(109.925,291.775);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#5D5650").s().p("AgZgTIAQgQIAjAfIAAAog");
	this.shape_353.setTransform(167.6,408.525);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#5D5650").s().p("AgUggIASgEIAXBCIgZAIg");
	this.shape_354.setTransform(156.825,364.35);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#4B433F").s().p("AgtgTIARgRIBKA1IgNAUg");
	this.shape_355.setTransform(87.8,376.95);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#4B433F").s().p("AgVgpIAdgBIAOAsIgKApg");
	this.shape_356.setTransform(202.45,276.15);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#4B433F").s().p("AgWgqIAGgGIAnBOIgQAUg");
	this.shape_357.setTransform(359.85,216.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#4B433F").s().p("AggggIAfgBIAiA0IgUAPg");
	this.shape_358.setTransform(329.375,203.25);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#4B433F").s().p("AgegfIAcgBIAhA0IgSANg");
	this.shape_359.setTransform(73.35,363.175);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#5D5650").s().p("AgngCIAKgWIBEAiQgDAKgHAFg");
	this.shape_360.setTransform(102.35,398.05);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#5D5650").s().p("AgUApIAhhSQAGAEACAHIgVBIg");
	this.shape_361.setTransform(182.225,241.925);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#35302A").s().p("AgXAnIAZhOIAWABIgYBOg");
	this.shape_362.setTransform(94.125,230.075);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#5D5650").s().p("AgZAoIAmhRIANAMIgdBHg");
	this.shape_363.setTransform(166.175,235.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#5D5650").s().p("AgNAFIADgrIAYABIgJBMg");
	this.shape_364.setTransform(295.65,72.375);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#5D5650").s().p("AgggVIAQgOIAxA0IgTATg");
	this.shape_365.setTransform(68.65,246.325);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#8E807E").s().p("AglgaIAegDIAtAtIhAAOg");
	this.shape_366.setTransform(328.675,104.775);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#4B433F").s().p("AgTAqIAchTQAJAEACAKIgSBFg");
	this.shape_367.setTransform(64.3,325.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#4B433F").s().p("AgsgBIgBgUIBbAkIggAHg");
	this.shape_368.setTransform(342.45,98.425);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#5D5650").s().p("AgYgdIAVgMIAcBLIgUAIg");
	this.shape_369.setTransform(53.775,392.925);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#4B433F").s().p("AgZgEIgDAFIgHgBIANgOIAUgKIAlgGIABAYIg6Alg");
	this.shape_370.setTransform(72.45,315.35);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#5D5650").s().p("AgugGIBagHIADAbg");
	this.shape_371.setTransform(145.225,398.825);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#5D5650").s().p("AADgoIAHAVIACA6IgXABg");
	this.shape_372.setTransform(262.725,180.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#5D5650").s().p("AgoAGIAGgZIBLAZQgDAKgIAEg");
	this.shape_373.setTransform(354.225,144.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#5D5650").s().p("AgFAWQgfgCgSgpIBuAVQglAWgWAAIgCAAg");
	this.shape_374.setTransform(209.45,386.227);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#4B433F").s().p("Ag1gBIAAgUIBrAnIgeAEg");
	this.shape_375.setTransform(277.45,61.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#5D5650").s().p("AgagLIA0AAIACAPIg3AIg");
	this.shape_376.setTransform(318.175,114.575);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#4B433F").s().p("AgZgTIASgXIAiBUIgeABg");
	this.shape_377.setTransform(337,215.95);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#5D5650").s().p("AgJAlIAAhJIATABIAABIg");
	this.shape_378.setTransform(420.575,172.425);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#4B433F").s().p("AgngeIAUAAIA7AdIgCAXIABAJg");
	this.shape_379.setTransform(136.125,135.075);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#4B433F").s().p("AgegwIAqAnIATAhIg7AZg");
	this.shape_380.setTransform(293.05,73.875);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#4B433F").s().p("AgdAXIgagcIARgSIBeAqIgkAFg");
	this.shape_381.setTransform(226.975,299.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#5D5650").s().p("AgfgMIA/AAIABAQIhBAJg");
	this.shape_382.setTransform(357.9,334.575);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#5D5650").s().p("AgygNIBlAEIAAAXg");
	this.shape_383.setTransform(285.025,77.425);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#5D5650").s().p("AgKgIIgSgUIA5gWIgBBlg");
	this.shape_384.setTransform(355.125,59);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#35302A").s().p("AgpgHIAEgiIBPBEIgNAPg");
	this.shape_385.setTransform(216.075,293.05);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#5D5650").s().p("AgmgBIAEgTIBJAOIgHAbg");
	this.shape_386.setTransform(315.425,103.925);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#4B433F").s().p("AgogcIAmADIAlASQACAHAEAIIgBAVg");
	this.shape_387.setTransform(360,134.975);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#4B433F").s().p("AglAPIA7g5IAQAPIhHBGg");
	this.shape_388.setTransform(153.35,395.925);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#5D5650").s().p("AgIA1IgDhcIANgOIAKBrg");
	this.shape_389.setTransform(168.625,182.625);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#4B433F").s().p("AgUAiIADgrIALg7IAXAAIABBNIADAAIgSAUIgTAog");
	this.shape_390.setTransform(375.8,137.025);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#35302A").s().p("Agag1IA1BbIAAACIgHAFQgGACgDAGIgfABg");
	this.shape_391.setTransform(68.325,304.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#5D5650").s().p("AgxgBIABgWIBiAEIgDArg");
	this.shape_392.setTransform(368.975,138.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#4B433F").s().p("AgeAUIA9g6IgpBNg");
	this.shape_393.setTransform(122.875,377.875);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#4B433F").s().p("Ag9AAIAEgUIB2AUIABAVg");
	this.shape_394.setTransform(139.85,368.075);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#35302A").s().p("AAABGIgUiLIAVABIAUCKg");
	this.shape_395.setTransform(113.825,360.975);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#5D5650").s().p("AgRA8IAAh3IABgBQAeAmAEAWQAGAigmAbg");
	this.shape_396.setTransform(409.8464,238.05);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#4B433F").s().p("AAUhFIgTBiIgUApg");
	this.shape_397.setTransform(199.975,372.975);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#4B433F").s().p("AgTA1QACgJgEgJIAJhjIAiBMIgCA1g");
	this.shape_398.setTransform(349.75,56.75);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#8E807E").s().p("Ag/gIIB/gBIgWATg");
	this.shape_399.setTransform(210.7875,385.075);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#5D5650").s().p("AgIAuIgJhcIAbgCIAIBhg");
	this.shape_400.setTransform(398.425,297.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#4B433F").s().p("AACAzIgbhlIAXAAIAcBlg");
	this.shape_401.setTransform(64.875,343.025);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#35302A").s().p("AgGgvIAZgCIglBjg");
	this.shape_402.setTransform(385.95,139.075);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#D3CDC5").s().p("AgcACIACACIAXgZIAagLIASArIhRAWg");
	this.shape_403.setTransform(41.075,384.7);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#5D5650").s().p("AgwAKIBWgqIALAVIhWAsg");
	this.shape_404.setTransform(214.375,419.075);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#4B433F").s().p("Ag4gCIADgRIBuAOIgFAZg");
	this.shape_405.setTransform(431.675,163.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#4B433F").s().p("AgWA0IAYhrIAVACIgZBtg");
	this.shape_406.setTransform(163.425,245.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#4B433F").s().p("Ag1gEIAIgZIBiAhIgBAag");
	this.shape_407.setTransform(98.8,382.775);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#5D5650").s().p("AgfAXIA4g9IADgDQAFAHAAAKIguBCg");
	this.shape_408.setTransform(413.25,307.775);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#5D5650").s().p("AgcAdQgag1AdgCQAoAGAJgJIARASIgsApg");
	this.shape_409.setTransform(192.473,285.225);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#5D5650").s().p("AgqAXIgfgFQBMhOBHBGIgPAOg");
	this.shape_410.setTransform(161.45,176.2377);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#B8B1AB").s().p("AgxgMIBjgTIAAAwIhhAPg");
	this.shape_411.setTransform(214.925,355.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#35302A").s().p("AAmAfIAAAAIhsggIAAgYIB2gFIAXATIgDAUIgeAWIABAAg");
	this.shape_412.setTransform(83.1,314.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#4B433F").s().p("Ag5gIIBggPIA+AbIjJAUg");
	this.shape_413.setTransform(215.975,359.625);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#5D5650").s().p("Ag8AGIAFgaIB0AUIAAAVg");
	this.shape_414.setTransform(83.925,283.75);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#5D5650").s().p("AgZApIAbheIAYAHIgaBlg");
	this.shape_415.setTransform(323.275,182);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#5D5650").s().p("AgpAXIAyhNQApATgKAaQgGAOgaAeIAAAUg");
	this.shape_416.setTransform(67.156,414.475);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#4B433F").s().p("AgigsIAKgHIA6BWIgiARg");
	this.shape_417.setTransform(139.2,328.65);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#5D5650").s().p("AgVA5IAOh1IAdAFIgTB0g");
	this.shape_418.setTransform(99.225,305.05);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#35302A").s().p("AgngCIBggNIACAYIh1AHg");
	this.shape_419.setTransform(75.975,248.35);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#8E807E").s().p("AgcgjQgIAGAHgGQAFgFABABIA4AvIghAgg");
	this.shape_420.setTransform(297.2741,390.2909);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#4B433F").s().p("AhXgYQAIgGADgJICkA2IgJAag");
	this.shape_421.setTransform(114.025,403.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#5D5650").s().p("AgMBIIAHiPIATAAIAACPg");
	this.shape_422.setTransform(180.25,259.125);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#5D5650").s().p("AgGhPIAHAAIAYgBQAVAwgVAoQgMAXgwAyg");
	this.shape_423.setTransform(230.4188,374.025);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#5D5650").s().p("AgwgoIB4A2IiPAag");
	this.shape_424.setTransform(217.125,350.2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#4B433F").s().p("AgQBfIAAi9IAhgBIgLC/g");
	this.shape_425.setTransform(95.975,216.575);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#9C918C").s().p("AhQADICcgaIAEAfIieAQg");
	this.shape_426.setTransform(290.05,83.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#B8B1AB").s().p("AgXAfQgIgsgJgRIBAgOIACAAIAOBKQgZAPgPAAQgQAAgHgOg");
	this.shape_427.setTransform(330.05,110.8877);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#4B433F").s().p("AhJAxIgPhKIBvgkIBCAtIiIgPIgHBdg");
	this.shape_428.setTransform(341.5,108.925);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#4B433F").s().p("AggAJQgBgiAlg5IASAQIALCVQg/gcgCgug");
	this.shape_429.setTransform(152.7237,187.55);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#5D5650").s().p("AgHAzQgegLgKgPQgIgMAGgdQAKgkACgQIASBQIBIAgIgJAZIgzgSg");
	this.shape_430.setTransform(197.7793,348.825);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#5D5650").s().p("AASgRQgOgDgbABQgfABgLgCQAdgpAkABQAgABAfAiQAIAIgKAcIgPAyQAOhEgqgKg");
	this.shape_431.setTransform(200.5404,344.0988);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#4B433F").s().p("AhJgWIDeAYIAHAVIk3AAg");
	this.shape_432.setTransform(181.475,417.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#35302A").s().p("AhKADIgBgmIAngUIBwBhIgFAOg");
	this.shape_433.setTransform(123.525,385.475);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#5D5650").s().p("AgFBQIgLi0IAQgUIARDxg");
	this.shape_434.setTransform(362.225,231.825);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#B8B1AB").s().p("AhSgYIAegWIApAEIgBgBIATARIBMAqIgXAWIhyAJg");
	this.shape_435.setTransform(95.175,320.375);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#5D5650").s().p("AgRAzQgFgxgBggQAAgSAHgcQAJgeADgQQADgHAGgDIAMAkQAHAVgBAPQgCAmgHA1IgNBcQgBAHgIADIgJhSg");
	this.shape_436.setTransform(422.1546,195.025);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#5D5650").s().p("AgYAAQAFgdAlhZIAJAhIgQDMQgug0ALhDg");
	this.shape_437.setTransform(444.9448,174.55);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#5D5650").s().p("AhvAAIAVgoIA0AVICRAUIAAgBIABABIgBAAIAFAlIggADIiFAAg");
	this.shape_438.setTransform(209.2,380.025);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#8E807E").s().p("AgmAnIgShPQAMACAegBQAbgBANADQAqAKgOBEgAg5goIABAAIAAAAIAAAAIgBAAg");
	this.shape_439.setTransform(199.675,346.075);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#8E807E").s().p("AhGAAQAVgGApglQAmgXApAtIhRBJg");
	this.shape_440.setTransform(360.825,348.411);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#35302A").s().p("AhFAIIgSgQIAyhFIB9CJIgOARg");
	this.shape_441.setTransform(315.275,187.95);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#4B433F").s().p("AglAZIg0hUIAfgBICTBpIABAQg");
	this.shape_442.setTransform(221.05,83.975);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#5D5650").s().p("Ag4A4QgaiLCPAVIgnA4IAAATIg8A1g");
	this.shape_443.setTransform(269.8512,60.438);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#35302A").s().p("AhugJIC+gkIBQAgIAAAdQhKgnhZASQgTAEiJAvg");
	this.shape_444.setTransform(285.9,189.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#5D5650").s().p("AhHAIQgFgoAkgfQAhgdAfAPQAfANASAsIgBABIhjgWIAAB5IgDADQglgkgEgng");
	this.shape_445.setTransform(400.7997,234.0083);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#4B433F").s().p("AgeBxIAIjpIAZgIQAdBJgBA6QgCBFgrA5g");
	this.shape_446.setTransform(158.6037,380.25);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#9C918C").s().p("AgaBeIAQjMIAUAAIARDdg");
	this.shape_447.setTransform(448.725,177.05);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#4B433F").s().p("AhhBFQgFgwAagWQAVgUAzgGQAOgCAWgPIAjgZIAcBGIAEAdQgRgBghgJQgigJgPgBQg4gEgaBAg");
	this.shape_448.setTransform(80.227,324.9875);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#B8B1AB").s().p("AgJAvQgOgEgRgWQgTgagKgLIARgfIB4AfIACAgIgpAWQgUAKgLAAIgHgBg");
	this.shape_449.setTransform(432.45,174.5133);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#35302A").s().p("AgehFIAqhjIATAUIgIE8IgdABg");
	this.shape_450.setTransform(200.9,255.025);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#35302A").s().p("AgGCqIgVlgIAegBIAZBPIgPEgg");
	this.shape_451.setTransform(339.375,238.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#D3CDC5").s().p("Ag7AeQgMhmBpAPIAXgBIAAgBIABABIgBAAIAEAkIhTBSg");
	this.shape_452.setTransform(258.114,190.0801);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#8E807E").s().p("AgvgZQAnhNBZgoIihEdQgChmAjhCg");
	this.shape_453.setTransform(81.4196,228.075);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#4B433F").s().p("AiqBGIAugTQAbgMANgNQAJgJADgVQACgbACgLIgYgxIBnANIgBAAIChgVIlUDGg");
	this.shape_454.setTransform(250.925,206);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#B8B1AB").s().p("AhzAYIgnggIAAgoQBqgBAzAIQBXAPBBAvIgwAcg");
	this.shape_455.setTransform(185.7,412.9697);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#B8B1AB").s().p("AhgAhIAHgGIASAFIgTgHIgJgRIA9hMQAKANAagEQANgCAggHQA6gHgBBMIgBABIgUA4Ih3AGIgmAGg");
	this.shape_456.setTransform(80.0509,305.8919);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#9C918C").s().p("AATBGIAAAAIgngUIgUgUIABAAIgBAAIAAAAIgygUIgegdIA9g2ICLArIAAAAIAeAUQAHACACAIIACBKg");
	this.shape_457.setTransform(278.025,69.075);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#8E807E").s().p("AhsAJIATgSIA9gpIATgTIAzgVIgCABIBJAHIAQBfIhRAOIADgRIgoAVIABAAIhQArIg8ARgAA9AAIAKgJIAFgCIAEgCIAAgHg");
	this.shape_458.setTransform(318.85,385.025);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#8E807E").s().p("AiUABIgOgmIEOgBIAAgCIA3BLIiSAGg");
	this.shape_459.setTransform(186.25,423.925);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#B8B1AB").s().p("AAgBbIgKiUIiBgoIgtgIIABgYIDMAAIgBAAIABAAIAAAAIAUAUIAUApIA0BUIAIAtIgWBFg");
	this.shape_460.setTransform(202.75,84.9);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#8E807E").s().p("AgLCAIgIg9IgOAVIgeACIgcg/IABhkIArgcIAkgdIAQADIAtAPIAQArIATAUQADALAEAGIgHABIgQBTIABAQIgaApIgnAVIgQgCgAgLCAIAAAAIAAAAgAgLCAg");
	this.shape_461.setTransform(367.1,61.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#B8B1AB").s().p("AifAwQgDgGgBgHQAEg9AjgbQAigaA9AJQAjAFA4ANIBmAYIg/BCIi/Ajg");
	this.shape_462.setTransform(283.825,181.2093);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#8E807E").s().p("AgZBaQgVgVgbgjIgtg5IAVgXIBlgYIAUgoIARgUIBFAGIgHA4IgqAYIAXAjIgBgBIAkBMQgbA7glAFIgIABQgiAAgmgpgAguATIAUAMQANAHAJAEQACABAEgHIAKgMIgngZg");
	this.shape_463.setTransform(373.725,151.0172);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#8E807E").s().p("AiXBFIAThjIAngnIDJgUIAnAoIAGAUIgJAAIjzB3g");
	this.shape_464.setTransform(215.3,369);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#8E807E").s().p("ABDCfIABABIgzgUIgdgeIgUgeIgUgUIgogUIABAAIgBAAIAAAAIgdgoQgJAAgBgJIAHheICIAPIhBgsIABgWIAfgGIAYgCIAUAmIAcgRIAmAfIggAKIgIB0IgUADIgVgTIgkgXIgUgOIgJAJIBBAcIATAUIAqATIA7A7IAEAnIgbAag");
	this.shape_465.setTransform(349.175,116.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#8E807E").s().p("AhBBYIgpgeIgoAAIAAgnIgWgdIgEgCQgGg0ApgYQA2gWAVgQIAlADIAdAVIAeAeIgyBMIAyAgIBlAEQAKABAJgEIAAgBIAAAAIAAABIAUAqIgrAwg");
	this.shape_466.setTransform(64.631,416.325);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#B8B1AB").s().p("AkaBjIAGgnIAUgoIAUgUIgBABIAVgTIAygoIAegeIAogeIAAAAIBdg7IEehBQgDAMgBAaQgDAXgJAIQgNANgbAMIguAUIhEAkIgfANIhGAuIhQBAIgTAVIgwBFIgrBjIhDAXg");
	this.shape_467.setTransform(215.75,225.975);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#B8B1AB").s().p("AkCCjIg8gdIgkgrIgCAqIgZgVIgTgoIA8jaIAUgTIAIABIAJgCIAcADIgtBOIgPA8IBvBNIgRA/IBcg8IAJAAICMgeIBlgyIgBABIBQgoIAUgUIApgVIASgTIAVAAIAygoIBFAAIAAgBIABABIgBAAIACA8IgBAAIgtAzIADAcIgnAUIAAgBIgUATIAAAAIgBABIABgBIgogDImQCdgAlAilIgBAAIACgBIgBABg");
	this.shape_468.setTransform(166.025,118.575);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#8E807E").s().p("ADEDTIhlgnIgtgpIABAAIhQhbIgnAyIAAAAIiMjSIAAgdQAZhAA5AEQAPABAiAJQAhAIARABIA7AoIA8A8IgBAAIApAfIAAgBIAUAyIAUATIAUAoIgDAUIAUCNIgKABIgDAAgAhWhLIAEAyIAOgBIgFgyg");
	this.shape_469.setTransform(92.875,347.0445);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#8E807E").s().p("Ag/D3QhKgehFhPIAogIIAqAAICQA1IAFgOIhchPIAqhOIgBAAIABj5QAdgcACABQBPBJB6B2IghAaIh4gUIgDAUIB8AWIgwBeIgYgLIAFAXIAHCsQgqAMgpAAQgxAAgugSgAAuApIAPAHQABABAFgGIgPgIIgGAGgABzD9IABAAIgBABgABzD9g");
	this.shape_470.setTransform(128.575,372.7802);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#8E807E").s().p("AkCEfQgjgHg1gOIhlgbIAPhnIAAgJIB3AFIA8BNIAAh+IFTiEIAoADIAUgUIAAAAIBDgjIAUgSIBQhlIANguIAAABIAAgBIAAAAIAegUIBcAEIgMBeQgIA4gKAlQgIAegPAaQgRAegVAPQhSBBiTBYQgZAPglAOIhCAXQhdAjhbAcIglALQgOACgLAAIgMAAgAiRB5IARABIADg2IgUgBgAgGBkIANgFIgRgsIgLgMg");
	this.shape_471.setTransform(183.275,124.6446);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#8E807E").s().p("AnvHoQgSgEgagSQgbgWgPgJIAAgKIA8AEIB4AYIDJAAIBjgHIDvg6IA/glIAZgLIgGgHQgHADgRAKIkpBTIhiADIlBgDIg8gXIgIgzIgWAkIhrA+IAQheIAdgxIgagTIASg+IAxABIAvAXICkAkICzgBIDIgoIBPgcICjhDICQgnIgSiHIBQhRQAIAAAFgGIBChxIAOkiIDDB3IAXApQgqAigDAFQgSAZARApQAKAagIAuIgNBPIhBAWIh2AJIAJAlIBygpIA6gBIhFBeQAcBHhGA/QhHA/hugCQgTBuhRA9QhBAxh4AZQiqAlh1AHQgoADgnAAQhwAAhjgYgAGqBEIAqAQIAFgQIgqgOgAF9AYIAIAQIAHgGIgIgQIgHAGg");
	this.shape_472.setTransform(292.125,279.1407);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#35302A").s().p("AgMAIIAFgkIAUAAIgGA5g");
	this.shape_473.setTransform(3.075,185.025);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#D3CDC5").s().p("ABRA9Ig5gbQghgQgZgGQgYgGgmgBQgqgBgVgBIgSgLIgogJIABgSIADgJIA4gQIBlgBIA5AnIBlANIA8gJIA4AFIh0BLg");
	this.shape_474.setTransform(197.775,9.875);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#35302A").s().p("AgJgNIATAFIgSAWg");
	this.shape_475.setTransform(158.875,12.725);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#35302A").s().p("AgOgJIAeACIggAQg");
	this.shape_476.setTransform(25.45,128.95);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#4B433F").s().p("AgSAIIAegSIAHANQAAABgEAHg");
	this.shape_477.setTransform(28.5528,122.975);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#35302A").s().p("AgSgCQgBAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAIADgEIAiADIghAQIgFgMg");
	this.shape_478.setTransform(105.145,66.95);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#35302A").s().p("AgZAOIApgdIAKAfg");
	this.shape_479.setTransform(164.475,8.475);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#35302A").s().p("AAVgOIAAAQQAAAJgCABQgHACgMABIgUAAg");
	this.shape_480.setTransform(43.88,106.425);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#35302A").s().p("AgdgIIA4gNIADAaIg3ARg");
	this.shape_481.setTransform(179,3.225);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#35302A").s().p("AgRAFIAHghIAcABIgQA4g");
	this.shape_482.setTransform(7.4,167);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#4B433F").s().p("AgVgJQAAgMALAAIAgAEIgnAng");
	this.shape_483.setTransform(91.9,79.95);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#4B433F").s().p("AgeATIA9gnIgbAqg");
	this.shape_484.setTransform(106.725,64.05);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#5D5650").s().p("AAUgWIADAeIgDAIIgqAIg");
	this.shape_485.setTransform(174.075,4.65);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#4B433F").s().p("AASgeIAEAfIgrAeg");
	this.shape_486.setTransform(76,94.75);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#5D5650").s().p("AghgJIAcgMIAnAJIhCAig");
	this.shape_487.setTransform(147.25,19.65);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#B8B1AB").s().p("AgZAGIAIgcIArgHIgCASIAAAUIgUATIgGACg");
	this.shape_488.setTransform(173.5,9.275);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#5D5650").s().p("AgeAUIAbgpIAiADIgeAog");
	this.shape_489.setTransform(27,125.95);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#35302A").s().p("AgzgQIBnAEIgCAdg");
	this.shape_490.setTransform(52.75,105.575);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#4B433F").s().p("AACgTIAiAEIhHAjg");
	this.shape_491.setTransform(113.475,59.85);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#35302A").s().p("AgiAcIBFg6IgkA9g");
	this.shape_492.setTransform(38.35,111);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#35302A").s().p("AgUAaIAphLIgVBjg");
	this.shape_493.setTransform(11.725,152.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#5D5650").s().p("AgaAqIAhhUIAUAXIgZA+g");
	this.shape_494.setTransform(8.975,159.85);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#4B433F").s().p("AAJgoIAhAEIhTBMg");
	this.shape_495.setTransform(33.975,117.85);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#35302A").s().p("AhEAKICIglIABAgIhNAWg");
	this.shape_496.setTransform(137.025,21.4);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#4B433F").s().p("Ag4AaIBvg8IACAbIhJAqg");
	this.shape_497.setTransform(152.325,14.875);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#35302A").s().p("AgsAmIBZhOIg4BRg");
	this.shape_498.setTransform(95.35,74);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#4B433F").s().p("AgXBJIgFgWIAlh7IAUAYIgfB6g");
	this.shape_499.setTransform(4.675,174.8);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#35302A").s().p("Ag8AvIB2h+IADAgIh1B/g");
	this.shape_500.setTransform(83.925,86.925);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#4B433F").s().p("AhPAYIACgcQAxAhAmgqQAVgZAKgLQAUgTATgBIg5B4IgUATg");
	this.shape_501.setTransform(65.8,104.825);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#5D5650").s().p("AhNCyIgigEIAUiTQALhWAJg8QAIgyAngJQANgEA/ADIA9ARIgFAKIgxAEQgdACgRAHQgLAFgKASQgKAXgHAJIAAAqIglCJIgGBUIgGADg");
	this.shape_502.setTransform(124.9,40.4479);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#D3CDC5").s().p("A3uY5IgShdIgfjGIhmlnIAagpQAHgEACgHIBAhrIAYhnIAqiKIANAVIgGgyIhAhVIiYiTIANifIAwizIAZg/IAVhkIAAABIAVgpIgBABIAohRIABAAIAog8IgBAAIAhgRIAegpQAEgHAAgBIgHgOIBUhOIAkg9IAVgBQAMAAAHgDQACAAAAgKIAAgRIAQgKIBmAiIBTAtIAUgSIA5h5IAsgeICfioIA6hSIApgVIgCACIAhgSIAbgrIBJglIAEAEIDNiHIgLgRIglAFIgUhSIhZAEIAAgpQARAAAiACQAeABASgGQAKgEAKgXQAKgbAGgLIAEgKIBNgXICNhOIATgXIgBACIAVgVIAAAAIA0ACIAmgCIAXAYIhXAtQgzAcgVAcQgQAWADAxQABAcAGA4QAAABA1ACIB3gZIEZhcIB5gMIA5AGIBiACIBTgDIBPAKIDbBAIDxASIBMAPICQAvIA4AKIADgOIg6gZIhOgYIB0hPIB3AOIA/AYQAIAFAKAEIh2B9ICMBFIA7BPIhxgbQjQg3hSgKQikgTiEA0QiQgVAaCMIhMh/IlPClIhgAvIgigGIgVgUIgsgYQgbgPgSACQgwAEhDANIh0AXIihBCIhHAoIhFAyIh3COIABgBIgVAUQhBAxgOAxQgNAyAhBHIATAoIgoA+IABAAIgSAmIggBsQgSBAgQArQgGAQgPAPQgPAPgRAIQjRBqh+DLQhkChhHEJQgSBEgiA8QglBCguAnQg3AvgTAyQgTAyAPA7QAdB0gVBaQgYBhhVBMQgMALgMAZIgTAqIgOgHgA2AJtIAmgHIgahIIACgnIC8h5IAVg7IA6goIAYgXIA4hRQAhgvASgkQAJgSACggQABglABgRIAUggQBDgjAThGQAMgqgDhdIgNgqIgIg9IBGgeIgHgSIhiAgIhQABIg8A2IgbClIgiB5IAAAAIhQCBIAAABIgVAiIiJCrIhSAiIgIACIgBAHIgzAVIAAApIAlAbIAXANIAAAAIAAABIAAgBgA5PEUIAJBPIAXgDIgGhPgA4RC8IgkAdIgLATIAZgFIAlgYIAOgagA2GhxQAHARABALQACASgBAaIgCAqIABAcIgYAaIgVArIANAIIAcghQAGgDABgGIApg+IATgmIASgEQBJAZAfgxQAKgRAKggIARgyQAchEABgPQADgwg9gXIgJAAIADiLIA3gKIApgfIgBABIBbAAIABgTIhZAAQgUghgfAMIgbAMQgPAIgLgBIgXgRIgfAMIAcAdIgBAiIhxB6IABgCIgfApIgeBQIAAAAIheDzIAFAgIAbglIA8igIANAbgAutgBIAvALIAFgQIgwgPgAwQpAIABASIByAAIAkgTIgigGgAlpxIQh5Alh6BNQh5BNhJBUQhPBbAEBEQBQAJBDgVQBEgWA9g2QA9g3BjhLIClh+QAYgSAkgfIBHg9QgegHgiAAQhFAAhXAbgAEj1nQhxAkgjBOQAwAeCCgPQCEgQAcgpQAHgJgFgXQgGgXgKgHQgjgagzAAQgpAAgxAQgAkc1jIAtBRIATgLIguhRgAlT0rIgCADIAGAPIAGgPQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgEACgA1AgkIABgBIAAABg");
	this.shape_503.setTransform(174.475,169.875);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#4B433F").s().p("AgVAMIAVgaIAWASQgCAHgHAEg");
	this.shape_504.setTransform(8.8,258.55);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#35302A").s().p("AgTgOIAAgBIAnABIgCAeg");
	this.shape_505.setTransform(51.875,423.7);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#35302A").s().p("AgOgBIANgUIARAEIgBAmIAAABg");
	this.shape_506.setTransform(48.4,419.975);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#4B433F").s().p("AgVADIACgeIApAdIAAAbg");
	this.shape_507.setTransform(55.875,425);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#5D5650").s().p("AgcAVIAXgqIAiADIgaAog");
	this.shape_508.setTransform(7.175,261.95);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#4B433F").s().p("AgqAjIA1hZIAgADIg/Bpg");
	this.shape_509.setTransform(13.075,253.5);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#35302A").s().p("Agag8IAgABIAVB4g");
	this.shape_510.setTransform(25.025,346.175);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#5D5650").s().p("AgFA2IgVhQIAYgcIANAHIAQBmg");
	this.shape_511.setTransform(22.925,334.675);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#4B433F").s().p("AgVg6IAZgBIASBbIgWAcg");
	this.shape_512.setTransform(20.375,325.925);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#5D5650").s().p("AgbAxIAahkIAdABIgYBmg");
	this.shape_513.setTransform(16.975,243.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#4B433F").s().p("Agcg7IAZgBIAgB4IgdABg");
	this.shape_514.setTransform(14.75,294.075);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#35302A").s().p("AgdhhIAdgCIAeDFIgaACg");
	this.shape_515.setTransform(17.725,310.05);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#4B433F").s().p("AgjhFIBKAWIgYAaIgBgCIgNAeIgHA7IggAEg");
	this.shape_516.setTransform(36.825,387.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#35302A").s().p("AgHALIhVgnIAigEIA6ABQAhACAWAFQAKACAKARIASAbIgaALg");
	this.shape_517.setTransform(34.025,379.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#35302A").s().p("AgmB9IAOj6IA/BVIgvCmg");
	this.shape_518.setTransform(20.725,225.375);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#35302A").s().p("Agxh3IAgABIBDDtIgYABg");
	this.shape_519.setTransform(9.275,276.075);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#4B433F").s().p("AgigaQAFgoA2gPIALCgIgiADQgqhFAGgng");
	this.shape_520.setTransform(24.5435,368.05);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#35302A").s().p("AiegJIAAgbIDEAlIB5AhQgfgDgyADIhQADIgCAAQhgAAg6gug");
	this.shape_521.setTransform(73.95,428.8753);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#35302A").s().p("AhLh9IAfgDIAUAYQALAPAFALQAWAuA2BxIADACIAFAaIgNAUg");
	this.shape_522.setTransform(40.575,406.85);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#4B433F").s().p("AAHgJIAcAFIhFAOg");
	this.shape_523.setTransform(321.575,462.75);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#8E807E").s().p("AhQBWIgcgFIgcgmIAchKICHgwQBWgOARATQARASgVBSIgHgBIhaAoIABgBIhbAWgAhTAAIAHASIAygRIgDgSgAAbglIgKAMIANgJIAYgJIgFgHg");
	this.shape_524.setTransform(333.1926,453.6652);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#35302A").s().p("AgLAOQgEgFgDgJIASgQIATAQIgOARg");
	this.shape_525.setTransform(367.075,46.8);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#35302A").s().p("AgOALIACgcIAbASIgRARQgHgBgFgGg");
	this.shape_526.setTransform(365.475,45);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#35302A").s().p("AgQgEIATgLIAOAPIgPAQg");
	this.shape_527.setTransform(375.35,54.75);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#35302A").s().p("AgLAAIANgQQAJADABAKIgQAUQgFgGgCgLg");
	this.shape_528.setTransform(376.825,56.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#35302A").s().p("AgIgQIARAFIgBAcg");
	this.shape_529.setTransform(409.05,113.475);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#4B433F").s().p("AgcACIAUgXIAlAVIgTAWg");
	this.shape_530.setTransform(351.9,37.125);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#35302A").s().p("AgWACIAOgRIAfAdIgBACg");
	this.shape_531.setTransform(369.875,48.35);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#35302A").s().p("AgRgUIABgCIAiAhIgTALg");
	this.shape_532.setTransform(373.85,52.05);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#35302A").s().p("AgQAMIABgcIAfAFIABAdg");
	this.shape_533.setTransform(297.725,34.75);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#35302A").s().p("AgdgIIA5gJIACAaIg7AJg");
	this.shape_534.setTransform(210.975,7.075);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#35302A").s().p("AgdgPIA7ANIgVASg");
	this.shape_535.setTransform(442.975,152.475);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#5D5650").s().p("AgUAJIAAgbIApAJIgBAcg");
	this.shape_536.setTransform(294.025,34.05);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#35302A").s().p("AgnALIAEgfIBLAQIgBAag");
	this.shape_537.setTransform(241.975,24.65);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#4B433F").s().p("AgjABIABgbIBGAdIgUAYg");
	this.shape_538.setTransform(347.45,34.625);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#35302A").s().p("AgcgJIAWgTIAjAXIgBAig");
	this.shape_539.setTransform(195,4.725);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#35302A").s().p("AgVAIQgKgDgIgFIACgcIBNAdIgBAcg");
	this.shape_540.setTransform(340,31.85);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#35302A").s().p("AhFAJIACgcICJAMIgBAbg");
	this.shape_541.setTransform(284.975,32.975);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#4B433F").s().p("AgvgeIBZApQAHAHgCAKIgbADg");
	this.shape_542.setTransform(433.8063,148.95);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#4B433F").s().p("AggADIADgdIA+AaIgDAbg");
	this.shape_543.setTransform(332.95,29.075);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#4B433F").s().p("Ag7gBIAFggIByAjIgCAgg");
	this.shape_544.setTransform(261.975,29.85);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#35302A").s().p("AgYgZIAHgoIAqBqIgUAZg");
	this.shape_545.setTransform(420,129.225);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#5D5650").s().p("AgzAMIACgeIBlAJIgCAcg");
	this.shape_546.setTransform(272.975,32);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#4B433F").s().p("Ag4gVIATgYIBeA+IgDAcg");
	this.shape_547.setTransform(358.55,41.55);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#5D5650").s().p("AgyALIABgiIBkAUIAAAbg");
	this.shape_548.setTransform(202.925,6.525);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#5D5650").s().p("Ag0AAIABgbIBoAYIgFAfg");
	this.shape_549.setTransform(251.175,26.9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#4B433F").s().p("AgqAdIADgdIAPglIAdgCIAnArIgEAgIhSAEQgDgFADgGg");
	this.shape_550.setTransform(233.9682,22.1);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#35302A").s().p("AgzgfIAWgUIBRBlIgeACg");
	this.shape_551.setTransform(229.275,13.075);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#5D5650").s().p("AgEAJIg4gFIgBgaIB7AZIgWAUg");
	this.shape_552.setTransform(220.05,7.55);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#4B433F").s().p("AgxATIA+hHIAlBpg");
	this.shape_553.setTransform(421.125,138.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#35302A").s().p("AgyADIgTgTICLAEIgCAdg");
	this.shape_554.setTransform(322.9,27.625);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#4B433F").s().p("AgpgqIABgdIBSBnIgHAog");
	this.shape_555.setTransform(414.05,119.425);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#B8B1AB").s().p("AgogPIAWgPQADgKgIgHIAUAJIAmAfIAGAKIgoAtg");
	this.shape_556.setTransform(440.375,154.825);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#35302A").s().p("AgWgwIAZgoIATAUIgSCdg");
	this.shape_557.setTransform(373.8,77.025);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#5D5650").s().p("AgkA0IgBgQIAQhTIAHgCIAQgVQAtAngMAlQgJAagrAng");
	this.shape_558.setTransform(377.8109,62.975);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#5D5650").s().p("AhaAuIgBgeICkhLIATAUIhzBOIgWAVg");
	this.shape_559.setTransform(308.575,31.925);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#35302A").s().p("AgLgJIAXADIgDAQg");
	this.shape_560.setTransform(247.1,481);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#35302A").s().p("AgQgLIAhgBIgQAYg");
	this.shape_561.setTransform(185.475,479.45);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#35302A").s().p("AgOADIAXgRIAGAIIgQAVg");
	this.shape_562.setTransform(400.625,390.95);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#35302A").s().p("AgGAAIANgGIgHANg");
	this.shape_563.setTransform(402.2,389.55);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#5D5650").s().p("AgFgFIALAGIgFAFg");
	this.shape_564.setTransform(201.575,475.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#35302A").s().p("AgJAJIATgTIAAABIgSAUg");
	this.shape_565.setTransform(188.95,471.05);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#5D5650").s().p("AADgEIADADIgLAHg");
	this.shape_566.setTransform(399.525,326.4);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#4B433F").s().p("AgKgFIADgEIASAFIAAAOg");
	this.shape_567.setTransform(388.925,438.85);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#35302A").s().p("AgDgBIAHACIgBABg");
	this.shape_568.setTransform(385.65,351.9);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#4B433F").s().p("AgMAJIAFgTIAUAVg");
	this.shape_569.setTransform(204.725,430.975);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#35302A").s().p("AgOAHIATgUIAJAKIgVARg");
	this.shape_570.setTransform(399,344.925);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#35302A").s().p("AgPAEIASgTIANANIgSASg");
	this.shape_571.setTransform(375.2,425.25);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#35302A").s().p("AgNAEIAVgRIAGAGIgQAVg");
	this.shape_572.setTransform(404.7,338.925);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#35302A").s().p("AgQgDIAEgGIAeACIgfARIgDgNg");
	this.shape_573.setTransform(395.2,315);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#4B433F").s().p("AgDADIAEgGIACAGg");
	this.shape_574.setTransform(439.05,222.95);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#A9A29D").s().p("AAAADIgDgFIAAgBIAHAHQgEAAAAgBg");
	this.shape_575.setTransform(452.4,200.4);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#5D5650").s().p("AACgFIAEAEIgLAHg");
	this.shape_576.setTransform(445.525,224.425);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#35302A").s().p("AAIgeIADAhIgVAcg");
	this.shape_577.setTransform(459.1,220.075);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#9C918C").s().p("AgJAJQgJgHACgKIAiAQIgCABg");
	this.shape_578.setTransform(377.9888,344.975);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#35302A").s().p("AgLATIAWgrIABAcIgSAVg");
	this.shape_579.setTransform(406.75,335.65);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#35302A").s().p("AgOATIAdgmIgCAng");
	this.shape_580.setTransform(376.4,333.95);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#35302A").s().p("AgMgEIASgVIAHAGIgWAtg");
	this.shape_581.setTransform(413.1,326.375);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#5D5650").s().p("AgIAMIAJgaIAHAGIgMAXg");
	this.shape_582.setTransform(400.65,324.675);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#35302A").s().p("AgKARIgBgSIAXgUIgPArg");
	this.shape_583.setTransform(414.8,322.15);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#4B433F").s().p("AgHAGIAOgSIABABIgFAYg");
	this.shape_584.setTransform(187.175,473.325);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#35302A").s().p("AgUgHIApgEIgCAXIgngTg");
	this.shape_585.setTransform(109.9,443.1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#4B433F").s().p("AgOABIADgHIAaAJIgDAEg");
	this.shape_586.setTransform(386.625,437.525);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#35302A").s().p("AgHgOIAPAXIgIAGg");
	this.shape_587.setTransform(353.425,434.9);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#4B433F").s().p("AgFgMIAfADIgzAWg");
	this.shape_588.setTransform(417.675,425.175);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#35302A").s().p("AgPASIAfglIgDAng");
	this.shape_589.setTransform(424.8,414.1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#5D5650").s().p("AgQgIIACgBIAfAIIgGALg");
	this.shape_590.setTransform(381.275,346.775);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#35302A").s().p("AgbAGIgCgUIA5AHIACAWg");
	this.shape_591.setTransform(242.975,453.075);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#35302A").s().p("AgegJIAFgIIA5AXIgJALg");
	this.shape_592.setTransform(233,471.2);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#35302A").s().p("AgdAHIACgVIA5AHIgBAWg");
	this.shape_593.setTransform(204.9,484.975);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#35302A").s().p("AgOAcIAdg4IgFA5g");
	this.shape_594.setTransform(450.85,233.075);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#4B433F").s().p("AgHgNIAXACIgfAZg");
	this.shape_595.setTransform(418.6,371.375);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#4B433F").s().p("AgPAMIAfggIAAApg");
	this.shape_596.setTransform(388.325,333.725);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#35302A").s().p("AgmALIA4gVIAVASIhNADg");
	this.shape_597.setTransform(193.875,468.925);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#4B433F").s().p("AgNABIASgQQAJAMAAABQgEAFgMANQgLgOAAgBg");
	this.shape_598.setTransform(315.9752,430.25);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#35302A").s().p("AgZARIAzgkIgUAng");
	this.shape_599.setTransform(419.675,422.225);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#4B433F").s().p("AgJgVIAcACIglApg");
	this.shape_600.setTransform(424.175,418.05);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#35302A").s().p("AgWATIAmgoIAHAHIgpAlg");
	this.shape_601.setTransform(395.95,347.85);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#35302A").s().p("AgXAQIAlgpIAKAKIgmApg");
	this.shape_602.setTransform(401.925,341.925);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#4B433F").s().p("AgUAVIAogyIABAqIgeARg");
	this.shape_603.setTransform(443.9,218.25);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#4B433F").s().p("AgXAEIAngVIAIANIgmAXg");
	this.shape_604.setTransform(322.575,425.8);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#5D5650").s().p("AgYADIACgSIAtALIACAVg");
	this.shape_605.setTransform(237.7,452);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#4B433F").s().p("AgWADIAtgkIgsBDg");
	this.shape_606.setTransform(412.075,430.525);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#35302A").s().p("AAbgbIACAeIg5AYIA3g2g");
	this.shape_607.setTransform(407.025,433.6);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#5D5650").s().p("AgXAHIgCgWIAzAQIgEAQg");
	this.shape_608.setTransform(248.375,453.9);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#35302A").s().p("AghgIIAIgMIA7AoIgUABg");
	this.shape_609.setTransform(238.725,473.875);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#4B433F").s().p("AgVAbIAsg4IgQA7g");
	this.shape_610.setTransform(440.15,337.225);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#5D5650").s().p("AgfAbIAAgeIAWgZQAGgBAHABIAcAlIgpAUg");
	this.shape_611.setTransform(319.075,460.8125);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#4B433F").s().p("AgcgNIA7ANIg9ANg");
	this.shape_612.setTransform(287.025,462.25);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#4B433F").s().p("AgtAEIABgMIBaAAIgJAQg");
	this.shape_613.setTransform(333.725,423.25);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#4B433F").s().p("AAAgnIAUAUIgnA7g");
	this.shape_614.setTransform(417.9,315.975);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#5D5650").s().p("AgVAAIAMgLQAHgHAFgDQADgBAIAHQAJAHgBACQgDAFgGAIIgMAPg");
	this.shape_615.setTransform(311.0553,446.2688);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#35302A").s().p("AAcgIIAEADIg/AOg");
	this.shape_616.setTransform(390.8625,350.6625);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#5D5650").s().p("AgbgLIAtgRIAJAPIg2Aqg");
	this.shape_617.setTransform(392.65,332.875);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#4B433F").s().p("AgXAIQgKgWAigeQAGAKALgBIAHAmIACAPIgBAYIgEADQglgSgIgTg");
	this.shape_618.setTransform(413.5486,299.325);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#4B433F").s().p("AgUAWIAnhIIACAfIgoBGg");
	this.shape_619.setTransform(409.975,330.95);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#5D5650").s().p("AgLAvIAChVIAVgMIgSBlg");
	this.shape_620.setTransform(446.875,219.15);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#35302A").s().p("AgJAsQghgiAOgWQAKgPApgQIAKANIgdBKQgGgCgHACg");
	this.shape_621.setTransform(319.006,453.55);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#5D5650").s().p("AgTAnIAThOIAUBPg");
	this.shape_622.setTransform(166.125,424);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#35302A").s().p("AgeA7IAeh2IAfADIgiB0g");
	this.shape_623.setTransform(448.075,318.025);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#35302A").s().p("AhIAOIABgbICQAPIAAAMg");
	this.shape_624.setTransform(375.3,354.375);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#35302A").s().p("Ag3AFIACgaIBtArg");
	this.shape_625.setTransform(151.325,458.125);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#35302A").s().p("AgSAaIgEgiIAWgbIAXBAIgFAHg");
	this.shape_626.setTransform(228.075,466.575);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#35302A").s().p("AhOALIABgXICcAZg");
	this.shape_627.setTransform(211.975,449.575);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#35302A").s().p("AAAAsIgOhCQAAgKgEgHIABgYIAkB/g");
	this.shape_628.setTransform(418,307.575);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#4B433F").s().p("AAFAhIg2hKIBjBQIggADQgEgGgJgDg");
	this.shape_629.setTransform(202.025,424.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#4B433F").s().p("AgngXIALgMIBFArIgTAbg");
	this.shape_630.setTransform(459.6,196.8);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#35302A").s().p("AgMBaIADi0IAWACIgBCzg");
	this.shape_631.setTransform(452.65,286.9);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#4B433F").s().p("AgzAGIAAghIBnAaIgDAdg");
	this.shape_632.setTransform(367.05,447);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#4B433F").s().p("AgpAZIBRhJQgBAHADAKIgBBOIhQACg");
	this.shape_633.setTransform(363.95,351.1);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#35302A").s().p("AgnAxIAyhiIAdACIgzBhg");
	this.shape_634.setTransform(436.825,344.975);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#35302A").s().p("AgsAiIBMhSIANANIgbA0IgvAgg");
	this.shape_635.setTransform(395.95,396.1);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#4B433F").s().p("AAAgzIAbABIg1Bmg");
	this.shape_636.setTransform(445.025,329.1);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#4B433F").s().p("Ag0ALIBegqIALAXIhaAog");
	this.shape_637.setTransform(303.925,438.7);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#35302A").s().p("AhIAYICRg8IAAAaIiHAvg");
	this.shape_638.setTransform(328.575,446.725);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#35302A").s().p("AgwgyIAXgCIBKBpg");
	this.shape_639.setTransform(178.875,473.125);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#9C918C").s().p("AgdA+IAAhNIAuhDIANBCIgUBQIABgBIgWAUg");
	this.shape_640.setTransform(414.85,313.6);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#4B433F").s().p("AgDg7IAcABIgPBQQgCALAJAHIgpAUg");
	this.shape_641.setTransform(375.25,341.875);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#5D5650").s().p("AhDAAIBugZIAZACQg0AsgXAEIgHABQgWAAgfgag");
	this.shape_642.setTransform(199.2,434.4794);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#4B433F").s().p("AhBAAIgGgLIAVgSIB6A2IgYAFg");
	this.shape_643.setTransform(451.075,155.225);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#4B433F").s().p("AhIgjICRAqIgDAVIABAIg");
	this.shape_644.setTransform(194.85,482.8);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#4B433F").s().p("AgzAeIAZhOIATAAIAMAoIAZAAIAWAUIg8Alg");
	this.shape_645.setTransform(242.85,480.825);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#5D5650").s().p("ABagcIgBAYIizAhg");
	this.shape_646.setTransform(195.1,451.175);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#4B433F").s().p("AgcBPIAgigIAZABIgbCig");
	this.shape_647.setTransform(450.975,304.1);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#4B433F").s().p("Ag9BAIBfiFIAdABIhhCKg");
	this.shape_648.setTransform(429.4,356.95);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#A9A29D").s().p("Ag4gBIBkgkIANAqIhkAhg");
	this.shape_649.setTransform(321.925,437.55);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#35302A").s().p("AgRgTIgYgCIA1hCIAbAGIADCpg");
	this.shape_650.setTransform(422,372.15);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#4B433F").s().p("AhgglIBEABQAnAAAbgCQApgCAMAXQAIAPgCAnIgXACg");
	this.shape_651.setTransform(166.5868,464.1378);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#4B433F").s().p("AAfgMQglgSg0AfIgfgBQBIhWBYAvIATATIgBBNQgYg3gigOg");
	this.shape_652.setTransform(402.875,314.0831);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#4B433F").s().p("Ah2AeIBQhMIAuAlIBvAYIAAAgg");
	this.shape_653.setTransform(303.975,458.875);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#35302A").s().p("AgYicQAtBXAEBFQAEBTg1BKg");
	this.shape_654.setTransform(428.7173,396.55);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#5D5650").s().p("AgBAWQhDgBgtglIAEgFIDfAAIgBAmQhGAFgmAAIgGAAg");
	this.shape_655.setTransform(213.125,477.9773);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#4B433F").s().p("AiVg8IErBfIgBAbg");
	this.shape_656.setTransform(130.85,452.45);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#35302A").s().p("AhWByICejwIAPAPIigDuIgNgNg");
	this.shape_657.setTransform(384.225,412.25);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#4B433F").s().p("AASARQgRgRhVAMIAAgZIAwhpIB5C0IhHA5QAVhTgRgTg");
	this.shape_658.setTransform(344.375,444.425);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#4B433F").s().p("AiXAKIACgmIEpASIAEAhIkaAGg");
	this.shape_659.setTransform(210.925,466.825);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#4B433F").s().p("AgICIIgJgkIgRjdIApgpIAcE5IgLAMg");
	this.shape_660.setTransform(453.2,178.125);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#35302A").s().p("AhOBtIgchtIAIgHIDAhmIANANIhFA3QgoAggeAUQggAXADAQQAEAPAjALIAAAig");
	this.shape_661.setTransform(364.175,436.575);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#4B433F").s().p("AAHDQIgTicQgLhbgFhBQgCgVAFggQAIgjACgSIAYABIAVGkg");
	this.shape_662.setTransform(450.95,256.975);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#35302A").s().p("Ah2g/IARAcIEOgzIgCAbIg9ATQgkAKgbAGQhRASgkAPQg9AbghAzg");
	this.shape_663.setTransform(267.175,469.575);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#35302A").s().p("AieAmICyhFIAAgPICNgVQh7B5jGAOg");
	this.shape_664.setTransform(388.1,443.025);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#A9A29D").s().p("AiTAcIgWgWIABACIgUhPIAnABIAOAmIClAoICSgGQAIACAFAHQgBAIABAIIgEAUIhvAZg");
	this.shape_665.setTransform(184.9625,427.25);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#A9A29D").s().p("AgbBeQhagGAGiRIBAABIAjgQIATgVIAWgBIApAUIgBAAIArAkIgEAUQgCAMgFAEQgrAqgWAUQgkAjgZAAIgCgBg");
	this.shape_666.setTransform(408.9592,403.553);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#A9A29D").s().p("Ai7gIIATgbICzgiICfACIASBEIjYA+IgpgBIhyAIg");
	this.shape_667.setTransform(202.9,457.725);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#A9A29D").s().p("A21dYIABAAIgogUIAAAAIh5ghIAqgwIAugEIADgOIhEgYIAAAAIgVgSIhjgCQAZgeAGgPQAKgagpgTIgegeIgegUIAAAAIgegiIgHAfQgVAQg2AVQgpAZAGAzQg1hygYguQgFgLgLgPIgUgYIAJg8IBSgWIgSgrIgSgdQgLgRgJgCQgWgFgigBIg6gCIgMihIAIgcIgBgwIABABIgljgIATgqQALgZAMgLQBWhMAXhhQAWhageh0QgPg7ATgyQATgyA3gvQAugnAmhCQAhg8AShDQBHkJBkihQB+jLDShrQAQgIAPgPQAPgPAGgQQAQgrAShAIAghsIASgmIAoAAIAHAeIAPgGIgWgtIgVgIIAUghIAZAVIASABIBPA+IgQBoIBlAbQA1AOAjAGQAPADAWgFIAlgKQBcgdBegiIBBgYQAlgOAagPQCShXBShBQAWgQAQgeQAPgbAIgeQAKglAIg3IAMhfIhcgEIgQheICAAkIgBgQIiUhqIgRgiIBhgvIFNilIBMB/IASALIAeAeIAyAUIAUAUIAoAUIgBAAIBnAbIA8gZIAJhNIgZgBIgDAsIgrgnQgDgIgGgCIgegUIAAAAIgggWIhsgpIAng4QCFg0CjATQBSAKDRA3IBxAbIASAVIAoAMIACg1IAVACIAnA7IAAgBIAcA/IAdgBIAXAnIAAAAIAHAbIAKgYIAngWIAbCJIAAAAIATAnIA8A9IAAAAIAoAmIC0BlIAAgBIAoAVIARAiIBNByIAdBcIgrAvIBjAiIAAAAIAfAVIgBgBIBEA+QAEAEAAAHIAqBBIApgtIByAfIgVAkIgpApIgVAAIgJghQgmBZgFAeQgLBDAvA0IA2ARIAJAjIgEBTIAAABIjbCLIgUAoQBXFIiBFUQgLAfgZArIgrBJIgHgnQAHgFABgKIgPgbIgJAhIAAAAIAAABIAAgBQgjAfAKAXQAIASAmATIg5A+QhagvhHBWIgFAHIAEANIgnAnIgoAVIgVApIg8A7IABAAIgfAnIgVB4IguABQgDgKABgIQgpgtgnAXQgpAlgVAIIA8AzIACAYIgpAWIBWBnQpLIwtuAPIgCAAIhqAUIhkhRIAAABIgHgVIAxgcQhCgwhWgPQg1gIhqABIgkgfIgQAQIA0A3IAnAhIhSAvIABgBIgSBPIjAgPQhygKhMgRQg4gOiCgsQh6grhJgPIDxEqIgpAEIAAAAgAkHcBIAoADIgigRgAkvbKIAKAXIBXgtIgLgVgAtObXIAhAAIAAgIIghAAgA2HXrIDsBeIAJgaIimg3IhFgjgAtTR8IAQBGIgIDrIg8A6IhbAHIBfAWIBIhHQAsg6AChFQABg6gdhJIgYhEgA24VQIBqAjIAmAIQBFBPBLAeQBTAgBggaIgIisIATgMIAwhfIgBgWIAigaQh7h2hPhJQgBgBgfAcIAAD6Ig+A7IgmAUIgpAPIhNgCIhjgigA9eWdIAeBIIAVgIIgehNgAI8XIIAjggIg5gwQgCgBgFAFQgGAGAHgGgAMLUlIgTAUIg9AoIgTAUIgUBRIA8gRIBRgrIB1gRIgQhhIAlgFIAHAxIASgFIgWguIhxABIACgBgAk2WNQAXABAngYIgBAAIA3gXIgFglIiTgVID0h4IgcCiQAwgyANgXQAVgqgVgwIgdgTIgogoIg+gbIAAgyIAsgGIh4g3IgXBRIACAsIgqAhIgoAoIgnCMIA5AqIACgBQASAqAfABgA5BThIAiAlIBPA6IAOgUIh0hWgA1eScIBkAmIgLA0IgsAPIAFAOIAwgTIAlg/IgUiLIgTgVIgUgoIgUgUIgUgyIAAAAIgpgeIABAAIg8g8Ig8goIAAAAIgDgdIBygJIAXgWIhMgrIgUgRIABABIgmgYIgWgUIAUg4IAJAIIgIgJQABhNg5AHQghAHgOACQgaAEgKgNIg9BNIgshKIAGBrIAaA1IACAAIgWAOIguCGIAABPIAcBmIAXAiIABgiIgdhnIAAhNIAShHIAdgnQAGgBADgGIA7gmIBuAgQgMAIgYASQgWAPgQACQgyAGgVAUQgbAXAGAwIAPAeICMDUIAIAEIgHgFIAngxIBQBaIAAAAgAPGTWIAIAFIAFgWgAPYS7IgCAEIAIgFQgFAAgBABgA6gRxIAsBBIASgNIgig1IgSgUgAnXPwQgGAfAIAMQAKAOAfALIA0ASIAIgYIhIghIBdACIAPgyQAKgdgIgIQgfgighgBQgkgBgeApIABAAQgCAQgKAjgA6yRDIAGADIAGgGIgFgHgAhtQvIAdAIIAKAHIgHgJIgZgSgAy6OqIAaAwIAGgxIgUgSgAR7OAIBBgJIgBgRIhAAAgAwoLnIAXAkIAhBhIAkgRIhVh8IgQgLgAg7L8QAPAJAbAVQAZASASAFQCFAfCdgKQB2gICqgkQB3gZBCgyQBQg9AUhtQBuACBHhAQBGg/gchHIBFhfIABgZIAOhPQAIgvgLgaQgQgpASgZQADgEApgiIgRjxIg9h5Ig5hRIgTgIIAHAUIBCBgIASAVIAeBdIALC1IjDh3IgZhPIgvhtIg6hdIgggnIiRieIgxBFIgvALIhPggIA/hDIhngYQg3gMglgGQg8gJgiAaQgkAbgDA/IgkgHIgCg7IgHgUIgOBRQhqgPAMBnIgBAyIhpgMIAZAwIkeBBIhdA7IAAAAIgoAeIgeAeIgyAoIgVAUIABgBIgUAUIgpBQIgYASIgiBTIgMDJIAbAAIAAiPIAGg6IAVhIIARgcQAFgCAJAAIAlCPIBDgXIAYDwIAiBVIArBLIAnAqIBHAzIAYASIAbAdIgSA/QgCAJAAAJIgBAyIgQBdIBrg+gAW/J2Ig4AqIg6A+Ig6BaIANAJIA4hYIA8g8IA5grIAbgegAyaMhIggAdIAggDIA0gYIgGgQgAx4KWIAVAUIAUAJIgIgVIgUgVIgWgHgA2UKFIAZADIATh1IgegEgAyuJgIAEAEIADACIAHgFIgGgHgAzMJTIAKgTIg5gWIgUgFgAYfHTIAJBeIAbACIgIhigAXMIDIAAAtIAQABIgGgugA0zHIIA6ATIAGgRIg5gXgAn2GjIgFAOIAdgNIAtgrIgQgSQgKAKgpgHQgdADAbA2gA5UF9IC0AXIAzANIAEgSIg3gRIiwgcgA4TBOIAJAPIAlgXIgJgOgAqvi+IgTAWIgSAWIgmBSIgaBsIAVADIAahsIAehJIBAhLIgLgLgA7RgUIAvA4IB3gHIgDgYIhhAMIgygzgA2fgCIgVATIgFAPIAIgNIATgUIAIgPgA4CgpQgHAEgDAIIgNAUIAbgIIAYgXIAGgWgAYfi5QgkAfAFApQAFAnAlAjIAUASIBWABQAngcgHgiQgDgWgggnQgSgrgfgOQgKgFgLAAQgWAAgWAUgA5hjPQgiBDABBmICjkeQhaAogoBNgA10hNIAGAGIAIgOIgHgGIgHAOgA2vmHIAAC+IgaBPIgSAlIAPAHIAZgrIAahPIALjAgAcEq9IAVBDQgDAPgJAfQgHAbAAATQABAhAFAxIAKBSIAoAxIAGgGIgSgcIgTgaIANhcQAHg1ADgnQABgOgIgWIgMgkIgLg4IAAhIIgUgBgAtaqpQgHAFgDAHQgmA5ABAjQACAuBBAbIA6gDIAtgfIAjgrIgKhtQghghgjAAQgnAAgpAqgAAvo8IAGAEIABgHgAMnpZIAZAOIAbhmIgYgHgAc/reQAKAMATAaQARAWAOAEQAOAEAZgNIApgWIgCggIh5gfgAdEs7IBtAXIAFgaIhvgNgAROv0IBHAOIAtAXIAuA6QAbAjAUAVQAtAtAkgFQAmgGAbg7IglhMIACABIATg8IAAAAIAmhkIgihBIgQgYIgdghQgBgHgJgBIgngnQgDgIgHgEIgjgTIAEAVIAwApIAoAuIAhApIAWA1IgGArIhGgHIgChNIgfgtIgTgVIgkgZIAHAOIAQAYIAVATIATAhIgLA8IhjgDQgEgJgCgHIAdgFIAHgHIgLgJIAAgBIgpg8IhPhTIAIh0IA9AeIA7AjIALgQIhig8IgmgfIgxgVIgYACIhcglIhNACIg1A4IALA5QAJARAIAtQAPAeAxgfIATAMQABAKAJAAIAeAoIAnAUIAUAUIAVAeIAdAeIAzAUIgBAAIACAAIgBAAIBQA6IBhAaIAFAjIhnAYIg3gOIhMgagAn7ulIAGAHIAVgLIBDgSIAggOIgEgMgAlkvgQAFAGACAAIAIgFIgHgGIgIAFgAj0wrIgVATIgzAgIALAQIA0gkIAWgSIAJgUgAjFxFIAGAGIAEgCIAEgEQgFgFgCgBgAhqylIgIAVIAVgIIAIgWgAhBzfIgGAWIATgKIAfg1IgQgIgALy0YIA4gIIgCgQIg0AAgALL2RIBIAXIAHgcIhKgNgAEd5yIBFAkIBEANICfgPIgEghIidAbIg2gHIhLghgABf8PIhlAKIAFAXIBogYIAMgQgASwRJIAAAAIAAAAgA6sKyIAIgFIgDAHgA6sKygAyHxOIAAAAIAAAAg");
	this.shape_668.setTransform(239.95,246.2958);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#A9A29D").s().p("AgdAMQACgIgCgHIgBgIIA7AJIABAOg");
	this.shape_669.setTransform(204.95,486.825);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#B8B1AB").s().p("AgKAeIAAg7QAKACAHgDIAEAWIgEAkIgIADg");
	this.shape_670.setTransform(1.125,183.025);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#5D5650").s().p("AgoAJIBRgRIgFALQAAACADAEg");
	this.shape_671.setTransform(236.075,487.075);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#4B433F").s().p("AgcATIgCgPIABgWIA8Alg");
	this.shape_672.setTransform(210.925,486.075);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#35302A").s().p("AhFAVIBggpIArATIgIADIgKAAIhQATg");
	this.shape_673.setTransform(234.95,485.925);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#5D5650").s().p("AgSAVIAAhPIAJABIAJgDIATAVIgHBkg");
	this.shape_674.setTransform(1.9,191.975);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#4B433F").s().p("Ag8gHIgDgGIAFgFIB3AAQgCAKAFAIIgWASIhkABg");
	this.shape_675.setTransform(187.875,1.875);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#4B433F").s().p("AgdhfIA7BbIAABjg");
	this.shape_676.setTransform(469,174.45);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#4B433F").s().p("AhagJIAAhkIAeAoICXCSIgDAhg");
	this.shape_677.setTransform(9.125,205.05);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#4B433F").s().p("AgtBiIgdg4IBuiKQAHgIAMgKIAUgRIAAA8Ih1DLg");
	this.shape_678.setTransform(464.45,207.175);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#8E807E").s().p("AqTZzIg8gmIg6gHIiRgrIgGgDIACgHIgiABIAAABIhLhqQABgogHgPQgNgXgoADQgcACgogBIhDgBIABABIhvgtIkthgIAAABIgogUIAAgBIACgYIjykqQBKAPB6ArQCBAsA5AOQBMARByAKIDAAPIAmABIgBgBIACABIgBAAIAWAVIDeAsQAkAeAYgFQAYgEA0gtIgVgWQgCgHABgIICNgZIgBABQNvgPJKowIhVhnIAogWIAAAAIDjgCIAAgMIiRgRIABgxIAugBIApgUIAbAAIAbATIAGgMIgggIIgigRIAOhRIACgoIgBAAIA9g7IAUgoIApgVIAmgnIAggSQA0ggAmASQAiAPAYA3IASAWIABARIgTAVIg/B0IgWATIhgBoIg8ASIA/gPIBAg4IBMhUIBAh1IAQgrIgBAAIAog8IgliAIgCgQIAqhJQAZgrAMgfQCBlUhYlJIAUgoIDciLIADAGQABABAEAAIgIgIIADhTIBfBXIATgcIhGgrIgck6IAUgkIAXgFIBBApIANAeIA8C/IAABkQgcAWgLANIhwCLIAeA4IgTA+IgBAIIgIABIgcAWIgxBgIgKA1QgGAgACAVQAFBBALBcIAUCcIgCC1IghCiIg5DdIAAAAIgtA5IgzBjIhgCGIg2BDIgIAcIAggaIA8BrIAAE6IACgBIggAlIgJAsIAAAAIg0AkIgUAaQABAHgIAAIguAkIg4A4IAAgBIiNAVIgTgFIgcgLIgDAJIAbAGIAXAQIizBFIhngaQgkgLgDgPQgDgQAggXQAegVAoggIBGg3IATgTIChjwIAwggIAbg1IAZgkIgOAGIgYARIhNBUIifDwIgTAUIjCBmIgQgYIAkCNIghAgIh6i1IgwBoIiSA+QgpAQgKAPQgPAWAiAjIgXAYIhvgZIgugkIhRBMQgIAIgKgFIg9gNIkPAzIgQgcIgyCXIgVAUIgXgDIgZgBIgNgoIABAAIg8gpIg6gXIgXhBIgYAbIkBgQIDZg/IgShFIiegaIi1A6IgTAcIAEBPIBygJIgCAnIg5AWIgQARIAQgQIFqgJIAlAKIBmA6IgYBPIhhApgAsNX+QAtAmBDABQAnAABMgFIACgnIjhAAIgLgGgAumXmIALAIIAFgZIAEgFIgEAEIAAABgAm+UPIAyANIBoATIADgQIgzgRIg6gIIgugLgAE7S8QgGADgHAHIgMAMIAWAWIANgPQAGgJADgFQABgCgJgHQgHgGgDAAIgBAAgAC7SRIAPAVIBbgpIgKgXgAFrR4IANApIBmghIgOgsgAFbQzIALAOQANgMADgHQABgBgKgLIgSARgAGTQJIAIAPIAogYIgIgNgAHsPvIBTAFIAJgRIhbAAgATvOFQAZACAngkQAWgUAqgrQAFgEADgMIAEgUIgrgkIABAAIgpgUIgWABIgVAVIgiAQIhBgBQgFCSBaAGgARMBYIggAhIAgAIIA3grIgJgPgASvAeIgIALIALgIIAOgYIgHgGgAZ7veIgJANIAMgIIAThmIgVAMIgpAyIALAJIAfgQgAY0vjIAHAAIgDgHg");
	this.shape_679.setTransform(279.9,322.8625);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382,this.shape_383,this.shape_384,this.shape_385,this.shape_386,this.shape_387,this.shape_388,this.shape_389,this.shape_390,this.shape_391,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.shape_397,this.shape_398,this.shape_399,this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412,this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.shape_433,this.shape_434,this.shape_435,this.shape_436,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.shape_442,this.shape_443,this.shape_444,this.shape_445,this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.shape_460,this.shape_461,this.shape_462,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482,this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495,this.shape_496,this.shape_497,this.shape_498,this.shape_499,this.shape_500,this.shape_501,this.shape_502,this.shape_503,this.shape_504,this.shape_505,this.shape_506,this.shape_507,this.shape_508,this.shape_509,this.shape_510,this.shape_511,this.shape_512,this.shape_513,this.shape_514,this.shape_515,this.shape_516,this.shape_517,this.shape_518,this.shape_519,this.shape_520,this.shape_521,this.shape_522,this.shape_523,this.shape_524,this.shape_525,this.shape_526,this.shape_527,this.shape_528,this.shape_529,this.shape_530,this.shape_531,this.shape_532,this.shape_533,this.shape_534,this.shape_535,this.shape_536,this.shape_537,this.shape_538,this.shape_539,this.shape_540,this.shape_541,this.shape_542,this.shape_543,this.shape_544,this.shape_545,this.shape_546,this.shape_547,this.shape_548,this.shape_549,this.shape_550,this.shape_551,this.shape_552,this.shape_553,this.shape_554,this.shape_555,this.shape_556,this.shape_557,this.shape_558,this.shape_559,this.shape_560,this.shape_561,this.shape_562,this.shape_563,this.shape_564,this.shape_565,this.shape_566,this.shape_567,this.shape_568,this.shape_569,this.shape_570,this.shape_571,this.shape_572,this.shape_573,this.shape_574,this.shape_575,this.shape_576,this.shape_577,this.shape_578,this.shape_579,this.shape_580,this.shape_581,this.shape_582,this.shape_583,this.shape_584,this.shape_585,this.shape_586,this.shape_587,this.shape_588,this.shape_589,this.shape_590,this.shape_591,this.shape_592,this.shape_593,this.shape_594,this.shape_595,this.shape_596,this.shape_597,this.shape_598,this.shape_599,this.shape_600,this.shape_601,this.shape_602,this.shape_603,this.shape_604,this.shape_605,this.shape_606,this.shape_607,this.shape_608,this.shape_609,this.shape_610,this.shape_611,this.shape_612,this.shape_613,this.shape_614,this.shape_615,this.shape_616,this.shape_617,this.shape_618,this.shape_619,this.shape_620,this.shape_621,this.shape_622,this.shape_623,this.shape_624,this.shape_625,this.shape_626,this.shape_627,this.shape_628,this.shape_629,this.shape_630,this.shape_631,this.shape_632,this.shape_633,this.shape_634,this.shape_635,this.shape_636,this.shape_637,this.shape_638,this.shape_639,this.shape_640,this.shape_641,this.shape_642,this.shape_643,this.shape_644,this.shape_645,this.shape_646,this.shape_647,this.shape_648,this.shape_649,this.shape_650,this.shape_651,this.shape_652,this.shape_653,this.shape_654,this.shape_655,this.shape_656,this.shape_657,this.shape_658,this.shape_659,this.shape_660,this.shape_661,this.shape_662,this.shape_663,this.shape_664,this.shape_665,this.shape_666,this.shape_667,this.shape_668,this.shape_669,this.shape_670,this.shape_671,this.shape_672,this.shape_673,this.shape_674,this.shape_675,this.shape_676,this.shape_677,this.shape_678,this.shape_679];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,472,488), null);


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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egr8A77MAAAh31MBX5AAAMAAAB31g");
	mask_1.setTransform(281.25,383.475);

	// Layer_3
	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#E6E9EA").s().p("AgdAcQjTgEALg0IHGAAIAFAyQh5AHheAAIgsgBg");
	this.shape_680.setTransform(201.9703,519.97);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#191B21").s().p("AgCANQgxgGghgZICpAWIgCAPQg6gDgbgDg");
	this.shape_681.setTransform(486.95,447.925);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#E6E9EA").s().p("AgfABQgGgeAKgoIAjAaQAQANAKAWQgIAHgCAkQgCAegbAFQgWg1gEgQg");
	this.shape_682.setTransform(131.4507,586.95);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#BECBD1").s().p("AgFADIAKgIIABABIgIALg");
	this.shape_683.setTransform(137.275,627.55);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#191B21").s().p("Ag3DEQAbgJAIgKIAaglQAIgOAAgkQABhBgohUQg0hfgXgsIAJgLQASAAAwgIQAsgIAWABQBHAEgOBdIgJgDIgLgHQgJgVgQgOIgkgaQgLAoAHAfQADAQAXA1IApC9IAAAlIiYA5QgBgXASgGg");
	this.shape_684.setTransform(127.0146,599.8191);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#191B21").s().p("AAdCZQiEgEhUgcQhegegLhTQgIg/ArhiIEJALQAgABBNgCQBFABAkATQBBAhAGBTQAGBSg8ArQgxAkiAAAIghgBgAgYAiQBtACCXgIIgFgyInGAAQgMA0DTAEg");
	this.shape_685.setTransform(201.4097,519.3528);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#456892").s().p("AgEAAQAHgFADAGQgEACgCAAQgDAAgBgDg");
	this.shape_686.setTransform(216.25,131.4497);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#F6F7F7").s().p("Ah7CcQg8gwgGhYQgHhfA7g8QA1g2BQgFQBPgFA3AwQA+A2gBBhQgBBWg6A3Qg0AxhLAFIgOAAQhBAAgxgng");
	this.shape_687.setTransform(219.0185,167.4272);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#456892").s().p("Ai1E/QhJiNATitQAVi3B8iGQCAiMC0gPQhvBVglAfQhNBEgrA9QhrCcBSC6QARAnAVAbQAXAfAfAVQAeAUA9ANQBBANAYAOQBQAuhFA9Qg9A1hLAIQgRACgRAAQiOAAhNiVg");
	this.shape_688.setTransform(189.8849,178.9226);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#BBBCBC").s().p("AgtgaQANhmBRABQg2A9gJAgQgJAggDCCQgdhKAKhQg");
	this.shape_689.setTransform(85.2968,258.7999);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#F6F7F7").s().p("AAGCCQgjgCgageQgdghgFg0IgLgGQAZhCASgdQAhgzAyANQApAKAUAxQASAqgEAtQgFA3gdAeQgZAZggAAIgEAAg");
	this.shape_690.setTransform(96.2372,260.884);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#F6F7F7").s().p("AhOBmQgPgcgNhKQAPhCAPgaQAagxAyAAQAwAAAfArQAdAmgBAxQgBAugaAsQgdAxgrAKQgMAEgMAAQgoAAgWgog");
	this.shape_691.setTransform(128.0767,270.0105);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#456892").s().p("AgfBNQANgTglgTQgigRAYgWIglhNIDMAAQAIAtgyALIhVAGIABAPIBegKQgNAHgKARIgQAfQgSAhggAAIgMgBg");
	this.shape_692.setTransform(484.0862,485.0719);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#456892").s().p("AgsEWQg8gFgOgWQgKgQAAhFQAAhDAEgnQAHg1ATgwIC9AJIAAgTQg+AAgigEQgtgGgwgTQALgWBNACQAnACA5AFIABgPIipgLIgBgNQAJgDA+ACQAtABAagfQgqgFgZgFQgvgKgFgVQgHgiAngZQAkgWAeAJQBDAWASCNQALBUgIBzQgKB9gVAfQgbAmhPAAIghgCgAAAAVQAbADA6ADIACgPIipgWQAgAZAyAGg");
	this.shape_693.setTransform(486.7853,447.1333);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#F6F7F7").s().p("AhfBuQgsgpAAhFQAAhDAsgoQAoglA3gBQA4gBAnAjQAsAmAABEQAABGgrAqQgnAmg5ABIgCAAQg3AAgmgkg");
	this.shape_694.setTransform(504.9,704.0732);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#BBBCBC").s().p("AijEcQAAhUADh3IAFjJQADhvAMgUQAUgiBdACIBaAAQAoAAATAJQApAUAABrIABGvg");
	this.shape_695.setTransform(303.325,605.0718);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#F6F7F7").s().p("AhwEXIAAotIDhAKIAAIjg");
	this.shape_696.setTransform(254.1,604.85);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#E6E9EA").s().p("AgIjmQAAgHACgMIADgTQAQAzgCBWQgBAwgGBcQgBAiAGBkQACBagWAkg");
	this.shape_697.setTransform(379.0103,605);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#E6E9EA").s().p("AhqDmIAJhiIAIkTQADhyAlgYQATgNAngDQAUgBBOAAIikAgIgRI0IgGABQgbAAABhFg");
	this.shape_698.setTransform(365.2717,603.8047);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#F6F7F7").s().p("AghEpQgWgJgEg9QgGhnADhvQAEh0AOhhQAGgtAFgMQAMgfAegHQAugLAHAsQAEAZgGA5QgGDqAADsQg0AIgWAAQgJAAgEgBg");
	this.shape_699.setTransform(344.8155,605.5158);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#BBBCBC").s().p("AhWkJICkghIAaAqIgDAUQgCALAAAIIgCHyIjIASg");
	this.shape_700.setTransform(368.175,603.775);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#BECBD1").s().p("AgXAIQgBggABgVQABgDAGgGQAJgEADgDIAcBwIgJAKIgmABg");
	this.shape_701.setTransform(115.4167,573.75);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#F6F7F7").s().p("AgbigIAJADIAuAoIgIEWg");
	this.shape_702.setTransform(138.725,602.85);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#BECBD1").s().p("AATDMIACgmQAAgXgcgGIAegSIgeg3Igqi9QAcgFACgdQACglAIgIIAJAHIAxFBIABAyIgeAfg");
	this.shape_703.setTransform(135.875,606.525);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#E6E9EA").s().p("ABNBOQAOhchIgEQgVgBgtAHQgwAJgRAAIgehxQAfAEBlAFQBcAHAeAXQAkAagGA+QgDAkgPBHg");
	this.shape_704.setTransform(129.1865,579.25);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#E6E9EA").s().p("ACEGCQhOgHgXgDQh9gPgqgxQgjgpAPgoQALgbAqgjQA5guADgEQAYgbgTgUIhqA1IAAj6IAngBQAWAtA0BeQAoBVAABBQgBAkgHAOIgbAkQgIALgaAIQgSAHABAWICYg4IAAglIAfA3IgfARQAdAHAAAWIgCAnIgLAJIADAEIAJgMIAegfIAxAJQALkKAHiFQAHg4ACgfQAEg5gTgZQgTgYhIgHQhPgFgWgCQg4gMgngFQhHgLgSATQgOAPAEBCQACAiAFA0QgBBggICHIgQDoQgtADAEiKQANiZABgbQADh6AAkpIHmBPIghLJQgcgGg7gEg");
	this.shape_705.setTransform(127.5624,592.55);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#E6E9EA").s().p("ADNBqIADh6QABhGgGgNQgLgWg6gLQiFgGhZgKQiqgTAUg8IHfAwIgRGWIgLABQgIgyAAhIg");
	this.shape_706.setTransform(131.17,467.025);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#F6F7F7").s().p("Aj5ATIAAhXIHzBEIgIBFg");
	this.shape_707.setTransform(132.125,438.8);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#E6E9EA").s().p("AhgBEIg9gCQgugEgLgMQgIgIgIgqQgJgxgEgKICyAYQBsAOBFAGQBGAFAWgPQAYgQAQhCIAADXQi9gUiXgUg");
	this.shape_708.setTransform(127.325,529.4);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#F6F7F7").s().p("Ah2D1IAAoAQAVADBaADQBSAFATASQAXAUACAfQACASgEArIAADFQgBB0gIBRg");
	this.shape_709.setTransform(122.0975,487.725);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#7095B8").s().p("AiQgPQAKgVAwgNQA3gPBPAFQBlAFACAsQgJAHgRAQQgPAOgMACQg0AJhIAJIh8AOQgBg9AHgPg");
	this.shape_710.setTransform(293.0188,402.8217);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#7095B8").s().p("ACCB7QhmgbgbgFIiBgNQhZgJgggXQgdgWABg7QAIhGABgcIIiA6QgBAUACBXQgCBRgXANQgOAIgbAAQggAAgzgLg");
	this.shape_711.setTransform(136.9984,400.5727);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#456892").s().p("ABBCMQnPgZltgrIAPjUQBCAFCXABQCJAFBNAWQAXAHAaAWQAdAZARAHQApATAYgPQAbgaAZgMQA2gZBtgEQB3gEAtAgQAdAUACArQACAvANAPQAZAcAcgHQAcgIAFglIB8gOQBJgIA0gJQAMgCAPgOQARgRAJgHIAlBMQAZAoAuAKIgBAOQhHAQh1gDQiXgEgnADQgoADh2AXQhMAOg8AAIgagBg");
	this.shape_712.setTransform(242.525,406.9122);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#F6F7F7").s().p("AgVCFQgLhBgRgYQgUgbgngOQgxgKgZgIIAEgMQBYgpAhgjQAggiAnhaIAUBMQAOAsAVAZQAQASAoAZQApAZARASQhsgGgjBTQgIAUgOA4QgMAxgMAWIgPhfg");
	this.shape_713.setTransform(200.225,603.95);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#7095B8").s().p("ABuBfQiYgggtgHIhfgFQhCgFgWgRQgdgUgBgmQAEgwABgaIJLAvIAJCMQgeAUg+AAQgqAAg5gJg");
	this.shape_714.setTransform(139.725,362.577);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#456892").s().p("AHeBwQi5gMhQgBQjHgDlMgVQiiAAhYgDQiegFhRgoIgJiMQFQAeHYAUQENALIbASQAeAvgXAoQgVAjguAKQhJAQhzAAIhKgCg");
	this.shape_715.setTransform(250.6161,368.2768);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#F6F7F7").s().p("AkYHAIgImVQgEjzAOihQAGhJA+gJQAlgFBiAHIC2gDQBwgDBHAAIgfN/g");
	this.shape_716.setTransform(299.7953,500.3);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#F6F7F7").s().p("AAOAjQjKgPg1AAIAHgzIERAAQAhAABJgEQA/ABAiAYQgpAuihAAIgagBg");
	this.shape_717.setTransform(203.45,474.8647);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#E6E9EA").s().p("AAsDGQhtgIh6gfQh3gfgSh0QgQhqBIhpIEEANQAlACBagBQBRACArATQAjAQAXAtQAVAqAFA1QAKB6hEAvQg4AnhzAAQgaAAgcgCgAkcAKQALBTBeAfQBUAbCEAFQCaAFA4goQA8grgGhSQgGhThBgiQgkgShFgBQhNACgggCIkJgLQgrBjAIA+g");
	this.shape_718.setTransform(200.6437,519.1209);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#E6E9EA").s().p("AgzEAQh9gDhFgUQg6gQghhMQgfhGAAhZQAAhcAghAQAkhHA+gHQBQgJCCAMIDSAVQBXAGAxAgQBDArgYBRQgahAgtgfQgrgdhFgGQiQgMgvgDQh0gGhMAJQg+AHgjA7QggA2AABMQAABKAfA6QAiBAA5AOQA9APBngBQA6AABsgFQBKgCAegXQAigaADhHQAEhPg7gfQgugZhhgBQhyADg2ABQhgAAgpgWQA1glByAEQBAACB0ALQBwADAgAVQAtAeAABnQgBBOgjAuQgmAyhKAIQhEAHhNAAIgzgBg");
	this.shape_719.setTransform(205.3911,465.6681);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#F6F7F7").s().p("AiXCkQg6g9gDheQgDhdA1hCQA8hJBmAAQBhAAA7BDQA2A8ADBZQAEBXgxBBQg1BHhhAIIgWAAQhaAAg5g8g");
	this.shape_720.setTransform(309.4312,269.3469);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#191B21").s().p("AgLgEIAXgVIgSAzg");
	this.shape_721.setTransform(404.55,665.4);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#7095B8").s().p("Ag+AUIgYgNIAOgbIAVgEICKABIhAAZQglAPgbAIIgDAAQgHAAgLgFg");
	this.shape_722.setTransform(401.175,683.146);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#7095B8").s().p("AgBBAQgGgKAAgHQABgaADglIAFhBIAGCjIgJgSg");
	this.shape_723.setTransform(157.725,191.625);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#191B21").s().p("AhgJFQjEggh3hrQh1hpg5i9IgGiiIAIgaQAWjzCoieQC3isEIAdQCRAeB9BeQB5BcBICCQBJCGACCOQABCZhVCHQhcCSisBGQh1Awh4AAQgyAAg1gJgAlrl1Qh7CGgVC4QgUCtBJCNQBXCmCogTQBKgIA9g2QBFg9hPgtQgZgOhBgOQg9gMgegUQgggWgXgeQgUgbgRgnQhTi7BsibQAqg9BPhEQAkggBwhVQi1AQiBCLgAAOlxQhPAEg1A2Qg7A9AHBfQAGBZA8AwQA2AqBKgFQBLgEA0gxQA6g3ABhXQABhhg+g1QgygshGAAIgPABg");
	this.shape_724.setTransform(217.1013,184.9993);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#7095B8").s().p("AgVAOQgKgfAKgcQAKgbANAVQARAZAIBXIgBABQgjgJgMgng");
	this.shape_725.setTransform(75.2061,271.8454);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#7095B8").s().p("AgQAiQg0gTgWg5IC1BFQggAQgfAAQgXAAgVgJg");
	this.shape_726.setTransform(124.075,292.9755);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#BECBD1").s().p("Ag8BPQhDgCAEgiQBlAFAqgUQAygYAohSIAOABIAABKQgTAOgaAaQgXAVgaAJQgjAMgwAAIgHAAg");
	this.shape_727.setTransform(99.3387,276.3287);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#191B21").s().p("ABIDJQgzghgOhKIAAhKIgEAAQAtixB8ACQBLACAvBCQAsA9gFBKQgEBEgvAwQgrAsg7AMQgRADgQAAQgpAAgigWgABdg5QgOAagPBCQAMBKAPAcQAcAzA8gPQArgKAdgxQAZgsABgvQABgwgcgmQgfgrgwAAQgzAAgbAxgAjwCNQgngKgZguQgXgqgEg7QgFg6APgyQAQg2AhgXQAigYA8ADQA3AEAqAWQA3AeANBBQAEAWAABkIACAAQgoBSgxAXQgjAQhIAAIglgBgAjNiQQgSAdgZBCIALAGQAFA0AdAgQAaAeAkACQAjACAagaQAdgeAFg2QAEgugSgqQgUgygpgKQgKgCgKAAQgmAAgaApgAkuhnQgKBQAdBKQACiCAJggQAKggA2g9IgBAAQhRAAgMBlgAgHAVIABgCIAJABIAAADgAgHAVgAADAUg");
	this.shape_728.setTransform(111.0486,266.5025);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#191B21").s().p("AieFBQgrh9AAiYQgDldCYhsQCDheBIClQA1B4gCCVQgCCPgjB+QguCnhaA8QglAZghAAQhJAAgsh/gAhVEiQgYAYAiARQAlASgNAUQApAGAUgmIARggQAKgRANgHIheAJIgCgOIBVgHQAzgLgJgtIjLAAgAh1gbQgFAmAABDQAABFALAQQANAWA8AFQBsAJAfgtQAVgfAKh8QAJh0gLhUQgSiNhEgWQgegJgkAWQgnAZAIAiQAEAVAwAKQAYAFAqAFQgaAfgsgBQg+gCgJADIAAANICpALIgBAPQg4gFgogCQhNgCgKAWQAvATAtAGQAiAEA/AAIgBATIi9gJQgTAxgGA1g");
	this.shape_729.setTransform(486.1017,455.9327);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#191B21").s().p("AgGDIQhRgBgyg9Qgug2gDhPQgDhNApg5QAtg/BSgGQBdgGA7A9QA1A4ADBTQAEBSgwA6Qg0BAheAAIgDAAgAAFiRQg4ABgnAlQgsAoAABDQAABFAsApQAnAlA4gBQA5gBAngmQArgqAAhGQAAhEgsgmQglgig2AAIgEAAg");
	this.shape_730.setTransform(504.4302,704.0947);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#E6E9EA").s().p("AgJACIAAgDIATAAIAAADg");
	this.shape_731.setTransform(351.85,645.45);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#7095B8").s().p("AgIkAIARAAIAAH5IgRAIg");
	this.shape_732.setTransform(103.75,491.025);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#E6E9EA").s().p("AgmE6QAuABADkgQADj3gQheIAPgBQAZBIgBB2QgBBCgGB/QAAAMAGA+QAFA4gCAgQgFBWg0AAQgJAAgLgCg");
	this.shape_733.setTransform(384.7923,605.5914);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#191B21").s().p("AhoFFQhFgBgVgdQgUgdAHhrQAKhzAAgbIAOAAIgHiAQgDhRAMgvQANgzAggPQAVgJBBgDIB7gHQBUAAAcAcQAdAegFBeQgCAzgKBUIgBCEQgBBRgHA1QgKBMgyANQgTAFglgBIhJgCQg8AFglAAIgGAAgAiKj5QgMAUgDBvIgFDJQgDB3AABUIFHAAIgBmvQAAhrgpgUQgTgJgoAAIhaAAIgIAAQhWAAgTAgg");
	this.shape_734.setTransform(303.1255,604.8521);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#191B21").s().p("ABgE5IjLgCQgaAAgMgHQgQgKABgaIASojQAAgFADgKIAEgSIDxAAQAeAAANAOQAMANgBAfQgFCtgGFZQgBAagMAMQgMALgXAAIgFAAgAhvEQIDhAAIAAoiIjhgKg");
	this.shape_735.setTransform(253.9508,605.4789);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#191B21").s().p("AjmE6QgYgcAEh5IgCi+QgBh1ARhHQARhNAwgOQAegIBUgDQA9gLBZgSQBHgFBLAuQAQBegCD3QgDEggwgBIkhAUQh0gBgbgegAiUkdQgfAHgMAfQgFAMgGAuQgOBhgEB0QgDBuAGBoQAEA9AWAIQANAFBLgLQAAjsAGjrQAGg5gEgZQgFgjgfAAQgIAAgJACgAA3kvQgoADgSAMQgkAYgEByIgIEUIgIBhQgCBMAhgHIDIgSQAXgkgChaQgGhjABgjQAGhcABgwQAChVgRg0IgbgqQhNAAgVACg");
	this.shape_736.setTransform(360.6157,604.4507);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#191B21").s().p("AA6GsQiFgfgngGQhQgEgcgIQgugNgKg8QgNhEAIhzQAMh/ABg6QAFiiAAjYQEcAsB+AUQBoARAVAdQAUAbgEBwIgLF6QgBAkAEBjQgEBWgwAXQgVAKgnAAQgrAAhBgNgAgtBvQgDAEg5AvQgqAjgLAbQgPAnAjApQAqAyB9APQAXADBOAHQA7AEAcAGIAhrJInmhPQAAEpgDB6QgBAagNCZQgECLAtgDIAQjoQAIiHABhgQgFg0gCgjQgEhBAOgPQASgTBHAKQAnAGA4AMQAWACBPAEQBIAIATAYQATAZgEA5QgCAfgHA4IgSGPIgxgJIAHlJQAPhGADgkQAGg/gkgbQgegWhdgIQhkgEgfgFQgDADgIAFQgHAFAAAEQgBAVAAAhIABEwIBqg1QATAUgYAag");
	this.shape_737.setTransform(127.7772,593.283);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#191B21").s().p("ABuI7QiCgJhGgHQh/gLhEgeIAJjKIASgIQAyAtCIAbQCEAbBEgSQBBgRAEiDQABgpgEhCQgFhHAAgPQAMhvAChEQADh9gsgeQgbgRhEgCQhKAAgbgDIjGgVQgNAmAsATQAhAPBNAHIB+ALQBCAIARASIg4ADIAAIWQhXgDg6gEQhtgGgagXQghgcAEhnQAKhwAAgfQAAhggLjDQgLjDAAhhIIhBHIgaG9QgND/gDC9IABBbQgBAqgJATQgPAjhDAAQgTAAgYgDgAkGG2QAHAqAJAJQALAMAuADIA9ADQCWAUC9AUIAAjYQgQBCgXAQQgXAPhFgGQhGgFhrgPIiygXQAEAKAJAxgAjLELIDiAXQAIhRABh0IAAjFQAEgrgCgSQgCgfgXgUQgSgShTgFQhagDgVgDgAhSlNQBZAKCFAGQA6ALALAWQAGANgBBGIgDB7QAABIAIAxIALgBIARmWInfgwQgUA8CqATgAjpm/IHrAyIAHhGInyhEg");
	this.shape_738.setTransform(130.575,485.5457);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#191B21").s().p("AGFDQIkvgRQoEgiqih4IAAj1IRnBlQgGAiAIAUQALAaAjgGQAggFACgXQgEgeADgTQA9gDBcAEICaAGQBaACAUAaQALAOAVBoIAPgCQABg8AEgYQAHgnAlgTQAVgLB1ABQB3ABAXAMQAYANAKAeQAPAqAJAMQAwBDBmgMIAAB1IkfAAIiCgHQhUgFgrAMIhPAcQgfAKgqAAIgUgBgAn4BjQFsArHPAZQBFAEBegSQB2gWAogDQAngDCXAEQB1ACBHgPIAAgPQgtgJgagoIgkhNQgCgrhlgGQhRgEg2AOQgxANgKAWQgHAOABA+QgFAkgcAIQgbAIgZgcQgOgQgCgwQgCgqgcgUQgugfh2AEQhvADg1AaQgZAMgcAZQgYAPgpgSQgRgIgcgYQgZgXgYgHQhMgWiJgEQiYgBhCgGgAwyhIQgBA8AdAVQAgAXBZAJICCANQAbAFBmAbQBeAVAegSQAXgNAChQQgChYABgUIojg6QgBAcgIBGg");
	this.shape_739.setTransform(216.675,404.279);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#191B21").s().p("ABoFBQhogOgcgBIkBgJIAAppQBQAACogEQCSAABjATQBJAOAFBaQACAzgMBwQgBArAICWQgCCGgzAbQgSAJgpAAQgcAAgngEgAhMhiQghAjhYApIgEAMQAZAIAxAKQAnAOAUAaQARAYALBBIAPBgQANgXAMgwQANg5AIgTQAjhUBsAHQgRgSgpgZQgogZgQgSQgVgZgOgsIgThNQgoBbggAig");
	this.shape_740.setTransform(202.1208,603.475);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#191B21").s().p("AAHQyQhxAAijgIIkVgOQgKAAgIgPIAwgDIGuAKQD9AGCvgBQCPAADggHIFvgMQAcAAAHgRQACgGABgeIAXuEIAAjOIqTAYIgFBTIJZgRIgUPJImFACIitAAQgrgBgMgMQgLgNABgrIAZubQABgwAOgOQANgNAxgCIJmgZQAEgkAAgTQADm4AAjcQAAgIgIgMIgPgTIgNARQgIALgBAIIgVCOIlZAAIlZgBQsFgGrsh2QgjgFgOgPQgPgPADgiQACgdAAgpIgBhHIJHAsILFAsICOAJICOAGQDcAHG4AKIA5ACQAhACAYAFQAJACAJAOQAJAPAAALQgKILgXQLIgKFjQAAAdgKALQgLANgeAAIogAGQksAEjKAAIgrAAgAIfADQg+AIgGBJQgOChAFD0IAHGWIIdAAIAfuAQhHAAhwACIi4AEQg4gFglAAQgaAAgQADgAkxshQBYADCiAAQFMAVDHADQBQABC5AMQCmAHBggVQAugKAVgjQAXgogegwQobgSkOgLQnXgUlQgeIpMgvQgBAagEAwQACAnAcAUQAWARBCAFIBfAFQAtAHCZAgQCNAWAyghQBRAoCeAFg");
	this.shape_741.setTransform(224.3321,455.6775);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#191B21").s().p("ACAIzQhrgGiygSQhHgCgogFQhJgIgfgcQg4gyAHiaQATiqACg1IAEkLQACijANhnQANhhB4gEQBEgCCJAUQA0ADCqgCQCZAJAxA4QA0A7gNCsQgGBdgVCYIgLAAIAAElIADBmQAABBgQAkQgbA/hMALQgLABgYAAQglAAhCgDgAl3EgQASB1B3AeQB6AfBuAIQCcALBEgvQBEgwgKh6QgFg2gVgpQgXgtgjgQQgrgUhRgCQhZABgmgCIkEgMQhIBpAQBqgAjxn+Qg+AIgjBGQggBAAABcQgBBaAfBGQAiBMA5AQQBFAUB+ADQBqACBagIQBJgIAmgyQAkguAAhOQABhogtgeQghgVhwgDQh0gLg/gCQhygEg2AlQAqAWBfAAQA2gBBzgDQBgABAuAZQA7AggDBPQgDBHgjAaQgeAXhJACQhsAFg6AAQhoABg8gPQg6gOghhAQgfg6AAhLQAAhMAfg2QAkg7A9gHQBNgJBzAGQAvADCRAMQBFAGAqAdQAtAfAaBAQAYhRhDgrQgxgghXgGIjSgVQhIgHg5AAQgtAAgkAEgAkIiRQA1AADLAPQC3AEAsgyQgigYg/gBQhIAEghAAIkSAAg");
	this.shape_742.setTransform(205.7133,491.4911);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#191B21").s().p("AgKFsQiJgGhthwQhshxgDiJQgEiSB3hsQBzhpCTAAQCvAABjB1QBZBqgFCWQgFCWhfBlQhiBnicAAIgYAAgAiXiYQg1BCACBdQADBeA6A9QBBBEBpgIQBggIA2hHQAwhBgDhXQgEhZg1g8Qg8hDhgAAQhnAAg7BJg");
	this.shape_743.setTransform(308.3833,269.5335);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#F6F7F7").s().p("AgLAAIASgJIAFATg");
	this.shape_744.setTransform(390.425,487.975);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#F6F7F7").s().p("AhBAFQAdgRAkAEQATADAvAOg");
	this.shape_745.setTransform(396.5,689.255);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#F6F7F7").s().p("Ag3AXIBvgvQgIAtglAEQgtgFgVADg");
	this.shape_746.setTransform(418.475,687.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#E6E9EA").s().p("AhKgJQALgIAUADQASACBxAJIivATQAEgSAJgHg");
	this.shape_747.setTransform(153,661.3109);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#BECBD1").s().p("AgsAhIAChFIBXgBQgGA3gRANQgJAHgRAAQgQAAgYgFg");
	this.shape_748.setTransform(93.175,691.8449);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#BBBCBC").s().p("AhLAfIAOgZICEgnIAEAfIABgBQgKAig5ADIhUgDg");
	this.shape_749.setTransform(396.3,668.325);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#BECBD1").s().p("AgMABQABiCAXg3IABFxQgZgzAAiFg");
	this.shape_750.setTransform(54.7995,533.4);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#BECBD1").s().p("Ag8AhIAQgvQAGgRAHgEQAEgBBZgDIgnBFIg5AKg");
	this.shape_751.setTransform(106.05,692);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#E6E9EA").s().p("AgBgBIgvgGQgUgFgQgTICBgLIAoBQIhOAFg");
	this.shape_752.setTransform(360.35,642.2);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#7095B8").s().p("AgjAtQgGgGAOggQALgZglgEIAJgXIBgAUQAIAtgTAPQgOALgkAAIgagBg");
	this.shape_753.setTransform(440.3314,665.936);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#BECBD1").s().p("AhiAPQgKAAgNgDIgYgGIARgNQAKgJAHAAQAzAADOAGIgKAWIgLAFQiUAAhLgCg");
	this.shape_754.setTransform(421.3,662.3737);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#E6E9EA").s().p("AhHgnQAXgBA9gFQA0AAALAfIACAAIgYAVIiDAng");
	this.shape_755.setTransform(397.925,664.25);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#E6E9EA").s().p("AgtgbQAbhABLgCIhfC7Qghg+Aag7g");
	this.shape_756.setTransform(434.9644,684.975);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#E6E9EA").s().p("ACUAvQhdgagqgJQhggOg2gKQhjgRgugcII1BtQgWAGgaAAQgnAAgwgLg");
	this.shape_757.setTransform(118.675,317.7562);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#BECBD1").s().p("AhDA+QgFhRAdgaQAegZBSAPIg1B1g");
	this.shape_758.setTransform(113.0888,676.732);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#BECBD1").s().p("AhRAmQAFgaABgUQABgRgBgdICdAWQgWBHgaAMQgJAEgOAAQgfAAg9gRg");
	this.shape_759.setTransform(119.075,660.2004);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#E6E9EA").s().p("AAZgkIAPgRIAzgPIAJB/IjHAKg");
	this.shape_760.setTransform(399.775,548.625);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#E6E9EA").s().p("AAigTQhWjShvhtQBIgLA1B4QAdBCAhBxQAZA+A7CBQAxB1AHBSQhRjwgxh3g");
	this.shape_761.setTransform(180.275,694.9001);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#F6F7F7").s().p("AhlA3IAhhDQALgYALgGQANgIAhgBIBmgDIgUBtg");
	this.shape_762.setTransform(378.25,665.575);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#7095B8").s().p("AgQARQgzAPgWADQglAEgWgeIgBABIATgzIAiAHQANAEAKAAQBKABCVAAQgbA7gpAKQgJACgKAAQgiAAgtgZg");
	this.shape_763.setTransform(418.8,667.0399);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#E6E9EA").s().p("AmTgyIAOBOQDwgcChgMQDbgSC4gBIs9BSg");
	this.shape_764.setTransform(151.225,744.025);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#BECBD1").s().p("AhiAiQglgEgdASIgUACIAug9IAYAMQAOAIAHgCQAbgHAmgPIA/gaQA5gLAVABQAqACAeAeIgIATIhwAwIhiAEQgtgPgUgDg");
	this.shape_765.setTransform(406.4,684.9957);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#E6E9EA").s().p("AAnAfQERgYBjgKQBHgIBTggICSg8QhLBnjgAaQhGAIhzAEQh8AFggADQmIAmmFAUQDLgWIigzg");
	this.shape_766.setTransform(408,321.425);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#F6F7F7").s().p("AhLBTQgsgBgzgIQAOhCAKgbQASgwAogKQArgLBVALICEASIiXAAIAACJQgtAGgnAAIgMgBg");
	this.shape_767.setTransform(66.7,654.9128);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#F6F7F7").s().p("AiZA9IA1iKID+AdIgkB+IkPgRg");
	this.shape_768.setTransform(53.6,674.575);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#7095B8").s().p("AizA8QgQh2CRgMQBOgGCaARIgnB3IigALQgbACgYAAQhAAAgvgNg");
	this.shape_769.setTransform(86.8952,675.825);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#BBBCBC").s().p("AAAHfIgsu6IAxgJQALETAIDfQACBFARCqQAJCYghBQg");
	this.shape_770.setTransform(460.1214,255.65);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#F6F7F7").s().p("AlfA1QA0hbA2gQQAYgJCNAAIGwAAIgbA6QgdgfgrgBQgVgBg5ALIiLgCIgVAEIgOAbIgtA+QivAAiEgLg");
	this.shape_771.setTransform(392.375,683.6);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#7095B8").s().p("Ai6A1IAAiJICXAAIDeAjQgXBxh9ARQgXAEgYAAQhPAAhjggg");
	this.shape_772.setTransform(87.45,657.4142);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#F6F7F7").s().p("Ai4hIQALAABTgLQBNgLAwgBQCdgEgHBTQgGA8iXAaQgsAIhMAIQhNAHgPADg");
	this.shape_773.setTransform(506.8649,639.9658);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#456892").s().p("ABxBZQgBiigkhdQgyAog4BGQgegegFhAQgGhMgNgbQgSAZgGANQgIAPgJAeIAAi1QAbACBbgDQBSABAWAYQAbAcABBEQABAlgEBEIAEDwQABCMgRBjQAEisgBhcg");
	this.shape_774.setTransform(463.0757,568.875);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#BBBCBC").s().p("AgiIIIAAwUIBDAIIABCAQgYA3gBCEQAACEAaAzIgBIfg");
	this.shape_775.setTransform(52.575,553.75);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#7095B8").s().p("AicC+Qg8gLgkgGIgIgQQAbgXBVhPQBPhIAzgpQCiiFB1gFQgXBHhEBaQhQBjgkAwQg6BShKADIgJAAQgbAAgqgHg");
	this.shape_776.setTransform(157.725,60.2863);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#7095B8").s().p("AkbEcQgHgHgCgFQgSgug4gBQAtkZCmiFQBXhFB3gWQBMgOCYABIg4AdQARAABAgGQA6gBAFAWQkKgdi2CsQioCdgWD0IgMgLg");
	this.shape_777.setTransform(185.9,151.4491);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#E6E9EA").s().p("AmKAbQgpguA7geIARgKIAQgLILOArIAlAaQAAAmghAPQgrAMgVAHIrFgsg");
	this.shape_778.setTransform(203.3349,349.975);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#BECBD1").s().p("AgWBkQjdgCgThEQgih0D1gMQB/gGC/ARIAACwQihALhvAAIgRAAg");
	this.shape_779.setTransform(49.5732,623.6638);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#F6F7F7").s().p("Ag4G9QgShjAIifQALixABhSQgKiFAChVQAEigBCAGQA9AFAACbQABBSgMCBQAABUAFCvQADCcgKBng");
	this.shape_780.setTransform(437.6635,577.3392);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#F6F7F7").s().p("AlpBKQALh1AygdQAlgWCEAFQCkAGFJAHIAACmg");
	this.shape_781.setTransform(447,640.9028);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#F6F7F7").s().p("AhHAAQAFnFABk+ICSANIAAPRQhsg4gcEKQgGA9gHCTQgEBvgIAYIAJsEg");
	this.shape_782.setTransform(382.55,462);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#7095B8").s().p("AhxGOQgOhCADhuQAHh7gBg4IgHizQgDhuAPhEQAJgdAIgPQAHgOARgZQAOAcAGBMQAFA/AeAfQA3hHAzgnQAkBcABCkQAABagECtIAAC8g");
	this.shape_783.setTransform(461.8028,583.225);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#E6E9EA").s().p("ACyKMQgGgSAAgMQABh+AHm5IgLjHQjaAXiiACQAIgXAFhwQAGiSAGg9QAckKBtA4IAFAfIgTAJIAYAKQAQBEArBJQAQAZBFBgQA0BJAXAyQAgBIAABKIgDDDIgFDDQgBA+ADCDQAABzgTBKIgJgeg");
	this.shape_784.setTransform(395.6254,551.1373);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#456892").s().p("AAFIMQgjgCgRgGQgrgQAAhMQAAg2ADhnQAEhtAAgyIAAp6QAXAEA7AFQAzAJAUAZQAZAfgEBbQgBAxgHBOQAAB+AED/QABDhgNCbIhGgDg");
	this.shape_785.setTransform(68.4465,556.1);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#F6F7F7").s().p("ADDJLQAUgPAGgSQAIgXgRg2QgUg5gFgSQg3jGhKiXQgnhOg2hZQgphChBhfQgdgqhVhnQhKhbgig5IChgrQDcDiCSE3QCGEZA/FDQAGAggJAMQgJANgfADQgeACgsAHIhKANQAEgKAVgPg");
	this.shape_786.setTransform(453.9113,140.475);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#BECBD1").s().p("Aj2FuICggKQBIATAGhnQABgggEg3QgGg+AAgMQAGiAAAhCQACh2gahIIgfh2IAqgaIEIgdQgGG5gCB9QABAMAFASIAKAeQhaAtgnAtQgzA6ABBXIkUAgg");
	this.shape_787.setTransform(389.6,601.325);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#456892").s().p("AACEhQgNgPgRglQgcg6gKgRQhKiFhsh8QgYgdhZhPQhLhDgegtQA8gICMA7QCBA2CbBeQCdBfB3BeQCCBoArBIIipAiQhjAThGALQgZAEgVAAQg4AAgZgcg");
	this.shape_788.setTransform(381.075,52.0237);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#F6F7F7").s().p("AkdAyQCBl3EolfQAQgSAPgGQAPgGAXAGQAoAJA8ALIBkARQlDEYi4FfQguBXgrBtQghBSgpB4QgTA4gkB8QglBrg4AzQAGk1B2lZg");
	this.shape_789.setTransform(111.8,150.5435);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#7095B8").s().p("AlwCQIAAlVILhAqIgVFhg");
	this.shape_790.setTransform(199.275,291.2);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#456892").s().p("AiGCpQgBjfgChuQgIhSgFg4QgJhsASgaQAYgjBngQQA3gHBZgHQAVFVgFElQgBAiAIB3QADBvgYAjQgdAqhXAOQhhAJgkAFQgOiJgDjEg");
	this.shape_791.setTransform(478.7164,252.35);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#456892").s().p("AhyJkQj/gPiZguQhwghgag5QgQgjABiKQACjxAjisQA4ABASAuQACAFAHAHIAMALIgIAZIgGBAQgDAmgBAaQAAAHAGALIAKARQA5C9B1BoQB3BsDEAgQCtAdCnhEQCshGBciSQBViHgBiaQgCiNhJiHQhIiBh5hcQh9hfiRgeQgFgWg5ACQhAAFgQAAIA3gdQEVAHCuB3QDNCJAGEGIAHD3QgCCVgjBeQgmBjhdBFQg3ApiHA/IgUACQhYgOlEgTg");
	this.shape_792.setTransform(213.1221,186.5);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#F6F7F7").s().p("AnTEfQAQiIBEitQBUjDAlhjICgAMQgZBEhQCbQhCCNAHBYQBMgjBAiYQA9iwAZg8IE5AAIgCBGQguADgcAFQgkAGgiAOIAEASICGAAQglB9g3BFQgeAngmAFQgLAChOgFIBnkIQg1gQgSANQgMAJgbA5QheDGgjBSIFbAAIBUizQAyhkAxhIIA6gKQhnD4hAETg");
	this.shape_793.setTransform(61.575,715.725);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#F6F7F7").s().p("AnZElQASiPA+imQAbhNBejaICHAYQh/DChLDrQA6ANAUgZQAGgHAdhNIA9ifQAkhcAYhFIGwAPQgEBBgtAMQgKADheAAQgaC5g5A1QgZAYgoAHQgZAFg6ABICBkSQhIAAgSAMQgUANgeBDQgSAmgrBSQgiBKgIA0IBhAKQBCAHAoAAQB+ABAsg9QAegpAchHQAehRARgmQA9iNBqgdQggBihEDBQgzCoAGCJg");
	this.shape_794.setTransform(383.4,721.975);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#F6F7F7").s().p("AjOtwICeAAIgVY+IFHAAIgQARIh9BqIl2Aog");
	this.shape_795.setTransform(378.05,471.45);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#7095B8").s().p("AlVF8QAAhYAvh/QAYg+BCiMQBFiSAagtQBLiABAgTQB6gkBkFbQA6DJAgDzg");
	this.shape_796.setTransform(262.875,51.8353);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#7095B8").s().p("AnxEzQAHg1A0hNQAdgrA7hMQBviWB1hVQB2hTC0gyQBUgWDugrQiDCUhbDRQg/CJhNEAg");
	this.shape_797.setTransform(210.55,51.95);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#BBBCBC").s().p("AtIDKIAAotQHsBPFcArQHFA3GEAQIAACoQl9AAj6gVQhdgIgPAHQgaAMgGBOQgIBugHCsQmZghnmh5gAksEIQAzAUA5gbIi2hGQAWA6A0ATgAlVCnQAuAdA9gLQA8gLArgtQAugwAFhDQAFhKgsg+QgwhBhKgCQh9gDgtC1IgMgCQAAhlgFgWQgMhBg3gdQgqgXg3gDQg9gEgiAZQggAXgQA1QgPAzAEA6QAFA6AWArQAZAuAoAKQgEAiBCABQA1ABAmgMQAagJAYgVQAagaATgPQANBKA0AhgAsZgaQgLAaAKAhQAMAmAkAJIAFACIgEgDQgHhWgRgaQgGgJgGAAQgHAAgFAQg");
	this.shape_798.setTransform(152.475,269.975);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#456892").s().p("AlagHQg8jNhkifIAIgRQBDAGCIAJQB5AKBQAMQBGALA/AwQAhAYBOBMQB7B5BYB/QBmCTAsCOIsCAsQgjjsgwigg");
	this.shape_799.setTransform(327.625,51.75);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#BECBD1").s().p("Am6FfQACiEA4h0QAphVA+h5IBojOIAZgnIAPgLIADgDIADABIAWgwICwgTIAUAAQBwBtBWDTQAxB3BSDvIAPAoQASAzgJANQgJANg3ACQi4ACjaASQiiANjwAbg");
	this.shape_800.setTransform(155.1141,703.875);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#F6F7F7").s().p("AhYJGQgBh3hJi/QhUjdgOhZQgyk5BKlqQAqjTAph1QBPjgBqgoQBognBHDdQApCAAVCsQArFuhmFCIg9ClQglBkgJBHQgKBMgBBrIAAC3QgCGZAAFIIivAIQAAojgDi3gAhDr/QiYBsADFfQAACYArB9QBAC3B7hTQBag7AuinQAjh9ACiQQACiWg1h4QguhphGAAQgnAAgwAig");
	this.shape_801.setTransform(487.6317,491.2825);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#BBBCBC").s().p("ABaGcQjMgBkkgNQiYgHhfgGQiIgIhvgMQiIgJhKgHQiDgMhHgbIo2huQhNgngkgXQg/gpgVg1QFpBOHYAtQCvARKiAvQgMjTgBh0QgBjTA2hmIAUgCIApAVIgQJzQKyAYH3gVQKBgZImhlIhEBMIiSA8QhSAghIAIQhjALkQAYQokAzjLAWQjIAOjtAAIg7AAg");
	this.shape_802.setTransform(278.275,292.0361);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#F6F7F7").s().p("AoMCyQAYhOBZjMIA7imQAsh1AlgiQAjgfBXgFQAwgDBWABQAhgCBjgPQBZgHAhAdQAkAfAmBhIA3COIBBCEQArBXAaA+QBMC4gMByIxsBTQgIiNAyifgAB+jiQhSAGgtA/QgpA5ADBOQAEBOAsA2QAyA9BSABQBgABA2hBQAwg6gEhSQgEhTg1g4Qg1g3hSAAIgRAAg");
	this.shape_803.setTransform(489.6696,706.8729);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#456892").s().p("AmEm9ILchJIAtPHIrsBGg");
	this.shape_804.setTransform(417.45,260.725);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#F6F7F7").s().p("ACMMPQhNgIgzgPQiGgnhBh6Qg8hxgTijQgOhzAGiuQALlkB1j1QAfhCAdgrQApg8AsgdQAxghBWAEQAxADBeANIAAYlIiJgMg");
	this.shape_805.setTransform(49.2704,414.3281);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#F6F7F7").s().p("AA6NxQhogCg8gHQhDgHhDhEQgfgfhEheQhsiWgMjqQgFhPAGh/QAHiuABghQAEkXAOhXQAhjCB4iCQA7hBBhgEQA5gCB8APQBCAFCKAFQB4AIBQAWQiRB3hVDcQg8CbgrD4QgpDuAdD/QAZDgBTEBQgqgCh9gCg");
	this.shape_806.setTransform(445.4238,436.8326);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#F6F7F7").s().p("AkZY9QmNgIkMgcQlugnkehYMAAWgvZQGKBcFiAlIgQALIgQAKQg8AeAqAvIpIgsIABBHQAAApgCAdQgCAiAPAPQANAPAjAFQLsB2MGAGIFZABIFYAAIAViOQABgIAJgLIAMgRIAPATQAIAMAAAIQAADcgDG4QAAATgDAkIpnAZQgxACgNANQgNAOgCAwIgZObQgBArALANQAMAMArABICtAAIGGgCIATvJIpZARIAFhTIKTgYIAADPIgXODQAAAegDAGQgHARgcAAIluAMQjhAHiOAAQivABj+gGImugKIgwADQAIAPAKAAIEVAOQCkAIBxAAQDVABFLgFIIhgGQAdAAALgNQAKgLAAgdIAKljQAXwLAKoLQAAgLgJgPQgJgOgJgCQgYgFgggCIg6gCQm4gKjcgHIiNgGIiOgJQAVgHAsgMQAhgPgBgnIglgaQICAGFUgEQHSgGGEgaIAAABQhSA8g1BmQgjBCgrCDIiXABQhZAAg8gDQgjgCgMAMQgLALgBAhIgbNCIgcNfQgBA2AKAKQALAKA0gFIE1gZIgqAZIAfB3IgOABQhMguhGAFQhaASg+ALQhUADgeAIQgvAOgSBNQgQBHAAB1IACC/QgDB5AYAcQAaAeB0ABQARAUAUAFIAvAFIAJAtQonAjoNAAQiWAAiUgDgAPeYVIAVAAIAAgEIgVAAgA3mPKQgBA6gMCAQgIBzAMBEQALA8AuANQAcAIBQAEQAnAGCGAfQB8AYAsgVQAwgXAEhWQgEhjAAgkIAMl7QAEhwgUgbQgVgdhogRQh+gUkdgsQgBDYgECigAExUcQgHBrAVAdQAUAdBFABQAmAABBgFIBKACQAmABATgFQAxgNAKhMQAHg1ABhRIABiFQAKhUADgzQAEhegdgeQgcgchUAAIh7AHQhCADgVAJQgfAPgOAzQgMAvADBRIAHCBIgOAAQAAAbgKBzgAh2NcQgCAKAAAFIgSIkQgBAaAQAKQAMAHAaAAIDLACQAbABANgMQAMgMAAgaQAHlaAFitQABgegNgOQgNgOgdAAIjxAAIgFASgAsOMuIAAJqIECAJQAcABBpAOQBgAKAdgPQAzgbACiGQgIiWABgsQANhwgDgzQgFhahJgOQhjgTiTAAQioAEhQAAgArFomQh4AEgMBhQgOBngCCjIgEELQgCA1gTCqQgGCaA4AyQAeAcBJAIQAoAFBIACQCzASBqAGQBvAGAcgEQBLgLAbg/QAQgkAAhBIgChmIAAkmIALAAQAUiXAHhdQAMisg0g7Qgwg4iagJQiqACg1gDQh6gShDAAIgQAAgA3QELIgJDKQBEAeB+AMQBHAGCDAKQBpANAUgtQAJgUABgqIgBhbQACi8AOkAIAZm9IohhGQAABhALDDQALDCgBBiQABAegLBwQgDBnAgAbQAbAXBtAHQA5ADBZADIAAoVIA4gEQgSgRhCgIIh/gLQhMgIghgOQgtgUAOglIDGAVQAaADBLgBQBFACAbASQArAdgDB+QgBBEgMBvQAAAPAEBGQAFBDgBAoQgECEhBARQhEASiGgbQiIgcgxgsIAAn6IgSAAgA2vszQKhB4IGAiIEtARQA4ADAmgMIBPgcQArgMBUAFICBAHIEfAAIAAh1QhlAMgxhEQgIgMgPgqQgLgegXgNQgYgMh2gBQh1gBgVALQglATgHAnQgEAYgCA9IgOACIgPhMQgHgegKgNQgUgahagCIiZgGQhcgEg9ADQgDATAEAeQgDAXggAFQgiAGgLgaQgJgUAHgiIxohlg");
	this.shape_807.setTransform(251.8,489.9944);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#BBBCBC").s().p("AjSR4QgWggAIhpQAOhyABgfQgEhkAAg7QAAhtAZgoQATgeBAgnQBLgvARgQQBWhSAahnQAeh6gCivQgCiegaiNQgUhtg8hWQg8hYhfg3Qhkg7iFgfQiFgfiIAEQk3AKieCvQhQBYgsCOQggBkgVCgIgUCEQgPBogDBMQgIDnBgAbIgFARIsah2IAOhkQA3g0AlhqQAkh8ATg4QAph4AhhSQArhsAuhYQC6lgFDkYQGwAuDmASQFuAdEqAAQE3ABFfgcQEkgYFvgvQAhA5BLBbQBVBnAcAqQBBBfApBCQA4BZAnBPQBKCXA3DGQAFASAUA5QAQA2gHAXQgGASgUAOQgVAPgEAKInfA9QkQAijPATIAYPhgABmHIQh2BsAECTQADCKBrBwQBtBxCJAFQCtAJBqhwQBfhkAFiXQAFiXhZhpQhjh2ivAAQiUAAhzBpg");
	this.shape_808.setTransform(272.8672,197.975);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#191B21").s().p("EARfA73QkLgJiFgDQhkAHhAAAQh4ABgegiQgfglAXiAQAhiKAFgjQBnlLC/k6QmDAJnBgKQligInhgVQA0BbA0CCQAJAWBODQIApBwQAWBAALA0QAHAjAEBPQADBKAKAmIhkAUIgVABQg/AIjyAWQi9AQhzAXQlaAJnmgWIjcgIQiFgGhXgHQhwgJgZggQgWgcADh1QAqjUBzkCQAOghDNmjQgegLhKgSQhBgPgegOQhhgsAGh/QAGhrBHg6QBDg3BtAAIAAjRQAIhngBicQgDitAAhWQAMiDgDhEQgHh6hMgrQiwiqgkk/QgcjxA3kxQA6lHCRi5QBQhnBngpQBTghCTgJQhahUglg6QgyhQgFhkQgHiCAGijQADhuANi3QASkAArjSQAxjzBYjNQCumZFElAQFHlFGZiiQG6iuHdAUQHMAUGmDEQGnDFE1FUQFBFhCRHFQBQD4AWFGQAMCnAAGiQABCMgLBFQgQBxg2BSQg1BShYA5QgZARhLAfQhCAagdAaQDBAAB6BHQB/BLBSCsQCaFEgxHzQgXDdhIC3QgwB6gOAwQgaBagBBZQAACUgEEpQgBEEAJC5QBcgEA5ATQBNAaAgBFQApBVgWBaQgWBfhQAsQDPHfByFJIANBPQAGAngEAUQgKAxhaALQiaAUj/AUImIAeQjeAQiqAEQg9AChJAAQh2AAiTgEgEAeOArYQhXAFgjAgQglAhgsB1Ig7CmQhZDNgYBOQgyCfAICNIRthTQAMhyhMi4Qgag+grhYIhBiEIg3iOQgmhhgkgfQghgdhZAHQhjAPgiACIgYAAQhFAAgpACgEAVGA5xQgGiJAzioQBDi/AhhiIgBgDIACAAIgBADIADAGIBgi8QhMACgbBAQgYA4AbA5QhqAfg8CLQgQAmgfBSQgcBHgeApQgsA9h9gBQgpAAhCgHIhhgKQAHg0AjhKQAqhTASgmQAehDAUgNQAUgMBHAAIiCETQA7gBAZgFQAogHAZgYQA5g1Aai6QBeAAAKgDQAtgMAEhBImxgPQgYBFgjBcIg+CgQgdBNgFAHQgVAZg6gNQBLjsCAjCIiHgYQheDagcBNQg9CngTCPIMjATIAAAAgEgV2AscIgPALIgaAnIhoDOQg9B6gpBVQg4B0gDCEIgLBlIM/hTQA2gCAJgNQAKgNgSgzIgQgoQgHhSgxh0Qg7iCgZg+QgihygdhBQg1h5hIALIgUAAQhzgJgSgDQgUgDgKAJQgKAHgEASIgWAwIgEgBgEgoUAzjQhECvgQCHIMAAfQBBkUBnj5IAmhGQhZADgEABQgIAFgGAQIgQAwIAbAHQgxBIgyBkIhUC1IlcAAQAjhSBfjIQAbg5AMgIQASgOA1ARIhnEJQBOAFALgCQAmgGAegmQA2hFAmh+IiGAAIgEgSQAigOAkgHQAcgFAugDQAyAMARgNQARgOAGg3ImSAAQgZA8g9CwQhACahMAiQgHhXBCiOQBQicAZhEIiggMQglBkhUDCgEATCAv7IBigEQAVgDAuAFQAlgDAIgvIAjhOImxABQiNAAgYAIQg2AQg0BcQCEALCvAAIAUgCgEgfKAslQiRALAQB3QBBASBhgHIChgKIAnh4QhwgNhJAAQgbAAgVACgEga9AtHQgdAZAFBSIBUAAIA1h1QgfgGgYAAQgnAAgTAQgEgl+AucIERARIAjh/Ij/gdgEARGArPIgGBXIgOAaIBVADQA5gEAKgiQAWAeAlgFQAWgCA0gQQA7AiAngKQApgLAbg7IALgFQAmAFgMAZQgOAhAGAGQA7AFATgQQATgPgJguIhggUQjCgFhAgBQgHAAgKAJIgQAOIgNgCQgKgfg1gBQg9AGgYAAgEAPJArRQgiABgMAIQgLAGgMAYIggBEIC4AAIAUhuIhnADgEgdqAsFQB9gRAXhyIjfgjIiDgSQhXgMgrALQgoALgRAvQgLAcgOBCQA0AJAsABQArABA1gHQCDAqBfgNgEgahArHQgBAUgFAbQBaAXAagLQAagLAWhJIiegVQABAcgBASgEgdlAnDQEfBYFuAnQELAcGOAIQKZANLEgtIBOgFIEVgfQgChXAzg7QAngtBagtQAThKAAhzQgDiCABg+IAEjEIADjDQABhKghhIQgXgzg0hIQhFhggQgaQgshIgQhEIgJgyIAAvTIiUgMQAAE9gFHGIgJMEQChgCDbgXIAMDIIkKAdIk0AZQg1AFgKgKQgLgKACg2IAbtgIAbtCQABggALgLQAMgMAjACQA9ADBYAAICXgBQAriDAjhCQA2hmBRg8IgBgBQmEAanRAGQlUAEoBgGIrQgrQlhglmLhcgEAVMAnFQgyAdgLB2ILVARIAAinQlKgIilgFIgugBQhdAAgeARgEAjzAmlQgxABhNALQhTALgLAAIAACpQAPgDBNgHQBMgIAtgIQCXgaAGg9QAHhPiPAAIgOAAgEglAAj/Qj1AMAiB1QATBEDdACQB0ABCugMIAAixQiKgMhpAAQgpAAgjABgAacaTQgPBDADBuIAHC1QAAA4gGB6QgDBuANBCIDtAAIAAi8QARhjgBiMIgEjxQAEhEgBglQgBhEgbgcQgWgYhTgBQhbADgbgCgEAgvgDjQhqAohPDfQgpB1grDTQhKFqAyE5QAPBaBUDdQBIC/ACB3QADC3AAIjICvgIQAAlIADmZIAAi3QABhrAJhMQAJhHAlhkIA+imQBllCgrluQgUisgqh/Qg8i8hUAAQgPAAgQAGgAXdZwQgCBVAKCFQgBBTgLCxQgICfASBjIBxAAQAKhngDidQgFiuAAhWQAMiBgBhSQAAiag9gFIgEAAQg/AAgECagEgikAcrQAAAygDBsQgEBnAAA2QAABMAsAQQARAGAjACIBGADQANiagBjiQgEj/AAh/QAHhOACgxQADhbgZgfQgUgZgzgJQg7gFgXgEgEgkRAivIBFAEIgBwSIhEgHgALGbgIF3gnIDIgLIgJiAIgzAQIlHAAIAV4+IieAAgAXtleQhgADg8BBQh3CDghDBQgPBXgEEWQAAAhgICvQgFCAAEBPQAMDqBtCWQBEBdAfAgQBCBDBEAIQA8AGBpACQB9ACApADQhSkCgZjgQgdj+ApjvQAqj5A9ibQBVjaCRh4QhRgWh4gIQiJgFhDgEQhrgOg5AAIgSABgEgkRgHJQgsAdgpA9QgdAqgfBDQh1D0gLFlQgGCtAOB0QATCjA8BxQBBB6CHAnQAzAPBNAIICJAMIAA4mQhegNgxgCIgSgBQhJAAgtAdgAx0o0QBKAHCIAJQBvAMCIAIQBfAGCYAGQEkANDMACQEPACDhgQQGFgUGJgnQAhgDB8gEQBygEBGgJQDggbBLhnIBEhMQomBlqBAaQn3AUqygYIAQpzIgpgWQCHg/A3gpQBdhFAmhjQAkheACiUIgHj4QgHkGjMiKQivh2kVgIQiYAAhMAOQh4AWhXBFQimCEgsEaQgjCtgDDxQgBCKAQAkQAaA4BwAhQCaAuD/APQFEAUBYANQg2BmABDTQABB1AMDUQqigvivgRQnYgulphOQAVA1A/ApQAkAXBNAnQAuAcBjARQA2AKBhAPQAqAJBdAaQBSASA1gNQBHAcCDAMgAPM6JIAdPFILuhGIgtvHgAPDrGIgYvhQDPgTEQgiIHfg9IBJgNQAsgHAegCQAfgDAKgNQAJgMgHggQg/lDiFkaQiTk3jcjiIihArQlvAvkkAYQlfAck3gBQkqAAlugdQjmgSmwguIhlgRQg8gKgogKQgXgFgQAGQgOAFgPASQkpFgiCF4Qh2FYgFE2IgOBkIMaB2IAFgRQhggbAIjnQADhMAPhpIAUiEQAVigAghkQAsiOBQhYQCeivE3gKQCIgECFAfQCFAfBkA7QBfA3A9BYQA8BWATBtQAaCNACCeQACCwgeB6QgZBnhXBSQgRAQhLAvQhAAngTAeQgZAoAABtQAAA7AEBkQgBAfgOByQgIBpAWAgITpAAgAyksKILNA3IAVljIrigqgEghQgOkQHmB5GaAhQAHisAIhuQAGhPAagMQAPgHBdAIQD6AWF9AAIAAipQmEgQnFg3QldgrnshPgAbP7ZIAuO7IATAGQAhhQgJiYQgRiqgDhGQgHjfgMkTgAeo8GQhnAPgYAkQgSAaAJBrQAEA5AJBRQACBvABDgQADDEANCJQAkgFBjgJQBWgOAdgqQAZgjgDhvQgIh3AAgiQAFkmgVlWQhZAHg3AIgEgAqg5oQBiCfA9DMQAwCiAiDrIMDgrQgsiOhmiUQhXh/h8h5QhOhMghgZQhAgvhFgLQhRgMh5gKQiHgJhCgGgEgCZg5sQhBAThLCAQgaAuhFCRQhCCOgYA+QgvB+AABYIKrAAQggjyg6jKQhZk7htAAQgLAAgMADgEgISg4pQi1Axh2BUQh2BUhvCYQg6BLgdAsQg0BNgIA1IJ7BEQBNkAA+iLQBcjQCDiUQjvArhTAWgEAITg4uQAeAuBLBDQBZBPAYAcQBsB+BKCEQAKASAcA5QARAlAOAPQAiAnBdgOQBGgLBjgUICpgiQgrhHiChoQh3hgidheQicheiBg3Qh7g0g+AAIgPABgEgTmgzaQgyAphQBJQhVBPgbAXIAIAQQAkAGA8ALQAyAJAcgCQBKgDA8hSQAjgwBRhkQBDhaAYhHQh1AFikCFg");
	this.shape_809.setTransform(281.267,383.4684);

	var maskedShapeInstanceList = [this.shape_680,this.shape_681,this.shape_682,this.shape_683,this.shape_684,this.shape_685,this.shape_686,this.shape_687,this.shape_688,this.shape_689,this.shape_690,this.shape_691,this.shape_692,this.shape_693,this.shape_694,this.shape_695,this.shape_696,this.shape_697,this.shape_698,this.shape_699,this.shape_700,this.shape_701,this.shape_702,this.shape_703,this.shape_704,this.shape_705,this.shape_706,this.shape_707,this.shape_708,this.shape_709,this.shape_710,this.shape_711,this.shape_712,this.shape_713,this.shape_714,this.shape_715,this.shape_716,this.shape_717,this.shape_718,this.shape_719,this.shape_720,this.shape_721,this.shape_722,this.shape_723,this.shape_724,this.shape_725,this.shape_726,this.shape_727,this.shape_728,this.shape_729,this.shape_730,this.shape_731,this.shape_732,this.shape_733,this.shape_734,this.shape_735,this.shape_736,this.shape_737,this.shape_738,this.shape_739,this.shape_740,this.shape_741,this.shape_742,this.shape_743,this.shape_744,this.shape_745,this.shape_746,this.shape_747,this.shape_748,this.shape_749,this.shape_750,this.shape_751,this.shape_752,this.shape_753,this.shape_754,this.shape_755,this.shape_756,this.shape_757,this.shape_758,this.shape_759,this.shape_760,this.shape_761,this.shape_762,this.shape_763,this.shape_764,this.shape_765,this.shape_766,this.shape_767,this.shape_768,this.shape_769,this.shape_770,this.shape_771,this.shape_772,this.shape_773,this.shape_774,this.shape_775,this.shape_776,this.shape_777,this.shape_778,this.shape_779,this.shape_780,this.shape_781,this.shape_782,this.shape_783,this.shape_784,this.shape_785,this.shape_786,this.shape_787,this.shape_788,this.shape_789,this.shape_790,this.shape_791,this.shape_792,this.shape_793,this.shape_794,this.shape_795,this.shape_796,this.shape_797,this.shape_798,this.shape_799,this.shape_800,this.shape_801,this.shape_802,this.shape_803,this.shape_804,this.shape_805,this.shape_806,this.shape_807,this.shape_808,this.shape_809];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,562.5,767), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
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
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AyQeSMAAAg8jMAkhAAAMAAAA8jg");
	mask_2.setTransform(116.925,193.825);

	// Layer_3
	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#D3CEB4").s().p("AgGAAIAHgGQAEABACAEIgIAIQgFgDAAgEg");
	this.shape_810.setTransform(138.55,122.975);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#D3CEB4").s().p("AgHgBIAHgHIAIAJIgJAIg");
	this.shape_811.setTransform(127.65,131.25);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#C3BB99").s().p("AgHAEIAGgMIAJAIIgIAJQgEgCgDgDg");
	this.shape_812.setTransform(138.825,131.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#D3CEB4").s().p("AgIgBIAJgHQAFAAACADIAAAOg");
	this.shape_813.setTransform(128.3,132.325);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#8E94A3").s().p("AgCAIIgCgLQABgEAEAAIAEAMQgCADgDAAIgCAAg");
	this.shape_814.setTransform(136.7,133.1341);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#8E94A3").s().p("AgEAFIAAgOIAJAJIgBAKg");
	this.shape_815.setTransform(129.675,132.775);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#D3CEB4").s().p("AgJgBIAMgJQACAEAFACIgPAOg");
	this.shape_816.setTransform(137.8,132.55);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#D3CEB4").s().p("AgLAAIAAgLIAXAQIgHAHg");
	this.shape_817.setTransform(137.425,121.775);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#D3CEB4").s().p("AgLAFIAPgPIAIAKIgTALg");
	this.shape_818.setTransform(131.725,125.675);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#D3CEB4").s().p("AgIAEQAAgSALgaIAGBLIgGAGQgMgRABgUg");
	this.shape_819.setTransform(126.624,126.875);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#8E94A3").s().p("AgiAEQAigZAiAVIABAKg");
	this.shape_820.setTransform(132.775,120.6384);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#E8E5D4").s().p("AgeAFIABgKIA6AAIADALg");
	this.shape_821.setTransform(133.25,133.3);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#C3BB99").s().p("AgKAgIgDhAIAJgJQAjAogfArg");
	this.shape_822.setTransform(139.7154,126.975);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#D3CEB4").s().p("AgKgKIAVAAIgMAVg");
	this.shape_823.setTransform(93.375,141.875);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#4B2311").s().p("AgOANIANgWIAJgJQASAbgfAKg");
	this.shape_824.setTransform(94.6639,141.725);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#D3CEB4").s().p("AgQARIADgHQAfgKgSgcIAQABQACAfgBAEQgEASgYADg");
	this.shape_825.setTransform(95.4893,142.65);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#8E94A3").s().p("AgHgEIAPAJIgOAAg");
	this.shape_826.setTransform(86.925,124.2);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#4B2311").s().p("AgEACIADgHIAGAFQABAAgDAGQgGgCgBgCg");
	this.shape_827.setTransform(103.9875,99.85);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#8E94A3").s().p("AgEgTIAGACIADAlg");
	this.shape_828.setTransform(83.725,118.725);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#4B2311").s().p("AgYACIAAgDIAxAAIAAADg");
	this.shape_829.setTransform(97.625,99.175);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#D3CEB4").s().p("AgaAEIAvgUIAGANQgLAQgJADIgGABQgLAAgQgNg");
	this.shape_830.setTransform(100.45,112.9971);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#4B2311").s().p("AgRAWQgRgRAGgVQADgHAIgGQAIgIAFABQAJACAJAGQALAHADAGQADAJgBAOIgBAcIgFABQgYAAgRgPg");
	this.shape_831.setTransform(92.2231,118.5);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#E8E5D4").s().p("AghApQgRgDgJgBIABgcQAAgPAFgIQARgZAhgCQAfgBAgAXIgjAeQgVASgPAKQgEADgJAAIgJgBg");
	this.shape_832.setTransform(96.65,107.6262);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#D3CEB4").s().p("AgFgBQAAgBAGgDIAFAFIgIAGg");
	this.shape_833.setTransform(127.175,365.675);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#E8E5D4").s().p("AgGAGQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBAAABgBQACgHAEgCQABAAADADIAIAEIgMAIIAAAAIgEgCg");
	this.shape_834.setTransform(131.4964,270.6);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#8E94A3").s().p("AAOBZIgTgnQgUgfgEgoQgCgdAEgwQAmgQAHApIAMA6IgBB2g");
	this.shape_835.setTransform(213.3054,243.3124);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#4B2311").s().p("AgBgEIADAGIgBADg");
	this.shape_836.setTransform(204.5,259.075);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#1F1513").s().p("AgJgGIAIgGIALASIgKAHg");
	this.shape_837.setTransform(212.85,249.675);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#1F1513").s().p("AgJgFIAJgIIAJATIgJAIg");
	this.shape_838.setTransform(213.8,251.625);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#1F1513").s().p("AgFgUIALAoIgKABg");
	this.shape_839.setTransform(201.8,225.7);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#1F1513").s().p("AgTgVIAJgHIAOAOIAQABIgIAoIgIACg");
	this.shape_840.setTransform(215.825,255.15);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#4B2311").s().p("AgHA7IACh2IAJAAIAEB3IgPgBg");
	this.shape_841.setTransform(217,247.75);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#F76607").s().p("AhygtICzgmQAIgBAOABIAWADQARAhghAWQgOAKgTAPIghAaIhDAzIgPAHg");
	this.shape_842.setTransform(166.7532,237.3125);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#E8E5D4").s().p("Ag+AdIAOhTQBJAHAXAEQAEABAEAGIAHAKIgIBRg");
	this.shape_843.setTransform(69.4,122.375);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#8E94A3").s().p("AgCAbIgGg4QAEABAEgBIAJA8g");
	this.shape_844.setTransform(144.175,126.7);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#1F1513").s().p("Ag1BdQgegSgOggQgYg0AggxQAfgxA6gBQAMgBAbACIA/BEIAGA5QgNApgaAYQgaAYgiACIgIAAQgcAAgagQgAhJgCQAAASAMASIAGALIAaARIA+ABQAFABADgEIAYgZQAhgqglgoQgBgFgEgBIgZgQQgigWgiAaIBFAGIAQANQAAAFAEADIADBAIgFANIgNAIQgEAAgCAEIg7gBIgKgJQgDgDgEAAIgJgLIgHhLQgMAbAAATgAgZgOIAFAGIAUgLIgIgKg");
	this.shape_845.setTransform(133.073,127.6349);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#4B2311").s().p("AgKgJIAVASIgNABg");
	this.shape_846.setTransform(118.125,101.775);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#1F1513").s().p("AgFACIALgTIgJAjg");
	this.shape_847.setTransform(119.65,123.475);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#8E94A3").s().p("AgPgBIAagJIAFAKIgKALg");
	this.shape_848.setTransform(92.65,145.5);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#4B2311").s().p("AAJgTIABAQIgTAXg");
	this.shape_849.setTransform(118.2,125.675);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#4B2311").s().p("AgGAUIACgnIALAIIgEAfg");
	this.shape_850.setTransform(76.175,121.7);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#1F1513").s().p("AgHAUIACgoIANAJIgFAgg");
	this.shape_851.setTransform(106.05,137.775);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#4B2311").s().p("AABAUIABAAIgOgKIgXgTIAJgKIAPAAIAvAeIgiAJIAAAAg");
	this.shape_852.setTransform(88.925,126.75);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#1F1513").s().p("AgRAaQAZgDAEgSQABgEgDgfIAIgGQAQAogKAPQgJAPgqADg");
	this.shape_853.setTransform(96.0173,142.925);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#4B2311").s().p("AgrAQIBXgnIhJAvg");
	this.shape_854.setTransform(109.85,134.125);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#1F1513").s().p("AgWhFIATAyIAIAoIgBgBIAVAeIAAAAIAAAAIAAAAIABAKIgKAKQgyg1AMhWg");
	this.shape_855.setTransform(83.6942,118.7);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#4B2311").s().p("AgCA7IgTgzIADgJIAZg7IAKAJQAFAFAAADIgSBoIgGgCg");
	this.shape_856.setTransform(83.5271,110.825);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#1F1513").s().p("AhIASIAJgIQAGgEAFgBIB9gZQgcAdgoAJQgPADgUAAQgTAAgXgDg");
	this.shape_857.setTransform(102.425,129.8375);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#1F1513").s().p("AgpgfIAvgIQAWAAAOASIgIAHIgQgBIgJAKIgWAAIAKAVIAIAHIgEAGIgaALg");
	this.shape_858.setTransform(93.625,141.3743);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#4B2311").s().p("AhoB5IAUgOQAMgHAIAAQBSABAthEQAuhEgnhNQgBgCABgFIABgIQAdAgAEApQAFAogUArQgEAIgEAOIgGAYIgPAOIh9AaQgFABgGAFIgJAHg");
	this.shape_859.setTransform(103.7163,118.8);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#1F1513").s().p("AhtCUIAjgKIhAgqIAAABIgVgfIABABIgDgmIAShoQABgDgGgFIgKgJQAeg+BXgMQBTgLAwAqQBFA7ADBNQACBJg0AwIAGgXQADgOAEgJQAUgrgEgnQgFgpgdggIgBAIQAAAFABACQAmBLguBGQgtBEhSgBQgIAAgMAHIgUAOgAhgAOQgIAHgCAHQgHAWASAQQASARAcgCIACgcQABgPgEgJQgDgHgKgGQgKgGgKgCIgBAAQgEAAgIAGgAgWgGQAUAQANgEQAJgEALgQIgGgMgAgmhpQggACgRAZQgFAIgBAQIAAAcQAIABASADQAPACAHgEQAQgKAVgSIAigfQgdgWgfAAIgEAAgAAiiLQABACAHACQADgFgBgCIgHgFIgDAIgAgxiRIAyAAIAAgFIgyAAg");
	this.shape_860.setTransform(100.0787,114.0098);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#8E94A3").s().p("AABCsQgCgZgDgMIggj5IADhHIAQAUQAKAMADAJQAEAQACAYIAGAqIAUCUIAIBjIgLABQgSAAgGgOg");
	this.shape_861.setTransform(64.5,314.113);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#8E94A3").s().p("AgDCTIg6hPIg6hFIgNgTIgMgTIAag4IAKgTIAJgTQAOghAfATIALAJIAPAQIAJAJIAjAYIAZAtIAOAQIBZC3g");
	this.shape_862.setTransform(86.55,296.6562);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#E8E5D4").s().p("AABAIQgDAAgEgDIgIgFIAJgIQAFAAAOAGIgIAHQgDAEgCAAIAAgBg");
	this.shape_863.setTransform(118,246.7031);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#D3CEB4").s().p("AgGANIAFgbIAIABIAAAbg");
	this.shape_864.setTransform(34.25,225.55);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#4B2311").s().p("AgKADIAEgHIARAJg");
	this.shape_865.setTransform(50.05,134.275);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#8E94A3").s().p("AgWgDIADgJIAqANIgEAMg");
	this.shape_866.setTransform(48.475,136.875);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#8E94A3").s().p("AgYAAIAEgOIAtARIgDALg");
	this.shape_867.setTransform(49.075,131.05);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#4B2311").s().p("AgIgFIARABIgSAKg");
	this.shape_868.setTransform(84.2,99.25);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#D3CEB4").s().p("AgLARIALgiIAMAIIgWAbg");
	this.shape_869.setTransform(206.275,310.075);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#1F1513").s().p("AgFAAIABgEIAKABIgIAIg");
	this.shape_870.setTransform(139.625,305.175);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#1F1513").s().p("AgLgMIAPgDIAIAdIgOACg");
	this.shape_871.setTransform(141.65,310.2);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#1F1513").s().p("AgTADIABgNIAmAHIgBAOg");
	this.shape_872.setTransform(134.175,334.2);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#D3CEB4").s().p("AgOAAIATgIQAKgBAAASg");
	this.shape_873.setTransform(115.55,369.9475);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#4B2311").s().p("AgMgKIAJgKIARAmIgPADg");
	this.shape_874.setTransform(140.65,306.8);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#1F1513").s().p("AACgdIAJAAQgBALABAWQgDATgSAHg");
	this.shape_875.setTransform(142.275,330.725);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#4B2311").s().p("AgZAGIABgOIAygCQgGATgQACIgdgFg");
	this.shape_876.setTransform(138.65,334.7);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#8E94A3").s().p("AADAUQgGgCgLgHIgRgMIAOgLQAJgGAGgBQAGAAAKAEIASAIIAAANIgPAJQgHAFgFAAIgCAAgAgHgBIADAGIAIgFIgEgFQgHACAAACg");
	this.shape_877.setTransform(127.375,365.7299);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#8E94A3").s().p("AgHAcQgHgCgJgLIgPgSIAPgPQAKgJAGAAQAGAAAMAIIAcATIgcAUQgLAIgGAAIgBAAgAgHgFQgEACgCAHQAAAAAAABQAAAAAAAAQABABAAAAQABABAAAAQABABABAAQAAABABAAQAAAAABAAQAAAAABAAIALgIIgHgEIgEgCIgBAAg");
	this.shape_878.setTransform(131.95,270.43);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#4B2311").s().p("AABBQIgKieIANgCIAGChIgJgBg");
	this.shape_879.setTransform(142.375,319.675);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#4B2311").s().p("AgNAoIAbhPIgRBPg");
	this.shape_880.setTransform(77.775,110.675);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#4B2311").s().p("AAuAYQgLgJgJgFIhvgxIAqANIArALIAqAJIAsAHIgVAnIgTgQg");
	this.shape_881.setTransform(73.7,100.775);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#C15517").s().p("AgDANIgVgSIAKgLIAnAAIgJAdIgLAEg");
	this.shape_882.setTransform(119.625,101.35);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#C15517").s().p("AgMgDIAcAAIgfAIg");
	this.shape_883.setTransform(139.65,96.2);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#C15517").s().p("AgXgCIAlgDIALADIgxAIg");
	this.shape_884.setTransform(124.65,99.05);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#C3BB99").s().p("AAIA8QgSglgFgUQgJggALgeIAhAzIgBBEg");
	this.shape_885.setTransform(199.1849,224.625);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#8E94A3").s().p("AAyE4IgmgWIgHgEIgRgKIgVgSQgDgDgFAAIgpgoIg7hWIC4hzIgagRIgKgUIgJgKIgDgJIglgzIgQghQgYhPgBgdQgCgdASg2ICKD4IAjAvIAEAXIAgA7IgJAKQgGAGgDAAQgLAAgQgEIgdgGIAWDTIgCApg");
	this.shape_886.setTransform(185.65,234.975);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#1F1513").s().p("AgIgFIANgBIAEAIIgHAFg");
	this.shape_887.setTransform(184.475,231.4);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#1F1513").s().p("AgHgBIAGgGIAKAJIgJAGg");
	this.shape_888.setTransform(185.5,232.375);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#1F1513").s().p("AgGgCIAHgHIAGANIgHAGg");
	this.shape_889.setTransform(180.65,225.225);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#1F1513").s().p("AgHAAIAOgIIABANQgDAEgFAAg");
	this.shape_890.setTransform(163.4,245.025);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#1F1513").s().p("AgHABIAGgIIAJAJIgIAGg");
	this.shape_891.setTransform(177.55,257.325);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#1F1513").s().p("AgIABIAHgJIAKAJIgJAHg");
	this.shape_892.setTransform(180.575,260.35);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#1F1513").s().p("AgHgBIAHgHQAFAAADADIgBAPg");
	this.shape_893.setTransform(181.425,261.4);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#1F1513").s().p("AgHADIAIgIIAHADIgIAIQgEABgDgEg");
	this.shape_894.setTransform(186.025,264.25);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#1F1513").s().p("AgKgEIAIgGIANAUIgMABg");
	this.shape_895.setTransform(181.65,226.675);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#1F1513").s().p("AgJgGIAIgGIALARIgKAIg");
	this.shape_896.setTransform(192.775,226.675);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#4B2311").s().p("AgJAAIAIgHIALAOIgNABg");
	this.shape_897.setTransform(184.025,229.925);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#1F1513").s().p("AgJgFIAJgFIAKASIgEADg");
	this.shape_898.setTransform(186.425,233.725);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#1F1513").s().p("AgFgLIABgBIAKATIgHAGg");
	this.shape_899.setTransform(196.875,233.825);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#1F1513").s().p("AgIgGIAIgGIAJATIgHAGg");
	this.shape_900.setTransform(197.575,235.775);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#1F1513").s().p("AgIgGIAIgGIAJATIgIAGg");
	this.shape_901.setTransform(179.8,223.6);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#1F1513").s().p("AgIgGIAHgGIAKATIgIAGg");
	this.shape_902.setTransform(198.675,237.725);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#1F1513").s().p("AgIgGIAIgGIAJATIgHAGg");
	this.shape_903.setTransform(199.675,239.7);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#1F1513").s().p("AgMgBIAIgJIARALIgHAKg");
	this.shape_904.setTransform(187.325,265.05);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#1F1513").s().p("AgNAAIAIgIIATAJIgHAIg");
	this.shape_905.setTransform(189.275,266.075);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#4B2311").s().p("AgIgJIAQAAIABAKIgPAJg");
	this.shape_906.setTransform(204.25,264.65);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#4B2311").s().p("AgLABIAGgKIARAKIgJAJg");
	this.shape_907.setTransform(184.925,263.55);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#4B2311").s().p("AgKACIABgPIAUAQIgGALg");
	this.shape_908.setTransform(183.225,262.2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#4B2311").s().p("AgLgJIANgBIAKANIgIAIg");
	this.shape_909.setTransform(182.625,228.775);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#1F1513").s().p("AgOgIIAJgFIAUASIgHAKg");
	this.shape_910.setTransform(178.925,259);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#1F1513").s().p("AgRgSIAKgIIAZA0IgBABg");
	this.shape_911.setTransform(194.575,229.925);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#1F1513").s().p("AgTgXIAIgIIAfA5IgIAGg");
	this.shape_912.setTransform(190.575,222.75);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#4B2311").s().p("AgfANIA1goIAKAKIg+Atg");
	this.shape_913.setTransform(167.225,242.75);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#1F1513").s().p("AggAJIAGgIIAlAGIADgoIANAAIAGBDg");
	this.shape_914.setTransform(193.325,266.075);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#4B2311").s().p("AgMg7IANAAIALB2IgMABg");
	this.shape_915.setTransform(194.7,256.7);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#4B2311").s().p("AgVgUIAZgCIADgcIAKgBIAFBDIgKAkg");
	this.shape_916.setTransform(200.65,232.875);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#4B2311").s().p("Ag2A1IAhgaQAUgQANgKQAhgVgSghIAKgJQAUAkgCAJQgCAKgfAWIhCAwg");
	this.shape_917.setTransform(174.9341,234.625);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#1F1513").s().p("Ag1gnIAeAGQAPAEAKAAQADAAAGgGIAJgKIAHgGIAbAsIhYgHIAFBBIgOABg");
	this.shape_918.setTransform(197.825,245.575);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#1F1513").s().p("AghA1IgNgoIAKhhIBFAAIAOBhIgLAAIgMg5QgHgpgmAQQgEAwACAcQAEApATAfIgHAGg");
	this.shape_919.setTransform(212.725,240.425);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#1F1513").s().p("AhqAOICXhcQAHgFAKgLIAPgRIAEgDIAaASIi5BzIA8BWIgGAKg");
	this.shape_920.setTransform(179.3,246);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#4B2311").s().p("AgdgTIAOgBIAsApg");
	this.shape_921.setTransform(167.15,188.725);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#C15517").s().p("AgZAEIAzgJIgCAIIgcACg");
	this.shape_922.setTransform(130.775,101.35);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#C15517").s().p("AgXAJQAagSAHAAQAIAAAGATg");
	this.shape_923.setTransform(166.6,126.775);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#F76607").s().p("AgPAgIgKg3IAAgpIAwABIADAcIgEBiIgLACQgYAAgCghg");
	this.shape_924.setTransform(166.775,134.1105);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#4B2311").s().p("AgHgJIAPADIgBAQg");
	this.shape_925.setTransform(143.475,119.65);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#1F1513").s().p("AgOgEIAcgDIAAAJIgbAGg");
	this.shape_926.setTransform(131.7125,102.375);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#1F1513").s().p("AgHgPIAPAeIgPABg");
	this.shape_927.setTransform(120.95,108.175);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#8E94A3").s().p("AgGAIIgDgRIAPAAIAEATg");
	this.shape_928.setTransform(121.125,110.7);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#1F1513").s().p("AgLgSIANgBIAJADIABAkg");
	this.shape_929.setTransform(119,104.7);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#1F1513").s().p("AASAjIgCglIgsgMIA1gUIAEBFg");
	this.shape_930.setTransform(156.525,130.175);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#4B2311").s().p("AgygCIALgDIAngCIAegHIAUABIABAMIhkAQg");
	this.shape_931.setTransform(125.2,103.3);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#D3CEB4").s().p("AAbAmIg+hDIALgJIAfAHIgBAAIAKAQIAEAAIABAEIAPATIAAAeIgEABIgFgBg");
	this.shape_932.setTransform(140.575,119.87);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#1F1513").s().p("AgKgZIAAgfIABgQIAUBnIgKAqg");
	this.shape_933.setTransform(145.25,126.325);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#4B2311").s().p("AAhAHIhYgFIgJgPIByAKQAFABAKAPg");
	this.shape_934.setTransform(134.775,115.3);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#1F1513").s().p("AgqgyIARACIALAOQAGAIAFACQAHACALgBIAVgDIAJAPIg9AEIgcA6g");
	this.shape_935.setTransform(124.675,116.625);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#C3BB99").s().p("AgIgHIARAOIgQABg");
	this.shape_936.setTransform(109.075,376.725);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#C3BB99").s().p("AgJgTIATATIgTAUg");
	this.shape_937.setTransform(222.275,305.675);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#1F1513").s().p("AgLggIAPgCIABASIADALIAEAnIgPABg");
	this.shape_938.setTransform(203.775,260.225);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#F76607").s().p("AgmAdIgGgzIACgDIgEgHIgKhfIAKgHIATAMQAMAIADAHQAsBjAXBBQAJAcgcAYQgcAYgrACg");
	this.shape_939.setTransform(209.0453,261.875);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#C15517").s().p("AgZAkQgRgGACgqIABgBIAygXIAeA1QgoAUgSAAQgFAAgDgBg");
	this.shape_940.setTransform(207.2142,215.9171);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#C3BB99").s().p("AgmAeIAVgKIAYAhIAsBbIAHgCIAIgpIgEh3IgOhjIhFAAIgJBjIgcgiIgYgnIgFhEIgMgoIABABIAJgVIBrgMQAeAzAVBHQAPAyAPBSIABBfIgNBFIgIAXIgSAWg");
	this.shape_941.setTransform(211.175,243.675);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#4B2311").s().p("AgEgBQAAgEAEgBIAFANg");
	this.shape_942.setTransform(171.6972,283.95);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#1F1513").s().p("AgBAGIgGgNIAPAPg");
	this.shape_943.setTransform(172.35,284.025);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#1F1513").s().p("AgEgJIAJAJIgIAKg");
	this.shape_944.setTransform(162.775,249.6);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#4B2311").s().p("AAJgKIABALIgTAKg");
	this.shape_945.setTransform(159.25,184.65);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#1F1513").s().p("AgJgIIATAIIgNAJg");
	this.shape_946.setTransform(153.85,232.675);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#1F1513").s().p("AgHgHIAJgMIAGAmIgMABg");
	this.shape_947.setTransform(149.875,218.675);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#1F1513").s().p("AgLAMIACgWIANgHIAIAJIgLAag");
	this.shape_948.setTransform(162.2,246.825);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#1F1513").s().p("AgOgRIAdASIgBAQg");
	this.shape_949.setTransform(161.675,275.55);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#1F1513").s().p("AgOAIIABgJIASgNIAKASIgJALg");
	this.shape_950.setTransform(141.775,249.15);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#4B2311").s().p("AgHgOIAIgMIAHAqIgJALg");
	this.shape_951.setTransform(149.225,215.125);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#1F1513").s().p("AgEg1IAIA8IABAjIgIAMg");
	this.shape_952.setTransform(148.8,208.175);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#4B2311").s().p("AgngXIABgQQA5AsAPANQADACABAIIACAMg");
	this.shape_953.setTransform(167.125,279.725);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#1F1513").s().p("AgngjIABgRIBOBpg");
	this.shape_954.setTransform(155.125,267.45);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#1F1513").s().p("AgoBAIAAgLIA+AAIAAhrIAQgJIADBpIgDAWg");
	this.shape_955.setTransform(201.35,271.2);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#4B2311").s().p("AgHANQgYgmgNgTIAJgKIBQBtQgfgKgVggg");
	this.shape_956.setTransform(166.825,255.1);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#4B2311").s().p("AgmhCIAPgKIADACIA7CBIgCAWg");
	this.shape_957.setTransform(157.325,240.275);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#4B2311").s().p("Agrg8IAJgLIBOB9IgBASg");
	this.shape_958.setTransform(146.825,256.725);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#4B2311").s().p("AgnAtIAVg/QAMgmAJgaQADgGANgHQAPgGAGgEQgmApgPA7QgMApgEBGg");
	this.shape_959.setTransform(152.275,198.275);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#4B2311").s().p("AiBhHQgBgBABgFIABgHIAMAHQAHAEAEAEQBhBgCLAvIgBALQiPgbh0iBg");
	this.shape_960.setTransform(184.2417,269.125);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#4B2311").s().p("AhaA7IgVgIIgihuIANgBIAhBoIDCgoIAcgEQAQAAAHARIgJAJIgWgDQgOgCgIACIizAmg");
	this.shape_961.setTransform(163.975,226.675);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#1F1513").s().p("AgPBAIALgOQAFgJABgFQACgXABghIABg5IAKA+IAAAPIgKBOg");
	this.shape_962.setTransform(128.725,204.475);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#E8E5D4").s().p("Ag6BsIgFglIgBgxIAPhhIAmgnIAcABQA/AQgVBGIgBA4QgBAhgCAXQgBAGgGAIIgLAOIgLABg");
	this.shape_963.setTransform(123.4032,199.55);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#E8E5D4").s().p("AgLgSIAAAAIAXAdIgMAIg");
	this.shape_964.setTransform(15.275,237.5);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#C15517").s().p("AgFAwIAEhiIAHBkIgIABg");
	this.shape_965.setTransform(169.55,135.625);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#F76607").s().p("AgXBBIAAiJIAtAAIACBLIgGA/IgTAHg");
	this.shape_966.setTransform(72.575,141.15);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#1F1513").s().p("AA1B3IgChNQghgSgKAFQgJAEgFAkIgLgWIADglIBCAEIADgMIiDggIAAgmQABgyANgMQANgLAyAGQALABAZAIQAVACAJgZIAKABIgFA6IgMgIIgHgLQgEgGgDAAQgYgEhIgHIgPBUIB1AZIAGgqIAKABIgGDQg");
	this.shape_967.setTransform(69.675,129.625);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#4B2311").s().p("AgHARIAFg/IAKAWIgHBHg");
	this.shape_968.setTransform(68.15,139.05);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#C15517").s().p("AggBMIAAgnIAIhHQAFgkAKgEQAJgFAhASIgtAAIAACKg");
	this.shape_969.setTransform(71.475,140.0457);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#4B2311").s().p("Ag/gbIAKgqIBIgIIAtAMIhuAKIAABYIgKAtg");
	this.shape_970.setTransform(151.725,136.45);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#4B2311").s().p("AAAAZIgIgyIALAAIAGAzg");
	this.shape_971.setTransform(159.175,136.2);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#C15517").s().p("AgYAXQAAghgBgDIACgoIAJA3QADAnAigHIADADIgDAHIgaAKQgUgIgBgXg");
	this.shape_972.setTransform(166.625,137.1);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#F76607").s().p("AgvBQQgLgGABgUIgCgmIAAhYIBugKIAJBXIgJA7IhHASIgNABQgJAAgFgDg");
	this.shape_973.setTransform(153.05,138.2313);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#4B2311").s().p("AgEAFQgDgFACgDIAKABQADADgEAEg");
	this.shape_974.setTransform(105.8076,140.2);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#E8E5D4").s().p("AjGCvIAAhiQADgDgCgFIAFghIBKgwIgBABIAUgUIAKgVIAVgYIAJgkIAcg6IA9gEIBZAGIgLAIQgbgCgNABQg6ABgeAxQggAxAYA1QAOAeAdATQAeATAhgDQAigCAagZQAagYANgnIAMADIAJCQQAFAWgNAIQgHAEgXADIgUAFIizAUg");
	this.shape_975.setTransform(126.1829,132.95);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#E8E5D4").s().p("AhQEeIiLgQIgDgsIAGjRIAKhZIARhRIAgg6IgBAAIAKgKIATgLIAQgOIAOgIQA4ghBSADIApAEIBCAgIAMAIIAeAeIABgCIAIAVIAXAmIAAAfIADASIgDBmIgeA7IAAgBIgKAVIgUAUIhXAoIgCAoQgCAEACAFIgFBkgAgmCaIgxAHIARBIIAWANQAqgDAJgPQAKgPgPgpQgOgSgVAAIgBAAgAgwBZIATAHQAtAGAfgGQAogJAdgeIAPgPQA0gvgChJQgDhOhFg7QgwgqhSALQhYAMgdA+IgaA7IgDAKQgMBYA0A0IAWAUIAQALIgBAAg");
	this.shape_976.setTransform(98.15,122.0411);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#1F1513").s().p("AgJgFIATACIgKAJg");
	this.shape_977.setTransform(112.15,370.25);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#4B2311").s().p("AgogIIALgJIAJAAIA9AVIgBAPg");
	this.shape_978.setTransform(116.15,371.65);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#1F1513").s().p("AhFAAIABgNICKANIgUANg");
	this.shape_979.setTransform(127.125,373.45);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#1F1513").s().p("AgegEIAMgLIAxAfg");
	this.shape_980.setTransform(108.175,368.125);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#4B2311").s().p("AgFAGIABgOIAKADIgCAOg");
	this.shape_981.setTransform(131.725,333.675);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#4B2311").s().p("AgDgKIAHAAIgGAVg");
	this.shape_982.setTransform(128.6,336.825);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#1F1513").s().p("AgxAAIBXgVQACAAADAEIAHAIIhjAfg");
	this.shape_983.setTransform(134.225,305.7225);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#E8E5D4").s().p("AgtCIIgEiEIgKhXIgGgeIBigeIAAgCIABABIgBABIgBACIAXBDIALCeIgNA8IgyACg");
	this.shape_984.setTransform(135.85,319.25);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#C15517").s().p("AABAGQgFgBgPgJIAngCQgHANgKAAIgCgBg");
	this.shape_985.setTransform(63.125,357.3118);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#C15517").s().p("AgwgEIACgTIAOgXIAeAlIAzA4g");
	this.shape_986.setTransform(56.125,352.1);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#F76607").s().p("AgfAlIgeglQAKgvAKgXQAEgIAJgIQAJgHAIAAQAHABAKAIQAJAHADAJQAJAUAJAfIAQAzQgBAEACAFIAJAyIgqABg");
	this.shape_987.setTransform(59,347.3984);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#F76607").s().p("AhpgOIgKg5QAMgcAfAGQAdAFA5AFIAoADIASADQALADAHAEQAGADAIAJIAMAOIgBA+IgJBNg");
	this.shape_988.setTransform(96.8,329.0292);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#F76607").s().p("AhBBeIgCjaICHAjIg6CqQgNApgQADIgDAAQgPAAgcgfg");
	this.shape_989.setTransform(63.875,277.1872);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#F76607").s().p("AAfBLIgFAAQhNgEgOgWQgOgXAPhlIBAAlQAjAVAXAQQAIAFAEAOQAEANgBAMQgCARgKAJQgIAHgMAAIgKgBg");
	this.shape_990.setTransform(28.2911,300.0471);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#1F1513").s().p("AgHAAIAIgHIAHAHIgFAIg");
	this.shape_991.setTransform(81.825,281.975);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#1F1513").s().p("AgIAAIAHgHIAKAJIgIAGg");
	this.shape_992.setTransform(84.475,284.4);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#D3CEB4").s().p("AgGAEIAAgBIANgHIAAAJg");
	this.shape_993.setTransform(49.275,295.2);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#1F1513").s().p("AgKgDIAFgIIAQAPIgHAIg");
	this.shape_994.setTransform(83.225,283.2);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#1F1513").s().p("AgIgFIAIgIIAIAMIgCAPg");
	this.shape_995.setTransform(80.45,304.9);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#1F1513").s().p("AgKALIAKgWIAKAIIgGAPg");
	this.shape_996.setTransform(73.6,287.5);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#1F1513").s().p("AgKgEIAHgGIAOAPIgHAGg");
	this.shape_997.setTransform(91.7,292.65);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#1F1513").s().p("AgFAGIAHgUIAEARIgJAMQgCgFAAgEg");
	this.shape_998.setTransform(64.72,350.175);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#1F1513").s().p("AgMgJIAOgBIALAVg");
	this.shape_999.setTransform(39.825,327.725);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#1F1513").s().p("AgHgTIAKAAIAFAmIgLABg");
	this.shape_1000.setTransform(67.7,320.7);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#1F1513").s().p("AgTAEIABgKIAlAEIABAJg");
	this.shape_1001.setTransform(100.175,320.175);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#1F1513").s().p("AgRgIIAHgGIAcAdg");
	this.shape_1002.setTransform(86.4,286.1);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#1F1513").s().p("AgRgHIAOgMIAVAmIghABg");
	this.shape_1003.setTransform(69.925,298.75);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#1F1513").s().p("AgGggIANBAIgMABg");
	this.shape_1004.setTransform(55.9,300.425);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#4B2311").s().p("AgPASIAQglIAPABIgSAmg");
	this.shape_1005.setTransform(72.425,290.625);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#1F1513").s().p("AgPgWIAfAmIgHAGg");
	this.shape_1006.setTransform(89.775,289.9);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#4B2311").s().p("AgMARIAZgsIgQA3g");
	this.shape_1007.setTransform(41.75,300.975);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#4B2311").s().p("AgTgYIAnAwIgPABg");
	this.shape_1008.setTransform(38.025,324.25);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#1F1513").s().p("AAFgjIAMABQgDANgEAbQgGAWgVAIg");
	this.shape_1009.setTransform(78,325.225);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#1F1513").s().p("AgLADQAFggAAgQIAIAVIAKA4IgBAOQgXgPABgcg");
	this.shape_1010.setTransform(85.023,324.325);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#1F1513").s().p("AgEASIgChEIALAAIACBNIgCAYg");
	this.shape_1011.setTransform(56.55,283.85);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#4B2311").s().p("AgFAiIgBhEIALAAIACBFg");
	this.shape_1012.setTransform(79.05,318.225);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#1F1513").s().p("AgbACQALglArALIABABIgLAyIgLABQgBglggALg");
	this.shape_1013.setTransform(45.825,297.9852);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#1F1513").s().p("AgWgfIACgQIArBfIgNAAg");
	this.shape_1014.setTransform(77.325,309.925);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#4B2311").s().p("AgMASQgGgcgGgNIACgQIAvBCIAAAMIgDABQgZAAgJgWg");
	this.shape_1015.setTransform(83.625,308.6521);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#1F1513").s().p("AAAAsQgGgFAAgEIgCgrIgBgsIATBpIgKgJg");
	this.shape_1016.setTransform(55.075,326.475);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#4B2311").s().p("AARALQgJgLgIgGQAAgCgHgBIgKAAIgMABIgFgUIAigBIAiArIgBAQIgQgTg");
	this.shape_1017.setTransform(71.8,303.675);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#4B2311").s().p("AgMgwIAMgBIANBiIgMABg");
	this.shape_1018.setTransform(56.675,308.65);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#4B2311").s().p("AgCAuIgNhbIAeAKIgDBRg");
	this.shape_1019.setTransform(59.6,298.025);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#4B2311").s().p("AgEAyIgIhiIALgBIAOBjg");
	this.shape_1020.setTransform(68.675,327.65);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#4B2311").s().p("AgMgxIAMAAIANBiIgNABg");
	this.shape_1021.setTransform(62.675,322.75);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#1F1513").s().p("AgkgkIAOgCQADAMADAZQAIASAagGIATABIhAAbg");
	this.shape_1022.setTransform(66.3,331.475);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#1F1513").s().p("AAKAaQgEgZgEgPQgCgJgJgMIgQgUIAAgLQAVABAJAJQALAJAAAWQAAATAEAaIAHAtIgMACIgFgpg");
	this.shape_1023.setTransform(63.75,301.1);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#4B2311").s().p("AACA3IgPhsIAMgBIAPBtg");
	this.shape_1024.setTransform(66.65,313.15);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#4B2311").s().p("AgMg1IALgBIAOBsIgLABg");
	this.shape_1025.setTransform(47.7,306.15);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#1F1513").s().p("AgigTQgNgNgCgEQgFgKALgMIANACIALATIANATIA5BFIgHAIIhOhOg");
	this.shape_1026.setTransform(75.2097,298.35);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#1F1513").s().p("AgoApIAmhZIArAnIgJAHQgegUgNAhIgJATIgKATg");
	this.shape_1027.setTransform(77.775,282.2);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#1F1513").s().p("AADBMIgTiWIAPAAIASCWg");
	this.shape_1028.setTransform(61.025,310.2);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#4B2311").s().p("AhFABQABgPALgFQAHgDAQADIBoASIgBALQg6gFgcgFQgfgFgLAbg");
	this.shape_1029.setTransform(91.275,319.6432);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#1F1513").s().p("AgXBNIAXgGIgRiuIANAAIAcDPg");
	this.shape_1030.setTransform(58.525,324.025);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#1F1513").s().p("AgdBXIATgKQAKgFAAgFQAHgxgBg5IgDgqIgDgqIAKgBIAFAqQADAZAFAQQAMAngKArQgFAYgWA8g");
	this.shape_1031.setTransform(47.9599,324.075);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#1F1513").s().p("AgdiQIANgBIAhDfQACAQALAgIgDATIgNABg");
	this.shape_1032.setTransform(71.725,317.3);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#1F1513").s().p("Ag3APIBdAMIAJhrIAJAMIAABvIhEgEIgDApg");
	this.shape_1033.setTransform(35.7,310.75);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#1F1513").s().p("AgLgHIgOhnIAAgKQACgVARgBIAhgBIAAAwIgbgmIgEAWQgBAJAAAGIAWDPQABAGgBALIgCAQIgaiXg");
	this.shape_1034.setTransform(52.6,306.825);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#4B2311").s().p("AAyAWQgKgegIgUQgDgIgKgIQgKgHgIgBQgGgBgJAIQgKAIgDAIQgKAWgKAwIgOAXIgLAAIAAgSIAlh0QAsgHARAJQAQAKAMApIATBHIgIAUIgPg0g");
	this.shape_1035.setTransform(57.625,343.3346);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#1F1513").s().p("AhSBYIAAgLICUAHIhYi2IAHgHQA9BTAlCAg");
	this.shape_1036.setTransform(94.4,303.725);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#8E94A3").s().p("AgLBVIAAABIACgQQABgKgBgHIgXjOQAAgHACgJIAEgWIAaAlIAAAAIAAABIAAgBIABBCIAgERIgZAGIAAABg");
	this.shape_1037.setTransform(55.27,312.6);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#8E94A3").s().p("AgHBZIgijgIAKABQAGAAACACQAIAHAJAMIAOATIAhBQIABBEIgWBIIAAgBIgQALQgJgfgCgQg");
	this.shape_1038.setTransform(74.225,316.2125);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FDFDFD").s().p("ABVCuIg8g8IgkgrIg7hZIhLi6IA0AFQAMAaAXA1QAUAuATAdQAbAqAuA8IBNBkQAEAFAEAJIAHAQIAAASg");
	this.shape_1039.setTransform(35.725,329.225);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#8E94A3").s().p("AgBCHIgLgWIgyg7IgKgUIABABIACgpIBFAEIAAhwIARg5QAhgLABAlIATCWIADAqQABA7gHAwQgBAFgLAGIgSAJg");
	this.shape_1040.setTransform(41.3313,315.3026);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#1F1513").s().p("AgEgDIAKgCIgJALg");
	this.shape_1041.setTransform(125.7,257.3);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#1F1513").s().p("AgFgCIAJgCIACAGIgDADg");
	this.shape_1042.setTransform(116.8,263.175);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#1F1513").s().p("AgOAGIAAgMIAdABIAAAMg");
	this.shape_1043.setTransform(123.675,187.475);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#4B2311").s().p("AAKgIIABAKIgVAHg");
	this.shape_1044.setTransform(124.2,257.775);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#4B2311").s().p("AgOAJIgBgPIALgCIAUANIgBAEg");
	this.shape_1045.setTransform(127.7,211.725);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#1F1513").s().p("AgIgVIALgBIAFAkIgJAIg");
	this.shape_1046.setTransform(116.7,208.9);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#4B2311").s().p("AgGgYIAMAAIABAwIgLABg");
	this.shape_1047.setTransform(116.325,204.225);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#4B2311").s().p("AgUAHIApggIAAANIgkAmg");
	this.shape_1048.setTransform(120.075,189.4);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#4B2311").s().p("AgHggIAPABIAAA/IgPABg");
	this.shape_1049.setTransform(25.175,230.925);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#1F1513").s().p("AgaALIgVgSIAKgIIBUAHIABAPIgyAJg");
	this.shape_1050.setTransform(121.375,211.9);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#4B2311").s().p("AAVgXIAJAIIg7Ang");
	this.shape_1051.setTransform(114.125,265.3);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#4B2311").s().p("AAngYIACACIgBAKIhQAlg");
	this.shape_1052.setTransform(136.275,251.225);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#1F1513").s().p("AgNA6IAWhzIAFATIgOBhg");
	this.shape_1053.setTransform(117.05,195.9);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#1F1513").s().p("AgPhNIAPgCIAQCSIgKANg");
	this.shape_1054.setTransform(25.8,242.65);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#8E94A3").s().p("AgcARQgKgMABgGQABgIALgJQAKgJAIgBQAHAAALAJIAbAUIgeATQgMAJgIAAQgHgBgJgLgAgXABIAIAEQAEADADABQACAAAEgDIAHgIQgNgFgGAAIgJAIg");
	this.shape_1055.setTransform(118.9452,246.6737);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#8E94A3").s().p("AgdgCIAmgjIAOATQAIALgBAHQgBAIgKALIgRATgAgCANIAMABIAAgbIgIgBg");
	this.shape_1056.setTransform(33.8806,225.575);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#4B2311").s().p("AAtDcIgKggQgGgTgGgLQhIiWgPiUIABgEIAKhNQAEAdAGA8QAGA1AKAiQAQA0AbBMIAxB/IgSAMg");
	this.shape_1057.setTransform(135.725,226.7);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#F76607").s().p("AgYABIAAgRIAmgBIALAIIgWAbg");
	this.shape_1058.setTransform(63.8,93.525);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#C15517").s().p("AArAiIgrgJIgrgLIgqgNIgBACIgJgPIAXgdIAaAFICEAsIAKAMIAAAMIgKAKIgrgIg");
	this.shape_1059.setTransform(73.675,96.675);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#F76607").s().p("AiaAYIAAAAICAgWIAWgFIAIgCIAggJIBUgiIAZgFIATAbIieAzIiCAcIgnABg");
	this.shape_1060.setTransform(137.65,97.225);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#C15517").s().p("AgFA6IgPgTQgJgMgIgGQgXgVAVgZIBHgiIAPAhIACAeIABAJQgCAvgmAAIgPgCg");
	this.shape_1061.setTransform(182.2614,356.3769);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#1F1513").s().p("AgJgEIATAAIgLAJg");
	this.shape_1062.setTransform(174.15,285.325);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#1F1513").s().p("AgIA8QgSgFgIgHQgMgKADgSIAPhSQA7AiAOAJIgSAjQAcAZgUAPQgHAGgNABIgDAAQgLAAgJgDgAgYAhIAqARIAEgMIgrgOgAADAOIAWACIgSgKgAgUgUIAuAOIAEgMIgugRg");
	this.shape_1063.setTransform(48.62,133.1781);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#C3BB99").s().p("AgJgFIATADIgLAIg");
	this.shape_1064.setTransform(185.15,189.325);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#8E94A3").s().p("AgZgJIAMgIIAnAkg");
	this.shape_1065.setTransform(187.575,190.9);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#C15517").s().p("AAXBAIABAAIgVgdIAAAAIhAg9IgXgcQAsgPAeAJQAcAJAWAlIAsBOIg8AAIAAABg");
	this.shape_1066.setTransform(171.75,189.2945);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#4B2311").s().p("AgMAAIAGgHIATAJIgFAGg");
	this.shape_1067.setTransform(70.275,93.05);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#1F1513").s().p("AgJADIATgNIAAAMIgNAJg");
	this.shape_1068.setTransform(87.15,96.3);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#4B2311").s().p("AgJAIIgMgIIACgLIAmAKIADAGIgGAHg");
	this.shape_1069.setTransform(67.35,91.75);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#1F1513").s().p("AgLALIgLgLIABgLIAlADIAHAIIgRAMg");
	this.shape_1070.setTransform(84.525,97.5);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#4B2311").s().p("AhFAIIBFgbIBGADIAAAHQhTgCg3Afg");
	this.shape_1071.setTransform(95.125,94.475);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#4B2311").s().p("Ag3gOIAFgGIBqAdIAAAMg");
	this.shape_1072.setTransform(76.675,95.35);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#1F1513").s().p("AgEALIgCgeIAKABIADAaIgKAMIgBgJg");
	this.shape_1073.setTransform(187.675,355.7);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#D3CEB4").s().p("AgKgIQAHgIATgEIgbApQgIgTAJgKg");
	this.shape_1074.setTransform(189.5493,349.55);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#8E94A3").s().p("AgQARIAWgbIgLgIIgLAiIACgxIAfAQIgOAzg");
	this.shape_1075.setTransform(206.8,310.175);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#E8E5D4").s().p("AmAJcIgggMQgBgTgKABIgUAIIgIAAIgUgCIABABIgBgBIAAAAIgxgfIArgjIByhxIANgTIAvhmIAKgoIAWgOIAKADIAnAIIAeAEQAQgBAGgTIgBAAIABgBIAAABQASgHADgTQgBgXABgLIgGihIgIgdIgSgnIgKgBIABABIgBgBIAAAAIgGgHQgEgEgCAAIhYAWIhRjGIAAgBIgshEQgagngUgcQgJgPgDgIQgDgLAGgMIA7gpIADgCIgCgIIgBABIA9gpIAVgHIAKgNIgCAAICOhDIAVAHIBYCEIBZBjIAdAjIBRBBIAAAAIAKAJIAKABIAIALQBqBNB/AUIBPAAIA6gLIADAcQABAQgCAKQgEATgJAYIgOArIgggRIgCAxIABABIATARIAAAUIgCATIgRBHIizBJIjVCAIgJAJIhsBRIhgBUIhpBxgAk8IJQgGABgJAGIgOALIARANQALAHAHACQAFABAJgGIAPgKIAAgOIgSgHQgJgEgHAAIgBAAgAkjmvIgPAQIAPATQAIALAIACQAGAAAMgIIAcgWIgbgSQgNgIgHAAQgGAAgJAIg");
	this.shape_1076.setTransform(158.7667,311.65);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#1F1513").s().p("AgJgDIATgBIgJAJg");
	this.shape_1077.setTransform(60.275,182.3);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#4B2311").s().p("AgkAYIAHgHQA0AKADg2IALgMIgEA7IghARQgGADgGAAQgNAAgLgQg");
	this.shape_1078.setTransform(184.7,360.466);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#1F1513").s().p("AgHgKIAPATIgNACg");
	this.shape_1079.setTransform(124.95,83.725);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#4B2311").s().p("AgNgNIANgBIAOAcIgOABg");
	this.shape_1080.setTransform(125.725,86.15);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#E8E5D4").s().p("AhbDmQgTgCgCgPQABgSgCgJIAGgmIACgbQABgQAEgLQAHgWgKgNQgIgLgWgHQAPgWAEgMQAIgTgbgPQgEgCADgPQACgOAFgKIBdisIACgJIASAAIABgBIBwAxQAIAFALAJIATAQIgKATIgcBQQgJAZgVgCQgZgJgLAAQgygGgNALQgNALgBAyIAAAmICDAhIgDAMIhDgFIgOClg");
	this.shape_1081.setTransform(66.4979,121.95);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#1F1513").s().p("AAAgFIAVACIgpAIg");
	this.shape_1082.setTransform(130.15,78.05);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#1F1513").s().p("AgdgOIA6gBIABAfg");
	this.shape_1083.setTransform(121.175,81.125);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#4B2311").s().p("AgIAAIAJgIIAIAHIgHAKg");
	this.shape_1084.setTransform(113.7,97.075);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#4B2311").s().p("AgFAAIAFgJQAGABAAAEIgCAOg");
	this.shape_1085.setTransform(114.55,97.95);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#1F1513").s().p("AgSgBIAmgEIgBAIIgmADg");
	this.shape_1086.setTransform(124.175,98.15);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#4B2311").s().p("AgKgDIAVgCIgBAFIgTAGg");
	this.shape_1087.setTransform(124.275,89.9);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#1F1513").s().p("AgUAEIABgHIAMgDIAbAEIAAAJg");
	this.shape_1088.setTransform(104.15,93.15);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#4B2311").s().p("AgUAEIAMgJIAdgHIgKAUIgYAFg");
	this.shape_1089.setTransform(151.05,90.975);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#1F1513").s().p("AgYgDIAxgDIAAAJIgxAEg");
	this.shape_1090.setTransform(120.7,90.25);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#1F1513").s().p("AgPgBIACgPIAdAJIAAALIgMANg");
	this.shape_1091.setTransform(116.55,99.2);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#4B2311").s().p("AgTAJIAAgMIAngFIgBARg");
	this.shape_1092.setTransform(120.2,98.775);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#1F1513").s().p("AgTgKIAOgBIAdAHIABALIgxAFg");
	this.shape_1093.setTransform(127.725,88.75);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#4B2311").s().p("AglgKIAAgKIBLAgIgKAJg");
	this.shape_1094.setTransform(110,94.975);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#4B2311").s().p("AgdABIA7gNIAAALIg6AOg");
	this.shape_1095.setTransform(133.125,88.2);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#4B2311").s().p("Ag7AOIBwgjIAHAJIhUAhIgcABg");
	this.shape_1096.setTransform(143.675,93.625);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#1F1513").s().p("AgyAPQANgGAcgGQAXgIAGgVIAfALIgNARIhXAZg");
	this.shape_1097.setTransform(141.175,85.375);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#4B2311").s().p("Ag8AQIAAgJIAKgFIBpgUIAGAJIgCAIIgJABIgXAGIgxAKIgbADg");
	this.shape_1098.setTransform(132.225,96.875);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#4B2311").s().p("AAUgNIgnAdQACgmAlAJg");
	this.shape_1099.setTransform(42.2,195.1731);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#4B2311").s().p("AAOgcIAQAAIALAJIhRAwg");
	this.shape_1100.setTransform(56.3,184.825);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#4B2311").s().p("AgFgKIAIgCIADAZg");
	this.shape_1101.setTransform(183.6,193.975);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#4B2311").s().p("AgEANIgFgYIASAYg");
	this.shape_1102.setTransform(185.1,196.45);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#1F1513").s().p("AgJgJQAEgBAFACIAKASg");
	this.shape_1103.setTransform(196.225,199.6688);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#1F1513").s().p("AgbgTIAPAAIAoAng");
	this.shape_1104.setTransform(187.375,199.725);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#1F1513").s().p("AgLAaQgLgBgWgeIALACQAGABAEACQAWAMAIgIQAIgGAAgXIAeAfQgqAUgMAAIgCAAg");
	this.shape_1105.setTransform(195.675,203.2799);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#1F1513").s().p("AAQARIgwgRIgJABIgSgjIAegEIAHALIBRAvIAAAAIABAAIgBAAIABAUQgdgQgPgHgAgdgmIgBgBIABABg");
	this.shape_1106.setTransform(187.225,192.725);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#1F1513").s().p("AgSAnQgJgdAGgcQADgLgJgTQgKgVgEgLQAMgNAKAHQAGAEAJAMQAIAJALAPIASAaIgBgBIAKAVIgJATIgigyQgKAeAJAgQADAUAUAlIgQABQgRgdgGgVg");
	this.shape_1107.setTransform(197.9,221.8275);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#8E94A3").s().p("AAaAxQgDgCgHgBIgKgCIgzgxIgTgZIABAAIgDgZIAxARQAQAHAbAQIApAnIgBgBQgBAXgHAHQgEADgGAAQgJAAgNgHg");
	this.shape_1108.setTransform(190.6,198.343);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#1F1513").s().p("AgyheQACgFAFgGIAKgKIAGAKIBfC7IgIAIIhgiqQgSA2ACAcQABAcAXBQIgIAGQg3hiAphwg");
	this.shape_1109.setTransform(182.5662,211.35);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#E8E5D4").s().p("AC0HLQiMgvhghhQgEgEgHgEIgMgHIAAAAIhQhvIgKgJIALgbQAFAAADgEICBheQAegXACgKQACgJgTgjQgHgSgQAAIgcAGIjDAmIghhnIgOhSIgBgkQAFhFALgrQARg6AlgpIAAAAIAUgUIAVgKIAnAUIA7ApIAUAUIAAAAIAUAdIAzAUIAAAUIgKAKQgFAGgCAFQgpByA3BhIAPAhIAyBEIAPARIgPARQgKAKgHAFIiXBeIBSBkIAcAeIA3ApQADAEAFAAIATAMIBXAiIgXj/IBZAHIgbgrIhDiDIgMgTIiAj2IASAKQAMAGAEAGQAeAhA5BHQABACAHABIAKABQAEALAKAVQAJATgDALQgGAdAJAdQAGAVASAcIAjBJIAKgjIAYAmIAcAiIAMAoIgUAJQguAEgHAJQgJAJAJArIAGAmIAKBXIAABtg");
	this.shape_1110.setTransform(179.3,230.625);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#1F1513").s().p("AgZABIgBgLIACgIIAbgCIACANIAWAbIgNABg");
	this.shape_1111.setTransform(162.825,184.625);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#4B2311").s().p("Ah9AiIADgIIAwgLICegzIApgHIgaAVIjgBCIAAgKg");
	this.shape_1112.setTransform(145.7,98.175);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#4B2311").s().p("AAfBVIgMiAQgGgUgIAAQgGAAgbATIgCBQIgMAPIgKhsIA+gcQAUgCAFAOQACAIABARQAEAZAEAjIAHA+IgMALIgIACg");
	this.shape_1113.setTransform(167.1,132.1925);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#E8E5D4").s().p("ACmDvIgNhkIgEhFIg2ATIhJAIIgVhoIgPgDIgBgEIgEAAIgJgQIABAAQgLgRgFAAIhzgKIgVADQgLABgIgCQgEgDgHgHIgKgPIgEgTIgPgeIAAgTICBgXIDghDQBaBqAjCqIg/AcIAKBuIgGA/gAjviDIABACIAAAAgAjuiBg");
	this.shape_1114.setTransform(144.15,119.75);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#8E94A3").s().p("AgMAEIAEgGIAQgBIAGAHg");
	this.shape_1115.setTransform(109.15,377.875);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#8E94A3").s().p("AAJAKIgQgOIABAPIgFAHIgTgEQgCgPAFgIQAGgJARAAQASAAAJAHQAKAHgCATIgQAEg");
	this.shape_1116.setTransform(109.0237,376.4233);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#C15517").s().p("AgPASIAUgTIgUgUIAAAAQAPgMAHADQAJADAAASQAAAJgGALIgKAVg");
	this.shape_1117.setTransform(222.825,305.944);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#1F1513").s().p("AgGALIAHgVIAGAEIgCARg");
	this.shape_1118.setTransform(219.775,263.55);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#1F1513").s().p("AgOBbIANhGIgBheIAKgVQAUBmgkBXg");
	this.shape_1119.setTransform(221.3623,253.35);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#4B2311").s().p("Ag1CEQAsgCAbgYQAcgYgKgcQgWhBgthjQgDgHgLgIIgTgMIgLAHIAIBNIgPABIgGgmQgJgqAJgKQAHgIAugEIBjDKIASgXIALAAQgPBFhMApIg6AUg");
	this.shape_1120.setTransform(210.9,262.15);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#4B2311").s().p("ABBBEQgUhGgfgzIhrAMIAAABIgKgVIABAAIgCgPQgCgIACgFQACgFAHgHIAMgLQgCAsARAGQARAGAygZIgeg2IgzAXIAfgzIgMglIAVAAIAUAnIAUAUIATAeIAHAXQADAOAFAKQA/CCALByIgLAVQgPhSgPgzg");
	this.shape_1121.setTransform(211.525,225.85);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#F76607").s().p("AC3I/QgfgLgsgWIhJgkIgUAAIgPgQQgEABAAAEIAAAAIgCgMQgCgIgDgCQgOgNg7gtIgegTIgLgLIhOhqIhaiRIgxh/QgdhKgQg1QgKgigGg1QgFg8gFgdIAAgQQAHg+AFgfQANhVBEhQIAMgIIAggSICkBSIgDAIIgmAqQgGAEgPAGQgNAGgDAHQgKAZgMAmIgVBAIABBtIAKBGIApCCIBLCPIANAGIABAUQANASAXAoQAXAgAeAKIgBAHQAAAFABABQBzCCCQAbIBPAAIA8gUIALAdQAHARAAAMQABAVgDAfIgFAzQgxAWg3AAQg4AAg/gWg");
	this.shape_1122.setTransform(171.6542,234.2438);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#4B2311").s().p("AgIACIAJgJIAIAIIgLAIg");
	this.shape_1123.setTransform(139.85,176.25);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#E8E5D4").s().p("AgBgDIAFAFIgHACg");
	this.shape_1124.setTransform(136.725,177.5);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#1F1513").s().p("AAOgMIABAMIgKAMIgTABg");
	this.shape_1125.setTransform(62.675,180.5);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#4B2311").s().p("AgUABIApgOIgoAbg");
	this.shape_1126.setTransform(66.15,179.125);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#4B2311").s().p("AgdBGQAUhGg+gOIAAgNIAzASIA+hrIgDgBIAJgCIASgMIAGAGQhEBQgMBVQgFAegHA+g");
	this.shape_1127.setTransform(132.375,189.7);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#8E94A3").s().p("AgJgLIATAKIgDAKIgPADg");
	this.shape_1128.setTransform(27.125,210.7);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#1F1513").s().p("AgIAnIgBgBIgCADIAMhQIALABIgFBPg");
	this.shape_1129.setTransform(25.25,223.7);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#4B2311").s().p("AgLAoIAJhNIAOgDIgMBRg");
	this.shape_1130.setTransform(26.6,215.675);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#4B2311").s().p("AgdAOIA7gnIgLAvIgTgKIgcAOg");
	this.shape_1131.setTransform(26.175,208.325);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#8E94A3").s().p("AgXAWQgHgMAPggIALAkIAMgIIgXgdQAXgNAGAEQAHAFAFAhIgMAcIgDAAQgcAAgGgMg");
	this.shape_1132.setTransform(15.6744,237.9947);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#4B2311").s().p("AgGAAIADgGIAIgBIACACIgCALIgEACg");
	this.shape_1133.setTransform(169.65,141.45);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#1F1513").s().p("AgEgEIAHgCQADAEABACIgNAHg");
	this.shape_1134.setTransform(170.9,141.35);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#1F1513").s().p("AAEgHIABANIgJACg");
	this.shape_1135.setTransform(177.75,145.975);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#1F1513").s().p("AgPAEIAMgLIARgDIACAMIgaAJQgCgEgDgDg");
	this.shape_1136.setTransform(172.775,140.325);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#4B2311").s().p("AgJgCIATgFIAAANIgSACg");
	this.shape_1137.setTransform(141.175,148.75);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#1F1513").s().p("AgUgCIAogEIABAKIgoADg");
	this.shape_1138.setTransform(138.175,149.15);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#4B2311").s().p("AgQAAIAagKIAIAIIgjANg");
	this.shape_1139.setTransform(167.95,142.525);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#1F1513").s().p("AgSAHIALgJIASgIIAJAVg");
	this.shape_1140.setTransform(73.2,148.825);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#4B2311").s().p("AgUABIABgKIATABIAVAIIgLAJg");
	this.shape_1141.setTransform(70.25,148.55);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#1F1513").s().p("AgegDIA8gEIABAKIg7AFg");
	this.shape_1142.setTransform(130.175,150.225);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#4B2311").s().p("AgOgCIAcgFIABAIIgcAHg");
	this.shape_1143.setTransform(134.7,149.7);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#1F1513").s().p("AgYAAIAxgJIgmAUg");
	this.shape_1144.setTransform(174.7,147.8);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#4B2311").s().p("AgTAAIAAgLIAnALIgBAMg");
	this.shape_1145.setTransform(59.2,146.15);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#1F1513").s().p("AgiADIgBgLIBHAIIgBAIg");
	this.shape_1146.setTransform(79.675,149.9);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#4B2311").s().p("AgYgBIAwgHIABALIgxAGg");
	this.shape_1147.setTransform(124.725,150.7);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#4B2311").s().p("AgjAHIBHgRIABALIgsAKg");
	this.shape_1148.setTransform(154.55,145.775);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#1F1513").s().p("AgngOIAegBIAxAWIgLAJg");
	this.shape_1149.setTransform(50.125,151.275);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#4B2311").s().p("AAAAoIgIgVIAGg+IAIAfIADA4g");
	this.shape_1150.setTransform(75.25,145.875);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#4B2311").s().p("AgoAKIBFgdIALAKIhOAdg");
	this.shape_1151.setTransform(169.3,149.825);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#4B2311").s().p("AgiAAIABgIIBDAIIAAAJg");
	this.shape_1152.setTransform(86.65,150.725);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#1F1513").s().p("AgiAaIAAgNIA3ALIAGg/IAIAeIAAAmIgBALg");
	this.shape_1153.setTransform(64.675,144.725);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#1F1513").s().p("AgeAfIABgMIAQgIQAJgEACgFQACgIACgPIABgYIALgBIgFAnQABAHAAATQACAOASADIAAALg");
	this.shape_1154.setTransform(54.2,141.425);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#1F1513").s().p("Ag5AiQAYgDAGgEQANgIgEgVIAKgtIACAmQgBATAKAHQAIAFATgDIAcAEIhzAZg");
	this.shape_1155.setTransform(147.925,144.575);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#1F1513").s().p("AgnAmIAJg6IAKABIAHAvIAOAAIAGg+IALgQQABADABAiQAAAWAUAIIAAALIhPAXg");
	this.shape_1156.setTransform(162.175,140.8);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#1F1513").s().p("AigAtICTAAIAFhjIAJAAIAABhICfAAIABALIlBABg");
	this.shape_1157.setTransform(106.175,146.125);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#1F1513").s().p("AgJADIAMgIIAHAHQgBADgEABg");
	this.shape_1158.setTransform(164.725,346.15);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#1F1513").s().p("AgMABIAJgIIARABIgTAOg");
	this.shape_1159.setTransform(166.4,345.475);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#4B2311").s().p("AgNAFIATgTIAIAJIgSAUg");
	this.shape_1160.setTransform(144.025,363.6);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#1F1513").s().p("AgSABIAbgKIAKAIIgbALg");
	this.shape_1161.setTransform(189.175,331.7);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#4B2311").s().p("AgVAPIApglIACACIglAqg");
	this.shape_1162.setTransform(152.225,355.95);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#4B2311").s().p("AAXgYIgsAxQgDgqAvgHg");
	this.shape_1163.setTransform(157.4938,371.25);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#4B2311").s().p("AgaALIAmgcIAPADIguAgg");
	this.shape_1164.setTransform(162.55,348.275);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#4B2311").s().p("AgfAVIA4gqIAHAHIg8Alg");
	this.shape_1165.setTransform(157.375,351.6);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#4B2311").s().p("AgdATIA1gtIAGAHIgzAug");
	this.shape_1166.setTransform(147.6,360.225);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#4B2311").s().p("AAAgKIhCAlIATgXQALgMAKgHQAKgIAQgJIAcgQIAFAGQgVAZAXAVQAIAGAJAMIAPATIgHAHg");
	this.shape_1167.setTransform(175,358.05);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#4B2311").s().p("AgpAVIAUgOIBUhbIAJAKIhxCKQgEAGgKAGIgQAKg");
	this.shape_1168.setTransform(136.325,372.65);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#4B2311").s().p("AhvA/IDUh/IAKAJIjMB4g");
	this.shape_1169.setTransform(177.15,338.3);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#E8E5D4").s().p("AiCBsIAggxIBZhiIAngeIABgBIBCgmIAiAkIgYAjQgPAUgNAJQg4Aoh1BJQgFAEgLgBIgUAAg");
	this.shape_1170.setTransform(165.225,367.8);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#E8E5D4").s().p("ACoAyQgfASgugFQgugFgZgYQACgTgKgIQgJgHgSABQgRAAgFAJQgGAHACAQIiyhBICWgmIAUACIA8AVIAIALIBSAbIB3AMIgeA/IgKAFgAC+BCIABAAIgBABgAC+BCg");
	this.shape_1171.setTransform(110.1,374.475);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#1F1513").s().p("AgUgBIAogLIABALIgDAGIglAIg");
	this.shape_1172.setTransform(163.275,152.075);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#4B2311").s().p("AgOAGIABgOIAcAFIAAALg");
	this.shape_1173.setTransform(85.65,158.75);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#4B2311").s().p("AgTgCIAmgKIABAOIgnALg");
	this.shape_1174.setTransform(159.275,153.2);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#1F1513").s().p("AgiADIAAgNIBFAIIAAANg");
	this.shape_1175.setTransform(80.675,158.225);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#1F1513").s().p("AgjgBIABgJIBGALIgBAKg");
	this.shape_1176.setTransform(65.675,155.75);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#4B2311").s().p("AgngCIABgKIBOAMIAAANg");
	this.shape_1177.setTransform(73.175,157.175);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#4B2311").s().p("AgJAIIgkgQIAMgJIBPAaIgBAJg");
	this.shape_1178.setTransform(57.6,153.725);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#1F1513").s().p("AjSAiIiMgCIABgMQDKAFCVgJQC9gMCggmIAAAQQhiAahwANQhfALh1ACIg/ABIhMgBg");
	this.shape_1179.setTransform(122.175,156.425);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#1F1513").s().p("AgEgEIAJgDIgIAPg");
	this.shape_1180.setTransform(32.625,248.375);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#1F1513").s().p("AgEgHIAIADIAAAMg");
	this.shape_1181.setTransform(95.7,257.4);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#1F1513").s().p("AgEABIAJgKIAAATg");
	this.shape_1182.setTransform(99.6,293.75);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#4B2311").s().p("AgKAAIAIgIIANAQIgNABg");
	this.shape_1183.setTransform(37.125,339.875);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#1F1513").s().p("AAJgGIABAMIgTABg");
	this.shape_1184.setTransform(34.1,247);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#1F1513").s().p("AgDgJIAKABIgNASg");
	this.shape_1185.setTransform(13.7,269.675);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#1F1513").s().p("AgFAKIAKgTIABATg");
	this.shape_1186.setTransform(12.475,271.65);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#1F1513").s().p("AgOgEIASgDIAKAJIgbAGg");
	this.shape_1187.setTransform(86.6,360.35);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#1F1513").s().p("AgLgIIAOgBIAIAJIgIAKg");
	this.shape_1188.setTransform(38,341.65);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#1F1513").s().p("AgGgNIAKgBIADAcIgJABg");
	this.shape_1189.setTransform(108.625,316.25);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#4B2311").s().p("AgHALIAQgVIgHAVg");
	this.shape_1190.setTransform(14.15,267.65);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#1F1513").s().p("AgQAFIAhgLIAAAKIgRADg");
	this.shape_1191.setTransform(43.375,264.125);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#1F1513").s().p("AgHAUIALgoIADACIABAVIgEASg");
	this.shape_1192.setTransform(127.525,337.6);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#4B2311").s().p("AgPgJIAJgIIAWAaIgIAJg");
	this.shape_1193.setTransform(35.25,338.075);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#1F1513").s().p("AgMARIAYgiIABARIgMASg");
	this.shape_1194.setTransform(121.95,349.925);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#1F1513").s().p("AgKgNIAVARIgJAKg");
	this.shape_1195.setTransform(101.15,296.2);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#1F1513").s().p("AgSABIAMgKIAZAFIgBAOg");
	this.shape_1196.setTransform(70.15,368.425);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#C15517").s().p("AgIgNIAQABIACAPIgMALg");
	this.shape_1197.setTransform(129.1,312.2);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#1F1513").s().p("AgOAAIAJgJIAUASg");
	this.shape_1198.setTransform(93.75,255.65);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#4B2311").s().p("AgIgMIAIgKIAJAtg");
	this.shape_1199.setTransform(102.275,298.95);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#4B2311").s().p("AgBgNIAQgLIgdAxg");
	this.shape_1200.setTransform(17.55,262.15);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#4B2311").s().p("AgTARIAngiQAAAjggAAIgHgBg");
	this.shape_1201.setTransform(96.125,354.9186);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#4B2311").s().p("AgdgYQAcAEAMAIQASALACAag");
	this.shape_1202.setTransform(81.15,274.225);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#4B2311").s().p("AgeACIABgOIA8AMIAAANg");
	this.shape_1203.setTransform(75.05,369.225);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#4B2311").s().p("AgiAKIBGgdIg8Ang");
	this.shape_1204.setTransform(90.55,358.55);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#4B2311").s().p("AgbAEIAKgMIAvgPIABANIg8Aig");
	this.shape_1205.setTransform(29.15,250.25);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#4B2311").s().p("AgcgSIAIgLIAxAxIgJAKg");
	this.shape_1206.setTransform(41.25,344.575);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#4B2311").s().p("AgigoIAKgIIA7BZIgJAIg");
	this.shape_1207.setTransform(31.1,332.175);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#1F1513").s().p("AgogUIAKgKIA8AfIALgBIgCATIgLAMg");
	this.shape_1208.setTransform(47.3,349.675);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#4B2311").s().p("AgaAZIgUgIIBUgrIAJAJIg1Asg");
	this.shape_1209.setTransform(105.8,364.875);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#4B2311").s().p("AgXAiIAjhUIAMABIguBkg");
	this.shape_1210.setTransform(125.55,344.7);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#4B2311").s().p("AgchDIANAGQAIAEABAEQAKAfAZBaIgKAAg");
	this.shape_1211.setTransform(106.075,307.975);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#4B2311").s().p("Agxg7IAcAUQARALAIAKQALANANAUIAWAjIgKALg");
	this.shape_1212.setTransform(95.075,287.8);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#4B2311").s().p("Ag3gnIAAgOIBvBrg");
	this.shape_1213.setTransform(101.7,262.225);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#4B2311").s().p("Ag9AvIBthnIAOAAIhyBxg");
	this.shape_1214.setTransform(115.825,357.375);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#1F1513").s().p("AhyAUIgKgEIAAgNQBoAMB8glIAVAIIiVAlg");
	this.shape_1215.setTransform(90.625,368.9);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#1F1513").s().p("AgMB0IgDgCIAJjZIALgMIAIBIIADCRIgUAOg");
	this.shape_1216.setTransform(129.525,324.075);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#4B2311").s().p("AAgB8QgOhrhBh7IAAABIAIgTIBRDFIAAAWIAHAeg");
	this.shape_1217.setTransform(125,298.375);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#4B2311").s().p("AgpgxQgHgJgHgQIgNgZIAnAAQgGANADALQADAJAJAOQAUAcAZAnIAsBEIgJARIhliVg");
	this.shape_1218.setTransform(114.175,277.6375);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#4B2311").s().p("AivgiIALgLIBjAzIAAAAQAPAKAGABQAMACAIgPIgJgxIAKgMIAJARQARA7ANALQAOAKA9ACQARAAAZgCIAqgEIABANQgqAJgqAAQiHAAiEhcg");
	this.shape_1219.setTransform(67.675,356.2332);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#4B2311").s().p("ABZA6IjQh4IABgNIDSBtIAJhNIABg+IgMgPQgIgIgGgEQgHgEgKgCIgTgEIgBgKIA7AGIAEgbIAJgBIAJAUIAACCQgNBig4BJQgHAIgPAIIgYAMg");
	this.shape_1220.setTransform(98.15,335.175);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#4B2311").s().p("ACvAVQg/gagtgQQikg4ioA8IgYAHIgBgNQBwg8CaAVQC0AZCHBhIgJAIIhrgvg");
	this.shape_1221.setTransform(64.075,248.7045);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#4B2311").s().p("AgsB0IABgXQAfAiAOgDQAQgDAPgqIA6iqIiHgjIAACMIgMAAIgLiNIhhAAIAAgLQAYAAAygDQArgBAdAFQAgAGAsAQIBNAeQAHADAJAKIAOARIg5gWIg+CsQgPApgUAFIgFABQgSAAgggag");
	this.shape_1222.setTransform(61.6,277.3215);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#4B2311").s().p("AhMipQA8h/B4gUIASABQiaA6gzCUQgJAaAFAQQAFARAZAMQAUAKAcARIAtAbQAXANAFAVQAFATgKAgQgGAWgSAFQgJADgagBIhkgHIBLC6IgKAIQiVkABsjmgAheBVQANAXBPAEIAEAAQASADALgJQALgJABgRQABgNgEgNQgEgOgHgFQgYgRgigTIhBglQgOBkAOAXg");
	this.shape_1223.setTransform(31.2057,296.375);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#E8E5D4").s().p("ABzHfQg9gBgOgLQgNgKgSg8IgJgRIgCgSIgThHQgNgqgQgJQgQgKguAIIglB1IgHgQQgEgJgEgGIhMhkQgvg8gbgqQgTgdgVgvQgWg0gNgaIAxACQAaABAKgDQARgFAHgWQAJgggFgTQgFgVgWgNIgvgcQgbgRgVgKQgYgMgGgRQgFgQAJgaQAziUCbg6IARgCIBiAAIAMDTIAKAhQAlAdAUgEQAUgFANgqIA+isIA5AWIA9AxIAAAAIATALIAAAAIAoAoIBaB5IAKAJIAfBAIAwCHIAEAeIgEAbIhhgKIhpgTQgQgCgHADQgLAEgBARQABAQgGAgQgBAcAYAPIDSB5IhVB1IgDABIgBAEIgpAjIAAgBIhHAeIgSADIgqADQgVACgPAAIgGAAgAivDxQAXg8AFgYQAKgsgMgnQgFgQgDgZIgFgpIgOhtIAKgzIAOABIAOBoIAbCXIAAgBIABAsIACAsQAAAEAGAFIALAJIAAAAIAwAbIgrkzIgOhCIABABIAAgwIghACQgSAAgCAVIgOAIQgsgLgLAmIgaAtIgJBrIhfgLIAoBAIAAAAIAKAUIAJAKIAaAyIAZAUIAoAoIgBAAgAgQDlIA/gbIgqknQgEgbAAgTQAAgWgKgJQgKgJgVgBIgfgKgAAciQIAyFTIANgBIADgUIAAgBIAQgKIAAAAQAVgHAGgXQAEgbAEgNIgChHIgrhfIgjgsIgWgngAF2ASQgliAg+hSIgug3Ig/hBIgsgnIhCCYQgLAMAEAKQACAEAOANIBOBPIAPAUQAHANAGAcQAJAWAcgBg");
	this.shape_1224.setTransform(65.2857,312.4792);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#E8E5D4").s().p("AFIHAIgnAAIhvhsIgJgCIgVgTQiHhii0gZQiagVhwA8IgTANIAAAAIg5ARIgQiTIgQACIAWCeIgDAUIAAAAIgPALIg3A7IgRALQgMgYAGglQAJgzAAgKIgGhHIAMgcIAOgmQAIgWAHgOQAEgIAJgKIAPgRIACgCIACABIAABCIAQgBIAFiPIAbiMIAAAAIAPgKQAFAAAAgFIA8g2IBGgzIAUgTICOhaIAJgKIATgBIANAMQAIAGAGAAIC2ADQBqABBOgCQBJgCBUgRQBBgMBZgaQAJgDAUADIg/BrIgzgSIgegBIgqAgIgXB1IACAyIAHAsIAVATIAYAEIAzgIIAeAAQAPCUBKCVQAGAMAFATIAKAgIhQAyIg8AeIgKABIgUATIABgBIg9AoIAAAAIgBABIABgBIgKACIgyAxgAGODSQgJAAgKAJQgKAJgBAIQgBAIAJALQAJAMAHAAQAIAAAOgIIAegTIgcgWQgLgIgHAAIAAAAgAnaAYIAgAqIARgTQAKgMABgJQABgGgIgMIgOgSg");
	this.shape_1225.setTransform(78.3971,222.8182);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#4B2311").s().p("AgDAAQADgCAEADIgEABg");
	this.shape_1226.setTransform(79.825,169.4857);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#4B2311").s().p("AgCAAIACgCIADAFg");
	this.shape_1227.setTransform(197.4,194.9);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#4B2311").s().p("AgLAAIAQgEIAHAJg");
	this.shape_1228.setTransform(64.15,90.025);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#C15517").s().p("AgCgNIAFAFIgBARIgBAFg");
	this.shape_1229.setTransform(61.025,92.725);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#4B2311").s().p("AgKADIAVgIIgIALg");
	this.shape_1230.setTransform(217.225,290.3);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#4B2311").s().p("AACAOIgLgCIAIgUIAKgFIABAXQgCAEgEAAIgCAAg");
	this.shape_1231.setTransform(128.325,382.4833);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#4B2311").s().p("AgMAEIAAgHIAZACIAAAFg");
	this.shape_1232.setTransform(100.8375,81.05);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#D3CEB4").s().p("AgMgIIAZAHIAAAKg");
	this.shape_1233.setTransform(54.9,364.6);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#C3BB99").s().p("AgKgBQAFABADgFIANALg");
	this.shape_1234.setTransform(129.625,384.025);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#4B2311").s().p("AgHgNQAQAEgBAIQgBAEgKAKg");
	this.shape_1235.setTransform(220.5757,325.35);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#C15517").s().p("AgIgLIATAVIgUABIgBABg");
	this.shape_1236.setTransform(206.125,204.675);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#8E94A3").s().p("AgMgFIAaADIgbAIg");
	this.shape_1237.setTransform(144.45,171.825);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#4B2311").s().p("AgDgKIAFgBIACAWIgFABg");
	this.shape_1238.setTransform(126.675,8.7);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#8E94A3").s().p("AgCARIAAgiIAEAAIABAiIgDABg");
	this.shape_1239.setTransform(126.7,22.775);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#4B2311").s().p("AgSgCIAOgIIAXAHIgjANg");
	this.shape_1240.setTransform(180,145.5);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#E8E5D4").s().p("AgEgUIAJAAIgBApg");
	this.shape_1241.setTransform(8.75,304.8125);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#C15517").s().p("AgWAEIAWgMIAXAGIgCALIgmAAgAAXgCIAAAAIAAAAgAAXgCg");
	this.shape_1242.setTransform(63.05,90.85);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#4B2311").s().p("AAGAQIgdgVIAKgGIABgEIAbAPIAJAQg");
	this.shape_1243.setTransform(62.575,95.3);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#4B2311").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_1244.setTransform(126.675,17.85);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#8E94A3").s().p("AABATIgTgTIgBgTIARACIAVAbIgJAKQgFgBgEAAg");
	this.shape_1245.setTransform(195.1,196.725);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#4B2311").s().p("AAKgYIAKAbIgnAWg");
	this.shape_1246.setTransform(160.225,91.225);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#8E94A3").s().p("AgpAEIAAgLIBSAGQACADgCACIgLADIhHgDg");
	this.shape_1247.setTransform(99.1625,92.05);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#4B2311").s().p("AgIgGQAOgWAYgGIgeAwIgLAMIgSAJQAQgjAFgGg");
	this.shape_1248.setTransform(152.275,377.2);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#4B2311").s().p("AgpAPIAggdIAagJIAYADIhJAsg");
	this.shape_1249.setTransform(144.1,173.925);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#C15517").s().p("AAGgaIAVAMIABALIgVAbIgiADg");
	this.shape_1250.setTransform(20.4375,211.175);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#4B2311").s().p("AgsgJIABgUIBYAvIgBAMIgKAAg");
	this.shape_1251.setTransform(46.7,141.525);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#8E94A3").s().p("AgDBSIAAijIAHACIAAChg");
	this.shape_1252.setTransform(127.6,52.775);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#4B2311").s().p("AgcgaIAOgGQAJgDABACQAHAIAKAOIAQAXIgBAXg");
	this.shape_1253.setTransform(202.275,202.3386);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#4B2311").s().p("AgFgBIAbghIAXAWIhZAuQAbgXAMgMg");
	this.shape_1254.setTransform(72.725,174.3);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#4B2311").s().p("AAABjIgHjIIADABIADgBIAJDLg");
	this.shape_1255.setTransform(127.2,34.65);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#4B2311").s().p("AhKgIICUABIABAKIiLAGg");
	this.shape_1256.setTransform(110.725,90.625);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#4B2311").s().p("AhDgLIgWgVIANgDQAIgCAEACQA0AUBnApIgNALg");
	this.shape_1257.setTransform(60.4,364.875);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#4B2311").s().p("AAYgJQgSgZgugKQgDgBgDgDIgGgFIAAgLIAmAKIAMAGIASAGQAWAHAIALQALANgIAVQgDALgCAQIgCAbIgMABQAOgvgUgbg");
	this.shape_1258.setTransform(51.4063,130.325);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#4B2311").s().p("AhgAeICWg9IAfgGIAMALIi3BAg");
	this.shape_1259.setTransform(199.75,327.675);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#8E94A3").s().p("AghgVQAVgTA5AOIhVA7QgLglASgRg");
	this.shape_1260.setTransform(200.5009,351.878);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#4B2311").s().p("AgrhEIAMAAIAUBnQA0gMgGgzIAJA7IhNAmg");
	this.shape_1261.setTransform(177.75,133.575);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#C15517").s().p("AgsAMIAKgUIAZgUIgBAAIAPgKIgBAAIApAUIgeAyIgoAHg");
	this.shape_1262.setTransform(156.7,90.575);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#C3BB99").s().p("AgHAkQgrglANgsIBOAoIgKAyIgdABg");
	this.shape_1263.setTransform(45.9887,145.15);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#4B2311").s().p("AglBDQAfgfASgwQAFgMAXhOQAYgJABANQABAIgDASIgKAKQgGAGgCAFIgjBCQgVApgPAZQgEAIgNAHIgVALQAPgdAMgLg");
	this.shape_1264.setTransform(224.7875,279.082);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#8E94A3").s().p("AgMAfIgogoIABABQgJgRAFgKQAGgKARAIQAUAJAZATIAtAeIgpAUg");
	this.shape_1265.setTransform(144.4824,79.6222);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FDFDFD").s().p("AgtAdIABAAIgBAAIAAAAIgHgKQACgyA9gEIAAgDIALAKIAUALIgCgBQgBAGAEAEIgCAIQgBAFABADQABADAEADIAHAGIgXAMQgIACgcAFg");
	this.shape_1266.setTransform(69.875,87.625);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#4B2311").s().p("AiAA2IC5hnQADAAAFgDIAzgHIANAKIh8AuQgTAEgHAHQgKALAJATIgDAVIgLAAIgPghIhIAig");
	this.shape_1267.setTransform(190.675,347.825);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#C3BB99").s().p("Ag8gEIANgSIgBAAIApgUQAwACAUAuIgPAKIAAAAIgZAUIgeAHg");
	this.shape_1268.setTransform(151.075,86.05);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#8E94A3").s().p("AgkAoIAAAAIgCAAIACAAIgUgKIgKgJQASgoAngPQAngPAlAWIgtAvQgVAVgaAAIgLgBg");
	this.shape_1269.setTransform(77.8,81.7632);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#8E94A3").s().p("AgPBzIAEjzIAQAAIALDqQAAAHgQARQgPgKAAgFg");
	this.shape_1270.setTransform(113.575,53.9);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#4B2311").s().p("AACDFQgFgIABgUIgPgcQgEgDAAgFIABgrQgJhSADg+QADhOAVhCIAHgLIAMAAQg6C/BFDlQgTgBgHgNg");
	this.shape_1271.setTransform(11.3625,293.65);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#C15517").s().p("AghgWQABgcAFgHQAGgIAigOIAUBfQAGA0g0AMg");
	this.shape_1272.setTransform(177.9555,129.05);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#4B2311").s().p("AAfA2Qh+gVhqhMIAMgJIBKAjQArAVAfALQB8AtBjgsIASgCIABAMIghARIg6ALg");
	this.shape_1273.setTransform(194.15,290.2);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#E8E5D4").s().p("AA2A8QgcgQgQgOQgWgWggggIg3g7IAfgEIAKAKIgBAAIBpAvQgVAHgBALQgBAKAOAPQAMANAzA+g");
	this.shape_1274.setTransform(52.05,157.6);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#C3BB99").s().p("ABJAsIgVgCIgqgZQgYgOgSgHQgPgGgbgGIgrgKQgEgBgGgGIgKgKQA/gDBKAPQAvAKBbAaIhCAng");
	this.shape_1275.setTransform(124.925,73.2507);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#C15517").s().p("Ag/AtIAJhuQACghAcAIIAFAFQADADADABQAvAKASAZQATAcgNAuIgBAYQgBAPgEAJQgBAFgKAEIgQAIgAgsAMQgDASAMAKQAIAHASAEQALAEAMgBQAOgBAHgFQATgPgcgZIASgjQgOgKg7ghg");
	this.shape_1276.setTransform(48.6511,134.022);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#4B2311").s().p("Ag9A9IA9AAIgshOQgWglgdgJQgegKgsAQIgBgNQAzgRA2AKQAsAIA1AbIAwAYIgBgBIAdALIA/A6IgDACIgXABIgQgCIABAAIgfgUIAAAAIgogkIgUgDIABABIhEgvIgIAKIAnBIQALARgEAOQgEAMgQAKg");
	this.shape_1277.setTransform(180.25,189.6047);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FDFDFD").s().p("Ah+AXIAAgPQB4g5CEgCQgNAegSAKQgVALgfgLQgJgDgRAHQgSAKgLAEIAnAtg");
	this.shape_1278.setTransform(95.45,74.4);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#E8E5D4").s().p("AACAuIhqgeIgUgKIgEgGQAdgFAIgCIAXgMIgHgGQgFgEAAgDQgBgDABgFIACgJIDOAuIABALIhFAcIgUANg");
	this.shape_1279.setTransform(82.1,91.65);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#C3BB99").s().p("AhpBdIAEg7IgDgbIADgVIAcgpIB7gvIA4AEQgRAggwAFQg2AFgSARQgGAYgDA2QgKAwgvAPg");
	this.shape_1280.setTransform(198.6,353.1);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#8E94A3").s().p("AhBAuIgNgdIgQgTIAAABIAAggIAogKIgBAAIAqgJIgBAAIBGAKIAnApQgGATgYAJQgcAGgNAHIg6ANg");
	this.shape_1281.setTransform(133.65,82.95);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#C3BB99").s().p("Ah0BFQAEgHATgSQAMgMAOgWIAXgjIADgIIBPgdIAngVIAKgDIAkgOQg2BTgvArQg+A6hPARQgGgSAJgOg");
	this.shape_1282.setTransform(169.58,155.2);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#C3BB99").s().p("AgfBYIACgTIAAgTIAOgzIAOgqQAHgZAEgSQACgLgBgQIgCgbIAhgSIAGA1QADAggCAVQgDAfgJAzIgOBSQgDAUgKAJQgKAJgSACIgfAHIAShHg");
	this.shape_1283.setTransform(210.115,308.625);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#C15517").s().p("AgwA6QgFgCgjACQgaABgJgWQBFg5ArgUQBCgeBFATIgcAhQgMANgbAWIgqAPIgbAaIgTABg");
	this.shape_1284.setTransform(62.55,176.0066);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#C3BB99").s().p("Ai0BiIgIgIIALgLIATAAQALAAAGgEQB2hJA3gnQANgKAOgUIAYgiIAbAXQAQAXAUgKIAjgRIAIAJQiOByjdA9IAAAAQgCAAgEgEg");
	this.shape_1285.setTransform(169.95,370.7525);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#8E94A3").s().p("AhwAXQAggyAVgMQAVgLAwAGQALABATgDIAegGIArADQgBAEgCAEIgagCIAAAIIAaAAIgEBYg");
	this.shape_1286.setTransform(91.15,85.025);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#8E94A3").s().p("AhvAhQAAgLACgGIAGgUIAJgZIAqAAIAqgBQAEAAAGgGIAJgMIAcgBIA8AeIAAgBIAAABIAAAAIACAUIANAdIgDAQIgWACIjGACIAAgRg");
	this.shape_1287.setTransform(114.475,84.7);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FDFDFD").s().p("AgcCXIgNgHIglgJIgIgRQgEgJABgGQAZiUBhhrQADgDAJAAIAQgBIAeAWIgCAKIhcCrQgFAJgCAPQgDAPAEACQAaAPgIAUQgEALgOAXg");
	this.shape_1288.setTransform(54.0909,110.375);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#E8E5D4").s().p("AiLA1IAAgCIgogtQALgDATgKQARgHAJADQAfALAVgLQASgKANgeIAfgEIAJAKQAGAGAEACIArAKQAbAFAPAHQASAHAZAOIAqAZIgVALIABAAIgoAKIAAgBIjYAFg");
	this.shape_1289.setTransform(112.15,74.425);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#E8E5D4").s().p("AhzA3QABgFgGgBIgIgHIhMghIgdgFQACgCgCgCIAJgEIC+gKIAVgGIAwgEICUgnIAzAwIgMAKIhwAjIhiATQgFgCgDAEIgIAFIhQAIg");
	this.shape_1290.setTransform(126.7,91.975);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#F76607").s().p("Ai3CKQB3i+CshhQAJAWAagBQAjgCAFACIg2A7Ig9ApIgUATQglgIgCAlIgeAVIg7A2QgBAFgFAAIgPAKIAAAAIg8Aog");
	this.shape_1291.setTransform(39.35,194.725);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#C15517").s().p("Ag1g5IA9gZIBngKIAEAbIg6BiQgfA8g7gJIgPAAIgOACIg0AHg");
	this.shape_1292.setTransform(208.65,333.25);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#C3BB99").s().p("ABQCYQgLgPgJgJQgJgMgGgEQgLgHgMANIgKgBQgGgBgCgCQg3hHgeghQgFgGgLgFIgSgKIgGgKIAAgUQAQgKAEgMQAEgOgLgRIgohJIAJgKIBEAvIgeAEIAeA8IgBAAIAFAZIA3AoIAKAJQAVAeAMACQALABAugVIgegfIgLgUIAJgKIAXATIA5A9IABgBIAMAlIgfAzIgBABIgMAKQgHAHgCAFQgCAFACAJIACAPIgSgag");
	this.shape_1293.setTransform(191.425,201.925);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#C15517").s().p("ACtA/Qg2gcgsgIQg2gJgxARIgcABIilhRIArgaIABgBIANgIQBZgSBcArQAlAQB5BOQALAHANAPIAXAZIgxgXg");
	this.shape_1294.setTransform(166.1,179.0698);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#C3BB99").s().p("AAuCzQgEglgEgYQAAgSgDgIQgFgNgTABQgjiqhZhqIAagVIAngWIANABQAHABACADQBuB7AeCQIg5AhIAOCrIgSADIgHg9g");
	this.shape_1295.setTransform(167.075,115.525);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FDFDFD").s().p("AlmhcIgBgKIB5ApIBjAUIAKADIBaADICxBCIATAEIAbAAIAQgDQAYAXAvAFQAuAFAfgRIAMAVIgIAUIgZAJQgPAFgKAAQlvgCkljBg");
	this.shape_1296.setTransform(92.125,374.75);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#C3BB99").s().p("AhTD+IAgk7IAIgMIgBAAIAWgLQAMgGAFgIQAOgaAVgoIAjhDQADgFAGgGIAKgLQAAD7hGDGIgVA6gAgOBCIAAAoIAOAOIALgUQAGgNAAgJQAAgSgJgCIgEgBQgGAAgMAJg");
	this.shape_1297.setTransform(222.725,297.1);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#C15517").s().p("AhHFOQADgfAAgVQgBgMgGgRIgMgdQBLgpAPhEIACgSQAmhYgVhmQgLhxg+iEQgFgJgDgOIgHgXQBTBuAtC1IAJAeIAFAnIAFAVIAHCeQgXBOgFAMQgTAygfAfQgLALgPAcIABAAIgqATIgSABIAEgzg");
	this.shape_1298.setTransform(219.95,253.2375);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#C3BB99").s().p("Ai8A/Ii4gDQgGAAgHgGIgOgMIAKgMIApgcIBaguIA6gDQAkgBAXADQD1AbEogsIgBAMIgpApIgSAKIgGgEIgDAHIADABQgUgDgJADQhZAahBAMQhUARhIACIh0ABIhDAAg");
	this.shape_1299.setTransform(103.15,177.5417);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FDFDFD").s().p("Ag+HSQiCmqC1l3QAKgVAYgaQAegcANgPIAWgcIAAACIAcgOIABAXIgWCfIgPARQgJAKgEAIQgHAOgIAWIgOAmQgGgjgGgEQgGgFgXAOIgBAAQgOAiAGAMQAGAMAfAAIAGBHQABAKgJAzQgGAkALAYIgNAnIAAAAIgKAUIAAgBIgQAWIgDATIAAAAIgTAgQgVBBgEBOQgDA/AJBTIgKAAg");
	this.shape_1300.setTransform(14.533,256.125);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#8E94A3").s().p("AkcBrIhkgMIiWgaIhQgaIgzgXIAKgyIALgBIBkAcIBlAVIAnAEIAKAEICLANIFBAAIBugLIAdgGIA8gFIBzgYIChguIAEgDIAqgPIBOgmQACAdgEAOQgFAWgUANIgNAHIgJAQIgzAJIhFAeIhQAWQigAmi9AMQheAHh0AAQhDAAhKgDg");
	this.shape_1301.setTransform(115.6725,147.6508);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#F76607").s().p("AlwETIgBgYIAPgIQAKgGAEgGIByiMIATgVIA0gwIAmgqIBshHQAEgCABgDIATgPIDOh5IAcgMIB5gpIg9CXQgDADgFAAIi5BoIgdAQQgQAIgLAIQgPALgZAfIAAABIgnAeIgtAxQgvAHACArQgXAGgPAWQgFAGgRAkIgLALQgGAFgFABIijAWgAhtCxIABAAIgBABg");
	this.shape_1302.setTransform(166.225,356);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#D3CEB4").s().p("AgvBeQgygDhJgGIh8gKQgEgEgEADIitgfQgzg9gMgNQgPgPABgKQACgLAUgHIDNAnIBkALICLADQBTABA3gBQB2gDBfgLQBxgNBhgbIBOgTIgWAlQgOAVgMAMQgUATgEAFQgJAOAGATQj3A+jWAAIhAgBg");
	this.shape_1303.setTransform(109.7468,162.0979);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#F76607").s().p("ABWJxIhWgRQhogqg0gUQgEgCgIACIgNADQgVgZgMgLQgIgIgQgKIgYgSIhThKIgJgMIgBAAIgSgVQh1h8g/imQhGjkA7i/IgBgUIAOgTIAGgWIAAAAIALgUIgBABIAfgyIA3g8IAPgLIAAABIA9gjIAJgQIAAABIAUgBIAYgGQCog8CkA4QAtAPA/AcIBrAvIAeAKIAIAQIBwBeIAAAAIANAaQAHAPAHAKIBmCWQBCB8AOBqIAGAdIgJDaIgLApIgkBWIgZAjIhuBoIhWAtQhfAdhSAAQgbAAgZgDgAiqmyQgxADgZAAIgiAMQh6AUg7B/QhsDnCVD/IA8BaIAuA3IAxAyIBFA0QCtB5CyglIAcgHIA8gnIAAABQApAEAAgnIABgEIADgBIAZgMQAPgIAGgIQA5hJANhjIAAiCIgJgUIgDgdQgZhagLgfQgBgEgIgEIgNgGIgKgtIgVgTIAAgUIgWgjQgNgVgLgMQgJgKgRgMIgcgUIgogoIAAAAIgTgLQgCgagRgMQgNgIgdgDIgOgSQgJgKgHgDIhLgdQgtgQghgGQgZgEgiAAIgNAAg");
	this.shape_1304.setTransform(69.5955,306.653);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#1F1513").s().p("AkwdlQkfhTjjjpQj9kChGkxQhIk0B1lXQBDjDCCiVQCAiSC5hiIAmgVQgrgOgsgmQgvgtgZgVQguglgPg1QgMgrAGhCQAMh0AShKQAZhlAwhKQC4keFRg4IBMgJIAAkJQAsgUAQAIQAOAHACApIAJDrIA+AAIAAjZIgKmLIAAgKQgBgHACgDIAOgTQAIgLAHgCQAZgFABAlQACBsAEBrIARGKQABAbAOAQQAMANAbAKQCzBEBvByQB2B8ApC0IAUBSQALAxAFAiQANBog6A6Qg4A8geAcQg1Awg5ARIAsAWQIfD8B1JLQBPGQijFKQh2Dui9CSQi/CVkEAyQiRAciHAAQiqAAicgtgAvoDwQgZAagKAVQi1F4CCGqIAJAqQAAAFAFADIAPAdQgBATAGAJQAHAMASABQA/CmB1B8IATAUIABABIAIAMIBTBKIAZARQAPALAJAHQAMALAUAaIAXAVIAaASQElDCFvABQAKAAAPgFIAZgIIAMABIAWAIICjgWQAFgBAGgGIALgKIASgJIAIAHQAEAFACgBQDfg8CNh0QAvgPAKgwQADg4AFgXQASgRA3gFQAxgFAQghIg4gDIgMgKIAPgCIAOAAQAgAFAXgOQAVgMAQgeIA5hiQAMgKABgGQAAgHgRgEIhnAKIgMgMQATgCAKgJQAKgJADgUIAOhSQAJg0ADgfQACgVgEggIgGg1IAAgLIATgKIAOACIggE8IBMAAIAWg5QBGjHAAj7QADgSgBgHQgCgNgYAIIgGifIgGgVIgEgnIgKgeQgti1hUhuIgUgeIgUgUIgUgoIgUgWIgQgYQgKgOgIgIQgCgCgIADIgPAGIgXgTIgWgcIAXgBIAGAEIgEgGIg+g6IgdgLIgWgYQgNgPgLgHQh6hPgkgRQhdgqhaARIgMAJIgBAAIgzgGQknAsj2gbQgXgDgjABQgnADgUAAIgXgWQhFgThDAeQgrAUhFA6QisBhh3C+IgiA1IAjgDQgNAPgeAcgAMiYXQgSAQALAmIBWg7QgZgGgSAAQgYAAgMALgAjyjnQBJAGAyACQDwALEdhIQBPgRBAg7QAugrA2hUIgXgGQATgMAGgXQADgNgBgdIgeidQgiAPgGAHQgGAHAAAcIgNgBIgFgtIA5ghQgfiShuh6QgDgDgHgBIgMgBIgKgcIgpgUQgUgwgxgCIgsgfQgagTgUgJQgSgIgFAKQgFAKAIARIhHgKIBCgnQhbgcgvgJQhLgQg+ADIgeAEQiGACh3A6IAAAPICaAcIgBACIgeAGQgSADgMgBQgxgGgVALQgVAMggAzIDbAeIAEhfQADgEAAgEICBgCIgKAMQgFAGgFAAIgqABIgqAAIgIAYIgHAWQgBAGAAALIgBARIAKASIgJAEIhUgGIjQguQgEgEACgGQAjAHAagbIAtgvQgmgXgoAPQgnAQgSAqQg+AEgCAzIgRAEIgWAOIAEAcIgKAGIgPAAQgKAAgDADQhhBsgaCUQgBAGAFAKIAHAQIAAALQgcgIgCAhIgJCDQgOAsArAnIgfAEIA3A7QAgAhAYAVQAQAOAbARIAvAcICtAeIAEACIAEgBIB8ALgAgt33IgED0QAAAFAQAJQARgQAAgHIgLjsgABn3UIAAClIAIAAIAAiiIgKjLIgBhiIgFAAgABd9GIACAYIAHgBIgCgXg");
	this.shape_1305.setTransform(116.9334,193.8272);

	var maskedShapeInstanceList = [this.shape_810,this.shape_811,this.shape_812,this.shape_813,this.shape_814,this.shape_815,this.shape_816,this.shape_817,this.shape_818,this.shape_819,this.shape_820,this.shape_821,this.shape_822,this.shape_823,this.shape_824,this.shape_825,this.shape_826,this.shape_827,this.shape_828,this.shape_829,this.shape_830,this.shape_831,this.shape_832,this.shape_833,this.shape_834,this.shape_835,this.shape_836,this.shape_837,this.shape_838,this.shape_839,this.shape_840,this.shape_841,this.shape_842,this.shape_843,this.shape_844,this.shape_845,this.shape_846,this.shape_847,this.shape_848,this.shape_849,this.shape_850,this.shape_851,this.shape_852,this.shape_853,this.shape_854,this.shape_855,this.shape_856,this.shape_857,this.shape_858,this.shape_859,this.shape_860,this.shape_861,this.shape_862,this.shape_863,this.shape_864,this.shape_865,this.shape_866,this.shape_867,this.shape_868,this.shape_869,this.shape_870,this.shape_871,this.shape_872,this.shape_873,this.shape_874,this.shape_875,this.shape_876,this.shape_877,this.shape_878,this.shape_879,this.shape_880,this.shape_881,this.shape_882,this.shape_883,this.shape_884,this.shape_885,this.shape_886,this.shape_887,this.shape_888,this.shape_889,this.shape_890,this.shape_891,this.shape_892,this.shape_893,this.shape_894,this.shape_895,this.shape_896,this.shape_897,this.shape_898,this.shape_899,this.shape_900,this.shape_901,this.shape_902,this.shape_903,this.shape_904,this.shape_905,this.shape_906,this.shape_907,this.shape_908,this.shape_909,this.shape_910,this.shape_911,this.shape_912,this.shape_913,this.shape_914,this.shape_915,this.shape_916,this.shape_917,this.shape_918,this.shape_919,this.shape_920,this.shape_921,this.shape_922,this.shape_923,this.shape_924,this.shape_925,this.shape_926,this.shape_927,this.shape_928,this.shape_929,this.shape_930,this.shape_931,this.shape_932,this.shape_933,this.shape_934,this.shape_935,this.shape_936,this.shape_937,this.shape_938,this.shape_939,this.shape_940,this.shape_941,this.shape_942,this.shape_943,this.shape_944,this.shape_945,this.shape_946,this.shape_947,this.shape_948,this.shape_949,this.shape_950,this.shape_951,this.shape_952,this.shape_953,this.shape_954,this.shape_955,this.shape_956,this.shape_957,this.shape_958,this.shape_959,this.shape_960,this.shape_961,this.shape_962,this.shape_963,this.shape_964,this.shape_965,this.shape_966,this.shape_967,this.shape_968,this.shape_969,this.shape_970,this.shape_971,this.shape_972,this.shape_973,this.shape_974,this.shape_975,this.shape_976,this.shape_977,this.shape_978,this.shape_979,this.shape_980,this.shape_981,this.shape_982,this.shape_983,this.shape_984,this.shape_985,this.shape_986,this.shape_987,this.shape_988,this.shape_989,this.shape_990,this.shape_991,this.shape_992,this.shape_993,this.shape_994,this.shape_995,this.shape_996,this.shape_997,this.shape_998,this.shape_999,this.shape_1000,this.shape_1001,this.shape_1002,this.shape_1003,this.shape_1004,this.shape_1005,this.shape_1006,this.shape_1007,this.shape_1008,this.shape_1009,this.shape_1010,this.shape_1011,this.shape_1012,this.shape_1013,this.shape_1014,this.shape_1015,this.shape_1016,this.shape_1017,this.shape_1018,this.shape_1019,this.shape_1020,this.shape_1021,this.shape_1022,this.shape_1023,this.shape_1024,this.shape_1025,this.shape_1026,this.shape_1027,this.shape_1028,this.shape_1029,this.shape_1030,this.shape_1031,this.shape_1032,this.shape_1033,this.shape_1034,this.shape_1035,this.shape_1036,this.shape_1037,this.shape_1038,this.shape_1039,this.shape_1040,this.shape_1041,this.shape_1042,this.shape_1043,this.shape_1044,this.shape_1045,this.shape_1046,this.shape_1047,this.shape_1048,this.shape_1049,this.shape_1050,this.shape_1051,this.shape_1052,this.shape_1053,this.shape_1054,this.shape_1055,this.shape_1056,this.shape_1057,this.shape_1058,this.shape_1059,this.shape_1060,this.shape_1061,this.shape_1062,this.shape_1063,this.shape_1064,this.shape_1065,this.shape_1066,this.shape_1067,this.shape_1068,this.shape_1069,this.shape_1070,this.shape_1071,this.shape_1072,this.shape_1073,this.shape_1074,this.shape_1075,this.shape_1076,this.shape_1077,this.shape_1078,this.shape_1079,this.shape_1080,this.shape_1081,this.shape_1082,this.shape_1083,this.shape_1084,this.shape_1085,this.shape_1086,this.shape_1087,this.shape_1088,this.shape_1089,this.shape_1090,this.shape_1091,this.shape_1092,this.shape_1093,this.shape_1094,this.shape_1095,this.shape_1096,this.shape_1097,this.shape_1098,this.shape_1099,this.shape_1100,this.shape_1101,this.shape_1102,this.shape_1103,this.shape_1104,this.shape_1105,this.shape_1106,this.shape_1107,this.shape_1108,this.shape_1109,this.shape_1110,this.shape_1111,this.shape_1112,this.shape_1113,this.shape_1114,this.shape_1115,this.shape_1116,this.shape_1117,this.shape_1118,this.shape_1119,this.shape_1120,this.shape_1121,this.shape_1122,this.shape_1123,this.shape_1124,this.shape_1125,this.shape_1126,this.shape_1127,this.shape_1128,this.shape_1129,this.shape_1130,this.shape_1131,this.shape_1132,this.shape_1133,this.shape_1134,this.shape_1135,this.shape_1136,this.shape_1137,this.shape_1138,this.shape_1139,this.shape_1140,this.shape_1141,this.shape_1142,this.shape_1143,this.shape_1144,this.shape_1145,this.shape_1146,this.shape_1147,this.shape_1148,this.shape_1149,this.shape_1150,this.shape_1151,this.shape_1152,this.shape_1153,this.shape_1154,this.shape_1155,this.shape_1156,this.shape_1157,this.shape_1158,this.shape_1159,this.shape_1160,this.shape_1161,this.shape_1162,this.shape_1163,this.shape_1164,this.shape_1165,this.shape_1166,this.shape_1167,this.shape_1168,this.shape_1169,this.shape_1170,this.shape_1171,this.shape_1172,this.shape_1173,this.shape_1174,this.shape_1175,this.shape_1176,this.shape_1177,this.shape_1178,this.shape_1179,this.shape_1180,this.shape_1181,this.shape_1182,this.shape_1183,this.shape_1184,this.shape_1185,this.shape_1186,this.shape_1187,this.shape_1188,this.shape_1189,this.shape_1190,this.shape_1191,this.shape_1192,this.shape_1193,this.shape_1194,this.shape_1195,this.shape_1196,this.shape_1197,this.shape_1198,this.shape_1199,this.shape_1200,this.shape_1201,this.shape_1202,this.shape_1203,this.shape_1204,this.shape_1205,this.shape_1206,this.shape_1207,this.shape_1208,this.shape_1209,this.shape_1210,this.shape_1211,this.shape_1212,this.shape_1213,this.shape_1214,this.shape_1215,this.shape_1216,this.shape_1217,this.shape_1218,this.shape_1219,this.shape_1220,this.shape_1221,this.shape_1222,this.shape_1223,this.shape_1224,this.shape_1225,this.shape_1226,this.shape_1227,this.shape_1228,this.shape_1229,this.shape_1230,this.shape_1231,this.shape_1232,this.shape_1233,this.shape_1234,this.shape_1235,this.shape_1236,this.shape_1237,this.shape_1238,this.shape_1239,this.shape_1240,this.shape_1241,this.shape_1242,this.shape_1243,this.shape_1244,this.shape_1245,this.shape_1246,this.shape_1247,this.shape_1248,this.shape_1249,this.shape_1250,this.shape_1251,this.shape_1252,this.shape_1253,this.shape_1254,this.shape_1255,this.shape_1256,this.shape_1257,this.shape_1258,this.shape_1259,this.shape_1260,this.shape_1261,this.shape_1262,this.shape_1263,this.shape_1264,this.shape_1265,this.shape_1266,this.shape_1267,this.shape_1268,this.shape_1269,this.shape_1270,this.shape_1271,this.shape_1272,this.shape_1273,this.shape_1274,this.shape_1275,this.shape_1276,this.shape_1277,this.shape_1278,this.shape_1279,this.shape_1280,this.shape_1281,this.shape_1282,this.shape_1283,this.shape_1284,this.shape_1285,this.shape_1286,this.shape_1287,this.shape_1288,this.shape_1289,this.shape_1290,this.shape_1291,this.shape_1292,this.shape_1293,this.shape_1294,this.shape_1295,this.shape_1296,this.shape_1297,this.shape_1298,this.shape_1299,this.shape_1300,this.shape_1301,this.shape_1302,this.shape_1303,this.shape_1304,this.shape_1305];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,233.9,387.7), null);


// stage content:
(lib.אנימצייתטעינה1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// r2d2
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(300.95,228.55,0.0539,0.0539,165.0111,0,0,255,684.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[300.9,228.6,311,229.1,317.4,224,319.4,222.3,327,212.6,329.8,209,330.8,206.7,332.4,202.8,331.8,198.4,333.3,187.4,333.3,181.1,333.3,177.6,331.3,173.2,329.2,168.5,328.9,165,328.5,161.4,325.5,157.9,322,154.1,320.7,152,317.7,147.4,315.3,145.7,312.9,144.1,308.4,142.2,307.7,141.8,305.7,140.2,303.8,138.8,302.3,138.4,298.7,137.3,293,137.3,291,137.3,287.7,138.3,283,139.4,280.3,139.8,272.8,141.1,270.2,142.2,263.2,145.1,259.7,147.1,254.2,150.1,250.4,153.7,247.1,156.8,244.6,161.8,241.4,167.9,239.9,169.9,237.7,172.7,235.7,176.8,232.9,182.4,232.9,186.4,232.9,191.9,237.1,201.8,239.8,208.2,243.2,214.1,248,222.5,248.2,222.8,250.4,226.3,252.4,228,256.3,231.1,267.8,231.1,270.4,231.1,274.8,230.3,279.2,229.4,281.7,229.4,285.7,229.6,289.5,229.8,291.3,229.8,292.8,229.5,294.2,229.2,296.3,229.2], orient:'fixed'}},59).wait(1));

	// bb8
	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(286.6,146.05,0.1303,0.1303,6.7004,0,0,119.5,358.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[286.7,146,283.1,144.5,281.7,144,279.4,143.2,275.6,143.2,266.3,143.2,258,149.9,255.5,152,251.5,156,247.4,160.3,245.6,161.8,242.5,164.5,240.7,169,238.9,173.5,238.9,179,238.9,182.7,238.4,190,237.9,197,237.9,200.6,237.9,216.5,251.5,225.2,263.3,232.7,280.9,232.7,288.7,232.7,293.4,231.8,294.6,231.5,307.4,227.9,308.2,227.7,313.2,226.6,317,225.7,318.8,225,320.9,224.1,322.5,221.6,323.4,220.1,325.3,217,329,211.7,332.8,196.5,336.7,180.8,336.7,170.1,336.7,158.7,319.6,152.3,314.2,150.3,305.2,148.2,295.9,146.1,293.5,145.4], orient:'fixed'}},59).wait(1));

	// astroid
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(285.1,188.25,0.1609,0.1609,0,0,0,236.2,244.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(467.1,297.3,-84.20000000000005,-18.400000000000034);
// library properties:
lib.properties = {
	id: '822602D3CE6AB546A5BCC15067447D26',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
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
an.compositions['822602D3CE6AB546A5BCC15067447D26'] = {
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