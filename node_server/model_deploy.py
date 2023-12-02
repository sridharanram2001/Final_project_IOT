import torch
import pandas as pd
import cv2 
import socket
import datetime
import requests
import json
import time

url = "http://localhost:3000/pred"
data = {}
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

vid = cv2.VideoCapture(1,cv2.CAP_DSHOW) 
#model = torch.hub.load('ultralytics/yolov5', 'yolov5s', force_reload=True, trust_repo=True) 
model = torch.hub.load('ultralytics/yolov5', 'custom', r'G:\Fall 22 ASU\Sem3\Programming For Internet Of Things\Final_project\content\yolov5\runs\train\exp2\weights\best.pt', force_reload=True,trust_repo=True)
start = datetime.datetime.now()

while(True): 

    now = datetime.datetime.now()
    diff = now-start 
    if vid.isOpened():   
        ret, frame = vid.read() 
        cv2.imshow('frame', frame)
    
    if diff.total_seconds()>1.0:
        result = model(frame)
        pred = result.pandas().xywh
        df = pred[0]
        
        #print(df.to_json())
        if(not(df['confidence'].values.size == 0)):
            if(df['confidence'].values[0]>0.5):
                r = requests.post(url, data=df.to_json(), headers=headers)
        
        start = datetime.datetime.now()
        
        
    if cv2.waitKey(1) & 0xFF == ord('q'): 
        break
      

vid.release() 

cv2.destroyAllWindows() 
