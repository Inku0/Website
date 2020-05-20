var metric
  , imperial;

metric = {
  'mm3/s': {
      name: {
        singular: 'Kuupmillimeetrit sekundis mm<sup>3</sup>/s'
      , plural: 'Kuupmillimeetrit sekundis mm<sup>3</sup>/s'
      }
    , to_anchor: 1/1000000
  }
, 'cm3/s': {
    name: {
      singular: 'Kuupsentimeetrit sekundis cm<sup>3</sup>/s'
    , plural: 'Kuupsentimeetrit sekundis cm<sup>3</sup>/s'
    }
  , to_anchor: 1/1000
  }
, 'ml/s': {
    name: {
      singular: 'Milliliitrit sekundis ml/s'
    , plural: 'Milliliitrit sekundis ml/s'
    }
  , to_anchor: 1/1000
  }
, 'cl/s': {
    name: {
      singular: 'Sentiliitrit sekundis cl/s'
    , plural: 'Sentiliitrit sekundis cl/s'
    }
  , to_anchor: 1/100
  }
, 'dl/s': {
    name: {
      singular: 'Detsiliitrit sekundis dl/s'
    , plural: 'Detsiliitrit sekundis dl/s'
    }
  , to_anchor: 1/10
  }
, 'l/s': {
    name: {
      singular: 'Liitrit sekundis l/s'
    , plural: 'Liitrit sekundis l/s'
    }
  , to_anchor: 1
  }
, 'l/min': {
    name: {
      singular: 'Liitrit minutis l/min'
    , plural: 'liitrit minutis l/min'
    }
  , to_anchor: 1/60
  }
, 'l/h': {
    name: {
      singular: 'Liitrit tunnis l/h'
    , plural: 'Liitrit tunnis l/h'
    }
  , to_anchor: 1/3600
  }
, 'kl/s': {
    name: {
      singular: 'Kiloliitrit sekundis kl/s'
    , plural: 'Kiloliitrit sekundis kl/s'
    }
  , to_anchor: 1000
  }
, 'kl/min': {
    name: {
      singular: 'Kiloliitrit minutis kl/min'
    , plural: 'Kiloliitrit minutis kl/min'
    }
  , to_anchor: 50/3
  }
, 'kl/h': {
    name: {
      singular: 'Kiloliitrit tunnis kl/h'
    , plural: 'Kiloliitrit tunnis kl/h'
    }
  , to_anchor: 5/18
  }
, 'm3/s': {
    name: {
      singular: 'Kuupmeetrit sekundis m<sup>3</sup>/s'
    , plural: 'Kuupmeetrit sekundis m<sup>3</sup>/s'
    }
  , to_anchor: 1000
  }
, 'm3/min': {
    name: {
      singular: 'Kuupmeetrit minutis m<sup>3</sup>/min'
    , plural: 'Kuupmeetrit minutis m<sup>3</sup>/min'
    }
  , to_anchor: 50/3
  }
, 'm3/h': {
    name: {
      singular: 'Kuupmeetrit tunnis m<sup>3</sup>/h'
    , plural: 'Kuupmeetrit tunnis m<sup>3</sup>/h'
    }
  , to_anchor: 5/18
  }
, 'km3/s': {
    name: {
      singular: 'Kuupkilomeetrit sekundis km<sup>3</sup>/s'
    , plural: 'Kuupkilomeetrit sekundis km<sup>3</sup>/s'
    }
  , to_anchor: 1000000000000
  }
};

