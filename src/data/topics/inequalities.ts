import { Topic } from '../types';

export const inequalitiesTopic: Topic = {
  slug: 'inequalities',
  titleEN: 'Inequalities',
  titleKR: '부등식',
  category: 'algebra',
  estimatedMinutes: 20,
  ready: true,

  intuition: {
    analogy:
      '부등식은 저울이 한쪽으로 기울어진 상태예요. 등식(=)이 "정확히 같다"라면, 부등식(<, >, ≤, ≥)은 "이쪽이 더 크다/작다"를 표현합니다. 핵심은 **음수를 곱하면 저울이 뒤집힌다**는 거예요. 무거운 쪽에 -1을 곱하면 가벼워지고, 가벼운 쪽이 무거워지죠!',
    pattern:
      '부등호 방향이 바뀌는 경우는 딱 하나: 양변에 음수를 곱하거나 나눌 때. ax > b에서 a > 0이면 x > b/a, a < 0이면 x < b/a. 절대값 부등식은 |x| < a → -a < x < a, |x| > a → x < -a 또는 x > a로 풀립니다.',
    whyItMatters:
      'GMAT에서 부등식은 **Data Sufficiency**의 핵심 소재입니다. "x > 0인가?", "xy > 0인가?" 같은 질문에서 부등호 방향 판단이 당락을 결정합니다. 특히 변수의 부호를 모를 때 양변에 변수를 곱해도 되는지 판단하는 능력이 중요해요.',
  },

  commonMistakes: [
    {
      wrong: '양변에 음수를 곱할 때 부등호 방향을 그대로 둔다',
      correct:
        '-2x > 6에서 양변을 -2로 나누면 부등호가 뒤집혀서 x < -3이 됩니다.',
      examTip:
        '음수로 곱하거나 나눌 때 부등호 방향 반전! 이것은 GMAT이 가장 좋아하는 함정입니다.',
    },
    {
      wrong: '변수의 부호를 모르는데 양변에 변수를 곱한다',
      correct:
        'x/y > 1에서 양변에 y를 곱하면, y > 0이면 x > y이지만, y < 0이면 x < y입니다. 부호를 모르면 곱하면 안 됩니다.',
      examTip:
        'DS 문제에서 "xy > 0"이면 x, y 동부호, "xy < 0"이면 이부호입니다. 부호 정보 없이 변수를 곱하지 마세요.',
    },
    {
      wrong: '|x| < 3을 x < 3으로만 푼다',
      correct:
        '|x| < 3은 -3 < x < 3입니다. 절대값 안이 음수일 수도 있으므로 양쪽 범위를 모두 고려해야 합니다.',
      examTip:
        '|x - a| < b → a - b < x < a + b, |x - a| > b → x < a - b 또는 x > a + b. 이 공식을 외워두세요.',
    },
    {
      wrong: '이차부등식에서 부등호 방향을 무시하고 등호처럼 인수분해만 한다',
      correct:
        'x² - 5x + 6 > 0 → (x-2)(x-3) > 0 → 두 인수가 동부호 → x < 2 또는 x > 3. 수직선에 영역을 그려서 확인하세요.',
      examTip:
        '이차부등식은 먼저 인수분해 → 근을 구하고 → 수직선에서 부호를 판별하세요. 등호(=)를 만족하는 점이 포함되는지도 확인!',
    },
    {
      wrong: '복합부등식(compound inequality)에서 각 부분을 따로 푼다',
      correct:
        '-3 < 2x + 1 < 9에서 세 부분 모두에서 동시에 1을 빼고 2로 나눕니다: -4 < 2x < 8 → -2 < x < 4.',
      examTip:
        '복합부등식은 한 줄로 쭉 이어서 풀 수 있어요. 세 부분 모두에 같은 연산을 동시에 적용하세요.',
    },
  ],

  theoryContent: `## 부등식의 기본

**Inequality (부등식)**는 두 수 또는 식 사이의 대소 관계를 나타냅니다.
- **<** : 미만 (less than)
- **>** : 초과 (greater than)
- **≤** : 이하 (less than or equal to)
- **≥** : 이상 (greater than or equal to)

## 일차부등식 풀기

일차방정식과 거의 같은 방법으로 풀되, **핵심 규칙**이 하나 있습니다:

> 양변에 **음수**를 곱하거나 나누면 **부등호 방향이 반대**로 바뀐다!

예시: -3x + 6 > 12
→ -3x > 6
→ x < -2 (양변을 -3으로 나누면서 부등호 뒤집기)

양변에 양수를 곱하거나 나눌 때는 부등호 방향이 그대로 유지됩니다.

## 복합부등식 (Compound Inequalities)

두 개의 부등식이 **AND** 또는 **OR**로 연결된 것입니다.

**AND (그리고)**: 두 조건을 모두 만족 → 교집합
- -3 < 2x + 1 ≤ 9 → 세 부분에서 동시에 연산
- -4 < 2x ≤ 8 → -2 < x ≤ 4

**OR (또는)**: 하나 이상의 조건을 만족 → 합집합
- x < -1 또는 x > 5

## 절대값 부등식 (Absolute Value Inequalities)

**|x| < a** (a > 0)이면: **-a < x < a** (원점 중심으로 양쪽 a 이내)
**|x| > a** (a > 0)이면: **x < -a 또는 x > a** (원점에서 양쪽 a 바깥)

일반화:
- **|x - c| < a** → **c - a < x < c + a** (c 중심으로 양쪽 a 이내)
- **|x - c| > a** → **x < c - a 또는 x > c + a**

예시: |2x - 3| ≤ 7
→ -7 ≤ 2x - 3 ≤ 7
→ -4 ≤ 2x ≤ 10
→ -2 ≤ x ≤ 5

## 이차부등식 (Quadratic Inequalities)

이차부등식은 다음 순서로 풉니다:
1. 한쪽을 0으로 만든다: ax² + bx + c > 0
2. 좌변을 인수분해한다: (x - p)(x - q) > 0 (p < q)
3. 수직선에서 부호를 판별한다

**(x - p)(x - q) > 0** → 두 인수가 동부호 → **x < p 또는 x > q**
**(x - p)(x - q) < 0** → 두 인수가 이부호 → **p < x < q**

예시: x² - 5x + 6 < 0
→ (x - 2)(x - 3) < 0
→ 2 < x < 3

## 부등식의 중요 성질

- a > b이고 c > d이면 → a + c > b + d (부등식의 덧셈)
- a > b > 0이고 c > d > 0이면 → ac > bd (양수끼리의 곱셈)
- a > b > 0이면 → 1/a < 1/b (역수를 취하면 부등호 뒤집힘)
- 0 < a < 1이면 → a² < a (0과 1 사이 수의 제곱은 원래보다 작다)`,

  formulas: [
    '음수를 곱/나누면 부등호 방향 반전',
    '|x| < a → -a < x < a (a > 0)',
    '|x| > a → x < -a 또는 x > a (a > 0)',
    '|x - c| < a → c - a < x < c + a',
    '(x-p)(x-q) > 0 → x < p 또는 x > q (p < q)',
    '(x-p)(x-q) < 0 → p < x < q (p < q)',
    'a > b > 0 → 1/a < 1/b',
    '0 < a < 1 → a² < a < √a',
  ],

  glossary: [
    {
      en: 'Inequality',
      kr: '부등식',
      definition: '두 수 또는 식 사이의 대소 관계를 나타내는 식. 예: 2x + 1 > 5',
    },
    {
      en: 'Less than / Greater than',
      kr: '미만 / 초과',
      definition: '<는 미만(포함X), >는 초과(포함X). ≤이하, ≥이상은 등호 포함',
    },
    {
      en: 'Compound Inequality',
      kr: '복합부등식',
      definition: '두 부등식이 AND 또는 OR로 연결된 것. 예: -2 < x ≤ 5',
    },
    {
      en: 'Absolute Value Inequality',
      kr: '절대값 부등식',
      definition: '절대값 기호를 포함한 부등식. 예: |x - 3| < 5',
    },
    {
      en: 'Quadratic Inequality',
      kr: '이차부등식',
      definition: '최고차항이 2차인 부등식. 예: x² - 4x + 3 > 0',
    },
    {
      en: 'Number Line',
      kr: '수직선',
      definition: '수를 직선 위의 점으로 나타낸 것. 부등식의 해를 시각적으로 표현할 때 사용',
    },
    {
      en: 'Interval',
      kr: '구간',
      definition: '수직선 위의 연속된 범위. 개구간 (a,b), 폐구간 [a,b], 반개구간 [a,b) 등',
    },
    {
      en: 'Sign (Positive/Negative)',
      kr: '부호 (양/음)',
      definition: '수가 0보다 큰지(양수), 작은지(음수)를 나타내는 성질',
    },
    {
      en: 'Reciprocal',
      kr: '역수',
      definition: '어떤 수에 곱하면 1이 되는 수. a의 역수는 1/a (a ≠ 0)',
    },
    {
      en: 'Intersection / Union',
      kr: '교집합 / 합집합',
      definition: 'AND 조건의 공통 범위(교집합), OR 조건의 전체 범위(합집합)',
    },
    {
      en: 'Solution Set',
      kr: '해집합',
      definition: '부등식을 만족하는 모든 값의 모임. 예: {x | x > 3}',
    },
    {
      en: 'Flip the Sign',
      kr: '부등호 뒤집기',
      definition: '양변에 음수를 곱하거나 나눌 때 부등호 방향을 반대로 바꾸는 것',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: 'ineq-1',
      topicSlug: 'inequalities',
      question: '2x - 5 > 9를 만족하는 x의 범위는?',
      options: ['x > 2', 'x > 7', 'x > 8', 'x < 7', 'x < 2'],
      correctIndex: 1,
      explanation:
        '2x - 5 > 9\n2x > 9 + 5 = 14\nx > 7\n\n검증: x = 8 대입 → 2(8) - 5 = 11 > 9 ✓\nx = 7 대입 → 2(7) - 5 = 9, 9 > 9는 거짓이므로 7은 포함 안 됨 ✓',
      difficulty: 'easy',
    },
    {
      id: 'ineq-2',
      topicSlug: 'inequalities',
      question: '-3x ≤ 12를 만족하는 x의 범위는?',
      options: ['x ≤ -4', 'x ≤ 4', 'x ≥ -4', 'x ≥ 4', 'x > -4'],
      correctIndex: 2,
      explanation:
        '-3x ≤ 12\n양변을 -3으로 나누면 부등호 방향이 뒤집힙니다:\nx ≥ -4\n\n검증: x = -4 → -3(-4) = 12 ≤ 12 ✓\nx = 0 → -3(0) = 0 ≤ 12 ✓\nx = -5 → -3(-5) = 15, 15 ≤ 12? 거짓 ✓ (범위 밖)',
      difficulty: 'easy',
    },
    {
      id: 'ineq-3',
      topicSlug: 'inequalities',
      question: '|x| < 5를 만족하는 정수는 몇 개?',
      options: ['5개', '9개', '10개', '11개', '무한히 많다'],
      correctIndex: 1,
      explanation:
        '|x| < 5 → -5 < x < 5\n\n이 범위에 속하는 정수: -4, -3, -2, -1, 0, 1, 2, 3, 4\n총 9개\n\n주의: -5와 5는 포함되지 않습니다 (< 이므로).',
      difficulty: 'easy',
    },
    {
      id: 'ineq-4',
      topicSlug: 'inequalities',
      question: '3 < x + 2 ≤ 8일 때, x의 범위는?',
      options: [
        '1 < x ≤ 6',
        '1 ≤ x < 6',
        '5 < x ≤ 10',
        '1 < x < 6',
        '5 ≤ x < 10',
      ],
      correctIndex: 0,
      explanation:
        '세 부분 모두에서 2를 빼면:\n3 - 2 < x + 2 - 2 ≤ 8 - 2\n1 < x ≤ 6\n\n검증: x = 2 → 2 + 2 = 4, 3 < 4 ≤ 8 ✓\nx = 6 → 6 + 2 = 8, 3 < 8 ≤ 8 ✓\nx = 1 → 1 + 2 = 3, 3 < 3? 거짓 → 1은 미포함 ✓',
      difficulty: 'easy',
    },
    {
      id: 'ineq-5',
      topicSlug: 'inequalities',
      question:
        'a > b > 0일 때, 다음 중 항상 참인 것은?',
      options: [
        'a - b < 0',
        'a/b < 1',
        '1/a > 1/b',
        'a² > b²',
        'a + b < 0',
      ],
      correctIndex: 3,
      explanation:
        'a > b > 0이므로:\n\n(A) a - b < 0? → a > b이므로 a - b > 0 (거짓)\n(B) a/b < 1? → a > b이므로 a/b > 1 (거짓)\n(C) 1/a > 1/b? → 양수에서 큰 수의 역수가 더 작으므로 1/a < 1/b (거짓)\n(D) a² > b²? → a > b > 0 양변을 제곱해도 부등호 유지 → a² > b² (참) ✓\n(E) a + b < 0? → 둘 다 양수이므로 합도 양수 (거짓)',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: 'ineq-6',
      topicSlug: 'inequalities',
      question: '|2x - 3| ≤ 7을 만족하는 x의 범위는?',
      options: [
        '-2 ≤ x ≤ 5',
        '-5 ≤ x ≤ 2',
        '-2 < x < 5',
        '-1 ≤ x ≤ 4',
        '0 ≤ x ≤ 5',
      ],
      correctIndex: 0,
      explanation:
        '|2x - 3| ≤ 7\n→ -7 ≤ 2x - 3 ≤ 7\n→ -7 + 3 ≤ 2x ≤ 7 + 3\n→ -4 ≤ 2x ≤ 10\n→ -2 ≤ x ≤ 5\n\n검증:\nx = -2 → |2(-2) - 3| = |-7| = 7 ≤ 7 ✓\nx = 5 → |2(5) - 3| = |7| = 7 ≤ 7 ✓\nx = 0 → |2(0) - 3| = 3 ≤ 7 ✓',
      difficulty: 'medium',
    },
    {
      id: 'ineq-7',
      topicSlug: 'inequalities',
      question: 'x² - 7x + 10 < 0을 만족하는 x의 범위는?',
      options: [
        'x < 2 또는 x > 5',
        '2 < x < 5',
        'x < -5 또는 x > -2',
        '-5 < x < -2',
        '-2 < x < 5',
      ],
      correctIndex: 1,
      explanation:
        'x² - 7x + 10 < 0\n인수분해: (x - 2)(x - 5) < 0\n\n두 인수의 곱이 음수 → 이부호\n근: x = 2, x = 5 (2 < 5)\n\n(x-p)(x-q) < 0이고 p < q이면 → p < x < q\n따라서 2 < x < 5\n\n검증: x = 3 → (3-2)(3-5) = (1)(-2) = -2 < 0 ✓\nx = 1 → (1-2)(1-5) = (-1)(-4) = 4 > 0 ✗ (범위 밖) ✓',
      difficulty: 'medium',
    },
    {
      id: 'ineq-8',
      topicSlug: 'inequalities',
      question:
        '-1 < 3 - 2x ≤ 7일 때, x의 범위는?',
      options: [
        '-2 ≤ x < 2',
        '-2 < x ≤ 2',
        '-2 ≤ x ≤ 2',
        '-3 ≤ x < 1',
        '-1 < x ≤ 3',
      ],
      correctIndex: 0,
      explanation:
        '-1 < 3 - 2x ≤ 7\n\n세 부분에서 3을 빼면:\n-1 - 3 < -2x ≤ 7 - 3\n-4 < -2x ≤ 4\n\n-2로 나누면 부등호가 뒤집힙니다:\n-4/(-2) > x ≥ 4/(-2)\n2 > x ≥ -2\n\n정리: -2 ≤ x < 2\n\n검증:\nx = -2 → 3 - 2(-2) = 7, -1 < 7 ≤ 7 ✓\nx = 0 → 3 - 0 = 3, -1 < 3 ≤ 7 ✓\nx = 2 → 3 - 4 = -1, -1 < -1? 거짓 → 2는 미포함 ✓',
      difficulty: 'medium',
    },
    {
      id: 'ineq-9',
      topicSlug: 'inequalities',
      question:
        'x, y가 정수이고 x > 0, y < 0일 때, 다음 중 반드시 양수인 것은?',
      options: ['x + y', 'xy', 'x²y', 'x - y', 'x/y'],
      correctIndex: 3,
      explanation:
        'x > 0 (양수), y < 0 (음수)\n\n(A) x + y: 부호 불확실. 예: x=1, y=-5 → -4 < 0\n(B) xy: 양수 × 음수 = 음수 → 항상 음수\n(C) x²y: x² > 0이고 y < 0이므로 x²y < 0 → 항상 음수\n(D) x - y: x > 0이고 -y > 0이므로 x - y > 0 → 항상 양수 ✓\n(E) x/y: 양수 ÷ 음수 = 음수 → 항상 음수\n\nx - y = x + (-y)에서 x > 0, -y > 0이므로 합은 항상 양수입니다.',
      difficulty: 'medium',
    },
    {
      id: 'ineq-10',
      topicSlug: 'inequalities',
      question:
        '|x - 4| > 3을 만족하는 x의 범위는?',
      options: [
        '1 < x < 7',
        'x < 1 또는 x > 7',
        '-1 < x < 7',
        'x < -1 또는 x > 7',
        'x ≤ 1 또는 x ≥ 7',
      ],
      correctIndex: 1,
      explanation:
        '|x - 4| > 3\n\n절대값이 a보다 큰 경우:\nx - 4 > 3 또는 x - 4 < -3\nx > 7 또는 x < 1\n\n검증:\nx = 0 → |0 - 4| = 4 > 3 ✓ (x < 1 범위)\nx = 8 → |8 - 4| = 4 > 3 ✓ (x > 7 범위)\nx = 4 → |4 - 4| = 0, 0 > 3? 거짓 ✓ (범위 밖)',
      difficulty: 'medium',
    },
    {
      id: 'ineq-11',
      topicSlug: 'inequalities',
      question:
        '0 < x < 1일 때, 다음 중 가장 큰 것은?',
      options: ['x', 'x²', 'x³', '√x', '1/x'],
      correctIndex: 4,
      explanation:
        '0 < x < 1일 때 각 값을 비교합니다.\n\n예시로 x = 1/4:\n• x = 1/4 = 0.25\n• x² = 1/16 = 0.0625\n• x³ = 1/64 ≈ 0.0156\n• √x = 1/2 = 0.5\n• 1/x = 4\n\n일반적으로 0 < x < 1에서:\nx³ < x² < x < √x < 1 < 1/x\n\n따라서 가장 큰 것은 1/x입니다.\n\n이유: 0 < x < 1이면 1/x > 1 > √x > x > x² > x³',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: 'ineq-12',
      topicSlug: 'inequalities',
      question:
        'x² - 2x - 15 ≥ 0을 만족하는 정수 x 중에서 -5 ≤ x ≤ 7인 것은 몇 개?',
      options: ['3개', '4개', '5개', '6개', '7개'],
      correctIndex: 3,
      explanation:
        'x² - 2x - 15 ≥ 0\n인수분해: (x - 5)(x + 3) ≥ 0\n\n근: x = 5, x = -3\n(x-5)(x+3) ≥ 0 → x ≤ -3 또는 x ≥ 5\n\n-5 ≤ x ≤ 7 범위에서:\nx ≤ -3인 정수: -5, -4, -3 (3개)\nx ≥ 5인 정수: 5, 6, 7 (3개)\n\n총 6개\n\n검증:\nx = -5 → (-5-5)(-5+3) = (-10)(-2) = 20 ≥ 0 ✓\nx = -3 → (-3-5)(-3+3) = (-8)(0) = 0 ≥ 0 ✓\nx = 5 → (5-5)(5+3) = (0)(8) = 0 ≥ 0 ✓\nx = 0 → (0-5)(0+3) = (-5)(3) = -15 < 0 ✗ (범위 밖) ✓',
      difficulty: 'hard',
    },
    {
      id: 'ineq-13',
      topicSlug: 'inequalities',
      question:
        'a와 b가 양의 정수이고 a + b = 10일 때, ab의 최댓값은?',
      options: ['21', '24', '25', '28', '30'],
      correctIndex: 2,
      explanation:
        'a + b = 10이고 ab를 최대화하려면 **AM-GM 부등식**을 활용합니다.\n\n산술평균-기하평균 부등식:\n(a + b)/2 ≥ √(ab)\n\n등호 조건: a = b일 때\na = b = 5이면 ab = 25\n\n다른 경우 확인:\na=1, b=9 → ab=9\na=2, b=8 → ab=16\na=3, b=7 → ab=21\na=4, b=6 → ab=24\na=5, b=5 → ab=25 ← 최댓값\n\n실제로 ab = a(10-a) = -a² + 10a = -(a-5)² + 25\na=5일 때 최댓값 25',
      difficulty: 'hard',
    },
    {
      id: 'ineq-14',
      topicSlug: 'inequalities',
      question:
        '|3x - 1| + |3x - 5| = 4를 만족하는 x의 범위는?',
      options: [
        'x = 1만 해당',
        '1/3 ≤ x ≤ 5/3',
        'x = 1/3 또는 x = 5/3',
        '모든 실수',
        '해가 없다',
      ],
      correctIndex: 1,
      explanation:
        '|3x - 1| + |3x - 5|는 수직선 위에서 3x와 1, 5 사이의 거리의 합입니다.\n\n3x = t로 치환하면: |t - 1| + |t - 5| = 4\n\n이것은 t에서 1까지의 거리 + t에서 5까지의 거리 = 4\n1과 5 사이의 거리가 |5 - 1| = 4이므로,\nt가 1과 5 사이(1 ≤ t ≤ 5)에 있으면 두 거리의 합은 정확히 4입니다.\nt가 범위 밖이면 합이 4보다 큽니다.\n\n따라서 1 ≤ 3x ≤ 5 → 1/3 ≤ x ≤ 5/3\n\n검증:\nx = 1/3 → |1-1| + |1-5| = 0+4 = 4 ✓\nx = 5/3 → |5-1| + |5-5| = 4+0 = 4 ✓\nx = 1 → |3-1| + |3-5| = 2+2 = 4 ✓\nx = 0 → |-1| + |-5| = 1+5 = 6 ≠ 4 ✓ (범위 밖)',
      difficulty: 'hard',
    },
    {
      id: 'ineq-15',
      topicSlug: 'inequalities',
      question:
        'a, b, c가 양의 실수이고 a < b < c일 때, 다음 중 항상 참인 것은?',
      options: [
        'a/c > b/c',
        'a + c > 2b',
        'ac > b²',
        '(a+b)/2 < (b+c)/2',
        'a/b > b/c',
      ],
      correctIndex: 3,
      explanation:
        '0 < a < b < c에서 각 선지를 확인합니다.\n\n(A) a/c > b/c → a > b? 거짓 (a < b)\n\n(B) a + c > 2b → 반례: a=1, b=5, c=6 → 1+6=7 < 10=2(5) 거짓\n\n(C) ac > b² → 반례: a=1, b=3, c=5 → 5 < 9 거짓\n\n(D) (a+b)/2 < (b+c)/2\n→ a+b < b+c\n→ a < c ✓ (항상 참, a < b < c이므로 a < c)\n\n(E) a/b > b/c → ac > b²? 이는 (C)와 같으므로 반례 있음\n\n정답: (D)',
      difficulty: 'hard',
    },
  ],
};
