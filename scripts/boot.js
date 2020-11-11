//obligatory commentttt
Events.on(ClientLoadEvent, b => {
    Vars.ui.showCustomConfirm(
        "ShadowMod","shadowmod is the best",
        "No",
        "Yes",
        ()=>{
            core.app.exit();
        )},
        ()=>{
            
        });
});
