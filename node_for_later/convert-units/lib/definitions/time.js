var time;
var daysInYear = 365.25;

time = {
  ns: {
    name: {
      singular: 'NanoSekund'
    , plural: 'NanoSekundit'
    }
  , to_anchor: 1/1000000000
  }
, mu: {
    name: {
      singular: 'MicroSekund'
    , plural: 'MicroSekundit'
    }
  , to_anchor: 1/1000000
  }
, ms: {
    name: {
      singular: 'MilliSekund'
    , plural: 'MilliSekundit'
    }
  , to_anchor: 1/1000
  }
, s: {
    name: {
      singular: 'Sekund'
    , plural: 'Sekundit'
    }
  , to_anchor: 1
  }
, min: {
    name: {
      singular: 'Minut'
    , plural: 'Minutit'
    }
  , to_anchor: 60
  }
, h: {
    name: {
      singular: 'Tund'
    , plural: 'Tundi'
    }
  , to_anchor: 60 * 60
  }
, d: {
    name: {
      singular: 'Päev'
    , plural: 'Päeva'
    }
  , to_anchor: 60 * 60 * 24
  }
, week: {
    name: {
      singular: 'Nädal'
    , plural: 'Nädalat'
    }
  , to_anchor: 60 * 60 * 24 * 7
  }
, month: {
    name: {
      singular: 'Kuu'
    , plural: 'Kuud'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear / 12
  }
, year: {
    name: {
      singular: 'Aasta'
    , plural: 'Aastat'
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
