import datetime
import cv2 
  

start = datetime.datetime.now()

vid = cv2.VideoCapture(1,cv2.CAP_DSHOW) 
  
class_name = "Tomato" 
i = 0


while(True): 
    now = datetime.datetime.now()
    time = now - start
    time = time.total_seconds()
    if vid.isOpened():   
        ret, frame = vid.read() 
        cv2.imshow('frame', frame)
        #print(time)
        if time > 5.0:
            cv2.imwrite(f'Dataset/{class_name}/{class_name}{i}.png', frame)
            print(f"Saved img {i} at Dataset/{class_name}/{class_name}{i}.png ")
            i = i+1
            time = 0.0
            start = datetime.datetime.now()
        
        if (cv2.waitKey(1) & 0xFF == ord('q')) or i > 20: 
            break
      

vid.release() 

cv2.destroyAllWindows() 