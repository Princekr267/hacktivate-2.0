from PIL import Image

def crop_transparent_padding(image_path):
    img = Image.open(image_path)
    # Convert image to RGBA if not already
    img = img.convert("RGBA")
    
    # Get the bounding box of the non-transparent alpha channel
    bbox = img.getbbox()
    if bbox:
        # Crop the image to the bounding box
        img_cropped = img.crop(bbox)
        # Save the cropped image back
        img_cropped.save(image_path)
        print(f"Cropped successfully. New bounding box: {bbox}")
    else:
        print("Image is entirely transparent or bounding box not found.")

if __name__ == "__main__":
    crop_transparent_padding("c:/Users/princ/OneDrive/Documents/Program/Testing/hackathon_website/public/logo-H-letter.png")
