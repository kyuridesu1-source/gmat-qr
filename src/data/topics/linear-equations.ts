import { Topic } from '../types';

export const linearEquationsTopic: Topic = {
  slug: 'linear-equations',
  titleEN: 'Linear Equations',
  titleKR: '일차방정식',
  category: 'algebra',
  estimatedMinutes: 20,
  ready: true,

  intuition: {
    analogy:
      '일차방정식은 저울에 비유할 수 있어요. 양쪽 접시에 같은 무게가 놓여 있으면 균형이 맞죠? 양쪽에 같은 것을 더하거나 빼도 균형은 유지됩니다. **Equation**을 풀 때도 마찬가지로 양변에 동일한 연산을 적용하면서 미지수를 한쪽으로 모으는 거예요.',
    pattern:
      'ax + b = c 형태에서 x = (c - b) / a. 항상 상수를 먼저 이항하고, 계수로 나누세요. 연립방정식에서는 계수를 맞춰서 빼거나(elimination), 한 식을 다른 식에 대입(substitution)하는 두 가지 패턴이 반복됩니다.',
    whyItMatters:
      'GMAT QR의 가장 기본적인 문제 유형입니다. 직접 풀기도 하지만, **Word Problem**을 방정식으로 변환하는 능력이 핵심이에요. 특히 "해가 없다 / 무한히 많다" 같은 특수한 경우를 Data Sufficiency에서 자주 출제합니다.',
  },

  commonMistakes: [
    {
      wrong: '이항할 때 부호를 바꾸지 않는다',
      correct:
        '3x + 5 = 20에서 5를 이항하면 3x = 20 - 5 = 15입니다. 이항하면 부호가 반드시 바뀝니다.',
      examTip:
        'GMAT은 계산 실수를 유도하기 위해 선지에 부호 실수를 한 답을 포함합니다. 이항 후 반드시 부호를 확인하세요.',
    },
    {
      wrong: '양변을 변수로 나눌 때 그 변수가 0일 수 있다는 점을 무시한다',
      correct:
        'x(x - 3) = 0에서 양변을 x로 나누면 x = 0인 해를 잃어버립니다. 나누기 전에 나누는 수가 0이 아닌지 반드시 확인해야 합니다.',
      examTip:
        'DS 문제에서 "x ≠ 0"이라는 조건이 주어졌는지 항상 확인하세요. 조건 없이 나누면 해를 놓칩니다.',
    },
    {
      wrong: '연립방정식에서 식 두 개가 있으면 항상 유일한 해가 있다고 생각한다',
      correct:
        '두 식이 사실 같은 식(예: x + y = 3과 2x + 2y = 6)이면 해가 무한히 많고, 모순(예: x + y = 3과 x + y = 5)이면 해가 없습니다.',
      examTip:
        'DS 문제에서 두 조건이 주어져도 독립적인지 확인해야 합니다. 한쪽이 다른 쪽의 배수이면 사실상 하나의 조건과 같습니다.',
    },
    {
      wrong: 'Word problem에서 영어 표현을 잘못 수식화한다',
      correct:
        '"5 more than 3 times x"는 3x + 5이지 3(x + 5)가 아닙니다. "more than"은 앞의 수에 더하는 것입니다.',
      examTip:
        '영어 문장 → 수식 변환 시 "more than", "less than"의 순서에 주의하세요. "A less than B"는 B - A입니다.',
    },
    {
      wrong: '분수가 있는 방정식에서 통분을 생략한다',
      correct:
        'x/2 + x/3 = 10을 풀 때, 양변에 최소공배수 6을 곱하면 3x + 2x = 60 → 5x = 60 → x = 12. 통분하면 분수가 사라져서 훨씬 쉬워집니다.',
      examTip:
        '분수가 보이면 먼저 양변에 LCD(최소공배수)를 곱해서 정수 식으로 바꾸세요. 계산 속도와 정확도가 모두 올라갑니다.',
    },
  ],

  theoryContent: `## 일차방정식의 기본

**Linear Equation (일차방정식)**이란 미지수의 최고차항이 1차인 방정식입니다. 가장 기본적인 형태는 **ax + b = c** (a ≠ 0)입니다.

풀이 순서:
1. 괄호가 있으면 전개한다
2. 미지수 항을 한쪽으로, 상수를 다른 쪽으로 이항한다
3. 동류항을 정리한다
4. 미지수의 계수로 양변을 나눈다

예시: 3(2x - 4) + 5 = 2x + 9
→ 6x - 12 + 5 = 2x + 9
→ 6x - 7 = 2x + 9
→ 4x = 16
→ x = 4

## 연립일차방정식 (Systems of Linear Equations)

미지수가 2개인 **System of Equations (연립방정식)**은 두 개의 일차방정식으로 이루어집니다.

### 대입법 (Substitution)
한 방정식에서 하나의 미지수를 다른 미지수로 표현한 뒤, 나머지 방정식에 대입합니다.

예시: x + y = 10, 2x - y = 5
→ 첫째 식에서 y = 10 - x
→ 둘째 식에 대입: 2x - (10 - x) = 5 → 3x - 10 = 5 → 3x = 15 → x = 5
→ y = 10 - 5 = 5

### 소거법 (Elimination)
두 방정식을 더하거나 빼서 하나의 미지수를 없앱니다.

예시: 3x + 2y = 12, x - 2y = 4
→ 두 식을 더하면: 4x = 16 → x = 4
→ x = 4를 첫째 식에 대입: 12 + 2y = 12 → y = 0

### 해의 개수

연립방정식 a₁x + b₁y = c₁, a₂x + b₂y = c₂에서:
- **유일한 해** (하나의 교점): a₁/a₂ ≠ b₁/b₂
- **해 없음** (평행선): a₁/a₂ = b₁/b₂ ≠ c₁/c₂
- **무한히 많은 해** (같은 직선): a₁/a₂ = b₁/b₂ = c₁/c₂

이 판별법은 GMAT **Data Sufficiency**에서 매우 중요합니다!

## Word Problem → 방정식

GMAT에서 가장 자주 출제되는 유형은 문장을 방정식으로 바꾸는 것입니다.

핵심 영어 표현:
- "**is**" / "**equals**" → =
- "**more than**" → + (예: 5 more than x → x + 5)
- "**less than**" → - (예: 3 less than y → y - 3)
- "**times**" / "**of**" → × (예: twice x → 2x)
- "**sum**" → + , "**difference**" → -
- "**consecutive integers**" → x, x+1, x+2, ...

예시: "두 수의 합이 50이고, 큰 수가 작은 수의 3배보다 2 작다면, 작은 수는?"
→ x + y = 50, y = 3x - 2
→ x + (3x - 2) = 50 → 4x = 52 → x = 13

## 분수와 소수가 포함된 방정식

분수가 있으면 양변에 **LCD (Least Common Denominator)**를 곱하여 정수 계수로 만듭니다.

예시: x/3 + x/4 = 7
→ LCD = 12를 양변에 곱: 4x + 3x = 84 → 7x = 84 → x = 12`,

  formulas: [
    'ax + b = c → x = (c - b) / a',
    '연립방정식 대입법: 한 식에서 y = f(x) 구한 뒤 다른 식에 대입',
    '연립방정식 소거법: 계수 맞추고 두 식을 더하거나 빼기',
    '유일한 해: a₁/a₂ ≠ b₁/b₂',
    '해 없음 (평행): a₁/a₂ = b₁/b₂ ≠ c₁/c₂',
    '무한히 많은 해: a₁/a₂ = b₁/b₂ = c₁/c₂',
    '연속 정수: x, x+1, x+2, ...',
    '연속 짝수/홀수: x, x+2, x+4, ...',
  ],

  glossary: [
    {
      en: 'Linear Equation',
      kr: '일차방정식',
      definition: '미지수의 최고 차수가 1인 방정식. 예: 2x + 3 = 7',
    },
    {
      en: 'Variable',
      kr: '변수 (미지수)',
      definition: '값이 정해지지 않아 구해야 하는 문자. 주로 x, y, z 등을 사용',
    },
    {
      en: 'Coefficient',
      kr: '계수',
      definition: '변수 앞에 곱해진 수. 예: 3x에서 3이 계수',
    },
    {
      en: 'Constant',
      kr: '상수',
      definition: '변하지 않는 고정된 수. 예: 2x + 5에서 5가 상수',
    },
    {
      en: 'System of Equations',
      kr: '연립방정식',
      definition: '두 개 이상의 방정식을 동시에 만족하는 해를 구하는 문제',
    },
    {
      en: 'Substitution',
      kr: '대입법',
      definition: '한 방정식에서 구한 미지수 표현을 다른 방정식에 넣는 풀이법',
    },
    {
      en: 'Elimination',
      kr: '소거법',
      definition: '두 방정식을 더하거나 빼서 하나의 미지수를 없애는 풀이법',
    },
    {
      en: 'Solution',
      kr: '해',
      definition: '방정식을 참으로 만드는 미지수의 값',
    },
    {
      en: 'Transposition',
      kr: '이항',
      definition: '등호를 기준으로 항을 반대편으로 옮기면서 부호를 바꾸는 것',
    },
    {
      en: 'Consecutive Integers',
      kr: '연속하는 정수',
      definition: '차이가 1씩 나는 정수들. 예: 7, 8, 9 또는 x, x+1, x+2',
    },
    {
      en: 'Parallel Lines',
      kr: '평행선',
      definition: '기울기가 같고 y절편이 다른 두 직선. 교점이 없으므로 연립방정식의 해가 없음',
    },
    {
      en: 'LCD (Least Common Denominator)',
      kr: '최소공통분모',
      definition: '여러 분수의 분모들의 최소공배수. 분수 방정식을 정수로 바꿀 때 사용',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: 'lineq-1',
      topicSlug: 'linear-equations',
      question: '3x - 7 = 14일 때, x의 값은?',
      options: ['3', '5', '7', '9', '11'],
      correctIndex: 2,
      explanation:
        '3x - 7 = 14\n3x = 14 + 7 = 21\nx = 21 ÷ 3 = 7\n\n검증: 3(7) - 7 = 21 - 7 = 14 ✓',
      difficulty: 'easy',
    },
    {
      id: 'lineq-2',
      topicSlug: 'linear-equations',
      question: '2(x + 3) = 5x - 9일 때, x의 값은?',
      options: ['3', '4', '5', '6', '7'],
      correctIndex: 2,
      explanation:
        '2(x + 3) = 5x - 9\n2x + 6 = 5x - 9\n6 + 9 = 5x - 2x\n15 = 3x\nx = 5\n\n검증: 좌변 = 2(5 + 3) = 16, 우변 = 5(5) - 9 = 16 ✓',
      difficulty: 'easy',
    },
    {
      id: 'lineq-3',
      topicSlug: 'linear-equations',
      question: 'x + y = 12이고 x - y = 4일 때, x의 값은?',
      options: ['4', '6', '8', '10', '12'],
      correctIndex: 2,
      explanation:
        '두 식을 더하면:\n(x + y) + (x - y) = 12 + 4\n2x = 16\nx = 8\n\n검증: y = 12 - 8 = 4, x - y = 8 - 4 = 4 ✓',
      difficulty: 'easy',
    },
    {
      id: 'lineq-4',
      topicSlug: 'linear-equations',
      question:
        '어떤 수에 5를 더한 후 2를 곱하면 26이 됩니다. 그 수는?',
      options: ['6', '7', '8', '9', '10'],
      correctIndex: 2,
      explanation:
        '어떤 수를 x라 하면:\n2(x + 5) = 26\nx + 5 = 13\nx = 8\n\n검증: (8 + 5) × 2 = 13 × 2 = 26 ✓',
      difficulty: 'easy',
    },
    {
      id: 'lineq-5',
      topicSlug: 'linear-equations',
      question: 'x/4 + 3 = 7일 때, x의 값은?',
      options: ['8', '12', '16', '20', '28'],
      correctIndex: 2,
      explanation:
        'x/4 + 3 = 7\nx/4 = 4\nx = 16\n\n검증: 16/4 + 3 = 4 + 3 = 7 ✓',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: 'lineq-6',
      topicSlug: 'linear-equations',
      question:
        '연속하는 세 홀수(consecutive odd integers)의 합이 57일 때, 가장 큰 수는?',
      options: ['17', '19', '21', '23', '25'],
      correctIndex: 2,
      explanation:
        '연속하는 세 홀수를 x, x+2, x+4로 놓으면:\nx + (x + 2) + (x + 4) = 57\n3x + 6 = 57\n3x = 51\nx = 17\n\n세 수: 17, 19, 21\n가장 큰 수는 21\n\n검증: 17 + 19 + 21 = 57 ✓',
      difficulty: 'medium',
    },
    {
      id: 'lineq-7',
      topicSlug: 'linear-equations',
      question:
        '3x + 2y = 16이고 x + 3y = 17일 때, x + y의 값은?',
      options: ['5', '6', '7', '8', '9'],
      correctIndex: 2,
      explanation:
        '식1: 3x + 2y = 16\n식2: x + 3y = 17\n\n식2 × 3: 3x + 9y = 51\n식1에서 빼기: (3x + 9y) - (3x + 2y) = 51 - 16\n7y = 35 → y = 5\n\n식2에 대입: x + 15 = 17 → x = 2\n\nx + y = 2 + 5 = 7\n\n검증: 3(2) + 2(5) = 16 ✓, 2 + 3(5) = 17 ✓',
      difficulty: 'medium',
    },
    {
      id: 'lineq-8',
      topicSlug: 'linear-equations',
      question:
        '현재 아버지의 나이는 아들의 나이의 4배입니다. 6년 후에 아버지의 나이는 아들의 나이의 3배가 됩니다. 현재 아들의 나이는?',
      options: ['6세', '8세', '10세', '12세', '14세'],
      correctIndex: 3,
      explanation:
        '아들의 현재 나이를 s라 하면, 아버지의 현재 나이는 4s입니다.\n\n6년 후: 아버지 = 4s + 6, 아들 = s + 6\n조건: 4s + 6 = 3(s + 6)\n4s + 6 = 3s + 18\ns = 12\n\n검증: 현재 아들 12세, 아버지 48세\n6년 후: 아들 18세, 아버지 54세\n54 = 3 × 18 ✓',
      difficulty: 'medium',
    },
    {
      id: 'lineq-9',
      topicSlug: 'linear-equations',
      question: 'x/3 + x/6 = 15일 때, x의 값은?',
      options: ['18', '24', '30', '36', '45'],
      correctIndex: 2,
      explanation:
        '양변에 LCD = 6을 곱합니다.\n6 × (x/3) + 6 × (x/6) = 6 × 15\n2x + x = 90\n3x = 90\nx = 30\n\n검증: 30/3 + 30/6 = 10 + 5 = 15 ✓',
      difficulty: 'medium',
    },
    {
      id: 'lineq-10',
      topicSlug: 'linear-equations',
      question:
        '사과 3개와 귤 2개의 가격은 2,600원이고, 사과 1개와 귤 4개의 가격은 2,200원입니다. 사과 1개의 가격은?',
      options: ['400원', '500원', '600원', '700원', '800원'],
      correctIndex: 2,
      explanation:
        '사과 가격을 a, 귤 가격을 b라 하면:\n3a + 2b = 2600 ... (1)\na + 4b = 2200 ... (2)\n\n(2) × 3: 3a + 12b = 6600\n(1)에서 빼기: (3a + 12b) - (3a + 2b) = 6600 - 2600\n10b = 4000 → b = 400\n\n(2)에 대입: a + 1600 = 2200 → a = 600\n\n검증: 3(600) + 2(400) = 1800 + 800 = 2600 ✓\n600 + 4(400) = 600 + 1600 = 2200 ✓',
      difficulty: 'medium',
    },
    {
      id: 'lineq-11',
      topicSlug: 'linear-equations',
      question:
        '다음 연립방정식의 해의 개수는?\n\n2x + 3y = 12\n4x + 6y = 24',
      options: [
        '해가 없다',
        '해가 1개',
        '해가 2개',
        '해가 무한히 많다',
        '판단할 수 없다',
      ],
      correctIndex: 3,
      explanation:
        '두 번째 식을 2로 나누면: 2x + 3y = 12\n첫 번째 식과 완전히 동일합니다.\n\n비율 확인: a₁/a₂ = 2/4 = 1/2, b₁/b₂ = 3/6 = 1/2, c₁/c₂ = 12/24 = 1/2\na₁/a₂ = b₁/b₂ = c₁/c₂ 이므로 두 직선은 완전히 겹칩니다.\n\n따라서 해가 무한히 많습니다.\n예: (0, 4), (3, 2), (6, 0) 등 모두 해입니다.',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: 'lineq-12',
      topicSlug: 'linear-equations',
      question:
        '3x + 4y = 18이고 5x + 6y = 28일 때, 11x + 14y의 값은?',
      options: ['56', '60', '64', '68', '72'],
      correctIndex: 2,
      explanation:
        '먼저 x, y를 구합니다.\n식1 × 3: 9x + 12y = 54\n식2 × 2: 10x + 12y = 56\n\n빼기: x = 2\n식1에 대입: 6 + 4y = 18 → 4y = 12 → y = 3\n\n11x + 14y = 11(2) + 14(3) = 22 + 42 = 64\n\n빠른 풀이: 11x + 14y = 2(3x + 4y) + 1(5x + 6y) = 2(18) + 28 = 64 ✓',
      difficulty: 'hard',
    },
    {
      id: 'lineq-13',
      topicSlug: 'linear-equations',
      question:
        'A가 가진 돈은 B의 2배보다 1,000원 많고, A와 B가 가진 돈의 합은 13,000원입니다. A가 가진 금액은?',
      options: ['7,000원', '8,000원', '9,000원', '10,000원', '11,000원'],
      correctIndex: 2,
      explanation:
        'A = 2B + 1000 ... (1)\nA + B = 13000 ... (2)\n\n(1)을 (2)에 대입:\n(2B + 1000) + B = 13000\n3B + 1000 = 13000\n3B = 12000\nB = 4000\n\nA = 2(4000) + 1000 = 9000\n\n검증: A + B = 9000 + 4000 = 13000 ✓\nA = 2B + 1000 = 8000 + 1000 = 9000 ✓',
      difficulty: 'hard',
    },
    {
      id: 'lineq-14',
      topicSlug: 'linear-equations',
      question:
        '연립방정식 ax + 2y = 6과 3x + ay = 9에서 해가 없으려면 (평행), a의 양수 값은?\n(단, 두 식은 서로 다른 직선이다)',
      options: ['1', '√6', '2', '3', '6'],
      correctIndex: 1,
      explanation:
        '해가 없으려면 (평행): a₁/a₂ = b₁/b₂ ≠ c₁/c₂\n\na/3 = 2/a에서 a² = 6 → a = √6 (a > 0)\n\n비율 확인: a/3 = √6/3, 2/a = 2/√6 = 2√6/6 = √6/3 → 같음 ✓\nc₁/c₂ = 6/9 = 2/3\n√6/3 ≈ 0.816 ≠ 2/3 ≈ 0.667 → 다름 ✓\n\n따라서 a = √6일 때 두 직선은 평행이고 해가 없습니다.',
      difficulty: 'hard',
    },
    {
      id: 'lineq-15',
      topicSlug: 'linear-equations',
      question:
        '세 연속 짝수(consecutive even integers)의 합이 36일 때, 가장 큰 수와 가장 작은 수의 곱은?',
      options: ['120', '128', '140', '160', '168'],
      correctIndex: 2,
      explanation:
        '세 연속 짝수를 x, x+2, x+4로 놓으면:\nx + (x + 2) + (x + 4) = 36\n3x + 6 = 36\n3x = 30\nx = 10\n\n세 수: 10, 12, 14\n가장 큰 수 × 가장 작은 수 = 14 × 10 = 140\n\n검증: 10 + 12 + 14 = 36 ✓',
      difficulty: 'hard',
    },
  ],
};
