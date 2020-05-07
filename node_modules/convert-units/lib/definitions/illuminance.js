var metric,
imperial;

metric = {
  'lx': {
    name: {
      singular: 'Luks',
      plural: 'Lukse'
    },
    to_anchor: 1
  }
};

imperial = {
  'ft-cd': {
    name: {
      singular: 'Jalg-küünal',
      plural: 'Jalg-küünalt'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'lx',
      ratio: 1/10.76391
    },
    imperial: {
      unit: 'ft-cd',
	  ratio: 10.76391
    }
  }
};
