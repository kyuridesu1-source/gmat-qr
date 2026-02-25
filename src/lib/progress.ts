'use client';

export interface TopicProgress {
  topicSlug: string;
  correctCount: number;
  totalAttempted: number;
  answeredIds: string[];
  lastAccessedAt: string;
}

const STORAGE_KEY = 'gmat-qr-progress';

function getAll(): Record<string, TopicProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAll(data: Record<string, TopicProgress>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getTopicProgress(slug: string): TopicProgress | null {
  const all = getAll();
  return all[slug] ?? null;
}

export function recordAnswer(
  topicSlug: string,
  problemId: string,
  isCorrect: boolean
) {
  const all = getAll();
  const existing = all[topicSlug] ?? {
    topicSlug,
    correctCount: 0,
    totalAttempted: 0,
    answeredIds: [],
    lastAccessedAt: new Date().toISOString(),
  };

  if (!existing.answeredIds.includes(problemId)) {
    existing.answeredIds.push(problemId);
    existing.totalAttempted += 1;
    if (isCorrect) existing.correctCount += 1;
  }

  existing.lastAccessedAt = new Date().toISOString();
  all[topicSlug] = existing;
  saveAll(all);
  return existing;
}

export function resetTopicProgress(topicSlug: string) {
  const all = getAll();
  delete all[topicSlug];
  saveAll(all);
}

export function getAllProgress(): Record<string, TopicProgress> {
  return getAll();
}
