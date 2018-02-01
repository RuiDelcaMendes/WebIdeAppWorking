/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"carhibernate/CarHibenateOlingo2/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"carhibernate/CarHibenateOlingo2/test/integration/pages/Worklist",
	"carhibernate/CarHibenateOlingo2/test/integration/pages/Object",
	"carhibernate/CarHibenateOlingo2/test/integration/pages/NotFound",
	"carhibernate/CarHibenateOlingo2/test/integration/pages/Browser",
	"carhibernate/CarHibenateOlingo2/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "carhibernate.CarHibenateOlingo2.view."
	});

	sap.ui.require([
		"carhibernate/CarHibenateOlingo2/test/integration/WorklistJourney",
		"carhibernate/CarHibenateOlingo2/test/integration/ObjectJourney",
		"carhibernate/CarHibenateOlingo2/test/integration/NavigationJourney",
		"carhibernate/CarHibenateOlingo2/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});