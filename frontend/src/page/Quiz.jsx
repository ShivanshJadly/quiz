import React, { useState, useEffect } from 'react';
import { getQuiz } from '../services/operations/quizAPI';
import { useNavigate } from 'react-router-dom';
import { saveAttempt } from '../services/operations/attemptAPI';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../slices/authSlice';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showFeedback, setShowFeedback] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const username = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await getQuiz();
        console.log("API Response:", response);
        if (response?.data?.data) {
          setQuestions(response.data.data);
        } else {
          console.error("Invalid response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }
    fetchQuestions();
  }, []);

  useEffect(() => {
    setTimeLeft(30);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNext();
    }
  }, [timeLeft]);

  const handleNext = () => {

    setShowFeedback(false);
    setSelectedAnswer(null);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
    } else {
      alert("Quiz Complete!");
      handleQuizComplete();
    }
  };

  const handleSubmit = async () => {
    if (!selectedAnswer) {
      alert("Please select an answer first!");
      return;
    }
    
    const currentOption = questions[currentQuestionIndex].options.find(opt => opt._id === selectedAnswer);
    const isCorrect = currentOption.isCorrect;
    
    if (!isCorrect) {
      setWrongAttempts(prev => prev + 1);
    }

    // Save the attempt
    try {
      await saveAttempt(username, questions[currentQuestionIndex].quizId, selectedAnswer, isCorrect);
    } catch (error) {
      console.error("Error saving attempt:", error);
    }
    
    setShowFeedback(true);
  };

  const handleQuizComplete = () => {
    navigate('/result', { 
      state: { 
        username: 'username_value',
        totalQuestions: questions.length,
        wrongAttempts: wrongAttempts
      } 
    });
  };

  // console.log("questions",questions)

  if (questions.length === 0) {
    return <div className="text-center text-white">Loading Quiz...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <div className='min-h-screen bg-[#5E35B1] flex justify-center items-center flex-col'>
      <h1 className='text-8xl font-bold mb-4 text-[#FFC107]'>QUIZ!!</h1>
      <div className='text-lg font-bold mb-2'>
        <span className={timeLeft <= 10 ? 'text-red-500' : 'text-white'}>
          Time Left: {timeLeft}s
        </span>
      </div>
      <section className='bg-white p-6 rounded-2xl shadow-lg w-96 text-center border-3 border-black'>
        <h2 className='text-lg font-semibold mb-4'>{currentQuestion.question}</h2>
        <div className='flex flex-col gap-2 text-left mt-4'>
          {currentQuestion.options.map((option) => (
            <label
              key={option._id}
              className={`p-2 rounded cursor-pointer flex items-center ${
                selectedAnswer === option._id 
                  ? showFeedback
                    ? option.isCorrect 
                      ? "bg-green-200" 
                      : "bg-red-200"
                    : "bg-blue-200"
                  : showFeedback && option.isCorrect
                  ? "bg-green-200"
                  : "bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="answer"
                className="mr-2"
                value={option._id}
                checked={selectedAnswer === option._id}
                onChange={() => !showFeedback && setSelectedAnswer(option._id)}
                disabled={showFeedback}
              />
              {option.text}
            </label>
          ))}
        </div>
        <div className='flex justify-between mt-4'>
          <button 
            onClick={handleNext} 
            className='bg-blue-500 text-white px-4 py-2 rounded-lg'
          >
            Next
          </button>
          {!showFeedback && (
            <button 
              onClick={handleSubmit} 
              className='bg-green-500 text-white px-4 py-2 rounded-lg'
            >
              Submit
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
