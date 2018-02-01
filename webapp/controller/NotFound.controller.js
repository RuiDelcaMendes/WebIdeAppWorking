sap.ui.define([
		"carhibernate/CarHibenateOlingo2/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("carhibernate.CarHibenateOlingo2.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);