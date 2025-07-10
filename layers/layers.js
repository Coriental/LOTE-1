ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([434198.052843, 7200442.828965, 444223.287592, 7205747.305181]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
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
                popuplayertitle: 'Postación Existente L1 PLANO',
                interactive: true,
                title: '<img src="styles/legend/PostacinExistenteL1PLANO_2.png" /> Postación Existente L1 PLANO'
            });
var format_PostacionL1Fichas19122024_3 = new ol.format.GeoJSON();
var features_PostacionL1Fichas19122024_3 = format_PostacionL1Fichas19122024_3.readFeatures(json_PostacionL1Fichas19122024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL1Fichas19122024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL1Fichas19122024_3.addFeatures(features_PostacionL1Fichas19122024_3);
var lyr_PostacionL1Fichas19122024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL1Fichas19122024_3, 
                style: style_PostacionL1Fichas19122024_3,
                popuplayertitle: 'Postacion L1 Fichas 19-12-2024',
                interactive: true,
                title: '<img src="styles/legend/PostacionL1Fichas19122024_3.png" /> Postacion L1 Fichas 19-12-2024'
            });
var format_PostacionL1SistExist02072025_4 = new ol.format.GeoJSON();
var features_PostacionL1SistExist02072025_4 = format_PostacionL1SistExist02072025_4.readFeatures(json_PostacionL1SistExist02072025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL1SistExist02072025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL1SistExist02072025_4.addFeatures(features_PostacionL1SistExist02072025_4);
var lyr_PostacionL1SistExist02072025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL1SistExist02072025_4, 
                style: style_PostacionL1SistExist02072025_4,
                popuplayertitle: 'Postacion L1 Sist Exist 02-07-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL1SistExist02072025_4.png" /> Postacion L1 Sist Exist 02-07-2025'
            });
var format_PostacionL1SistNuevo02072025_5 = new ol.format.GeoJSON();
var features_PostacionL1SistNuevo02072025_5 = format_PostacionL1SistNuevo02072025_5.readFeatures(json_PostacionL1SistNuevo02072025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL1SistNuevo02072025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL1SistNuevo02072025_5.addFeatures(features_PostacionL1SistNuevo02072025_5);
var lyr_PostacionL1SistNuevo02072025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL1SistNuevo02072025_5, 
                style: style_PostacionL1SistNuevo02072025_5,
                popuplayertitle: 'Postacion L1 Sist Nuevo 02-07-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL1SistNuevo02072025_5.png" /> Postacion L1 Sist Nuevo 02-07-2025'
            });
var format_APL1_6 = new ol.format.GeoJSON();
var features_APL1_6 = format_APL1_6.readFeatures(json_APL1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL1_6.addFeatures(features_APL1_6);
var lyr_APL1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL1_6, 
                style: style_APL1_6,
                popuplayertitle: 'AP. L1.',
                interactive: true,
                title: '<img src="styles/legend/APL1_6.png" /> AP. L1.'
            });
var format_APL104032025_7 = new ol.format.GeoJSON();
var features_APL104032025_7 = format_APL104032025_7.readFeatures(json_APL104032025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL104032025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL104032025_7.addFeatures(features_APL104032025_7);
var lyr_APL104032025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL104032025_7, 
                style: style_APL104032025_7,
                popuplayertitle: 'AP L1 - 04-03-2025',
                interactive: true,
                title: '<img src="styles/legend/APL104032025_7.png" /> AP L1 - 04-03-2025'
            });
var format_BT3x701x501x25L1_8 = new ol.format.GeoJSON();
var features_BT3x701x501x25L1_8 = format_BT3x701x501x25L1_8.readFeatures(json_BT3x701x501x25L1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25L1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L1_8.addFeatures(features_BT3x701x501x25L1_8);
var lyr_BT3x701x501x25L1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L1_8, 
                style: style_BT3x701x501x25L1_8,
                popuplayertitle: 'BT 3x70+1x50+1x25 L1',
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L1_8.png" /> BT 3x70+1x50+1x25 L1'
            });
var format_MT3x35L1_9 = new ol.format.GeoJSON();
var features_MT3x35L1_9 = format_MT3x35L1_9.readFeatures(json_MT3x35L1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35L1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L1_9.addFeatures(features_MT3x35L1_9);
var lyr_MT3x35L1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L1_9, 
                style: style_MT3x35L1_9,
                popuplayertitle: 'MT 3x35 L1',
                interactive: true,
                title: '<img src="styles/legend/MT3x35L1_9.png" /> MT 3x35 L1'
            });
