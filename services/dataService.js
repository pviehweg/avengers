app.service('dataService', [function() {

	var data = [
		{
			name: 'Paige',
			description: 'BadAssery is not optional',
			img: null
		},
		{
			name: 'Tye',
			description: 'Strengh of many men',
			img: null
		},
		{
			name: 'Sheisa',
			description: 'So fluffy she could die',
			img: null
		},
		{
			name: 'Catherine',
			description: 'BFF for life',
			img: null
		},
	];

	this.heroSender = function() {
		return data;
	};

}]) //end of data service