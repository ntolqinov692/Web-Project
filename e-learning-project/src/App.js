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
import Register from "./sections/login/Register";
import CoursePage from "./Pages/course page/CoursePage";
import LearningPage from "./Pages/learning page/LearningPage";
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

                {/* Register Route */}
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

                {/* 404 Route - Redirect to Home */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;