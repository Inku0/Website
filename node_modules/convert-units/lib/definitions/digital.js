var bits
  , bytes;

bits = {
  b: {
    name: {
      singular: 'Bit'
    , plural: 'Bitti'
    }
  , to_anchor: 1
  }
, Kb: {
    name: {
      singular: 'Kilobit'
    , plural: 'Kilobitti'
    }
  , to_anchor: 1024
  }
, Mb: {
    name: {
      singular: 'Megabit'
    , plural: 'Megabitti'
    }
  , to_anchor: 1048576
  }
, Gb: {
    name: {
      singular: 'Gigabit'
    , plural: 'Gigabitti'
    }
  , to_anchor: 1073741824
  }
, Tb: {
    name: {
      singular: 'Terabit'
    , plural: 'Terabitti'
    }
  , to_anchor: 1099511627776
  }
};

bytes = {
  B: {
    name: {
      singular: 'Bait'
    , plural: 'Baiti'
    }
  , to_anchor: 1
  }
, KB: {
    name: {
      singular: 'Kilobait'
    , plural: 'Kilobaiti'
    }
  , to_anchor: 1024
  }
, MB: {
    name: {
      singular: 'Megabait'
    , plural: 'Megabaiti'
    }
  , to_anchor: 1048576
  }
, GB: {
    name: {
      singular: 'Gigabait'
    , plural: 'Gigabaiti'
    }
  , to_anchor: 1073741824
  }
, TB: {
    name: {
      singular: 'Terabait'
    , plural: 'Terabaiti'
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
