public class Covid19_Status_Tracker_ctrl {
    @AuraEnabled 
    public static string getFullReportData(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.covid19api.com/summary');
        request.setMethod('GET');
        request.setHeader('Content-Type', 'application/json;charset=UTF-8');
        request.setHeader('Authorization', 'Bearer');
        HttpResponse response = http.send(request);
        return response.getBody();
    }
}