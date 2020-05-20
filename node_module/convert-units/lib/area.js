var metric
  , imperial;

metric = {
  mm2: {
    name: {
      singular: 'Ruutmillimeeter mm<sup>2</sup>'
    , plural: 'Ruutmillimeeter mm<sup>2</sup>'
    }
  , to_anchor: 1/1000000
  }
, cm2: {
    name: {
      singular: 'Ruutsentimeeter cm<sup>2</sup>'
    , plural: 'Ruutsentimeeter cm<sup>2</sup>'
    }
  , to_anchor: 1/10000
  }
, m2: {
    name: {
      singular: 'Ruutmeeter m<sup>2</sup>'
    , plural: 'Ruutmeeter m<sup>2</sup>'
    }
  , to_anchor: 1
  }
, ha: {
    name: {
      singular: 'Hektar ha'
    , plural: 'Hektar ha'
    }
  , to_anchor: 10000
  }
, km2: {
    name: {
      singular: 'Ruutkilomeeter km<sup>2</sup>'
    , plural: 'Ruutkilomeeter km<sup>2</sup>'
    }
  , to_anchor: 1000000
  }
};

imperial = {
  in2: {
    name: {
      singular: 'Ruuttoll in<sup>2</sup>'
    , plural: 'Ruuttoll in<sup>2</sup>'
    }
  , to_anchor: 1/144
  }
, yd2: {
    name: {
      singular: 'Ruutjard yd<sup>2</sup>'
    , plural: 'Ruutjard yd<sup>2</sup>'
    }
  , to_anchor: 9
  }
, ft2: {
    name: {
      singular: 'Ruutjalg ft<sup>2</sup>'
    , plural: 'Ruutjalg ft<sup>2</sup>'
    }
  , to_anchor: 1
  }
, ac: {
    name: {
      singular: 'Aaker ac'
    , plural: 'Aaker ac'
    }
  , to_anchor: 43560
  }
, mi2: {
    name: {
      singular: 'Ruutmiil mi<sup>2</sup>'
    , plural: 'Ruutmiil mi<sup>2</sup>'
    }
  , to_anchor: 27878400
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'm2'
    , ratio: 10.7639
    }
  , imperial: {
      unit: 'ft2'
    , ratio: 1/10.7639
    }
  }
};
