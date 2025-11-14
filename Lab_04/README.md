# Lab 4 – Bounding Box (JS/JSON Programming)

This lab demonstrates the use of JavaScript functions and JSON data structures to compute the bounding box of a set of geographic coordinate points. The workflow includes loading a dataset from a separate JSON file (`data.js`), writing helper functions to determine the four bounding-box corner points, and displaying the results in the browser console when the user clicks a button.

---

## 📁 Files Included

- **index.html**  
  The main webpage. Loads the JSON dataset and the JavaScript logic, and contains the button that triggers the bounding box computation.

- **data.js**  
  Contains the JSON object `theJSON` with the coordinate dataset used by the script.

- **script.js**  
  Contains the helper functions (`findTopLeft`, `findTopRight`, `findBottomLeft`, `findBottomRight`) and the main `Run()` function that prints the bounding box results to the console.

- **screenshot.png**  
  Screenshot of the Firefox console output showing the student email and the bounding box object (required for submission).

---

## ▶️ How to Run

1. Download all files in this folder.  
2. Make sure **all files remain in the same directory**.  
3. Open **index.html** in a browser (Firefox recommended).  
4. Open the console (`Ctrl + Shift + K` in Firefox).  
5. Click the **Compute Bounding Box** button.  
6. The console will display:
   - the student email  
   - the four bounding box corner objects (`topLeft`, `topRight`, `bottomLeft`, `bottomRight`)

---

## 🧮 Bounding Box Logic

The script calculates:

- **Top-Left**: max latitude, min longitude  
- **Top-Right**: max latitude, max longitude  
- **Bottom-Left**: min latitude, min longitude  
- **Bottom-Right**: min latitude, max longitude  

These are extracted from the coordinate list in `theJSON.data`.

---

## ✔️ Sample Output (Firefox Console)

Bounding box computed for: daspanda@tamu.edu
Object { topLeft: {…}, topRight: {…}, bottomLeft: {…}, bottomRight: {…} }


---

## 📌 Notes

- JavaScript property names are case-sensitive.  
- The dataset uses **lat** and **lon** (lowercase), so the script references `p.lat` and `p.lon`.  
- Files must be loaded in this order in `index.html`:
  1. `data.js`
  2. `script.js`

---

## ✅ Completed For: GEOG 678 – Web GIS  
