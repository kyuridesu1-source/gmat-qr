import { Topic } from '../types';

export const quadraticEquationsTopic: Topic = {
  slug: 'quadratic-equations',
  titleEN: 'Quadratic Equations',
  titleKR: '이차방정식',
  category: 'algebra',
  estimatedMinutes: 25,
  ready: true,

  intuition: {
    analogy:
      '이차방정식은 공을 위로 던지는 것과 같아요. 공은 올라갔다가 포물선을 그리며 내려오는데, 지면(y = 0)과 만나는 지점이 바로 **root (근)**이에요. 공이 땅에 두 번 닿을 수도 있고(근 2개), 꼭대기에서 살짝 닿고 올라갈 수도 있고(중근), 아예 땅에 닿지 않을 수도 있어요(실근 없음). **Discriminant (판별식)**은 공이 땅에 닿는지 미리 알려주는 센서라고 생각하면 됩니다.',
    pattern:
      'GMAT에서 이차방정식은 크게 3가지 패턴이에요: ① 인수분해로 바로 풀기, ② **Quadratic Formula**로 풀기, ③ 근을 직접 구하지 않고 **Vieta\'s Formulas (근과 계수의 관계)**로 근의 합·곱만 이용하기. 특히 ③이 GMAT에서 가장 자주 나오는 핵심 패턴입니다.',
    whyItMatters:
      'GMAT QR에서 이차방정식은 단독으로도 출제되지만, **Word Problem**, **Geometry**, **Data Sufficiency** 등 거의 모든 영역에서 도구처럼 활용됩니다. 특히 DS 문제에서 "해가 하나인가 둘인가?"를 판별하는 능력이 고득점의 열쇠예요.',
  },

  commonMistakes: [
    {
      wrong: 'x² = 9에서 x = 3만 구한다',
      correct:
        'x² = 9이면 x = 3 또는 x = -3입니다. **Square root**을 취할 때 반드시 ± 부호를 고려해야 해요.',
      examTip:
        'GMAT은 양수 답만 선지에 넣어서 음수 근을 놓치게 유도합니다. 특히 DS에서 "x²을 알면 x를 알 수 있는가?"는 거의 항상 No예요.',
    },
    {
      wrong: '양변을 x로 나눠서 근을 하나 잃어버린다',
      correct:
        'x² - 5x = 0을 x로 나누면 x = 5만 나오지만, 사실 x(x - 5) = 0이므로 x = 0도 해입니다. 나누지 말고 인수분해하세요.',
      examTip:
        '이차방정식에서 양변을 변수로 나누는 것은 가장 흔한 실수입니다. 항상 한쪽을 0으로 만들고 인수분해하세요.',
    },
    {
      wrong: '근의 공식에서 부호를 잘못 적용한다',
      correct:
        'x = (-b ± √(b²-4ac)) / 2a에서 -b의 부호에 주의하세요. b = -6이면 -b = -(-6) = 6입니다. 괄호를 꼭 쓰세요.',
      examTip:
        'b가 음수일 때 -b를 계산할 때 실수가 많아요. 공식에 대입하기 전에 a, b, c 값을 먼저 명확히 적어두세요.',
    },
    {
      wrong: '표준형으로 정리하지 않고 풀기 시작한다',
      correct:
        'x² + 3x = 10을 바로 인수분해하려고 하면 안 돼요. 먼저 x² + 3x - 10 = 0으로 정리한 뒤 (x + 5)(x - 2) = 0으로 인수분해해야 합니다.',
      examTip:
        '이차방정식은 반드시 **Standard Form** ax² + bx + c = 0 형태로 정리하고 시작하세요. 이것을 생략하면 거의 틀립니다.',
    },
    {
      wrong: 'Vieta\'s Formulas에서 부호를 빠뜨린다',
      correct:
        'ax² + bx + c = 0의 두 근을 α, β라 하면, α + β = -b/a (마이너스!)이고 αβ = c/a입니다. -b/a에서 마이너스를 빠뜨리면 답이 반대가 돼요.',
      examTip:
        '근의 합은 -b/a입니다. 부호 실수를 막으려면 "Sum = -b/a, Product = c/a"를 공식처럼 외우세요.',
    },
  ],

  theoryContent: `## 이차방정식의 표준형

**Quadratic Equation (이차방정식)**은 미지수의 최고차항이 2차인 방정식입니다. **Standard Form (표준형)**은 다음과 같아요:

**ax² + bx + c = 0** (단, a ≠ 0)

여기서 a는 **leading coefficient (최고차 계수)**, b는 일차항의 계수, c는 **constant term (상수항)**입니다.

## 인수분해 (Factoring)

이차방정식을 풀 때 가장 먼저 시도하는 방법이에요. ax² + bx + c를 두 일차식의 곱으로 분해합니다.

기본 아이디어: 곱해서 c, 더해서 b가 되는 두 수를 찾기

예시: x² + 5x + 6 = 0
→ 곱해서 6, 더해서 5인 두 수: 2와 3
→ (x + 2)(x + 3) = 0
→ x = -2 또는 x = -3

a ≠ 1일 때: 2x² + 7x + 3 = 0
→ 곱해서 2 × 3 = 6, 더해서 7인 두 수: 1과 6
→ 2x² + x + 6x + 3 = 0
→ x(2x + 1) + 3(2x + 1) = 0
→ (x + 3)(2x + 1) = 0
→ x = -3 또는 x = -1/2

## 차의 제곱 공식 (Difference of Squares)

**a² - b² = (a + b)(a - b)**

이 공식은 GMAT에서 매우 자주 사용되는 핵심 공식이에요.

예시: x² - 16 = 0
→ (x + 4)(x - 4) = 0
→ x = -4 또는 x = 4

응용: 9x² - 25 = 0
→ (3x)² - 5² = 0
→ (3x + 5)(3x - 5) = 0
→ x = -5/3 또는 x = 5/3

## 근의 공식 (Quadratic Formula)

인수분해가 안 될 때 사용하는 만능 공식이에요:

**x = (-b ± √(b² - 4ac)) / 2a**

예시: 2x² - 3x - 1 = 0 (a = 2, b = -3, c = -1)
→ x = (3 ± √(9 + 8)) / 4
→ x = (3 ± √17) / 4

## 판별식 (Discriminant)

**D = b² - 4ac** 를 **Discriminant (판별식)**이라 합니다. D의 값으로 근의 개수를 판별할 수 있어요.

- **D > 0**: 서로 다른 두 실근 (two distinct real roots)
- **D = 0**: 중근, 즉 같은 근 하나 (one repeated root) → x = -b/2a
- **D < 0**: 실근 없음 (no real roots) → GMAT에서는 보통 이 경우가 답이 되지는 않지만, DS에서 "해가 존재하는가?"를 물을 때 나옵니다.

GMAT 팁: DS 문제에서 "이차방정식의 해를 구할 수 있는가?"라고 물으면, 판별식이 0인 경우(중근)에만 하나의 값이 결정됩니다. D > 0이면 두 개의 해가 있어 하나로 특정할 수 없어요.

## 근과 계수의 관계 (Vieta's Formulas)

ax² + bx + c = 0의 두 근을 α, β라 하면:

- **근의 합 (Sum of Roots)**: α + β = -b/a
- **근의 곱 (Product of Roots)**: α × β = c/a

이 공식의 위력은 근을 직접 구하지 않아도 합과 곱을 알 수 있다는 점이에요!

예시: x² - 7x + 12 = 0의 두 근의 합과 곱은?
→ 합 = -(-7)/1 = 7, 곱 = 12/1 = 12
→ 검증: (x - 3)(x - 4) = 0에서 근은 3과 4, 합 = 7, 곱 = 12 ✓

## 완전제곱식 (Completing the Square)

ax² + bx + c = 0을 **(x + p)² = q** 형태로 바꾸는 방법이에요.

단계:
1. 양변을 a로 나눠 x²의 계수를 1로 만든다
2. 상수항을 오른쪽으로 이항
3. (b/2a)²을 양변에 더한다
4. 왼쪽을 완전제곱식으로 정리

예시: x² + 6x + 2 = 0
→ x² + 6x = -2
→ x² + 6x + 9 = -2 + 9
→ (x + 3)² = 7
→ x = -3 ± √7

이 방법은 **Vertex Form (꼭짓점 형태)** f(x) = a(x - h)² + k를 구할 때도 사용합니다.`,

  formulas: [
    'Standard Form: ax² + bx + c = 0 (a ≠ 0)',
    'Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a',
    'Discriminant: D = b² - 4ac (D > 0: 두 근, D = 0: 중근, D < 0: 실근 없음)',
    'Sum of Roots (근의 합): α + β = -b/a',
    'Product of Roots (근의 곱): α × β = c/a',
    'Difference of Squares: a² - b² = (a + b)(a - b)',
    'Perfect Square: a² ± 2ab + b² = (a ± b)²',
    'Completing the Square: x² + bx + (b/2)² = (x + b/2)²',
  ],

  glossary: [
    {
      en: 'Quadratic Equation',
      kr: '이차방정식',
      definition: '미지수의 최고차항이 2차인 방정식. 표준형: ax² + bx + c = 0',
    },
    {
      en: 'Root / Solution',
      kr: '근 / 해',
      definition: '방정식을 참으로 만드는 미지수의 값. 이차방정식은 최대 2개의 근을 가짐',
    },
    {
      en: 'Discriminant',
      kr: '판별식',
      definition: 'b² - 4ac. 이 값이 양수이면 서로 다른 두 근, 0이면 중근, 음수이면 실근 없음',
    },
    {
      en: 'Factoring',
      kr: '인수분해',
      definition: '다항식을 두 개 이상의 곱으로 분해하는 것. 예: x² + 5x + 6 = (x + 2)(x + 3)',
    },
    {
      en: 'Difference of Squares',
      kr: '차의 제곱 공식',
      definition: 'a² - b² = (a + b)(a - b). GMAT에서 매우 빈출되는 항등식',
    },
    {
      en: 'Completing the Square',
      kr: '완전제곱식 만들기',
      definition: 'x² + bx 형태에 (b/2)²을 더해 (x + b/2)² 완전제곱식으로 바꾸는 기법',
    },
    {
      en: "Vieta's Formulas",
      kr: '근과 계수의 관계',
      definition: '근의 합 = -b/a, 근의 곱 = c/a. 근을 직접 구하지 않고도 합과 곱을 알 수 있는 공식',
    },
    {
      en: 'Leading Coefficient',
      kr: '최고차 계수',
      definition: 'ax² + bx + c에서 a. 이 값이 0이면 이차방정식이 아니라 일차방정식이 됨',
    },
    {
      en: 'Perfect Square Trinomial',
      kr: '완전제곱삼항식',
      definition: '(a + b)² = a² + 2ab + b² 형태의 삼항식. 인수분해 시 제곱근 형태로 바로 정리 가능',
    },
    {
      en: 'Vertex',
      kr: '꼭짓점',
      definition: '포물선의 최고점 또는 최저점. 좌표는 (-b/2a, f(-b/2a))',
    },
    {
      en: 'Parabola',
      kr: '포물선',
      definition: '이차함수의 그래프 형태. a > 0이면 위로 볼록(U자), a < 0이면 아래로 볼록(∩자)',
    },
    {
      en: 'Constant Term',
      kr: '상수항',
      definition: 'ax² + bx + c에서 c. 미지수를 포함하지 않는 항',
    },
  ],

  problems: [
    // ─── EASY (5) ───
    {
      id: 'quad-001',
      topicSlug: 'quadratic-equations',
      question: 'x² - 5x + 6 = 0일 때, x의 값은?\n\n(참고: 두 근 중 큰 값을 고르세요.)',
      options: ['1', '2', '3', '4', '6'],
      correctIndex: 2,
      explanation:
        'x² - 5x + 6 = 0을 인수분해하면 (x - 2)(x - 3) = 0이에요. 따라서 x = 2 또는 x = 3이고, 큰 값은 **3**입니다.',
      difficulty: 'easy',
    },
    {
      id: 'quad-002',
      topicSlug: 'quadratic-equations',
      question: 'x² - 49 = 0일 때, 양수인 x의 값은?',
      options: ['5', '6', '7', '8', '9'],
      correctIndex: 2,
      explanation:
        '**Difference of Squares**를 적용하면 x² - 49 = (x + 7)(x - 7) = 0이에요. x = 7 또는 x = -7이므로, 양수인 값은 **7**입니다.',
      difficulty: 'easy',
    },
    {
      id: 'quad-003',
      topicSlug: 'quadratic-equations',
      question: 'x² + 8x + 16 = 0일 때, x의 값은?',
      options: ['-8', '-4', '0', '4', '8'],
      correctIndex: 1,
      explanation:
        'x² + 8x + 16 = (x + 4)² = 0이므로 x = -4 (중근)입니다. 이것은 **Perfect Square Trinomial** 형태예요. 8 = 2 × 4, 16 = 4²이므로 (x + 4)²으로 바로 인수분해됩니다.',
      difficulty: 'easy',
    },
    {
      id: 'quad-004',
      topicSlug: 'quadratic-equations',
      question: 'x² - 9x = 0일 때, 두 근의 합은?',
      options: ['0', '3', '6', '9', '12'],
      correctIndex: 3,
      explanation:
        'x² - 9x = x(x - 9) = 0이므로 x = 0 또는 x = 9예요. 두 근의 합 = 0 + 9 = **9**. 또는 **Vieta\'s Formulas**로 직접: 근의 합 = -b/a = -(-9)/1 = 9.',
      difficulty: 'easy',
    },
    {
      id: 'quad-005',
      topicSlug: 'quadratic-equations',
      question: '2x² - 8 = 0일 때, x의 모든 값의 곱은?',
      options: ['-8', '-4', '-2', '2', '4'],
      correctIndex: 1,
      explanation:
        '2x² = 8 → x² = 4 → x = 2 또는 x = -2. 두 근의 곱 = 2 × (-2) = **-4**. **Vieta\'s Formulas**로: 근의 곱 = c/a = (-8)/2 = -4.',
      difficulty: 'easy',
    },
    // ─── MEDIUM (6) ───
    {
      id: 'quad-006',
      topicSlug: 'quadratic-equations',
      question: '이차방정식 x² - 2x - 15 = 0의 두 근의 차의 절대값은?',
      options: ['2', '4', '6', '8', '10'],
      correctIndex: 3,
      explanation:
        '인수분해: x² - 2x - 15 = (x - 5)(x + 3) = 0 → x = 5 또는 x = -3. 두 근의 차의 절대값 = |5 - (-3)| = **8**.',
      difficulty: 'medium',
    },
    {
      id: 'quad-007',
      topicSlug: 'quadratic-equations',
      question: '이차방정식 2x² + kx + 9 = 0이 중근을 가질 때, 양수 k의 값은?',
      options: ['3√2', '6', '6√2', '9', '12'],
      correctIndex: 2,
      explanation:
        '중근 조건: **Discriminant** D = 0. D = k² - 4(2)(9) = k² - 72 = 0 → k² = 72 → k = ±6√2. 양수 k = **6√2**.',
      difficulty: 'medium',
    },
    {
      id: 'quad-008',
      topicSlug: 'quadratic-equations',
      question: 'x² + bx + 12 = 0의 한 근이 3일 때, 다른 한 근은?',
      options: ['-4', '-3', '2', '4', '9'],
      correctIndex: 3,
      explanation:
        '**Vieta\'s Formulas**: 근의 곱 = c/a = 12/1 = 12. 한 근이 3이므로 다른 근 = 12/3 = **4**. 검증: 근의 합 = 3 + 4 = 7 = -b/1, 따라서 b = -7. x² - 7x + 12 = (x - 3)(x - 4) = 0 ✓',
      difficulty: 'medium',
    },
    {
      id: 'quad-009',
      topicSlug: 'quadratic-equations',
      question: '이차방정식 x² - 6x + k = 0이 서로 다른 두 양의 실근을 가지려면, 정수 k의 최댓값은?',
      options: ['5', '7', '8', '9', '10'],
      correctIndex: 2,
      explanation:
        '두 조건이 필요해요. ① D > 0: 36 - 4k > 0 → k < 9. ② 두 근이 모두 양수: 근의 합 = 6 > 0 ✓, 근의 곱 = k > 0. 따라서 0 < k < 9이고, 정수 최댓값은 **8**입니다.',
      difficulty: 'medium',
    },
    {
      id: 'quad-010',
      topicSlug: 'quadratic-equations',
      question: '(x - 3)² = 25일 때, 가능한 x 값의 합은?',
      options: ['-2', '3', '6', '8', '11'],
      correctIndex: 2,
      explanation:
        '(x - 3)² = 25에서 x - 3 = ±5. 따라서 x = 8 또는 x = -2. 두 값의 합 = 8 + (-2) = **6**. 팁: 완전제곱식에서 양변에 루트를 취할 때 ±를 잊지 마세요!',
      difficulty: 'medium',
    },
    {
      id: 'quad-011',
      topicSlug: 'quadratic-equations',
      question: '3x² - 10x + 3 = 0의 두 근의 역수의 합은?',
      options: ['3/10', '1/3', '10/3', '3', '10'],
      correctIndex: 2,
      explanation:
        '두 근을 α, β라 하면 1/α + 1/β = (α + β)/(αβ). **Vieta\'s Formulas**: α + β = 10/3, αβ = 3/3 = 1. 따라서 역수의 합 = (10/3)/1 = **10/3**.',
      difficulty: 'medium',
    },
    // ─── HARD (4) ───
    {
      id: 'quad-012',
      topicSlug: 'quadratic-equations',
      question: 'x² - (k+2)x + 2k = 0의 두 근의 차의 절대값이 7일 때, 양수 k의 값은?',
      options: ['3', '5', '7', '9', '11'],
      correctIndex: 3,
      explanation:
        '이 방정식은 사실 (x - 2)(x - k) = 0으로 인수분해돼요 (전개하면 x² - (k+2)x + 2k). 따라서 두 근은 2와 k입니다. |2 - k| = 7이므로 k = 9 또는 k = -5. 양수 k = **9**. 검증: x² - 11x + 18 = (x - 2)(x - 9) = 0, |2 - 9| = 7 ✓.',
      difficulty: 'hard',
    },
    {
      id: 'quad-013',
      topicSlug: 'quadratic-equations',
      question:
        '양의 정수 x에 대해, x² + x = 156일 때, x의 값은?',
      options: ['10', '11', '12', '13', '14'],
      correctIndex: 2,
      explanation:
        'x² + x - 156 = 0. 인수분해: 곱해서 -156, 더해서 1인 두 수를 찾으면 13과 -12. (x + 13)(x - 12) = 0 → x = 12 (양의 정수). 검증: 12² + 12 = 144 + 12 = 156 ✓. GMAT 팁: 큰 수의 인수분해가 어렵다면, 156 ≈ 12² = 144이므로 x = 12 근처에서 시도하면 빨라요.',
      difficulty: 'hard',
    },
    {
      id: 'quad-014',
      topicSlug: 'quadratic-equations',
      question:
        'α와 β가 x² - 5x + 3 = 0의 두 근일 때, α² + β²의 값은?',
      options: ['13', '16', '19', '22', '25'],
      correctIndex: 2,
      explanation:
        '핵심 공식: α² + β² = (α + β)² - 2αβ. **Vieta\'s Formulas**: α + β = 5, αβ = 3. 따라서 α² + β² = 5² - 2(3) = 25 - 6 = **19**. 이런 유형은 근을 직접 구하지 않는 것이 핵심이에요!',
      difficulty: 'hard',
    },
    {
      id: 'quad-015',
      topicSlug: 'quadratic-equations',
      question:
        'f(x) = x² - 4x + k라 하자. f(x) = 0이 두 근 α, β를 가지고, α² + β² = 8일 때, k의 값은?',
      options: ['2', '3', '4', '5', '6'],
      correctIndex: 2,
      explanation:
        '**Vieta\'s Formulas**: α + β = 4, αβ = k. α² + β² = (α + β)² - 2αβ = 16 - 2k = 8 → 2k = 8 → k = **4**. 검증: x² - 4x + 4 = (x - 2)² = 0이면 α = β = 2이고, α² + β² = 4 + 4 = 8 ✓.',
      difficulty: 'hard',
    },
  ],
};
