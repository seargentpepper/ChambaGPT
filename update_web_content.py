
import pandas as pd
import json
import re
import os

# Configuration
EXCEL_FILE = 'paginas.xlsx'
HTML_FILE = 'data.js'

# Mapping Sheet Names to UI Categories (jobcat)
CATEGORY_MAP = {
    'Bolsas': 'bolsa',
    'Brands': 'brand',       # Conectar a las marcas
    'Freelance': 'bolsa',    # Merged into Suerte Wey
    'Learning': 'mentoring', # Was prep, now Mentoring/Advisers
    'Networking': 'network'
}

# Curated Unsplash Images (Creative Commons/Public Domain style usage)
IMAGES = {
    'bolsa': [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60", # Laptop typing
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=60", # Office desk
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=60", # Planning
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=500&q=60", # Modern setup
        "https://images.unsplash.com/photo-1504384308090-c89eec2adc38?auto=format&fit=crop&w=500&q=60", # Working
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=60", # Interaction
        "https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&w=500&q=60", # Code
    ],
    'freelance': [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=60", # Group work
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=60", # Meeting
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=500&q=60", # Alone laptop
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=60", # Agreement
        "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=500&q=60", # Modern future
        "https://images.unsplash.com/photo-1553877616-15236ed3654e?auto=format&fit=crop&w=500&q=60", # Smile laptop
    ],
    'brand': [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=60", # Building
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=60", # Money/Business
        "https://images.unsplash.com/photo-1507679799983-417639a68bee?auto=format&fit=crop&w=500&q=60", # Suit
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60", # Chart
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=500&q=60", # Logistics
        "https://images.unsplash.com/photo-1560179707-f14e90ef3dab?auto=format&fit=crop&w=500&q=60", # High rise
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60", # Team
    ],
    'mentoring': [ # Learning
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=60", # Coffee learn
        "https://images.unsplash.com/photo-1456324504439-367cee13d824?auto=format&fit=crop&w=500&q=60", # Library
        "https://images.unsplash.com/photo-1513258496098-916fa3680e12?auto=format&fit=crop&w=500&q=60", # Book
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=60", # People talk
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=60", # Classroom abstract
    ],
    'network': [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=60", # Party/Group
        "https://images.unsplash.com/photo-1521791136064-7986c2959d93?auto=format&fit=crop&w=500&q=60", # Handshake
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=60", # Meeting room
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=500&q=60", # People
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=60", # Conference
    ]
}

def clean_text(text):
    if pd.isna(text):
        return ""
    return str(text).strip()

def process_excel():
    print(f"Reading {EXCEL_FILE}...")
    xls = pd.ExcelFile(EXCEL_FILE)
    
    all_sites = []
    
    for sheet_name in xls.sheet_names:
        if sheet_name == 'English':
            continue
            
        if sheet_name not in CATEGORY_MAP:
            continue
            
        df = pd.read_excel(xls, sheet_name=sheet_name)
        
        # Counter for rotating images per category
        img_idx = 0
        
        for _, row in df.iterrows():
            if pd.isna(row.get('Nombre del Sitio')):
                continue

            keywords_raw = clean_text(row.get('Palabras Clave / Tags'))
            keywords = [k.strip() for k in keywords_raw.split(',') if k.strip()]
            
            cat = CATEGORY_MAP[sheet_name]
            
            # Select image round-robin style from the category list
            cat_images = IMAGES.get(cat, IMAGES['bolsa']) # Default schema
            img_url = cat_images[img_idx % len(cat_images)]
            img_idx += 1
            
            site = {
                'id': int(row.get('ID', 0)) if pd.notna(row.get('ID')) else 0,
                'name': clean_text(row.get('Nombre del Sitio')),
                'url': clean_text(row.get('URL')),
                'jobcat': cat,
                'keywords': keywords[:3],
                'tags': keywords[3:],
                'desc': clean_text(row.get('Descripción (Original)')),
                'img': img_url
            }
            
            all_sites.append(site)
            
    return all_sites

def update_html(sites_data):
    print(f"Updating {HTML_FILE}...")
    
    with open(HTML_FILE, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Convert python dict to json string, but formatted for JS source
    # We want it to look like: const sites = [ ... ];
    
    json_str = json.dumps(sites_data, indent=4, ensure_ascii=False)
    
    # Regex to find the const sites = [...]; block
    # We look for 'const sites =' followed by square brackets until the semicolon
    pattern = r'const sites = \[\s*\{.*?\}(,\s*\{.*?\})*\s*\];'
    
    # Since the file might be large/multiline, we use dotall logic if regex engine supported it well,
    # but python re.DOTALL is needed.
    
    replacement = f"const sites = {json_str};"
    
    # Using specific markers from the file content we saw earlier might be safer than a generic loose regex
    # Start: const sites = [
    # End: ];
    
    # Let's use regex with DOTALL
    new_html = re.sub(
        r'const sites = \[.*?\];', 
        replacement, 
        html_content, 
        flags=re.DOTALL
    )
    
    if new_html == html_content:
        print("Error: Could not find 'const sites = [...]' block to replace.")
        return
        
    with open(HTML_FILE, 'w', encoding='utf-8') as f:
        f.write(new_html)
        
    print("Success! HTML updated.")

if __name__ == "__main__":
    try:
        data = process_excel()
        update_html(data)
        print(f"Processed {len(data)} sites.")
    except Exception as e:
        print(f"Error: {e}")
