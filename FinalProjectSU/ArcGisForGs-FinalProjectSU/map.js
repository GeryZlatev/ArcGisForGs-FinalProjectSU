require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend"
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend) {
    esriConfig.apiKey = "AAPK46015e5fe77240af90fba51711bd42bayB9qSDOvnDltAtyyj_zIZdLn6JuDrY7It6ZJnyWx2n8_8COtaFanTJU1FHrvQ-oT";
    
    const webMap = new WebMap ({ //WebMap - променливите винаги започват с малки букви
        portalItem: {
        id: "3ee5ad88b2624b218a71e8f39dd77f92"
        }
    
    })

    const view = new MapView ({
        container: "viewDiv",
        map: webMap 
        
    
    });

})