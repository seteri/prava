let msg
let result = []


function sheamowme(){
    fetch("https://api-my.sa.gov.ge/api/v1/DrivingLicensePracticalExams2/DrivingLicenseExamsDates2?CategoryCode=3&CenterId=10&fbclid=IwAR0wWqq6Og1z6oPMnZd2eJBvx1k6ZVYNmpJUyFAzNo4FJRYwyeQ1bHKGo4c",{
        method:"get"
    }).then(res => res.json())
        .then(final => {
            if(final.length!==0){
                for(let a=0;a<final.length;a++){
                    result.push(final[a].bookingDate)
                }

                msg = {
                    "content": result.toString()

                };
                if (result){
                    fetch('https://discord.com/api/webhooks/1131331517919019048/5BFy84rXTlasBNpqSFyQ3dtgsC5iTjj3ec60VxE4umyHSYGeEc4TnKyRnJPimzwUOKah' + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});

                }
                result=[]
            }
        })
}
setInterval(sheamowme, 7000)