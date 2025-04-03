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
p.nominalBounds = new cjs.Rectangle(0,0,83,168);// helper functions:

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
	mask.graphics.p("EgluAiYMAAAhEvMBLdAAAMAAABEvg");
	mask.setTransform(241.5,220);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#672D19").s().p("AgZAeQgPgPABgCQAIgNANgPIAXgbIAkAlIgaAbQgNAOgJAHIgBAAQgDAAgOgNg");
	this.shape.setTransform(176.247,348.382);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#672D19").s().p("AAnhHQADgEAGgGIAKgJIABAtQgBA7gcAgQgbAgg+ANg");
	this.shape_1.setTransform(187.0063,344.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#611F0B").s().p("AgZAEQgFgNACgCQAIgIAPgGIAYgLIALAPIgrA6IgMghg");
	this.shape_2.setTransform(43.2333,345.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#611F0B").s().p("AgZgfQgDgHgGgJIgLgQIABgUIBZAeIABBiIggAnIgnhzg");
	this.shape_3.setTransform(39.525,363.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#672D19").s().p("AAuBmQgHgNgHgIIgdgeQgQgRgQgIQgcgQgKgvQgKgxASglIALAPQAGAJADAHIAnBzIAgglIAnCFIgNAFIgMgWg");
	this.shape_4.setTransform(40.9099,369.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BD795E").s().p("AgCAEIgDgCQAAgBADgGIAIAEIgEAHg");
	this.shape_5.setTransform(176.9719,299.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A16A4E").s().p("AgigFIBFgeIgUBEIgSADg");
	this.shape_6.setTransform(153.45,271.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A16A4E").s().p("AgEAFIAFgLIADADIgGAKg");
	this.shape_7.setTransform(79.3028,296.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A16A4E").s().p("AgTAAIAAgJIAnAAQgFATgNAAQgIAAgNgKg");
	this.shape_8.setTransform(85.975,326.0868);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EECEA9").s().p("AgiAkIBAhQQAPAogYATQgOALgfATg");
	this.shape_9.setTransform(88.5385,285.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BD795E").s().p("AgVAMQgIgLACgCQAJgVAVgOQACgCAMAJQAMAIgBACQgEAKgJAOIgTAgIgRgZg");
	this.shape_10.setTransform(101.9164,298.8638);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A16A4E").s().p("AgjAnIgMgGIACgSIBTg3IAHAZQAEANgDAEQgCAFgMACQgQAEgEACQgGADgMAKQgMAJgIADIgCABQgDAAgEgCg");
	this.shape_11.setTransform(96.6521,274.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E4F37").s().p("AgGAAIAIgIIAGAIIgIAJQgHgIABgBg");
	this.shape_12.setTransform(157.9482,385.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A16A4E").s().p("AAFgfIAJADIgJA7IgSABg");
	this.shape_13.setTransform(171.45,333.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#611F0B").s().p("AgSAcQgJgJAAgCQAEgKAIgMIARgdIATAXQAIAKgBABQgKAQgYATIgBAAQgCAAgJgHg");
	this.shape_14.setTransform(120.9356,376.3806);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#611F0B").s().p("Agng2QBJAeAGBPg");
	this.shape_15.setTransform(60.925,389.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#611F0B").s().p("AgfAcIgPgSIAcgYQAQgOAMgHQAGgDALAFIAUAIIgLAZIgcAUQgQALgMAGIgBAAQgCAAgIgJg");
	this.shape_16.setTransform(168.9,379.1099);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#611F0B").s().p("AgqAMIA1hFQAGAJAOAPQAMAOgBAIQgCAOgLAUIgTAjg");
	this.shape_17.setTransform(80.5038,350.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#611F0B").s().p("AgZAwIgKgRQgHgMAAgJQgBgaALgQQAMgTAaAEQALABANAPQANAPAAAMQACAZgPAOQgQAOgcAAIgLgBg");
	this.shape_18.setTransform(121.4277,397.0709);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#611F0B").s().p("AgzAzIAZgzQAOgcALgRQACgFANgCQALgCAIADQAGABAFAJQAFAIABAIQAIArgaAVQgSAPghAAQgOAAgSgDg");
	this.shape_19.setTransform(139.8602,365.0761);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7E4F37").s().p("AAUgbIAEAsIgvALg");
	this.shape_20.setTransform(151.4,392.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#974522").s().p("AgEAPQgigHgVgbIB3AnIgUAAQgcAAgQgFg");
	this.shape_21.setTransform(82.925,409.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7E4F37").s().p("AAtgjQgEAkgaARQgTANgoAFg");
	this.shape_22.setTransform(166.425,388.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#471507").s().p("AgxAiQALghAdgPQAUgNAngIQgHAggfAVQgYASgXAAQgHAAgHgCg");
	this.shape_23.setTransform(140.95,398.6081);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#471507").s().p("AiQALIAxAAQApAAAMgFQANgEAfgcICPASIgFAGQgDADgCAAQhSAVg5AEIgfABQg6AAgzgQg");
	this.shape_24.setTransform(107.5,409.8832);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#471507").s().p("AhbCpQALgrAageQARgVAFgwQADg3AEgZIAAgBQA+gMAbggQAcggABg9IgBgsIALgJQAKA8gSA8QgPAxgmA9QgUAggRA6IgZBjIgQAyIhGAUQAIg0AHgYg");
	this.shape_25.setTransform(183.6141,358.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DDAA53").s().p("AgGgVIANABIgDArg");
	this.shape_26.setTransform(188.25,314.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#471507").s().p("AgDAPIgBgdIAJAdg");
	this.shape_27.setTransform(20.525,355.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#672D19").s().p("AgDgQIAHABIgCAgg");
	this.shape_28.setTransform(20.55,358.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#471507").s().p("Ag/hlIACghIBOBaIAMAdIAjCGQABACgDAGIgEAIg");
	this.shape_29.setTransform(27.1893,370.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CE9C69").s().p("AiGAbIAUgMQAMgIAJgCQBrgYBAgKQALgCARAHIAdAKQhSAagzAJQgtAJgqAAQgZAAgYgDg");
	this.shape_30.setTransform(82.475,256.512);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CE9C69").s().p("ACFBYQgZg6gugbQgrgYhDgDQgjgCgzgUQg5gYgcgKQAHgBAQgFQAOgEAHADQAaALAlAFIBAAIQAaAEA5ACQAzAJAYAoQAHAKAXALIAmARIAqAdIhHAeIgQgBg");
	this.shape_31.setTransform(134.975,262.1058);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7CD57").s().p("AhAgnQBSAQAvA/g");
	this.shape_32.setTransform(150.5,260.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7CD57").s().p("AAzBFQgPgvgVgaQgZgigpgOQgCgBgDgGIgEgJQA/AJAZAdQAZAcAIBHg");
	this.shape_33.setTransform(170.025,273.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#974522").s().p("AhyGYIgNgYQgHgOACgJQAGgmAoi3QAuAIAXgZQARgUAGgvQAKhJAAgHQgDgsgtgWQgFgDgBgPQgCgOAEgJQAshZgFgeQgDgehFhBIAZhIIAOAAIALANQAHAIAGAEQBZBDgKB4IgDBeIAYBbIASApQAAAEADAEIAQAsIADAlIgLAIIgLAJQgGAGgDAEIhiCjIAAAAIhfB2gAg9DtQgOAQgIANQgBACAQAOQAPAPADgCQAKgHANgNIAZgcIgjglIgYAbg");
	this.shape_34.setTransform(180.5868,323.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DBA987").s().p("AgFgFIAKACIAAAJg");
	this.shape_35.setTransform(73.55,300.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DBA987").s().p("AgNgTIAbABIgVAmg");
	this.shape_36.setTransform(135.5,337.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7E4F37").s().p("AgOgNQAIgFAagCIgcApQgRgYALgKg");
	this.shape_37.setTransform(79.043,319.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7E4F37").s().p("AgRgDQABgaAigTIgGBhQgfgbACgZg");
	this.shape_38.setTransform(164.8216,313.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EECEA9").s().p("AghghIASgGIA7ANIAAAJIgoAzIgvAFg");
	this.shape_39.setTransform(79.525,327.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CE9C69").s().p("AgiCFQgDgHABgFIAvjYIAbgyIAADSIgIAhIg8AwIgEgNg");
	this.shape_40.setTransform(29.5375,334.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7E4F37").s().p("AgjAmQgRgUgEgQQgGgaAUgbQAUgbATAIQANAGAQAXIAhAtIhBBFIgdgjg");
	this.shape_41.setTransform(121.8968,322.6732);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DBA987").s().p("AgdgMQAjguAwgVQAoA6gKAcQgKAchCASIhdAbQAjhBAVgbg");
	this.shape_42.setTransform(151.551,322.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CE9C69").s().p("AhGBLIABhjIAMhwQAwAGAcAmQAMAQAdA+IALAMQgkANgeAtIg1BRg");
	this.shape_43.setTransform(66.975,301.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#672D19").s().p("AhCBfIgZhnIAIgiIA+g2QAWgWAMgEQAUgHAUAUQAbAaAIATQALAcgSAeQgIANgIAVIgNAlIgOgLIgPBHgAAJgaQgOAHgIAHQgCACAFAOIALAhIAsg6IgLgQIgZALg");
	this.shape_44.setTransform(41.7123,345.5477);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DBA987").s().p("AhOABQgEgEgBgKQgBgKADgHQAnhNAuhVQAdgyAzARIgKBJQguASgQAxQgKAcgHA7QgXBrBKBHQAFAEAFAKIALATIhdARQAliChZhjg");
	this.shape_45.setTransform(67.7125,347.0093);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7E4F37").s().p("Ag9BwQgagQgJgdQgKgdAMgcQAXg2Ayg9QASgVAhAFQAhAEAUAYQADADAGAEIAKAGIgCBiIhBBJQgUAZgaAFQgHACgHAAQgTAAgRgLg");
	this.shape_46.setTransform(49.8351,307.119);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#672D19").s().p("AgyEoIgJgeIAEhjIAChUQABgygHghQgOhEAJg0QAJg8ApgwIANg0IAOg0QAEgLAIgQIAOgaQAbAxACAgQADAqgnAnQgRARgNAiQgHATgNAoQgDAGADAKQACAKAFAGQAKANARARIAeAeIgwDYQgBAEADAIIAEAMIAIAKQAEAGABAFQAEAvAHBjg");
	this.shape_47.setTransform(26.0721,327.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#974522").s().p("ABQEHQgUgSgBgqQAAgbgKgIQgKgIgbAGQgyANgTgPQgSgOgGg3QgGgugPgdQgTgkgmgSIgMgcQgHhjgEgvQgBgFgEgGIgIgKIA8gvIAZBoIAAAUQgTAlALAxQAKAwAcAQQAPAHASARIAdAeQAHAIAHANIAKAWIAOgFIgniFIAAhjIAOhHIAOALIAKAUIgBAgQgBAUACAMQANBLARAwQAWBBAlAvIBRBuIAHAjIgbAIQgPAFgLABIgSABQgdAAgQgOg");
	this.shape_48.setTransform(46.075,372.3056);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EECEA9").s().p("AiuExIABg6IAMgJQAHgFACgFIC4l6QABgDAAgGIgBgWIh7BbQgFgmASgkIAlg6QAJgOAuhCIAUgDQBFAlAQAHQAcANALALQARARgBAbQAAAWgHAKQgIAOgUAEIgVAGIgVAIQg7ATgMAZQgMAYAUA8QAFAQARAfIgCAoQgwAUgjAvQgVAcgjBBIg9A7g");
	this.shape_49.setTransform(151.5507,305.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DBA987").s().p("AAtCsQgngggXgZQgLgLAOgyQAShDgJgXQgKgXg/ghQgWgLgfgUIg0ghIAog0QAfAbAJgkIAZgGQAPgDAHADQArATCwBVQATAJACANQADAMgOARQgHAKgNAWQgMAWgIAKQgVAagBAWQgBAYAWAfQAMAQgFAnIgJBBIgTAHIhCg2g");
	this.shape_50.setTransform(98.3945,346.8875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CE9C69").s().p("AgmFsQgCgHACgVIAUjSQAfgIANgdQAOgcgNgfQgJgVgJgdIgNgwIhmByQgRgfgGgQQgUg8AMgZQAMgYA8gUIAVgHIAVgGQAUgEAHgOQAHgLAAgWQAAgagPgRQgLgLgcgNQgRgHhFglIAVhFQAuAGAXALQAiAPAQAkQAHANAUAPIAiAYIAKAAIgBANIgZBJQBFBAAFAfQAEAegtBYQgEAIACAPQACAPAFACQAtAXADArQABAHgKBKQgHAvgSAUQgWAZgugHIAAgCIAKg9IgKgCIgTBAQgVAFgGARQgEALgBAZIgHABQgPAAgFgLgABVg0IADACIAFACIADgIIgIgEQgEAHABABg");
	this.shape_51.setTransform(167.9262,305.4781);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DBA987").s().p("AAlEMQgBgPABgMQAHhdhJgtQgQgLgYgVIgvgoIhjCtQgcgZgBgkQAAgUAMgvIAUgVIAzhFICLhuQB2haA7guQAGgEAHgMIAMgTIAQABIAfApQgwBDgIANIglA7QgSAjAEAnIB8hbIABAVQAAAHgBACIi5F6QgCAGgHAEIgMAJIgBgcg");
	this.shape_52.setTransform(130.349,300.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CE9C69").s().p("Ai/ExIg8gMIACgaIAdgqIC5kBQAPgWAZgeIArgyIgJgMIgoAaQgZAQgPAMIilCHQgkAeACgvIAHgMIgDgDIgGANIgtAhIACgUQACgMAEgFQAigmCGiTIALAGQAHADADgBQAHgEAMgJQAOgKAGgDQAEgCAQgDQAMgDACgEQACgGgDgMIgHgZIhUA3QgSguAHgOQAHgNAugLICUghQBDgNA4AfQA6AfAaBAIhEAaQgpAQgcAJQgiALgMAZQgKAVAFAkIAKBYIgzBGIjRC+gAgIAGQgWAPgJAUQgCAEAIAKIARAaIATghQAJgOAEgKQABgCgMgJQgJgHgDAAIgBAAgAi0g2IAKAJQAggTAOgMQAYgUgPgog");
	this.shape_53.setTransform(103.125,294.5452);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EECEA9").s().p("Ai8DsIgLgDQgdg+gMgPQgdgmgwgGIgZgFQgOgBgIADQgQAHgHgBQgJgBgKgPQgEgEgVADQgWAFgJAIQgQAQgUAbIgiAvIgUgSQAShRAOglQAXhBAzgkQAjgZAygpIBUhHIAHgBIAeAAQBAAJBKgOQAygKBSgaIB3gUIAyAKQAdAKA5AYQAyAUAjABQBEAEArAZQAuAbAaA5IgMATQgHAMgGAFQg7Ath3BaIiLBtIgKhYQgFgkAKgWQAMgYAigMQAcgJApgPIBEgZQgahBg6geQg4gghDAOIiVAhQgtALgHANQgHAOASAuIgDARIinC6QgEAFgCAMIgCAUg");
	this.shape_54.setTransform(93.025,276.65);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#672D19").s().p("Aj+FyIh4goIh4h4QgGhPhKgfQgmgvgWhAQgQgwgNhMQgCgMAAgUIABggIAfB/IBFgbIAGATQADAJABAHQAFAuAUAYQAWAaApADQARABAYgPQAJgEAfgXQA1gmgBghQgCghg6ggQg4gfARgzQAIgZASglIAeg9QAVALArAUQAmASAUATQANAMAEAcQAFAbgFAXQgMA2AsAbQA+AlAMBJQAEAZAOAHQAMAGAbgEQA2gGAbgYQAggaAFg0QADgpAsAEQAiAEAbgPQAWgMAagfIAhgrQAQgUAMgHQAegQBUAbQBJAZAggTQAggUALhKQABgZAEgLQAHgRAVgGIATAAIAAABQgoC3gHAnQgBAIAHAOIAMAZIAYAJIBgh1QgEAZgDA4QgFAwgRAVQgaAegLAqQgHAYgIAzIgUAUIhaBIIhRARIgEguIgsA5IgfAAQgnAIgVANQgdAQgLAhIhtA8IgUABIgKAJIiOgSQghAdgMAEQgMAFgpAAgAAlDGQgLAQABAbQAAAIAHANIAKARQAmADASgQQAPgOgCgaQAAgMgNgPQgNgPgLgCIgIAAQgVAAgKAQgAGsBxQgBABAHAJIAJgKIgGgJIgJAJgAIrAPQgNAIgQANIgdAZIAPASQAJAKACgBQANgGARgLIAcgUIALgZIgUgJQgIgDgEAAIgFABgAAxASQgIANgEAKQAAACAJAJQAKAHACAAQAZgTAKgQQABgCgIgKIgTgWIgSAcgAEMiNQgMABgDAGQgLARgOAcIgaA0QA6AJAbgWQAZgUgHgtQgBgHgFgJQgGgIgFgCIgLgBIgJABgAl9jiIA1AuIATgjQALgUACgPQABgIgMgOIgUgYg");
	this.shape_55.setTransform(114.445,374);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EECEA9").s().p("AgPAJIATgcIAMAUIgBAJIgLAJQgEAAgEABg");
	this.shape_56.setTransform(312.475,93);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BD795E").s().p("AgGgFIAOgXQgCAKAGAXQACAUgaAEg");
	this.shape_57.setTransform(49.904,240.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BD795E").s().p("AgPARIAagxQAEgCAFAAIAAAzIgnASg");
	this.shape_58.setTransform(45.925,248.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DB702A").s().p("AAegYIg7AxQAKgzAxACg");
	this.shape_59.setTransform(227.05,181.6213);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DB702A").s().p("AgNgQQAPgKAhgDIhFA7QAAgfAVgPg");
	this.shape_60.setTransform(219.525,188.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DB702A").s().p("AgUgtIBkgJIifBtg");
	this.shape_61.setTransform(238.075,173.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DB702A").s().p("AjvBtIEahqQANgEAngJQAlgIAWgOQAbgSAMggQAFgMAQgNQATgPAHgIIgfBZIg8AoImECEg");
	this.shape_62.setTransform(72,237.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DB702A").s().p("AAegiQgBA/g6AGg");
	this.shape_63.setTransform(239.95,229.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DB702A").s().p("AAohAIAKAnIhjBag");
	this.shape_64.setTransform(231.95,241.525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DB702A").s().p("AhhCLQAIgPAHgJQAmgrBOhUQAFgGAFgJIAIgQIgLgOIjvCQQAKgOASggQASgcAQgJQAfgSA4gvQAzgnAzgCQATgBAcgVIAwgjQAUgLAfALQglADgUAgQgSAogNARQgfAqhtCNIgUAUIg8AdIAMgag");
	this.shape_65.setTransform(267.925,158.4186);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D74626").s().p("AgDAAIAHAAIgEABIgDgBg");
	this.shape_66.setTransform(309.975,181.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E66435").s().p("AgUAJIAYgeIARAQIgbAbg");
	this.shape_67.setTransform(322.325,132.25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#471507").s().p("AgzAAQgEAAgEgBIB3gCIhOAHg");
	this.shape_68.setTransform(111.925,417.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#611F0B").s().p("AhKDeQgRAAhHAGQiTAOhVhdQgOgPgWgLQgXgLgSACQhQAIg3giQg1gggehLIgfhFIAFgIQACgGgBgCIgiiIQAlASAUAlQAPAcAFAvQAHA2ASAPQATAPAygNQAcgGAKAHQAJAJABAbQAAApAVASQAUASArgGQAKAAAQgFIAbgIIgIgjIB5B4IgBAAQAVAcAiAHQAXAHAqgCIApAAQBAAUBLgGQA6gEBRgUQADgBADgEIAFgGIAKgJIAUgBIBtg7QAdAGAhgWQAggWAGggIAfAAICBgbQAogFAUgNQAagRAEglIAUgUIBGgUIgBAeIhQB/IhPAiQidAXh2BKQghAVg4ATQhBASgfALIh4ACQgjgTgwAAg");
	this.shape_69.setTransform(105.025,392.95);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BD795E").s().p("AgFAKIABgSIAIgBIACATg");
	this.shape_70.setTransform(43.475,252.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F59E46").s().p("AgEADIAJgJIgDANg");
	this.shape_71.setTransform(231.425,310.675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DB702A").s().p("AgJgMIATgCIgCAdg");
	this.shape_72.setTransform(226.025,249.475);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DDAA53").s().p("AgJgVIATABIgBAmIgDAEg");
	this.shape_73.setTransform(193.025,328.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DDAA53").s().p("AgJACIATgRIgBAeIgHABg");
	this.shape_74.setTransform(64.975,257.675);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DDAA53").s().p("AAUgJIAAAKIgnAJg");
	this.shape_75.setTransform(69.95,255);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F59E46").s().p("AAUgTIgBATIgmAUg");
	this.shape_76.setTransform(230.05,222.075);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F59E46").s().p("AgdAUIAAgBIA6gnIABABQgEAYgRAJQgKAHgUAAIgIgBg");
	this.shape_77.setTransform(89.975,235.0125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DDAA53").s().p("AgLgPQALgGAZACIgwAnQgEgaAQgJg");
	this.shape_78.setTransform(45.5428,270.1015);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F59E46").s().p("AgTAGIAngcIgaAtg");
	this.shape_79.setTransform(225.975,218.35);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DDAA53").s().p("AAogdIhPA7QAShAA9AFg");
	this.shape_80.setTransform(52.05,265.0821);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F7CD57").s().p("AgUAoIACgdIAPgxIAYgBIgdBPg");
	this.shape_81.setTransform(181.875,379.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DDAA53").s().p("AgoADIBPghIABADIhFA6g");
	this.shape_82.setTransform(167.95,399.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DB702A").s().p("AgjAtIABgUIBFhFQAEAYgWAcQgWAcgdAJg");
	this.shape_83.setTransform(235.5058,217.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F59E46").s().p("AgZA+QAHguAFgWQAJgpAegRIgvCBg");
	this.shape_84.setTransform(231.325,301.55);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F59E46").s().p("AgqAqIgHgLIBjhOQgDAXgfAiQgfAkgVACIAAAAQgCAAgEgGg");
	this.shape_85.setTransform(218.95,241.8018);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DDAA53").s().p("AgvA/IBPh/IAMAAQAKAjgUAhIgoA3QgEAFgNABIgWAAg");
	this.shape_86.setTransform(176.5556,390.525);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F59E46").s().p("AgVAMQgLgFgWADIAogmQAIAEAbgMQAYgJAKAZIg7A8QgCgWgPgGg");
	this.shape_87.setTransform(233.5,215.0961);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F59E46").s().p("Ag3ATIBQg6QAnAMgJAZQgFANgPAdg");
	this.shape_88.setTransform(237.5844,308.05);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F59E46").s().p("AhjAZIAngSICggzIAAABIhCAjIhDAgQgMAGgUAGIghAJg");
	this.shape_89.setTransform(53.95,249.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F59E46").s().p("AhyAoIDlhPIABABIgKATQgGANgGABQgnAJipAlg");
	this.shape_90.setTransform(75.45,241);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F59E46").s().p("AgrAxIgBgBIAghYQAKgMAEgEQAJgHAGAXIAbBjg");
	this.shape_91.setTransform(97.35,228.1828);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F59E46").s().p("Ag3AhQgBgTAGgFQAUgRAfgVIA3gjIhsCBIgDggg");
	this.shape_92.setTransform(222.435,230.625);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F7CD57").s().p("AA4AZQg2gIgigHQgXgFghgIIg4gQIAogUIDMAnQAYAEAIAGQAOAIgBAWg");
	this.shape_93.setTransform(129.4783,252);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F59E46").s().p("AgWAUQAKg1AJgkQADgKAOgLIAagTIg1DJQgBAFgJAFIgQAIIARhag");
	this.shape_94.setTransform(236,327.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DB702A").s().p("Ag8BlQAuhvBBhiIgKA0QgGAYAAADQACANAYgCIhrB/g");
	this.shape_95.setTransform(225.925,268.925);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F59E46").s().p("AgUAvQgJgQgcADIABgdIBjhaIAKAQQAHAIgCAEQgPAfg6BwQABgcgGgLg");
	this.shape_96.setTransform(232.6735,247.525);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F7CD57").s().p("AAhCdIADheQAKh3hZhDQgGgEgHgIIgLgNQARgMAOADQANADAMATQAuBEAJASQAaAxgCAxIgCAUIgJAKIgKBPIAAABg");
	this.shape_97.setTransform(184.2571,296.195);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DDAA53").s().p("AheCdQgGhmAvhPQArhKBXg7QADgBAQgDIhPBcIgaAlIgZAlIgOAaQgIAQgEALIgPA0IgNA0g");
	this.shape_98.setTransform(33.4962,288.325);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#DB702A").s().p("AhbBlQgEgIACgCQAHgMAMgQIAUgaIBtiCIAngVIAAABQgPAtgDAKQgBAFAEAHIAGANIhHBEIhjBQg");
	this.shape_99.setTransform(222.5636,233.475);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F7CD57").s().p("AhbA6QgLgGgCgTICNhCQAFgCALgJQAKgIAHgDQAKgEAZAAIgCARQAAAKgDAGIgkBEIg/AHQglAEgaAFIgQACQgIAAgFgCg");
	this.shape_100.setTransform(107.475,245.7067);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F59E46").s().p("AihArQAugeAhgNQA3gXBPgZICKgsQAHgCAMABIAdABIgiAwQgsgTg1AMQgQAEhKAbQgmAPg4AZIheAsIhCAeIBMgzg");
	this.shape_101.setTransform(127.675,226.57);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D0A156").s().p("Ag0CEQAQg6AVgiQAlg7AOgyQASg7gJg8IgDglIADgEQAhAZACArQAAAMgKA9QgKA7gxBCQgeAogQA0QgNApgGA7IgZABIAbhig");
	this.shape_102.setTransform(189.4762,353.025);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F59E46").s().p("Ag6B7QAEgqAIgbQAJgeAUgqIAihLIg0gPIBThTIARALIgqCOIhXDnIAGhGg");
	this.shape_103.setTransform(240.6,273.85);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DB702A").s().p("AhMCwIAwiDIABgTIBYjmQATAagEAYQgDATgVAfQgSAcgQAuIgZBPQgCAEAAAKQAAALgCAEQgNAqAFAHQAGAHAtACIhQA7IgKAKg");
	this.shape_104.setTransform(236.8022,290.475);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F59E46").s().p("AgmAQIg4gDIBHhEIAdgUIAegeIAAAAIAVgKQATgLAJACQALADgBAZIg7BHIgLATIhZCBIABAAIgBABIAAgBIgTACg");
	this.shape_105.setTransform(233.4337,235.6846);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F7CD57").s().p("AiMA5QA2gpBLggQBLgiBNgRIgzBLIjlA8g");
	this.shape_106.setTransform(85.975,248.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DB702A").s().p("AAOhAIAegfIBghmQAHgIANgHIAXgOIhgB6IhwCPQgSAZgNAkQgMAhADANIgoAmIgpAdIgkAOg");
	this.shape_107.setTransform(238.6,197.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F7CD57").s().p("AgYCRQgCgEgBgEIgSgqIgNguIADgsIAAAAIA4hmQAGgLAMgNIAWgXIATAIIhAEZg");
	this.shape_108.setTransform(194.55,311.525);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DDAA53").s().p("ABGGjQgMgJgGgIQg3hRgYgpQgohHgRhAIgDgTIgCgUQAIjGABhCQABgOgGgZQgFgaAAgOQAEhrAKg5QABgJASgJQAVgJAHgGIAHAFQgpAxgKA7QgIA1AOBEQAHAhgBAyIgDBVIgDBiIABAdIAGAiIB4DsIAfBGIgVgQg");
	this.shape_109.setTransform(26.9,347.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D0A156").s().p("AIACDQgUgPgHgNQgRgkgigQQgXgLgugFIgqgdIgngQQgXgLgGgLQgYgogzgJQg6gCgagEIhAgHQgkgGgagKQgHgEgOAEQgQAGgIABIgygKIh3AUIgdgLQgRgGgLABQhAAKhsAZQgJACgNAIIgUAMIgeAAIABggIATAAIEPhGIAUAAQACAUALAFQAJAEAUgDQAagFAlgFIBAgHIAKABIA3AQQAiAJAXAFQAjAHA2AIIBZAPICCBRIBGASIAAABIADAJQADAGADABQApAOAZAiQAVAbAPAwIgigYg");
	this.shape_110.setTransform(120.5,264.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F59E46").s().p("Aj+CgIAogrIAKAAICWiAICghuIATgKIDwiRIALAOIgIAQQgFAJgFAGQhPBVgmArQgHAJgIAPIgMAaIgXAOQgNAHgHAIIhgBlIAQgjQAJgWAJgLQARgUAggjIAyg4QAEgEABgLIACgSIgTAAQgLABgFADIhzBLQhBAsgtAjQg8AuhZBMIiTB8QgFAEgKACIgTACg");
	this.shape_111.setTransform(235.525,180.325);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DB702A").s().p("AojDIIgbhkIAVAEQAMACACAEQANAjAeABQALAAAlgNQBPgaCihEQATgIAbgPIAtgYQAagNAUAHQAVAHAMAYQAMAYASADQAOAEAYgMIBQgmQAwgXAegSQARgKATgWIAhgkIgJgSIAuAGQAaAEATAAQAxgCAggRQAWgLAigYQAqgdANgIQAIgFAMgBIAXgDIgpArIh4B1IghgcIg9A0IAEg8ImkDiIgIgJIAUgqIAigwIgdgBQgMAAgHACIiJArQhRAag3AXQghAOgtAeIhNAzg");
	this.shape_112.setTransform(156.55,214.025);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F8CF55").s().p("ADSGKQgJgSgvhEQgMgTgNgDQgOgDgRAMIgOAAIABgNQgJhIgYgdQgagdg+gJIAAAAIhGgUQguhAhUgRQACgVgOgJQgJgFgYgFIjNgnICphZQBigzBIgjQAZgMAMACQAYAFgIAxII7lEIAKAIIiQClIAGALIBNgXIAKAGIj3FFIAOALICuiCIi9FKIAMAGIB1h3IAUANIgiByIhFEMQACgxgagyg");
	this.shape_113.setTransform(167.65,251.775);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#A16A4E").s().p("AA2JUQgOgHgEgZQgMhLg9glQgsgaAMg2QAFgXgFgbQgEgdgNgMQgUgSgmgTQgrgTgVgLIgeA9QgSAkgIAaQgRAzA4AfQA6AgACAhQABAhg1AmQgfAXgJAFQgYAPgRgCQgpgDgWgaQgUgYgFgvQgBgGgDgKIgGgSIhFAaIgfh+IgKgUIANglQAIgVAIgOQASgegLgcQgIgTgbgaQgUgUgUAHQgMAEgXAWIg+A2IAAjSIgbAyIgdgeQgSgRgLgNQgFgGgCgJQgCgKACgGQAOgoAIgTQANgiARgRQAmgngCgqQgCgggcgxIAagmIAbglIBPhcICBhkIAAAAIA9goIATgDIAMAPIhUBGQgyAqgjAZQgzAjgXBCQgOAmgSBQIAUASIAigvQAUgbAQgQQAJgIAWgEQAVgEAEAFQAKAOAJABQAHABAQgHQAIgDAOACIAZAEIgMBwIgKgGQgGgEgDgDQgUgYghgEQgigFgSAVQgyA9gXA3QgMAcAKAdQAJAdAaAPQAYAPAagGQAbgFAUgYIBBhJIAWA+IA3hRQAegsAkgOIAAgKIACAAIAtghIACACQgCAvAkgeICkiIQAPgMAZgQIApgaIAJAMIgrAyQgaAegPAWIi4ECQgbACgIAFQgLAJARAZIgCAaIgSAGQgzgRgdAyQgvBVgnBNQgDAHABAKQABAKAEAFQBaBjgmCCIBegRIgLgTQgFgKgFgEQhLhHAXhrQAIg8AKgcQAQgxAugSIAwgFIA0AhQAfATAXAMQA+AgAJAXQALAXgSBFQgOAyAKALQAYAZAnAgIBCA1IATgHIAIhBQAFgmgLgQQgWggABgXQAAgXAWgbQAIgJAMgWQAMgWAIgKQANgSgCgMQgDgMgTgKQivhUgrgTQgIgEgPAEQgQAEgIABIC9ipQgMAwAAAUQABAjAcAZIBjitIAvApQAYAVAQAKQBKAugHBcQgBALABAQIABAcIAAA6IAGAoIAWgnIA8g8IBfgbQBBgSAKgcQAKgdgng5IACgoIBmhyIAOAwQAJAeAJAVQANAegOAdQgNAcggAHIAGhgQgjATgBAaQgCAaAgAZIgUDSQgCAVACAIQAGANAVgDQgLBKggATQggAUhJgZQhUgcgeARQgMAHgQAUIghArQgaAegWAMQgbAQgigEQgsgFgDAqQgFA0ggAbQgcAXg2AHIgSACQgNAAgIgEgADIgDQgVAaAHAcQADAQARAUIAdAiIBChEIggguQgQgWgOgGQgFgCgEAAQgPAAgPAUg");
	this.shape_114.setTransform(97.6314,317.8145);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F8DACF").s().p("AgFAFIAKgJQACAEgCAFg");
	this.shape_115.setTransform(31.5444,263.525);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F8DACF").s().p("AgKgPIATgJIACABIgFAiIAAABIgHALIAAAAQgEAAgEACg");
	this.shape_116.setTransform(48.1,242.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F8DACF").s().p("AgNA3IAKhaIAJgTIAIAAIgLBVIAAABIgOAYg");
	this.shape_117.setTransform(50.425,234.65);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F8DACF").s().p("AgGAJIAJgSIAEABIgEARIgIABg");
	this.shape_118.setTransform(43.625,251.075);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EECEA9").s().p("AgPAZIALgnIAUgLIAAACIgbAxg");
	this.shape_119.setTransform(45.5,247.575);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F8DACF").s().p("AgsAPIAUgTIAUgKIA6gpIABABIgBATIAAAAIgIALIhkBPg");
	this.shape_120.setTransform(37.525,257.55);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F8DACF").s().p("AgiAFIBFgdIgWAbIgLAIIgZAOg");
	this.shape_121.setTransform(338.525,73.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7E4F37").s().p("AgHgFIAPAGIgPAFg");
	this.shape_122.setTransform(387.75,43.45);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F8DACF").s().p("AgOAAIAOgEIgOgHIAAgSQAcgFAIARQAEAJgBAcIgKAKIgnABg");
	this.shape_123.setTransform(388.51,44.0419);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#7E4F37").s().p("AgJgHIASgIIABAZIgJAGg");
	this.shape_124.setTransform(323.025,76.025);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F8DACF").s().p("AgLABIADgGIAUAJIgIACg");
	this.shape_125.setTransform(260.9,129.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F8DACF").s().p("AAPgJIgMAQIgSADg");
	this.shape_126.setTransform(267.5,128.075);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BD795E").s().p("AgGAUIgVAcIALhWIASgJIAaBfg");
	this.shape_127.setTransform(53.5,232.975);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F59E46").s().p("AAFgFIAAAKIgJABg");
	this.shape_128.setTransform(231.575,338.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#BD795E").s().p("AgLACQgBgXAMgvIANCJQgYgcAAgng");
	this.shape_129.setTransform(256.949,305.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#974522").s().p("AgDgDQAEgBAEAAIAAAAIgJAJg");
	this.shape_130.setTransform(312.375,95.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#974522").s().p("AgEAFIAJgJIABAJg");
	this.shape_131.setTransform(303.45,87.475);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B2544B").s().p("AgEAEIAJgIIAAAJg");
	this.shape_132.setTransform(189.45,154.575);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#974522").s().p("AgFAEIAKgIIABABIgKAIg");
	this.shape_133.setTransform(313.425,94.475);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#974522").s().p("AgEgEQAEgDAFACIgIAMg");
	this.shape_134.setTransform(354.425,65.46);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#B2544B").s().p("AgGACIAKgHIADADIgJAJg");
	this.shape_135.setTransform(339.4,74.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B2544B").s().p("AgBgBIADgBIAAAFg");
	this.shape_136.setTransform(375.9833,127.525);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#974522").s().p("AgEgCQAEgEAEACIAAAJg");
	this.shape_137.setTransform(466.5,16.4525);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B2544B").s().p("AAIgGIADAMIgVABg");
	this.shape_138.setTransform(377.975,50.275);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#974522").s().p("AgKAFIAUgKIABALg");
	this.shape_139.setTransform(230.95,132.425);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B2544B").s().p("AgJgBIASgDIACADIgVAGg");
	this.shape_140.setTransform(266.9,129.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#974522").s().p("AgHAAIAQgGIgRANg");
	this.shape_141.setTransform(316.975,91.35);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#DBC1BB").s().p("AgDAAIABgBIAGgCIgHAHIAAgEg");
	this.shape_142.setTransform(376.575,127.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F76C42").s().p("AgCACIADgEIACACIgDADg");
	this.shape_143.setTransform(397.025,78.525);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B2544B").s().p("AABgIQADgCAFAAIgSAVg");
	this.shape_144.setTransform(196.9,156.95);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#974522").s().p("AgJAJIABgJIASgJIgTATg");
	this.shape_145.setTransform(314.975,93.075);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#974522").s().p("AAMgJIgGAJIgRAKg");
	this.shape_146.setTransform(373.325,62.05);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#974522").s().p("AgRgBIAbgDIAJACIgkAHg");
	this.shape_147.setTransform(253.9,132.475);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D74626").s().p("AgGgJIAOAIIgPALg");
	this.shape_148.setTransform(304.75,129.025);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#974522").s().p("AgLgBIAXgHIgHAOIgOADg");
	this.shape_149.setTransform(450.075,22.225);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#B2544B").s().p("AAHgHIAJAIIgfAHg");
	this.shape_150.setTransform(465.375,16.95);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#B2544B").s().p("AAKgOIgMAaIABAAIgIACg");
	this.shape_151.setTransform(377.225,125.75);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#974522").s().p("AgGgFIAQgIIgTAbg");
	this.shape_152.setTransform(193.9,161.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F76C42").s().p("AAGgJIAOACIgnARg");
	this.shape_153.setTransform(441.975,30);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F76C42").s().p("AgMgCIARgLIALAMIAAAFIgJAFIgWAFg");
	this.shape_154.setTransform(373.425,63.325);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E66435").s().p("AgMAIIARgQIAIAIIgOAJg");
	this.shape_155.setTransform(318.225,136.125);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DBA987").s().p("AgJAIIgBAAIAMgeIAFgBIAEAbIgEAUIgRAAg");
	this.shape_156.setTransform(192.15,160.325);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#B2544B").s().p("AgOAFIAdgUIgcAfg");
	this.shape_157.setTransform(305.425,86.45);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#DBA987").s().p("AgVAPIApgfIACANIgdAUg");
	this.shape_158.setTransform(444.8,27.475);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#974522").s().p("AgSAGIAIgNIAdAOg");
	this.shape_159.setTransform(313,243.15);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#B2544B").s().p("AACgIIAYACIgzAPg");
	this.shape_160.setTransform(443.375,19.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#DBA987").s().p("AgIgCIAAgBIAIgKIAAAAIAHgCIAMALIgCAIIABAAIgMAKIgXACg");
	this.shape_161.setTransform(310.15,95.525);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#B2544B").s().p("AgHgBIAZgOIAEAFIgrAag");
	this.shape_162.setTransform(336.875,76.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B2544B").s().p("AgMgIQAHgPAWgBIgHASIgTAcIgHADQgBgYAFgJg");
	this.shape_163.setTransform(311.8725,91.675);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#B2544B").s().p("AgYANIAMgQIAAAAIAUgKIAAABIAIgDIAJAAIgvAfg");
	this.shape_164.setTransform(270.3,127.45);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F8DACF").s().p("AgPAAIAHgSIAFgBIATAVIgBAIIAAAAIgSAKg");
	this.shape_165.setTransform(314.525,91.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EECEA9").s().p("AgeAIIAXgaIAAABIAOgDIAYAHIg6Aig");
	this.shape_166.setTransform(449.825,24.975);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B2544B").s().p("AAUgOIAJAMIg5ARg");
	this.shape_167.setTransform(363.8,59.425);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#B2544B").s().p("AgWASIAsglQAFAngfAAQgHAAgLgCg");
	this.shape_168.setTransform(420.6117,32.874);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#B2544B").s().p("AATgaQAJAygvADg");
	this.shape_169.setTransform(274.7954,123.125);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#B2544B").s().p("AAHAMQgugDgGACIgJgCQABgDAAgEIA+gIIAIgCIAmgDQgOAXgdAAIgFAAg");
	this.shape_170.setTransform(260.35,131.0071);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EECEA9").s().p("AgUAGIAKgbIAJgMIAWAWIgLATIABABIgLASIgQAIg");
	this.shape_171.setTransform(194.95,157.25);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B2544B").s().p("AgYAHIAqgiIAHAHIgMAjIgJAMg");
	this.shape_172.setTransform(193.45,152.35);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B2544B").s().p("AAHgLIAlgOIhXAzg");
	this.shape_173.setTransform(427.275,28.275);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#B2544B").s().p("AgiASIAVgXIAwgSQgLAvgfAAQgMAAgPgGg");
	this.shape_174.setTransform(387.275,55.187);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B2544B").s().p("AAugZQgJAggbALQgQAIgnAAg");
	this.shape_175.setTransform(459.125,20.325);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#B2544B").s().p("AgKgKIA4giIhbBZg");
	this.shape_176.setTransform(289.35,98.375);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D74626").s().p("AgoAZIBChGIAPAMIhGBPg");
	this.shape_177.setTransform(303.025,189.475);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B2544B").s().p("AAjhGIgWBMQgPArggAWg");
	this.shape_178.setTransform(281.325,109.975);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#7E4F37").s().p("AgmAWIgCgMIBRg3IgKAfIg4A8g");
	this.shape_179.setTransform(382.925,48.625);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B2544B").s().p("AhGArIAWgcIAAAAIAUgKIAAAAIAKgJIABADIAVgNIBCgfIABAMIiKBPg");
	this.shape_180.setTransform(346.925,69.575);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D74626").s().p("AAtgxQgRAtgLATQgTAjgqAAg");
	this.shape_181.setTransform(299.425,135);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D74626").s().p("AgtAtIgGgRQgEgKACgBQAQgNAfgcQAcgWAfACIACALIgXAbIhCAzIgBAAQgEgBgGABgAA3ghIAAgBIAAABgAA3ghg");
	this.shape_182.setTransform(443.5417,26.5167);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E66435").s().p("AgoAyIA8huIAUAJIgoBwg");
	this.shape_183.setTransform(275.95,228.975);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#B2544B").s().p("Ag4ADIBmg/IALAYIhOBhg");
	this.shape_184.setTransform(317.4,81.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#DBC1BB").s().p("AhPBEIA/hUIABgCIA3g8IAogBIggAdQgTARgMANQgFAHgDANIgFAXIgxAuIgDgBIgOAKQgEAAgDADg");
	this.shape_185.setTransform(381.975,55.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D74626").s().p("Ag6BFIgJgDIA5iGIAdAZIACgIIAvANIh4BrIgCAAIgEAAg");
	this.shape_186.setTransform(180.15,189.95);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D74626").s().p("AhYBBIBsiVIBGAfIhfBMIhUA+g");
	this.shape_187.setTransform(234,160.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#D74626").s().p("Ah8CAIAdhTIAhgGQAUgDAHgIQARgRAbglQAegmAPgRQANgNAVgPIAlgZIhkCLIgKAUIgyA8IhRAyg");
	this.shape_188.setTransform(198.5,183.525);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D74626").s().p("AhwB9IAdgpICzjcQASAFgBAIQAAAEgLARQgLAQgJAaIgQAtIhGBEIhiBUg");
	this.shape_189.setTransform(264.4257,197.675);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E66435").s().p("AgqBJQgIgGgUAEQgIACgNgCIgXgDIBHhFICWhgIAIAGIiUC9QAAgTgJgGg");
	this.shape_190.setTransform(275.425,196.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D74626").s().p("AiLCHQAyhCAJgKQAtg0CGiWIAoApIkMD2g");
	this.shape_191.setTransform(365.05,103.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E66435").s().p("AhKAUQCSh0BLg6QAEgDAJgBIAPgBIhtCWIgVgeIhUBXIhVBWQgIAHgQAIIgaALg");
	this.shape_192.setTransform(218.45,168);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D74626").s().p("Ag4BAQAkg2AbgiQAVgdAiglIA6hAIgmBLIgVAlQgFASAiALIipCeIgoAKIA/hbg");
	this.shape_193.setTransform(281.975,156.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E66435").s().p("Ai2C1IASgdQAJgRACgNQAEgZAKgLQALgNAXgCQATgBAIgJIBLhgIg7gXICqifIAngUIAVgUIAogeIAYgEIAKAJIkvFhIi0Ddg");
	this.shape_194.setTransform(280.225,176.875);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E66435").s().p("AgfEQIAShyIATgUQBuiNAfgqQAMgQASgoQAUghAmgDQgggLgUAMIgvAiQgcAVgTABQgzACg0AnQg3AvgfASQgRAKgRAbQgSAggLAOIgTAKIhlAJIgjASQgUALgPAFQgZAKgKgIQgMgJAHgbIBTg+IBhhMIBtgqQBBgZApgTQBPgiCPhIQAXgMAsgZIBDgkQAGgEAMAAIAUgBIAAATIhkBuIg6BAQgiAlgVAdQgcAigkA2Ig/BbIgpBSQgFAJgKAMIgRAUg");
	this.shape_195.setTransform(264.3676,156.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#DF6934").s().p("AusGzIAIgMIAAgBQAagEgBgUQgGgYACgKIgBgBIAWgcIAjAcQAOgHADgGQBMh4AJgOQA1hJA5gpQAggWAygcQA6geAcgQIGChsIAFAMIg3BCIg2AvQBvAABGgKQBfgNBKgmQAXgLAdgbQAfggAQgOIAZg1IAbg1IBeivIBEg9IAKABIgaAnQgPAXgGASQgPApgSA6IgdBlIg5CHIAJACQAFABABgBIB5hsIAUAUIgdBUIAIAGIBRgyIAyg8IAKgUIAagLQAQgIAIgHIBVhWIBVhYIAVAeIAAAUQgIAbAMAJQALAIAYgKQAPgFAUgLIAjgSIg7BlQgygCgKA0IgKAJQghADgQALQgVAOAAAhIgKAJIgKABIgXACQgMACgIAEQgNAJgqAcQgiAYgWAMQggAPgxACQgTAAgagDIgugGIAJARIghAlQgTAWgQAJQgfASgwAYIhQAmQgYAMgPgEQgSgDgMgYQgMgZgVgHQgUgHgaANIgsAZQgbAPgTAIQiiBEhPAaQglANgLAAQgegBgNgiQgCgEgMgDIgVgEQgGgWgJAHQgFAEgKALQgIAIgSAPQgQANgFAMQgNAggbASQgWAOgkAJQgnAIgNAFIkcBqg");
	this.shape_196.setTransform(141.95,201.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E16833").s().p("AlAM/IgBgKIAQgJQAJgFABgFIA2jJIAKgpQAQgdAFgOQAIgYgngNQgugBgGgHQgFgHANgqQACgEABgLQAAgKACgEIAZhQQAQguASgcQAWggACgTQAEgYgTgZIAqiNIgRgMIhUBTIgyAoQgXACgDgNQABgDAFgXIAKg1IAAgTQA8hwAOgfQADgEgHgIIgKgQIgKgnIAKgUQA6gGABhAQACgZgMgDQgJgCgTALIgVAKIABAAIgfAeIgeATIgFgMQgEgHABgFQADgKAPguQAdgIAXgdQAWgdgEgYQgKgagYAKQgcANgIgFQgDgMAMgiQANgkASgZIBxiQIBgh5IA9geIgSByIANAJIARgUQALgMAFgJIAphSIAogKIA6AXIhLBhQgIAIgTACQgXACgLANQgKALgDAZQgCANgJARIgRAdIg8BuIgdAqIALALIBihTIAVADQANACAJgCQATgEAJAGQAIAGAAATIgyBrQgdBAgQAsQgQArgSA8IgdBoQAAAEABAKIAEAZIBriMQAHgKAOgLIAYgUIAoALIi6INQBSAYBQhUQAegfAwhBQAzhEAagdQAQgTAfgUIA1giIgwBYQgcA0gSAlQgfBAggApQgnA0gxAgQgMAHgYAGIgmAKIhPAgIgBAAIgTAMQAAACgCAEQgNAvABAYQAAAnAZAcIABAAIgDAhQgBATACAMQAIAzgoAxQgiApg5AcQgPAHgTAOIghAYIgUAEgAlBM0IAAABIAAAAg");
	this.shape_197.setTransform(264.2,256);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F76C42").s().p("AojNWIAZhOQAQgvAPgdQARgdAyhFQAtg+ATgmQARgkAOg9QANhEAJghIgQgMIiQBpIgHgEIBSiAIBHhPIgPgNIhDBHIgHgLQgEgHABgEQBkkVCqi9IigBaIgOgNIBpiJIAPgJIgIgKIgSARIgrATIgLgMIBLhPQAsgvAhgeIB/h2QBJhCA8guQArggBGgoIB2hEIABABIgLAoQiHCWgtA0QgJALgxBCIAJAJIEOj4ICXh2QghAzisDqQiBCwhCCAICJgqIAIAIQgeAogGAGIkkFEQgHAIgHANIgLAWQgBACABAEIABAMIBtgaIAIAIIgoA4QgXAhgWARQhBAzgaA9QgbA/AMBQQAPBghnAzIgsAXQgbAOgSAHQhPAig0AtQg7A0gdBKgAklCOIAEgCIgHAAIADACgAi+lXIAOANIAcgcIgRgQg");
	this.shape_198.setTransform(339.325,167.55);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#974522").s().p("AgIgBQAGABACgEIALgCIgVANQAAgEACgEg");
	this.shape_199.setTransform(469.8708,14.225);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EECEA9").s().p("AgdAPIAAgRIAdgeIAegBIgyBDg");
	this.shape_200.setTransform(28.975,267.375);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#DB402C").s().p("AAMAHIAAAAIAAABgAgLAFIAVgMIACAOg");
	this.shape_201.setTransform(444.775,18.275);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E2CDC5").s().p("AgOgHIAmgKIABAMIgxAXg");
	this.shape_202.setTransform(466.55,3.825);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DB402C").s().p("AgMgSIAJgEQAbARgKALQgDAEgbANg");
	this.shape_203.setTransform(457.0549,13.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F8DACF").s().p("AhbA4IAHgQIgCgBIANgQIABgCIgBgDIAWAAIBxhQIAeAeQgCAFAAAEIACAAIgVALIABgBQgGgBgDADIgXAPIgBAAIhaA0IgRAHg");
	this.shape_204.setTransform(459.775,17.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EDA740").s().p("AgNAKIgBgTIAdATg");
	this.shape_205.setTransform(41.425,412.05);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F8DACF").s().p("AgeAGIA0g2IAJATIg2BOg");
	this.shape_206.setTransform(23.725,273.75);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#974522").s().p("AgOgCIAcgCIABAJg");
	this.shape_207.setTransform(434.625,52.475);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#DBA987").s().p("AgFgHIAYAFIgJAIIgcACg");
	this.shape_208.setTransform(435.075,51.375);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EDA740").s().p("AgOAFIAAgTIAdABIAAAcg");
	this.shape_209.setTransform(81.5,434.475);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EECEA9").s().p("AghAIIgDgLIAkgRIAlAZQABABgCAGIgFAJg");
	this.shape_210.setTransform(193.8393,397.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F7CD57").s().p("AgwK2IgeAAIgKgKQjTg8iWiCIgdgUQjijghakhQhVkQBJkeQAHgYALgjIAUg7IANgKQgFAygNBmQgLBbAAA+QgBA1AMBHIAWB8QAEAZALAhIASA4QABACAHABIALABIACATIAEAUQAQA/ApBGQAXAqA5BRQAFAIANAJIAUAQQAfBLA1AhQA2AiBRgJQARgCAYAMQAWAKAOAPQBUBdCSgNQBHgHARAAQAwABAlASQAEADADAAIAhAEIBPgIQAggLBAgTQA5gTAhgVQB2hJCcgYIALAcIhMBAQgtAnghAWQgmAag6AhIhiA2QBGgEBUgfQAegLB1gzIB0gzIgKAeIhKAwQgtAcggAPQhQAkguASQhHAcg7APQhhAYhtAAQh9AAiMggg");
	this.shape_211.setTransform(87.8761,363.625);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EDA740").s().p("ABETeQA6ghAmgaQAhgWAtgnIBMhAIBGg7IAWgBQANgBAEgFIApg3QAUgigKgjIAehRQAGg6ANgqQAQg0AfgoQAxhCAKg8QAKg9AAgMQgCgrghgZIAAgnIBBkbIgTgIIgVAXQgMANgGALIg5BnIAKhPIAJgLIACgUIBFkKIAihyIgUgNIh1B3IgMgGIC9lLIiuCDIgOgMID3lFIgLgHIhMAYIgGgLICQimIgKgHIo9FDQAJgwgYgFQgNgCgZAMQhHAihjA0IinBZIgoAUIgLgBIAkhEQADgGAAgKIACgSQgZAAgLAEQgGADgKAIQgLAJgFADIiOBCIgUAAIAzhLQhNARhMAiQhLAhg2ApIgnAUIgUAAIgUATIgSACIg+AoQg9gFgSBBQgbgCgLAHQgPAIADAcQgQACgDABQhYA8grBJQgvBQAGBlQgIAGgVAJQgSAJgBAJQgLBAgDBkQAAAOAFAaQAGAZgBAOQgBBCgIDHIgLgBQgHAAgBgDIgSg4QgLghgEgZIgWh7QgMhIABg1QAAg+ALhaQANhlAFgzIgNALQADgqAggpQAggpAlgLIBqiSQACgFgBgEIBkhQIAIgLIAMAAIAhgJQATgGANgGIBDghIBDgjQCpglAogKQAGgBAFgNIAKgTQAaABANgIQARgJAEgZIBYALIAVATIBCgeIBegsQA4gaAngPQBJgcAQgDQA1gMAsASIgUArIAIAIIGkjjIgDA8IA9g0IAhAcIASgCQALgBAFgEICTh9QBZhMA7guQAugkBCgrIByhMQAGgDALAAIATAAIgCASQgCAKgEAEIgyA4QgfAjgRAVQgKALgJAWIgQAjIgdAgIjGEjIAlgNIANARIAbguQAXgDAKAFQAPAGADAWIgyAyIg3AjQggAVgVATQgGAEACATIACAgIgUAbQgMAQgHAMQgCACAEAIIAGAOIAHAKQAEAHACgBQAVgCAggkQAfgjADgXIA3ACIgsBtIASAcQAcgDAJAQQAGALgBAcIAAATQhCBiguBwIANAIIBsiAIAygoIA1AOIgjBMQgUArgJAeQgIAagEAqIgGBGIgBATQggARgJApQgFAWgHAvIAEADIASAcIAIAEIADgNIBbAUIgLApIgZATQgPALgDAKQgKAkgKA1IgRBbIABgBIgKAMQgEAbgXAKIgsALIgHgGQgqgFgmAmQgmAmADAqQACAaALAEQAHACAYgJQAOgFAXgCIAsgEIgGAVQgDAJgCABQgiAOgSAjQgEAGgVA8QgQAtgPAcQgVAngZAVQghAcg4AeIhhAyIgIgLIgMA2IAzAWQh+BigxAjQgGAEgMABIgVABIAKgdIh0AyQh1A0geALQhUAehFAFIBhg3g");
	this.shape_212.setTransform(133.199,296.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CE9C69").s().p("AgogiIBHAmIAJAfg");
	this.shape_213.setTransform(36.85,412.675);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#CE9C69").s().p("AgdhmIAOAfQAKATADANQAHAeAKApIAPBHg");
	this.shape_214.setTransform(5.8,361.25);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#DDAA53").s().p("ACKBnIABAAIiJg2IichgIgFgBIgfgdIAAAAIgJggIAAAAIAdAAQCWCBDSA9IAKAJIAAAUg");
	this.shape_215.setTransform(59.975,424);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#DBC1BB").s().p("AgFAFIAJgJIABABIgJAIg");
	this.shape_216.setTransform(28.45,264.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E2CDC5").s().p("AgEAFIAJgJIAAAJg");
	this.shape_217.setTransform(456.45,7.525);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#F8DACF").s().p("AgKgGIAVACIgVALg");
	this.shape_218.setTransform(346.2,68.65);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#DBC1BB").s().p("AgFAKIAIgUIADADIgJASg");
	this.shape_219.setTransform(50.425,229.95);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#DBC1BB").s().p("AgJAJIASgSIABAAIgSATg");
	this.shape_220.setTransform(26.95,266);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#DBC1BB").s().p("AgJAJIATgSIABAAIgTATg");
	this.shape_221.setTransform(33.95,258.025);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#DBC1BB").s().p("AgOAAIAdgJIgdATg");
	this.shape_222.setTransform(458.45,7.025);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A16A4E").s().p("AgJgDIAJgSIAKAgIgSALg");
	this.shape_223.setTransform(324.95,74.875);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#DBC1BB").s().p("AgKAYIASgxIADACIAAAmIgTALg");
	this.shape_224.setTransform(45.925,243.45);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#DBC1BB").s().p("AgUAZIAogyIABABIgKAoIAAAAIgLAJIgTABg");
	this.shape_225.setTransform(30.95,261.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#DBC1BB").s().p("AgXARIgCgCQARg6AjAxIgYACIgSAJg");
	this.shape_226.setTransform(53.4,227.3979);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#B2544B").s().p("AgeATIACgKIAKgIIATgMIAegIQgDAagSAIQgKAFgPAAIgPgBg");
	this.shape_227.setTransform(400.725,45.8118);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#DBC1BB").s().p("AgYALIAwgeIABABIgJAYIgUAOg");
	this.shape_228.setTransform(462.475,4.95);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#974522").s().p("AgdAVIAognIATgCQAAAbgSAJQgKAFgRAAIgOAAg");
	this.shape_229.setTransform(394.875,49.9329);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#DBC1BB").s().p("AgPAxIAdhjIACACIgJBZIgUAKg");
	this.shape_230.setTransform(48.375,235.975);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#B2544B").s().p("AgiAaIAVgdQADgCACgEIAZgRIATABQgOAbgMALQgOAOgVAAIgJgBg");
	this.shape_231.setTransform(410.15,39.2564);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#DBC1BB").s().p("AAIgFQgIgRgcAFIgCgBIAZgJQANgFABACQAGAJAGAQIAJAbIgTAKQABgdgEgIg");
	this.shape_232.setTransform(389.9,42.8464);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#DBC1BB").s().p("AgyAeIBkg8IABAPIgBgEIgLALIABAAIgUAJIAAAAIhGAeg");
	this.shape_233.setTransform(340.05,71);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#DBC1BB").s().p("AAogcIgWAdQgEABgCACIgVASIAAgBIgdAIg");
	this.shape_234.setTransform(404.8,41.75);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#DBC1BB").s().p("AgnAyIBNhkIACACIgKApIgKASIg7Aog");
	this.shape_235.setTransform(40.975,250.95);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#DBC1BB").s().p("AAVggIAdAAIgyAxIAAgCIgyASg");
	this.shape_236.setTransform(390.9,51.325);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#DBC1BB").s().p("AhCA/IgTgBQALgLAVgYQATgVAOgKQAUgOAfgRIA2gcIgKAfIgzAlIAAAAIgsAmIgWADIgNAJIAAAAIgLAJg");
	this.shape_237.setTransform(420.4,30.375);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#B2544B").s().p("AAkgGIiLAuIgBgMIDRhSIgDAqIg1AqIAEAIIArgGIAAAIIg3APg");
	this.shape_238.setTransform(242.45,129.05);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#F8DACF").s().p("AifBLIAogeICphZIApgeQAEgBADABIAMgKIAKAAIAegUIAUAJQgBAEAAADIgUAOIABgBIgQALIivBpIgoAVIAAABIgTALIAAgBIgfATIgBAAIglANg");
	this.shape_239.setTransform(444.975,16.525);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#DBC1BB").s().p("AhVCLIAjhWQAWg0ARggQALgXAXggIAog2IAXABIhdCuIgbA1IgZA1g");
	this.shape_240.setTransform(173.55,175.075);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#DBC1BB").s().p("AhtBAIALgRIBPhhIAcgQIAAAeIgFAGIAGgFIBZgzIAAABIALAUIgPASIgvAfIgKAJIgKAKIgLAJIAAgBIgTALIABAAIgNAKQgFACgCAEIgUAQIABgBIgfAaIgRAIgAgWABIAFgBIAAgDIgEgBg");
	this.shape_241.setTransform(325.1,82.675);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#F8DACF").s().p("AiqAaIABAMQABAIADADQATARA8gKQA7gJASgXIBsgbIA8geIAogoIAaACQgQAOggAgQgcAagXALQhKAmhfAOQhFAKhwAAg");
	this.shape_242.setTransform(145.075,196.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#DBC1BB").s().p("AjNCHIAzgnQAggYAVgOQAmgZELioIACABIAAAeIABAAIgBABIAAgBIhlBFIAAAAIgLAJIgTALIAAAAIiBBPIABAAIgVAKIAAAAIgLAJIABABIgUALIgKAKIAAgCQgFgCgEADIhDAgg");
	this.shape_243.setTransform(366.4,54.525);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#DBC1BB").s().p("Ai6B3IAngnQAZgYARgMQBag9CjhpQAGgDAMACIAVADIgLARIgTAIIiBBQIgWAQIAAAAIgdAUIgKAKIAAAAIgUALIABAAIgKAJIgQAKIgCgBIgZATIABABIgTALIAAAAIg4Aig");
	this.shape_244.setTransform(306.3,84.8136);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#DBC1BB").s().p("AjMCtIA1grQAyAQBGgfQBFgdAZgwQA5hrAxhWQADgGAKgHIAQgMIAHAGIgjA4IAAAAIhFCNQgDADADACIgLAZIgBAEIgnA2IgJAAIgIADIAAgBIgVAKIABAAIgeAUIgCAHIABAAIgmAEIgVgLIgCAHIAPAGIg/AJQAAAEgBADIhHAJg");
	this.shape_245.setTransform(267.775,114.75);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#E2CDC5").s().p("AjKBYIAXgCQAaARARgRQAQgXAJgKIBMhVQAtg0AigeQAXgTApgTIBGggIAZANQgcAQg5AeQgzAbggAWQg4Apg0BJQgKANhMB5QgDAFgOAHg");
	this.shape_246.setTransform(74.025,219.35);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#DBC1BB").s().p("ABpA3QgDgCgBgIIgBgNIA4hBIgGgMImBBtIgZgNQE6hiA5gRQALgDATAEIAgAHIgGAeIgHAcQgCAGgHALIgSAZICAgOQgSAXg7AJQgWAEgRAAQgcAAgMgLg");
	this.shape_247.setTransform(117.925,195.7709);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E2CDC5").s().p("AltDDQATg/BDgpQBDgqAwAWQBVhNByhAQBfg1CAgxIA0gVQAggIAYAXIjTBTIgUALIAAAAIgXAKQgDgBgDAEIgfARIAAAAIgPAKIgEAAIgLAKIAAgBIgUALIABAAIghAUIinCHIgLAOIAAgBQgFAAgDACIgWgXIALgjIgHgHIgqAjIgVATIhDA9g");
	this.shape_248.setTransform(216.4,141.4813);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#DBC1BB").s().p("AgIgCIATgEIgCAGIgTAHQABgFABgEg");
	this.shape_249.setTransform(238,341.275);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#A16A4E").s().p("AgMAJIgBgJIAKgIIANgBIAEATg");
	this.shape_250.setTransform(437.425,52.05);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#7E4F37").s().p("AgQAKIAfgUIACAVg");
	this.shape_251.setTransform(353.475,190.85);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#A16A4E").s().p("AgJgKIAagFIgeAfQgIgTAMgHg");
	this.shape_252.setTransform(337.4308,225.675);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#DBC1BB").s().p("AgDAJIADgJQADgFgBAAIglgaIAXgIIAPARIAgAaIgmAkg");
	this.shape_253.setTransform(197.35,399.05);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#DBA987").s().p("AggAOIASgeIAZggIAYA4IggAWIglAUg");
	this.shape_254.setTransform(351.45,188.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#DBC1BB").s().p("AgrANIAAgBIAJgLIgBAAIAMgSIACAAIAYgWIA1AlIhvAqg");
	this.shape_255.setTransform(382.55,122.975);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#BD795E").s().p("AgxAKIAsgKQAWgKADgbIALgBIAyATQgBAFgBAEIifAxg");
	this.shape_256.setTransform(229,343);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#EECEA9").s().p("AhEAQIgGgMIBAgkIApAiIAsAfg");
	this.shape_257.setTransform(220.35,351.775);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#DBC1BB").s().p("AABBPQAEgvgVgnIgBAAIgNiKQACgEAAgCIAUgMIAAAAIAnAAQgiAUgCAkQgBAQAMAxQAOAzAAAoQABAygTAqQgCAFgHAHIgMALQASg3ACgeg");
	this.shape_258.setTransform(259.975,313.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#BD795E").s().p("AhnCHIAggYQAUgOAOgHQA4gbAjgqQAogwgIgzQgCgMABgTIADggQAWAngFAvQgCAegSA3IhkBOIgUALIhGAXg");
	this.shape_259.setTransform(249.5139,327.075);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#A16A4E").s().p("AhVBdIgBgfIgdgPQBJg3ARgMQAmgbA6ggQAJgFANgEIAXgIQhLA5gnAcIgeATIghAUQAGANASAaQAHAVgmAJg");
	this.shape_260.setTransform(323.575,237.725);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#B2544B").s().p("AhOCCQAqhTBJiKQADgFAPgMIgvgfIAngTIAiABQgnBygYA0QgoBag3A8QgFgVAEgIg");
	this.shape_261.setTransform(347.0908,207.825);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#B2544B").s().p("AixEQQAJgeAJgSQB2kXDBjTIATgWIgmgLIA2gXIAIAiIgJAUIhrCKQg/BRglA6QgiA2gqBVQgvBfgYAvIgaAgg");
	this.shape_262.setTransform(369.45,154.95);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#BD795E").s().p("AjPDbIAmgKQAYgGAMgIQAygfAng0QAfgqAehAQASgjAcg1IAwhYICfhQIASAEIgmAVQgWANgRAHQg+AcgpA5QggAtgaBKQg6CriLA6QgSAIgfAGIgzAIIgoABIBQggg");
	this.shape_263.setTransform(287.9,272.125);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#DB402C").s().p("ArEVbIDkp/IgVgJIg8BvIgYAUQgOAMgHAJIhsCMIgEgZQgBgKAAgDIAdhpQASg8AQgqQAQgtAeg/IAyhrICVi/IgIgGIiXBhIAQgtQAKgaAKgQQAMgRAAgEQAAgIgSgFIExlhIgLgJIgYAEIgoAdIgVAUIgnAUQgigKAFgTIAVgkIAlhLIAKgKQAqAAAUgjQALgUARgtIAQgMIgPgHIgUABQgMABgHADIhCAlQgsAZgYALQiOBIhPAjQgrAShAAYIhtAqIhGgfIgQABQgJABgDADQhLA6iTB2IglAZQgVAPgNANQgPAQgeAnQgcAlgRASQgHAHgUAEIghAGIgUgVIgvgMIgBAIIgfgZIAehlQARg6APgpQAGgSAQgXIAagnIAAgKIAKgKIAdAUIgKAcIgGACIgMAeIABABIgBAQIASgBIAUgcIgBABIAMgTIgBgBIATgVIAAABIALgOICniHIAigUIgBAAIAUgLIAAABIALgKIAEAAIAPgKIAAAAIAfgRQADgEADABIAXgKIAVAAICNgvIAFA/IBcgYQAGgDAvADQAhACAPgaIgBAAIAWgHIAwghQAwgDgJgyIABgEIALgZQgDgDACgCQAggWAQgrIAWhNIAAAAIBbhaIAAABIATgMIgBAAIAZgTIACABIAQgKIAKgKIgBAAIAUgKIALAAIAdgfIAAABIAWgSIAagPIAjA5IgLARIgFABQgXABgHAPQgFAKAAAYIAAAAIgJAKIAAABIgJATIAZgDIALgJIAAAAIApgnIABAAIAxgpIgBABIAUgQQACgEAFgCIANgKIgBAAIAUgLIAAABIAUgUIAKgJIBcg6IAKgKICLhQIAJgNIAAABIAKgKIAUgLIgBgBIALgIIAAAAIAVgLIgBABIA6gTIgJgMIBRgxIAAAAIATgLIALgJIAWgBIAMAXIAAACIg5BNIgZAUIgCARIAWgGIAJgEIAAgGQADgDAEAAIANgKIAEABIAxguIAPgEQA4AXAOhBIABACIAKgKQAdADANgHQARgKABgcIgDgBQAbADAOgGQASgJADgaIAAAAIAWgRQACgCAEgBQAbADASgQQANgLANgcIAAABIALgJIAAAAIANgJIAWgDQAzAMgGgyIAAAAIBZg0IAAAAIAggSIAAAAIATgMIAAAAIAngVIA1gQIgBABIBCADIgCADIgMAPIACABIgZAHQgegCgdAWQggAdgQANQgCABAEALIAGARIAKAAIABgBIAogSIBZg4IARgHQAmAAASgHQAbgLAIghIABAAIAfgIIAAgKIAAAAIAAAAIAAAAIAVgKIgCAAIAegUIA2AGIg0AjIgKASQjJCTgkAcQglAchqBeQgsAmA4AaIgtAlQgZAVgOARQghAmg1BDIhUBpIhxCEQhGBRgpA0QgQAUgRAiQgSAogKASIgBAAIgMATIABAAIgJALIAAABIgTAdIgBABIgFABIAEAEIAJgIIgBAAIA7gUIAlALIgSAWQjCDSh3EXQgJATgJAeIgRAyIgSAgIgCAjIAvAeQgPANgDAEQhKCLgrBUQgDAHAFAWIgCADIgbAFQgMAHAIAUIgIAIIgXAHQgNAFgJAEQg5AhgoAbQgQALhKA4IgIAOIAmABIAAAgIifBPIg1AjQgfAVgQASQgaAdgzBEQgwBBgeAfQg+BBhAAAQgSAAgTgFgAjDHZQgJAigNBEQgOA8gRAlQgSAmguA+QgyBEgQAeQgQAcgQAwIgYBOIARAJQAdhKA7g0QA0gtBPgiQAfgNA7gfQBmgzgOhgQgNhQAbg/QAag9BAgzQAWgRAYghIAog4IgIgJIhtAaIgCgMQgBgEABgBIAMgWQAHgNAGgIIEllEQAGgGAegoIgIgIIiJAqQBDiBCAivQCsjqAhgzIiXB2IgpgpIALgnIACgFIgDAEIh2BDQhGApgrAgQg8AuhJBCIh/B2QggAegtAvIhKBPIALAMIAqgTIAMACIhqCIIAPANICfhZQiqC7hkEXQgBADAEAHIAIAMIAKAVIhSCAIAHAEICQhpgAKurOIAEABIADgCIgDgDg");
	this.shape_264.setTransform(328.1,150.5917);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#EECEA9").s().p("AgDgdIAHAAIgHA7g");
	this.shape_265.setTransform(0.425,339.05);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#DBA987").s().p("AgDgdIAHAAIgHA7g");
	this.shape_266.setTransform(0.425,316.975);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#DBC1BB").s().p("AgdAFIA7gJIAAAJg");
	this.shape_267.setTransform(131.025,439.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#DBC1BB").s().p("AgdAOIAegcIAdAAIgUATIgmAKg");
	this.shape_268.setTransform(467.95,1.525);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EECEA9").s().p("AgiAFIAUgUIAxAAIhEAfg");
	this.shape_269.setTransform(472.5,1.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CE9C69").s().p("AgNARIAAgdIAJg8IASCRg");
	this.shape_270.setTransform(1.375,343.325);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#CE9C69").s().p("AAuAcIh2gmIgRgIIgQgJIA/AGICUAxg");
	this.shape_271.setTransform(84.35,437.175);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#DBC1BB").s().p("AhUAdIB5hYIgLAoIA7AKIAAAJIhvAxIgIAFIgUAGg");
	this.shape_272.setTransform(474.45,8.05);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#DBC1BB").s().p("AiBClIAnhuQAYhAAUgsQAxhwB+hFIABABIgBASIg1A2IgvAuQgcAbgNAVQhbCPgSCfIgIAAg");
	this.shape_273.setTransform(13.0063,290.475);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#B2544B").s().p("AifBeIgCgQIBkg9IgEApQAcgNADgEQAKgLgcgSIARgJIAQgKIgBABIAUgOQAAgDAAgDIAVgOIB3g4IAUAAIACAVIjrCpIgWAAIABADg");
	this.shape_274.setTransform(461.975,9.675);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#DDAA53").s().p("ACAKPIAAAAIgJgLIAAABIgZgfQAAABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgyg7QgDgCABgEIg5hUQgCgCAAgDIgTgZQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIhFiRQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgPhHQgKgqgIgdQgDgNgKgTIgOgfIAAgEIgUiQIgIgBIAAigIAIg8QASifBciQQANgVAcgbIAuguIAHAsQgkAKgfApQghApgCAqIgUA7QgMAigGAYQhJEfBVEOQBZEiDiDhIAAATIAAABg");
	this.shape_275.setTransform(20,343.675);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#B2544B").s().p("AnkH8QAQgiAQgUQApg0BHhRIBwiEIBVhpQA0hDAhglQAOgRAZgVIAsglQg2gaAqgmQBrhfAkgbQAfgZDOiWIAKgTIA0giIg2gGIBxgyIAAAeQlMEShYBKQgJAHgHARIgKAbIAAglIgLgCIgqA0IAeAHIAbABIgNAZQgIAOgIAHQh8B2iWC0IkAE7IgZAWQAJgTATgng");
	this.shape_276.setTransform(431.65,64.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#DDAA53").s().p("ApbHkIh4gpIAAgdQEIA8DPg0QA7gPBIgcQAugSBPgkQAggPAsgcIBLgwIAVgBQALgBAHgEQAwgjB/hiIgzgXIAMg1IAIALIBggxQA5geAhgcQAZgVAVgnQAPgdAQgsQAVg8AEgHQASgiAhgOQADgBACgJIAHgWIgsAFQgXACgOAFQgYAJgIgDQgLgDgBgaQgDgqAmgmQAlgnArAFIAHAGIgwAtIhAAlIAHANICQARIgRAvQgKAdgJASQgJATgWAnQgVAmgJAVQgWAtgWAdQgcAkgmAUIgZAOIgHAEIhQAnIgWAIIglARIADAMIBBANIAAAeIglAPIgKAHIiSB1QhVBEg/AwQgRANgdANIgxAWIgNAHIg6AUIg0AMIgRABIgaANIhWAOg");
	this.shape_277.setTransform(155.4,391.6463);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,483,440), null);


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
	mask.graphics.p("AmeNIIAA6PIM9AAIAAaPg");
	mask.setTransform(41.5,84);

	// Layer_3
	this.instance = new lib.Image();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,83,168), null);


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
	mask_1.graphics.p("AwnPjIAA/FMAhPAAAIAAfFg");
	mask_1.setTransform(106.375,99.5);

	// Layer_3
	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F79020").s().p("AgUg0QAjATAFAbQAFAbgaAgg");
	this.shape_278.setTransform(128.8891,96.15);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F79020").s().p("AgRAXIgDgiIg+AFQAkghAsALQAqALArAxg");
	this.shape_279.setTransform(96.675,69.7375);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#F79020").s().p("AgRCsQg0gbgWg5IgFgPIg2gJQgfgFgSgKQgUgLgQgSQgSgUgDgRQgCgNARgVQAVgYAIgMIAPgPQALgKACgHQALgjAZgHQATgGAkAMQAKAEALgBQAMAAAGgEQAsghAhAFQAhAFAZApQAVAFApAFQAgAFAIAMQAzBOAWBZQAHAfgkAiQghAgglAEQgmAEgkAQQgWAJgWAAQgcAAgcgOg");
	this.shape_280.setTransform(96.3218,97.6985);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FA5A2F").s().p("AgKAGQgCgcgGgMQAZAGAIAVQAFAMgBAeQgYgEgFgZg");
	this.shape_281.setTransform(118.1773,69.75);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FA5A2F").s().p("AgxABQAfgLAUAAQAbABAVAUg");
	this.shape_282.setTransform(127.175,74.15);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FA5A2F").s().p("AgTgIQACgsAlAWIgnBFg");
	this.shape_283.setTransform(105.25,125.4944);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FA5A2F").s().p("AggAlIA4hJQARAkgPATQgNASglAAIgIAAg");
	this.shape_284.setTransform(146.4212,125.0841);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FA5A2F").s().p("Ag+ASQAWgjAkAAQAiAAAgAjg");
	this.shape_285.setTransform(88.45,49);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FA5A2F").s().p("AhoAKQAtAKA9gTIBngeQgoAug5AKQgOADgQAAQgpAAgpgUg");
	this.shape_286.setTransform(92.675,132.3682);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FA5A2F").s().p("AgEAXQgugDgfgdIAEgNICfAWIgDASQhEAFgNAAIgCAAg");
	this.shape_287.setTransform(87.75,143.7269);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FA5A2F").s().p("AgYBbQAHgugEgNQgDgNgfgiQAKgGAiANQAaAKAGgcQADgLgRgVQgVgZgJgOQAGABARgCQANAAAFAFQAQAPAKAPQAOATgDAKQgKAdgUAmIgiBCg");
	this.shape_288.setTransform(148.2023,82.5477);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FA5A2F").s().p("AiTD7QgTgKgGgZQA4ASAbgLQAcgLAfg1QATghAPgLQAYgQAjAJQAKACASgPQAKgHAUgWQAgghACgbQABgWgXgsQgMgVgMgmIgVg8QgGgRgMgWIgVglQBBAZAGBIQAEApAUAhQAvBMgdBCQgdBChXAXQgRAFgXAWQgeAfgHAFQgvAjgdAIQgKADgIAAQgMAAgKgFg");
	this.shape_289.setTransform(127.257,100.8613);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FA5A2F").s().p("AiPDNIg7gWQgigNgVgMQgugaAThCQAEgOAAgQQAAgRgHgKQgkg3AXg9QAXg+A+gLQAHgBAHgJQAHgIADgIQAbhOBIAFQAYACAMgHQANgJAGgaQAGgiAggQQAhgRAyAKQAuAJBAAWIBrAnQADABACAGIAEAKIhmgeQg8gSgqgLQg0gOgaAMQgYAMgfAwQgIAMgVAJQgSAIgUABQgfADgRAMQgTAOgLAcQgFAPgMAOQgMANgOAIQgyAdgKAcQgLAcAUA0QARAsgFAlQgHA2AOAUQAOAUA1AKQA1ALAJALQAIAKACA4QABAPALATIAWAhIAVAdIAWAcQhqgqgGiGg");
	this.shape_290.setTransform(85.2555,95.2398);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#F16821").s().p("AiyFvIAAAAIgXgcIgVgdIgVghQgMgTAAgPQgDg4gHgKQgJgLg1gLQg2gKgOgUQgNgUAGg2QAFglgRgsQgTg0AKgcQAKgcAygdQAOgIAMgNQANgOAFgPQAKgcATgOQASgMAfgDQATgBATgIQAVgJAIgMQAfgwAYgMQAagMA0AOQApALA8ASIBmAeQAGAMACAeQAFAYAaAEIAUAKIBlAKIAUAmQAMAWAHAQIAVA9QAMAlALAVQAYArgCAYQgBAaggAiQgVAVgJAIQgTAPgKgDQgjgIgXAQQgRALgTAhQgfA1gbALQgbAKg5gSIgaAAQgngXgCAsIAAAwIhmAfQgpANghAAQgSAAgQgEgAi5iXQgZAHgLAkQgCAHgLAJIgPAQQgIALgVAYQgRAWACAMQADARASAVQAQASAUALQASAJAfAGIA2AJIAFAPQAWA5A0AaQA0AaAwgVQAkgPAmgFQAlgEAhggQAkghgHgfQgWhagzhOQgIgMgggFQgpgFgVgFQgZgogggFQgigFgsAgQgGAFgMAAQgLAAgKgDQgZgJgQAAQgIAAgGACgAEfAwQAbgggFgaQgFgcgkgTgAgzj1IBlAJQgrgygqgLQgtgLgkAhIA+gFg");
	this.shape_291.setTransform(100.0208,96.6401);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#E36738").s().p("AgCgCIADgFIACAPg");
	this.shape_292.setTransform(164.3,162.85);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FA5A2F").s().p("AgJALQgSgLADgYIAxAxQgegMgEgCg");
	this.shape_293.setTransform(69.6094,149.85);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FA5A2F").s().p("AgKADQgJgZAOgZIAUBfQgUgbgFgSg");
	this.shape_294.setTransform(57.6358,129.525);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#E36738").s().p("AgLAPQgRgPgQgiIBZBFIgDAAQggAAgVgUg");
	this.shape_295.setTransform(69.7,154.7773);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FA5A2F").s().p("AAHAFQASgpgJgnQA1BbhmA9QAhg1AHgTg");
	this.shape_296.setTransform(171.6282,109.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FA5A2F").s().p("AhKgCQAIgLAEAAQAaADAzgGQAvgBAbAZIgsgGQgbgDgRABQgRAAgbAGIgtALIAOgTg");
	this.shape_297.setTransform(122.3,49.4732);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FA5A2F").s().p("AADAaQgWgFgfgSQgkgVgSgJQBMAbAaAGQA6AOAwgIIgzAMQgTAEgOAAQgJAAgIgCg");
	this.shape_298.setTransform(82.55,155.163);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#E61F23").s().p("AjJJHQgagGhMgcIABAAIgzgyIABAAIgfgeIABAAIgKgKIgphaIgVhgIBMgHQhUgVgngPQhDgbgahBIAxgWQg8gNgjgVQgpgZgTgsQgQgiAMgwQAMgyAfgTQAHgEASADIAlAGQAEg5ARgYQAaglA/AMQgTgqAbhFQAahEAqgWQAggQAcAIQAcAIAwAoIgMgVQgHgNgCgJQgIgnAKgLQA1g5A9gYQBCgaBGAPQAZAFAdAhQAHAHAoA1QAKAOAIAbIAMAtIAOAAIAKg8IAtgLQAbgHASgBQASgBAaAEIAsAHIALAKQAjASALAxQAQBLAFAKQARhaBTATQAmAJApAuQAqAvAAAlQAAAYgGAgIgKA4QgCAJgEALIgIAUQAUAEAUgjQASgfAdAVQAwAjgVAyIg7AGIBWBDIAJAJQACAEgBAEQAJAogRAqQgIATghA0Ig7AhIgtg4IgGA7QgGBdhVAuQhwA9hsgTQgHgBgMAJIgVARIgsAjIgsAiQgFAEgKABQgJABgDgDQgXgfgUANQgMAIgWAXQggAWhDApQgSADgTAAQghAAglgJgAjkHFQAfAeAuADQAKABBKgGIADgTIihgWgAlrjkQgDAIgHAIQgIAJgGABQg+ALgXA+QgXA9AkA4QAGAKABAQQAAAQgEAOQgTBCAuAaQAVAMAiANIA7AWQAGCGBqAqIABAAQA4AcA5gKQA5gLAngvIAphFIAbAAQAGAZATAKQARAJAXgGQAdgJAvgjQAHgFAfgeQAXgXARgEQBXgXAdhDQAdhDgvhLQgUghgEgoQgGhIhBgaQgVgVgbgBQgVAAgfAMIgVgKQABgegFgNQgIgVgagGIgEgKQgCgGgDgBIhrgnQg/gWgugJQgygKghARQghAQgGAiQgGAagNAJQgMAHgYgCIgKAAQhBAAgYBJgAGWE5QAtACAPgUQAPgTgSgkgAGSikQAeAjAEANQAEANgIAuIAPAIIAjhCQAVgnAJgdQADgKgNgTQgKgPgQgPQgFgFgPAAQgQACgHgBQAKAOAWAZQAQAVgCALQgGAdgbgLQgYgJgMAAQgFAAgDACgAjKnRIB9AAQgggkgkAAQgjAAgWAkg");
	this.shape_299.setTransform(102.4829,97.4461);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#E36738").s().p("AgLACIgLgSIAuAhg");
	this.shape_300.setTransform(128.4,174.05);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#ED6925").s().p("AAfAuIgLgJIADgCIgDABIgKgJIAAAAIgughIgKgIIABggIAqAHIgBABIATALIAVAcIgBABIAKAKIABgBIgPAkg");
	this.shape_301.setTransform(129.75,173.025);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#8F0704").s().p("AABgDIADADIgGAEg");
	this.shape_302.setTransform(206.25,75.775);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#E36738").s().p("AhBgVIgFgPIAQgkIB9B8IgFAVg");
	this.shape_303.setTransform(139.925,181.425);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#8F0704").s().p("AhIAdIAAgKICMg1IAFAKIhNAyIguAJg");
	this.shape_304.setTransform(26.425,134.375);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#ED6925").s().p("AgdAKIAngnIAUAKIgeAxg");
	this.shape_305.setTransform(59.15,153.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#ED6925").s().p("AgSgKIAUAFIAHAFIAKAFIgkAFg");
	this.shape_306.setTransform(35.075,63.25);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#ED6925").s().p("AhVArIAUgUQANgNAGgJQAHgIAGgOIAKgYIArgaIAjASQAVAMAMAKQAEADACAMIABAUIhPgIIgDgRIgvBBIg8Acg");
	this.shape_307.setTransform(61.65,163.95);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#E36738").s().p("AgBgBIACgCQACAEgBAEg");
	this.shape_308.setTransform(109.9821,16.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#8F0704").s().p("AgBgBIACAAIABADg");
	this.shape_309.setTransform(123.9125,160.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#E36738").s().p("AgFgEIALABIgEAIg");
	this.shape_310.setTransform(108.65,39.95);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#E36738").s().p("AACgEIAFAGIgNADg");
	this.shape_311.setTransform(33.725,120.75);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#8F0704").s().p("AgEAJIAAgSIAJATg");
	this.shape_312.setTransform(124.7,161.375);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E36738").s().p("AgDgDIAIgDIgDANg");
	this.shape_313.setTransform(42.65,55.85);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#E36738").s().p("AACgHIAGAGIgPAJg");
	this.shape_314.setTransform(40.95,126.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#E36738").s().p("AgOABQAZgaAEAkg");
	this.shape_315.setTransform(189.6,112.3927);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#E36738").s().p("AgIAMQgNgHABgVIApAgIgKABQgMAAgHgFg");
	this.shape_316.setTransform(46.3963,120.6017);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#E36738").s().p("AgUADIApgSIgRAfg");
	this.shape_317.setTransform(178.025,53.85);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#E36738").s().p("AALgTIgEAnQglgXApgQg");
	this.shape_318.setTransform(49.0043,64.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E36738").s().p("AgTgJIAnAAIgcATg");
	this.shape_319.setTransform(184.2,120.325);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#E36738").s().p("AgFgTIAWAmIgKABQgnAAAbgng");
	this.shape_320.setTransform(41.868,116.2255);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#E36738").s().p("AgPAEIARgcIALADIADAug");
	this.shape_321.setTransform(125.65,27.775);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#E36738").s().p("AgXgMQAIAFAagJQAVgCgMAjg");
	this.shape_322.setTransform(41.0932,51.7947);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#E36738").s().p("AgPAXIAJgtIAGgCIAQAxIgfgCg");
	this.shape_323.setTransform(108.35,11.85);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#E36738").s().p("AgLAPQgPgIACgaIAxAmIgOABQgOAAgIgFg");
	this.shape_324.setTransform(182.7182,133.3224);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E36738").s().p("AgWgYIAQABIAdAaIgYAWg");
	this.shape_325.setTransform(130.575,35.625);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#E36738").s().p("AgYAPIAxgdQgBAWgQAFQgGACgSAAIgIAAg");
	this.shape_326.setTransform(118.6,149.7292);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#E36738").s().p("AgTAaIAmgzQADAagGAMQgGANgVAAIgIAAg");
	this.shape_327.setTransform(158.075,132.6237);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#E36738").s().p("AgPgLQAKgWAeACIgxA/IAJgrg");
	this.shape_328.setTransform(52.8,56.5165);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#E36738").s().p("AgxAPIAAgHIBjgWQgMAdghAAQglgEgRAEg");
	this.shape_329.setTransform(91.125,160.85);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#E36738").s().p("AgdgWIA7AUIgnAZg");
	this.shape_330.setTransform(113.125,44.575);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E36738").s().p("AgZAoIAzhPQgBAsgDAJQgKAagkAAIgBAAg");
	this.shape_331.setTransform(175.475,114.2255);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#E36738").s().p("AgZgsQA1AagCA/g");
	this.shape_332.setTransform(145.5305,160.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#E36738").s().p("AgLATQgPgFABgfQAYgDAIACQAQAFADAWQgUALgLAAIgGgBg");
	this.shape_333.setTransform(142.5469,55.3089);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#E36738").s().p("AgfgMQAKgDAcABIA1ACIh3AbQAHgWAVgFg");
	this.shape_334.setTransform(129.05,144.7607);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#E36738").s().p("AgHAmIgMhLIAnALIgSBAg");
	this.shape_335.setTransform(98.975,178.05);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#E36738").s().p("AgsgcIA5AIQAeALACAmg");
	this.shape_336.setTransform(154.625,59.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#E36738").s().p("AgPAbIgKg8IAKABIApBCg");
	this.shape_337.setTransform(126.775,165.65);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#E36738").s().p("AgVgmQAmAEAEAYQADAOgOAjg");
	this.shape_338.setTransform(163.2007,67.375);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#F16821").s().p("AgiAGIAngbIAeABIAAAHIgCAjg");
	this.shape_339.setTransform(82.625,163.725);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#E36738").s().p("AgcAdIgLg5IBPAdIgoAcg");
	this.shape_340.setTransform(79.125,161.425);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#F79020").s().p("AgCAfIgOhAIAQgDIAFAMQAEAHABAFIAIAxQgTgDgBgDg");
	this.shape_341.setTransform(131.15,152.075);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#E36738").s().p("AhAgEQAegVAlAHQAkAHAaAfg");
	this.shape_342.setTransform(125.65,44.3125);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E36738").s().p("AgjAgQALgEASgkQANgeAdAGQgLAigKAOQgLASgWAAQgIAAgJgCg");
	this.shape_343.setTransform(68.75,45.8419);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#8F0704").s().p("Ag4AXIAlgZIBKgcIACAWIgrASIhCAVg");
	this.shape_344.setTransform(174.475,53.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E36738").s().p("AgOgSIAlgMQAXgIAMgIIgDAMQgCAHgDACIhrBIQABgvAqgSg");
	this.shape_345.setTransform(166.2,123.575);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E36738").s().p("AgxgUQALgBAYgGQAUgEAJAFQALAFAJATIAPAgg");
	this.shape_346.setTransform(103.125,36.4111);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#E36738").s().p("AgiAEIAig9IACBDIAhAAIAAAwg");
	this.shape_347.setTransform(161.6,49.875);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#E36738").s().p("Ag4glIAoAAIBKAuIgfAdg");
	this.shape_348.setTransform(29.5,51.35);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#8F0704").s().p("AgBASIgVgTIgfgVIACgCQgDgVAHgDQAHgCAOAOIBQBVg");
	this.shape_349.setTransform(61.725,27.3811);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#E36738").s().p("AgogRIAjgCQATgBAMgFQAKgFAUAHIAiALIizAoQAJgnAogGg");
	this.shape_350.setTransform(87.125,35.483);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E36738").s().p("AgpgcIAhgYIAyBlIgFAEg");
	this.shape_351.setTransform(160.25,157.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#E36738").s().p("AgMg2IAnAZIgQAqIglAqg");
	this.shape_352.setTransform(104.85,179.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#8F0704").s().p("AgMgBQgkgKgQgJIASgSIA6AWIA1AlIgqASQgGgdgdgLg");
	this.shape_353.setTransform(192.825,116.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#E36738").s().p("AgsAVIACgyQAPAJAjAKQAfALAGAdg");
	this.shape_354.setTransform(190.675,117.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#E36738").s().p("AgWAEQgVgqALgfIBFCLQglgXgWgrg");
	this.shape_355.setTransform(143.5889,164.275);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#E36738").s().p("AgtAJQAPgHAFgBIATABIgDgwIA2BSIgmALg");
	this.shape_356.setTransform(198.6,113.675);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#8F0704").s().p("AAAASIAAABIgzglIgJgXIAQgBQAKAAAFADQALAGANAKIAWARIAsAjIgOAOg");
	this.shape_357.setTransform(185.35,133.25);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#8F0704").s().p("AAKAiIgphCQgVgjAnAIIAeA9IAOAcQAHAQABAQg");
	this.shape_358.setTransform(54.3189,32.833);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#E36738").s().p("ABkgoIgwAmQgcAVgWAKQgRAHgfACIg1ACg");
	this.shape_359.setTransform(146.075,139.25);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#8F0704").s().p("AA5AsIgxgVIAAABIgKgKIABAAIhKguIAYgNIAiAOIAyAcIArAdIABARIgJADg");
	this.shape_360.setTransform(35.45,50.85);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E36738").s().p("AAGgUIgqACIBJhBIAACng");
	this.shape_361.setTransform(136.5,37.85);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#E36738").s().p("AgfAAIgWglIA2AZIgDg5IAQAXIAnB0g");
	this.shape_362.setTransform(150.55,185.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#EE6724").s().p("AgVggIADARIBOAJIAKAAIAAASIiLAVg");
	this.shape_363.setTransform(65.15,165);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#E36738").s().p("AgaBiIAQjFIADAWQABANAEAHQAGALAXARIgqCAg");
	this.shape_364.setTransform(75.525,179.35);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#E36738").s().p("AhjAoQBKhNB9gCIgCANQgBAHgDABQhRAdhXAcQgFACgIAAIgMgBg");
	this.shape_365.setTransform(106.15,155.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#E36738").s().p("AhdArIgBgKIB/gMIgIhNIBGALIgdAQQgOAMAAAVQABAJgRAMQgNALgRAGQgLAGgUADIgiAGg");
	this.shape_366.setTransform(39.6417,41.95);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#8F0704").s().p("AhaANIgJgMIDGgTIABASIhkAMIgoAFIgpACQgDAAgGgGg");
	this.shape_367.setTransform(195.2,74.175);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#E36738").s().p("AAOAsQgKglgagcQgFgFAAgOQAAgRgBgIIgDg1IANAJQAHAGACAEIAWBHQAMAoAGAgQADAOgFAXIgJAnQADgrgJghg");
	this.shape_368.setTransform(176.0667,98.35);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#E36738").s().p("AAdArIhvguIAXgsIAvAYIBfBHg");
	this.shape_369.setTransform(191.4,139.875);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#8F0704").s().p("AhvgfQgEgCgGgFIgPgMIAdgDIAWAKIAAgBIALAJIAQACIA1AUIAAAAICOA4IgPALg");
	this.shape_370.setTransform(180.65,139.825);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#E36738").s().p("AhGgDIAigpQAEgGAVAEQARAEAQAHQAOAGAQANIAdAWIgBAgIhAgvQgPgSgLACQgNACgMAVQgGAKgOAPIgWAZQgJgbAQgYg");
	this.shape_371.setTransform(117.063,167.72);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#E36738").s().p("AgcAdIAHgUQAFgMAAgIIgKh0IABgCIACgBIAIACIAUAkQgCAFgIALQgGAJACAGQAJAvAWBcQACAJAFAsg");
	this.shape_372.setTransform(150.95,162.475);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#E36738").s().p("AAUCCIgnhQIgyi9IARAOQAKAIAAAGQAKB2BfBzQADADACAFIACAKIgeAAg");
	this.shape_373.setTransform(58.175,137.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#8F0704").s().p("AgRgDIgCACIgKgLIABAAIgVgdIgUgLIABgBIgqhEIAjAaQAUAQAMAMIByBzIASAUIABAAIAVAnIgDAOg");
	this.shape_374.setTransform(136.225,174.45);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#E36738").s().p("AgfAFIBNhDIAygmIgTBVIgIgjQhgBmgbAbQgHAHgMAGIgWAJg");
	this.shape_375.setTransform(151.525,35.925);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#8F0704").s().p("AAcBhQAAgFgCgDIgRgiIgJgbIhHiKIAbgJIAzBaIAAAAIA5BlIAHAhIgaAPg");
	this.shape_376.setTransform(147.4,168.425);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#F16821").s().p("AAjBBIgCgUQgBgMgEgEQgNgKgTgLIgjgRIgtAYIAAgdIAegyIAeAAQAQAiAQAQQAXAUAigBQAFAAAFADIAKA5g");
	this.shape_377.setTransform(67.675,157.775);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#F16821").s().p("AAGA7IhBg6IAogyIAngKIAoBPIgoAoIgHAAQgFAAgCgBg");
	this.shape_378.setTransform(54.125,148.3281);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#E36738").s().p("AgRC2QgigQgOgSQgcgmgDg3QgDgpANg5QADgSAVgVQAZgZALgMQAogvAUgOQALgJAUgHIAhgMIhGBAQgoAmgaAdQg3A8APBKQAOBJBHApQAIAFAJANIAPAUIg4gbg");
	this.shape_379.setTransform(36.4792,91.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#E36738").s().p("AgYCeQgNgBgCgEQgbgsgIgQQgSgigJgcQgDgKAMgVIAYgoQgPgaAJgNQAGgJAYgGQAfgIAHgDQARgJgBgTIgSgMIBjgMIAMAMIgFAIIiGBCIAfAHIhRBZIBSCFIgUAAg");
	this.shape_380.setTransform(196.095,89.975);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#80160E").s().p("AhOhEIgVgjIBDAvIBOBRIAHALIgCgPIgzhlIAFgeIA7A4IAjCgIgQAFg");
	this.shape_381.setTransform(159.35,160.025);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#E36738").s().p("AgwA3IgggCIBNgzIgEgJIiNA1IgLgOIBjhWIAHAlIBygaIAABGIAYgFQASgDAOABQAJABAMAGIAXALIixARIgPAAIgRAAg");
	this.shape_382.setTransform(34.05,131.675);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#8F0704").s().p("AjIJ8IhQgdQgFgDgEAAIhahGIgDgKQgCgFgCgDQhghzgKh3QgBgGgKgIIgRgOIgDgCIgDABIgOgJIgDgCIgDABIgqggIgIgIIgWgoIgJgUIgPgUQgKgNgIgFQhIgpgOhIQgOhLA2g8QAagdApgmIBGhAQAFAAAEgBIAUAAIAJgKIgDgeIAGhCIAxg/IApgmIgBgCIA7gEQAkAJAQgZQAJgNALgkIAAAAIAUgUIAngWIgBAAIC0gpIAUACIBjAyIgBAAIAVAdIAUAuIAogaIAegFICCAZIAAAAIAUAOIAbAbIAOASIAAABIASAMIgBAAQgBAgAPAFQANADAZgNIAyACIBaA6QAEACACAAIAOAKIgBABIAgBOIAJA8IAnApIAAAAIAUAKIASAoIAEA2QABAHgBARQABAPAFAEQAbAcAKAmQAJAggDAqIg1BQIgIAHQgMAIgYAHIglANQgqATgBAuIgEASIgoA0IjHBRIgKACIg1gCQgegBgKADQgUAFgIAWIgTAUIgyAfQh9AChKBOIhkAXgAkBI/QAgATAXAFQATAFAegHIA0gNQBDgoAggXQAWgXALgHQAVgNAXAeQACADAKgBQAKgBAFgEIAsgiIArgiIAVgRQANgKAHABQBsATBwg9QBUgtAGhdIAHg8IAtA5IA6ghQBng9g1hcQAAgFgCgEIgIgJIhWhDIA7gGQAUgxgwgkQgdgUgRAeQgVAjgTgDIAHgUQAFgMABgJIALg4QAFggAAgYQAAglgpguQgqgvgmgIQhSgTgRBZQgFgKgRhLQgKgxgjgSIgMgLQgbgZguABQg0AGgagDQgFgBgIAMIgNAUIgKA8IgPAAIgMgtQgHgbgLgOQgog0gHgIQgcghgagFQhFgPhCAaQg+AYg1A5QgKALAIAnQACAKAHAMIANAVQgxgogbgHQgcgJggARQgrAVgaBFQgaBEATAqQg/gLgaAkQgRAZgFA5IgkgHQgSgDgIAEQgfAUgMAxQgLAxAPAhQAUAsApAZQAiAVA8AOIgwAVQAZBBBEAbQAnAPBUAVIhMAHQgOAZAJAbQAFARAVAcIAoBaIAKAKIAAAAIAeAdIAAAAQgDAZASALQAEADAfAMIAAAAQASAJAjAVg");
	this.shape_383.setTransform(103.2092,97.9);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#E36738").s().p("AAAADIAAgBIABgEIgBAFg");
	this.shape_384.setTransform(51.2,17.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#E36738").s().p("AgHgGIAPADIAAAKg");
	this.shape_385.setTransform(185.375,125.575);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#E36738").s().p("AgFgRIAKAGIABAcg");
	this.shape_386.setTransform(155.45,180.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#712218").s().p("AgGgDIANAGIgCABg");
	this.shape_387.setTransform(51.8,17.75);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E36738").s().p("AADAkIgrgkIAEgvIAPAHIA+BZg");
	this.shape_388.setTransform(191.125,132.55);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#E36738").s().p("AhJAFIBVgbIAVgBIAJAAIAgAEIgDAQIhLAbg");
	this.shape_389.setTransform(172.95,50.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#712218").s().p("AgiAyIADgcIASgfIgCgVIAEgSIgCgCIAvADIgkBOIgWAUgAAigvIABAAIAAAAgAAigvg");
	this.shape_390.setTransform(181.55,53.225);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#712218").s().p("Ag5AVQgEgIACgCIAVgWIAXgWIBMAcIhvAnIgHgNg");
	this.shape_391.setTransform(15.2295,138.475);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#712218").s().p("AAbA3IAAABIgKgeIAAAAIgEguIgLgDIgRAcIgBAAIgUAKIgGgZIATgWQAMgNAJgHQADgDAKABIAQABIAGAQQAAABAAABQgBAAABABQAAAAABABQAAAAABAAIAIBZIgQgBg");
	this.shape_392.setTransform(125.6,27.6964);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#712218").s().p("AAAA0IgnhqQAggGATAOQARALALAdIAAAAIgWA/g");
	this.shape_393.setTransform(47.15,18.0327);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#E36738").s().p("Ag2gJIANgfIAZAiIAsgdIAGAbIAUgKIgqA6g");
	this.shape_394.setTransform(118.5,30.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#E36738").s().p("ABUAtIAFheIjFA8IAPgbIA8gcICLgVIACADIgUCAg");
	this.shape_395.setTransform(61.55,172.85);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#712218").s().p("AhlA1ICNhFIgCgDIgMgNIgBgTIAlgJIAjAIIAFAPIhWA5IgMAHIhKAig");
	this.shape_396.setTransform(202.575,77.45);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#80160E").s().p("AgdA8IAUhdIgBAAIAShVQACgFAFgBIAPAqIAAAdIgSB0IghA+g");
	this.shape_397.setTransform(160.325,37.75);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#80160E").s().p("AhkBJIASgbQBghRAxgnQAMgOAHgEQAMgGAHAXIgdAeIAAAAIgTAUIAAAAIgKAKIgBgBIhjBWIAMAPIAAAJg");
	this.shape_398.setTransform(23.8,127.8296);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#712218").s().p("AAuBAIhYgLIgVgMIAHgQIAOgKIA1AEIhfhGIANgNIAmAMIAdAVQA8AtAPAMQAFAEADALIAGAQIgLAIg");
	this.shape_399.setTransform(198.625,142.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#712218").s().p("AglAmQAEgBgBgGIAigyIAGgQIA5hUIAVAcIABBGIgFAgIgPAmIgPgpIANhDIgNgFIg4BzIhOBFg");
	this.shape_400.setTransform(156.825,24.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#712218").s().p("AAaBfIhRhWIgMgHIgDgBIAIgjIBVBEIgnhzIAZgQIAEAAIAMAjIADAAIAPAtIABAEIAaBvg");
	this.shape_401.setTransform(153.6,188.675);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#E36738").s().p("AgcArQg7gNgagKQgygUgCgMQgBgNAJgUQAMgXAFgLIAKAAIgdBMIFFA2IglAJIjGAUg");
	this.shape_402.setTransform(192.1648,66.275);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#E36738").s().p("AgdAmIhyhTIATgKIBXgLQAzgGAjgHQALgCANgMIAWgTIAmgGIAMgBIAAAiIjgA3IARAOIAUATQAwAzg/AeQgGAEgIAIIgNAPIguAJg");
	this.shape_403.setTransform(23.7,75.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#80160E").s().p("AhnASIABgQIBogsIAugJIAqAAIADALIh7AnIABALICFAYIgCANIhyAFg");
	this.shape_404.setTransform(10.4,91.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#712218").s().p("AAYBWIgFgdIgEgeQACgDgCgGIgBgTIgPgxIgIABIgJAuIgGADIgHAHIgDAVIgWgNIA7ifQAXAzALBFQAHAmAJBPIABABIADAVIgNAeQgPgngFgUg");
	this.shape_405.setTransform(108.625,14.525);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#80160E").s().p("Ag1hyIAfgEIALAuQgDACACACIAMBLIAKABIAShBIAOgXIAMANIgPBtIgNAnIgnAmg");
	this.shape_406.setTransform(98.225,181.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#E36738").s().p("AAbBFQgXgEgNgjQgHgSgVgVIgmgmIhJA5QAGgVAGgKQAagtARgCQARgCAlAkIBIBJIALAGIBOhfIAWANQAKAcgNAXQgMAXgbAGQgIACgSAKQgdAOgQAAIgEAAg");
	this.shape_407.setTransform(90.7051,21.1059);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#E36738").s().p("AiHgjIAWg/IALAIIDKBvIAihIIACAZQABAPgCAJQgHAegJAKQgPARgfgKQgEgCgJADIgPAEIhQhVQgOgOgHACQgHADADAVIghgGIgDAZQgmgHAUAhIAqBEIg1AJg");
	this.shape_408.setTransform(62.5781,27.275);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#E36738").s().p("ABNAxIisAAIA0hsIAKgKIAohaIAKAbIAJArIgoAzIBBA5QADADAMgCIAeAUIAAAeIgKAZQgGAOgGAJQgGAJgNAMIgUAVg");
	this.shape_409.setTransform(49.575,152.275);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#80160E").s().p("AhBBrIAmkNIAUAdIgPDFIALABIApiAIAegpIAHAFIgmCNIgVAvQgMAbgKASQgEAGgLAGIgUAJIgRAHg");
	this.shape_410.setTransform(75.175,182.75);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#80160E").s().p("ABhB+IgHgHIgWgEIjBiqIAdgMIgdglQAAgXAMgCQAIgBATAKIBoA8IAUAHIABAKIgYAMIgnAAICEB2IgBABIAUAXIgIATIgMAAg");
	this.shape_411.setTransform(26.3,50.6705);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#ED6925").s().p("AjPLSIgGgEIgeAoQgXgRgHgLQgEgHgBgNIgDgVIgUgdIgDgDIAAgTIBGAAIBEAQIACgkQARgEAmAFQAhAAAMgfIANAAQAHAAAFgBQBYgcBRgeQACgBABgHIACgOQAaABAHgDQAQgFABgXIATgUICDgdIA0gDQAfgCASgHQAWgKAdgWIAvglQAdADAIgQQAGgMgDgbIAEgSIBshIQADgCACgHIADgNIAIgGQAnAAAJgaQAEgJABgsIAIgnQAFgXgCgOQgGgegNgpIgXhHQgBgFgIgGIgNgJIgSgoIgUgKIAAAAIgngpIgJg9QAOgigDgQQgEgXgogEIACgBIgOgKQgCAAgEgCQgCgogegKIg6gIIgygCQgDgXgQgFQgJgCgYADIABgBIgSgLIAAgBIgOgSIgbgbIgUgOIAAAAQgZggglgHQglgHgfAVIgeAEIg8gTIgNgSIAEgJIgMgCIABAAIgPghQgJgTgLgFQgJgFgUAEQgYAGgLABIgUgBIgigMQgUgGgKAEQgMAGgUABIgjACQgoAFgJApIgmAWIgUAUQgdgGgOAeQgRAlgMAEIg7AEIABABIgpAmQgegCgKAWIgJAsIgCAaQgqAQAmAYIADAeIgJAJIgdACIghAMQgTAHgLAIQgVAPgoAuQgLANgZAYQgVAWgEASQgMA5ACAqQAEA2AcAmQANASAiAQIA6AbIAJAUQgfAsA1gFIAIAIQgBAWAMAHQAKAGAVgCIADgBIADACIAOAJIADgBIADACIAyC+IgoAKIgIgrIgLgbQgDgEACgFIgWgLQgNgGgJAAQgOgBgRADIgZAEIAAhGIAQgKIgGgGIgKAQIhzAaIgGgmIAAABIALgKIgBAAIAUgUIAAAAIAUgUIAOgCIgFgIQgIgXgMAGQgGAEgMAOQgxAnhhBSQBFiHAOgbQASgfgEgYQgFgZgegVQgagRgmgbIg+gtIBzgGIACgMIiGgZIgBgLIB8gnIgDgMIgqAAIANgOQAIgJAGgDQA/gegwgzIgVgUIgRgOIDhg3IAAgiIAIgTIgTgXIAAAAIgwgqIAegeIAKAKIAAgBIAxAWIALABIAGALIADgOIgBgQQAMgkgVACQgbAIgHgFIgzgcIAigFQAUgEAMgFQARgHANgLQARgMgBgJQAAgWAOgMIAdgQIAEgBIAEAAIA2gKIAdAcQgBgQgHgQIgOgcIgfg+IACgZIAiAGIgCACIAfAVIAVAUIA4AfIAPgFQAIgCAFABQAeALAPgRQAJgKAHgfQADgKgCgOIgCgZIgBAAIBJg6QAMAOAaAYQAWAWAGASQAOAjAXAEQAQACAhgQQASgKAIgCQAagGAMgXQANgYgKgcIADgVIAHgIIAGgDIAhACIABAUIgEADIAEAGIAEAeIAFAdQAFAUAPAnIBDAzIAqg8IABAAIAhAVIgBAAIALAeIAAgBIAUAyIAZgWIAAAAIAqgCIAgBpIAKACIAHgEIAAAAIAWgJQAMgGAHgHQAbgbBhhnIAIAjIABAAIgUBeIAIBBIBFA2IAAgvIADgBIACACIBFATIgkAaIADAIIBEgWIAZANIgEAcQgEAMgMAWQgKAUACANQABAOAzATQAaAKA6AOIgoAlIAJALQAGAHADAAIApgDIAogEIATAMQACASgTAJQgHAEgeAIQgYAGgHAJQgJANAPAZIgYApQgMAVADAKQAJAcATAjQAIAOAaAtQADAEAMAAIAVAAIAAACIAIAMIAAAAIAMASIgDAAIADABIADAwIgTAAQgFABgPAHIgdgMQgFgkgZAaIgSASIgBAzIgoAAIgFgCIAEACIAMAUIAAAQIANAUIgBgBIARAPIAMAOIgEAxIgXgSQgNgKgLgGQgFgCgJAAIgRAAIAKAXQgCAbAPAIQAMAHAZgDIACgBIgXArIgegKIgBAAIg1gUIgQgCIgLgJIABABIgXgKIgdADIAPAMQAHAFAEACIDqBWIgHAQIgqgCIiegMIg7gOIgGBpIg7g4IgFAeIggAYIhDgvIgJgDIgCABIgBACIAKB1QAAAIgEAMIgHATQACg/g2gZIgbAJQgLAfAWAqQAVArAnAXIAKAbIARAiQACADAAAFIAEA5Ig2gZIgBAAIgSgUIhzh1QgMgMgUgPIgigaIgKgTIAAATIAJA8IgcgXQgRgNgNgGQgRgHgRgEQgVgEgFAGIghApQgQAZAJAbQAAAEgCAEIgIAVIABAAIgJAMIAAACIgngZIgLgOIgOAYIgpgLQgCgDADgCIgLgtIgfADIh8ClQgCADgIACIgNAEgADXJVIgBgDIgDAAgAEMHiIAOBAQABAEAUADIgIgzQgBgFgDgHIgGgMgADhJqIABAAIAAAAgAj0ptIABAAIgBAAg");
	this.shape_412.setTransform(102.625,100.525);

	var maskedShapeInstanceList = [this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382,this.shape_383,this.shape_384,this.shape_385,this.shape_386,this.shape_387,this.shape_388,this.shape_389,this.shape_390,this.shape_391,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.shape_397,this.shape_398,this.shape_399,this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,212.8,199), null);


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
	mask_2.graphics.p("EgnTAY9MAAAgx5MBOnAAAMAAAAx5g");
	mask_2.setTransform(251.55,159.7);

	// Layer_3
	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#686693").s().p("Ag2A3QgIgKAAgIQgDgiAeglQAegmAcAEQAMACANAOQANAPACAMQAFAcgkAgQgkAhgoABIgKgOg");
	this.shape_413.setTransform(252.5864,212.606);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#323252").s().p("AiJBaQB6AVBDhAQBDg+gRhxQAkAfgBBAQgBA+glAvQgmAvhDAFIgOABQg+AAg3gng");
	this.shape_414.setTransform(262.5013,222.976);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#A1582F").s().p("AgTgTIAnAnIgIAAQgjAAAEgng");
	this.shape_415.setTransform(292.225,242.3955);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#A1582F").s().p("AgOADIAWgZIAHAtg");
	this.shape_416.setTransform(286.775,236.075);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#83422C").s().p("AAZBtQgPgGgSgXIh1iDID4g9IgBBGQAAAqADAbQAEAggPASQgMAPgfAOQgPAHgNAAQgKAAgIgEg");
	this.shape_417.setTransform(239.7581,180.6056);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#4F4E75").s().p("AiOCSQg8g7gChZQgChPA8g+QBAhCBZAEQBZAEA2A4QA4A6AABZQAABWg6A7Qg5A7hUAAQhZAAg8g8gAAWCfQBFgFAmgvQAlgvABg+QABhAglgfQASBwhDA/QhFBAh4gVQA8ArBFgFgAhphqQgeAlADAjQAAAIAIAKIAKANQAogBAlggQAkgggFgdQgCgNgNgOQgNgPgMgBIgGgBQgaAAgbAjg");
	this.shape_418.setTransform(259.5968,219.8637);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#C28062").s().p("AiZARIEqhPQAEgBAFgBIgLBEIj4A8g");
	this.shape_419.setTransform(237.75,169);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#323252").s().p("Ai0ARIExhNIA1gLIACA/IkqBQg");
	this.shape_420.setTransform(234.25,163.575);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#BD652C").s().p("Ai3gCIFvgBIg1AEQghADgVAAIkEgGg");
	this.shape_421.setTransform(311.65,213.075);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#B0B1C2").s().p("AgEABIAIgDQABACgBADQgFAAgDgCg");
	this.shape_422.setTransform(293.77,294.15);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#A1582F").s().p("AgPAAQATgLAOgFQAFgCAKAGIARALIhjATIAigSg");
	this.shape_423.setTransform(272.975,248.0265);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#A1582F").s().p("AAZgYIgxAxQgCgxAzAAg");
	this.shape_424.setTransform(227.0713,262.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#A1582F").s().p("AgggEQAHgPADAAQAPAEATAKIAjAPQglgLgLAAQgagBgTAWIAOgYg");
	this.shape_425.setTransform(244.225,247.8742);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#BD652C").s().p("Ag7FVQAAgegKgMQgMgPgeAHIAAgBIgjgRQgUgJgPgEQgDgBgHAPIgOAZIAAgBIgLALIABgBIgLALIABABIgUAUIAAgCIgYAbIgbAZIABgCIgLALIABABQgzAAACAyIgBgBIgLAKIABgBIgVAVIABABIgeAeIAAgCIgOASIgKAKQgnABgZgeIgjg9IBFhGIALgUIATgKIAKgKIAVgeIATgKIBQhQQApgUAGgQQAHgQgXgdQgFg4gMgMQgMgLg1AAIiWgBQhZAAg8ABQgeABgMgLQgMgLAEgdQABgPAAgYIAAgoIGFgBIAKgJQAggvgPgoQgLgfgtgnQgagWgkgnIg9g/QgIgIgQgJIgagOIgpgxIABgTIBnhTIAUAAIBtBmIB2CEQATAXAOAGQAUAIAagLQAggOALgPQAPgSgDggQgEgcABgqIAAhGIALhEQAIhDACgiQABgZALgJQAMgJAXAHIBSAaIgBA9IACAMIAACeIgBBhQgBAZAIAOQAJAPAWAHIArANQAYADAVgWQAvgzBJhIIB8h4QBRAeATBHIjEDJQgHAHgJANIgQAVIAAgBIgVAKQgUAPADAVQABAJAOAbIAWAwIAWALQANAGAKABQDKADBlgEQAgAAALANQAJALAAAfQABAggKAMQgLAOgigBQhogEjSADQgIABgNAHIgVAMIgTAuIAAADIgJAOIACgBIgXAaIAdAVIAUATQgFAtAtgEIgBgBIABABIAAAAIAMAKIAWAbIgBgBIATAOIAfAjIABABIAQAOIAAgBIAOASIgBgBIAKALIAAgBIASAOIAJAIIAOATIgBgCIARAOIAOASIADgBIghAsQgUAagPARQgCADgOgHQgMgGgLgHIhTg+IABgBIgggfIABABIgzgyIACAAIgLgKIgBgBIgKgKIABACIg9g9IACAAIgMgKIgQgKQgKgGgEACQgPAFgUALIghATIgLAbIgKAhQgGATgBANQgDCTADB1QABAegKAMQgLANgdgEQgJgBgSADIgiAGgAiXiPQg9A+ACBOQADBZA7A8QA9A8BZAAQBTAAA6g7QA5g7AAhWQAAhag3g5Qg3g5hYgEIgJAAQhUAAg8A/g");
	this.shape_426.setTransform(260.1367,219.9469);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#A1582F").s().p("AgHACIAJgJIAGAGIgJAJg");
	this.shape_427.setTransform(216.4,253.725);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#A1582F").s().p("AgHACIAJgIIAFAEIgIAKg");
	this.shape_428.setTransform(209.4,260.75);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#A1582F").s().p("AgHAFIAOgOIABAAIgKATg");
	this.shape_429.setTransform(213.425,256.5);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#A1582F").s().p("AgJAHIAOgOIAFAFIgSAKg");
	this.shape_430.setTransform(220.15,249.75);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#A1582F").s().p("AgJAIIAOgPIAFAGIgTAJg");
	this.shape_431.setTransform(215.15,254.75);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#A1582F").s().p("AgMAKIAYgYIABABIgTAcg");
	this.shape_432.setTransform(217.9,252);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#A1582F").s().p("AgRAMIAegcIAFAEIgdAdg");
	this.shape_433.setTransform(211.375,258.775);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#A1582F").s().p("AgRANIAdgeIAGAGIgdAdg");
	this.shape_434.setTransform(207.4,262.75);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#A1582F").s().p("AgaAkIAfhIIAEgDQAXAcgHAQQgGAQgoATg");
	this.shape_435.setTransform(231.3216,237.475);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#A1582F").s().p("AgpAlIBOhOIAFAEIhPBPg");
	this.shape_436.setTransform(224.925,245.275);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#A1582F").s().p("AgEAGIAGgMIADADIgIAKg");
	this.shape_437.setTransform(332.625,257.875);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#A1582F").s().p("AgHAGIAMgRIADADIgJAUg");
	this.shape_438.setTransform(328.3,265.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#A1582F").s().p("AgJAFQACgDgBgCIASgFIgSALg");
	this.shape_439.setTransform(295.125,293.95);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#A1582F").s().p("AgFAJIAKgSIABABIgKASg");
	this.shape_440.setTransform(331.65,259.475);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#A1582F").s().p("AgGAIIALgSIACACIgJATg");
	this.shape_441.setTransform(329.425,263.375);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#A1582F").s().p("AgFAJIAKgSIABABIgJASg");
	this.shape_442.setTransform(330.525,261.425);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#A1582F").s().p("AgKALIAPgXIAGAGIgTATg");
	this.shape_443.setTransform(327.025,267.15);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#A1582F").s().p("AgMgHIAVgDQADADAFAAIABABIgjARg");
	this.shape_444.setTransform(292.4,295.275);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#A1582F").s().p("AgKATIASgoIADADIgTAog");
	this.shape_445.setTransform(333.975,255.325);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#A1582F").s().p("AgaAKIANgTIAoATg");
	this.shape_446.setTransform(226.525,295.475);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#A1582F").s().p("AgZAOIAygbQABAZgSACQgXgCgKACg");
	this.shape_447.setTransform(298.6026,291.975);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#A1582F").s().p("AgNhKIAfCVQgug+APhXg");
	this.shape_448.setTransform(179.495,236.975);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#A1582F").s().p("AhZARICzgnQhDAthBAAQgXAAgYgGg");
	this.shape_449.setTransform(278.1,299.6246);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#A1582F").s().p("AAnAbIhsgyQAggKAsAQQAtARASAbg");
	this.shape_450.setTransform(287.15,142.8077);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#A1582F").s().p("AAeBVQgIgDgBgDIg9inIBRCxg");
	this.shape_451.setTransform(185.4,253.275);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#A1582F").s().p("AggB/IA+j/IABgBIACA1QABAfgFATQgJAggSAuIgfBOg");
	this.shape_452.setTransform(338.0833,240.45);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#323252").s().p("AAEgxIBEAyIgBATIiOAdg");
	this.shape_453.setTransform(196.725,173.45);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#C28062").s().p("AhKgTICOgeIApAxIjZAyg");
	this.shape_454.setTransform(197.05,180.425);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#B0B1C2").s().p("Ah0AmIgChMIC4ACIAaACIAbAGIgFATIgEgBIggAKIABAAIizAng");
	this.shape_455.setTransform(279.2,297.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#BBA0A9").s().p("AgZAIIgQAAIg2gTIABABIgpgUIAAgJIEPABIAABOg");
	this.shape_456.setTransform(238.725,297.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#A1582F").s().p("AhUAjIB2h4IAzBYIhlBTg");
	this.shape_457.setTransform(205.675,164.975);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#A1582F").s().p("AhZgJIBHhQQAmALAcAfQAXAZATApIhQBHQgThHhQgcg");
	this.shape_458.setTransform(313.15,166.475);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#4F4E75").s().p("AhzAbQgBgUgCgNQgKg8A9AGIAdACIAVAHIAcACIBuAyIjrA9IgBgjg");
	this.shape_459.setTransform(279.0355,145.4269);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#A1582F").s().p("AiEhVQgCgDABgHIACgOIBKBgIBWhNIAGAFIAjA9QAZAdAngBQg3A7gKAMQgFAFgCALIgDARIgFACIi6jDg");
	this.shape_460.setTransform(202.7083,273.125);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#A1582F").s().p("AgIBIQgHgRgHgIQgagdgogoIhDhGIBTA+QALAIAMAGQAOAGACgCQAPgRATgaIAhgtIBVBMIAjghIACACQABAbgZARQgeAOgMAMIhYBWg");
	this.shape_461.setTransform(310.502,274.075);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#A1582F").s().p("AhMAqIABhWQANhBg+ABIAOgKQAKgGAGAAQBfgCBeACQAHAAAJAGIAOALQg8gGAKA8QACAPABATIABAiIhWgaQgYgIgLAJQgMAKgBAYQgBAhgIBDQgFABgEABg");
	this.shape_462.setTransform(259.65,150.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#323252").s().p("AirA2IABg8IAEACIDrg9IAeAAIBJAzIlVBQg");
	this.shape_463.setTransform(284.225,152.125);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#C28062").s().p("AjLALIFVhRIBCAvImXBeg");
	this.shape_464.setTransform(287.625,157.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#A1582F").s().p("ADeAvQgXgJg1ACQgvAChXgBQhcAAgpABQgeAAgsAGIhKAIIAAiiIBuACIAAAoQAAAYgBAPQgEAcAMAMQAMALAegBQA8gCBYABICWAAQA1AAAMAMQAMALAFA5IgEADQgKgugigOg");
	this.shape_465.setTransform(205.225,223.075);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#A1582F").s().p("AjpBAQANgHAIgBQDSgDBnAEQAiABALgOQAKgMgBggQAAgfgJgLQgLgNggAAQhlAEjKgDQgJgBgNgGIgWgLIAUABIEEAHQAWAAAggDIA1gEIBugEIACCWIgBABIn8AAIAVgMg");
	this.shape_466.setTransform(315.725,219.925);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#A1582F").s().p("AAFC6QADk9gBhQQgBgKgMgPQgQgQgGgIQAdgHAMAPQAKAMAAAeIAAF0IAigGQASgDAKABQAdAEALgNQAKgMgBgeQgDh0ADiTQABgNAGgTIAKghIAGHmIh+ACIgaAAgAhfEGQgMAAgTgLQgUgNgKgFICbAeIhegBg");
	this.shape_467.setTransform(251.825,275.1286);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#83422C").s().p("AjKCIQAJgNAIgIIDDjIIBQhHIA1BIQAgAsAUAeQAHALAHATIAKAhIkwBLIiFAdIAQgVg");
	this.shape_468.setTransform(313.2,184.05);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#4F4E75").s().p("AikCCIgzhYQAhgVBBgqQA7gmArgUQAggPA3gOIBcgVQA/gCgNBCIgCBVIACAWIg1ALIkxBNg");
	this.shape_469.setTransform(230.6619,152.2233);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#83422C").s().p("AiLC2IgqgOQgXgGgJgQQgIgOABgYIAChiIAAhgIGWhfIAhAWIhIBQIh7B3QhIBHgwAzQgSAUgVAAIgGAAg");
	this.shape_470.setTransform(289.1694,173.4927);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#83422C").s().p("AkICgIAIgyIAJgUIA+jGIDZgzIAaANQAPAJAJAIIA8A/QAlAoAZAVQAuAmALAfQAPApggAuIgKAKg");
	this.shape_471.setTransform(204.7894,196.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#F3C224").s().p("AgGAAIANgDIAAAAIgKAHg");
	this.shape_472.setTransform(118.475,41.85);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#F3C224").s().p("AgUB8QgVgTghApIgJhBIgugCIAAgBQAWgdgJgTQgJgUgtgKQAwgPAIgSQAIgVgpgeIA/AAIAKg6IAzAUIAZguIAkAtIAtgRIAMAvIA6AFQgWAYADAWQAEAXAgAXIgwATIAhA2Ig7ADIAAA8Ig0gfIggA8QgUgjgMgKg");
	this.shape_473.setTransform(132.2,33.625);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#C28062").s().p("AlDA0IIuiQQA7gPAeA9IlGBKIkXBDg");
	this.shape_474.setTransform(361.525,139.052);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#BBA0A9").s().p("AgDANIADgdIAEAhIgHgEg");
	this.shape_475.setTransform(158.575,232.25);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#BBA0A9").s().p("AAegoQAAAdgSAUQgNASgcAOg");
	this.shape_476.setTransform(337.9,277.125);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#BBA0A9").s().p("AAdguQgFASgEAoQgJAggnADg");
	this.shape_477.setTransform(343.925,267.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#BBA0A9").s().p("AAChGIAABGIgDBHg");
	this.shape_478.setTransform(158.975,214.175);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#BBA0A9").s().p("AioCDIBAgmQAlgXAXgTQAlgdAzgtIBXhMIAmgfIguA7QgcAigTAXQhLBSiHA8QgFACgLABg");
	this.shape_479.setTransform(317.95,294.325);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#BBA0A9").s().p("AgMEfQAWhHAKgxQA3kJhokRIgKghQAIAMATAVQAOAUAEAPQATBQAHAjQANBCADAzQAICagSCJQgGArgWA7IglBkQgCAEgHAFIgNAHIAlh2g");
	this.shape_480.setTransform(352.1458,220.975);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#BBA0A9").s().p("AgjFgQhvgkh2hJQiChShih/QhVhthEicQgLgagKglIgQhAQgBgGADgJIAGgQQAXA2ApBvQAmBhAlA8QBlCkCWBpQCUBoC/ArQE5BIEjiAQAEgBAVgDQgoAfgXAKQgjAPhfAhQgfALgVAAQglABhLAAIhwAAIgPAAQh3AAh0gmg");
	this.shape_481.setTransform(232.7375,278.4823);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#BBA0A9").s().p("AuRIqQgKgNAAgIIAPmIIgaAXIAKhcIATgJIADAvIASAKIAIgYIAvh2QAdhHAcgrQAigyA4g8QAhgjBDhEQAxgzBBgqQARgLAdgKIAxgQIBSgjQCig/DZAEQDtAEDYB3QAWANAmAdQAqAfATAMQAJAFASACIAfACIAZAJIAqArICUDRQgTAAgFAFQgIAHAIASQAEAJADANIAEAXIg/hcQgmg3gcgjQiai5jHhYQjGhYjvALQmnAUkVFUQjvEkAhGgIAGA7g");
	this.shape_482.setTransform(254.625,179.0882);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#83422C").s().p("AgCJBQiBgCjbAAIldgBQgRAAgYgKQgbgOgOgFIABjbQABh7B7AAQFJgBEJACQAaAAASgIQASgJAQgVQEXleDukeQAigpBRghQAZgLApgIIBFgOIgCAfIgUBlIgHDlIABAWIgFAdIgGAEIgFAEIn0JYIgPAQIgOARQgmA3g1AYQgxAXhDAAIgFgBg");
	this.shape_483.setTransform(83.1,250.1021);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#BD652C").s().p("AjYOoQjAgsiUhnQiWhqhlikQglg8gmhiQgphvgXg2IgKhYQghmeDvkmQEVlUGogTQDugLDGBYQDHBYCaC5QAcAiAmA3IA/BcQgBADACADQgBAGADADIAKAVIAKAhQBpERg3EJQgKAwgXBHIglB2IgDAPIg6BfQgCADABADIg8BSIgBAAIgmAfIhXBMQg0AugkAdQgYATglAXIhAAmIABAAQgVACgEACQi6BRjEAAQhtAAhwgZgABcMvQBYAWBcg+IgBABIAggLIAEAAIAkgSIATgMIgBABQAKgCAYACQASgCgBgbIBihAIgCAAIBYhWQAMgLAegQQAZgRgBgbIAUgUIAphPIAJgKIAUgpIAfhNQATgvAJggQAFgUgBgfIgCg1IgCiWIg8jmIgKghQgGgTgHgMQgUgegggrIg1hJQgUgqgXgZQgcgegngMIirh3QgSgcgtgRQgtgQggAKIgdgCIgVgHIgdgDIgPgKQgJgGgGAAQhegChgACQgGAAgJAGIgPAKIhcAVQg3AOgiAPQgrAUg6AmQhBArgiAVIh3B5IhMBjIgiBGIg9DIIgJAUIgJAyIAACiQABAEgDAEQgPBXAwA+IA9CnQACAEAHACIAMAFIgCANQgBAHACADIC7DEIAEgBIABAAIAAgBIAAABIAvAiIgBgBIAfAUIAAgBIAhAWIADgBIACACIAPAIIAjANIAAAJIgNATIA2AAIgBAAIA2ATIAQABQAKAFAUANQATALAMAAQA1ACBKgBIB9gCgAq/GoIAAgBIAAABgAq/Gog");
	this.shape_484.setTransform(259.9151,219.8234);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#B0B1C2").s().p("AspFjIgDgvIAbhOQCWkdDliUQEKirE9AKQE+AJD9C9IARAKIAwAtIgfgCQgSgBgJgGQgTgLgqggQgmgdgWgMQjYh3jtgFQjZgEiiBAIhSAiIgxARQgdAKgRALQhDAsgvAxQhDBDghAjQg4A7giAzQgcAqgdBHIgvB4IgIAYg");
	this.shape_485.setTransform(245.325,154.5225);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#686693").s().p("A5LFPQA8hqBnhBQBZg4CDggQCZglExhNQFDhPEUhAIO0jZINUjBQAMgDASgBIAfAAIAPBMIj7BAInnB2IzOEvIjXAxIjXAzQg0ANioAuQiJAlhUATQiIAdhlA1QhzA7hSBdQgfAjgoA4IhBBaQATiBBKiEg");
	this.shape_486.setTransform(251.625,108.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#B0B1C2").s().p("ABNBQQgcgYgzgTQhSgeg+gsQg0glAKhUIAKAWQAIAmAOAFQAOAGAggWQAVAMApAaQAmAXAaAKQBLAYAwAwQAxAxADA5IhGATQgKgwgigfg");
	this.shape_487.setTransform(148.0444,64.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#323252").s().p("AjEBZQAGgIAAgFQgDhLAMgOQALgQBIgTIBsgdQATgDAogCQAkgDAWgJQAggOAPANQALAJAIAfIARA4IlUBRIhPAUIANgNg");
	this.shape_488.setTransform(166.15,86.312);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#323252").s().p("AFOACQgeg8g7APIouCPIgZgJIgwgtIC5g0IChgqQBdgZBEgOQBhgUBjADQAiABAOAdQAIARAEAqIAJBrIguANg");
	this.shape_489.setTransform(360.5,134.2111);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#323252").s().p("AlZDWIAfgSQASgLAJgKIB8iVQBOhdAvg1QARgUAVgOQAWgQAXgHQA8gSBagXICXgmIgbBPIgTAJQiCARhTAoQhmAxg+BhQgaArguA2IhPBdQgHAIgNAJIgWAPg");
	this.shape_490.setTransform(132.125,203.175);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#E7CC68").s().p("AgIDlQgPgGgHgmIgKgVIhOA3IAJhiIhXAXIgLgRIA2hKIhXgmIBVguIg5hEIAVgHQAKgEAEABQAuANAJgSQAJgPgOgoQgBgEABgHIACgRIBSA5IAihZIAtBUIBLg8QAAAUgDAiQgBAbAIALQAEAHAagCIAzgDIgGAWQgDALgFAHQgDAHgLAIIgVASIBeAtIg8AeQgWAOAAAGQgBAGAGAHIANANQAKALAXAUIgHAMIgnADQgtgEgGAHQgFAHAMArQADANgIATQgggXgugjIAAA4QgZASgNAAIgHgBgAgeCKQALAKAUAjIAhg8IA0AfIAAg8IA6gDIggg2IAwgTQghgXgDgXQgDgWAWgYIg7gFIgMgvIgtARIgjgtIgaAuIgygUIgLA6Ig+AAQApAegJAVQgHASgwAOQAtALAJAUQAJATgXAdIgNAEIACAEIALgHIAvACIAJBBQAWgcARAAQAIAAAHAGg");
	this.shape_491.setTransform(133.25,32.2132);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#323252").s().p("AgiCVQg2lGghjjQgEgagNgOQgMgOgYgGIBZgXIBqFkICXINQADAIAAANIgBAVIiVA0QgojigThxg");
	this.shape_492.setTransform(446.675,77.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#C28062").s().p("AsmIxIgEjwQAAg6AggfQAfgfA6AAQFhgCDrACQAfAAAVgIQAWgKATgYQAqg4BEhUIByiKQAGgIAGgOIALgYIAWgPQAOgJAGgIIBQhdQAtg2AbgrQA9hiBogxQBSgoCDgRIgIA9IhFANQgpAIgZALQhQAhgjApQjuEekXFfQgQAVgTAIQgRAIgaAAQkIgBlKABQh7AAgBB6IgBDcg");
	this.shape_493.setTransform(81.075,245.475);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#323252").s().p("AgED9QgHgHgQgCQgPgCgNADQhCAThBgiQhDgigRhEQgOg3AlhEQAmhGA4gJQAWgEALgKQAMgLAEgVQAgilCahQIgSCKQgnDvCjDnQAKAPAWAXIAgAmQAHAIAGAPIAKAYIgNAAQilAAhlhxg");
	this.shape_494.setTransform(58.6428,182.8583);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#83422C").s().p("AhqDZQgEgFgRgwIgJgUIABAAIgWgnIiTjQIEWhDIFGhLIAGBnQgIAfgQA8QgNA1gFAmQgHBGgnApQgmAnhGAOQgiAGgyANIhTAXQgigCgPgbg");
	this.shape_495.setTransform(363.9,159);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#686693").s().p("AAtKmQgugagWhBQgFgQgYg5IABgVQAAgNgDgIIiXoNIhrlkIgVhXQgNg7AagtQAaguA5gSQA1gRAhgHQBDgOAtAaQAsAaATBBQBOENCHHZIAsCdQAaBdAVA/QAXBGgfA6QgfA7hJAOQgLACgSAFIgcAJQgaAHgYAAQgjAAgdgQg");
	this.shape_496.setTransform(469.3527,69.416);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#B0B1C2").s().p("AAmLuIhmgCQhngBhegOQhpgbhDghQhMgnhLg6QgogfgTgOQghgZgcgOIABAAQkFj9gulXIgGg3IAHiPIABhWIAThlIAagXIgPGIQAAAIAKANIAQAVIAEAdIgGAQQgDAKABAFIAQBAQAKAlALAZQBECcBVBvQBiB/CCBRQB2BKBvAkQB9AoB+gCIBvgBQBLABAlgBQAVgBAfgLQBfggAjgQQAXgKAogeIARAAQALgBAGgCQCHg8BLhTQAUgXAbgiIAug7IABAAQAcgOAOgSQARgVABgdQgBgDACgDQAogDAJggQAEgpAFgTIADgPIANgHQAHgEACgFIAmhkQAWg6AGgrQASiIgIibQgDg0gNhBQgHgjgThRQgEgPgPgTQgTgWgIgLIgKgVIgCgJQgCgDABgDIgEgWQgDgNgEgJQgIgTAIgGQAFgFATgBIAVAoIAAAAIAJAUQARAwADAFQAQAbAiACQgSAFgDANQgBAKAGASQBVDug1EWQgzETjLDbIgqAuIgCABQhlBLhGAqQhhA6haAfQh4AphPAFQgiACgtAAIgYAAg");
	this.shape_497.setTransform(260.1059,244.43);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#4E4D76").s().p("A6pOWIgKgYQgHgOgGgIIgggmQgWgYgKgOQijjoAnjwIASiKIAbgvQBNiaBqhbQB1hmChgeQA8gLBYgXICTgmIBPgUIFVhRIA5gMIM0i8IDNgxQB+geBPgSQAugKBigSQBegSAxgLQEahDI0iIQAYAGAMAOQANAOADAaQAiDiA1FHQATByAqDiIn1CtIgKhsQgEgqgIgQQgNgdgigBQhjgDhhAUQhEAOheAYIihAqIi5A1IgRgKQj9i8k+gJQk9gKkKCqQjlCUiWEeIiXAmQhZAWg9ATQgXAGgXAQQgVAPgRATQgvA2hOBeIh8CUQgJALgSAKIgfASgAZIsWQgSABgMACItUDCIu0DZQkUBAlDBPQkxBOiZAlQiDAfhZA4QhnBAg8BqQhKCEgTCCIBBhbQAog3AfgjQBShdBzg8QBlg0CIgdQBUgSCJglQCoguA0gNIDXgzIDXgyITOkvIHnh3ID7hAIgPhLIgfAAg");
	this.shape_498.setTransform(256.7322,127.625);

	var maskedShapeInstanceList = [this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.shape_433,this.shape_434,this.shape_435,this.shape_436,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.shape_442,this.shape_443,this.shape_444,this.shape_445,this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.shape_460,this.shape_461,this.shape_462,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482,this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495,this.shape_496,this.shape_497,this.shape_498];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,503.1,319.4), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
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
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AmeNIIAA6PIM9AAIAAaPg");
	mask_3.setTransform(41.5,84);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(41.5,84,1,1,0,0,0,41.5,84);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#40FF35").s().p("Ag2HgIAAu/IBtAAIAAO/g");
	this.shape_499.setTransform(41.5,84);

	var maskedShapeInstanceList = [this.instance,this.shape_499];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_499},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,83,168), null);


// stage content:
(lib.explodeAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// explostion
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(-238.9,892.9,1,1,0,0,0,106.4,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.3308,scaleY:0.3308,x:170.75,y:496.7},0).to({regX:106,regY:99.8,scaleX:1.8673,scaleY:1.8673,x:170.2,y:497.15},8).wait(10));

	// cannon
	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(443.45,998.65,0.4493,0.4493,0,0,180,251.6,159.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({regX:251.7,skewX:45,skewY:225,x:410.2,y:1030.05},0).to({x:310.5,y:789.6},15).wait(16).to({x:455.5,y:1021.55},9).wait(1));

	// laser2
	this.instance_2 = new lib.ClipGroup_3();
	this.instance_2.setTransform(405.65,966.3,0.5113,0.4102,-30,0,0,41.5,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({x:279.35,y:709.5},0).to({x:241.55,y:618.5},6).wait(18));

	// laser1
	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(279.35,709.55,0.5113,0.4102,-30,0,0,41.5,84.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off:false},0).wait(5).to({regY:84,x:217.1,y:576.5},0).to({x:215.55,y:573.65},3).wait(18));

	// fire
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.setTransform(591.55,250.3,0.7066,0.7066,0,0,0,241.5,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:242.2,y:442.1},33).wait(7).to({x:259.15,y:406.75},0).to({scaleX:0.1441,scaleY:0.128,x:259.2,y:406.7},4).wait(13));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-147.8,532.4,910,628.3000000000001);
// library properties:
lib.properties = {
	id: '88931D03DEDAE743A52B2A0F4FC9C70E',
	width: 395,
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
an.compositions['88931D03DEDAE743A52B2A0F4FC9C70E'] = {
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