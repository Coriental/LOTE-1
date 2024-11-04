ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([431658.322695, 7197142.773679, 444540.212014, 7203649.711624]);
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
var format_PDL1_1 = new ol.format.GeoJSON();
var features_PDL1_1 = format_PDL1_1.readFeatures(json_PDL1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL1_1.addFeatures(features_PDL1_1);
var lyr_PDL1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL1_1, 
                style: style_PDL1_1,
                popuplayertitle: "PD L1.",
                interactive: true,
                title: '<img src="styles/legend/PDL1_1.png" /> PD L1.'
            });
var format_PostacinL1FICHA_2 = new ol.format.GeoJSON();
var features_PostacinL1FICHA_2 = format_PostacinL1FICHA_2.readFeatures(json_PostacinL1FICHA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinL1FICHA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinL1FICHA_2.addFeatures(features_PostacinL1FICHA_2);
var lyr_PostacinL1FICHA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinL1FICHA_2, 
                style: style_PostacinL1FICHA_2,
                popuplayertitle: "Postación L1 FICHA",
                interactive: true,
                title: '<img src="styles/legend/PostacinL1FICHA_2.png" /> Postación L1 FICHA'
            });
var format_PostacinExistenteL1PLANO_3 = new ol.format.GeoJSON();
var features_PostacinExistenteL1PLANO_3 = format_PostacinExistenteL1PLANO_3.readFeatures(json_PostacinExistenteL1PLANO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinExistenteL1PLANO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinExistenteL1PLANO_3.addFeatures(features_PostacinExistenteL1PLANO_3);
var lyr_PostacinExistenteL1PLANO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinExistenteL1PLANO_3, 
                style: style_PostacinExistenteL1PLANO_3,
                popuplayertitle: "Postación Existente L1 PLANO",
                interactive: true,
                title: '<img src="styles/legend/PostacinExistenteL1PLANO_3.png" /> Postación Existente L1 PLANO'
            });
var format_PostacinNuevaL1SISTEMA_4 = new ol.format.GeoJSON();
var features_PostacinNuevaL1SISTEMA_4 = format_PostacinNuevaL1SISTEMA_4.readFeatures(json_PostacinNuevaL1SISTEMA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinNuevaL1SISTEMA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinNuevaL1SISTEMA_4.addFeatures(features_PostacinNuevaL1SISTEMA_4);
var lyr_PostacinNuevaL1SISTEMA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinNuevaL1SISTEMA_4, 
                style: style_PostacinNuevaL1SISTEMA_4,
                popuplayertitle: "Postación Nueva L1 SISTEMA",
                interactive: true,
                title: '<img src="styles/legend/PostacinNuevaL1SISTEMA_4.png" /> Postación Nueva L1 SISTEMA'
            });
var format_PostacinExistenteSISTEMA_5 = new ol.format.GeoJSON();
var features_PostacinExistenteSISTEMA_5 = format_PostacinExistenteSISTEMA_5.readFeatures(json_PostacinExistenteSISTEMA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinExistenteSISTEMA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinExistenteSISTEMA_5.addFeatures(features_PostacinExistenteSISTEMA_5);
var lyr_PostacinExistenteSISTEMA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinExistenteSISTEMA_5, 
                style: style_PostacinExistenteSISTEMA_5,
                popuplayertitle: "Postación Existente SISTEMA",
                interactive: true,
                title: '<img src="styles/legend/PostacinExistenteSISTEMA_5.png" /> Postación Existente SISTEMA'
            });
var format_BT3x701x501x25L1_6 = new ol.format.GeoJSON();
var features_BT3x701x501x25L1_6 = format_BT3x701x501x25L1_6.readFeatures(json_BT3x701x501x25L1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25L1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L1_6.addFeatures(features_BT3x701x501x25L1_6);
var lyr_BT3x701x501x25L1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L1_6, 
                style: style_BT3x701x501x25L1_6,
                popuplayertitle: "BT 3x70+1x50+1x25 L1",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L1_6.png" /> BT 3x70+1x50+1x25 L1'
            });
var format_MT3x35L1_7 = new ol.format.GeoJSON();
var features_MT3x35L1_7 = format_MT3x35L1_7.readFeatures(json_MT3x35L1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35L1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L1_7.addFeatures(features_MT3x35L1_7);
var lyr_MT3x35L1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L1_7, 
                style: style_MT3x35L1_7,
                popuplayertitle: "MT 3x35 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x35L1_7.png" /> MT 3x35 L1'
            });
var format_MT3x70L1_8 = new ol.format.GeoJSON();
var features_MT3x70L1_8 = format_MT3x70L1_8.readFeatures(json_MT3x70L1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L1_8.addFeatures(features_MT3x70L1_8);
var lyr_MT3x70L1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L1_8, 
                style: style_MT3x70L1_8,
                popuplayertitle: "MT 3x70 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L1_8.png" /> MT 3x70 L1'
            });
