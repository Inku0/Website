var metric
  , imperial;

metric = {
  mcg: {
    name: {
      singular: 'Mikrogramm'
    , plural: 'Mikrogramm'
    }
  , to_anchor: 1/1000000
  }
, mg: {
    name: {
      singular: 'Milligramm'
    , plural: 'Milligramm'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gramm'
    , plural: 'Gramm'
    }
  , to_anchor: 1
  }
, kg: {
    name: {
      singular: 'Kilogramm'
    , plural: 'Kilogramm'
    }
  , to_anchor: 1000
}
, ts: {
      name: {
          singular: 'Tsentner ts'
          , plural: 'Tsentner ts'
      }
      , to_anchor: 100000
    }
, t: {
    name: {
      singular: 'Tonn t'
    , plural: 'Tonn t'
    }
  , to_anchor: 1000000
  }
};

imperial = {
  oz: {
    name: {
      singular: 'Unts oz'
    , plural: 'Unts oz'
    }
  , to_anchor: 1/16
  }
, lb: {
    name: {
      singular: 'Nael lb'
    , plural: 'Nael lb'
    }
  , to_anchor: 1
}};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'g'
    , ratio: 1/453.592
    }
  , imperial: {
      unit: 'lb'
    , ratio: 453.592
    }
  }
};
