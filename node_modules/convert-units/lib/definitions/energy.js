var energy;

energy = {
  Wh: {
    name: {
      singular: 'Vatt-tund'
    , plural: 'Vatt-tundi'
    }
  , to_anchor: 3600
  }
, mWh: {
    name: {
      singular: 'Millivatt-tund'
      , plural: 'Millivatt-tundi'
    }
    , to_anchor: 3.6
  }
, kWh: {
    name: {
      singular: 'Kilovatt-tund'
    , plural: 'Kilovatt-tundi'
    }
  , to_anchor: 3600000
  }
, MWh: {
    name: {
      singular: 'Megavatt-tund'
    , plural: 'Megavatt-tundi'
    }
  , to_anchor: 3600000000
  }
, GWh: {
    name: {
      singular: 'Gigavatt-tundi'
    , plural: 'Gigavatt-tundi'
    }
  , to_anchor: 3600000000000
  }
, J: {
    name: {
      singular: 'Džaul'
    , plural: 'Džauli'
    }
  , to_anchor: 1
  }
, kJ: {
    name: {
      singular: 'Kilodžaul'
    , plural: 'Kilodžauli'
    }
  , to_anchor: 1000
  }
};

module.exports = {
  metric: energy
, _anchors: {
    metric: {
      unit: 'J'
    , ratio: 1
    }
  }
};
