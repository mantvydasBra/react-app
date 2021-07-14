import requests

auth=('mantvydasbr7@gmail.com', 'b8RX44Sx3@Pt')

req = requests.get('https://billing.time4vps.com/api/server/159349', auth=auth)
print(req.json())