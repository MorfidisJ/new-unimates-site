import os
import urllib.request
import ssl

ssl_context = ssl._create_unverified_context()

ASSETS = [
    # Logo
    "https://unimates.net/assets/images/logo.png",
    "https://unimates.net/assets/images/logo.svg",
    
    # App Screenshots
    "https://unimates.net/assets/images/findroommates.jpg",
    "https://unimates.net/assets/images/myprofile.jpg",
    "https://unimates.net/assets/images/mymatches.jpg",
    "https://unimates.net/assets/images/househuntingjpg.jpg",
    "https://unimates.net/assets/images/settings.jpg",
    
    # Founder Photos
    "https://unimates.net/assets/images/giannopoulos.jpg",
    "https://unimates.net/assets/images/vongelis1.JPG",
    "https://unimates.net/assets/images/gkountas.jpg",
    "https://unimates.net/assets/images/morfidis.png",
    
    # Press Logos
    "https://unimates.net/assets/images/kathimerini-removebg-preview.png",
    "https://unimates.net/assets/images/newmoney-removebg-preview.png",
    "https://unimates.net/assets/images/voriagr-removebg-preview.png",
    "https://unimates.net/assets/images/startupper-removebg-preview.png",
    "https://unimates.net/assets/images/cseuoi-removebg-preview.png",
    "https://unimates.net/assets/images/epirusgate-removebg-preview.png",
    "https://unimates.net/assets/images/c.ioanninaLogo.png",
    
    # Supporter Logos
    "https://unimates.net/assets/images/piraeus.png",
    "https://unimates.net/assets/images/moke.png",
    "https://unimates.net/assets/images/pointofsynergycorrect.png",
    "https://unimates.net/assets/images/hustlehours.avif"
]

def main():
    target_dir = os.path.join("public", "assets", "images")
    os.makedirs(target_dir, exist_ok=True)
    
    print(f"Downloading {len(ASSETS)} assets into {target_dir}...")
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    for url in ASSETS:
        filename = os.path.basename(url)
        target_path = os.path.join(target_dir, filename)
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, context=ssl_context) as response, open(target_path, 'wb') as out_file:
                out_file.write(response.read())
            print(f"[OK] Downloaded: {filename}")
        except Exception as e:
            print(f"[ERROR] Failed to download {url}: {e}")

if __name__ == "__main__":
    main()