imperial = {
  'tl/s': {
    name: {
      singular: 'Teelusikat sekundis tl/s'
    , plural: 'Teelusikat sekundis tl/s'
    }
  , to_anchor: 1/6
  }
, 'spl/s': {
    name: {
      singular: 'Supilusikat sekundis spl/s'
    , plural: 'Supilusikat sekundis spl/s'
    }
  , to_anchor: 1/2
  }
, 'in3/s': {
    name: {
      singular: 'Kuuptolli sekundis in<sup>3</sup>/s'
    , plural: 'Kuuptolli sekundis in<sup>3</sup>/s'
    }
  , to_anchor: 0.55411
  }
, 'in3/min': {
    name: {
      singular: 'Kuuptolli minutis in<sup>3</sup>/min'
    , plural: 'Kuuptolli minutis in<sup>3</sup>/min'
    }
  , to_anchor: 0.55411/60
  }
, 'in3/h': {
    name: {
      singular: 'Kuuptolli tunnis in<sup>3</sup>/h'
    , plural: 'Kuuptolli tunnis in<sup>3</sup>/h'
    }
  , to_anchor: 0.55411/3600
  }
, 'fl-oz/s': {
    name: {
      singular: 'Vedelikuuntsi sekundis fl-oz/s'
    , plural: 'Vedelikuuntsi sekundis fl-oz/s'
    }
  , to_anchor: 1
  }
, 'fl-oz/min': {
    name: {
      singular: 'Vedelikuuntsi minutis fl-oz/min'
    , plural: 'Vedelikuuntsi minutis fl-oz/min'
    }
  , to_anchor: 1/60
  }
, 'fl-oz/h': {
    name: {
      singular: 'Vedelikuuntsi tunnis fl-oz/h'
    , plural: 'Vedelikuuntsi tunnis fl-oz/h'
    }
  , to_anchor: 1/3600
  }
, 'cup/s': {
    name: {
      singular: 'Tassi sekundis cup/s'
    , plural: 'Tassi sekundis cup/s'
    }
  , to_anchor: 8
  }
, 'pnt/s': {
    name: {
      singular: 'Pinti sekundis pnt/s'
    , plural: 'pinti sekundis pnt/s'
    }
  , to_anchor: 16
  }
, 'pnt/min': {
    name: {
      singular: 'Pinti minutis pnt/min'
    , plural: 'pinti minutis pnt/min'
    }
  , to_anchor: 4/15
  }
, 'pnt/h': {
    name: {
      singular: 'Pinti tunnis  pnt/h'
    , plural: 'pinti tunnis pnt/h'
    }
  , to_anchor: 1/225
  }
, 'qt/s': {
    name: {
      singular: 'Kvarti sekundis qt/s'
    , plural: 'Kvarti sekundis qt/s'
    }
  , to_anchor: 32
  }
, 'gal/s': {
    name: {
      singular: 'Gallonit sekundis gal/s'
    , plural: 'Gallonit sekundis gal/s'
    }
  , to_anchor: 128
  }
, 'gal/min': {
    name: {
      singular: 'Gallonit minutis gal/min'
    , plural: 'Gallonit minutis gal/min'
    }
  , to_anchor: 32/15
  }
, 'gal/h': {
    name: {
      singular: 'Gallonit tunnis gal/h'
    , plural: 'Gallonit tunnis gal/h'
    }
  , to_anchor: 8/225
  }
, 'ft3/s': {
    name: {
      singular: 'Kuupjalga sekundis ft<sup>3</sup>/s'
    , plural: 'Kuupjalga sekundis ft<sup>3</sup>/s'
    }
  , to_anchor: 957.506
  }
, 'ft3/min': {
    name: {
      singular: 'Kuupjalga minutis ft<sup>3</sup>/min'
    , plural: 'Kuupjalga minutis ft<sup>3</sup>/min'
    }
  , to_anchor: 957.506/60
  }
, 'ft3/h': {
    name: {
      singular: 'Kuupjalga tunnis ft<sup>3</sup>/h'
    , plural: 'Kuupjalga tunnis ft<sup>3</sup>/h'
    }
  , to_anchor: 957.506/3600
  }
, 'yd3/s': {
    name: {
      singular: 'Kuupjardi sekundis yd<sup>3</sup>/s'
    , plural: 'Kuupjardi sekundis yd<sup>3</sup>/s'
    }
  , to_anchor: 25852.7
  }
, 'yd3/min': {
    name: {
      singular: 'Kuupjardi minutis yd<sup>3</sup>/min'
    , plural: 'Kuupjardi minutis yd<sup>3</sup>/min'
    }
  , to_anchor: 25852.7/60
  }
, 'yd3/h': {
    name: {
      singular: 'Kuupjardi tunnis yd<sup>3</sup>/h'
    , plural: 'Kuupjardi tunnis yd<sup>3</sup>/h'
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
