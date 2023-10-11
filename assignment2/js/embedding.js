var vis_1 = "js/choropleth_map.vg.json";
  vegaEmbed('#choropleth_map', vis_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var vis_2 = "js/area_chart.vg.json";
  vegaEmbed('#area_chart', vis_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var vis_3 = "js/radial_plot.vg.json";
  vegaEmbed('#radial_plot', vis_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);