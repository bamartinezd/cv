async function getIp() {
    const apiUrl = "https://api.ipify.org/?format=json";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        return data; 
    } catch (error) {
        console.error(error);
    }
}

async function registerVisit() {
    const apiUrl = "https://apiportfolioservicesapi20210818143745.azurewebsites.net/api/visit/create";
    const visitorIp = await getIp();

    try {
        

        const visit = {
            ip: visitorIp.ip,
            ownerMessage: "AMD"
        }

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const response = await fetch(new Request(apiUrl, {method:"POST",headers: myHeaders, body: JSON.stringify(visit)}));
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error(error);
    }

}

registerVisit();