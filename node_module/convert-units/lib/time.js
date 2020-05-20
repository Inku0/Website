var time;
var daysInYear = 365.25;

time = {
  ns: {
    name: {
      singular: 'NanoSekund ns'
    , plural: 'NanoSekundit ns'
    }
  , to_anchor: 1/1000000000
  }
, μs: {
    name: {
      singular: 'MikroSekund μs'
    , plural: 'MikroSekund μs'
    }
  , to_anchor: 1/1000000
  }
, ms: {
    name: {
      singular: 'MilliSekund ms'
    , plural: 'MilliSekund ms'
    }
  , to_anchor: 1/1000
  }
, s: {
    name: {
      singular: 'Sekund s'
    , plural: 'Sekund s'
    }
  , to_anchor: 1
  }
, min: {
    name: {
      singular: 'Minut min'
    , plural: 'Minut min'
    }
  , to_anchor: 60
  }
, h: {
    name: {
      singular: 'Tund h'
    , plural: 'Tund h'
    }
  , to_anchor: 60 * 60
  }
, d: {
    name: {
      singular: 'Päev'
    , plural: 'Päev'
    }
  , to_anchor: 60 * 60 * 24
  }
, week: {
    name: {
      singular: 'Nädal'
    , plural: 'Nädal'
    }
  , to_anchor: 60 * 60 * 24 * 7
  }
, kuu: {
    name: {
      singular: 'Kuu'
    , plural: 'Kuu'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear / 12
  }
, aasta: {
    name: {
      singular: 'Aasta'
    , plural: 'Aasta'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear
  }
};


module.exports = {
  metric: time
, _anchors: {
    metric: {
      unit: 's'
    , ratio: 1
    }
  }
};
