var map1Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 700,
  "height": 400,
  "params": [
      {
          "name": "projection",
          "value": "equalEarth",
          "bind": {
              "input": "select",
              "options": [
                  "albers",
                  "albersUsa",
                  "azimuthalEqualArea",
                  "azimuthalEquidistant",
                  "conicConformal",
                  "conicEqualArea",
                  "conicEquidistant",
                  "equalEarth",
                  "equirectangular",
                  "gnomonic",
                  "mercator",
                  "naturalEarth1",
                  "orthographic",
                  "stereographic",
                  "transverseMercator"
              ]
          }
      },
      {
          "name": "year",
          "value": 2022,
          "bind": {
              "input": "range",
              "min": 1992,
              "max": 2022,
              "step": 1
          }
      }
  ],
  "data": {
      "url": "data/world-110m.json",
      "format": {
          "type": "topojson",
          "feature": "countries"
      }
  },
  "layer": [
      {
          "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "gray"},
          "projection": {"type": {"expr": "projection"}}
      },
      {
          "mark": "circle",
          "data": {
              "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/main/Homework%2010/ratio.json"
          },
          "transform": [
              {"filter": "datum.Year == year"}  
          ],
          "encoding": {
              "longitude": {"field": "Longitude", "type": "quantitative"},
              "latitude": {"field": "Latitude", "type": "quantitative"},
              "size": {
                  "field": "Ratio of female to male labor force participation rate (%) (modeled ILO estimate)",
                  "type": "quantitative",
                  "scale": {"domain": [0, 200]}
              },
              "tooltip": [
                  {"field": "Entity", "type": "nominal"},
                  {"field": "Ratio of female to male labor force participation rate (%) (modeled ILO estimate)", "type": "quantitative", "title": "Labor Force Ratio"},
                  {"field": "Year", "type": "quantitative"}
              ]
          }
      }
  ]
};

var map2Spec = {
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
"width": 700,
"height": 400,
"params": [
    {
        "name": "projection",
        "value": "equalEarth",
        "bind": {
            "input": "select",
            "options": [
                "albers",
                "albersUsa",
                "azimuthalEqualArea",
                "azimuthalEquidistant",
                "conicConformal",
                "conicEqualArea",
                "conicEquidistant",
                "equalEarth",
                "equirectangular",
                "gnomonic",
                "mercator",
                "naturalEarth1",
                "orthographic",
                "stereographic",
                "transverseMercator"
            ]
        }
    },
    {
        "name": "year",
        "value": 2022,
        "bind": {
            "input": "range",
            "min": 1992,
            "max": 2022,
            "step": 1
        }
    }
],
"data": {
    "url": "data/world-110m.json",
    "format": {
        "type": "topojson",
        "feature": "countries"
    }
},
"layer": [
    {
        "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "gray"},
        "projection": {"type": {"expr": "projection"}}
    },
    {
        "mark": "circle",
        "data": {
            "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/main/Homework%2010/unemployed.json"
        },
        "transform": [
            {"filter": "datum.Year == year"}  
        ],
        "encoding": {
            "longitude": {"field": "Longitude", "type": "quantitative"},
            "latitude": {"field": "Latitude", "type": "quantitative"},
            "size": {
                "field": "Unemployment, female (% of female labor force) (modeled ILO estimate)",
                "type": "quantitative",
                "scale": {"domain": [0, 200]}
            },
            "tooltip": [
                {"field": "Entity", "type": "nominal"},
                {"field": "Unemployment, female (% of female labor force) (modeled ILO estimate)", "type": "quantitative", "title": "Labor Force Ratio"},
                {"field": "Year", "type": "quantitative"}
            ]
        }
    }
]
};

// Embed both maps
vegaEmbed('#map1', map1Spec).then(function(result) {
  console.log("Map 1 rendered successfully!");
  // Access the Vega view instance as result.view
}).catch(console.error);

vegaEmbed('#map2', map2Spec).then(function(result) {
  console.log("Map 2 rendered successfully!");
  // Access the Vega view instance as result.view
}).catch(console.error);