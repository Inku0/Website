var metric
  , imperial;

metric = {
  ea: {
    name: {
      singular: 'Iga ea'
    , plural: 'Iga ea'
    }
  , to_anchor: 1
  },
  dz: {
    name: {
      singular: 'Tosin dz'
    , plural: 'Tosin dz'
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
