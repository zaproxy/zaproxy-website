#!/usr/bin/env python3

from datetime import datetime

import json
import sys

if len(sys.argv) != 2:
    print(f"USAGE: {sys.argv[0]} releases.json")
    exit(1)

with open(sys.argv[1], 'r') as f:
    releases = json.load(f)

    # TODO: Merge releases per add-on
    for release in releases:
        created_date = datetime.fromisoformat(release['created_at'][:-1])
        # TODO: Make date configurable
        if created_date >= datetime(2023,3,1):
            name_parts = release['name'].partition(' version ')
            name = name_parts[0]
            version = name_parts[2]

            print(f"##### {name} (v{version})")
            print(release['body'].replace('### ', ''))
            print()
