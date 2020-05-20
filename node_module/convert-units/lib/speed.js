var metric
  , imperial;

metric = {
  'm/s': {
    name: {
      singular: 'Meetrit sekundis m/s'
    , plural: 'Meetrit sekundis m/s'
    }
  , to_anchor: 3.6
  }
, 'km/h': {
    name: {
      singular: 'Kilomeetrit tunnis km/h'
    , plural: 'Kilomeetrit tunnis km/h'
    }
  , to_anchor: 1
  }
}

  imperial = {
    'mi/h': {
      name: {
        singular: 'Miili tunnis mi/h'
      , plural: 'Miili tunnis mi/h'
      }
    , to_anchor: 1
    }
  , knot: {
      name: {
        singular: 'Sõlm knot'
      , plural: 'Sõlm knot'
      }
    , to_anchor: 1.150779
    }
  , 'ft/s': {
      name: {
        singular: 'Jalga sekundis ft/s'
      , plural: 'Jalga sekundis ft/s'
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
      unit: 'mi/h'
    , ratio: 1.609344
    }
  }
};
