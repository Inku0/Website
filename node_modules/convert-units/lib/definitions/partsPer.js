var metric
  , imperial;

metric = {
  ppm: {
    name: {
      singular: 'Osa millionis'
      , plural: 'Osa millionis'
    }
    , to_anchor: 1
  }
  , ppb: {
    name: {
      singular: 'Osa miljardis'
      , plural: 'Osa miljardis'
    }
    , to_anchor: .001
  }
  , ppt: {
    name: {
      singular: 'Osa trillionis'
      , plural: 'Osa trillionis'
    }
    , to_anchor: .000001
  }
  , ppq: {
    name: {
      singular: 'Osa kvadriljonis'
      , plural: 'Osa kvadriljonis'
    }
    , to_anchor: .000000001
  }
};

module.exports = {
  metric: metric
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'ppm'
      , ratio: .000001
    }
  }
};
