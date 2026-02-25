export type Category = 'arithmetic' | 'algebra' | 'word-problems' | 'geometry' | 'data';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Problem {
  id: string;
  topicSlug: string;
  question: string;
  options: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
  difficulty: Difficulty;
}

export interface GlossaryEntry {
  en: string;
  kr: string;
  definition: string;
}

export interface Intuition {
  analogy: string;
  pattern?: string;
  whyItMatters: string;
}

export interface CommonMistake {
  wrong: string;
  correct: string;
  examTip: string;
}

export interface Topic {
  slug: string;
  titleEN: string;
  titleKR: string;
  category: Category;
  estimatedMinutes: number;
  theoryContent: string;
  intuition?: Intuition;
  commonMistakes?: CommonMistake[];
  formulas: string[];
  glossary: GlossaryEntry[];
  problems: Problem[];
  ready: boolean;
}

export interface CategoryInfo {
  id: Category;
  nameEN: string;
  nameKR: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'arithmetic',
    nameEN: 'Arithmetic',
    nameKR: '산술',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    icon: '🔢',
  },
  {
    id: 'algebra',
    nameEN: 'Algebra',
    nameKR: '대수',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
    icon: '📐',
  },
  {
    id: 'word-problems',
    nameEN: 'Word Problems',
    nameKR: '문장제',
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
    icon: '📝',
  },
  {
    id: 'geometry',
    nameEN: 'Geometry',
    nameKR: '기하',
    color: 'bg-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
    icon: '📏',
  },
  {
    id: 'data',
    nameEN: 'Data Interpretation',
    nameKR: '자료 해석',
    color: 'bg-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-700',
    icon: '📊',
  },
];

export function getCategoryInfo(id: Category): CategoryInfo {
  return CATEGORIES.find((c) => c.id === id)!;
}
