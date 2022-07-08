var metric
  , imperial;

metric = {
  mm3: {
      name: {
        singular: 'Kuupmillimeeter'
      , plural: 'Kuupmillimeetrit'
      }
    , to_anchor: 1/1000000
  }
, cm3: {
    name: {
      singular: 'Kuupsentimeeter'
    , plural: 'Kuupsentimeetrit'
    }
  , to_anchor: 1/1000
  }
, ml: {
    name: {
      singular: 'Milliliiter'
    , plural: 'Milliliitrit'
    }
  , to_anchor: 1/1000
  }
, cl: {
    name: {
      singular: 'Sentiliiter'
    , plural: 'Sentiliitrit'
    }
  , to_anchor: 1/100
  }
, dl: {
    name: {
      singular: 'Deciliiter'
    , plural: 'Deciliitrit'
    }
  , to_anchor: 1/10
  }
, l: {
    name: {
      singular: 'liiter'
    , plural: 'liitrit'
    }
  , to_anchor: 1
  }
, kl: {
    name: {
      singular: 'Kiloliiter'
    , plural: 'Kiloliitrit'
    }
  , to_anchor: 1000
  }
, m3: {
    name: {
      singular: 'Kuupmeeter'
    , plural: 'Kuupmeetrit'
    }
  , to_anchor: 1000
  }
, km3: {
    name: {
      singular: 'Kuupkilomeeter'
    , plural: 'Kuupkilomeetrit'
    }
  , to_anchor: 1000000000000
  }

// Swedish units
, krm: {
  name: {
    singular: 'Matsked'
    , plural: 'Matskedari'
  }
  , to_anchor: 1/1000
}
, tsk: {
    name: {
      singular: 'Tesked'
    , plural: 'Teskedari'
    }
  , to_anchor: 5/1000
  }
, msk: {
    name: {
      singular: 'Matsked'
      , plural: 'Matskedari'
    }
    , to_anchor: 15/1000
  }
, kkp: {
    name: {
      singular: 'Kaffekopp'
      , plural: 'Kaffekoppari'
    }
    , to_anchor: 150/1000
  }
, glas: {
    name: {
      singular: 'Glas'
      , plural: 'Glasi'
    }
    , to_anchor: 200/1000
  }
, kanna: {
    name: {
      singular: 'Kanna'
    , plural: 'Kannori'
    }
  , to_anchor: 2.617
  }
};

imperial = {
  tsp: {
    name: {
      singular: 'Teelusikas'
    , plural: 'Teelusikat'
    }
  , to_anchor: 1/6
  }
, Tbs: {
    name: {
      singular: 'Supilusikas'
    , plural: 'Supilusikat'
    }
  , to_anchor: 1/2
  }
, in3: {
    name: {
      singular: 'Kuuptoll'
    , plural: 'Kuuptolli'
    }
  , to_anchor: 0.55411
  }
, 'fl-oz': {
    name: {
      singular: 'Vedelikuunts'
    , plural: 'Vedelikuuntsa'
    }
  , to_anchor: 1
  }
, cup: {
    name: {
      singular: 'Tass'
    , plural: 'Tassi'
    }
  , to_anchor: 8
  }
, pnt: {
    name: {
      singular: 'Pint'
    , plural: 'Pinti'
    }
  , to_anchor: 16
  }
, qt: {
    name: {
      singular: 'Kvart'
    , plural: 'Kvarti'
    }
  , to_anchor: 32
  }
, gal: {
    name: {
      singular: 'Gallon'
    , plural: 'Gallonit'
    }
  , to_anchor: 128
  }
, ft3: {
    name: {
      singular: 'Kuupjalg'
    , plural: 'Kuupjalga'
    }
  , to_anchor: 957.506
  }
, yd3: {
    name: {
      singular: 'Kuupjard'
    , plural: 'Kuupjardi'
    }
  , to_anchor: 25852.7
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'l'
    , ratio: 33.8140226
    }
  , imperial: {
      unit: 'fl-oz'
    , ratio: 1/33.8140226
    }
  }
};
