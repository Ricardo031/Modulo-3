# Interactive Task Management System - Week 4

An interactive web application to manage tasks with a persistent local state and real-time synchronization with a local JSON server.

##  Features

- **Full CRUD Operations**:
  - **GET**: Fetch all tasks from the server/localStorage.
  - **POST**: Add new tasks instantly.
  - **PUT**: Edit existing tasks with real-time updates.
  - **DELETE**: Remove tasks from both server and local storage.
- **Persistent Storage**: Uses `localStorage` as a fallback to ensure data is never lost, even if the server is offline.
- **Manual Sync**: Dedicated "Sync List" button to manually refresh data from the server.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Asynchronous Logic**: Implemented using `async/await` and `try...catch` for robust error handling.

##  Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom styling with Flexbox and Media Queries.
- **JavaScript (ES6+)**: DOM manipulation and Fetch API.
- **JSON Server**: Local REST API simulation.

##  Prerequisites

To run the server locally, you need to have [Node.js](https://nodejs.org/) installed.

##  Installation & Setup

1. **Navigate to the project directory**:
   ```bash
   cd "interactive system/semana4"
   ```

2. **Install JSON Server** (if not already installed):
   ```bash
   npm install -g json-server
   ```

3. **Start the Local Server**:
   Run the following command in your terminal to start the API on port 3001:
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. **Launch the App**:
   Open `index.html` in your favorite web browser.

##  Project Structure

- `index.html`: The main user interface.
- `app.js`: Contains all the application logic and API calls.
- `style.css`: Modern and responsive styles.
- `db.json`: The local database for JSON Server.
- `img/`: Directory for icons and graphic assets.

##  How it Works

The application uses a **"Server as Source of Truth"** strategy. When the page loads, it attempts to fetch data from the server. If successful, it updates the local memory and `localStorage`. If the server is unavailable, it gracefully falls back to the last saved data in `localStorage`.

---
Developed as part of the Riwi JavaScript Module - Week 4.
