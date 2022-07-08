var metric
  , imperial;

metric = {
  ea: {
    name: {
      singular: 'Iga'
    , plural: 'Iga'
    }
  , to_anchor: 1
  },
  dz: {
    name: {
      singular: 'Tosin'
    , plural: 'Tosinat'
    }
  , to_anchor: 12
  }
};

module.exports = {
  metric: metric
, imperial: {}
, _anchors: {
    metric: {
      unit: 'ea'
    , ratio: 1
    }
  }
};
