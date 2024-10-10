var map1Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Minimum Wage per Day in Local Currency for Each Country in 2023",
  "width": 800,
  "height": 400,
  "projection": {"type": "equalEarth"},
  "params": [
    {
      "name": "year",
      "value": 1991,
      "bind": {
        "input": "select",
        "options": [
          1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
          2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
          2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
          2021, 2022, 2023, 2024
        ]
      }
    }
  ],
  "layer": [
    {
      "data": {
        "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/7_others/oceans.topojson",
        "format": {"type": "topojson", "feature": "oceans"}
      },
      "mark": {"type": "geoshape", "fill": "skyblue"}
    },
    {
      "data": {
        "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/2_symbol_map/js/WorldMapWithGraticules.topojson",
        "format": {"type": "topojson", "feature": "ne_110m_graticules_30"}
      },
      "mark": {"type": "geoshape", "fill": "null", "stroke": "lightgray"}
    },
    {
      "data": {
        "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/main/Homework%2010/ratio-of-female-to-male-labor-force-participation-rates-ilo-wdi.csv",
        "format": {"type": "csv"}
      },
      "transform": [
        {"filter": "datum.Year == year"},
        {
          "lookup": "Entity",
          "from": {
            "data": {
              "url": "https://raw.githubusercontent.com/samwzlim/FIT3179/main/week9_homework/js/ne_110m.topojson",
              "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
            },
            "key": "properties.NAME"
          },
          "as": "geo"
        },
        {"filter": "datum.Year == year"}
      ],
      "mark": {"type": "geoshape", "stroke": "grey", "strokeWidth": 1},
      "encoding": {
        "shape": {"field": "geo", "type": "geojson"},
        "color": {
          "field": "Ratio of female to male labor force participation rate (%) (modeled ILO estimate)",
          "type": "quantitative",
          "title": "Minimum Wage per Day (Local Currency)",
          "scale": {
            "type": "linear",
            "scheme": "reds"
          }
        },
        "tooltip": [
          {"field": "Entity", "type": "nominal", "title": "Country"},
          {
            "field": "Ratio of female to male labor force participation rate (%) (modeled ILO estimate)",
            "type": "quantitative",
            "title": "Minimum Wage per Day"
          },
          {"field": "Year", "type": "quantitative"}
        ]
      }
    }
  ]
};
var countries = ["ASEAN", "Afghanistan", "Africa", "Albania", "Algeria", "Americas", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central Africa", "Central African Republic", "Central America", "Central Asia", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of Congo", "Denmark", "Djibouti", "Dominican Republic", "East Timor", "Eastern Africa", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Guinea", "GuineaBissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Northern Europe", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South America", "South Korea", "SouthEastern Asia", "Southern Africa", "Southern Asia", "Southern Europe", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Western Africa", "Western Asia", "Western Europe", "Yemen", "Zambia", "Zimbabwe", "World", "Various regional and incomebased groupings"]
let index = 0;
let field = "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 15-24 - Sex: Female";
let list = [
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 15-24 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 25-34 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 35-44 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 45-54 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 55-64 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 65+ - Sex: Female"
];
updateMap2Spec()
document.getElementById('valueDisplay').innerText = field;
function increaseValue() {
    index += 1;
    if (index >= list.length) {
        index = 0;
    }
    field = list[index];
    document.getElementById('valueDisplay').innerText = field;
    updateMap2Spec();
}
function updateMap2Spec() {
  let updatedMap2Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "width": 700,
      "height": 400,
      "description": "A bar chart with highlighting on hover and selecting on click, with field selectors.",
      "data": {
          "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/main/Homework%2010/female-labor-force-by-age.csv",
          "format": {"type": "csv"}
      },
      "params": [
        {
          "name": "year",
          "value": [1990],
          "bind": {
            "input": "select",
            "options":[
              1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024
            ]
          }
        },
        {
          "name": "entity1",
          "value": ["ASEAN"],
          "bind": {
            "input": "select",
            "options": countries,
            "name": "Select Entity: "
          }
        },
        {
          "name": "entity2",
          "value": ["Afghanistan"],
          "bind": {
            "input": "select",
            "options": countries,
            "name": "Select Entity: "
          }
        },
        {
          "name": "entity3",
          "value": ["Africa"],
          "bind": {
            "input": "select",
            "options": countries,
            "name": "Select Entity: "
          }
        },
        {
          "name": "entity4",
          "value": ["Albania"],
          "bind": {
            "input": "select",
            "options": countries,
            "name": "Select Entity: "
          }
        },
        {
          "name": "entity5",
          "value": ["Algeria"],
          "bind": {
            "input": "select",
            "options": countries,
            "name": "Select Entity: "
          }
        },
        {
          "name": "highlight",
          "select": {"type": "point", "on": "mouseover"}
        },
        {
          "name": "select",
          "select": {"type": "point", "on": "click"}
        }
      ],
      "transform": [
          {
              "filter": "datum['Year'] == year"
          },
          {
              "filter": "(datum['Entity'] == entity1 || datum['Entity'] == entity2 || datum['Entity'] == entity3 || datum['Entity'] == entity4 || datum['Entity'] == entity5)"
          }
      ],
      "mark": {
          "type": "bar",
          "fill": "#4C78A8",
          "stroke": "black",
          "cursor": "pointer"
      },
      "encoding": {
          "y": {
              "field": field,
              "type": "quantitative",
              "axis": {
                  "title": "Labour force"
              }
          },
          "x": {
              "field": "Entity",
              "type": "ordinal",
              "axis": {
                  "title": "Entity"
              }
          },
          "tooltip": [
              {
                  "field": field,
                  "type": "quantitative"
              }
          ],
          "fillOpacity": {
              "condition": {"param": "select", "value": 1},
              "value": 0.3
          },
          "strokeWidth": {
              "condition": [
                  {"param": "select", "value": 2},
                  {"param": "highlight", "value": 1}
              ],
              "value": 0
          }
      },
      "config": {
          "scale": {
              "bandPaddingInner": 0.2
          }
      }
  };

  vegaEmbed('#map2', updatedMap2Spec).then(function(result) {
      console.log("Map 2 updated successfully!");
  }).catch(console.error);
}

  

// Embed both maps
vegaEmbed('#map1', map1Spec).then(function(result) {
  console.log("Map 1 rendered successfully!");
  // Access the Vega view instance as result.view
}).catch(console.error);