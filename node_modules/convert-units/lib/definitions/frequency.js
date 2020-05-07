var frequency;

frequency = {
  mHz: {
    name: {
      singular: 'Millihertz'
    , plural: 'Millihertz'
    }
  , to_anchor: 1/1000
  }
, Hz: {
    name: {
      singular: 'Hertz'
    , plural: 'Hertz'
    }
  , to_anchor: 1
  }
, kHz: {
    name: {
      singular: 'Kilohertz'
    , plural: 'Kilohertz'
    }
  , to_anchor: 1000
  }
, MHz: {
    name: {
      singular: 'Megahertz'
    , plural: 'Megahertz'
    }
  , to_anchor: 1000 * 1000
  }
, GHz: {
    name: {
      singular: 'Gigahertz'
    , plural: 'Gigahertz'
    }
  , to_anchor: 1000 * 1000 * 1000
  }
, THz: {
    name: {
      singular: 'Terahertz'
    , plural: 'Terahertz'
    }
  , to_anchor: 1000 * 1000 * 1000 * 1000
  }
, rpm: {
    name: {
      singular: 'Pöörded minutis'
    , plural: 'Pöördeid minutis'
    }
  , to_anchor: 1/60
  }
, "deg/s": {
    name: {
      singular: 'Kraade sekundis'
    , plural: 'Kraadi sekundis'
    }
  , to_anchor: 1/360
  }
, "rad/s": {
    name: {
      singular: 'Radiaane sekundis'
    , plural: 'Radiaani sekundis'
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
