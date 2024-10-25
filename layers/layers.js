ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([432090.162898, 7197162.634023, 442067.032850, 7204428.486697]);
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
var format_PostacinL1FICHA_1 = new ol.format.GeoJSON();
var features_PostacinL1FICHA_1 = format_PostacinL1FICHA_1.readFeatures(json_PostacinL1FICHA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinL1FICHA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinL1FICHA_1.addFeatures(features_PostacinL1FICHA_1);
var lyr_PostacinL1FICHA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinL1FICHA_1, 
                style: style_PostacinL1FICHA_1,
                popuplayertitle: "Postación L1 FICHA",
                interactive: true,
                title: '<img src="styles/legend/PostacinL1FICHA_1.png" /> Postación L1 FICHA'
            });
var format_PostacinExistenteL1PLANO_2 = new ol.format.GeoJSON();
var features_PostacinExistenteL1PLANO_2 = format_PostacinExistenteL1PLANO_2.readFeatures(json_PostacinExistenteL1PLANO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinExistenteL1PLANO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinExistenteL1PLANO_2.addFeatures(features_PostacinExistenteL1PLANO_2);
var lyr_PostacinExistenteL1PLANO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinExistenteL1PLANO_2, 
                style: style_PostacinExistenteL1PLANO_2,
                popuplayertitle: "Postación Existente L1 PLANO",
                interactive: true,
                title: '<img src="styles/legend/PostacinExistenteL1PLANO_2.png" /> Postación Existente L1 PLANO'
            });
var format_PostacinNuevaSistema_3 = new ol.format.GeoJSON();
var features_PostacinNuevaSistema_3 = format_PostacinNuevaSistema_3.readFeatures(json_PostacinNuevaSistema_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinNuevaSistema_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinNuevaSistema_3.addFeatures(features_PostacinNuevaSistema_3);
var lyr_PostacinNuevaSistema_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinNuevaSistema_3, 
                style: style_PostacinNuevaSistema_3,
                popuplayertitle: "Postación  Nueva Sistema",
                interactive: true,
                title: '<img src="styles/legend/PostacinNuevaSistema_3.png" /> Postación  Nueva Sistema'
            });
var format_PostacinExistenteL1SIS_4 = new ol.format.GeoJSON();
var features_PostacinExistenteL1SIS_4 = format_PostacinExistenteL1SIS_4.readFeatures(json_PostacinExistenteL1SIS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinExistenteL1SIS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinExistenteL1SIS_4.addFeatures(features_PostacinExistenteL1SIS_4);
var lyr_PostacinExistenteL1SIS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinExistenteL1SIS_4, 
                style: style_PostacinExistenteL1SIS_4,
                popuplayertitle: "Postación Existente L1 SIS.",
                interactive: true,
                title: '<img src="styles/legend/PostacinExistenteL1SIS_4.png" /> Postación Existente L1 SIS.'
            });
var format_APL1_5 = new ol.format.GeoJSON();
var features_APL1_5 = format_APL1_5.readFeatures(json_APL1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL1_5.addFeatures(features_APL1_5);
var lyr_APL1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL1_5, 
                style: style_APL1_5,
                popuplayertitle: "AP. L1.",
                interactive: true,
                title: '<img src="styles/legend/APL1_5.png" /> AP. L1.'
            });
var format_PDL1_6 = new ol.format.GeoJSON();
var features_PDL1_6 = format_PDL1_6.readFeatures(json_PDL1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL1_6.addFeatures(features_PDL1_6);cluster_PDL1_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PDL1_6
});
var lyr_PDL1_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PDL1_6, 
                style: style_PDL1_6,
                popuplayertitle: "PD L1.",
                interactive: true,
                title: '<img src="styles/legend/PDL1_6.png" /> PD L1.'
            });
var format_BT3x701x501x25L1_7 = new ol.format.GeoJSON();
var features_BT3x701x501x25L1_7 = format_BT3x701x501x25L1_7.readFeatures(json_BT3x701x501x25L1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25L1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L1_7.addFeatures(features_BT3x701x501x25L1_7);
var lyr_BT3x701x501x25L1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L1_7, 
                style: style_BT3x701x501x25L1_7,
                popuplayertitle: "BT 3x70+1x50+1x25 L1",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L1_7.png" /> BT 3x70+1x50+1x25 L1'
            });
var format_MT3x185L1_8 = new ol.format.GeoJSON();
var features_MT3x185L1_8 = format_MT3x185L1_8.readFeatures(json_MT3x185L1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185L1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L1_8.addFeatures(features_MT3x185L1_8);
var lyr_MT3x185L1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L1_8, 
                style: style_MT3x185L1_8,
                popuplayertitle: "MT 3x185 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x185L1_8.png" /> MT 3x185 L1'
            });
