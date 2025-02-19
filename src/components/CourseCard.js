import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p>{course.description}</p>
      <Link to={`/course/${course.id}`} className="text-blue-500">View Course</Link>
    </div>
  );
}

export default CourseCard;