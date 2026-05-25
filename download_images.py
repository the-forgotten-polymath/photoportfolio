import os
import re
import base64
import urllib.request
from urllib.parse import urljoin
import ssl

# Bypass SSL certificate verification for local Python installation on macOS
ssl._create_default_https_context = ssl._create_unverified_context

def download_images(md_file, base_url, output_dir):
    print(f"Processing {md_file}...")
    os.makedirs(output_dir, exist_ok=True)
    try:
        with open(md_file, "r") as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {md_file}: {e}")
        return

    # Extract all "- **Source**: <url>"
    sources = re.findall(r"- \*\*Source\*\*: (.*)", content)
    print(f"Found {len(sources)} image sources.")
    
    for i, src in enumerate(sources):
        src = src.strip()
        if not src or src == "No src":
            continue
            
        filename = f"image_{i+1}"
        
        try:
            if src.startswith("data:image/"):
                # Handle base64
                header, data = src.split(",", 1)
                ext = header.split(";")[0].split("/")[1]
                filepath = os.path.join(output_dir, f"{filename}.{ext}")
                with open(filepath, "wb") as img_file:
                    img_file.write(base64.b64decode(data))
                print(f"  Saved base64 image: {filepath}")
            else:
                # Handle URL
                full_url = urljoin(base_url, src)
                
                # Try to get extension from URL
                ext = os.path.splitext(full_url.split("?")[0])[1]
                if not ext:
                    ext = ".jpg"
                    
                filepath = os.path.join(output_dir, f"{filename}{ext}")
                
                # Fetch image
                req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=15) as response, open(filepath, 'wb') as out_file:
                    out_file.write(response.read())
                print(f"  Downloaded: {full_url.split('/')[-1]} to {filename}{ext}")
        except Exception as e:
            print(f"  Failed to process image {i+1} ({src[:30]}...): {e}")

if __name__ == "__main__":
    download_images(
        "/Users/geu/Desktop/PHOTOGRAPHER/website_data.md", 
        "https://theweddingpsalm.in", 
        "/Users/geu/Desktop/PHOTOGRAPHER/theweddingpsalm_images"
    )
    print("\n---------------------------\n")
    download_images(
        "/Users/geu/Desktop/PHOTOGRAPHER/photoklicker_data.md", 
        "https://photoklickerphotography.com", 
        "/Users/geu/Desktop/PHOTOGRAPHER/photoklicker_images"
    )
    print("\nAll downloads completed.")
