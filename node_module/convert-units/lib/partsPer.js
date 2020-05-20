var metric
  , imperial;

metric = {
  ppm: {
    name: {
      singular: 'Osa millionis ppm'
      , plural: 'Osa millionis ppm'
    }
    , to_anchor: 1
  }
  , ppb: {
    name: {
      singular: 'Osa miljardis ppb'
      , plural: 'Osa miljardis ppb'
    }
    , to_anchor: .001
  }
  , ppt: {
    name: {
      singular: 'Osa trillionis ppt'
      , plural: 'Osa trillionis ppt'
    }
    , to_anchor: .000001
  }
  , ppq: {
    name: {
      singular: 'Osa kvadriljonis ppq'
      , plural: 'Osa kvadriljonis ppq'
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
