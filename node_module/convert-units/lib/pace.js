var metric
  , imperial;

metric = {
  'min/km': {
    name: {
      singular: 'Minutit kilomeetris min/km'
    , plural: 'Minutit kilomeetris min/km'
    }
  , to_anchor: 0.06
  }
  ,'s/m': {
    name: {
      singular: 'Sekundit meetris s/m'
    , plural: 'Sekundit meetris s/m'
    }
  , to_anchor: 1
  }
}

imperial = {
    'min/mi': {
      name: {
        singular: 'Minutit miilis min/mi'
      , plural: 'Minutit miilis min/mi '
      }
    , to_anchor: 0.0113636
   }
   , 's/ft': {
      name: {
        singular: 'Sekundit jalas s/ft'
      , plural: 'Sekundit jalas s/ft'
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
