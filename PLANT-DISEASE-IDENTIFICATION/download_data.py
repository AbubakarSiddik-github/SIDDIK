import os
import zipfile
import gdown
import sys

FILE_ID = "1FB9-jPxV94S6rEwoDgYq6GV47I2ChuZM"  # your Drive file ID
OUTPUT_ZIP = "photos.zip"
TARGET_FOLDER = "PLANT-DISEASE-IDENTIFICATION"

def download_and_extract():
    # If target folder already has files, skip
    if os.path.exists(TARGET_FOLDER) and any(os.scandir(TARGET_FOLDER)):
        print(f"Dataset already present in '{TARGET_FOLDER}'. Skipping download.")
        return

    url = f"https://drive.google.com/uc?export=download&id={FILE_ID}"
    print("Downloading photos from Drive...")
    gdown.download(url, OUTPUT_ZIP, quiet=False)

    if not os.path.exists(OUTPUT_ZIP):
        sys.exit("Failed to download dataset. Check FILE_ID/sharing settings.")

    print("Extracting dataset...")
    with zipfile.ZipFile(OUTPUT_ZIP, "r") as z:
        z.extractall(TARGET_FOLDER)

    try:
        os.remove(OUTPUT_ZIP)
    except OSError:
        pass

    print(f"Dataset ready at: {TARGET_FOLDER}")
