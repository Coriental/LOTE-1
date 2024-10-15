ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([433897.599862, 7198374.440633, 440700.488173, 7201398.628133]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.907000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LOTE1REP06_1 = new ol.format.GeoJSON();
var features_LOTE1REP06_1 = format_LOTE1REP06_1.readFeatures(json_LOTE1REP06_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_LOTE1REP06_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE1REP06_1.addFeatures(features_LOTE1REP06_1);
var lyr_LOTE1REP06_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE1REP06_1, 
                style: style_LOTE1REP06_1,
                popuplayertitle: "LOTE 1 REP 06",
                interactive: true,
                title: '<img src="styles/legend/LOTE1REP06_1.png" /> LOTE 1 REP 06'
            });
var format_VAU3_2 = new ol.format.GeoJSON();
var features_VAU3_2 = format_VAU3_2.readFeatures(json_VAU3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_VAU3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VAU3_2.addFeatures(features_VAU3_2);
var lyr_VAU3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VAU3_2, 
                style: style_VAU3_2,
                popuplayertitle: "VAU3",
                interactive: true,
                title: '<img src="styles/legend/VAU3_2.png" /> VAU3'
            });
var format_ESTAQUEIL1VILMA_3 = new ol.format.GeoJSON();
var features_ESTAQUEIL1VILMA_3 = format_ESTAQUEIL1VILMA_3.readFeatures(json_ESTAQUEIL1VILMA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEIL1VILMA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEIL1VILMA_3.addFeatures(features_ESTAQUEIL1VILMA_3);
var lyr_ESTAQUEIL1VILMA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEIL1VILMA_3, 
                style: style_ESTAQUEIL1VILMA_3,
                popuplayertitle: "ESTAQUEI L1 VILMA",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEIL1VILMA_3.png" /> ESTAQUEI L1 VILMA'
            });
var format_LOTE1ESTAQUEOREP03_4 = new ol.format.GeoJSON();
var features_LOTE1ESTAQUEOREP03_4 = format_LOTE1ESTAQUEOREP03_4.readFeatures(json_LOTE1ESTAQUEOREP03_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_LOTE1ESTAQUEOREP03_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE1ESTAQUEOREP03_4.addFeatures(features_LOTE1ESTAQUEOREP03_4);
var lyr_LOTE1ESTAQUEOREP03_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE1ESTAQUEOREP03_4, 
                style: style_LOTE1ESTAQUEOREP03_4,
                popuplayertitle: "LOTE 1 ESTAQUEO REP 03",
                interactive: true,
                title: '<img src="styles/legend/LOTE1ESTAQUEOREP03_4.png" /> LOTE 1 ESTAQUEO REP 03'
            });
var format_Estaqueosistema_5 = new ol.format.GeoJSON();
var features_Estaqueosistema_5 = format_Estaqueosistema_5.readFeatures(json_Estaqueosistema_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_Estaqueosistema_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaqueosistema_5.addFeatures(features_Estaqueosistema_5);
var lyr_Estaqueosistema_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaqueosistema_5, 
                style: style_Estaqueosistema_5,
                popuplayertitle: "Estaqueo sistema",
                interactive: true,
                title: '<img src="styles/legend/Estaqueosistema_5.png" /> Estaqueo sistema'
            });
var format_GDI05_6 = new ol.format.GeoJSON();
var features_GDI05_6 = format_GDI05_6.readFeatures(json_GDI05_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_GDI05_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GDI05_6.addFeatures(features_GDI05_6);
var lyr_GDI05_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GDI05_6, 
                style: style_GDI05_6,
                popuplayertitle: "GDI 05",
                interactive: true,
                title: '<img src="styles/legend/GDI05_6.png" /> GDI 05'
            });
var format_PostacinL108102024_7 = new ol.format.GeoJSON();
var features_PostacinL108102024_7 = format_PostacinL108102024_7.readFeatures(json_PostacinL108102024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinL108102024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinL108102024_7.addFeatures(features_PostacinL108102024_7);
var lyr_PostacinL108102024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinL108102024_7, 
                style: style_PostacinL108102024_7,
                popuplayertitle: "Postación L1 08-10-2024",
                interactive: true,
                title: '<img src="styles/legend/PostacinL108102024_7.png" /> Postación L1 08-10-2024'
            });
