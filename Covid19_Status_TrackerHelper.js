({
    getData : function(cmp) {
        var action = cmp.get("c.getFullReportData");
        action.setCallback(this, function(response) {
            var state = response.getState();
            var responseObj = JSON.parse(response.getReturnValue());
            var cntry= [];
            if (state === "SUCCESS") {
                for(var i in responseObj.Countries){
                    cntry.push(responseObj.Countries[i]);
                }
                cmp.set("v.countriesLst",cntry);
                cmp.set("v.fullResult",responseObj);
            }else{
                alert("Error");
            }
        });
        $A.enqueueAction(action);
    },
    getSelectedCountryData: function(cmp) {
        var selCon= cmp.find("selCountry").get("v.value");
        var resultLst= cmp.get("v.fullResult");
        var retrievedResult= [];
        if(selCon){
            for(var i in resultLst){
                for(var ns in resultLst[i].Countries){
                    var matched=resultLst[i].Countries[ns].Country;
                    if(matched === selCon){
                        retrievedResult.push(resultLst[i].Countries[ns]);
                    }
                }
            }
            cmp.set("v.tableDataLst",retrievedResult);
            cmp.set("v.displayMessage",false);
        }
        else{
            cmp.set("v.displayMessage",true);
        }
    }
})