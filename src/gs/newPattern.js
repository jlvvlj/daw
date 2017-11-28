"use strict";

gs.newPattern = function() {
	var keysId = common.smallId();

	gs.pushCompositionChange( {
		keys: { [ keysId ]: {} },
		patterns: { [ common.smallId() ]: {
			name: gs.namePattern( "pat" ),
			type: "keys",
			keys: keysId,
			synth: gs.currCmp.synthOpened,
			duration: gs.currCmp.beatsPerMeasure
		} }
	} );
};
