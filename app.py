import requests

url = "https://mkbzq4cqta.execute-api.ap-south-1.amazonaws.com/prod/sentiment"

brand = input("Enter Brand Name: ")
review = input("Enter Review: ")

data = {
    "brand": brand,
    "text": review
}

response = requests.post(url, json=data)

print(response.json())