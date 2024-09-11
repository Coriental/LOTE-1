var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PostacinL10509_1 = new ol.format.GeoJSON();
var features_PostacinL10509_1 = format_PostacinL10509_1.readFeatures(json_PostacinL10509_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacinL10509_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinL10509_1.addFeatures(features_PostacinL10509_1);
var lyr_PostacinL10509_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinL10509_1, 
                style: style_PostacinL10509_1,
                popuplayertitle: "Postación L1 05-09",
                interactive: true,
                title: '<img src="styles/legend/PostacinL10509_1.png" /> Postación L1 05-09'
            });
var format_PostacinL1Sistema5092024_2 = new ol.format.GeoJSON();
var features_PostacinL1Sistema5092024_2 = format_PostacinL1Sistema5092024_2.readFeatures(json_PostacinL1Sistema5092024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacinL1Sistema5092024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinL1Sistema5092024_2.addFeatures(features_PostacinL1Sistema5092024_2);
var lyr_PostacinL1Sistema5092024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinL1Sistema5092024_2, 
                style: style_PostacinL1Sistema5092024_2,
                popuplayertitle: "Postación L1 Sistema 5-09-2024",
                interactive: true,
                title: '<img src="styles/legend/PostacinL1Sistema5092024_2.png" /> Postación L1 Sistema 5-09-2024'
            });
var format_PostacinExistenteL1_3 = new ol.format.GeoJSON();
var features_PostacinExistenteL1_3 = format_PostacinExistenteL1_3.readFeatures(json_PostacinExistenteL1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacinExistenteL1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinExistenteL1_3.addFeatures(features_PostacinExistenteL1_3);
var lyr_PostacinExistenteL1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinExistenteL1_3, 
                style: style_PostacinExistenteL1_3,
                popuplayertitle: "Postación Existente L1",
                interactive: true,
                title: '<img src="styles/legend/PostacinExistenteL1_3.png" /> Postación Existente L1'
            });
var format_APL1_4 = new ol.format.GeoJSON();
var features_APL1_4 = format_APL1_4.readFeatures(json_APL1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APL1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL1_4.addFeatures(features_APL1_4);
var lyr_APL1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL1_4, 
                style: style_APL1_4,
                popuplayertitle: "AP. L1.",
                interactive: true,
                title: '<img src="styles/legend/APL1_4.png" /> AP. L1.'
            });
var format_PDL1_5 = new ol.format.GeoJSON();
var features_PDL1_5 = format_PDL1_5.readFeatures(json_PDL1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDL1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL1_5.addFeatures(features_PDL1_5);
var lyr_PDL1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL1_5, 
                style: style_PDL1_5,
                popuplayertitle: "PD L1.",
                interactive: true,
                title: '<img src="styles/legend/PDL1_5.png" /> PD L1.'
            });
var format_MT3x185L1_6 = new ol.format.GeoJSON();
var features_MT3x185L1_6 = format_MT3x185L1_6.readFeatures(json_MT3x185L1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x185L1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L1_6.addFeatures(features_MT3x185L1_6);
var lyr_MT3x185L1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L1_6, 
                style: style_MT3x185L1_6,
                popuplayertitle: "MT 3x185 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x185L1_6.png" /> MT 3x185 L1'
            });
var format_MT3x70L1_7 = new ol.format.GeoJSON();
var features_MT3x70L1_7 = format_MT3x70L1_7.readFeatures(json_MT3x70L1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x70L1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L1_7.addFeatures(features_MT3x70L1_7);
var lyr_MT3x70L1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L1_7, 
                style: style_MT3x70L1_7,
                popuplayertitle: "MT 3x70 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L1_7.png" /> MT 3x70 L1'
            });
var format_MT3x35L1_8 = new ol.format.GeoJSON();
var features_MT3x35L1_8 = format_MT3x35L1_8.readFeatures(json_MT3x35L1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x35L1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L1_8.addFeatures(features_MT3x35L1_8);
var lyr_MT3x35L1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L1_8, 
                style: style_MT3x35L1_8,
                popuplayertitle: "MT 3x35 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x35L1_8.png" /> MT 3x35 L1'
            });
var format_BT3x701x501x25L1_9 = new ol.format.GeoJSON();
var features_BT3x701x501x25L1_9 = format_BT3x701x501x25L1_9.readFeatures(json_BT3x701x501x25L1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BT3x701x501x25L1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L1_9.addFeatures(features_BT3x701x501x25L1_9);
var lyr_BT3x701x501x25L1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L1_9, 
                style: style_BT3x701x501x25L1_9,
                popuplayertitle: "BT 3x70+1x50+1x25 L1",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L1_9.png" /> BT 3x70+1x50+1x25 L1'
            });
var group_LOTE1 = new ol.layer.Group({
                                layers: [lyr_PostacinL10509_1,lyr_PostacinL1Sistema5092024_2,lyr_PostacinExistenteL1_3,],
                                fold: "open",
                                title: "LOTE 1"});
