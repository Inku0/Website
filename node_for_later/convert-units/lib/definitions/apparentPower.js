var apparentPower;

apparentPower = {
  VA: {
    name: {
      singular: 'Volt-Amper'
    , plural: 'Volt-Amprit'
    }
  , to_anchor: 1
  }
, mVA: {
    name: {
      singular: 'Millivolt-Amper'
      , plural: 'Millivolt-Amprit'
    }
    , to_anchor: .001
  }
, kVA: {
    name: {
      singular: 'Kilovolt-Amper'
    , plural: 'Kilovolt-Amprit'
    }
  , to_anchor: 1000
  }
, MVA: {
    name: {
      singular: 'Megavolt-Amper'
    , plural: 'Megavolt-Amprit'
    }
  , to_anchor: 1000000
  }
, GVA: {
    name: {
      singular: 'Gigavolt-Amper'
    , plural: 'Gigavolt-Amprit'
    }
  , to_anchor: 1000000000
  }
};

module.exports = {
  metric: apparentPower
, _anchors: {
    metric: {
      unit: 'VA'
    , ratio: 1
    }
  }
};
