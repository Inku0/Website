var metric,
imperial;

metric = {
  'lx': {
    name: {
      singular: 'Luks lx',
      plural: 'Luks lx'
    },
    to_anchor: 1
  }
};

imperial = {
  'ft-cd': {
    name: {
      singular: 'Jalg-küünal ft-cd',
      plural: 'Jalg-küünal ft-cd'
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
