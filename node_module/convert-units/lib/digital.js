var bits
  , bytes;

bits = {
  b: {
    name: {
      singular: 'Bit b'
    , plural: 'Bit b'
    }
  , to_anchor: 1
  }
, Kb: {
    name: {
      singular: 'Kilobit Kb'
    , plural: 'Kilobit Kb'
    }
  , to_anchor: 1024
  }
, Mb: {
    name: {
      singular: 'Megabit Mb'
    , plural: 'Megabit Mb'
    }
  , to_anchor: 1048576
  }
, Gb: {
    name: {
      singular: 'Gigabit Gb'
    , plural: 'Gigabit Gb'
    }
  , to_anchor: 1073741824
  }
, Tb: {
    name: {
      singular: 'Terabit Tb'
    , plural: 'Terabit Tb'
    }
  , to_anchor: 1099511627776
  }
};

bytes = {
  B: {
    name: {
      singular: 'Bait B'
    , plural: 'Bait B'
    }
  , to_anchor: 1
  }
, KB: {
    name: {
      singular: 'Kilobait KB'
    , plural: 'Kilobait KB'
    }
  , to_anchor: 1024
  }
, MB: {
    name: {
      singular: 'Megabait MB'
    , plural: 'Megabait MB'
    }
  , to_anchor: 1048576
  }
, GB: {
    name: {
      singular: 'Gigabait GB'
    , plural: 'Gigabait GB'
    }
  , to_anchor: 1073741824
  }
, TB: {
    name: {
      singular: 'Terabait TB'
    , plural: 'Terabait TB'
    }
  , to_anchor: 1099511627776
  }
};

module.exports = {
  bits: bits
, bytes: bytes
, _anchors: {
    bits: {
      unit: 'b'
    , ratio: 1/8
    }
  , bytes: {
      unit: 'B'
    , ratio: 8
    }
  }
};
