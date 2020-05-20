var current;

current = {
  A: {
    name: {
      singular: 'Amper A'
    , plural: 'Amper '
    }
  , to_anchor: 1
  }
, mA: {
    name: {
      singular: 'Milliamper mA'
      , plural: 'Milliamper mA'
    }
    , to_anchor: .001
  }
, kA: {
    name: {
      singular: 'Kiloamper kA'
    , plural: 'Kiloamper kA'
    }
  , to_anchor: 1000
  }
};

module.exports = {
  metric: current
, _anchors: {
    metric: {
      unit: 'A'
    , ratio: 1
    }
  }
};
