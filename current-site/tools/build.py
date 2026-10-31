"""Package the existing static site without a framework or dependencies."""
from pathlib import Path
import shutil,subprocess,sys
ROOT=Path(__file__).resolve().parents[1]
SITE=ROOT/'dist' if (ROOT/'dist/index.html').exists() else ROOT
subprocess.run([sys.executable,str(ROOT/'tools/check.py')],check=True)
OUT=ROOT/'build'
if OUT.exists():shutil.rmtree(OUT)
OUT.mkdir()
for name in ['index.html','style.css','app.js','favicon.ico','robots.txt','sitemap.xml']:
 shutil.copy2(SITE/name,OUT/name)
shutil.copytree(SITE/'assets',OUT/'assets')
print('Static production output:',OUT)
