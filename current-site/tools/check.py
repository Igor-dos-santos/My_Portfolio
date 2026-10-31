"""Dependency-free release checks for the static portfolio."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import hashlib,json,re,subprocess,sys,unittest
ROOT=Path(__file__).resolve().parents[1]
SITE=ROOT/'dist' if (ROOT/'dist/index.html').exists() else ROOT
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.ids=[];self.links=[];self.h1=0;self.roles=[];self.case_count=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag=='h1':self.h1+=1
  if tag in ('a','link','script','img'):
   val=a.get('href') or a.get('src')
   if val:self.links.append(val)
  if 'role' in a.get('class','').split():self.roles.append(a.get('data-category',''))
  if tag=='details' and 'project' in a.get('class','').split():self.case_count+=1
TEXT=(SITE/'index.html').read_text(); PAGE=Page();PAGE.feed(TEXT)
class ReleaseChecks(unittest.TestCase):
 def test_navigation_and_assets(self):
  self.assertEqual(len(PAGE.ids),len(set(PAGE.ids)))
  for href in PAGE.links:
   u=urlsplit(href)
   if u.scheme:continue
   if u.path:self.assertTrue((SITE/u.path.lstrip('/')).is_file(),href)
   elif u.fragment:self.assertIn(u.fragment,PAGE.ids)
 def test_semantic_content(self):
  self.assertEqual(PAGE.h1,1);self.assertEqual(PAGE.case_count,4);self.assertEqual(len(PAGE.roles),5)
  self.assertEqual(len(re.findall('<h4>Challenge</h4>',TEXT)),4)
  self.assertEqual(len(re.findall('<h4>Result</h4>',TEXT)),4)
  self.assertNotIn('Across 200+ analysts',TEXT);self.assertNotIn('70%',TEXT)
  self.assertIn('Operations &amp; Service Delivery Leader',TEXT)
 def test_filter_membership(self):
  self.assertEqual(sum('ai' in c.split() for c in PAGE.roles),3)
  self.assertEqual(sum('operations' in c.split() for c in PAGE.roles),3)
  self.assertIn('operations',PAGE.roles[0].split());self.assertIn('ai',PAGE.roles[0].split())
 def test_cv_links(self):
  self.assertEqual(PAGE.links.count('assets/igor-cv.pdf'),3)
  self.assertEqual(hashlib.sha256((SITE/'assets/igor-cv.pdf').read_bytes()).hexdigest(),'bad6f7405016b45173ad08dbaa808ea3d4f2b12fdfdde7abd5b4366214bbb202')
 def test_metadata(self):
  self.assertIn('rel="canonical" href="https://igorads.com/"',TEXT)
  payload=re.search(r'<script type="application/ld\+json">(.*?)</script>',TEXT,re.S).group(1)
  self.assertEqual(json.loads(payload)['@type'],'Person')
  self.assertTrue((SITE/'robots.txt').exists());self.assertTrue((SITE/'sitemap.xml').exists())
 def test_script_syntax(self):
  subprocess.run(['node','--check',str(SITE/'app.js')],check=True)
 def test_css_and_markup_lint(self):
  css=(SITE/'style.css').read_text()
  self.assertEqual(css.count('{'),css.count('}'))
  self.assertIn('prefers-reduced-motion:reduce',css)
  for text in [TEXT,css,(SITE/'app.js').read_text()]:
   self.assertNotRegex(text,r'[\u2013\u2014]')
if __name__=='__main__':unittest.main()
