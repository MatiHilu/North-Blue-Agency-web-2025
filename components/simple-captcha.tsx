"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface SimpleCaptchaProps {
  onValidChange: (isValid: boolean) => void;
  disabled?: boolean;
}

export default function SimpleCaptcha({
  onValidChange,
  disabled = false,
}: SimpleCaptchaProps) {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  // Generate a new math question
  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() > 0.5 ? "+" : "-";

    let result: number;
    let questionText: string;

    if (operator === "+") {
      result = num1 + num2;
      questionText = `${num1} + ${num2} = ?`;
    } else {
      // Ensure we don't have negative results
      const larger = Math.max(num1, num2);
      const smaller = Math.min(num1, num2);
      result = larger - smaller;
      questionText = `${larger} - ${smaller} = ?`;
    }

    setQuestion(questionText);
    setAnswer(result);
    setUserAnswer("");
    setIsValid(false);
    onValidChange(false);
  };

  // Check if the user's answer is correct
  useEffect(() => {
    const userNum = parseInt(userAnswer);
    const valid = !isNaN(userNum) && userNum === answer;
    setIsValid(valid);
    onValidChange(valid);
  }, [userAnswer, answer, onValidChange]);

  // Generate initial question
  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Verificación de seguridad *
      </label>
      <div className="flex items-center space-x-3">
        <span className="text-lg font-mono bg-gray-100 px-3 py-2 rounded border">
          {question}
        </span>
        <Input
          type="number"
          placeholder="Respuesta"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className={`w-32 ${
            isValid
              ? "border-green-500"
              : userAnswer
              ? "border-red-500"
              : "border-gray-300"
          }`}
          disabled={disabled}
          required
        />
        <button
          type="button"
          onClick={generateQuestion}
          disabled={disabled}
          className="text-sm text-blue-600 hover:text-blue-800 disabled:text-gray-400"
        >
          🔄
        </button>
      </div>
      {userAnswer && !isValid && (
        <p className="text-sm text-red-600">Respuesta incorrecta</p>
      )}
      {isValid && (
        <p className="text-sm text-green-600">✓ Verificación correcta</p>
      )}
    </div>
  );
}
