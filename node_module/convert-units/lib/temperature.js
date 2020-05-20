var metric
  , imperial;

metric = {
  '°C': {
    name: {
      singular: 'Kraad Celsius\'e järgi °C'
    , plural: 'Kraad Celsius\'e järgi °C'
    }
  , to_anchor: 1
  , anchor_shift: 0
  },
  K: {
    name: {
      singular: 'Kraad Kelvin\'i järgi K'
    , plural: 'Kraad Kelvini\'i järgi K'
    }
  , to_anchor: 1
  , anchor_shift: 273.15
  }
};

imperial = {
  '°F': {
    name: {
      singular: 'Kraad Fahrenheit\'i järgi °F'
    , plural: 'Kraad Fahrenheit\'i järgi °F'
    }
  , to_anchor: 1
  },
  '°R': {
    name: {
      singular: 'Kraad Rankine\'i järgi °R'
    , plural: 'Kraad Rankine\'i järgi °R'
    }
  , to_anchor: 1
  , anchor_shift: 459.67
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: '°C'
    , transform: function (C) { return C / (5/9) + 32 }
    }
  , imperial: {
      unit: '°F'
    , transform: function (F) { return (F - 32) * (5/9) }
    }
  }
};
