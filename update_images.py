import re
import os

images_dir = 'assets/cards'
images = os.listdir(images_dir)

# Create a mapping of lower case site name to relative image path
img_map = {}
for img in images:
    name_without_ext = os.path.splitext(img)[0]
    img_map[name_without_ext.lower().strip()] = f"assets/cards/{img}"

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_img(match):
    name_str = match.group(0)
    name_val = match.group(1).lower().strip()
    
    if name_val in img_map:
        new_img = img_map[name_val]
        # match.group() has the whole string from "name": to "img":
        # Let's replace the last occurrence of "img": "..." with the new string inside the whole matched block string
        replaced = re.sub(r'"img":\s*"[^"]*"', f'"img": "{new_img}"', name_str)
        print(f"Updated {name_val} with {new_img}")
        return replaced
            
    return match.group(0)

# We match from "name": "..." spanning across lines up to the next "img": "..."
pattern = re.compile(r'"name":\s*"([^"]+)".*?"img":\s*"[^"]*"', re.DOTALL)
new_content = pattern.sub(replace_img, content)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated images in data.js based on local files.")
