var metric
  , imperial;

metric = {
  'm/s': {
    name: {
      singular: 'Meetrit sekundis'
    , plural: 'Meetrit sekundis'
    }
  , to_anchor: 3.6
  }
, 'km/h': {
    name: {
      singular: 'Kilomeetrit tunnis'
    , plural: 'Kilomeetrit tunnis'
    }
  , to_anchor: 1
  }
}

  imperial = {
    'm/h': {
      name: {
        singular: 'Miili tunnis'
      , plural: 'Miili tunnis'
      }
    , to_anchor: 1
    }
  , knot: {
      name: {
        singular: 'Meremiili'
      , plural: 'Meremiili'
      }
    , to_anchor: 1.150779
    }
  , 'ft/s': {
      name: {
        singular: 'Jalga sekundis'
      , plural: 'Jalga sekundis'
      }
    , to_anchor: 0.681818
      }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'km/h'
    , ratio: 1/1.609344
    }
  , imperial: {
      unit: 'm/h'
    , ratio: 1.609344
    }
  }
};
