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

release_notes = ""
seen_addons = set()

with open(sys.argv[1], 'r') as f:
    releases = sorted(json.load(f), key=lambda k: k['name'].partition(' version ')[0])

    for release in releases:
        created_date = datetime.fromisoformat(release['created_at'][:-1])
        if created_date >= datetime(year,month,1):
            name_parts = release['name'].partition(' version ')
            name = name_parts[0]
            version = name_parts[2]

            if name not in seen_addons:
                release_notes += f"##### {name}\n"
                seen_addons.add(name)

            release_notes += f"**v{version}**  \n"
            release_notes += release['body'].replace('### ', '') + "\n\n"
            
release_notes = f"In {calendar.month_name[month]} {year}, we released updated versions of {len(seen_addons)} add-ons:\n\n{release_notes.strip()}"

print(release_notes)
