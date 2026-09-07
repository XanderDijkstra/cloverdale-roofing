"""Read-only indexing evidence using the existing local Google OAuth toolkit."""
import json
import argparse
from pathlib import Path
from datetime import datetime, timezone
import requests
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request

parser = argparse.ArgumentParser()
parser.add_argument('--output', default='search-console.json', help='Evidence filename; use a new name for each pass.')
options = parser.parse_args()
if Path(options.output).name != options.output:
    parser.error('--output must be a filename')
credentials = Credentials.from_authorized_user_file(str(Path.home() / 'google-tools' / 'token.json'))
credentials.refresh(Request())
session = requests.Session()
session.headers['Authorization'] = f'Bearer {credentials.token}'
origin = 'https://cloverdaleroofingco.com'
routes = ['/', '/services/roof-repair', '/services/roof-replacement', '/services/cedar-roof-conversion', '/locations/clayton-heights', '/locations/south-surrey', '/roofing-guide']
results = []
for route in routes:
    response = session.post('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', json={'inspectionUrl': origin + route, 'siteUrl': 'sc-domain:cloverdaleroofingco.com', 'languageCode': 'en-CA'}, timeout=40)
    response.raise_for_status()
    result = response.json().get('inspectionResult', {})
    results.append({'url': origin + route, 'indexStatusResult': result.get('indexStatusResult'), 'richResultsResult': result.get('richResultsResult')})
output = {'checkedAt': datetime.now(timezone.utc).isoformat(), 'note': 'Google indexed-version inspection, not a live fetch or indexing request.', 'results': results}
folder = Path('docs/audit/2026-09-07')
folder.mkdir(parents=True, exist_ok=True)
(folder / options.output).write_text(json.dumps(output, indent=2), encoding='utf-8')
for row in results:
    print(row['url'], json.dumps(row['indexStatusResult']))
