var metric
  , imperial;

metric = {
  C: {
    name: {
      singular: 'Kraad Celsius\'e järgi'
    , plural: 'Kraad Celsius\'e järgi'
    }
  , to_anchor: 1
  , anchor_shift: 0
  },
  K: {
    name: {
      singular: 'Kraad Kelvin\'i järgi'
    , plural: 'Kraad Kelvini\'i järgi'
    }
  , to_anchor: 1
  , anchor_shift: 273.15
  }
};

imperial = {
  F: {
    name: {
      singular: 'Kraad Fahrenheit\'i järgi'
    , plural: 'Kraad Fahrenheit\'i järgi'
    }
  , to_anchor: 1
  },
  R: {
    name: {
      singular: 'Kraad Rankine\'i järgi'
    , plural: 'Kraad Rankine\'i järgi'
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
      unit: 'C'
    , transform: function (C) { return C / (5/9) + 32 }
    }
  , imperial: {
      unit: 'F'
    , transform: function (F) { return (F - 32) * (5/9) }
    }
  }
};
