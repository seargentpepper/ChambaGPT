import pandas as pd
import re

xl = pd.ExcelFile('paginas.xlsx')
urls_by_id = {}
for sheet in xl.sheet_names:
    df = pd.read_excel(xl, sheet)
    if 'ID' in df.columns and 'URL' in df.columns:
        for _, row in df.dropna(subset=['ID']).iterrows():
            url = str(row['URL']).strip()
            if url.lower() != 'nan' and url:
                urls_by_id[int(row['ID'])] = url

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_url(match):
    id_val = int(match.group(1))
    name_val = match.group(2)
    url_val = match.group(3)
    
    if id_val in urls_by_id:
        new_url = urls_by_id[id_val]
        # Skip updating if new_url is empty or invalid and old is not
        if new_url and new_url.lower() != 'nan' and new_url != 'x':
            new_url = new_url.replace('"', '\\"')
            return f'"id": {id_val},\n                "name": "{name_val}",\n                "url": "{new_url}"'
            
    return match.group(0)

pattern = re.compile(r'"id":\s*(\d+),\s*\n\s*"name":\s*"([^"]+)",\s*\n\s*"url":\s*"([^"]*)"')
new_content = pattern.sub(replace_url, content)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {len(urls_by_id)} URLs from Excel into data.js.")
