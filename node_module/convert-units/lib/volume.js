var metric
  , imperial;

metric = {
  mm3: {
      name: {
        singular: 'Kuupmillimeeter mm<sup>3</sup>'
      , plural: 'Kuupmillimeeter mm<sup>3</sup>'
      }
    , to_anchor: 1/1000000
  }
, cm3: {
    name: {
      singular: 'Kuupsentimeeter cm<sup>3</sup>'
    , plural: 'Kuupsentimeeter cm<sup>3</sup>'
    }
  , to_anchor: 1/1000
  }
, ml: {
    name: {
      singular: 'Milliliiter ml'
    , plural: 'Milliliiter ml'
    }
  , to_anchor: 1/1000
  }
, cl: {
    name: {
      singular: 'Sentiliiter cl'
    , plural: 'Sentiliiter cl'
    }
  , to_anchor: 1/100
  }
, dl: {
    name: {
      singular: 'Detsiliiter dl'
    , plural: 'Detsiliiter dl'
    }
  , to_anchor: 1/10
  }
, l: {
    name: {
      singular: 'Liiter l'
    , plural: 'Liiter l'
    }
  , to_anchor: 1
  }
, kl: {
    name: {
      singular: 'Kiloliiter kl'
    , plural: 'Kiloliiter kl'
    }
  , to_anchor: 1000
  }
, m3: {
    name: {
      singular: 'Kuupmeeter m<sup>3</sup>'
    , plural: 'Kuupmeeter m<sup>3</sup>'
    }
  , to_anchor: 1000
  }
, km3: {
    name: {
      singular: 'Kuupkilomeeter km<sup>3</sup>'
    , plural: 'Kuupkilomeeter km<sup>3</sup>'
    }
  , to_anchor: 1000000000000
  }

// Swedish units
, krm: {
  name: {
    singular: 'Matsked krm'
    , plural: 'Matskedari krm'
  }
  , to_anchor: 1/1000
}
, tsk: {
    name: {
      singular: 'Tesked tsk'
    , plural: 'Teskedari tsk'
    }
  , to_anchor: 5/1000
  }
, msk: {
    name: {
      singular: 'Matsked msk'
      , plural: 'Matskedari msk'
    }
    , to_anchor: 15/1000
  }
, kkp: {
    name: {
      singular: 'Kaffekopp kkp'
      , plural: 'Kaffekoppari kkp'
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
  tl: {
    name: {
      singular: 'Teelusikas tl'
    , plural: 'Teelusikas tl'
    }
  , to_anchor: 1/6
  }
, spl: {
    name: {
      singular: 'Supilusikas spl'
    , plural: 'Supilusikas spl'
    }
  , to_anchor: 1/2
  }
, in3: {
    name: {
      singular: 'Kuuptoll in<sup>3</sup>'
    , plural: 'Kuuptoll in<sup>3</sup>'
    }
  , to_anchor: 0.55411
  }
, 'fl-oz': {
    name: {
      singular: 'Vedelikuunts fl-oz'
    , plural: 'Vedelikuunts fl-oz'
    }
  , to_anchor: 1
  }
, cup: {
    name: {
      singular: 'Tass cup'
    , plural: 'Tass cup'
    }
  , to_anchor: 8
  }
, pnt: {
    name: {
      singular: 'Pint pnt'
    , plural: 'Pint pnt'
    }
  , to_anchor: 16
  }
, qt: {
    name: {
      singular: 'Kvart qt'
    , plural: 'Kvart qt'
    }
  , to_anchor: 32
  }
, gal: {
    name: {
      singular: 'Gallon gal'
    , plural: 'Gallon gal'
    }
  , to_anchor: 128
  }
, ft3: {
    name: {
      singular: 'Kuupjalg ft<sup>3</sup>'
    , plural: 'Kuupjalg ft<sup>3</sup>'
    }
  , to_anchor: 957.506
  }
, yd3: {
    name: {
      singular: 'Kuupjard yd<sup>3</sup>'
    , plural: 'Kuupjard yd<sup>3</sup>'
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
