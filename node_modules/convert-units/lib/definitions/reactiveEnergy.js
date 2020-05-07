var reactiveEnergy;

reactiveEnergy = {
  VARh: {
    name: {
      singular: 'Volt-Amper Reaktiivne Tund'
    , plural: 'Volt-Amprit Reaktiivne Tund'
    }
  , to_anchor: 1
  }
, mVARh: {
    name: {
      singular: 'Millivolt-Amper Reaktiivne Tund'
      , plural: 'Millivolt-Amprit Reaktiivne Tund'
    }
    , to_anchor: .001
  }
, kVARh: {
    name: {
      singular: 'Kilovolt-Amper Reaktiivne Tund'
    , plural: 'Kilovolt-Amprit Reaktiivne Tund'
    }
  , to_anchor: 1000
  }
, MVARh: {
    name: {
      singular: 'Megavolt-Amper Reaktiivne Tund'
    , plural: 'Megavolt-Amprit Reaktiivne Tund'
    }
  , to_anchor: 1000000
  }
, GVARh: {
    name: {
      singular: 'Gigavolt-Amper Reaktiivne Tund'
    , plural: 'Gigavolt-Amprit Reaktiivne Tund'
    }
  , to_anchor: 1000000000
  }
};

module.exports = {
  metric: reactiveEnergy
, _anchors: {
    metric: {
      unit: 'VARh'
    , ratio: 1
    }
  }
};
