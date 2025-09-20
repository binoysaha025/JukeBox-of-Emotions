🎵 JukeBox of Emotions

A React web application that recommends Spotify albums based on your current emotional state. Instead of searching for specific artists, users select how they're feeling and discover new music that matches their mood.

Features:

7 Mood Categories: Happy, Sad, Anxious, Energetic, Romantic, Motivated, and Nostalgic
Smart Recommendations: Uses Spotify's search algorithm with curated keywords for each mood
Real-time Results: Fetches live album data from Spotify Web API
Responsive Design: Works seamlessly on desktop and mobile devices
Direct Spotify Links: Click through to listen on Spotify

Technologies Used:

React.js - Frontend framework with hooks (useState, useEffect)
Spotify Web API - Music data and album recommendations
React Bootstrap - UI components and responsive design
JavaScript ES6+ - Modern JavaScript features
Vite - Build tool and development server

 Technical Implementation Breakdown:

 Frontend (What Users See)

HTML: Creates the basic structure - buttons, dropdown menus, and album cards
CSS + Bootstrap: Makes everything look good with colors, spacing, and responsive design
React.js: Handles user interactions and updates the page when users click things
JavaScript: Powers the dropdown selection and manages what mood the user picked

 Backend Logic (How It Thinks)

State Management: Remembers which mood you selected and stores the album results
Mood Mapping: Translates "happy" into search words like "upbeat pop dance party"
Data Processing: Takes messy API data and organizes it into clean album information
Error Handling: Prevents the app from crashing if something goes wrong

 Spotify API Integration (Getting Music Data)

Authentication: Gets permission from Spotify to access their music database
API Calls: Sends your mood keywords to Spotify and asks for matching albums
Data Fetching: Receives album covers, titles, artists, and release dates
Real-time Results: Updates instantly when you select a different mood

 What I Learned

API Integration: Working with OAuth authentication and RESTful APIs
State Management: Using React hooks to manage user selections and API responses
Asynchronous JavaScript: Handling promises and API calls with async/await
User Experience Design: Creating intuitive interfaces that connect emotions to music discovery
Error Handling: Implementing safeguards for API failures and missing data
Component Architecture: Building reusable React components with Bootstrap

 Future Enhancements I can add after learning more!:

 Save favorite albums to personal collection
 Mood history tracking and analytics
 Integration with user's Spotify playlists
 Social features - share mood-based discoveries
 Advanced filtering (genre, decade, popularity)
 Playlist generation based on mood progression
 Integration with mental health tracking 

<img width="1440" height="775" alt="Screenshot 2025-09-15 at 10 45 39 PM" src="https://github.com/user-attachments/assets/15dcd25d-51b4-4e85-be27-f8f04476ac15" />

<img width="1440" height="775" alt="Screenshot 2025-09-15 at 10 45 05 PM" src="https://github.com/user-attachments/assets/24190ce9-3912-4875-9550-f713277c9e01" />


Project Inspiration
This project combines my interests in music and mental health awareness. Music has always been a powerful way to process emotions, and I wanted to create a tool that helps people discover new artists and albums based on their current emotional state rather than just searching by genre or artist name.
Contributing
This project was built as a learning exercise, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.
License
This project is open source and available under the MIT License.

Built with ❤️ for music lovers who want to discover new sounds based on how they feel

"Music is the universal language of mankind" - Henry Wadsworth Longfellow
