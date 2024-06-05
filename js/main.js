const profileText = document.getElementById("profile-text");

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

//registerVisit();

function textProfile() {
    const yearStartExpAsSoftwareDeveloper = 2013;
    const yearStartExpAsDotnetDeveloper = 2016;

    softDevExperienceInYears = new Date().getFullYear() - yearStartExpAsSoftwareDeveloper;
    dotnetExperienceInYears = new Date().getFullYear() - yearStartExpAsDotnetDeveloper;
    
    profileText.innerText = `Software engineer with ${softDevExperienceInYears} years of general experience (Since 2013) and ${dotnetExperienceInYears} years of 
    experience working with C# dotnet ecosystem as main stack (Since 2016) in the back-end, I've been also working on the front-end using Angular, JS and TS. 
    And React in some side projects. I've been working in different industries like health, transport logistics, financial, consulting, etc.`;
}
textProfile();