var metric
  , imperial;

metric = {
  'mm3/s': {
      name: {
        singular: 'Kuupmillimeetrit sekundis'
      , plural: 'Kuupmillimeetrit sekundis'
      }
    , to_anchor: 1/1000000
  }
, 'cm3/s': {
    name: {
      singular: 'Kuupsentimeetrit sekundis'
    , plural: 'Kuupsentimeetrit sekundis'
    }
  , to_anchor: 1/1000
  }
, 'ml/s': {
    name: {
      singular: 'Milliliitrit sekundis'
    , plural: 'Milliliitrit sekundis'
    }
  , to_anchor: 1/1000
  }
, 'cl/s': {
    name: {
      singular: 'Sentiliitrit sekundis'
    , plural: 'Sentiliitrit sekundis'
    }
  , to_anchor: 1/100
  }
, 'dl/s': {
    name: {
      singular: 'Detsiliitrit sekundis'
    , plural: 'Detsiliitrit sekundis'
    }
  , to_anchor: 1/10
  }
, 'l/s': {
    name: {
      singular: 'Liitrit sekundis'
    , plural: 'liitrit sekundis'
    }
  , to_anchor: 1
  }
, 'l/min': {
    name: {
      singular: 'Liitrit minutis'
    , plural: 'liitrit minutis'
    }
  , to_anchor: 1/60
  }
, 'l/h': {
    name: {
      singular: 'Liitrit tunnis'
    , plural: 'Liitrit tunnis'
    }
  , to_anchor: 1/3600
  }
, 'kl/s': {
    name: {
      singular: 'Kiloliitrit sekundis'
    , plural: 'Kiloliitrit sekundis'
    }
  , to_anchor: 1000
  }
, 'kl/min': {
    name: {
      singular: 'Kiloliitrit minutis'
    , plural: 'Kiloliitrit minutis'
    }
  , to_anchor: 50/3
  }
, 'kl/h': {
    name: {
      singular: 'Kiloliitrit tunnis'
    , plural: 'Kiloliitrit tunnis'
    }
  , to_anchor: 5/18
  }
, 'm3/s': {
    name: {
      singular: 'Kuupmeetrit sekundis'
    , plural: 'Kuupmeetrit sekundis'
    }
  , to_anchor: 1000
  }
, 'm3/min': {
    name: {
      singular: 'Kuupmeetrit minutis'
    , plural: 'Kuupmeetrit minutis'
    }
  , to_anchor: 50/3
  }
, 'm3/h': {
    name: {
      singular: 'Kuupmeetrit tunnis'
    , plural: 'Kuupmeetrit tunnis'
    }
  , to_anchor: 5/18
  }
, 'km3/s': {
    name: {
      singular: 'Kuupkilomeetrit sekundis'
    , plural: 'Kuupkilomeetrit sekundis'
    }
  , to_anchor: 1000000000000
  }
};

imperial = {
  'tsp/s': {
    name: {
      singular: 'Teelusikat sekundis'
    , plural: 'Teelusikat sekundis'
    }
  , to_anchor: 1/6
  }
, 'Tbs/s': {
    name: {
      singular: 'Supilusikat sekundis'
    , plural: 'Supilusikat sekundis'
    }
  , to_anchor: 1/2
  }
, 'in3/s': {
    name: {
      singular: 'Kuuptolli sekundis'
    , plural: 'Kuuptolli sekundis'
    }
  , to_anchor: 0.55411
  }
, 'in3/min': {
    name: {
      singular: 'Kuuptolli minutis'
    , plural: 'Kuuptolli minutis'
    }
  , to_anchor: 0.55411/60
  }
, 'in3/h': {
    name: {
      singular: 'Kuuptolli tunnis'
    , plural: 'Kuuptolli tunnis'
    }
  , to_anchor: 0.55411/3600
  }
, 'fl-oz/s': {
    name: {
      singular: 'Vedelikuuntsi sekundis'
    , plural: 'Vedelikuuntsi sekundis'
    }
  , to_anchor: 1
  }
, 'fl-oz/min': {
    name: {
      singular: 'Vedelikuuntsi minutis'
    , plural: 'Vedelikuuntsi minutis'
    }
  , to_anchor: 1/60
  }
, 'fl-oz/h': {
    name: {
      singular: 'Vedelikuuntsi tunnis'
    , plural: 'Vedelikuuntsi tunnis'
    }
  , to_anchor: 1/3600
  }
, 'cup/s': {
    name: {
      singular: 'Tassi(Cup) sekundis'
    , plural: 'Tassi(Cup) sekundis'
    }
  , to_anchor: 8
  }
, 'pnt/s': {
    name: {
      singular: 'Pinti sekundis'
    , plural: 'pinti sekundis'
    }
  , to_anchor: 16
  }
, 'pnt/min': {
    name: {
      singular: 'Pinti minutis'
    , plural: 'pinti minutis'
    }
  , to_anchor: 4/15
  }
, 'pnt/h': {
    name: {
      singular: 'Pinti tunnis'
    , plural: 'pinti tunnis'
    }
  , to_anchor: 1/225
  }
, 'qt/s': {
    name: {
      singular: 'Kvarti sekundis'
    , plural: 'Kvarti sekundis'
    }
  , to_anchor: 32
  }
, 'gal/s': {
    name: {
      singular: 'Gallonit sekundis'
    , plural: 'Gallonit sekundis'
    }
  , to_anchor: 128
  }
, 'gal/min': {
    name: {
      singular: 'Gallonit minutis'
    , plural: 'Gallonit minutis'
    }
  , to_anchor: 32/15
  }
, 'gal/h': {
    name: {
      singular: 'Gallonit tunnis'
    , plural: 'Gallonit tunnis'
    }
  , to_anchor: 8/225
  }
, 'ft3/s': {
    name: {
      singular: 'Kuupjalga sekundis'
    , plural: 'Kuupjalga sekundis'
    }
  , to_anchor: 957.506
  }
, 'ft3/min': {
    name: {
      singular: 'Kuupjalga minutis'
    , plural: 'Kuupjalga minutis'
    }
  , to_anchor: 957.506/60
  }
, 'ft3/h': {
    name: {
      singular: 'Kuupjalga tunnis'
    , plural: 'Kuupjalga tunnis'
    }
  , to_anchor: 957.506/3600
  }
, 'yd3/s': {
    name: {
      singular: 'Kuupjardi sekundis'
    , plural: 'Kuupjardi sekundis'
    }
  , to_anchor: 25852.7
  }
, 'yd3/min': {
    name: {
      singular: 'Kuupjardi minutis'
    , plural: 'Kuupjardi minutis'
    }
  , to_anchor: 25852.7/60
  }
, 'yd3/h': {
    name: {
      singular: 'Kuupjardi tunnis'
    , plural: 'Kuupjardi tunnis'
    }
  , to_anchor: 25852.7/3600
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'l/s'
    , ratio: 33.8140227
    }
  , imperial: {
      unit: 'fl-oz/s'
    , ratio: 1/33.8140227
    }
  }
};
