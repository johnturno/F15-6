var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SecondaryLine_1 = new ol.format.GeoJSON();
var features_SecondaryLine_1 = format_SecondaryLine_1.readFeatures(json_SecondaryLine_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecondaryLine_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecondaryLine_1.addFeatures(features_SecondaryLine_1);
var lyr_SecondaryLine_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecondaryLine_1, 
                style: style_SecondaryLine_1,
                popuplayertitle: 'SecondaryLine',
                interactive: false,
    title: 'SecondaryLine<br />\
    <img src="styles/legend/SecondaryLine_1_0.png" /> ABCN<br />\
    <img src="styles/legend/SecondaryLine_1_1.png" /> AN<br />\
    <img src="styles/legend/SecondaryLine_1_2.png" /> BN<br />\
    <img src="styles/legend/SecondaryLine_1_3.png" /> CN<br />\
    <img src="styles/legend/SecondaryLine_1_4.png" /> UE<br />\
    <img src="styles/legend/SecondaryLine_1_5.png" /> <br />' });
var format_PrimaryLineOverhead_2 = new ol.format.GeoJSON();
var features_PrimaryLineOverhead_2 = format_PrimaryLineOverhead_2.readFeatures(json_PrimaryLineOverhead_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimaryLineOverhead_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimaryLineOverhead_2.addFeatures(features_PrimaryLineOverhead_2);
var lyr_PrimaryLineOverhead_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimaryLineOverhead_2, 
                style: style_PrimaryLineOverhead_2,
                popuplayertitle: 'PrimaryLineOverhead',
                interactive: false,
    title: 'PrimaryLineOverhead<br />\
    <img src="styles/legend/PrimaryLineOverhead_2_0.png" /> ABCN<br />\
    <img src="styles/legend/PrimaryLineOverhead_2_1.png" /> ABN<br />\
    <img src="styles/legend/PrimaryLineOverhead_2_2.png" /> ACN<br />\
    <img src="styles/legend/PrimaryLineOverhead_2_3.png" /> AN<br />\
    <img src="styles/legend/PrimaryLineOverhead_2_4.png" /> BCN<br />\
    <img src="styles/legend/PrimaryLineOverhead_2_5.png" /> BN<br />\
    <img src="styles/legend/PrimaryLineOverhead_2_6.png" /> CAN<br />\
    <img src="styles/legend/PrimaryLineOverhead_2_7.png" /> CN<br />\
    <img src="styles/legend/PrimaryLineOverhead_2_8.png" /> <br />' });
var format_Substation_3 = new ol.format.GeoJSON();
var features_Substation_3 = format_Substation_3.readFeatures(json_Substation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Substation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Substation_3.addFeatures(features_Substation_3);
var lyr_Substation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Substation_3, 
                style: style_Substation_3,
                popuplayertitle: 'Substation',
                interactive: false,
                title: '<img src="styles/legend/Substation_3.png" /> Substation'
            });
var group_QGIS = new ol.layer.Group({
                                layers: [lyr_SecondaryLine_1,lyr_PrimaryLineOverhead_2,lyr_Substation_3,],
                                fold: 'open',
                                title: 'QGIS'});
var group_Maps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'close',
                                title: 'Maps'});

