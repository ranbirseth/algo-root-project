# React Dashboard with Vite

This project is a React-based dashboard built with Vite for a fast development experience. It uses Tailwind CSS for styling and is configured with ESLint for code quality.

## Project Overview

- **Vite + React:** Provides a fast and modern development environment.
- **Tailwind CSS:** Quickly style your components with utility-first classes.
- **React Router:** Enables navigation between Login, Signup, and protected Dashboard (Details) pages.
- **Authentication:** A simple authentication flow is implemented using a Context API. The `AuthContext` handles signup, login, and logout functionalities. Protected routes ensure only authenticated users can access specific parts of the app.
- **Dashboard Features:**
  - **Details Page:** Displays a mock user list with search, sort, and pagination features.
  - **Components:** 
    - `Navbar`: Contains user info and actions like logout or account deletion.
    - `Sidebar`: Offers navigation within the dashboard.
- **ESLint Configuration:** Enforces code standards using ESLint with support for React hooks and fast refresh plugins.

## Project Structure

- **Configuration Files:** Vite, Tailwind, PostCSS, and ESLint configurations are set up for development.
- **Pages:** Includes `Login`, `Signup`, and `Details` for different user experiences.
- **Components:** Contains reusable UI elements (`Navbar`, `Sidebar`).
- **Context:** `AuthContext` manages user authentication globally.

## Getting Started

1. Clone the repository.
2. Navigate to the project folder:
   ```
   cd "c:\Users\ranbi\OneDrive\Desktop\projects\New folder\react-dasbord"
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Building for Production

To build the project for production, run:
```
npm run build
```

## Additional Information

Feel free to explore and modify the project. Contributions and feedback are welcome!

## Packages Used

- [React](https://reactjs.org/) - UI library.
- [React DOM](https://reactjs.org/docs/react-dom.html) - DOM rendering.
- [React Router DOM](https://reactrouter.com/) - Routing capabilities.
- [Vite](https://vitejs.dev/) - Fast build tool.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [ESLint](https://eslint.org/) - Code quality and linting.
