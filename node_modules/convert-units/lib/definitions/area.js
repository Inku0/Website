var metric
  , imperial;

metric = {
  mm2: {
    name: {
      singular: 'Ruutmillimeeter'
    , plural: 'Ruutmillimeetrit'
    }
  , to_anchor: 1/1000000
  }
, cm2: {
    name: {
      singular: 'Ruutsentimeeter'
    , plural: 'Ruutsentimeetrit'
    }
  , to_anchor: 1/10000
  }
, m2: {
    name: {
      singular: 'Ruutmeeter'
    , plural: 'Ruutmeetrit'
    }
  , to_anchor: 1
  }
, ha: {
    name: {
      singular: 'Hektar'
    , plural: 'Hektarit'
    }
  , to_anchor: 10000
  }
, km2: {
    name: {
      singular: 'Ruutkilomeeter'
    , plural: 'Ruutkilomeetrit'
    }
  , to_anchor: 1000000
  }
};

imperial = {
  'in2': {
    name: {
      singular: 'Ruuttoll'
    , plural: 'Ruuttolli'
    }
  , to_anchor: 1/144
  }
, yd2: {
    name: {
      singular: 'Ruutjard'
    , plural: 'Ruutjardi'
    }
  , to_anchor: 9
  }
, ft2: {
    name: {
      singular: 'Ruutjalg'
    , plural: 'Ruutjalga'
    }
  , to_anchor: 1
  }
, ac: {
    name: {
      singular: 'Aaker'
    , plural: 'Aakrit'
    }
  , to_anchor: 43560
  }
, mi2: {
    name: {
      singular: 'Ruutmiil'
    , plural: 'Ruutmiili'
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
