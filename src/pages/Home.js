import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  { id: 1, title: 'Course 1', description: 'Description of Course 1' },
  { id: 2, title: 'Course 2', description: 'Description of Course 2' },
];

function Home() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Welcome to E-Learning Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Home;