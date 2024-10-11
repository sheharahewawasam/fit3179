var map1Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Ratio of female to male labor force participation rate throughout the years",
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
        "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/Homework-10/ratio-of-female-to-male-labor-force-participation-rates-ilo-wdi.csv",
        "format": {"type": "csv"}
      },
      "transform": [
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
          "title": "Ratio of female to male labor force participation rate (%)",
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
            "title": "Ratio of female to male labor force participation rate (%)"
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
          "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/Homework-10/female-labor-force-by-age.csv",
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
};
var countries2 = ["Afghanistan","Afghanistan","Albania","Algeria","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Channel Islands","Chile","China","Colombia","Comoros","Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czechia","Democratic Republic of Congo","Denmark","Djibouti","Dominican Republic","East Asia and Pacific (WB)","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Europe and Central Asia (WB)","European Union (27)","Fiji","Finland","France","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","High-income countries","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Laos","Latin America and Caribbean (WB)","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Low-income countries","Lower-middle-income countries","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Middle East and North Africa (WB)","Middle-income countries","Moldova","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North America (WB)","North Korea","North Macedonia","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland"]
var map3Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Female labor force participation rate in Afghanistan over time.",
  "data": {
    "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/Visualization_II/female-labor-force-participation-rates.csv"
  },
  "params": [
    {
          "name": "entity1",
          "value": ["Algeria"],
          "bind": {
            "input": "select",
            "options": countries2,
            "name": "Select Entity: "
          }
        },
        {
          "name": "entity2",
          "value": ["Afghanistan"],
          "bind": {
            "input": "select",
            "options": countries2,
            "name": "Select Entity: "
          }
        },
        {
          "name": "entity3",
          "value": ["Angola"],
          "bind": {
            "input": "select",
            "options": countries2,
            "name": "Select Entity: "
          }
        },
        {
          "name": "entity4",
          "value": ["Albania"],
          "bind": {
            "input": "select",
            "options": countries2,
            "name": "Select Entity: "
          }
        },
        {
          "name": "entity5",
          "value": ["Argentina"],
          "bind": {
            "input": "select",
            "options": countries2,
            "name": "Select Entity: "
          }
        }
  ],
  "mark": {
    "type": "line"
  },
  "transform": [
    {
      "filter": "(datum['Entity'] == entity1 || datum['Entity'] == entity2 || datum['Entity'] == entity3 || datum['Entity'] == entity4 || datum['Entity'] == entity5)"
    }
  ],
  "encoding": {
    "x": {
      "type": "quantitative",
      "field": "Year"
    },
    "y": {
      "type": "quantitative",
      "field": "Labor force participation rate, female (% of female population ages 15+) (modeled ILO estimate)",
      "title": "Labor force participation rate"
    },
    "color": {
      "field": "Entity",
      "type": "nominal"
    }
  }
}
vegaEmbed('#map3', map3Spec).then(function(result) {
  console.log("Map 3 rendered successfully!");
}).catch(console.error);
var countries3 = ['Albania', 'Algeria', 'American Samoa', 'Angola', 'Anguilla',
  'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba',
  'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
  'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin',
  'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina',
  'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso',
  'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cayman Islands',
  'Chile', 'Colombia', 'Comoros', 'Congo', 'Cook Islands',
  'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus',
  'Czechia', 'Czechoslovakia', 'Denmark', 'Dominica',
  'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt',
  'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia',
  'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France',
  'French Polynesia', 'Gabon', 'Gambia', 'Georgia', 'Germany',
  'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guernsey',
  'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary',
  'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
  'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan',
  'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Latvia', 'Lesotho', 'Liberia',
  'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau, China',
  'Madagascar', 'Malaysia', 'Maldives', 'Mali', 'Malta',
  'Marshall Islands', 'Martinique', 'Mauritius', 'Mexico', 'Moldova',
  'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique',
  'Myanmar', 'Namibia', 'Nepal', 'Netherlands',
  'Netherlands Antilles', 'New Caledonia', 'New Zealand',
  'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'North Macedonia',
  'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau',
  'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru',
  'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar',
  'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Helena',
  'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Pierre and Miquelon', 'Samoa', 'San Marino',
  'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia',
  'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
  'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Suriname',
  'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan',
  'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago',
  'Tunisia', 'Turkey', 'Uganda', 'Ukraine', 'United Arab Emirates',
  'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
  'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']
var map4Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Pie Chart with percentage_tooltip",
  "data": {"url":"https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/Visualization_II/Transformed_Female_Share_Employment_By_Sector.csv"
  },
  "params":[
    {
      "name": "year",
      "value": 1991,
      "bind": {
        "input": "select",
        "options": [
          1970,
          1971,1972,1973,1974,1975,1976,1977,1978,1979,
          1980,
          1981,1982,1983,1984,1985,1986,1987,1988,1989,
          1990,
          1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
          2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
          2011, 2012, 2013, 2014, 2015, 2016
        ]
      }
    },
    {
      "name": "entity1",
      "value": ["Australia"],
      "bind": {
        "input": "select",
        "options": countries3,
        "name": "Select Entity: "
      }
    }
  ],
  "transform": [
    {"filter":"datum.Entity == entity1"},
    {"filter":"datum.Year == year"}
  ],
  "mark": {"type": "arc", "tooltip": true},
  "encoding": {
    "theta": {"field": "Female share employment", "type": "quantitative", "stack": "normalize"},
    "color": {"field": "Sector", "type": "nominal"}
  }
};
vegaEmbed('#map4', map4Spec).then(function(result) {
  console.log("Map 4 rendered successfully!");
}).catch(console.error);
  

// Embed both maps
vegaEmbed('#map1', map1Spec).then(function(result) {
  console.log("Map 1 rendered successfully!");
  // Access the Vega view instance as result.view
}).catch(console.error);