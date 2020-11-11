// obligatory comment here
Events.on(ClientLoadEvent, () => {
    Vars.ui.showCustomConfirm(
        "ShadowMod","shadowmod is the best",
        "No",
        "Yes",
        ()=>{
            print("do the obligatory");
        },
        ()=>{
            print("do not the obligatory");
        };
});
