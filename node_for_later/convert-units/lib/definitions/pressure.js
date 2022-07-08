var metric
  , imperial;

metric = {
  Pa: {
    name: {
      singular: 'Paskal'
    , plural: 'Paskalli'
    }
  , to_anchor: 1/1000
  }
, kPa: {
    name: {
      singular: 'Kilopaskal'
    , plural: 'Kilopaskalli'
    }
  , to_anchor: 1
  }
, MPa: {
    name: {
      singular: 'Megapaskal'
    , plural: 'Megapaskalli'
    }
  , to_anchor: 1000
  }
, hPa: {
    name: {
      singular: 'Hectopaskal'
    , plural: 'Hectopaskalli'
    }
  , to_anchor: 1/10
  }
, bar: {
    name: {
      singular: 'Baar'
    , plural: 'Baari'
    }
  , to_anchor: 100
  }
, torr: {
    name: {
      singular: 'Millimeeter elavhõbedasammast'
    , plural: 'Millimeetrit elavhõbedasammast'
    }
  , to_anchor: 101325/760000
  }
};

imperial = {
  psi: {
    name: {
      singular: 'Naela ruuttolli kohta'
    , plural: 'Naela ruuttolli kohta'
    }
  , to_anchor: 1/1000
  }
, ksi: {
    name: {
      singular: 'Jõukilogrammi ruuttolli kohta'
    , plural: 'Jõukilogrammi ruuttolli kohta'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'kPa'
    , ratio: 0.00014503768078
    }
  , imperial: {
      unit: 'psi'
    , ratio: 1/0.00014503768078
    }
  }
};