var format_MT3x185L1_9 = new ol.format.GeoJSON();
var features_MT3x185L1_9 = format_MT3x185L1_9.readFeatures(json_MT3x185L1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185L1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L1_9.addFeatures(features_MT3x185L1_9);
var lyr_MT3x185L1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L1_9, 
                style: style_MT3x185L1_9,
                popuplayertitle: "MT 3x185 L1",
                interactive: true,
                title: '<img src="styles/legend/MT3x185L1_9.png" /> MT 3x185 L1'
            });
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
var group_LOTE1 = new ol.layer.Group({
                                layers: [lyr_PostacinL1FICHA_2,lyr_PostacinExistenteL1PLANO_3,lyr_PostacinNuevaL1SISTEMA_4,lyr_PostacinExistenteSISTEMA_5,],
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
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "lote 5"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_OSMStandard_0.setVisible(true);lyr_PDL1_1.setVisible(true);lyr_PostacinL1FICHA_2.setVisible(true);lyr_PostacinExistenteL1PLANO_3.setVisible(true);lyr_PostacinNuevaL1SISTEMA_4.setVisible(true);lyr_PostacinExistenteSISTEMA_5.setVisible(true);lyr_BT3x701x501x25L1_6.setVisible(true);lyr_MT3x35L1_7.setVisible(true);lyr_MT3x70L1_8.setVisible(true);lyr_MT3x185L1_9.setVisible(true);
var layersList = [group_OpenStreetMap,lyr_PDL1_1,group_LOTE1,lyr_BT3x701x501x25L1_6,lyr_MT3x35L1_7,lyr_MT3x70L1_8,lyr_MT3x185L1_9];
lyr_PDL1_1.set('fieldAliases', {'Item': 'Item', 'Certificado': 'Certificado', 'ESTADO': 'ESTADO', 'Fecha de montaje': 'Fecha de montaje', 'Alimentador': 'Alimentador', 'Contratista': 'Contratista', 'Nro de Sosten': 'Nro de Sosten', 'CANTIDAD': 'CANTIDAD', 'Sigla PD': 'Sigla PD', 'Numero': 'Numero', 'Nro de OT': 'Nro de OT', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', 'N° Fabrica': 'N° Fabrica', 'Marca': 'Marca', 'Potencia': 'Potencia', 'Descargador': 'Descargador', 'Corriente Nominal': 'Corriente Nominal', 'Seccionador MT': 'Seccionador MT', 'Fusible Cartucho MT': 'Fusible Cartucho MT', 'Seccionador BT': 'Seccionador BT', 'Fusible NH': 'Fusible NH', 'SPAT (Ohm)': 'SPAT (Ohm)', 'Fecha en servicio': 'Fecha en servicio', 'Hora': 'Hora', });
lyr_PostacinL1FICHA_2.set('fieldAliases', {'Alimentent': 'Alimentent', 'Nro. De So': 'Nro. De So', 'Tipo/poste': 'Tipo/poste', 'Fabrica': 'Fabrica', 'X': 'X', 'Y': 'Y', });
lyr_PostacinExistenteL1PLANO_3.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'TIPO POSTE': 'TIPO POSTE', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', 'ESTRUCTURA': 'ESTRUCTURA', 'NRO DE SOS': 'NRO DE SOS', });
lyr_PostacinNuevaL1SISTEMA_4.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Tramo': 'Tramo', 'Cuadrilla 1': 'Cuadrilla 1', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Motivo': 'Motivo', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Autor': 'Autor', 'Fecha de Postación': 'Fecha de Postación', 'Creado': 'Creado', });
lyr_PostacinExistenteSISTEMA_5.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Tramo': 'Tramo', 'Cuadrilla 1': 'Cuadrilla 1', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Motivo': 'Motivo', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Autor': 'Autor', 'Fecha de Postación': 'Fecha de Postación', 'Creado': 'Creado', });
lyr_BT3x701x501x25L1_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Corte': 'Corte', 'ítem': 'ítem', 'MES': 'MES', });
lyr_MT3x35L1_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'Ítem': 'Ítem', 'Corte': 'Corte', 'MES': 'MES', });
lyr_MT3x70L1_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'corte': 'corte', 'MES': 'MES', });
lyr_MT3x185L1_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO/FIN': 'INICIO/FIN', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'Ítem': 'Ítem', 'corte': 'corte', 'MES': 'MES', });
lyr_PDL1_1.set('fieldImages', {'Item': 'TextEdit', 'Certificado': 'Range', 'ESTADO': 'TextEdit', 'Fecha de montaje': 'TextEdit', 'Alimentador': 'TextEdit', 'Contratista': 'TextEdit', 'Nro de Sosten': 'TextEdit', 'CANTIDAD': 'CheckBox', 'Sigla PD': 'TextEdit', 'Numero': 'Range', 'Nro de OT': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', 'N° Ande': 'Range', 'N° Fabrica': 'Range', 'Marca': 'TextEdit', 'Potencia': 'Range', 'Descargador': 'TextEdit', 'Corriente Nominal': 'TextEdit', 'Seccionador MT': 'TextEdit', 'Fusible Cartucho MT': 'TextEdit', 'Seccionador BT': 'TextEdit', 'Fusible NH': 'TextEdit', 'SPAT (Ohm)': 'TextEdit', 'Fecha en servicio': 'TextEdit', 'Hora': 'DateTime', });
lyr_PostacinL1FICHA_2.set('fieldImages', {'Alimentent': 'TextEdit', 'Nro. De So': 'TextEdit', 'Tipo/poste': 'TextEdit', 'Fabrica': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PostacinExistenteL1PLANO_3.set('fieldImages', {'Nro. De So': 'TextEdit', 'TIPO POSTE': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', 'ESTRUCTURA': 'TextEdit', 'NRO DE SOS': 'TextEdit', });
lyr_PostacinNuevaL1SISTEMA_4.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 1': 'TextEdit', 'Tramo': 'TextEdit', 'Cuadrilla 1': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Motivo': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Autor': 'TextEdit', 'Fecha de Postación': 'TextEdit', 'Creado': 'TextEdit', });
lyr_PostacinExistenteSISTEMA_5.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'Range', 'Alimentadores Lote 1': 'TextEdit', 'Tramo': 'TextEdit', 'Cuadrilla 1': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Motivo': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Autor': 'TextEdit', 'Fecha de Postación': 'TextEdit', 'Creado': 'TextEdit', });
lyr_BT3x701x501x25L1_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'Corte': 'TextEdit', 'ítem': 'TextEdit', 'MES': 'TextEdit', });
lyr_MT3x35L1_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'Ítem': 'TextEdit', 'Corte': 'TextEdit', 'MES': 'TextEdit', });
lyr_MT3x70L1_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', 'corte': 'TextEdit', 'MES': 'TextEdit', });
lyr_MT3x185L1_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO/FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'Ítem': 'TextEdit', 'corte': 'TextEdit', 'MES': 'TextEdit', });
lyr_PDL1_1.set('fieldLabels', {'Item': 'no label', 'Certificado': 'no label', 'ESTADO': 'no label', 'Fecha de montaje': 'no label', 'Alimentador': 'no label', 'Contratista': 'no label', 'Nro de Sosten': 'no label', 'CANTIDAD': 'no label', 'Sigla PD': 'no label', 'Numero': 'no label', 'Nro de OT': 'no label', 'Dirección': 'no label', 'Ciudad': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', 'N° Fabrica': 'no label', 'Marca': 'no label', 'Potencia': 'no label', 'Descargador': 'no label', 'Corriente Nominal': 'no label', 'Seccionador MT': 'no label', 'Fusible Cartucho MT': 'no label', 'Seccionador BT': 'no label', 'Fusible NH': 'no label', 'SPAT (Ohm)': 'no label', 'Fecha en servicio': 'no label', 'Hora': 'no label', });
lyr_PostacinL1FICHA_2.set('fieldLabels', {'Alimentent': 'inline label - visible with data', 'Nro. De So': 'inline label - visible with data', 'Tipo/poste': 'inline label - visible with data', 'Fabrica': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'no label', });
lyr_PostacinExistenteL1PLANO_3.set('fieldLabels', {'Nro. De So': 'inline label - always visible', 'TIPO POSTE': 'inline label - always visible', 'Coord X': 'inline label - always visible', 'Coord Y': 'inline label - always visible', 'ESTRUCTURA': 'inline label - always visible', 'NRO DE SOS': 'no label', });
lyr_PostacinNuevaL1SISTEMA_4.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 1': 'no label', 'Tramo': 'no label', 'Cuadrilla 1': 'no label', 'Marca': 'no label', 'Número de Fábrica': 'no label', 'Motivo': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Autor': 'no label', 'Fecha de Postación': 'no label', 'Creado': 'no label', });
lyr_PostacinExistenteSISTEMA_5.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 1': 'no label', 'Tramo': 'no label', 'Cuadrilla 1': 'no label', 'Marca': 'no label', 'Número de Fábrica': 'no label', 'Motivo': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Autor': 'no label', 'Fecha de Postación': 'no label', 'Creado': 'no label', });
lyr_BT3x701x501x25L1_6.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'MES': 'no label', });
lyr_MT3x35L1_7.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'MES': 'no label', });
lyr_MT3x70L1_8.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', 'MES': 'no label', });
lyr_MT3x185L1_9.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO/FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'corte': 'inline label - always visible', 'MES': 'no label', });
lyr_MT3x185L1_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});