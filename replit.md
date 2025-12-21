# CrossFit Timer

## Overview
A Progressive Web App (PWA) for tracking CrossFit workout rounds. Users can tap to count rounds, view timing information, and share workout summaries.

## Project Structure
- `index.html` - Main application file with all HTML, CSS, and JavaScript
- `manifest.json` - PWA manifest for installable web app
- `sw.js` - Service worker for offline caching
- `icon-192.png`, `icon-512.png` - App icons

## Technology Stack
- Pure HTML/CSS/JavaScript (no build system)
- Progressive Web App (PWA) with service worker
- Static deployment

## Running Locally
The app is served using Python's built-in HTTP server on port 5000.

## Features
- Round counter with tap-to-increment
- 10-second countdown before workout starts
- Dual timer display: current round time AND total workout time
- Round time history (formatted as MM:SS)
- Workout summary with share functionality
- Offline support via service worker
- Color-coded rounds
- Improved button styling and visual hierarchy
