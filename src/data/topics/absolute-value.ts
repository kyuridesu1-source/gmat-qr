import { Topic } from '../types';

export const absoluteValueTopic: Topic = {
  slug: 'absolute-value',
  titleEN: 'Absolute Value',
  titleKR: '절댓값',
  category: 'arithmetic',
  estimatedMinutes: 15,
  ready: true,

  intuition: {
    analogy:
      "**Absolute value (절댓값)**은 수직선 위에서 '0으로부터의 거리'예요. 집에서 학교까지 3km든, 학교에서 집까지 3km든, 거리는 3km로 같죠? 마치 GPS가 방향을 무시하고 순수한 거리만 알려주는 것처럼, 절댓값은 부호를 무시하고 크기만 알려줍니다. |5| = |-5| = 5, 둘 다 0에서 5만큼 떨어져 있으니까요.",
    pattern:
      '|x| = a → x = a 또는 x = -a (두 개의 해), |x| < a → -a < x < a (구간), |x| > a → x > a 또는 x < -a (두 구간). 이 세 가지 패턴이 GMAT 절댓값 문제의 90%를 차지합니다. 등호(=), 부등호(<, >)에 따라 해의 형태가 달라지는 걸 확실히 구분하세요!',
    whyItMatters:
      'GMAT은 절댓값을 단순 계산보다 **부등식**과 결합해서 출제합니다. 특히 Data Sufficiency에서 "해가 몇 개인가?"를 물을 때 절댓값의 성질을 정확히 모르면 함정에 빠집니다. |x - 3| < 5 같은 유형은 거의 매 시험에 등장합니다.',
  },

  commonMistakes: [
    {
      wrong: '|x|는 항상 양수라고 생각한다',
      correct:
        '|x| ≥ 0입니다. |0| = 0이므로 절댓값은 0일 수도 있습니다. "항상 양수"가 아니라 "항상 0 이상(non-negative)"이 정확한 표현입니다.',
      examTip:
        'GMAT에서 "|x| > 0이면 x ≠ 0"은 참이지만, "|x| ≥ 0이면 x는 어떤 수든 가능"합니다. 이 미묘한 차이를 이용한 함정이 자주 나옵니다.',
    },
    {
      wrong: '|x²| = x²라서 절댓값이 불필요하다고 무시한다',
      correct:
        '|x²| = x²는 항상 참입니다 (x²은 항상 0 이상이므로). 하지만 이것을 이용해 |x| = x라고 결론 내리면 안 됩니다. |x| = x는 x ≥ 0일 때만 성립합니다.',
      examTip:
        '"x² ≥ 0이므로 |x²| = x²" — 이건 맞지만, "그러므로 x ≥ 0"이라고 넘어가면 틀립니다. x² ≥ 0은 모든 실수에서 참이에요.',
    },
    {
      wrong: '절댓값 방정식에서 해의 개수를 잘못 센다',
      correct:
        '|x| = a에서: a > 0이면 해가 2개(x = ±a), a = 0이면 해가 1개(x = 0), a < 0이면 해가 없음(불능). 반드시 a의 부호를 먼저 확인하세요.',
      examTip:
        'GMAT DS에서 "|x - 2| = k"가 주어지면, k의 값에 따라 해의 개수가 달라집니다. k > 0: 2개, k = 0: 1개, k < 0: 0개. k의 부호를 모르면 답을 결정할 수 없습니다.',
    },
    {
      wrong: '|a - b|와 |b - a|가 다르다고 생각한다',
      correct:
        '|a - b| = |b - a|는 항상 성립합니다. 절댓값 안에서 뺄셈의 순서를 바꿔도 결과는 같습니다. 이것은 "두 점 사이의 거리"를 생각하면 당연합니다.',
      examTip:
        '수직선에서 a와 b 사이의 거리는 |a - b| = |b - a|입니다. 순서가 바뀌어도 거리는 같으니까요. 이 성질을 이용하면 문제를 더 간결하게 풀 수 있습니다.',
    },
    {
      wrong: '|a + b| = |a| + |b|라고 생각한다',
      correct:
        '이것은 일반적으로 거짓입니다. **Triangle Inequality (삼각 부등식)**에 의해 |a + b| ≤ |a| + |b|이며, 등호는 a와 b가 같은 부호(또는 둘 중 하나가 0)일 때만 성립합니다.',
      examTip:
        '예시: |3 + (-5)| = |-2| = 2이지만, |3| + |-5| = 3 + 5 = 8. 등호가 성립하지 않는 대표적 반례입니다. GMAT은 이 부등식을 직간접적으로 자주 테스트합니다.',
    },
  ],

  theoryContent: `## 절댓값의 정의

**Absolute Value (절댓값)**은 수직선에서 어떤 수가 0으로부터 떨어진 거리입니다. |x|로 표기합니다.

수학적 정의:
- x ≥ 0이면, |x| = x
- x < 0이면, |x| = -x

예시: |7| = 7, |-7| = 7, |0| = 0

핵심: 절댓값은 부호를 제거하고 크기(magnitude)만 남깁니다.

## 절댓값의 기본 성질

**Absolute value (절댓값)**의 핵심 성질들입니다:

- |x| ≥ 0 (절댓값은 항상 0 이상)
- |x| = 0이면 x = 0 (유일)
- |-x| = |x| (부호를 바꿔도 절댓값은 같다)
- |x|² = x² (항상 성립)
- |xy| = |x| × |y| (곱의 절댓값 = 절댓값의 곱)
- |x/y| = |x| / |y| (y ≠ 0) (몫의 절댓값 = 절댓값의 몫)

## 절댓값 방정식 (Equations)

**|x| = a** 형태를 푸는 방법:

경우 1: a > 0이면 → x = a 또는 x = -a (해가 2개)
예시: |x| = 5 → x = 5 또는 x = -5

경우 2: a = 0이면 → x = 0 (해가 1개)
예시: |x| = 0 → x = 0

경우 3: a < 0이면 → 해 없음 (절댓값은 음수가 될 수 없으므로)
예시: |x| = -3 → 해 없음

**|x - c| = a** 형태 (c만큼 평행이동):
x - c = a 또는 x - c = -a → x = c + a 또는 x = c - a
예시: |x - 3| = 5 → x = 8 또는 x = -2

기하학적 해석: |x - c| = a는 "수직선에서 c로부터 거리가 a인 점"을 의미합니다.

## 절댓값 부등식 (Inequalities)

**|x| < a** (a > 0):
-a < x < a (x는 0에서 a보다 가까운 범위)
예시: |x| < 3 → -3 < x < 3

**|x| > a** (a > 0):
x > a 또는 x < -a (x는 0에서 a보다 먼 범위)
예시: |x| > 3 → x > 3 또는 x < -3

**|x - c| < a** 형태:
-a < x - c < a → c - a < x < c + a
예시: |x - 2| < 5 → -3 < x < 7

**|x - c| > a** 형태:
x - c > a 또는 x - c < -a → x > c + a 또는 x < c - a
예시: |x - 2| > 5 → x > 7 또는 x < -3

암기 팁: "작다(<)는 사이(between), 크다(>)는 밖(outside)"

## 두 점 사이의 거리

|x - y|는 수직선에서 x와 y 사이의 **distance (거리)**입니다.

예시: |7 - 3| = |3 - 7| = 4 (7과 3 사이의 거리는 4)

이 개념은 절댓값 문제를 기하학적으로 풀 때 매우 유용합니다.

## 삼각 부등식 (Triangle Inequality)

**Triangle Inequality (삼각 부등식)**: |a + b| ≤ |a| + |b|

등호 성립 조건: a와 b가 같은 부호이거나 둘 중 하나가 0일 때

이 부등식의 다른 형태: ||a| - |b|| ≤ |a - b| ≤ |a| + |b|

GMAT에서는 직접적으로 삼각 부등식을 묻기보다, 이 성질을 알아야 풀 수 있는 문제를 출제합니다.

## 절댓값과 제곱의 관계

x² = |x|² 이므로, √(x²) = |x|입니다.

이 관계를 이용하면:
- x² < 9 → |x| < 3 → -3 < x < 3
- x² > 16 → |x| > 4 → x > 4 또는 x < -4
- x² = 25 → |x| = 5 → x = ±5`,

  formulas: [
    '|x| = x (x ≥ 0일 때), |x| = -x (x < 0일 때)',
    '|x| = a → x = a 또는 x = -a (a > 0)',
    '|x| < a → -a < x < a (a > 0)',
    '|x| > a → x > a 또는 x < -a (a > 0)',
    '|x - c| = a → x = c + a 또는 x = c - a',
    '|xy| = |x| × |y|, |x/y| = |x| / |y|',
    '삼각 부등식: |a + b| ≤ |a| + |b|',
    '√(x²) = |x|',
  ],

  glossary: [
    {
      en: 'Absolute Value',
      kr: '절댓값',
      definition:
        '수직선에서 0으로부터의 거리. |x|로 표기하며, 항상 0 이상이다.',
    },
    {
      en: 'Distance',
      kr: '거리',
      definition:
        '두 점 사이의 간격. 수직선에서 x와 y 사이의 거리는 |x - y|이다.',
    },
    {
      en: 'Non-negative',
      kr: '음이 아닌 / 0 이상',
      definition:
        '0보다 크거나 같은 수. 절댓값은 항상 non-negative이다.',
    },
    {
      en: 'Triangle Inequality',
      kr: '삼각 부등식',
      definition:
        '|a + b| ≤ |a| + |b|. 두 절댓값의 합은 합의 절댓값 이상이다.',
    },
    {
      en: 'Magnitude',
      kr: '크기',
      definition:
        '수의 부호를 무시한 순수한 크기. |x|는 x의 크기를 나타낸다.',
    },
    {
      en: 'Equation',
      kr: '방정식',
      definition:
        '미지수를 포함하며 등호(=)로 연결된 식. |x| = 5는 절댓값 방정식이다.',
    },
    {
      en: 'Inequality',
      kr: '부등식',
      definition:
        '부등호(<, >, ≤, ≥)로 연결된 식. |x| < 3은 절댓값 부등식이다.',
    },
    {
      en: 'Number Line',
      kr: '수직선',
      definition:
        '수를 직선 위에 순서대로 나타낸 것. 절댓값은 수직선에서의 거리와 관련된다.',
    },
    {
      en: 'Reciprocal',
      kr: '역수',
      definition:
        'a의 역수는 1/a. |1/x| = 1/|x| (x ≠ 0)이 성립한다.',
    },
    {
      en: 'Conjugate',
      kr: '켤레',
      definition:
        'a + b와 a - b의 관계. 절댓값 부등식의 풀이에서 부호 분리 시 사용되는 개념.',
    },
    {
      en: 'Solution Set',
      kr: '해집합',
      definition:
        '방정식이나 부등식을 만족하는 모든 해의 집합. |x| < 3의 해집합은 (-3, 3)이다.',
    },
    {
      en: 'Piecewise Function',
      kr: '조각 함수',
      definition:
        '구간에 따라 다른 식으로 정의된 함수. |x|는 x ≥ 0일 때 x, x < 0일 때 -x로 정의되는 조각 함수이다.',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: 'abs-1',
      topicSlug: 'absolute-value',
      question: '|-8| + |3| = ?',
      options: ['5', '-5', '11', '-11', '24'],
      correctIndex: 2,
      explanation:
        '각 절댓값을 먼저 구합니다.\n\n|-8| = 8\n|3| = 3\n\n8 + 3 = 11',
      difficulty: 'easy',
    },
    {
      id: 'abs-2',
      topicSlug: 'absolute-value',
      question: '|x| = 7을 만족하는 x의 값은?',
      options: [
        'x = 7만',
        'x = -7만',
        'x = 7 또는 x = -7',
        'x = 0',
        '해가 없다',
      ],
      correctIndex: 2,
      explanation:
        '|x| = 7이면, x = 7 또는 x = -7입니다.\n\n절댓값이 7인 수는 0에서 7만큼 떨어진 점이므로, 수직선에서 +7과 -7 두 점입니다.\n\n검증: |7| = 7 ✓, |-7| = 7 ✓',
      difficulty: 'easy',
    },
    {
      id: 'abs-3',
      topicSlug: 'absolute-value',
      question: '|(-3) × 4| = ?',
      options: ['-12', '-7', '1', '7', '12'],
      correctIndex: 4,
      explanation:
        '두 가지 풀이법이 있습니다.\n\n풀이 1: 안을 먼저 계산\n|(-3) × 4| = |-12| = 12\n\n풀이 2: 절댓값의 곱 성질 이용\n|(-3) × 4| = |-3| × |4| = 3 × 4 = 12\n\n곱의 절댓값은 절댓값의 곱과 같습니다: |ab| = |a| × |b|',
      difficulty: 'easy',
    },
    {
      id: 'abs-4',
      topicSlug: 'absolute-value',
      question:
        '|x| = -2를 만족하는 x는 몇 개입니까?',
      options: ['0개', '1개', '2개', '4개', '무한히 많다'],
      correctIndex: 0,
      explanation:
        '절댓값은 항상 0 이상(non-negative)이므로, |x| = -2를 만족하는 x는 존재하지 않습니다.\n\n|x| ≥ 0인데 -2 < 0이므로 해가 없습니다.\n\n이것은 GMAT에서 자주 나오는 함정입니다: 절댓값이 음수와 같을 수는 없습니다.',
      difficulty: 'easy',
    },
    {
      id: 'abs-5',
      topicSlug: 'absolute-value',
      question:
        '수직선에서 -3과 5 사이의 거리는?',
      options: ['2', '3', '5', '8', '15'],
      correctIndex: 3,
      explanation:
        '두 점 사이의 거리는 |a - b|입니다.\n\n|-3 - 5| = |-8| = 8\n\n또는: |5 - (-3)| = |5 + 3| = |8| = 8\n\n수직선에서 -3에서 0까지 3, 0에서 5까지 5이므로 총 거리는 3 + 5 = 8입니다.',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: 'abs-6',
      topicSlug: 'absolute-value',
      question:
        '|x - 4| = 3을 만족하는 모든 x값의 합은?',
      options: ['1', '4', '7', '8', '10'],
      correctIndex: 3,
      explanation:
        '|x - 4| = 3에서:\nx - 4 = 3 또는 x - 4 = -3\nx = 7 또는 x = 1\n\n두 해의 합: 7 + 1 = 8\n\n기하학적 해석: 수직선에서 4로부터 거리가 3인 점은 1과 7이며, 이 두 점의 중점은 4입니다. 따라서 두 해의 합 = 2 × 중점 = 2 × 4 = 8.',
      difficulty: 'medium',
    },
    {
      id: 'abs-7',
      topicSlug: 'absolute-value',
      question:
        '|x| < 5를 만족하는 정수 x는 몇 개입니까?',
      options: ['5개', '9개', '10개', '11개', '무한히 많다'],
      correctIndex: 1,
      explanation:
        '|x| < 5이면 -5 < x < 5입니다.\n\n이 범위의 정수: -4, -3, -2, -1, 0, 1, 2, 3, 4\n\n총 9개입니다.\n\n주의: -5와 5는 포함되지 않습니다 (부등호가 <이므로).',
      difficulty: 'medium',
    },
    {
      id: 'abs-8',
      topicSlug: 'absolute-value',
      question:
        '|2x - 6| = 10을 만족하는 두 해의 곱은?',
      options: ['-32', '-16', '-8', '8', '16'],
      correctIndex: 1,
      explanation:
        '|2x - 6| = 10에서:\n2x - 6 = 10 또는 2x - 6 = -10\n\n경우 1: 2x - 6 = 10\n2x = 16\nx = 8\n\n경우 2: 2x - 6 = -10\n2x = -4\nx = -2\n\n두 해의 곱: 8 × (-2) = -16\n\n검증: |2(8) - 6| = |10| = 10 ✓, |2(-2) - 6| = |-10| = 10 ✓',
      difficulty: 'medium',
    },
    {
      id: 'abs-9',
      topicSlug: 'absolute-value',
      question:
        '|x + 2| > 5를 만족하는 x의 범위는?',
      options: [
        '-7 < x < 3',
        'x > 3 또는 x < -7',
        '-3 < x < 7',
        'x > 7 또는 x < -3',
        'x > 3',
      ],
      correctIndex: 1,
      explanation:
        '|x + 2| > 5에서 |x - (-2)| > 5로 볼 수 있습니다.\n\n"크다(>)는 밖(outside)" 규칙 적용:\nx + 2 > 5 또는 x + 2 < -5\nx > 3 또는 x < -7\n\n기하학적 해석: 수직선에서 -2로부터의 거리가 5보다 큰 점들. -2에서 오른쪽으로 5 이상 → x > 3, 왼쪽으로 5 이상 → x < -7.',
      difficulty: 'medium',
    },
    {
      id: 'abs-10',
      topicSlug: 'absolute-value',
      question:
        '만약 |a| = |b|이면, 다음 중 반드시 참인 것은?',
      options: [
        'a = b',
        'a = -b',
        'a² = b²',
        'a + b = 0',
        'a > 0',
      ],
      correctIndex: 2,
      explanation:
        '|a| = |b|이면, a = b 또는 a = -b입니다.\n\n선택지를 검토합니다:\n(A) a = b: a = 3, b = -3이면 거짓 → 반드시 참이 아님\n(B) a = -b: a = 3, b = 3이면 거짓 → 반드시 참이 아님\n(C) a² = b²: |a| = |b|의 양변을 제곱하면 a² = b² ✓ 항상 참\n(D) a + b = 0: a = b = 3이면 a + b = 6 ≠ 0 → 반드시 참이 아님\n(E) a > 0: a = -3, b = 3이면 거짓 → 반드시 참이 아님\n\n정답은 (C) a² = b²',
      difficulty: 'medium',
    },
    {
      id: 'abs-11',
      topicSlug: 'absolute-value',
      question:
        '|x - 3| ≤ 4를 만족하는 정수 x는 몇 개입니까?',
      options: ['4개', '7개', '8개', '9개', '무한히 많다'],
      correctIndex: 3,
      explanation:
        '|x - 3| ≤ 4이면:\n-4 ≤ x - 3 ≤ 4\n-1 ≤ x ≤ 7\n\n이 범위의 정수: -1, 0, 1, 2, 3, 4, 5, 6, 7\n\n총 9개입니다.\n\n주의: 부등호에 등호(≤)가 포함되므로 양 끝값 -1과 7도 포함됩니다.',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: 'abs-12',
      topicSlug: 'absolute-value',
      question:
        '|x - 1| + |x - 9| = 8을 만족하는 x의 범위는?',
      options: [
        'x = 5만',
        'x = 1 또는 x = 9',
        '1 ≤ x ≤ 9',
        'x ≤ 1 또는 x ≥ 9',
        '모든 실수',
      ],
      correctIndex: 2,
      explanation:
        '|x - 1|은 수직선에서 x와 1 사이의 거리, |x - 9|는 x와 9 사이의 거리입니다.\n\n1과 9 사이의 거리 = |9 - 1| = 8\n\n경우 1: 1 ≤ x ≤ 9일 때\n|x - 1| + |x - 9| = (x - 1) + (9 - x) = 8 ✓ (항상 성립)\n\n경우 2: x < 1일 때\n|x - 1| + |x - 9| = (1 - x) + (9 - x) = 10 - 2x > 8 (성립하지 않음)\n\n경우 3: x > 9일 때\n|x - 1| + |x - 9| = (x - 1) + (x - 9) = 2x - 10 > 8 (성립하지 않음)\n\n따라서 1 ≤ x ≤ 9인 모든 x가 해입니다.\n\n핵심: 두 점 사이에 있으면 거리의 합 = 두 점 사이의 거리(상수).',
      difficulty: 'hard',
    },
    {
      id: 'abs-13',
      topicSlug: 'absolute-value',
      question:
        '|3x - 2| < |2x + 3|을 만족하는 정수 x 중 가장 작은 값은?',
      options: ['-5', '-4', '-1', '0', '1'],
      correctIndex: 3,
      explanation:
        '양변이 모두 0 이상이므로 양변을 제곱해도 부등호 방향이 유지됩니다.\n\n(3x - 2)² < (2x + 3)²\n9x² - 12x + 4 < 4x² + 12x + 9\n5x² - 24x - 5 < 0\n\n근의 공식으로 5x² - 24x - 5 = 0을 풉니다:\nx = (24 ± √(576 + 100))/10 = (24 ± 26)/10\nx = 5 또는 x = -1/5\n\n5(x - 5)(x + 1/5) < 0이므로: -1/5 < x < 5\n\n-1/5 = -0.2이므로 이 범위의 가장 작은 정수는 0입니다.\n\n검증:\nx = 0: |3(0) - 2| = 2, |2(0) + 3| = 3, 2 < 3 ✓\nx = -1: |3(-1) - 2| = 5, |2(-1) + 3| = 1, 5 < 1 ✗ (범위 밖)',
      difficulty: 'hard',
    },
    {
      id: 'abs-14',
      topicSlug: 'absolute-value',
      question:
        '|2x - 1| = |x + 5|를 만족하는 모든 x값의 합은?',
      options: ['10/3', '14/3', '6', '22/3', '8'],
      correctIndex: 1,
      explanation:
        '|A| = |B|이면 A = B 또는 A = -B입니다.\n\n경우 1: 2x - 1 = x + 5\nx = 6\n\n경우 2: 2x - 1 = -(x + 5)\n2x - 1 = -x - 5\n3x = -4\nx = -4/3\n\n검증:\nx = 6: |12 - 1| = 11, |6 + 5| = 11 ✓\nx = -4/3: |-8/3 - 1| = 11/3, |-4/3 + 5| = 11/3 ✓\n\n모든 해의 합 = 6 + (-4/3) = 18/3 - 4/3 = 14/3',
      difficulty: 'hard',
    },
    {
      id: 'abs-15',
      topicSlug: 'absolute-value',
      question:
        'x와 y가 실수이고 |x - 3| + |y + 2| = 0일 때, x + y = ?',
      options: ['-5', '-1', '1', '5', '정보 부족'],
      correctIndex: 2,
      explanation:
        '절댓값은 항상 0 이상입니다. 두 개의 0 이상인 수의 합이 0이 되려면, 두 수 모두 0이어야 합니다.\n\n|x - 3| = 0 그리고 |y + 2| = 0\nx - 3 = 0 → x = 3\ny + 2 = 0 → y = -2\n\n따라서 x + y = 3 + (-2) = 1\n\n이 유형은 GMAT에서 자주 나옵니다: "절댓값들의 합 = 0 → 각 절댓값이 모두 0"',
      difficulty: 'hard',
    },
  ],
};
