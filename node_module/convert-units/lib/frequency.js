var frequency;

frequency = {
  mHz: {
    name: {
      singular: 'Millihertz mHz'
    , plural: 'Millihertz mHz'
    }
  , to_anchor: 1/1000
  }
, Hz: {
    name: {
      singular: 'Hertz Hz'
    , plural: 'Hertz Hz'
    }
  , to_anchor: 1
  }
, kHz: {
    name: {
      singular: 'Kilohertz kHz'
    , plural: 'Kilohertz kHz'
    }
  , to_anchor: 1000
  }
, MHz: {
    name: {
      singular: 'Megahertz MHz'
    , plural: 'Megahertz MHz'
    }
  , to_anchor: 1000 * 1000
  }
, GHz: {
    name: {
      singular: 'Gigahertz GHz'
    , plural: 'Gigahertz GHz'
    }
  , to_anchor: 1000 * 1000 * 1000
  }
, THz: {
    name: {
      singular: 'Terahertz THz'
    , plural: 'Terahertz THz'
    }
  , to_anchor: 1000 * 1000 * 1000 * 1000
  }
, rpm: {
    name: {
      singular: 'Pööret minutis rpm'
    , plural: 'Pööret minutis rpm'
    }
  , to_anchor: 1/60
  }
, "deg/s": {
    name: {
      singular: 'Kraadi sekundis deg/s'
    , plural: 'Kraadi sekundis deg/s'
    }
  , to_anchor: 1/360
  }
, "rad/s": {
    name: {
      singular: 'Radiaani sekundis rad/s'
    , plural: 'Radiaani sekundis rad/s'
    }
  , to_anchor: 1/(Math.PI * 2)
  }
};


module.exports = {
  metric: frequency
, _anchors: {
    frequency: {
      unit: 'hz'
    , ratio: 1
    }
  }
};
