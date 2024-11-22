var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SMANegeri13Jakarta_1 = new ol.format.GeoJSON();
var features_SMANegeri13Jakarta_1 = format_SMANegeri13Jakarta_1.readFeatures(json_SMANegeri13Jakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMANegeri13Jakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMANegeri13Jakarta_1.addFeatures(features_SMANegeri13Jakarta_1);
var lyr_SMANegeri13Jakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMANegeri13Jakarta_1, 
                style: style_SMANegeri13Jakarta_1,
                popuplayertitle: "SMA Negeri 13 Jakarta",
                interactive: true,
                title: '<img src="styles/legend/SMANegeri13Jakarta_1.png" /> SMA Negeri 13 Jakarta'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SMANegeri13Jakarta_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SMANegeri13Jakarta_1];
lyr_SMANegeri13Jakarta_1.set('fieldAliases', {'id': 'id', 'Gedung': 'Gedung', 'Alamat': 'Alamat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Foto': 'Foto', });
lyr_SMANegeri13Jakarta_1.set('fieldImages', {'id': 'TextEdit', 'Gedung': 'TextEdit', 'Alamat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_SMANegeri13Jakarta_1.set('fieldLabels', {'id': 'inline label - always visible', 'Gedung': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_SMANegeri13Jakarta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});