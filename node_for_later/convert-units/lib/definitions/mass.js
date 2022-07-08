var metric
  , imperial;

metric = {
  mcg: {
    name: {
      singular: 'Mikrogramm'
    , plural: 'Mikrogrammi'
    }
  , to_anchor: 1/1000000
  }
, mg: {
    name: {
      singular: 'Milligramm'
    , plural: 'Milligrammi'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gramm'
    , plural: 'Grammi'
    }
  , to_anchor: 1
  }
, kg: {
    name: {
      singular: 'Kilogramm'
    , plural: 'Kilogrammi'
    }
  , to_anchor: 1000
}
, t: {
    name: {
      singular: 'Tonn'
    , plural: 'Tonni'
    }
  , to_anchor: 1000000
  }
};

imperial = {
  oz: {
    name: {
      singular: 'Unts'
    , plural: 'Untsi'
    }
  , to_anchor: 1/16
  }
, lb: {
    name: {
      singular: 'Nael (Mass)'
    , plural: 'Naela (Mass)'
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
