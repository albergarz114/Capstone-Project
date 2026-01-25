# Little Lemon Booking Website
// OPEN TWO TERMINALS -> RUN frontend & run server
// I deleted node_modules-> Please use: 'npm install' on your terminal 
# For: META: BACKEND CAPSTONE PROJECT INSTRUCTIONS

-- FOR THE FRONTEND with REACT js: GO TO TERMINAL: (Recommended installin node)
-- 1. Install 'npm install' -> in order to run the Front end server (node_modules)
-- 2. npm start
-- 3. On the web browser Click the 'Reserve Table'

-- Backend:
1. cd server (with virtual environment)
2. cd littlelemon (with virtual environment)
You all know the installations for server side.
pip install mysqlclient
pip install django-cors-headers(Connects frontend to backend)

Browser: Note As soon as you click 'Make Your Reservation' web browser(Frontend): 
you should see the data on -> REST Framework : http://127.0.0.1:8000/api/bookings/

Addition: you if you are connected to msql database the same thing 


# Dockerization: I used Docker for both frontend and Backend

1. Clone the Repository
# git clone https://github.com/albergarz114/Capstone-Project.git
# cd Capstone-Project

2. Launch the Application
# Terminal 1: Start the Backend (Django)
# ON the Terminal docker-compose up --build backend (http://localhost:8000/api/bookings/)

# Terminal 2: Start the Frontend (React)

# docker-compose up --build frontend (http://localhost:3000)

3. To shut down 
# docker-compose down