import React from 'react';

const enrolledCourses = [
  { id: 1, title: 'Course 1', progress: 50 },
  { id: 2, title: 'Course 2', progress: 75 },
];

function Dashboard() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="mb-4">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <div className="w-full bg-gray-200 h-4 rounded">
              <div
                className="bg-blue-500 h-4 rounded"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;