import requests
import time


def sheamowme():
    url = "https://api-my.sa.gov.ge/api/v1/DrivingLicensePracticalExams2/DrivingLicenseExamsDates2?CategoryCode=3&CenterId=10&fbclid=IwAR0wWqq6Og1z6oPMnZd2eJBvx1k6ZVYNmpJUyFAzNo4FJRYwyeQ1bHKGo4c"
    response = requests.get(url)
    final = response.json()

    if len(final) != 0:
        msg = {"content": "გაიხსნა"}

        webhook_url = "https://discord.com/api/webhooks/1131331517919019048/5BFy84rXTlasBNpqSFyQ3dtgsC5iTjj3ec60VxE4umyHSYGeEc4TnKyRnJPimzwUOKah"
        requests.post(webhook_url, json=msg)



while True:
    sheamowme()
    time.sleep(7)
