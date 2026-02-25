import { Topic } from '../types';

export const coordinateGeometryTopic: Topic = {
  slug: 'coordinate-geometry',
  titleEN: 'Coordinate Geometry',
  titleKR: '좌표 기하',
  category: 'geometry',
  estimatedMinutes: 25,
  ready: true,

  intuition: {
    analogy:
      '좌표 기하는 "도형에 주소를 부여하는 것"이에요. 서울 지도에서 위도·경도로 위치를 특정하듯, **coordinate plane (좌표평면)** 위에서 (x, y)로 점의 위치를 정합니다. 이렇게 하면 "두 점 사이의 거리", "직선의 기울기" 같은 기하학적 개념을 숫자로 계산할 수 있게 됩니다.',
    pattern:
      'GMAT 좌표 기하 문제의 핵심은 세 가지입니다: (1) **slope (기울기)** 구하기, (2) **distance (거리)** 구하기, (3) **midpoint (중점)** 구하기. 이 세 공식만 확실히 알면 대부분의 문제를 풀 수 있습니다. 특히 "평행이면 기울기가 같다", "수직이면 기울기의 곱이 -1"은 거의 매번 출제됩니다.',
    whyItMatters:
      'GMAT은 기하 문제를 좌표평면 위에서 출제하는 것을 좋아합니다. 직선의 방정식, 두 직선의 관계(평행/수직), 도형의 넓이를 좌표로 계산하는 문제가 빈출됩니다. 특히 y = mx + b에서 m과 b의 부호가 그래프의 모양을 어떻게 결정하는지 이해하는 것이 핵심입니다.',
  },

  commonMistakes: [
    {
      wrong: '기울기(slope) 계산에서 x와 y의 순서를 뒤바꿈',
      correct:
        '**Slope m = (y₂ - y₁) / (x₂ - x₁)**입니다. 분자가 y의 차이, 분모가 x의 차이입니다. "y의 변화량 / x의 변화량" = "rise over run"으로 기억하세요.',
      examTip:
        '항상 "y가 위(분자), x가 아래(분모)"로 기억하세요. 점의 순서는 바꿔도 되지만, 분자와 분모에서 같은 순서를 사용해야 합니다.',
    },
    {
      wrong: '수직선(vertical line)의 기울기를 0으로 착각',
      correct:
        '**수직선(vertical line, x = k)**의 기울기는 **undefined (정의되지 않음)**입니다. **수평선(horizontal line, y = k)**의 기울기가 0입니다.',
      examTip:
        '수직선: 기울기 undefined (분모가 0), 수평선: 기울기 0 (분자가 0). 이 구분을 확실히 하세요.',
    },
    {
      wrong: '평행(parallel)과 수직(perpendicular) 조건 혼동',
      correct:
        '**Parallel lines (평행선)**: 기울기가 같음 (m₁ = m₂)\n**Perpendicular lines (수직선)**: 기울기의 곱이 -1 (m₁ × m₂ = -1)',
      examTip:
        '수직 관계에서는 기울기가 "negative reciprocal(음의 역수)" 관계입니다. 예: 기울기 2/3의 수직선의 기울기는 -3/2입니다.',
    },
    {
      wrong: 'x절편을 구할 때 x = 0을 대입',
      correct:
        '**x-intercept (x절편)**은 **y = 0**을 대입해서 구합니다.\n**y-intercept (y절편)**은 **x = 0**을 대입해서 구합니다.\n이름과 대입하는 변수가 반대입니다!',
      examTip:
        '"x절편은 y가 0인 점, y절편은 x가 0인 점"으로 기억하세요.',
    },
    {
      wrong: '거리 공식에서 제곱을 빼먹거나 루트를 씌우지 않음',
      correct:
        '**Distance = √((x₂ - x₁)² + (y₂ - y₁)²)**입니다. 차이를 먼저 구하고, 각각 제곱한 뒤, 더하고, 루트를 씌웁니다.',
      examTip:
        '거리 공식은 피타고라스 정리와 같은 원리입니다. 두 점 사이에 직각삼각형을 그려보면 이해가 쉽습니다.',
    },
  ],

  theoryContent: `## 좌표평면의 기본

**Coordinate plane (좌표평면)**은 수평축(**x-axis**)과 수직축(**y-axis**)으로 이루어진 평면입니다.

두 축이 만나는 점이 **origin (원점)** = (0, 0)

평면은 4개의 **quadrant (사분면)**으로 나뉩니다:
- **Quadrant I** (제1사분면): x > 0, y > 0 (오른쪽 위)
- **Quadrant II** (제2사분면): x < 0, y > 0 (왼쪽 위)
- **Quadrant III** (제3사분면): x < 0, y < 0 (왼쪽 아래)
- **Quadrant IV** (제4사분면): x > 0, y < 0 (오른쪽 아래)

## 두 점 사이의 거리 (Distance Formula)

두 점 (x₁, y₁)과 (x₂, y₂) 사이의 거리:

**d = √((x₂ - x₁)² + (y₂ - y₁)²)**

이것은 피타고라스 정리의 좌표 버전입니다. 두 점을 잇는 선분을 빗변으로 하는 직각삼각형을 생각하면 됩니다.

## 중점 공식 (Midpoint Formula)

두 점 (x₁, y₁)과 (x₂, y₂)의 중점:

**M = ((x₁ + x₂)/2, (y₁ + y₂)/2)**

각 좌표의 평균을 구하면 됩니다.

## 기울기 (Slope)

두 점 (x₁, y₁)과 (x₂, y₂)를 지나는 직선의 기울기:

**m = (y₂ - y₁) / (x₂ - x₁)**

기울기의 의미:
- **m > 0**: 오른쪽으로 올라가는 직선 (양의 기울기)
- **m < 0**: 오른쪽으로 내려가는 직선 (음의 기울기)
- **m = 0**: 수평선 (horizontal line)
- **m = undefined**: 수직선 (vertical line) — 분모가 0

## 직선의 방정식

### Slope-intercept form (기울기-절편형)
**y = mx + b**
- m = 기울기 (slope)
- b = y절편 (y-intercept)

### Point-slope form (점-기울기형)
**y - y₁ = m(x - x₁)**
- m = 기울기, (x₁, y₁) = 직선 위의 한 점

### x절편과 y절편
- **x-intercept (x절편)**: 직선이 x축과 만나는 점. y = 0을 대입하여 구함
- **y-intercept (y절편)**: 직선이 y축과 만나는 점. x = 0을 대입하여 구함

## 평행선과 수직선

**Parallel lines (평행선)**: 기울기가 같음
m₁ = m₂

**Perpendicular lines (수직선)**: 기울기의 곱이 -1
m₁ × m₂ = -1 (즉, m₂ = -1/m₁)

예: 기울기가 3인 직선에 수직인 직선의 기울기는 -1/3

## 부등식의 그래프 (Graphing Inequalities)

y > mx + b: 직선 위쪽 영역 (직선 불포함, 점선)
y ≥ mx + b: 직선 위쪽 영역 (직선 포함, 실선)
y < mx + b: 직선 아래쪽 영역
y ≤ mx + b: 직선 아래쪽 영역 (직선 포함)

## 점과 직선 사이의 거리

점 (x₀, y₀)에서 직선 ax + by + c = 0까지의 거리:

**d = |ax₀ + by₀ + c| / √(a² + b²)**`,

  formulas: [
    'Distance: d = √((x₂ - x₁)² + (y₂ - y₁)²)',
    'Midpoint: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)',
    'Slope: m = (y₂ - y₁) / (x₂ - x₁)',
    'Slope-intercept form: y = mx + b',
    'Point-slope form: y - y₁ = m(x - x₁)',
    'Parallel lines: m₁ = m₂',
    'Perpendicular lines: m₁ × m₂ = -1',
    'Point-to-line distance: d = |ax₀ + by₀ + c| / √(a² + b²)',
  ],

  glossary: [
    {
      en: 'Coordinate Plane',
      kr: '좌표평면',
      definition: 'x축과 y축으로 이루어진 2차원 평면',
    },
    {
      en: 'Origin',
      kr: '원점',
      definition: 'x축과 y축이 만나는 점 (0, 0)',
    },
    {
      en: 'Quadrant',
      kr: '사분면',
      definition: '좌표평면을 두 축이 나누는 네 영역 (I, II, III, IV)',
    },
    {
      en: 'Slope',
      kr: '기울기',
      definition: '직선이 기울어진 정도. m = (y₂ - y₁)/(x₂ - x₁). Rise over run',
    },
    {
      en: 'y-intercept',
      kr: 'y절편',
      definition: '직선이 y축과 만나는 점의 y좌표. x = 0일 때의 y값',
    },
    {
      en: 'x-intercept',
      kr: 'x절편',
      definition: '직선이 x축과 만나는 점의 x좌표. y = 0일 때의 x값',
    },
    {
      en: 'Midpoint',
      kr: '중점',
      definition: '두 점을 잇는 선분의 정가운데 점',
    },
    {
      en: 'Distance Formula',
      kr: '거리 공식',
      definition: '좌표평면에서 두 점 사이의 거리를 구하는 공식 (피타고라스 정리 기반)',
    },
    {
      en: 'Parallel Lines',
      kr: '평행선',
      definition: '기울기가 같아서 절대 만나지 않는 두 직선',
    },
    {
      en: 'Perpendicular Lines',
      kr: '수직선',
      definition: '90°로 만나는 두 직선. 기울기의 곱이 -1',
    },
    {
      en: 'Linear Equation',
      kr: '일차 방정식 (직선의 방정식)',
      definition: 'y = mx + b 형태의 직선을 나타내는 방정식',
    },
    {
      en: 'Negative Reciprocal',
      kr: '음의 역수',
      definition: '수직인 두 직선의 기울기 관계. m이면 수직선의 기울기는 -1/m',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: 'coord-1',
      topicSlug: 'coordinate-geometry',
      question:
        '두 점 (1, 2)와 (4, 6) 사이의 거리는?',
      options: ['3', '4', '5', '7', '25'],
      correctIndex: 2,
      explanation:
        'd = √((4-1)² + (6-2)²)\n= √(3² + 4²)\n= √(9 + 16)\n= √25\n= 5\n\n3-4-5는 Pythagorean triple이므로 거리는 5입니다.',
      difficulty: 'easy',
    },
    {
      id: 'coord-2',
      topicSlug: 'coordinate-geometry',
      question:
        '두 점 (2, 3)과 (8, 7)의 중점(midpoint)은?',
      options: ['(3, 2)', '(4, 5)', '(5, 5)', '(6, 10)', '(10, 10)'],
      correctIndex: 2,
      explanation:
        'M = ((x₁+x₂)/2, (y₁+y₂)/2)\n= ((2+8)/2, (3+7)/2)\n= (10/2, 10/2)\n= (5, 5)\n\n각 좌표의 평균을 구하면 됩니다.',
      difficulty: 'easy',
    },
    {
      id: 'coord-3',
      topicSlug: 'coordinate-geometry',
      question:
        '두 점 (1, 3)과 (5, 11)을 지나는 직선의 기울기(slope)는?',
      options: ['1/2', '1', '2', '4', '8'],
      correctIndex: 2,
      explanation:
        'm = (y₂ - y₁) / (x₂ - x₁)\n= (11 - 3) / (5 - 1)\n= 8 / 4\n= 2\n\n따라서 기울기는 2입니다.',
      difficulty: 'easy',
    },
    {
      id: 'coord-4',
      topicSlug: 'coordinate-geometry',
      question:
        '직선 y = 3x - 6의 y절편(y-intercept)은?',
      options: ['-6', '-3', '-2', '3', '6'],
      correctIndex: 0,
      explanation:
        'y = mx + b에서 b가 y절편입니다.\n\ny = 3x + (-6)이므로 y절편 = -6\n\n또는 x = 0을 대입하면: y = 3(0) - 6 = -6\n\n따라서 y절편은 -6입니다.',
      difficulty: 'easy',
    },
    {
      id: 'coord-5',
      topicSlug: 'coordinate-geometry',
      question:
        '직선 y = 2x + 8의 x절편(x-intercept)은?',
      options: ['-4', '-2', '2', '4', '8'],
      correctIndex: 0,
      explanation:
        'x절편은 y = 0일 때의 x값입니다.\n\n0 = 2x + 8\n2x = -8\nx = -4\n\n따라서 x절편은 -4입니다.',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: 'coord-6',
      topicSlug: 'coordinate-geometry',
      question:
        '직선 y = 2x + 1에 평행하고 점 (3, 4)를 지나는 직선의 방정식은?',
      options: [
        'y = 2x - 2',
        'y = 2x + 4',
        'y = -½x + 4',
        'y = 2x - 1',
        'y = -2x + 10',
      ],
      correctIndex: 0,
      explanation:
        '평행한 직선은 기울기가 같으므로 m = 2\n\n점 (3, 4)를 지나는 직선:\ny - 4 = 2(x - 3)\ny - 4 = 2x - 6\ny = 2x - 2\n\n검증: x=3일 때 y = 2(3) - 2 = 4 ✓',
      difficulty: 'medium',
    },
    {
      id: 'coord-7',
      topicSlug: 'coordinate-geometry',
      question:
        '직선 y = 3x - 5에 수직인 직선의 기울기는?',
      options: ['3', '-3', '1/3', '-1/3', '5'],
      correctIndex: 3,
      explanation:
        '수직인 두 직선의 기울기의 곱 = -1\n\n원래 직선의 기울기 m₁ = 3\nm₁ × m₂ = -1\n3 × m₂ = -1\nm₂ = -1/3\n\n수직선의 기울기는 원래 기울기의 음의 역수(negative reciprocal)입니다.',
      difficulty: 'medium',
    },
    {
      id: 'coord-8',
      topicSlug: 'coordinate-geometry',
      question:
        '세 점 A(0, 0), B(6, 0), C(6, 8)을 꼭짓점으로 하는 삼각형의 넓이는?',
      options: ['14', '24', '28', '48', '96'],
      correctIndex: 1,
      explanation:
        'A(0,0), B(6,0), C(6,8)을 좌표평면에 표시하면:\n\n- AB는 x축 위에 있으므로 길이 = 6 (밑변)\n- BC는 수직선이므로 길이 = 8 (높이)\n- ∠B = 90° (직각)\n\n넓이 = ½ × base × height = ½ × 6 × 8 = 24',
      difficulty: 'medium',
    },
    {
      id: 'coord-9',
      topicSlug: 'coordinate-geometry',
      question:
        '두 점 (−2, 5)와 (4, −3)을 잇는 선분의 길이는?',
      options: ['6', '8', '10', '12', '14'],
      correctIndex: 2,
      explanation:
        'd = √((4-(-2))² + (-3-5)²)\n= √(6² + (-8)²)\n= √(36 + 64)\n= √100\n= 10\n\n6-8-10은 3-4-5의 2배이므로 Pythagorean triple입니다.',
      difficulty: 'medium',
    },
    {
      id: 'coord-10',
      topicSlug: 'coordinate-geometry',
      question:
        '점 (2, −1)이 직선 y = kx + 3 위에 있을 때, k의 값은?',
      options: ['-2', '-1', '0', '1', '2'],
      correctIndex: 0,
      explanation:
        '점 (2, -1)이 직선 위에 있으므로, x=2, y=-1을 대입합니다.\n\n-1 = k(2) + 3\n-1 = 2k + 3\n2k = -4\nk = -2\n\n검증: y = -2(2) + 3 = -4 + 3 = -1 ✓',
      difficulty: 'medium',
    },
    {
      id: 'coord-11',
      topicSlug: 'coordinate-geometry',
      question:
        '직선 2x + 3y = 12의 기울기(slope)는?',
      options: ['-3/2', '-2/3', '2/3', '3/2', '2'],
      correctIndex: 1,
      explanation:
        'y = mx + b 형태로 변환합니다.\n\n2x + 3y = 12\n3y = -2x + 12\ny = (-2/3)x + 4\n\n따라서 기울기 m = -2/3입니다.',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: 'coord-12',
      topicSlug: 'coordinate-geometry',
      question:
        '네 꼭짓점이 (0, 0), (5, 0), (5, 3), (0, 3)인 직사각형의 대각선의 길이는?',
      options: ['√34', '√30', '4', '6', '8'],
      correctIndex: 0,
      explanation:
        '대각선은 (0, 0)과 (5, 3)을 잇습니다.\n\nd = √((5-0)² + (3-0)²)\n= √(25 + 9)\n= √34\n\n다른 대각선 (5,0)-(0,3)도 같은 길이:\nd = √((-5)² + 3²) = √(25 + 9) = √34 ✓\n\n직사각형의 두 대각선 길이는 항상 같습니다.',
      difficulty: 'hard',
    },
    {
      id: 'coord-13',
      topicSlug: 'coordinate-geometry',
      question:
        '두 직선 y = 2x + 1과 y = -x + 7의 교점은?',
      options: ['(1, 3)', '(2, 5)', '(3, 4)', '(4, 3)', '(2, 3)'],
      correctIndex: 1,
      explanation:
        '두 식을 같다고 놓습니다.\n\n2x + 1 = -x + 7\n3x = 6\nx = 2\n\ny = 2(2) + 1 = 5\n\n교점은 (2, 5)입니다.\n\n검증: y = -(2) + 7 = 5 ✓',
      difficulty: 'hard',
    },
    {
      id: 'coord-14',
      topicSlug: 'coordinate-geometry',
      question:
        '삼각형의 세 꼭짓점이 A(1, 1), B(7, 1), C(4, 9)입니다. 이 삼각형의 넓이는?',
      options: ['20', '24', '28', '32', '48'],
      correctIndex: 1,
      explanation:
        'AB는 x축에 평행합니다 (y좌표가 둘 다 1).\n\n밑변 AB = |7 - 1| = 6\n\n높이 = C의 y좌표와 AB의 y좌표의 차이 = |9 - 1| = 8\n\n넓이 = ½ × base × height = ½ × 6 × 8 = 24\n\n또는 꼭짓점 공식으로 검증:\nArea = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|\n= ½|1(1-9) + 7(9-1) + 4(1-1)|\n= ½|(-8) + 56 + 0|\n= ½ × 48 = 24 ✓',
      difficulty: 'hard',
    },
    {
      id: 'coord-15',
      topicSlug: 'coordinate-geometry',
      question:
        '점 (3, 4)에서 직선 3x + 4y - 10 = 0까지의 거리는?',
      options: ['1', '3', '5', '15/7', '15'],
      correctIndex: 1,
      explanation:
        '점 (x₀, y₀)에서 직선 ax + by + c = 0까지의 거리:\nd = |ax₀ + by₀ + c| / √(a² + b²)\n\na=3, b=4, c=-10, (x₀,y₀) = (3,4)\n\nd = |3(3) + 4(4) + (-10)| / √(3² + 4²)\n= |9 + 16 - 10| / √(9 + 16)\n= |15| / √25\n= 15 / 5\n= 3\n\n따라서 거리는 3입니다.',
      difficulty: 'hard',
    },
  ],
};
