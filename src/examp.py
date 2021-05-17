import requests
import json
from bs4 import BeautifulSoup
from pathlib import Path

# BASE_URL="https://www.forbes.com/sites/laurabegleybloom/2019/09/04/bucket-list-travel-the-top-50-places-in-the-world/#23b0f0ad20cf"
BASE_URL="https://www.cntraveler.com/galleries/2015-11-27/the-50-most-beautiful-places-in-the-world"
BASE_SAVE_PATH=Path('./eve')
SAVE_PATH="D:/found-c-master/packages/client/src/pdata/data.json"

def get_html(url,params=None):
    r=requests.get(BASE_URL,params)
    return r

def get_content(html):
    soup=BeautifulSoup(html,'html.parser')
    place=soup.find_all('section',class_='gallery-item gallery-item-photo')
    info=soup.find_all('div',class_='dek')
    images=soup.find_all('div',class_='gallery-item-image__container')
    inf=[]
    result=[]
    imgs=[]
    for item in range(len(place)):
        for i in info:
            ind = i.find('p')
            if ind != None:
                # print("ind: ", ind.text)
                inf.append(ind.text)
        result.append({
            'name':place[item].find('h2').get_text(),
            'info':inf[item]
        })
    return  result

def parse():
    html=get_html(BASE_URL)
    if html.status_code==200:
      result=  get_content(html.text)
      return  result
    else:
        print('Error')

def save_file(result):
    html_path_file = BASE_SAVE_PATH / 'eve_first.json'
    with open(SAVE_PATH,'w') as file:
        file.write(json.dumps(result))

result=(parse())
print(result)
save_file(result)


