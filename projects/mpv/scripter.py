import requests

payload = {'username': 'ryanjlee', 'password': 'PepperMaddie1'}
r = requests.get('https://calcentral.berkeley.edu/post/finances', data = payload);

print(r.text);
