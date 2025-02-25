// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Features from "./sections/features/Features";
import About from "./sections/about/About";
import Courses from "./sections/courses/Courses";
import Team from "./sections/team/Team";
import Testimonial from "./sections/testimonial/Testimonial";
import Blog from "./sections/blog/Blog";
import Footer from "./sections/footer/Footer";
import Login from "./sections/login/Login";
import CoursePage from "./Pages/course page/CoursePage"; // Import the CoursePage
import LearningPage from "./Pages/learning page/LearningPage"; // Import the LearningPage
// src/App.js
import Register from "./sections/login/Register"; // Add this import

// Add this route inside the <Routes> component

import './index.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check if user is authenticated
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Home Route */}
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Features />
                            <About />
                            <Courses />
                            <Team />
                            <Testimonial />
                            <Blog />
                            <Footer />
                        </>
                    }
                />

                {/* Login Route */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected CoursePage Route */}
                <Route
                    path="/courses"
                    element={
                        <ProtectedRoute>
                            <CoursePage />
                        </ProtectedRoute>
                    }
                />

                {/* Protected LearningPage Route */}
                <Route
                    path="/learning/:courseId"
                    element={
                        <ProtectedRoute>
                            <LearningPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;