var format_MT3x70L1_9 = new ol.format.GeoJSON();
var features_MT3x70L1_9 = format_MT3x70L1_9.readFeatures(json_MT3x70L1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L1_9.addFeatures(features_MT3x70L1_9);
var lyr_MT3x70L1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L1_9, 
                style: style_MT3x70L1_9,
                popuplayertitle: "MT 3x70 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L1_9.png" /> MT 3x70 L1'
            });
var format_MT3x35L1_10 = new ol.format.GeoJSON();
var features_MT3x35L1_10 = format_MT3x35L1_10.readFeatures(json_MT3x35L1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35L1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L1_10.addFeatures(features_MT3x35L1_10);
var lyr_MT3x35L1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L1_10, 
                style: style_MT3x35L1_10,
                popuplayertitle: "MT 3x35 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x35L1_10.png" /> MT 3x35 L1'
            });
var group_LOTE1 = new ol.layer.Group({
                                layers: [lyr_PostacinL1FICHA_1,lyr_PostacinExistenteL1PLANO_2,lyr_PostacinNuevaSistema_3,lyr_PostacinExistenteL1SIS_4,],
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
                                layers: [],
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
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_OSMStandard_0.setVisible(true);lyr_PostacinL1FICHA_1.setVisible(true);lyr_PostacinExistenteL1PLANO_2.setVisible(true);lyr_PostacinNuevaSistema_3.setVisible(true);lyr_PostacinExistenteL1SIS_4.setVisible(true);lyr_APL1_5.setVisible(true);lyr_PDL1_6.setVisible(true);lyr_BT3x701x501x25L1_7.setVisible(true);lyr_MT3x185L1_8.setVisible(true);lyr_MT3x70L1_9.setVisible(true);lyr_MT3x35L1_10.setVisible(true);
var layersList = [group_OpenStreetMap,group_LOTE1,lyr_APL1_5,lyr_PDL1_6,lyr_BT3x701x501x25L1_7,lyr_MT3x185L1_8,lyr_MT3x70L1_9,lyr_MT3x35L1_10];
lyr_PostacinL1FICHA_1.set('fieldAliases', {'Alimentent': 'Alimentent', 'Nro. De So': 'Nro. De So', 'Tipo/poste': 'Tipo/poste', 'Fabrica': 'Fabrica', 'X': 'X', 'Y': 'Y', });
lyr_PostacinExistenteL1PLANO_2.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'TIPO POSTE': 'TIPO POSTE', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', 'ESTRUCTURA': 'ESTRUCTURA', 'NRO DE SOS': 'NRO DE SOS', });
lyr_PostacinNuevaSistema_3.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de': 'Numero de', 'Alimentado': 'Alimentado', 'Tramo': 'Tramo', 'Cuadrilla': 'Cuadrilla', 'Marca': 'Marca', 'Número de': 'Número de', 'Motivo': 'Motivo', 'Poste': 'Poste', 'Tipo de Po': 'Tipo de Po', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Autor': 'Autor', 'Fecha de P': 'Fecha de P', 'Creado': 'Creado', });
lyr_PostacinExistenteL1SIS_4.set('fieldAliases', {'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Tramo': 'Tramo', 'Cuadrilla 1': 'Cuadrilla 1', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Motivo': 'Motivo', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Autor': 'Autor', 'Fecha de Postación': 'Fecha de Postación', 'Creado': 'Creado', });
lyr_APL1_5.set('fieldAliases', {'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'Contratista': 'Contratista', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', });
lyr_PDL1_6.set('fieldAliases', {'LOTE': 'LOTE', 'CONTRATISTA': 'CONTRATISTA', 'ALIMENTADOR': 'ALIMENTADOR', 'TIPO COLUMNA': 'TIPO COLUMNA', 'N° DE SOSTEN': 'N° DE SOSTEN', 'N° DE FÁBRICA': 'N° DE FÁBRICA', 'NRO ANDE': 'NRO ANDE', 'COORDENADA X': 'COORDENADA X', 'COORDENADA Y': 'COORDENADA Y', });
lyr_BT3x701x501x25L1_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Corte': 'Corte', 'ítem': 'ítem', 'MES': 'MES', });
lyr_MT3x185L1_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO/FIN': 'INICIO/FIN', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'Ítem': 'Ítem', 'corte': 'corte', 'MES': 'MES', });
lyr_MT3x70L1_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'corte': 'corte', 'MES': 'MES', });
lyr_MT3x35L1_10.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'Ítem': 'Ítem', 'Corte': 'Corte', 'MES': 'MES', });
lyr_PostacinL1FICHA_1.set('fieldImages', {'Alimentent': 'TextEdit', 'Nro. De So': 'TextEdit', 'Tipo/poste': 'TextEdit', 'Fabrica': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PostacinExistenteL1PLANO_2.set('fieldImages', {'Nro. De So': 'TextEdit', 'TIPO POSTE': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', 'ESTRUCTURA': 'TextEdit', 'NRO DE SOS': 'TextEdit', });
lyr_PostacinNuevaSistema_3.set('fieldImages', {'#': 'TextEdit', 'Tipo': 'TextEdit', 'Numero de': 'TextEdit', 'Alimentado': 'TextEdit', 'Tramo': 'TextEdit', 'Cuadrilla': 'TextEdit', 'Marca': 'TextEdit', 'Número de': 'TextEdit', 'Motivo': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Po': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Autor': 'TextEdit', 'Fecha de P': 'TextEdit', 'Creado': 'TextEdit', });
lyr_PostacinExistenteL1SIS_4.set('fieldImages', {'Tipo': 'TextEdit', 'Numero de Sosten': 'Range', 'Alimentadores Lote 1': 'TextEdit', 'Tramo': 'TextEdit', 'Cuadrilla 1': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Motivo': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Autor': 'TextEdit', 'Fecha de Postación': 'TextEdit', 'Creado': 'TextEdit', });
lyr_APL1_5.set('fieldImages', {'Alimentador': 'TextEdit', 'Nro de Sosten': 'Range', 'Contratista': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', });
lyr_PDL1_6.set('fieldImages', {'LOTE': 'TextEdit', 'CONTRATISTA': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'TIPO COLUMNA': 'TextEdit', 'N° DE SOSTEN': 'TextEdit', 'N° DE FÁBRICA': 'Range', 'NRO ANDE': 'Range', 'COORDENADA X': 'Range', 'COORDENADA Y': 'Range', });
lyr_BT3x701x501x25L1_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'Corte': 'TextEdit', 'ítem': 'TextEdit', 'MES': 'TextEdit', });
lyr_MT3x185L1_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO/FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'Ítem': 'TextEdit', 'corte': 'TextEdit', 'MES': 'TextEdit', });
lyr_MT3x70L1_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', 'corte': 'TextEdit', 'MES': 'TextEdit', });
lyr_MT3x35L1_10.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'Ítem': 'TextEdit', 'Corte': 'TextEdit', 'MES': 'TextEdit', });
lyr_PostacinL1FICHA_1.set('fieldLabels', {'Alimentent': 'inline label - visible with data', 'Nro. De So': 'inline label - visible with data', 'Tipo/poste': 'inline label - visible with data', 'Fabrica': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'no label', });
lyr_PostacinExistenteL1PLANO_2.set('fieldLabels', {'Nro. De So': 'inline label - always visible', 'TIPO POSTE': 'inline label - always visible', 'Coord X': 'inline label - always visible', 'Coord Y': 'inline label - always visible', 'ESTRUCTURA': 'inline label - always visible', 'NRO DE SOS': 'no label', });
lyr_PostacinNuevaSistema_3.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de': 'no label', 'Alimentado': 'no label', 'Tramo': 'no label', 'Cuadrilla': 'no label', 'Marca': 'no label', 'Número de': 'no label', 'Motivo': 'no label', 'Poste': 'no label', 'Tipo de Po': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Autor': 'no label', 'Fecha de P': 'no label', 'Creado': 'no label', });
lyr_PostacinExistenteL1SIS_4.set('fieldLabels', {'Tipo': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 1': 'no label', 'Tramo': 'no label', 'Cuadrilla 1': 'no label', 'Marca': 'no label', 'Número de Fábrica': 'no label', 'Motivo': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Autor': 'no label', 'Fecha de Postación': 'no label', 'Creado': 'no label', });
lyr_APL1_5.set('fieldLabels', {'Alimentador': 'inline label - always visible', 'Nro de Sosten': 'inline label - always visible', 'Contratista': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Ciudad': 'inline label - always visible', 'Coordenada X': 'inline label - always visible', 'Coordenada Y': 'inline label - always visible', });
lyr_PDL1_6.set('fieldLabels', {'LOTE': 'inline label - visible with data', 'CONTRATISTA': 'inline label - visible with data', 'ALIMENTADOR': 'inline label - visible with data', 'TIPO COLUMNA': 'inline label - visible with data', 'N° DE SOSTEN': 'inline label - visible with data', 'N° DE FÁBRICA': 'inline label - visible with data', 'NRO ANDE': 'inline label - visible with data', 'COORDENADA X': 'inline label - visible with data', 'COORDENADA Y': 'inline label - visible with data', });
lyr_BT3x701x501x25L1_7.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'MES': 'no label', });
lyr_MT3x185L1_8.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO/FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'corte': 'inline label - always visible', 'MES': 'no label', });
lyr_MT3x70L1_9.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', 'MES': 'no label', });
lyr_MT3x35L1_10.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'MES': 'no label', });
lyr_MT3x35L1_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});