var energy;

energy = {
  Wh: {
    name: {
      singular: 'Vatt-tund Wh'
    , plural: 'Vatt-tund Wh'
    }
  , to_anchor: 3600
  }
, mWh: {
    name: {
      singular: 'Millivatt-tund mWh'
      , plural: 'Millivatt-tund mWh'
    }
    , to_anchor: 3.6
  }
, kWh: {
    name: {
      singular: 'Kilovatt-tund kWh'
    , plural: 'Kilovatt-tund kWh'
    }
  , to_anchor: 3600000
  }
, MWh: {
    name: {
      singular: 'Megavatt-tund MWh'
    , plural: 'Megavatt-tund MWh'
    }
  , to_anchor: 3600000000
  }
, GWh: {
    name: {
      singular: 'Gigavatt-tund GWh '
    , plural: 'Gigavatt-tund GWh'
    }
  , to_anchor: 3600000000000
  }
, J: {
    name: {
      singular: 'Džaul J'
    , plural: 'Džaul J'
    }
  , to_anchor: 1
  }
, kJ: {
    name: {
      singular: 'Kilodžaul kJ'
    , plural: 'Kilodžaul kJ'
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
