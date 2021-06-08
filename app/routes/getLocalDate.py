from app import APP
import pytz
from datetime import datetime


def getDate():
    ist = pytz.timezone('Asia/Dhaka')
    absDate = datetime.date(datetime.now(ist))
    splittedDate = str(absDate).split("-")
    months = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December']
    absM = int(splittedDate[1])
    absD = int(splittedDate[2])
    absY = str(splittedDate[0])
    mString = ''
    for index, month in enumerate(months):
        if (index + 1) == absM:
            mString = month
            break
    return f'{absD} {mString}, {absY}'


@APP.route("/getLocal")
def getLocal():
    return getDate()
