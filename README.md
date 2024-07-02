# Gym Exercises App

Welcome to the Gym Exercises App! This project is a React application designed to help users find and explore various exercises. The app utilizes data from an external API to provide detailed information about different exercises, including body parts targeted and equipment used.

## Live Demo

Check out the live demo of the project [here](https://beautiful-unicorn-f06490.netlify.app/).

## Features

- **Search Exercises**: Users can search for exercises by name, target muscle, equipment, or body part.
- **Exercise Details**: Detailed information about each exercise, including a description, target muscles, and equipment.
- **Exercise Videos**: Watch videos related to each exercise for better understanding.
- **Similar Exercises**: Get recommendations for similar exercises based on the current exercise's target muscle or equipment.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Material-UI**: UI component library for React to design a responsive and beautiful UI.
- **RapidAPI**: Used for fetching exercise data from an external API.
- **Netlify**: For deploying the live demo of the application.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/gym-exercises-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd gym-exercises-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your RapidAPI key:
   ```env
   REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
   ```
5. Start the development server:
   ```sh
   npm start
   ```

The app should now be running on `http://localhost:3000`.

## Project Structure

The project has the following structure:
