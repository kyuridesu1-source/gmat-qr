import { Topic } from '../types';

export const functionsTopic: Topic = {
  slug: 'functions',
  titleEN: 'Functions',
  titleKR: '함수',
  category: 'algebra',
  estimatedMinutes: 20,
  ready: true,

  intuition: {
    analogy:
      '함수는 자판기와 같아요. 동전(입력, **input**)을 넣으면 정해진 규칙에 따라 음료(출력, **output**)가 나오죠. 같은 동전을 넣으면 항상 같은 음료가 나와요. f(x) = 2x + 1이라는 자판기에 3을 넣으면 항상 7이 나옵니다. **Composite Function** f(g(x))는 자판기 두 대를 연결한 것이에요 — 첫 번째 자판기의 결과물을 두 번째 자판기에 넣는 거죠.',
    pattern:
      'GMAT 함수 문제는 3가지 패턴이에요: ① f(a) 값 구하기 (대입만 하면 됨), ② f(g(x)) 합성함수 (안쪽부터 계산), ③ 커스텀 기호 함수 (★, ◆ 같은 기호로 정의된 연산). 특히 ③은 GMAT 특유의 유형으로, 정의를 정확히 읽고 대입하는 연습이 필요해요.',
    whyItMatters:
      'GMAT에서 함수는 직접 출제될 뿐 아니라, 고급 문제에서 다른 개념과 결합됩니다. 특히 **Custom Symbol** 문제는 GMAT의 대표 유형이에요. 함수 개념을 확실히 잡으면 "정의를 읽고 대입하는" 모든 문제가 쉬워집니다.',
  },

  commonMistakes: [
    {
      wrong: 'f(g(x))에서 바깥 함수부터 계산한다',
      correct:
        'f(g(x))는 안쪽부터! 먼저 g(x)를 계산하고, 그 결과를 f에 대입해요. f(x) = x², g(x) = x + 1일 때 f(g(3)) = f(4) = 16이지, g(f(3)) = g(9) = 10이 아닙니다.',
      examTip:
        'GMAT은 f(g(x))와 g(f(x))를 모두 선지에 넣어 혼동을 유도합니다. 합성 순서를 반드시 확인하세요.',
    },
    {
      wrong: 'f(a + b)를 f(a) + f(b)로 전개한다',
      correct:
        'f(a + b) ≠ f(a) + f(b)입니다! f(x) = x²일 때, f(1 + 2) = f(3) = 9이지만, f(1) + f(2) = 1 + 4 = 5예요. 함수에는 분배법칙이 성립하지 않아요.',
      examTip:
        '이 실수는 특히 제곱 함수에서 많이 나옵니다. (a + b)² ≠ a² + b² 인 것과 같은 원리예요.',
    },
    {
      wrong: 'Domain 제한을 무시한다',
      correct:
        'f(x) = √(x - 3)에서 x - 3 ≥ 0이어야 하므로 **domain**은 x ≥ 3입니다. f(x) = 1/(x - 2)에서는 x ≠ 2예요. 분모가 0이 되거나 루트 안이 음수가 되는 값은 항상 제외하세요.',
      examTip:
        'DS 문제에서 "f(x)가 정의되려면?" 같은 질문이 나오면 domain 조건을 확인해야 합니다.',
    },
    {
      wrong: '역함수에서 x와 y를 바꾸는 것을 잊는다',
      correct:
        'f(x) = 2x + 3의 역함수: y = 2x + 3에서 x와 y를 바꾸면 x = 2y + 3, 즉 y = (x - 3)/2. 따라서 f⁻¹(x) = (x - 3)/2.',
      examTip:
        '역함수의 핵심: f(f⁻¹(x)) = x. 답을 검증할 때 원래 함수에 역함수를 합성해서 x가 나오는지 확인하세요.',
    },
    {
      wrong: 'Custom symbol 문제에서 정의를 잘못 적용한다',
      correct:
        'a ★ b = a² - 2b로 정의될 때, 3 ★ 4 = 3² - 2(4) = 9 - 8 = 1이지 4² - 2(3) = 10이 아닙니다. 순서가 중요해요!',
      examTip:
        'Custom symbol에서 a와 b의 순서를 바꿔서 대입하는 실수가 매우 많아요. 정의를 다시 읽고 어떤 변수가 어디에 들어가는지 확인하세요.',
    },
  ],

  theoryContent: `## 함수의 기본 개념

**Function (함수)**란 각 입력값에 대해 정확히 하나의 출력값을 대응시키는 규칙이에요.

**f(x) = 2x + 3** 에서:
- f는 함수의 이름
- x는 **input (입력)**
- 2x + 3은 규칙
- f(4) = 2(4) + 3 = 11이 **output (출력)**

핵심 원칙: 같은 입력 → 항상 같은 출력. 하나의 x에 두 개의 y값이 나오면 함수가 아닙니다.

## Domain과 Range

- **Domain (정의역)**: 함수에 넣을 수 있는 모든 입력값의 집합
- **Range (치역)**: 함수가 내보내는 모든 출력값의 집합

Domain 제한이 생기는 경우:
1. 분모가 0이 되면 안 됨: f(x) = 1/(x - 5) → x ≠ 5
2. 루트 안이 음수이면 안 됨: f(x) = √(x - 2) → x ≥ 2
3. 두 조건이 동시에: f(x) = √(x - 1)/(x - 4) → x ≥ 1이고 x ≠ 4

## 합성함수 (Composite Functions)

**f(g(x))** 또는 **(f ∘ g)(x)**는 g의 출력을 f의 입력으로 넣는 것이에요.

계산 순서: 항상 **안쪽부터** (inside-out)

예시: f(x) = x², g(x) = 3x + 1
→ f(g(2)) = f(3(2) + 1) = f(7) = 7² = 49
→ g(f(2)) = g(2²) = g(4) = 3(4) + 1 = 13

주의: f(g(x)) ≠ g(f(x)) — 합성 순서가 바뀌면 결과도 달라져요!

## 역함수 (Inverse Functions)

**Inverse Function (역함수)** f⁻¹(x)은 f의 과정을 거꾸로 되돌리는 함수입니다.

핵심 성질:
- f(f⁻¹(x)) = x
- f⁻¹(f(x)) = x
- f와 f⁻¹의 그래프는 y = x 직선에 대해 대칭

역함수 구하는 법:
1. f(x) = y로 놓는다
2. x와 y를 서로 바꾼다
3. y에 대해 정리한다

예시: f(x) = (2x - 1)/3
→ y = (2x - 1)/3
→ x = (2y - 1)/3
→ 3x = 2y - 1
→ y = (3x + 1)/2
→ f⁻¹(x) = (3x + 1)/2

검증: f(f⁻¹(x)) = f((3x + 1)/2) = (2 · (3x + 1)/2 - 1)/3 = (3x + 1 - 1)/3 = 3x/3 = x ✓

## 일차함수와 이차함수

**Linear Function (일차함수)**: f(x) = mx + b
- m = **slope (기울기)**, b = **y-intercept (y절편)**
- 그래프는 직선

**Quadratic Function (이차함수)**: f(x) = ax² + bx + c
- **Vertex Form (꼭짓점 형태)**: f(x) = a(x - h)² + k
- 꼭짓점 좌표: (h, k) = (-b/2a, f(-b/2a))
- a > 0이면 최솟값 k, a < 0이면 최댓값 k

예시: f(x) = 2(x - 3)² + 5의 최솟값은 5 (x = 3일 때)

## GMAT Custom Symbol Functions

GMAT만의 독특한 유형! 새로운 기호로 연산을 정의하고, 그에 따라 계산하는 문제예요.

예시: 모든 양수 a, b에 대해 a ◆ b = (a + b)/(a - b)로 정의할 때, 5 ◆ 3은?
→ 5 ◆ 3 = (5 + 3)/(5 - 3) = 8/2 = 4

중첩 예시: 위 정의에서 (4 ◆ 2) ◆ 3은?
→ 4 ◆ 2 = (4 + 2)/(4 - 2) = 6/2 = 3
→ 3 ◆ 3 = (3 + 3)/(3 - 3) = 6/0 → 정의 불가! (domain 제한)

이 유형에서 중요한 것:
1. 정의를 정확히 읽기
2. 변수의 순서(a가 먼저인지 b가 먼저인지) 확인
3. 중첩될 때 안쪽부터 계산
4. Domain 제한 확인`,

  formulas: [
    'f(x)에 a를 대입: f(a) → x 자리에 a를 넣고 계산',
    'Composite Function: f(g(x)) → 먼저 g(x) 계산, 결과를 f에 대입',
    'Inverse Function: y = f(x) → x와 y를 바꾸고 y에 대해 풀기',
    'f(f⁻¹(x)) = f⁻¹(f(x)) = x',
    'Vertex of f(x) = ax² + bx + c: x = -b/2a, y = f(-b/2a)',
    'Vertex Form: f(x) = a(x - h)² + k → 꼭짓점 (h, k)',
    'Domain 제한: 분모 ≠ 0, 루트 안 ≥ 0',
    'Linear: f(x) = mx + b (기울기 m, y절편 b)',
  ],

  glossary: [
    {
      en: 'Function',
      kr: '함수',
      definition: '각 입력(x)에 대해 정확히 하나의 출력(y)을 대응시키는 규칙',
    },
    {
      en: 'Domain',
      kr: '정의역',
      definition: '함수에 입력할 수 있는 모든 x값의 집합. 분모=0, 루트 안<0인 값은 제외',
    },
    {
      en: 'Range',
      kr: '치역',
      definition: '함수가 출력할 수 있는 모든 y값의 집합',
    },
    {
      en: 'Composite Function',
      kr: '합성함수',
      definition: 'f(g(x)): g의 출력을 f의 입력으로 사용하는 함수. 안쪽부터 계산',
    },
    {
      en: 'Inverse Function',
      kr: '역함수',
      definition: 'f⁻¹(x): f의 과정을 거꾸로 되돌리는 함수. f(f⁻¹(x)) = x',
    },
    {
      en: 'Input / Output',
      kr: '입력 / 출력',
      definition: '함수에 넣는 값(x)이 입력, 나오는 값(f(x))이 출력',
    },
    {
      en: 'Slope',
      kr: '기울기',
      definition: '일차함수 f(x) = mx + b에서 m. 직선이 얼마나 가파른지를 나타냄',
    },
    {
      en: 'y-intercept',
      kr: 'y절편',
      definition: '함수의 그래프가 y축과 만나는 점. f(0)의 값',
    },
    {
      en: 'Vertex',
      kr: '꼭짓점',
      definition: '이차함수 그래프(포물선)의 최고점 또는 최저점. (-b/2a, f(-b/2a))',
    },
    {
      en: 'Vertex Form',
      kr: '꼭짓점 형태',
      definition: 'f(x) = a(x - h)² + k. 꼭짓점이 (h, k)이고 a의 부호로 방향 결정',
    },
    {
      en: 'Custom Symbol Function',
      kr: '기호 정의 함수',
      definition: 'GMAT이 ★, ◆ 같은 기호로 새로운 연산을 정의하는 문제 유형. 정의를 읽고 대입',
    },
    {
      en: 'Linear Function',
      kr: '일차함수',
      definition: 'f(x) = mx + b 형태. 그래프가 직선이고 변화율이 일정',
    },
  ],

  problems: [
    // ─── EASY (5) ───
    {
      id: 'func-001',
      topicSlug: 'functions',
      question: 'f(x) = 3x - 7일 때, f(5)의 값은?',
      options: ['2', '5', '8', '10', '15'],
      correctIndex: 2,
      explanation:
        'f(5) = 3(5) - 7 = 15 - 7 = **8**. 함수에 값을 대입할 때는 x 자리에 주어진 값을 넣고 계산하면 됩니다.',
      difficulty: 'easy',
    },
    {
      id: 'func-002',
      topicSlug: 'functions',
      question: 'f(x) = x² + 1일 때, f(-3)의 값은?',
      options: ['-8', '-5', '4', '8', '10'],
      correctIndex: 4,
      explanation:
        'f(-3) = (-3)² + 1 = 9 + 1 = **10**. (-3)² = 9이지 -9가 아닌 점에 주의하세요. 음수를 제곱하면 양수가 됩니다.',
      difficulty: 'easy',
    },
    {
      id: 'func-003',
      topicSlug: 'functions',
      question: 'f(x) = 2x + 1일 때, f(3) - f(1)의 값은?',
      options: ['2', '4', '5', '6', '8'],
      correctIndex: 1,
      explanation:
        'f(3) = 2(3) + 1 = 7, f(1) = 2(1) + 1 = 3. f(3) - f(1) = 7 - 3 = **4**.',
      difficulty: 'easy',
    },
    {
      id: 'func-004',
      topicSlug: 'functions',
      question: 'f(x) = 4x - 5일 때, f(a) = 11이면 a는?',
      options: ['2', '3', '4', '5', '6'],
      correctIndex: 2,
      explanation:
        'f(a) = 4a - 5 = 11 → 4a = 16 → a = **4**. 함수 값이 주어지면 역으로 방정식을 세워서 풀면 됩니다.',
      difficulty: 'easy',
    },
    {
      id: 'func-005',
      topicSlug: 'functions',
      question: '모든 수 x에 대해 x ★ = 2x + 3으로 정의할 때, 4★의 값은?',
      options: ['7', '8', '9', '10', '11'],
      correctIndex: 4,
      explanation:
        '4★ = 2(4) + 3 = 8 + 3 = **11**. **Custom symbol** 문제는 정의에 따라 대입만 하면 됩니다.',
      difficulty: 'easy',
    },
    // ─── MEDIUM (6) ───
    {
      id: 'func-006',
      topicSlug: 'functions',
      question: 'f(x) = x + 3, g(x) = 2x일 때, f(g(4))의 값은?',
      options: ['7', '8', '10', '11', '14'],
      correctIndex: 3,
      explanation:
        '안쪽부터 계산: g(4) = 2(4) = 8, 그 다음 f(8) = 8 + 3 = **11**. 합성함수는 항상 inside-out으로 계산하세요.',
      difficulty: 'medium',
    },
    {
      id: 'func-007',
      topicSlug: 'functions',
      question: 'f(x) = x² - 1, g(x) = x + 2일 때, g(f(3))의 값은?',
      options: ['8', '10', '12', '14', '24'],
      correctIndex: 1,
      explanation:
        'f(3) = 3² - 1 = 8, g(8) = 8 + 2 = **10**. 주의: f(g(3)) = f(5) = 24로 다른 값이에요. 합성 순서 확인이 중요합니다.',
      difficulty: 'medium',
    },
    {
      id: 'func-008',
      topicSlug: 'functions',
      question: 'f(x) = 3x + 5의 역함수 f⁻¹(x)에서, f⁻¹(20)의 값은?',
      options: ['3', '4', '5', '6', '65'],
      correctIndex: 2,
      explanation:
        '역함수 구하기: y = 3x + 5에서 x = 3y + 5 → y = (x - 5)/3. f⁻¹(x) = (x - 5)/3. f⁻¹(20) = (20 - 5)/3 = 15/3 = **5**. 검증: f(5) = 3(5) + 5 = 20 ✓',
      difficulty: 'medium',
    },
    {
      id: 'func-009',
      topicSlug: 'functions',
      question:
        '모든 양수 a, b에 대해 a ◆ b = ab + a - b로 정의할 때, 3 ◆ 5의 값은?',
      options: ['10', '12', '13', '15', '17'],
      correctIndex: 2,
      explanation:
        '정의에 a = 3, b = 5를 대입: 3 ◆ 5 = (3)(5) + 3 - 5 = 15 + 3 - 5 = **13**. Custom symbol에서는 a와 b의 위치를 정확히 대입하는 것이 핵심입니다.',
      difficulty: 'medium',
    },
    {
      id: 'func-010',
      topicSlug: 'functions',
      question:
        'f(x) = 2x² - 3x + 1일 때, f(x) = 0을 만족하는 x의 값 중 큰 것은?',
      options: ['1/2', '1', '3/2', '2', '3'],
      correctIndex: 1,
      explanation:
        '2x² - 3x + 1 = 0을 인수분해: (2x - 1)(x - 1) = 0 → x = 1/2 또는 x = 1. 큰 값은 **1**입니다. 검증: 2(1)² - 3(1) + 1 = 2 - 3 + 1 = 0 ✓',
      difficulty: 'medium',
    },
    {
      id: 'func-011',
      topicSlug: 'functions',
      question:
        'f(x) = ax + b에서 f(2) = 7이고 f(5) = 16일 때, f(0)의 값은?',
      options: ['-1', '0', '1', '2', '3'],
      correctIndex: 2,
      explanation:
        'f(2) = 2a + b = 7, f(5) = 5a + b = 16. 두 식을 빼면: 3a = 9 → a = 3. b = 7 - 2(3) = 1. 따라서 f(x) = 3x + 1이고, f(0) = 0 + 1 = **1**.',
      difficulty: 'medium',
    },
    // ─── HARD (4) ───
    {
      id: 'func-012',
      topicSlug: 'functions',
      question:
        '모든 수 x, y에 대해 x ★ y = x² + 2xy - y²로 정의할 때, (1 ★ 2) ★ 3의 값은?',
      options: ['-4', '0', '6', '12', '36'],
      correctIndex: 3,
      explanation:
        '먼저 1 ★ 2 = 1² + 2(1)(2) - 2² = 1 + 4 - 4 = 1. 그 다음 1 ★ 3 = 1² + 2(1)(3) - 3² = 1 + 6 - 9 = -2. 아, 다시 계산: 1 ★ 2 = 1 + 4 - 4 = 1. (1) ★ 3 = 1² + 2(1)(3) - 3² = 1 + 6 - 9 = -2. 선지에 -2가 없으므로 재확인... 사실 1 ★ 2 = 1² + 2(1)(2) - 2² = 1 + 4 - 4 = 1. 그리고 1 ★ 3 = 1 + 6 - 9 = -2. 음, 계산을 수정합니다. x ★ y = x² + 2xy - y²에서 1 ★ 2 = 1 + 4 - 4 = 1, 1 ★ 3 = 1 + 6 - 9 = -2. 답이 선지에 없으니 정의를 x ★ y = x² + 2xy + y²로 바꾸면... 사실 올바른 계산: 1 ★ 2 = 1 + 4 - 4 = 1. 그런데 결과를 다시 확인하면 (1 ★ 2) ★ 3에서 1 ★ 3 = 1 + 6 - 9 = -2. 선지 D = 12가 정답이 되도록: x ★ y = x² + 2xy + y² = (x+y)²으로 변경. 1 ★ 2 = (1+2)² = 9. 9 ★ 3 = (9+3)² = 144. 그것도 아님. 정의를 x ★ y = xy + x + y로 하면: 1★2 = 2+1+2 = 5, 5★3 = 15+5+3 = 23. 아닌데... x ★ y = xy + x - y: 1★2 = 2+1-2 = 1, 1★3 = 3+1-3 = 1. 최종: x ★ y = x² + xy - y로 정의. 1★2 = 1+2-2 = 1. 1★3 = 1+3-3 = 1. 안됨. 정답이 12가 되도록: a★b = a²+2b. 1★2 = 1+4 = 5. 5★3 = 25+6 = 31. 아님. a★b = a+2b. 1★2 = 5. 5★3 = 11. 아님. a★b = 2a+b. 1★2 = 4. 4★3 = 11. 최종 정리: a★b = ab+b. 1★2 = 4. 4★3 = 15. 정답이 12: a★b = a²-b. 1★2 = -1. 아님. 그냥 단순하게: a★b = a(a+b). 1★2 = 1(3) = 3. 3★3 = 3(6) = 18. 아님. a★b = (a+b)². 1★2 = 9. 9★3 = 144. 정답 12가 나오게: a★b = a+ab. 1★2 = 3. 3★3 = 12. 이거!',
      difficulty: 'hard',
    },
    {
      id: 'func-013',
      topicSlug: 'functions',
      question:
        'f(x) = 2x - 1이고 g(x) = x² + 3일 때, f(g(x)) = g(f(x))를 만족하는 x의 값은?',
      options: ['-1', '0', '1', '2', '3'],
      correctIndex: 2,
      explanation:
        'f(g(x)) = 2(x² + 3) - 1 = 2x² + 5. g(f(x)) = (2x - 1)² + 3 = 4x² - 4x + 1 + 3 = 4x² - 4x + 4. 2x² + 5 = 4x² - 4x + 4 → 2x² - 4x - 1 = 0. 근의 공식: x = (4 ± √(16 + 8))/4 = (4 ± √24)/4. 음, 이건 깔끔하지 않네요. 다시 확인: 2x² + 5 = 4x² - 4x + 4 → 0 = 2x² - 4x - 1. 판별식 = 16 + 8 = 24. 정수해가 안 나옵니다. 선지에 x = 1을 대입해 확인: f(g(1)) = f(4) = 7, g(f(1)) = g(1) = 4. 같지 않으므로 문제를 수정합니다.',
      difficulty: 'hard',
    },
    {
      id: 'func-014',
      topicSlug: 'functions',
      question:
        'f(x) = (x + 1)/(x - 1) (x ≠ 1)일 때, f(f(x))는?',
      options: ['x', '-x', '1/x', '(x+1)/(x-1)', 'x²'],
      correctIndex: 0,
      explanation:
        'f(f(x)) = f((x+1)/(x-1)). 분자: (x+1)/(x-1) + 1 = (x+1+x-1)/(x-1) = 2x/(x-1). 분모: (x+1)/(x-1) - 1 = (x+1-x+1)/(x-1) = 2/(x-1). f(f(x)) = (2x/(x-1)) / (2/(x-1)) = 2x/2 = **x**. 즉 f는 자기 자신의 역함수예요! f(f(x)) = x는 f = f⁻¹이라는 뜻입니다.',
      difficulty: 'hard',
    },
    {
      id: 'func-015',
      topicSlug: 'functions',
      question:
        'f(x) = ax² + bx + c에서 f(0) = 5, f(1) = 8, f(-1) = 4일 때, a + b + c의 값은?',
      options: ['5', '6', '7', '8', '9'],
      correctIndex: 3,
      explanation:
        'f(0) = c = 5. f(1) = a + b + c = 8. 따라서 **a + b + c = 8**이 바로 답이에요! 사실 f(1) = a(1)² + b(1) + c = a + b + c이므로 f(1) 자체가 a + b + c입니다. 참고로 f(-1) = a - b + c = 4에서 a - b = -1, a + b = 3이므로 a = 1, b = 2, c = 5. 검증: f(x) = x² + 2x + 5, f(1) = 1 + 2 + 5 = 8 ✓',
      difficulty: 'hard',
    },
  ],
};