var format_MT3x70L1_10 = new ol.format.GeoJSON();
var features_MT3x70L1_10 = format_MT3x70L1_10.readFeatures(json_MT3x70L1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L1_10.addFeatures(features_MT3x70L1_10);
var lyr_MT3x70L1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L1_10, 
                style: style_MT3x70L1_10,
                popuplayertitle: 'MT 3x70 L1',
                interactive: true,
                title: '<img src="styles/legend/MT3x70L1_10.png" /> MT 3x70 L1'
            });
var format_MT3x185L1_11 = new ol.format.GeoJSON();
var features_MT3x185L1_11 = format_MT3x185L1_11.readFeatures(json_MT3x185L1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185L1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L1_11.addFeatures(features_MT3x185L1_11);
var lyr_MT3x185L1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L1_11, 
                style: style_MT3x185L1_11,
                popuplayertitle: 'MT 3x185 L1',
                interactive: true,
                title: '<img src="styles/legend/MT3x185L1_11.png" /> MT 3x185 L1'
            });
var format_PDL1_12 = new ol.format.GeoJSON();
var features_PDL1_12 = format_PDL1_12.readFeatures(json_PDL1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL1_12.addFeatures(features_PDL1_12);
var lyr_PDL1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL1_12, 
                style: style_PDL1_12,
                popuplayertitle: 'PD L1.',
                interactive: true,
                title: '<img src="styles/legend/PDL1_12.png" /> PD L1.'
            });
var format_PDL1Sist02072025_13 = new ol.format.GeoJSON();
var features_PDL1Sist02072025_13 = format_PDL1Sist02072025_13.readFeatures(json_PDL1Sist02072025_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL1Sist02072025_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL1Sist02072025_13.addFeatures(features_PDL1Sist02072025_13);
var lyr_PDL1Sist02072025_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL1Sist02072025_13, 
                style: style_PDL1Sist02072025_13,
                popuplayertitle: 'PD L1 Sist 02-07-2025',
                interactive: true,
                title: '<img src="styles/legend/PDL1Sist02072025_13.png" /> PD L1 Sist 02-07-2025'
            });
var group_Lote1 = new ol.layer.Group({
                                layers: [lyr_APL1_6,lyr_APL104032025_7,],
                                fold: 'open',
                                title: 'Lote 1'});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 2'});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 3'});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 4'});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 5'});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 6'});
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PRIORITARIO'});
var group_Lote7 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 7'});
var group_Lote8 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 8'});
var group_Lote9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 9'});
var group_LOTE1 = new ol.layer.Group({
                                layers: [lyr_PostacinExistenteL1PLANO_2,lyr_PostacionL1Fichas19122024_3,lyr_PostacionL1SistExist02072025_4,lyr_PostacionL1SistNuevo02072025_5,],
                                fold: 'close',
                                title: 'LOTE 1'});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 2'});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM1'});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM2'});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU1'});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU2'});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU3'});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU5'});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU9'});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU11'});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU12'});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU13'});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'VAU14'});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU24'});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU25'});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU28'});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N2'});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N3'});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 3'});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 4'});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 5'});
