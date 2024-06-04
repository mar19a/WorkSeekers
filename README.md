# WorkSeekers Job Listing Application

## Overview

WorkSeekers is a job listing application built with React and Expo. It allows users to search for job opportunities, view popular and nearby jobs, and apply for them. The application uses the jsearch API from RapidAPI to fetch job data and integrates Firebase for user authentication and job saving features.

<img width="1440" alt="Screenshot 2024-06-04 at 3 58 07 PM" src="https://github.com/mar19a/WorkSeekers/assets/84360137/4f7fde3f-6d36-40bb-849e-3ac4dc1d68ce">

## Features

<img width="1440" alt="Screenshot 2024-06-04 at 3 58 35 PM" src="https://github.com/mar19a/WorkSeekers/assets/84360137/48cff124-a7a8-4695-9f83-3d8eb4758c0e"> <img width="1440" alt="Screenshot 2024-06-04 at 3 58 43 PM" src="https://github.com/mar19a/WorkSeekers/assets/84360137/ec7fd56a-5a61-40c5-afa1-d3668436b848"> <img width="1440" alt="Screenshot 2024-06-04 at 3 58 52 PM" src="https://github.com/mar19a/WorkSeekers/assets/84360137/6f08423d-d7a6-4be1-8ad4-1a25d7138b68"> <img width="1440" alt="Screenshot 2024-06-04 at 3 59 16 PM" src="https://github.com/mar19a/WorkSeekers/assets/84360137/5a654bb8-f9a7-4cd9-9380-b06536a5efd0"> <img width="1440" alt="Screenshot 2024-06-04 at 3 59 31 PM" src="https://github.com/mar19a/WorkSeekers/assets/84360137/58458b68-5b30-4c2d-a791-d5e7079fbf24">

### Home Screen
- **Welcome Component**: Allows users to enter a search term to find job listings.
- **Popular Jobs Component**: Displays a list of popular job postings.
- **Nearby Jobs Component**: Shows job opportunities near the user's location.
- **Header Buttons**: Includes buttons for navigation and user profile.

### Job Search
- **Search Functionality**: Users can search for jobs based on a search term.
- **Search Results**: Displays a list of job results with pagination.
- **Error Handling**: Displays an error message if the job search fails.
- **Loading Indicator**: Shows a loading indicator while fetching job data.

### Custom Hook - `useFetch`
- **Data Fetching**: Fetches job data from the jsearch API.
- **State Management**: Manages loading, data, and error states.
- **Refetch Functionality**: Allows data to be refetched on demand.

## Installation

To get started with the WorkSeekers application, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/workseekers.git
   cd workseekers
   
2. **Install dependencies**:
   npm install

3. **Run the application**
   npm start

## Usage

### Home Screen
- Enter a search term in the search bar and click the search button to find job listings.
- Browse through popular and nearby jobs.

### Job Search
- View the search results based on the entered search term.
- Use the oagination buttons to navigate through the job listings.
- Click on a job to view more details and apply.

## Technologies Used:
- **React**: JavaScript library for building user interfaces.
- **Expo**: Framework and platform for universal React Applications.
- **Axios**: Promise-based HTTP client for making API requests.

## Project Structure

src/
├── components/
│   ├── Nearbyjobs/
│   ├── Popularjobs/
│   ├── ScreenHeaderBtn/
│   ├── Welcome/
│   └── ...
├── constants/
├── hooks/
│   └── useFetch.js
├── screens/
│   ├── Home.js
│   ├── JobSearch.js
│   └── ...
├── styles/
│   └── search.js
├── App.js
└── ...

## Contributing
If you wish to contribute to the project, please follow these steps:
1. **Fork the repository**
2. **Create a new branch**
   git checkout -b feature-branch
3. **Make your changes and commit**
   git commit -m "Description of your changes"
4. **Push to the branch**
   git push origin feature-branch
5. **Create a Pull Request** on Github.

## License
This project is licensed under the MIT License.

## Acknowledgments
- Thanks to the developers of the Jsearch API for their great services.
- Inspired by various job listing applications and community contributions.
