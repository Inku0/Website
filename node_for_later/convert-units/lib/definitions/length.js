var metric,
imperial;

metric = {
  mm: {
    name: {
      singular: 'Millimeeter',
      plural: 'Millimeetrit'
    },
    to_anchor: 1/1000
  },
  cm: {
    name: {
      singular: 'Sentimeeter',
      plural: 'Sentimeetrit'
    },
    to_anchor: 1/100
  },
  m: {
    name: {
      singular: 'Meeter',
      plural: 'Meetrit'
    },
    to_anchor: 1
  },
  km: {
    name: {
      singular: 'Kilomeeter',
      plural: 'Kilomeetrit'
    },
    to_anchor: 1000
  }
};

imperial = {
  'in': {
    name: {
      singular: 'Toll',
      plural: 'Tolli'
    },
    to_anchor: 1/12
  },
  yd: {
    name: {
      singular: 'Jard',
      plural: 'Jardi'
    },
    to_anchor: 3
  },
  ft: {
    name: {
      singular: 'Jalg',
      plural: 'Jalga'
    },
    to_anchor: 1
  },
  mi: {
    name: {
      singular: 'Miil',
      plural: 'Miili'
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