var group_Baslica = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Basílica'});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 6'});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote2'});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'lote 5'});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OpenStreetMap'});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MPAA DE UBICACÓN'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PostacinExistenteL1PLANO_2.setVisible(true);lyr_PostacionL1Fichas19122024_3.setVisible(true);lyr_PostacionL1SistExist02072025_4.setVisible(true);lyr_PostacionL1SistNuevo02072025_5.setVisible(true);lyr_APL1_6.setVisible(true);lyr_APL104032025_7.setVisible(true);lyr_BT3x701x501x25L1_8.setVisible(true);lyr_MT3x35L1_9.setVisible(true);lyr_MT3x70L1_10.setVisible(true);lyr_MT3x185L1_11.setVisible(true);lyr_PDL1_12.setVisible(true);lyr_PDL1Sist02072025_13.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_LOTE1,group_Lote1,lyr_BT3x701x501x25L1_8,lyr_MT3x35L1_9,lyr_MT3x70L1_10,lyr_MT3x185L1_11,lyr_PDL1_12,lyr_PDL1Sist02072025_13];
lyr_PostacinExistenteL1PLANO_2.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'TIPO POSTE': 'TIPO POSTE', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', 'ESTRUCTURA': 'ESTRUCTURA', 'NRO DE SOS': 'NRO DE SOS', });
lyr_PostacionL1Fichas19122024_3.set('fieldAliases', {'Alimentent': 'Alimentent', 'Nro. De So': 'Nro. De So', 'Tipo/poste': 'Tipo/poste', 'Fabrica': 'Fabrica', 'Coorde. X': 'Coorde. X', 'coorde. Y': 'coorde. Y', });
lyr_PostacionL1SistExist02072025_4.set('fieldAliases', {'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionL1SistNuevo02072025_5.set('fieldAliases', {'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_APL1_6.set('fieldAliases', {'Item': 'Item', 'Certificado': 'Certificado', 'Fecha': 'Fecha', 'Cantidad': 'Cantidad', 'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'Contratista': 'Contratista', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'PROPUESTO POR': 'PROPUESTO POR', });
lyr_APL104032025_7.set('fieldAliases', {'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Numero de Sosten': 'Numero de Sosten', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_BT3x701x501x25L1_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Corte': 'Corte', 'ítem': 'ítem', 'MES': 'MES', });
lyr_MT3x35L1_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'Ítem': 'Ítem', 'Corte': 'Corte', 'MES': 'MES', });
lyr_MT3x70L1_10.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'Ítem': 'Ítem', 'corte': 'corte', 'MES': 'MES', });
lyr_MT3x185L1_11.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO/FIN': 'INICIO/FIN', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'Ítem': 'Ítem', 'corte': 'corte', 'MES': 'MES', });
lyr_PDL1_12.set('fieldAliases', {'Item': 'Item', 'Certificado': 'Certificado', 'ESTADO': 'ESTADO', 'Fecha de montaje': 'Fecha de montaje', 'Alimentador': 'Alimentador', 'Contratista': 'Contratista', 'Nro de Sosten': 'Nro de Sosten', 'CANTIDAD': 'CANTIDAD', 'Sigla PD': 'Sigla PD', 'Numero': 'Numero', 'Nro de OT': 'Nro de OT', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', 'N° Fabrica': 'N° Fabrica', 'Marca': 'Marca', 'Potencia': 'Potencia', 'Descargador': 'Descargador', 'Corriente Nominal': 'Corriente Nominal', 'Seccionador MT': 'Seccionador MT', 'Fusible Cartucho MT': 'Fusible Cartucho MT', 'Seccionador BT': 'Seccionador BT', 'Fusible NH': 'Fusible NH', 'SPAT (Ohm)': 'SPAT (Ohm)', 'Fecha en servicio': 'Fecha en servicio', 'Hora': 'Hora', });
lyr_PDL1Sist02072025_13.set('fieldAliases', {'Tipo de Poste': 'Tipo de Poste', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 1': 'Alimentadores Lote 1', 'Nro de Fabrica del trafo': 'Nro de Fabrica del trafo', 'N�ANDE': 'N�ANDE', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacinExistenteL1PLANO_2.set('fieldImages', {'Nro. De So': 'TextEdit', 'TIPO POSTE': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', 'ESTRUCTURA': 'TextEdit', 'NRO DE SOS': 'TextEdit', });
lyr_PostacionL1Fichas19122024_3.set('fieldImages', {'Alimentent': 'TextEdit', 'Nro. De So': 'TextEdit', 'Tipo/poste': 'TextEdit', 'Fabrica': 'Range', 'Coorde. X': 'Range', 'coorde. Y': 'Range', });
lyr_PostacionL1SistExist02072025_4.set('fieldImages', {'Alimentadores Lote 1': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionL1SistNuevo02072025_5.set('fieldImages', {'Alimentadores Lote 1': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_APL1_6.set('fieldImages', {'Item': 'TextEdit', 'Certificado': 'Range', 'Fecha': 'TextEdit', 'Cantidad': 'CheckBox', 'Alimentador': 'TextEdit', 'Nro de Sosten': 'Range', 'Contratista': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', 'PROPUESTO POR': 'TextEdit', });
lyr_APL104032025_7.set('fieldImages', {'Alimentadores Lote 1': 'TextEdit', 'Numero de Sosten': 'Range', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_BT3x701x501x25L1_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'Corte': 'TextEdit', 'ítem': 'TextEdit', 'MES': 'TextEdit', });
lyr_MT3x35L1_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'Ítem': 'TextEdit', 'Corte': 'TextEdit', 'MES': 'TextEdit', });
lyr_MT3x70L1_10.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'Ítem': 'TextEdit', 'corte': 'TextEdit', 'MES': 'TextEdit', });
lyr_MT3x185L1_11.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO/FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'Ítem': 'TextEdit', 'corte': 'TextEdit', 'MES': 'TextEdit', });
lyr_PDL1_12.set('fieldImages', {'Item': 'TextEdit', 'Certificado': 'Range', 'ESTADO': 'TextEdit', 'Fecha de montaje': 'TextEdit', 'Alimentador': 'TextEdit', 'Contratista': 'TextEdit', 'Nro de Sosten': 'TextEdit', 'CANTIDAD': 'CheckBox', 'Sigla PD': 'TextEdit', 'Numero': 'Range', 'Nro de OT': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', 'N° Ande': 'Range', 'N° Fabrica': 'Range', 'Marca': 'TextEdit', 'Potencia': 'Range', 'Descargador': 'TextEdit', 'Corriente Nominal': 'TextEdit', 'Seccionador MT': 'TextEdit', 'Fusible Cartucho MT': 'TextEdit', 'Seccionador BT': 'TextEdit', 'Fusible NH': 'TextEdit', 'SPAT (Ohm)': 'TextEdit', 'Fecha en servicio': 'TextEdit', 'Hora': 'DateTime', });
lyr_PDL1Sist02072025_13.set('fieldImages', {'Tipo de Poste': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 1': 'TextEdit', 'Nro de Fabrica del trafo': 'Range', 'N�ANDE': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacinExistenteL1PLANO_2.set('fieldLabels', {'Nro. De So': 'inline label - always visible', 'TIPO POSTE': 'inline label - always visible', 'Coord X': 'inline label - always visible', 'Coord Y': 'inline label - always visible', 'ESTRUCTURA': 'inline label - always visible', 'NRO DE SOS': 'no label', });
lyr_PostacionL1Fichas19122024_3.set('fieldLabels', {'Alimentent': 'no label', 'Nro. De So': 'no label', 'Tipo/poste': 'no label', 'Fabrica': 'no label', 'Coorde. X': 'no label', 'coorde. Y': 'no label', });
lyr_PostacionL1SistExist02072025_4.set('fieldLabels', {'Alimentadores Lote 1': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionL1SistNuevo02072025_5.set('fieldLabels', {'Alimentadores Lote 1': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_APL1_6.set('fieldLabels', {'Item': 'no label', 'Certificado': 'no label', 'Fecha': 'no label', 'Cantidad': 'no label', 'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'Contratista': 'no label', 'Dirección': 'no label', 'Ciudad': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'PROPUESTO POR': 'no label', });
lyr_APL104032025_7.set('fieldLabels', {'Alimentadores Lote 1': 'no label', 'Numero de Sosten': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_BT3x701x501x25L1_8.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'MES': 'inline label - visible with data', });
lyr_MT3x35L1_9.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'MES': 'inline label - visible with data', });
lyr_MT3x70L1_10.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', 'MES': 'inline label - visible with data', });
lyr_MT3x185L1_11.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO/FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'corte': 'inline label - always visible', 'MES': 'inline label - always visible', });
lyr_PDL1_12.set('fieldLabels', {'Item': 'no label', 'Certificado': 'no label', 'ESTADO': 'no label', 'Fecha de montaje': 'no label', 'Alimentador': 'no label', 'Contratista': 'no label', 'Nro de Sosten': 'no label', 'CANTIDAD': 'no label', 'Sigla PD': 'no label', 'Numero': 'no label', 'Nro de OT': 'no label', 'Dirección': 'no label', 'Ciudad': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', 'N° Fabrica': 'no label', 'Marca': 'no label', 'Potencia': 'no label', 'Descargador': 'no label', 'Corriente Nominal': 'no label', 'Seccionador MT': 'no label', 'Fusible Cartucho MT': 'no label', 'Seccionador BT': 'no label', 'Fusible NH': 'no label', 'SPAT (Ohm)': 'no label', 'Fecha en servicio': 'no label', 'Hora': 'no label', });
lyr_PDL1Sist02072025_13.set('fieldLabels', {'Tipo de Poste': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 1': 'no label', 'Nro de Fabrica del trafo': 'no label', 'N�ANDE': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PDL1Sist02072025_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});