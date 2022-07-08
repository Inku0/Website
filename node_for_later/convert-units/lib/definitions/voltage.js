var voltage;

voltage = {
  V: {
    name: {
      singular: 'Volt'
    , plural: 'Volt'
    }
  , to_anchor: 1
  }
, mV: {
    name: {
      singular: 'Millivolt'
      , plural: 'Millivolt'
    }
    , to_anchor: .001
  }
, kV: {
    name: {
      singular: 'Kilovolt'
    , plural: 'Kilovolt'
    }
  , to_anchor: 1000
  }
};

module.exports = {
  metric: voltage
, _anchors: {
    metric: {
      unit: 'V'
    , ratio: 1
    }
  }
};
