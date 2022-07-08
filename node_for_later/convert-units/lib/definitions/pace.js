var metric
  , imperial;

metric = {
  'min/km': {
    name: {
      singular: 'Minuteid kilomeetri kohta'
    , plural: 'Minutit kilomeetri kohta'
    }
  , to_anchor: 0.06
  }
  ,'s/m': {
    name: {
      singular: 'Sekundeid meetri kohta'
    , plural: 'Sekundit meetri kohta'
    }
  , to_anchor: 1
  }
}

imperial = {
    'min/mi': {
      name: {
        singular: 'Minuteid miili kohta'
      , plural: 'Minutid miili kohta'
      }
    , to_anchor: 0.0113636
   }
   , 's/ft': {
      name: {
        singular: 'Sekundeid jala kohta'
      , plural: 'Sekundit jala kohta'
      }
    , to_anchor: 1
   }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 's/m'
    , ratio: 0.3048
    }
  , imperial: {
      unit: 's/ft'
    , ratio: 1/0.3048
    }
  }
};
