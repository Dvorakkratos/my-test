const { combineRgb } = require('@companion-module/base')

module.exports = async function(self) {
	self.setFeedbackDefinitions({
		ChannelState: {
			name: 'Example Feedback',
			type: 'boolean',
			label: 'Channel State',
			defaultStyle: {
				bgcolor: combineRgb(255, 255, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'num',
					type: 'number',
					label: 'Test',
					default: 6,
					min: 0,
					max: 10,
				},
			],
			callback: (feedback) => {
				if (feedback.options.num > 5) {
					return true
				} else {
					return false
				}
			},
		},

		test: {
			name: 'TEST FEEDBACK',
			type: 'boolean',
			label: 'test label',

			defaultStyle: {
				bgcolor: combineRgb(100, 0, 255),
				color: combineRgb(0, 0, 0),
				text: "TesT",
				size: "auto",
				show_topbar: false,
			},

			options: [
				{
					id: 'value',
					type: 'number',
					label: 'myVar',
					default: 9,
					min: 0,
					max: 20,
				},
			],
			callback: (feedback) => {
				if (feedback.options.value % 2) {
					self.setVariableValues([{ variableId: 'variable1' }]);
					return true;
				} else {
					return false;
				}
			},
		},
	})
}
