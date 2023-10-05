var vis_1 = "js/choropleth_map.vg.json";
  vegaEmbed('#choropleth_map', vis_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);