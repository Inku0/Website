var voltage;

voltage = {
  V: {
    name: {
      singular: 'Volt V'
    , plural: 'Volt V'
    }
  , to_anchor: 1
  }
, mV: {
    name: {
      singular: 'Millivolt mV'
      , plural: 'Millivolt mV'
    }
    , to_anchor: .001
  }
, kV: {
    name: {
      singular: 'Kilovolt kV'
    , plural: 'Kilovolt kV'
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
