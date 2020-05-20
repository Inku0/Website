var metric
  , imperial;

metric = {
  Pa: {
    name: {
      singular: 'Paskal Pa'
    , plural: 'Paskal Pa'
    }
  , to_anchor: 1/1000
  }
, kPa: {
    name: {
      singular: 'Kilopaskal kPa'
    , plural: 'Kilopaskal kPa'
    }
  , to_anchor: 1
  }
, MPa: {
    name: {
      singular: 'Megapaskal MPa'
    , plural: 'Megapaskal MPa'
    }
  , to_anchor: 1000
  }
, hPa: {
    name: {
      singular: 'Hektopaskal hPa'
    , plural: 'Hektopaskal hPa'
    }
  , to_anchor: 1/10
  }
, bar: {
    name: {
      singular: 'Baar bar'
    , plural: 'Baar bar'
    }
  , to_anchor: 100
  }
, torr: {
    name: {
      singular: 'Millimeeter elavhõbedasammast torr'
    , plural: 'Millimeeter elavhõbedasammast torr'
    }
  , to_anchor: 101325/760000
  }
};

imperial = {
  psi: {
    name: {
      singular: 'Naela ruuttolli kohta psi'
    , plural: 'Naela ruuttolli kohta psi'
    }
  , to_anchor: 1/1000
  }
, ksi: {
    name: {
      singular: 'Jõukilogrammi ruuttolli kohta ksi'
    , plural: 'Jõukilogrammi ruuttolli kohta ksi'
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
