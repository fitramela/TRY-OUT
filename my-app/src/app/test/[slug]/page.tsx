"use client"
import { Question } from "@/app/api/Questions/[slug]/route";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const QuizPageRelated = () => {
    const { slug }: {slug : string} = useParams();

    const [questions,setQuestions] = useState<Question[]>([])
    async function getRelatedQuizzes(slug : string) {
        try {
            const response = await fetch(`/api/Questions/${slug}`, {
              cache: 'no-cache',
            })

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (!data || data.length === 0) {
                console.log('No questions found for the given slug.');
            }
            setQuestions(data)
        } catch (error) {
            console.log('Error fetching data:', error);
            
        }
    }

    useEffect(() => {
        getRelatedQuizzes(slug)
    }, [slug])

  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('currentQuestionIndex');
      return saved ? parseInt(saved) : 0;
    }
    return 0;
  });

  const [answers, setAnswers] = useState<{ [key: number]: string }>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('answers');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  const [timer, setTimer] = useState<number>(() => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('timer');
        return saved ? parseInt(saved) : Number(process.env.NEXT_PUBLIC_TIMER) || 300;
    }
    return Number(process.env.NEXT_PUBLIC_TIMER) || 300;
  });

  const [showResults, setShowResults] = useState(false);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
  }, [currentQuestionIndex]);

  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);
  
  useEffect(() => {
    localStorage.setItem('timer', timer.toString());
  }, [timer]);

  // Mengurangi timer setiap detik
  useEffect(() => {
    if (!showResults) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          const newTime = prev > 0 ? prev - 1 : 0;
          if (newTime === 0) {
            setShowResults(true);
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showResults]);

  // Format waktu
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Fungsi untuk menangani jawaban
  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };

  // Navigasi langsung ke soal tertentu
  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  // Mengakhiri tes dan menampilkan hasil
  const finishTest = () => {
    setShowResults(true);
    // Clear localStorage when test is finished
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('answers');
    localStorage.removeItem('timer');
  };

  // Navigasi soal berikutnya
  const nextQuestion = () => {
    if (currentQuestionIndex < (questions?.length ?? 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Navigasi soal sebelumnya
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Hitung skor
  const calculateScore = () => {
    return questions.filter(
      (q, index) => answers[index] === q?.correctanswer
    ).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center p-4 md:p-8">
      {/* Timer */}
      {!showResults && (
        <div className="w-full max-w-4xl mb-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-orange-500">
              Waktu: {formatTime(timer)}
            </div>
            <div className="flex-1 h-2 bg-gray-300 rounded-full ml-4 mr-6 ">
              <div
                className="h-2 bg-orange-500 rounded-full transition-all duration-1000"
                style={{ width: `${(timer / (Number(process.env.NEXT_PUBLIC_TIMER))) * 100}%` }}
              />
            </div>
            <button
              onClick={finishTest}
              className="py-2 px-4 bg-orange-500 text-white rounded-lg shadow-md"
            >
              Akhiri Tes
            </button>
          </div>
        </div>
      )}

      {/* Hasil Tes */}
      {showResults ? (
        <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-4">Hasil Tes</h2>
          <p className="mb-4">Skor Anda: {calculateScore()} / {questions?.length ?? 0}</p>
          <h3 className="text-xl font-semibold mb-4">Pembahasan:</h3>
          <ul className="space-y-4">
            {questions?.map((q, index) => (
              <li key={q?.id} className="p-4 bg-gray-700 rounded-lg">
                <p className="font-bold">
                  {index + 1}. {q?.question}
                </p>
                <p>Jawaban Anda: {answers[index]}</p>
                <p className="text-orange-500">
                  Jawaban Benar: {q?.correctanswer}
                </p>
                <p className="text-gray-400">{q?.explanation}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={() => setShowResults(false)}
              className="py-2 px-4 bg-orange-500 text-white rounded-lg shadow-md"
            >
              Back
            </button>
          </div>
          <div className="mt-4">
            <Link
              href="/"
              className="py-2 px-4 bg-orange-500 text-white rounded-lg shadow-md"
            >
              Go to HomaPage
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Card Soal */}
          <div className="w-full max-w-4xl grid grid-cols-12 gap-4 text-white">
            {/* Sidebar Nomor Soal */}
            <div className="col-span-3 space-y-2">
              {questions?.map((_, index) => (
                <button
                  key={index}
                  className={`w-full py-2 px-4 rounded-lg border text-center ${
                    answers[index]
                      ? "bg-orange-500 text-white"
                      : "bg-gray-700 text-orange-500" 
                  }`}
                  onClick={() => goToQuestion(index)}
                >
                  Soal {index + 1}
                </button>
              ))}
            </div>

            {/* Konten Soal */}
            <div className="col-span-9 bg-gray-800 p-6 rounded-2xl shadow-lg mb-auto">
              <h2 className="text-xl font-semibold mb-4">
                Soal {currentQuestionIndex + 1}/{questions?.length ?? 0}
              </h2>
              {questions?.[currentQuestionIndex]?.image !== null && (
                <img
                  src={questions?.[currentQuestionIndex]?.image}
                  alt="image"
                  className="w-full min-h-56 h-auto object-cover rounded-lg mb-4"
                />
              )}
              <p className="mb-4">{questions?.[currentQuestionIndex]?.question}</p>
              <div className="space-y-2">
                {questions?.[currentQuestionIndex]?.options.map((option) => (
                  <button
                    key={option}
                    className={`w-full py-2 px-4 rounded-lg border text-left ${
                      answers[currentQuestionIndex] === option
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-white" 
                    }`}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
          {/* Navigasi */}
          <div className="flex gap-3 justify-between w-full max-w-md mt-6 mx-auto overflow-auto">
            <button
              onClick={previousQuestion}
              disabled={currentQuestionIndex === 0}
              className="py-2 px-4 bg-gray-700 rounded-lg shadow-md disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentQuestionIndex === (questions?.length ?? 0) - 1}
              className="py-2 px-4 bg-orange-500 text-white rounded-lg shadow-md disabled:opacity-50"
            >
              Berikutnya
            </button>
          </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPageRelated;