var format_PostacinL1Sistema5092024_8 = new ol.format.GeoJSON();
var features_PostacinL1Sistema5092024_8 = format_PostacinL1Sistema5092024_8.readFeatures(json_PostacinL1Sistema5092024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinL1Sistema5092024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinL1Sistema5092024_8.addFeatures(features_PostacinL1Sistema5092024_8);
var lyr_PostacinL1Sistema5092024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinL1Sistema5092024_8, 
                style: style_PostacinL1Sistema5092024_8,
                popuplayertitle: "Postación L1 Sistema 5-09-2024",
                interactive: true,
                title: '<img src="styles/legend/PostacinL1Sistema5092024_8.png" /> Postación L1 Sistema 5-09-2024'
            });
var format_PostacinExistenteL1_9 = new ol.format.GeoJSON();
var features_PostacinExistenteL1_9 = format_PostacinExistenteL1_9.readFeatures(json_PostacinExistenteL1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinExistenteL1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinExistenteL1_9.addFeatures(features_PostacinExistenteL1_9);
var lyr_PostacinExistenteL1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinExistenteL1_9, 
                style: style_PostacinExistenteL1_9,
                popuplayertitle: "Postación Existente L1",
                interactive: true,
                title: '<img src="styles/legend/PostacinExistenteL1_9.png" /> Postación Existente L1'
            });
var format_APL1_10 = new ol.format.GeoJSON();
var features_APL1_10 = format_APL1_10.readFeatures(json_APL1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL1_10.addFeatures(features_APL1_10);
var lyr_APL1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL1_10, 
                style: style_APL1_10,
                popuplayertitle: "AP. L1.",
                interactive: true,
                title: '<img src="styles/legend/APL1_10.png" /> AP. L1.'
            });
var format_PDL1_11 = new ol.format.GeoJSON();
var features_PDL1_11 = format_PDL1_11.readFeatures(json_PDL1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL1_11.addFeatures(features_PDL1_11);cluster_PDL1_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PDL1_11
});
var lyr_PDL1_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PDL1_11, 
                style: style_PDL1_11,
                popuplayertitle: "PD L1.",
                interactive: true,
                title: '<img src="styles/legend/PDL1_11.png" /> PD L1.'
            });
var format_MT3x185L1_12 = new ol.format.GeoJSON();
var features_MT3x185L1_12 = format_MT3x185L1_12.readFeatures(json_MT3x185L1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185L1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L1_12.addFeatures(features_MT3x185L1_12);
var lyr_MT3x185L1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L1_12, 
                style: style_MT3x185L1_12,
                popuplayertitle: "MT 3x185 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x185L1_12.png" /> MT 3x185 L1'
            });
var format_MT3x70L1_13 = new ol.format.GeoJSON();
var features_MT3x70L1_13 = format_MT3x70L1_13.readFeatures(json_MT3x70L1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L1_13.addFeatures(features_MT3x70L1_13);
var lyr_MT3x70L1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L1_13, 
                style: style_MT3x70L1_13,
                popuplayertitle: "MT 3x70 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L1_13.png" /> MT 3x70 L1'
            });
var format_MT3x35L1_14 = new ol.format.GeoJSON();
var features_MT3x35L1_14 = format_MT3x35L1_14.readFeatures(json_MT3x35L1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35L1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L1_14.addFeatures(features_MT3x35L1_14);
var lyr_MT3x35L1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L1_14, 
                style: style_MT3x35L1_14,
                popuplayertitle: "MT 3x35 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x35L1_14.png" /> MT 3x35 L1'
            });
var format_BT3x701x501x25L1_15 = new ol.format.GeoJSON();
var features_BT3x701x501x25L1_15 = format_BT3x701x501x25L1_15.readFeatures(json_BT3x701x501x25L1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25L1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L1_15.addFeatures(features_BT3x701x501x25L1_15);
var lyr_BT3x701x501x25L1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L1_15, 
                style: style_BT3x701x501x25L1_15,
                popuplayertitle: "BT 3x70+1x50+1x25 L1",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L1_15.png" /> BT 3x70+1x50+1x25 L1'
            });
