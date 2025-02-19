import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import QuizComponent from '../components/QuizComponent';

const course = {
  id: 1,
  title: 'Course 1',
  lessons: [
    { id: 1, title: 'Lesson 1', videoSrc: 'path_to_video.mp4' },
    { id: 2, title: 'Lesson 2', videoSrc: 'path_to_video.mp4' },
  ],
  quizzes: [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      correctAnswer: '4',
    },
  ],
};

function CoursePage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <div className="mt-4">
        {course.lessons.map((lesson) => (
          <div key={lesson.id}>
            <h2 className="text-xl font-bold">{lesson.title}</h2>
            <VideoPlayer src={lesson.videoSrc} />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Quiz</h2>
        <QuizComponent questions={course.quizzes} />
      </div>
    </div>
  );
}

export default CoursePage;