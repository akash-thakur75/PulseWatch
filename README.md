\# 🚀 PulseWatch – Real-Time Brand Sentiment Analysis



\## 📌 Project Overview



PulseWatch is a serverless cloud-based application that analyzes customer reviews for brands. The application accepts a brand name and customer review, detects the sentiment (Positive, Negative, or Neutral), stores the result in AWS DynamoDB, and sends an SNS email alert if the sentiment is negative.



\---



\## 🛠️ Tech Stack



\- HTML

\- CSS

\- JavaScript

\- Python

\- AWS Lambda

\- Amazon API Gateway

\- Amazon DynamoDB

\- Amazon SNS

\- Docker

\- Git \& GitHub



\---



\## ☁️ AWS Architecture



```text

Frontend (HTML/CSS/JS)

&#x20;         │

&#x20;         ▼

&#x20;    API Gateway

&#x20;         │

&#x20;         ▼

&#x20;      AWS Lambda

&#x20;       │      │

&#x20;       │      ▼

&#x20;       │    Amazon SNS

&#x20;       ▼

&#x20;Amazon DynamoDB

```



\---



\## ✨ Features



\- Analyze customer reviews

\- Detect Positive, Negative, and Neutral sentiment

\- Store sentiment data in DynamoDB

\- Send SNS email alerts for negative reviews

\- Serverless architecture using AWS

\- REST API with API Gateway

\- Dockerized producer application

\- Responsive web interface



\---



\## 🚀 How to Run



1\. Clone the repository



```bash

git clone https://github.com/akash-thakur75/PulseWatch.git

```



2\. Open the project folder



3\. Start a local server



```bash

python -m http.server 8000

```



4\. Open



```

http://localhost:8000

```



\---



\## 📂 Project Structure



```text

PulseWatch/



├── index.html

├── style.css

├── script.js

├── app.py

├── Dockerfile

├── requirements.txt

└── README.md

```



\---



\## 📷 Screenshots



(Add project screenshots here)



\---



\## 👨‍💻 Author



\*\*Akash Parmar\*\*



GitHub:

https://github.com/akash-thakur75