lyr_GoogleSatellite_0.setVisible(true);lyr_SecondaryLine_1.setVisible(true);lyr_PrimaryLineOverhead_2.setVisible(true);lyr_Substation_3.setVisible(true);
var layersList = [group_Maps,group_QGIS];
lyr_SecondaryLine_1.set('fieldAliases', {'qgs_fid': 'qgs_fid', 'Feeder': 'Feeder', 'Substation': 'Substation', 'No': 'No', 'SecondaryType': 'SecondaryType', 'FromPoleNoIDNo': 'FromPoleNoIDNo', 'PolesInBetween': 'PolesInBetween', 'ToPoleNoIDNo': 'ToPoleNoIDNo', 'LineCode': 'LineCode', 'SecondaryDistributionLineID': 'SecondaryDistributionLineID', 'FromBusID': 'FromBusID', 'ToBusID': 'ToBusID', 'Phasing': 'Phasing', 'InstallationType': 'InstallationType', 'Length': 'Length', 'ConductorType': 'ConductorType', 'ConductorSize': 'ConductorSize', 'UnitC': 'UnitC', 'StrandsC': 'StrandsC', 'CircuitCode': 'CircuitCode', 'Lat1': 'Lat1', 'Lon1': 'Lon1', 'Lat2': 'Lat2', 'Lon2': 'Lon2', 'FeederIDR': 'FeederIDR', });
lyr_PrimaryLineOverhead_2.set('fieldAliases', {'qgs_fid': 'qgs_fid', 'Feeder': 'Feeder', 'Substation': 'Substation', 'No': 'No', 'FromPoleNo': 'FromPoleNo', 'PoleInBetween': 'PoleInBetween', 'ToPoleNo': 'ToPoleNo', 'CircuitLateralName': 'CircuitLateralName', 'PrimaryDistributionLineSegmentID': 'PrimaryDistributionLineSegmentID', 'FromBusID': 'FromBusID', 'ToBusID': 'ToBusID', 'Phasing': 'Phasing', 'Configuration': 'Configuration', 'SystemGroundingType': 'SystemGroundingType', 'Length': 'Length', 'ConductorType': 'ConductorType', 'ConductorSize': 'ConductorSize', 'UnitC': 'UnitC', 'StrandsC': 'StrandsC', 'NeutralWireType': 'NeutralWireType', 'NeutralWireSize': 'NeutralWireSize', 'UnitNW': 'UnitNW', 'StrandsNW': 'StrandsNW', 'SpacingD12': 'SpacingD12', 'SpacingD23': 'SpacingD23', 'SpacingD13': 'SpacingD13', 'SpacingD1n': 'SpacingD1n', 'SpacingD2n': 'SpacingD2n', 'SpacingD3n': 'SpacingD3n', 'SpacingDC1C2': 'SpacingDC1C2', 'HeightH1': 'HeightH1', 'HeightH2': 'HeightH2', 'HeightH3': 'HeightH3', 'HeightHn': 'HeightHn', 'EarthResistivity': 'EarthResistivity', 'AssemblyType': 'AssemblyType', 'EquivalentAssemblyType': 'EquivalentAssemblyType', 'CircuitCode': 'CircuitCode', 'Lat1': 'Lat1', 'Lon1': 'Lon1', 'Lat2': 'Lat2', 'Lon2': 'Lon2', 'Municipality': 'Municipality', 'FeederIDR': 'FeederIDR', });
lyr_Substation_3.set('fieldAliases', {'qgs_fid': 'qgs_fid', 'name': 'name', 'type': 'type', 'descriptio': 'descriptio', 'address': 'address', 'capacity': 'capacity', 'lat': 'lat', 'lon': 'lon', 'serialno': 'serialno', });
lyr_SecondaryLine_1.set('fieldImages', {'qgs_fid': 'TextEdit', 'Feeder': 'TextEdit', 'Substation': 'TextEdit', 'No': 'TextEdit', 'SecondaryType': 'TextEdit', 'FromPoleNoIDNo': 'TextEdit', 'PolesInBetween': 'TextEdit', 'ToPoleNoIDNo': 'TextEdit', 'LineCode': 'TextEdit', 'SecondaryDistributionLineID': 'TextEdit', 'FromBusID': 'TextEdit', 'ToBusID': 'TextEdit', 'Phasing': 'TextEdit', 'InstallationType': 'TextEdit', 'Length': 'TextEdit', 'ConductorType': 'TextEdit', 'ConductorSize': 'TextEdit', 'UnitC': 'TextEdit', 'StrandsC': 'TextEdit', 'CircuitCode': 'TextEdit', 'Lat1': 'TextEdit', 'Lon1': 'TextEdit', 'Lat2': 'TextEdit', 'Lon2': 'TextEdit', 'FeederIDR': 'TextEdit', });
lyr_PrimaryLineOverhead_2.set('fieldImages', {'qgs_fid': 'TextEdit', 'Feeder': 'TextEdit', 'Substation': 'TextEdit', 'No': 'TextEdit', 'FromPoleNo': 'TextEdit', 'PoleInBetween': 'TextEdit', 'ToPoleNo': 'TextEdit', 'CircuitLateralName': 'TextEdit', 'PrimaryDistributionLineSegmentID': 'TextEdit', 'FromBusID': 'TextEdit', 'ToBusID': 'TextEdit', 'Phasing': 'TextEdit', 'Configuration': 'TextEdit', 'SystemGroundingType': 'TextEdit', 'Length': 'TextEdit', 'ConductorType': 'TextEdit', 'ConductorSize': 'TextEdit', 'UnitC': 'TextEdit', 'StrandsC': 'TextEdit', 'NeutralWireType': 'TextEdit', 'NeutralWireSize': 'TextEdit', 'UnitNW': 'TextEdit', 'StrandsNW': 'TextEdit', 'SpacingD12': 'TextEdit', 'SpacingD23': 'TextEdit', 'SpacingD13': 'TextEdit', 'SpacingD1n': 'TextEdit', 'SpacingD2n': 'TextEdit', 'SpacingD3n': 'TextEdit', 'SpacingDC1C2': 'TextEdit', 'HeightH1': 'TextEdit', 'HeightH2': 'TextEdit', 'HeightH3': 'TextEdit', 'HeightHn': 'TextEdit', 'EarthResistivity': 'TextEdit', 'AssemblyType': 'TextEdit', 'EquivalentAssemblyType': 'TextEdit', 'CircuitCode': 'TextEdit', 'Lat1': 'TextEdit', 'Lon1': 'TextEdit', 'Lat2': 'TextEdit', 'Lon2': 'TextEdit', 'Municipality': 'TextEdit', 'FeederIDR': 'TextEdit', });
lyr_Substation_3.set('fieldImages', {'qgs_fid': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'descriptio': 'TextEdit', 'address': 'TextEdit', 'capacity': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'serialno': 'TextEdit', });
lyr_SecondaryLine_1.set('fieldLabels', {'qgs_fid': 'hidden field', 'Feeder': 'header label - visible with data', 'Substation': 'header label - visible with data', 'No': 'hidden field', 'SecondaryType': 'hidden field', 'FromPoleNoIDNo': 'hidden field', 'PolesInBetween': 'hidden field', 'ToPoleNoIDNo': 'hidden field', 'LineCode': 'hidden field', 'SecondaryDistributionLineID': 'header label - visible with data', 'FromBusID': 'hidden field', 'ToBusID': 'hidden field', 'Phasing': 'hidden field', 'InstallationType': 'hidden field', 'Length': 'hidden field', 'ConductorType': 'hidden field', 'ConductorSize': 'hidden field', 'UnitC': 'hidden field', 'StrandsC': 'hidden field', 'CircuitCode': 'hidden field', 'Lat1': 'hidden field', 'Lon1': 'hidden field', 'Lat2': 'hidden field', 'Lon2': 'hidden field', 'FeederIDR': 'hidden field', });
lyr_PrimaryLineOverhead_2.set('fieldLabels', {'qgs_fid': 'hidden field', 'Feeder': 'hidden field', 'Substation': 'header label - visible with data', 'No': 'hidden field', 'FromPoleNo': 'header label - visible with data', 'PoleInBetween': 'hidden field', 'ToPoleNo': 'hidden field', 'CircuitLateralName': 'hidden field', 'PrimaryDistributionLineSegmentID': 'header label - visible with data', 'FromBusID': 'hidden field', 'ToBusID': 'hidden field', 'Phasing': 'hidden field', 'Configuration': 'hidden field', 'SystemGroundingType': 'hidden field', 'Length': 'header label - visible with data', 'ConductorType': 'hidden field', 'ConductorSize': 'hidden field', 'UnitC': 'hidden field', 'StrandsC': 'hidden field', 'NeutralWireType': 'hidden field', 'NeutralWireSize': 'hidden field', 'UnitNW': 'hidden field', 'StrandsNW': 'hidden field', 'SpacingD12': 'hidden field', 'SpacingD23': 'hidden field', 'SpacingD13': 'hidden field', 'SpacingD1n': 'hidden field', 'SpacingD2n': 'hidden field', 'SpacingD3n': 'hidden field', 'SpacingDC1C2': 'hidden field', 'HeightH1': 'hidden field', 'HeightH2': 'hidden field', 'HeightH3': 'hidden field', 'HeightHn': 'hidden field', 'EarthResistivity': 'hidden field', 'AssemblyType': 'hidden field', 'EquivalentAssemblyType': 'hidden field', 'CircuitCode': 'hidden field', 'Lat1': 'hidden field', 'Lon1': 'hidden field', 'Lat2': 'hidden field', 'Lon2': 'hidden field', 'Municipality': 'hidden field', 'FeederIDR': 'hidden field', });
lyr_Substation_3.set('fieldLabels', {'qgs_fid': 'no label', 'name': 'no label', 'type': 'no label', 'descriptio': 'no label', 'address': 'no label', 'capacity': 'no label', 'lat': 'no label', 'lon': 'no label', 'serialno': 'no label', });
lyr_Substation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});