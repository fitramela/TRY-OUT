"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

const QuizPage = () => {
  // Data Soal (Contoh)
  const questions = [
    {
      id: 1,
      question: "Apa ibukota Indonesia?",
      options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
      correctAnswer: "Jakarta",
      explanation: "Ibukota Indonesia adalah Jakarta, yang menjadi pusat pemerintahan.",
    },
    {
      id: 2,
      question: "Siapa presiden pertama Indonesia?",
      options: ["Sukarno", "Suharto", "Habibie", "Gus Dur"],
      correctAnswer: "Sukarno",
      explanation: "Sukarno adalah presiden pertama Indonesia, yang memimpin sejak 1945.",
    },
    {
      id: 3,
      question: "Berapa hasil 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
      explanation: "2 + 2 adalah 4, berdasarkan aritmatika dasar.",
    },
    {
      id: 4,
      question: "Siapa nama planet terdekat dengan matahari?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctAnswer: "Mercury",
      explanation: "Mercury adalah planet terdekat dengan matahari, berjarak sekitar 58 juta kilometer.",
    },
    {
      id: 5,
      question: "Berapa hasil 5 x 5?",
      options: ["20", "25", "30", "35"],
      correctAnswer: "25",
      explanation: "5 x 5 adalah 25, berdasarkan aritmatika dasar.",
    },
    {
      id: 6,
      question: "Siapa nama negara yang berbatasan langsung dengan Indonesia?",
      options: ["Malaysia", "Singapore", "Philippines", "Australia"],
      correctAnswer: "Malaysia",
      explanation: "Malaysia adalah negara yang berbatasan langsung dengan Indonesia, melalui perbatasan darat dan laut.",
    },
    {
      id: 7,
      question: "Berapa jumlah provinsi di Indonesia?",
      options: ["30", "31", "32", "33"],
      correctAnswer: "33",
      explanation: "Indonesia terdiri dari 33 provinsi.",
    },
    {
      id: 8,
      question: "Siapa nama gunung tertinggi di Indonesia?",
      options: ["Mount Everest", "Mount Kilimanjaro", "Mount Bromo", "Mount Jayawijaya"],
      correctAnswer: "Mount Jayawijaya",
      explanation: "Gunung tertinggi di Indonesia adalah Gunung Jayawijaya, yang memiliki tinggi 4.884 meter.",
    },
    {
      id: 9,
      question: "Berapa hasil 8 - 2?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "6",
      explanation: "8 - 2 adalah 6, berdasarkan aritmatika dasar.",
    },
    {
      id: 10,
      question: "Siapa nama negara yang berbatasan langsung dengan Indonesia melalui laut?",
      options: ["Malaysia", "Singapore", "Philippines", "Australia"],
      correctAnswer: "Australia",
      explanation: "Australia adalah negara yang berbatasan langsung dengan Indonesia melalui laut.",
    },
    {
      id: 11,
      question: "Berapa jumlah pulau di Indonesia?",
      options: ["17.504", "17.505", "17.506", "17.507"],
      correctAnswer: "17.504",
      explanation: "Indonesia terdiri dari 17.504 pulau.",
    },
    {
      id: 12,
      question: "Siapa nama presiden Indonesia saat ini?",
      options: ["Joko Widodo", "Prabowo Subianto", "Sandiaga Uno", "Jusuf Kalla"],
      correctAnswer: "Joko Widodo",
      explanation: "Presiden Indonesia saat ini adalah Joko Widodo.",
    },
    {
      id: 13,
      question: "Berapa hasil 9 x 9?",
      options: ["80", "81", "82", "83"],
      correctAnswer: "81",
      explanation: "9 x 9 adalah 81, berdasarkan aritmatika dasar.",
    },
    {
      id: 14,
      question: "Siapa nama presiden pertama Indonesia?",
      options: ["Sukarno", "Suharto", "Habibie", "Gus Dur"],
      correctAnswer: "Sukarno",
      explanation: "Sukarno adalah presiden pertama Indonesia, yang memimpin sejak 1945.",
    },
    {
      id: 15,
      question: "Berapa hasil 4 x 4?",
      options: ["14", "15", "16", "17"],
      correctAnswer: "16",
      explanation: "4 x 4 adalah 16, berdasarkan aritmatika dasar.",
    },
    {
      id: 16,
      question: "Siapa nama negara yang berbatasan langsung dengan Indonesia?",
      options: ["Malaysia", "Singapore", "Philippines", "Australia"],
      correctAnswer: "Malaysia",
      explanation: "Malaysia adalah negara yang berbatasan langsung dengan Indonesia, melalui perbatasan darat dan laut.",
    },
    {
      id: 17,
      question: "Berapa hasil 6 + 6?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "12",
      explanation: "6 + 6 adalah 12, berdasarkan aritmatika dasar.",
    },
    {
      id: 18,
      question: "Siapa nama presiden Indonesia yang pertama kali?",
      options: ["Sukarno", "Suharto", "Habibie", "Gus Dur"],
      correctAnswer: "Sukarno",
      explanation: "Sukarno adalah presiden pertama Indonesia, yang memimpin sejak 1945.",
    },
    {
      id: 19,
      question: "Berapa hasil 3 x 3?",
      options: ["9", "8", "7", "6"],
      correctAnswer: "9",
      explanation: "3 x 3 adalah 9, berdasarkan aritmatika dasar.",
    },
    {
      id: 20,
      question: "Siapa nama gunung berapi tertinggi di Indonesia?",
      options: ["Mount Everest", "Mount Kilimanjaro", "Mount Bromo", "Mount Jayawijaya"],
      correctAnswer: "Mount Jayawijaya",
      explanation: "Gunung berapi tertinggi di Indonesia adalah Gunung Jayawijaya, yang memiliki tinggi 4.884 meter.",
    },
    {
      id: 21,
      question: "Berapa hasil 4 - 2?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "2",
      explanation: "4 - 2 adalah 2, berdasarkan aritmatika dasar.",
    },
    {
      id: 22,
      question: "Siapa nama presiden Indonesia yang pernah menjabat?",
      options: ["Sukarno", "Suharto", "Habibie", "Gus Dur"],
      correctAnswer: "Sukarno",
      explanation: "Sukarno adalah presiden pertama Indonesia, yang memimpin sejak 1945.",
    },
    {
      id: 23,
      question: "Berapa hasil 8 + 2?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "10",
      explanation: "8 + 2 adalah 10, berdasarkan aritmatika dasar.",
    },
    {
      id: 24,
      question: "Siapa nama presiden Indonesia yang sedang menjabat?",
      options: ["Joko Widodo", "Prabowo Subianto", "Sandiaga Uno", "Jusuf Kalla"],
      correctAnswer: "Joko Widodo",
      explanation: "Presiden Indonesia saat ini adalah Joko Widodo.",
    },
    {
      id: 25,
      question: "Berapa hasil 9 + 9?",
      options: ["18", "19", "20", "21"],
      correctAnswer: "18",
      explanation: "9 + 9 adalah 18, berdasarkan aritmatika dasar.",
    },
  ];

  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [timer, setTimer] = useState(300); // Timer dalam detik (300 detik = 5 menit)
  const [showResults, setShowResults] = useState(false);

  // Mengurangi timer setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
  };

  // Navigasi soal berikutnya
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
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
      (q, index) => answers[index] === q.correctAnswer
    ).length;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-4 ">
      {/* Timer */}
      {!showResults && (
        <div className="w-full max-w-4xl mb-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-orange-500">
              Waktu: {formatTime(timer)}
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
          <p className="mb-4">Skor Anda: {calculateScore()} / {questions.length}</p>
          <h3 className="text-xl font-semibold mb-4">Pembahasan:</h3>
          <ul className="space-y-4">
            {questions.map((q, index) => (
              <li key={q.id} className="p-4 bg-gray-700 rounded-lg">
                <p className="font-bold">
                  {index + 1}. {q.question}
                </p>
                <p>Jawaban Anda: {answers[index]}</p>
                <p className="text-orange-500">
                  Jawaban Benar: {q.correctAnswer}
                </p>
                <p className="text-gray-400">{q.explanation}</p>
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
              {questions.map((_, index) => (
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
                Soal {currentQuestionIndex + 1}/{questions.length}
              </h2>
              <p className="mb-4">{questions[currentQuestionIndex].question}</p>
              <div className="space-y-2">
                {questions[currentQuestionIndex].options.map((option) => (
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
          <div className="flex justify-between w-full max-w-md mt-6 mx-auto">
            <button
              onClick={previousQuestion}
              disabled={currentQuestionIndex === 0}
              className="py-2 px-4 bg-gray-700 rounded-lg shadow-md disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
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

export default QuizPage;

