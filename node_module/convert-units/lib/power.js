var power;

power = {
  W: {
    name: {
      singular: 'Vatt W'
    , plural: 'Vatt W'
    }
  , to_anchor: 1
  }
, mW: {
    name: {
      singular: 'Millivatt mW'
      , plural: 'Millivatt mW'
    }
    , to_anchor: .001
  }
, kW: {
    name: {
      singular: 'Kilovatt kW'
    , plural: 'Kilovatt kW'
    }
  , to_anchor: 1000
  }
, MW: {
    name: {
      singular: 'Megavatt MW'
    , plural: 'Megavatt MW'
    }
  , to_anchor: 1000000
  }
, GW: {
    name: {
      singular: 'Gigavatt GW'
    , plural: 'Gigavatt GW'
    }
  , to_anchor: 1000000000
  }
};

module.exports = {
  metric: power
, _anchors: {
    metric: {
      unit: 'W'
    , ratio: 1
    }
  }
};
