var power;

power = {
  W: {
    name: {
      singular: 'Vatt'
    , plural: 'Vatt'
    }
  , to_anchor: 1
  }
, mW: {
    name: {
      singular: 'Millivatt'
      , plural: 'Millivatti'
    }
    , to_anchor: .001
  }
, kW: {
    name: {
      singular: 'Kilovatt'
    , plural: 'Kilovatti'
    }
  , to_anchor: 1000
  }
, MW: {
    name: {
      singular: 'Megavatt'
    , plural: 'Megavatti'
    }
  , to_anchor: 1000000
  }
, GW: {
    name: {
      singular: 'Gigavatt'
    , plural: 'Gigavatti'
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
