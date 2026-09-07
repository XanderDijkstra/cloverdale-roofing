"""Submit the canonical production sitemap with the existing Google authorization."""
import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import quote
import requests
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request

origin = 'https://cloverdaleroofingco.com'
credentials = Credentials.from_authorized_user_file(str(Path.home() / 'google-tools' / 'token.json'))
if not credentials.has_scopes(['https://www.googleapis.com/auth/webmasters']):
    raise SystemExit('The current Google authorization is read-only. Submit the sitemap in Search Console; this script does not expand account permissions.')
credentials.refresh(Request())
session = requests.Session()
session.headers['Authorization'] = f'Bearer {credentials.token}'
endpoint = 'https://www.googleapis.com/webmasters/v3/sites/' + quote('sc-domain:cloverdaleroofingco.com', safe='') + '/sitemaps/' + quote(origin + '/sitemap.xml', safe='')
before = session.get(endpoint, timeout=40)
if before.status_code != 404:
    before.raise_for_status()
response = session.put(endpoint, timeout=40)
response.raise_for_status()
after = session.get(endpoint, timeout=40)
after.raise_for_status()
result = {'submittedAt': datetime.now(timezone.utc).isoformat(), 'httpStatus': response.status_code, 'before': before.json() if before.ok else {'registered': False}, 'after': after.json(), 'note': 'Submission acknowledged; this does not guarantee crawling or indexing.'}
Path('docs/audit/2026-09-07/sitemap-submission.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
print(json.dumps(result, indent=2))
