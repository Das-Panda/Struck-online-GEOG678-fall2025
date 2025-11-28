Lab 6 — Leaflet Web Mapping Basics

Author: Kenneth Struck
Course: GEOG 678 – WebGIS
Date: Fall 2025

This lab demonstrates core Leaflet.js functionality for building interactive web maps, including working with GeoJSON, creating choropleth visualizations, and building a custom campus map using provided TAMU building footprints.

The lab is divided into three parts, each implemented as a standalone HTML web map.

Lab6/
│
├── lab6_geojson.html
├── lab6_choropleth.html
├── custom_tamu_map.html
├── tamubuildings.js
│
├── lab6_geojson_screenshot.png
├── lab6_choropleth_screenshot.png
└── lab6_tamu_custom_map.png

Part 1 — GeoJSON Tutorial

File: lab6_geojson.html
This map demonstrates fundamental GeoJSON handling in Leaflet, including:

✔️ Added GeoJSON Layers

Point features

LineString features

Polygon features

✔️ Core Leaflet Techniques Used

L.geoJSON(...)

style option

pointToLayer (CircleMarkers)

onEachFeature (popups)

filter function (conditionally displaying features)

📸 Screenshot

lab6_geojson_screenshot.png

Part 2 — Choropleth Tutorial

File: lab6_choropleth.html
This map implements a U.S. population-density choropleth following the Leaflet tutorial.

✔️ Key Features

Dynamic color ramp using getColor()

Styled polygons with data-driven colors

Hover highlight

Click-to-zoom on a state

Interactive info control (shows density)

Legend explaining class breaks

📸 Screenshot

lab6_choropleth_screenshot.png

Part 3 — Custom TAMU Campus Map

File: custom_tamu_map.html
Data: tamubuildings.js (provided GeoJSON containing TAMU building footprints)

✔️ Map Requirements Completed

Map centered on TAMU main campus

Building polygons styled with TAMU maroon colors

Hover highlight with style changes

Click-to-zoom feature

Info box showing:

Building Name (BldgName)

Abbreviation (BldgAbbr)

✔️ Technologies Used

L.geoJSON(tamu, ...)

Custom style(feature) function

mouseover, mouseout, and click event handlers

Information control using L.control()

📸 Screenshot

lab6_tamu_custom_map.png

Summary

This lab introduced three core Leaflet concepts:

1️⃣ Working with GeoJSON (data display)
2️⃣ Creating choropleth maps (thematic visualization)
3️⃣ Building a customized, interactive campus map (events + controls)

These skills provide the foundation for future work with:
✔️ dashboards
✔️ map-based data exploration
✔️ geospatial web applications
✔️ interactive storytelling
