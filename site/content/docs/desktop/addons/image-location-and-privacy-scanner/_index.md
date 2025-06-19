---
# This page was generated from the add-on.
title: Image Location and Privacy Scanner
type: userguide
weight: 1
cascade:
  addon:
    id: imagelocationscanner
    version: 6.0.0
---

# Image Location and Privacy Scanner

The following passive scan rule is included in this add-on:

## Image Location and Privacy Scanner {#id-10103}

Passively scans for GPS location and other privacy-related exposures in images during normal security assessments of websites. Image Location and Privacy Scanner (ILS) assists in situations where end users may post profile images and possibly give away their home location, e.g. a dating site or children's chatroom.

More information on this topic, including a white paper based on a real-world site audit given as a presentation at the New Jersey chapter of the OWASP organization, can be found at <https://www.veggiespam.com/ils/>.

This software scans images to find the GPS information inside of Exif tags, IPTC codes, and proprietary camera tags. Then, ILS flags the findings in the ZAP Alerts list as an information message. It would be up to the auditor to determine if location exposure is truly a security risk based on context.

## Sample Findings

Configure the web browser to proxy through ZAP and then browse to a few sample sites to see Alerts being raised:

* MetaData Extractor's [SampleOutput page](https://github.com/drewnoakes/metadata-extractor/wiki/SampleOutput) contains some good images. *(Note: For some URLs, you need a [GitHub session cookie](https://github.com/drewnoakes/metadata-extractor-images/tree/master/jpg))*
    * [iPhone 4](https://raw.githubusercontent.com/drewnoakes/metadata-extractor-images/master/jpg/Apple%20iPhone%204.jpg) shows GPS data.
    * [FujiFilm FinePix S1 Pro](https://raw.githubusercontent.com/drewnoakes/metadata-extractor-images/master/jpg/FujiFilm%20FinePixS1Pro%20(1).jpg) has embedded IPTC locations and keywords.
    * [Panasonic DMC-TZ10](https://raw.githubusercontent.com/drewnoakes/metadata-extractor-images/master/jpg/Panasonic%20DMC-TZ10.jpg) shows proprietary Panasonic MakerNote tags including city, state, country along with facial recognition information, like the name and age of the person in the picture. ZAP screenshot is shown below.
* This professional photographer utilizes Exif \& IPTC data in many of the full-sized (non-thumbnail) photos: [Raia.com](https://raia.com/)

![](/docs/desktop/addons/image-location-and-privacy-scanner/images/screenshot-2-zap.png)

## Usage Notes

* Before ZAP 2.7.x, you must manually enabled image scanning with: Tools → Options → Display → "Process images in the HTTP requests/responses" for ILS to function at all.
* By default, ZAP hides images in the history, but ILS stills scan these images for findings. If an alert is triggered, then the image and its alerts will appear in the Alerts tab but not in the History tab. To show images in the history, both with alerts and without, enable with "Process images in the HTTP" as above.
* If you have image processing completely disabled via Tools → Options → Network → Global Exclusions → Extension - Image (née Global Exclude URL), then any passive image scanner, like ILS, will be unable to see the images and report on privacy issues - thus disuse this feature with images so ILS can function.

Latest code: [ZAP Extension "imagelocationscanner" Source](https://github.com/zaproxy/zap-extensions/tree/main/addOns/imagelocationscanner)   
Project Source Code Origin with more information: [Veggiespam's Image Location Scanner on GitHub](https://github.com/veggiespam/ImageLocationScanner)  
Project Home Page: [Veggiespam's Image Location Scanner](https://www.veggiespam.com/ils/)   
Keywords: Infosec, Audit, Information Exposure, Data Leakage, Vulnerability, GPS, Exif, IPTC, PII, OpSec, Privacy   
Alert ID: [10103](/docs/alerts/10103/).
