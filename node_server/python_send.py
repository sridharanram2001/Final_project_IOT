import requests
import json
import time

url = "http://localhost:3000"
data = {'msg': 'Hi!!!'}
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

while True:
  r = requests.post(url, data=json.dumps(data), headers=headers)
  print(r.status_code)