var group_LOTE1 = new ol.layer.Group({
                                layers: [lyr_PostacinL108102024_7,lyr_PostacinL1Sistema5092024_8,lyr_PostacinExistenteL1_9,],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 2"});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM1"});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM2"});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU1"});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU2"});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU3"});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU5"});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU9"});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU11"});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU12"});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU13"});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU14"});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU24"});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU25"});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU28"});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N2"});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N3"});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 3"});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 4"});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 5"});
var group_Baslica = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Basílica"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 6"});
var group_Lote1 = new ol.layer.Group({
                                layers: [lyr_LOTE1REP06_1,lyr_VAU3_2,lyr_ESTAQUEIL1VILMA_3,lyr_LOTE1ESTAQUEOREP03_4,lyr_Estaqueosistema_5,lyr_GDI05_6,],
                                fold: "open",
                                title: "Lote 1"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 2"});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 3"});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 4"});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: "OpenStreetMap"});

lyr_OSMStandard_0.setVisible(true);lyr_LOTE1REP06_1.setVisible(true);lyr_VAU3_2.setVisible(true);lyr_ESTAQUEIL1VILMA_3.setVisible(true);lyr_LOTE1ESTAQUEOREP03_4.setVisible(true);lyr_Estaqueosistema_5.setVisible(true);lyr_GDI05_6.setVisible(true);lyr_PostacinL108102024_7.setVisible(true);lyr_PostacinL1Sistema5092024_8.setVisible(true);lyr_PostacinExistenteL1_9.setVisible(true);lyr_APL1_10.setVisible(true);lyr_PDL1_11.setVisible(true);lyr_MT3x185L1_12.setVisible(true);lyr_MT3x70L1_13.setVisible(true);lyr_MT3x35L1_14.setVisible(true);lyr_BT3x701x501x25L1_15.setVisible(true);
var layersList = [group_OpenStreetMap,group_Lote1,group_LOTE1,lyr_APL1_10,lyr_PDL1_11,lyr_MT3x185L1_12,lyr_MT3x70L1_13,lyr_MT3x35L1_14,lyr_BT3x701x501x25L1_15];
lyr_LOTE1REP06_1.set('fieldAliases', {'sosten': 'sosten', 'x': 'x', 'y': 'y', });
lyr_VAU3_2.set('fieldAliases', {'ALIMENTADOR': 'ALIMENTADOR', 'N° DE SOSTEN': 'N° DE SOSTEN', 'TIPO DE POSTE': 'TIPO DE POSTE', 'COORDENADA X': 'COORDENADA X', 'COORDENADA Y': 'COORDENADA Y', });
lyr_ESTAQUEIL1VILMA_3.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de': 'Numero de', 'Creado': 'Creado', 'Alimentado': 'Alimentado', 'Tramo': 'Tramo', 'Cuadrilla': 'Cuadrilla', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_LOTE1ESTAQUEOREP03_4.set('fieldAliases', {'Sosten': 'Sosten', 'ESTE': 'ESTE', 'NORTE': 'NORTE', });
lyr_Estaqueosistema_5.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Tramo': 'Tramo', 'Cuadrilla 1': 'Cuadrilla 1', 'Cambio Sosten': 'Cambio Sosten', 'Numero de Sosten': 'Numero de Sosten', 'Actualizado': 'Actualizado', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_GDI05_6.set('fieldAliases', {'Sost�n': 'Sost�n', 'ESTE': 'ESTE', 'NORTE': 'NORTE', });
lyr_PostacinL108102024_7.set('fieldAliases', {'Alimentent': 'Alimentent', 'Nro. De So': 'Nro. De So', 'Tipo/poste': 'Tipo/poste', 'Fabrica': 'Fabrica', 'X': 'X', 'Y': 'Y', });
lyr_PostacinL1Sistema5092024_8.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Tramo': 'Tramo', 'Cuadrilla 1': 'Cuadrilla 1', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Motivo': 'Motivo', 'Tipo de Poste': 'Tipo de Poste', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Autor': 'Autor', });
lyr_PostacinExistenteL1_9.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'TIPO POSTE': 'TIPO POSTE', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', 'ESTRUCTURA': 'ESTRUCTURA', 'NRO DE SOS': 'NRO DE SOS', });
lyr_APL1_10.set('fieldAliases', {'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'Contratista': 'Contratista', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', });
lyr_PDL1_11.set('fieldAliases', {'LOTE': 'LOTE', 'CONTRATISTA': 'CONTRATISTA', 'ALIMENTADOR': 'ALIMENTADOR', 'TIPO COLUMNA': 'TIPO COLUMNA', 'N° DE SOSTEN': 'N° DE SOSTEN', 'N° DE FÁBRICA': 'N° DE FÁBRICA', 'NRO ANDE': 'NRO ANDE', 'COORDENADA X': 'COORDENADA X', 'COORDENADA Y': 'COORDENADA Y', });
lyr_MT3x185L1_12.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO/FIN': 'INICIO/FIN', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'Ítem': 'Ítem', 'corte': 'corte', });
lyr_MT3x70L1_13.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'corte': 'corte', });
lyr_MT3x35L1_14.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'Ítem': 'Ítem', 'Corte': 'Corte', });
lyr_BT3x701x501x25L1_15.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Corte': 'Corte', 'ítem': 'ítem', });
lyr_LOTE1REP06_1.set('fieldImages', {'sosten': 'Range', 'x': 'Range', 'y': 'Range', });
lyr_VAU3_2.set('fieldImages', {'ALIMENTADOR': 'TextEdit', 'N° DE SOSTEN': 'Range', 'TIPO DE POSTE': 'TextEdit', 'COORDENADA X': 'Range', 'COORDENADA Y': 'Range', });
lyr_ESTAQUEIL1VILMA_3.set('fieldImages', {'#': 'TextEdit', 'Tipo': 'TextEdit', 'Numero de': 'TextEdit', 'Creado': 'TextEdit', 'Alimentado': 'TextEdit', 'Tramo': 'TextEdit', 'Cuadrilla': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_LOTE1ESTAQUEOREP03_4.set('fieldImages', {'Sosten': 'TextEdit', 'ESTE': 'Range', 'NORTE': 'Range', });
lyr_Estaqueosistema_5.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Alimentadores Lote 1': 'TextEdit', 'Tramo': 'TextEdit', 'Cuadrilla 1': 'TextEdit', 'Cambio Sosten': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Actualizado': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_GDI05_6.set('fieldImages', {'Sost�n': 'TextEdit', 'ESTE': 'Range', 'NORTE': 'Range', });
lyr_PostacinL108102024_7.set('fieldImages', {'Alimentent': 'TextEdit', 'Nro. De So': 'TextEdit', 'Tipo/poste': 'TextEdit', 'Fabrica': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PostacinL1Sistema5092024_8.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 1': 'TextEdit', 'Tramo': 'TextEdit', 'Cuadrilla 1': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Motivo': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Autor': 'TextEdit', });
lyr_PostacinExistenteL1_9.set('fieldImages', {'Nro. De So': 'TextEdit', 'TIPO POSTE': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', 'ESTRUCTURA': 'TextEdit', 'NRO DE SOS': 'TextEdit', });
lyr_APL1_10.set('fieldImages', {'Alimentador': 'TextEdit', 'Nro de Sosten': 'Range', 'Contratista': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', });
lyr_PDL1_11.set('fieldImages', {'LOTE': 'TextEdit', 'CONTRATISTA': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'TIPO COLUMNA': 'TextEdit', 'N° DE SOSTEN': 'TextEdit', 'N° DE FÁBRICA': 'Range', 'NRO ANDE': 'Range', 'COORDENADA X': 'Range', 'COORDENADA Y': 'Range', });
lyr_MT3x185L1_12.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO/FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'Ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_MT3x70L1_13.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': '', 'Ítem': '', 'corte': '', });
lyr_MT3x35L1_14.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': '', 'Ítem': '', 'Corte': '', });
lyr_BT3x701x501x25L1_15.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'Corte': 'TextEdit', 'ítem': 'TextEdit', });
lyr_LOTE1REP06_1.set('fieldLabels', {'sosten': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - always visible', });
lyr_VAU3_2.set('fieldLabels', {'ALIMENTADOR': 'header label - visible with data', 'N° DE SOSTEN': 'header label - visible with data', 'TIPO DE POSTE': 'header label - visible with data', 'COORDENADA X': 'header label - visible with data', 'COORDENADA Y': 'header label - visible with data', });
lyr_ESTAQUEIL1VILMA_3.set('fieldLabels', {'#': 'header label - visible with data', 'Tipo': 'header label - visible with data', 'Numero de': 'header label - visible with data', 'Creado': 'header label - visible with data', 'Alimentado': 'header label - visible with data', 'Tramo': 'header label - visible with data', 'Cuadrilla': 'header label - visible with data', 'Latitud': 'header label - visible with data', 'Longitud': 'header label - visible with data', });
lyr_LOTE1ESTAQUEOREP03_4.set('fieldLabels', {'Sosten': 'inline label - visible with data', 'ESTE': 'inline label - visible with data', 'NORTE': 'inline label - visible with data', });
lyr_Estaqueosistema_5.set('fieldLabels', {'#': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Alimentadores Lote 1': 'inline label - always visible', 'Tramo': 'inline label - always visible', 'Cuadrilla 1': 'inline label - always visible', 'Cambio Sosten': 'inline label - always visible', 'Numero de Sosten': 'inline label - always visible', 'Actualizado': 'inline label - always visible', 'Latitud': 'inline label - always visible', 'Longitud': 'inline label - always visible', });
lyr_GDI05_6.set('fieldLabels', {'Sost�n': 'inline label - visible with data', 'ESTE': 'inline label - visible with data', 'NORTE': 'inline label - visible with data', });
lyr_PostacinL108102024_7.set('fieldLabels', {'Alimentent': 'inline label - visible with data', 'Nro. De So': 'inline label - visible with data', 'Tipo/poste': 'inline label - visible with data', 'Fabrica': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'no label', });
lyr_PostacinL1Sistema5092024_8.set('fieldLabels', {'#': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Numero de Sosten': 'inline label - visible with data', 'Alimentadores Lote 1': 'inline label - visible with data', 'Tramo': 'inline label - visible with data', 'Cuadrilla 1': 'inline label - visible with data', 'Marca': 'inline label - visible with data', 'Número de Fábrica': 'inline label - visible with data', 'Motivo': 'inline label - visible with data', 'Tipo de Poste': 'inline label - visible with data', 'Latitud': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'Autor': 'inline label - visible with data', });
lyr_PostacinExistenteL1_9.set('fieldLabels', {'Nro. De So': 'inline label - always visible', 'TIPO POSTE': 'inline label - always visible', 'Coord X': 'inline label - always visible', 'Coord Y': 'inline label - always visible', 'ESTRUCTURA': 'inline label - always visible', 'NRO DE SOS': 'no label', });
lyr_APL1_10.set('fieldLabels', {'Alimentador': 'inline label - always visible', 'Nro de Sosten': 'inline label - always visible', 'Contratista': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Ciudad': 'inline label - always visible', 'Coordenada X': 'inline label - always visible', 'Coordenada Y': 'inline label - always visible', });
lyr_PDL1_11.set('fieldLabels', {'LOTE': 'inline label - visible with data', 'CONTRATISTA': 'inline label - visible with data', 'ALIMENTADOR': 'inline label - visible with data', 'TIPO COLUMNA': 'inline label - visible with data', 'N° DE SOSTEN': 'inline label - visible with data', 'N° DE FÁBRICA': 'inline label - visible with data', 'NRO ANDE': 'inline label - visible with data', 'COORDENADA X': 'inline label - visible with data', 'COORDENADA Y': 'inline label - visible with data', });
lyr_MT3x185L1_12.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO/FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'corte': 'inline label - always visible', });
lyr_MT3x70L1_13.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', });
lyr_MT3x35L1_14.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'Corte': 'inline label - visible with data', });
lyr_BT3x701x501x25L1_15.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'ítem': 'inline label - visible with data', });
lyr_BT3x701x501x25L1_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});