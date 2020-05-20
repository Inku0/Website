var metric,
imperial;

metric = {
  mm: {
    name: {
      singular: 'Millimeeter mm',
      plural: 'Millimeeter mm'
    },
    to_anchor: 1/1000
  },
  cm: {
    name: {
      singular: 'Sentimeeter cm',
      plural: 'Sentimeeter cm'
    },
    to_anchor: 1/100
  },
  m: {
    name: {
      singular: 'Meeter m',
      plural: 'Meeter m'
    },
    to_anchor: 1
  },
  km: {
    name: {
      singular: 'Kilomeeter km',
      plural: 'Kilomeeter km'
    },
    to_anchor: 1000
  }
};

imperial = {
  'in': {
    name: {
      singular: 'Toll in',
      plural: 'Toll in'
    },
    to_anchor: 1/12
  },
  yd: {
    name: {
      singular: 'Jard yd',
      plural: 'Jard yd'
    },
    to_anchor: 3
  },
  ft: {
    name: {
      singular: 'Jalg ft',
      plural: 'Jalg ft'
    },
    to_anchor: 1
  },
  mi: {
    name: {
      singular: 'Miil mi',
      plural: 'Miil mi'
    },
    to_anchor: 5280
  }
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'm',
      ratio: 3.28084
    },
    imperial: {
      unit: 'ft',
      ratio: 1/3.28084
    }
  }
};
