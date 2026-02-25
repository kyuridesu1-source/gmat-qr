'use client';

import { useState, useEffect, useCallback } from 'react';
import { type Problem } from '@/data/types';
import { recordAnswer, getTopicProgress, resetTopicProgress } from '@/lib/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface PracticeProblemsProps {
  problems: Problem[];
  topicSlug: string;
}

export function PracticeProblems({ problems, topicSlug }: PracticeProblemsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answeredProblems, setAnsweredProblems] = useState<Set<string>>(new Set());
  const [sessionComplete, setSessionComplete] = useState(false);

  useEffect(() => {
    const progress = getTopicProgress(topicSlug);
    if (progress) {
      setScore({ correct: progress.correctCount, total: progress.totalAttempted });
      setAnsweredProblems(new Set(progress.answeredIds));
      if (progress.totalAttempted >= problems.length) {
        setSessionComplete(true);
      }
    }
  }, [topicSlug, problems.length]);

  const problem = problems[currentIndex];

  const handleSubmit = useCallback(() => {
    if (selectedOption === null || submitted) return;
    const isCorrect = selectedOption === problem.correctIndex;
    const progress = recordAnswer(topicSlug, problem.id, isCorrect);
    setSubmitted(true);
    setScore({ correct: progress.correctCount, total: progress.totalAttempted });
    setAnsweredProblems(new Set(progress.answeredIds));
    if (progress.totalAttempted >= problems.length) {
      setSessionComplete(true);
    }
  }, [selectedOption, submitted, problem, topicSlug, problems.length]);

  const handleNext = () => {
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setSubmitted(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    resetTopicProgress(topicSlug);
    setScore({ correct: 0, total: 0 });
    setAnsweredProblems(new Set());
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setSessionComplete(false);
  };

  const difficultyColor = {
    easy: 'bg-green-100 text-green-700 border-green-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    hard: 'bg-red-100 text-red-700 border-red-200',
  };

  const difficultyLabel = {
    easy: '쉬움',
    medium: '보통',
    hard: '어려움',
  };

  const isAlreadyAnswered = answeredProblems.has(problem.id);
  const progressPercent = problems.length > 0 ? (score.total / problems.length) * 100 : 0;

  if (sessionComplete) {
    const percentage = problems.length > 0 ? Math.round((score.correct / problems.length) * 100) : 0;
    return (
      <div className="space-y-6">
        <div className="text-center py-12 space-y-4">
          <div className="text-5xl">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '💪'}
          </div>
          <h3 className="text-2xl font-bold">연습 완료!</h3>
          <p className="text-lg text-muted-foreground">
            {problems.length}문제 중 <span className="font-semibold text-foreground">{score.correct}문제</span> 정답
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold">{percentage}%</span>
          </div>
          <div className="max-w-xs mx-auto">
            <Progress value={percentage} className="h-3" />
          </div>
          <div className="pt-4 flex gap-3 justify-center">
            <Button onClick={handleReset} variant="outline">
              다시 풀기
            </Button>
            <Button onClick={() => { setSessionComplete(false); setCurrentIndex(0); setSelectedOption(null); setSubmitted(false); }}>
              문제 복습하기
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <Progress value={progressPercent} className="flex-1 h-2" />
        <span className="text-sm text-muted-foreground shrink-0">
          {score.total}/{problems.length}
        </span>
        <span className="text-sm font-medium shrink-0">
          정답 {score.correct}개
        </span>
      </div>

      {/* Problem card */}
      <div className="border rounded-xl p-6 bg-card">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">
            문제 {currentIndex + 1} / {problems.length}
          </span>
          <Badge variant="outline" className={difficultyColor[problem.difficulty]}>
            {difficultyLabel[problem.difficulty]}
          </Badge>
        </div>

        <p className="text-base leading-relaxed mb-6 whitespace-pre-line">
          {problem.question}
        </p>

        {/* Options */}
        <div className="space-y-2">
          {problem.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedOption === idx;
            const isCorrect = idx === problem.correctIndex;

            let optionStyle = 'border-border hover:border-foreground/30 hover:bg-accent/50';
            if (submitted) {
              if (isCorrect) {
                optionStyle = 'border-green-500 bg-green-50 text-green-900';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'border-red-500 bg-red-50 text-red-900';
              } else {
                optionStyle = 'border-border opacity-50';
              }
            } else if (isSelected) {
              optionStyle = 'border-primary bg-primary/5 ring-1 ring-primary';
            }

            return (
              <button
                key={idx}
                onClick={() => !submitted && setSelectedOption(idx)}
                disabled={submitted}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg border transition-all flex items-start gap-3',
                  optionStyle
                )}
              >
                <span className={cn(
                  'shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium border',
                  submitted && isCorrect
                    ? 'bg-green-500 text-white border-green-500'
                    : submitted && isSelected && !isCorrect
                    ? 'bg-red-500 text-white border-red-500'
                    : isSelected
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border'
                )}>
                  {submitted && isCorrect ? '✓' : submitted && isSelected && !isCorrect ? '✗' : letter}
                </span>
                <span className="pt-0.5">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Submit / Explanation */}
        {!submitted && (
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="px-8"
            >
              제출
            </Button>
          </div>
        )}

        {submitted && (
          <div className={cn(
            'mt-6 p-4 rounded-lg border',
            selectedOption === problem.correctIndex
              ? 'bg-green-50 border-green-200'
              : 'bg-red-50 border-red-200'
          )}>
            <p className="font-semibold mb-2">
              {selectedOption === problem.correctIndex ? '✅ 정답입니다!' : '❌ 오답입니다'}
            </p>
            <p className="text-sm leading-relaxed whitespace-pre-line">{problem.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ← 이전
          </Button>
          <div className="flex gap-1">
            {problems.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setSelectedOption(null);
                  setSubmitted(false);
                }}
                className={cn(
                  'w-2 h-2 rounded-full transition-colors',
                  idx === currentIndex
                    ? 'bg-primary'
                    : answeredProblems.has(p.id)
                    ? 'bg-green-400'
                    : 'bg-border'
                )}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            onClick={handleNext}
            disabled={currentIndex === problems.length - 1}
          >
            다음 →
          </Button>
        </div>
      </div>
    </div>
  );
}
