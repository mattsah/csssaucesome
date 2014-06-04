Cinch = (function() {

	var self = function(document, location) {
		this.page = document;
		this.url  = location;

		var split_params = window.location.search.substring(1).split('&');

		for (var i = 0; i < split_params.length; i++) {
			var param_parts = split_params[i].split('=');
			var param_name  = decodeURIComponent(param_parts[0]);
			var param_value = decodeURIComponent(param_parts[1]);

			this.params[param_name] = param_value;
		}
	};

	self.prototype = {

		/**
		 *
		 */
		"page" : {},


		/**
		 *
		 */
		"params" : {},


		/**
		 *
		 */
		"url"  : {},


		/**
		 *
		 */
		"mods" : {},


		/**
		 *
		 */
		"register" : function(name, component) {
			this.mods[name] = component;
		},


		/**
		 *
		 */
		"title" : function(title) {
			if (title == undefined) {
				return this.page.title != undefined
					? this.page.title
					: null;
			}

			this.page.title = title;
		}

	};

	return self;
})();