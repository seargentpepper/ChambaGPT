from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, filename):
    img = Image.new('RGB', (size, size), color='#FFD200')
    d = ImageDraw.Draw(img)
    # Draw a black square as a "skull" placeholder, or just text
    d.rectangle([(size//4, size//4), (size*3//4, size*3//4)], fill='black')
    
    # Save the image
    img.save(f'assets/{filename}')

if not os.path.exists('assets'):
    os.makedirs('assets')

create_icon(192, 'icon-192.png')
create_icon(512, 'icon-512.png')
print("Icons created successfully.")
