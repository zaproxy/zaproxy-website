#!/usr/bin/env python3

from datetime import date, datetime

import calendar
import json
import sys

if len(sys.argv) != 2:
    print(f"USAGE: {sys.argv[0]} releases.json")
    exit(1)

today = date.today()
year = today.year
month = today.month

if today.day < 10:
	month = month - 1
	if month == 0:
		month = 12
		year = year - 1

print("In " + calendar.month_name[month] + " " + str(year) + ", we released updated versions of *TBA add-ons:")
print()

count = 0

with open(sys.argv[1], 'r') as f:
    releases = sorted(json.load(f), key=lambda k: k['name'])

    # TODO: Merge releases per add-on
    for release in releases:
        created_date = datetime.fromisoformat(release['created_at'][:-1])
        if created_date >= datetime(year,month,1):
            name_parts = release['name'].partition(' version ')
            name = name_parts[0]
            version = name_parts[2]

            print(f"##### {name} (v{version})")
            print(release['body'].replace('### ', ''))
            print()
            count += 1
            
print("*TBA = " + str(count))