var group_Lote1 = new ol.layer.Group({
                                layers: [lyr_APL1_4,],
                                fold: "open",
                                title: "Lote 1"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_PostacinL10509_1.setVisible(true);lyr_PostacinL1Sistema5092024_2.setVisible(true);lyr_PostacinExistenteL1_3.setVisible(true);lyr_APL1_4.setVisible(true);lyr_PDL1_5.setVisible(true);lyr_MT3x185L1_6.setVisible(true);lyr_MT3x70L1_7.setVisible(true);lyr_MT3x35L1_8.setVisible(true);lyr_BT3x701x501x25L1_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_LOTE1,group_Lote1,lyr_PDL1_5,lyr_MT3x185L1_6,lyr_MT3x70L1_7,lyr_MT3x35L1_8,lyr_BT3x701x501x25L1_9];
lyr_PostacinL10509_1.set('fieldAliases', {'Alimentent': 'Alimentent', 'Nro. De So': 'Nro. De So', 'Tipo/poste': 'Tipo/poste', 'Coord. X.': 'Coord. X.', 'Coord. Y.': 'Coord. Y.', 'field_6': 'field_6', });
lyr_PostacinL1Sistema5092024_2.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Tramo': 'Tramo', 'Cuadrilla 1': 'Cuadrilla 1', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Motivo': 'Motivo', 'Tipo de Poste': 'Tipo de Poste', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Autor': 'Autor', });
lyr_PostacinExistenteL1_3.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'TIPO POSTE': 'TIPO POSTE', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', 'ESTRUCTURA': 'ESTRUCTURA', });
lyr_APL1_4.set('fieldAliases', {'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'Contratista': 'Contratista', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', });
lyr_PDL1_5.set('fieldAliases', {'LOTE': 'LOTE', 'CONTRATISTA': 'CONTRATISTA', 'ALIMENTADOR': 'ALIMENTADOR', 'TIPO COLUMNA': 'TIPO COLUMNA', 'N° DE SOSTEN': 'N° DE SOSTEN', 'N° DE FÁBRICA': 'N° DE FÁBRICA', 'NRO ANDE': 'NRO ANDE', 'COORDENADA X': 'COORDENADA X', 'COORDENADA Y': 'COORDENADA Y', });
lyr_MT3x185L1_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO/FIN': 'INICIO/FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT3x70L1_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT3x35L1_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_BT3x701x501x25L1_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_PostacinL10509_1.set('fieldImages', {'Alimentent': 'TextEdit', 'Nro. De So': 'TextEdit', 'Tipo/poste': 'TextEdit', 'Coord. X.': 'TextEdit', 'Coord. Y.': 'TextEdit', 'field_6': 'TextEdit', });
lyr_PostacinL1Sistema5092024_2.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 1': 'TextEdit', 'Tramo': 'TextEdit', 'Cuadrilla 1': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Motivo': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Autor': 'TextEdit', });
lyr_PostacinExistenteL1_3.set('fieldImages', {'Nro. De So': 'TextEdit', 'TIPO POSTE': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', 'ESTRUCTURA': '', });
lyr_APL1_4.set('fieldImages', {'Alimentador': 'TextEdit', 'Nro de Sosten': 'Range', 'Contratista': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', });
lyr_PDL1_5.set('fieldImages', {'LOTE': 'TextEdit', 'CONTRATISTA': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'TIPO COLUMNA': 'TextEdit', 'N° DE SOSTEN': 'TextEdit', 'N° DE FÁBRICA': 'Range', 'NRO ANDE': 'Range', 'COORDENADA X': 'Range', 'COORDENADA Y': 'Range', });
lyr_MT3x185L1_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO/FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x70L1_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x35L1_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_BT3x701x501x25L1_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_PostacinL10509_1.set('fieldLabels', {'Alimentent': 'inline label - always visible', 'Nro. De So': 'inline label - always visible', 'Tipo/poste': 'inline label - always visible', 'Coord. X.': 'no label', 'Coord. Y.': 'no label', 'field_6': 'no label', });
lyr_PostacinL1Sistema5092024_2.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de Sosten': 'inline label - always visible', 'Alimentadores Lote 1': 'inline label - always visible', 'Tramo': 'no label', 'Cuadrilla 1': 'no label', 'Marca': 'no label', 'Número de Fábrica': 'no label', 'Motivo': 'no label', 'Tipo de Poste': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Autor': 'no label', });
lyr_PostacinExistenteL1_3.set('fieldLabels', {'Nro. De So': 'inline label - always visible', 'TIPO POSTE': 'no label', 'Coord X': 'no label', 'Coord Y': 'no label', 'ESTRUCTURA': 'no label', });
lyr_APL1_4.set('fieldLabels', {'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'Contratista': 'no label', 'Dirección': 'no label', 'Ciudad': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', });
lyr_PDL1_5.set('fieldLabels', {'LOTE': 'no label', 'CONTRATISTA': 'no label', 'ALIMENTADOR': 'no label', 'TIPO COLUMNA': 'no label', 'N° DE SOSTEN': 'no label', 'N° DE FÁBRICA': 'no label', 'NRO ANDE': 'no label', 'COORDENADA X': 'no label', 'COORDENADA Y': 'no label', });
lyr_MT3x185L1_6.set('fieldLabels', {'FECHA': 'no label', 'INICIO/FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x70L1_7.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x35L1_8.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_BT3x701x501x25L1_9.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_BT3x701x501x25L1_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});