var current;

current = {
  A: {
    name: {
      singular: 'Amper'
    , plural: 'Amprit'
    }
  , to_anchor: 1
  }
, mA: {
    name: {
      singular: 'Milliamper'
      , plural: 'Milliamprit'
    }
    , to_anchor: .001
  }
, kA: {
    name: {
      singular: 'Kiloamper'
    , plural: 'Kiloamprit'
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
