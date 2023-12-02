import requests
from bs4 import BeautifulSoup

url = "https://www.walmart.com/ip/HP-11-6-Chromebook-AMD-A4-4GB-RAM-32GB-Storage-Black-16W64UT-ABA/592161882"
headers = {"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0"}
html = requests.get(url, headers=headers)


print(html.text)
#soup = BeautifulSoup(html.text)
#product_name = soup.find('h1', attrs={'itemprop': 'name'}).text

#print(product_name)
