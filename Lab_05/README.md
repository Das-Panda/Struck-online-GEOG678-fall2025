# Lab 5 – Basic JS Mapping with Leaflet  
**Author:** Kenneth Struck  
**Course:** GEOG 678 – WebGIS  
**Lab:** Basic JavaScript Mapping with Leaflet  
**Date:** Fall 2025  

---

## 📍 Overview
This lab introduces core Leaflet JS functionality, including:

- Setting up a basic Leaflet web map  
- Working with markers, custom icons, circles, and popups  
- Handling map events (click events, location events)  
- Implementing geolocation using `map.locate()`  

The assignment consists of completing the first **three Leaflet tutorial examples**, followed by creating a **custom TAMU-themed web map** that integrates all required functionalities.

---

## 📁 Folder Contents

### **1. Tutorial 1 — Leaflet Quick Start**  
File: **`tutorial1.html`**  
- Basic Leaflet map initialization  
- Marker, circle, and polygon  
- Popups  
- Click event showing coordinates  

### **2. Tutorial 2 — Leaflet on Mobile**  
File: **`tutorial2.html`**  
- Fullscreen mobile-optimized map  
- Touch / pinch-zoom support  
- Geolocation (`map.locate`)  
- Location found + location error handlers  

### **3. Tutorial 3 — Custom Icons**  
File: **`tutorial3.html`**  
- Custom Leaflet icons (`L.Icon.extend`)  
- Multiple icon variations  
- Markers using custom icons  
- Draggable marker  

### **4. Custom TAMU Web Map (Main Assignment)**  
File: **`Custom_Map.html`**  
Includes all required components:

- **Title:** *Struck – TAMU Custom Web Map*  
- **Locate function:** Uses `map.locate({setView: true})`  
- **Circle around Kyle Field** with popup  
- **Custom icons** for:
  - O&M Building  
  - Academic Building  
- **Click event** to display latitude/longitude in a popup  
- **Fallback behavior** centers map on Kyle Field if geolocation fails  
- Fully responsive layout  

---

## 📸 Screenshots Uploaded
This folder includes:

- `tutorial1_screenshot.png`  
- `tutorial2_screenshot.png`  
- `tutorial3_screenshot.png`  
- `custom_map_screenshot.png`  

These confirm the successful execution of each tutorial and the custom TAMU map.

---

## 🔧 How to Run
Open any file directly in a browser:

tutorial1.html
tutorial2.html
tutorial3.html
Custom_Map.html

No server is required — all files use CDN-hosted Leaflet assets.

---

## ✔ Grading Rubric Checklist

### ✓ Tutorials (45 pts)
- [x] Tutorial 1 complete  
- [x] Tutorial 2 complete  
- [x] Tutorial 3 complete  

### ✓ Custom Web Map (50 pts)
- [x] Locate function implemented  
- [x] Circle with popup around Kyle Field  
- [x] Custom icons created + popups added  
- [x] Click event to show coordinates in popup  

### ✓ GitHub Upload (5 pts)
- [x] All files uploaded to `lab/05/`  
- [x] README provided  
- [x] Screenshots uploaded  

---

## ✅ Status
**All requirements for Lab 5 have been completed and verified.**  
This repository is ready for submission to Canvas.

---
