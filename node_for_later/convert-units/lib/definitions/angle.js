var angle;

angle = {
  rad: {
    name: {
      singular: 'Radiaan'
    , plural: 'Radiaani'
    }
  , to_anchor: 180/Math.PI
  }
, deg: {
    name: {
      singular: 'Kraad'
    , plural: 'Kraadi'
    }
  , to_anchor: 1
  }
, grad: {
    name: {
      singular: 'Kümnendkraad'
    , plural: 'Kümnendkraadi'
    }
  , to_anchor: 9/10
  }
, arcmin: {
    name: {
      singular: 'Kaareminut'
    , plural: 'Kaareminutit'
    }
  , to_anchor: 1/60
  }
, arcsec: {
    name: {
      singular: 'Kaaresekund'
    , plural: 'Kaaresekundit'
    }
  , to_anchor: 1/3600
  }
};

module.exports = {
  metric: angle
, _anchors: {
    metric: {
      unit: 'deg'
    , ratio: 1
    }
  }
};
