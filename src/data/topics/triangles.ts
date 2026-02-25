import { Topic } from '../types';

export const trianglesTopic: Topic = {
  slug: 'triangles',
  titleEN: 'Triangles',
  titleKR: '삼각형',
  category: 'geometry',
  estimatedMinutes: 25,
  ready: true,

  intuition: {
    analogy:
      '삼각형은 건축의 기본 구조예요. 다리, 지붕, 크레인 — 모두 삼각형 구조를 사용하는 이유는 세 변의 길이가 정해지면 모양이 하나로 결정되기 때문입니다(강체성). 사각형은 흔들리지만, 삼각형은 절대 흔들리지 않아요. 이 "확정성"이 수학 문제 풀이에서도 핵심입니다.',
    pattern:
      '30-60-90 삼각형의 변의 비 1:√3:2, 45-45-90 삼각형의 변의 비 1:1:√2 — 이 두 패턴만 외우면 GMAT 삼각형 문제의 절반은 풀립니다. 또한 3:4:5, 5:12:13, 8:15:17은 대표적인 **Pythagorean triple**입니다.',
    whyItMatters:
      'GMAT은 직접적으로 "피타고라스 정리를 적용하라"고 말하지 않습니다. 대신 넓이, 높이, 또는 좌표 문제 속에 직각삼각형을 숨겨놓고, 이를 발견해서 적용하도록 만듭니다. 특수 직각삼각형 비율을 즉시 인식하는 것이 시간 절약의 핵심입니다.',
  },

  commonMistakes: [
    {
      wrong: '30-60-90 삼각형에서 변의 비를 1:2:√3으로 기억',
      correct:
        '올바른 비는 **1:√3:2** (30° 맞은편 : 60° 맞은편 : 90° 맞은편)입니다. 가장 긴 변(빗변)이 항상 2이고, √3은 중간 변입니다.',
      examTip:
        '30°의 맞은편이 가장 짧은 변(1), 빗변이 가장 긴 변(2)이라는 것만 기억하면 순서를 헷갈리지 않습니다.',
    },
    {
      wrong: '삼각형 넓이에서 아무 변이나 밑변으로 사용',
      correct:
        '넓이 = ½ × base × height에서 **height는 반드시 base에 수직인 높이**여야 합니다. 빗변을 밑변으로 잡으면, 높이는 빗변에 내린 수선의 발까지의 거리입니다.',
      examTip:
        'GMAT은 종종 밑변이 아닌 다른 변의 길이를 주고, 그것을 높이로 쓰게 유도합니다. 항상 "밑변⊥높이"를 확인하세요.',
    },
    {
      wrong: '삼각부등식(triangle inequality)을 무시',
      correct:
        '어떤 삼각형이든 두 변의 합은 나머지 한 변보다 커야 합니다: **a + b > c**. 이 조건 세 가지 (a+b>c, a+c>b, b+c>a)를 모두 만족해야 삼각형이 존재합니다.',
      examTip:
        'Data Sufficiency에서 "삼각형이 존재하는가?"를 묻는 문제에서 이 부등식이 핵심입니다.',
    },
    {
      wrong: '닮음(similar)과 합동(congruent) 혼동',
      correct:
        '**Similar triangles**은 모양이 같고 크기가 다릅니다(대응하는 각이 같고 변의 비가 일정). **Congruent triangles**은 모양과 크기가 모두 같습니다(대응하는 변과 각이 같음).',
      examTip:
        'GMAT에서 닮음 삼각형이 나오면 변의 비 = 변의 비를 세우는 것이 핵심입니다. 넓이의 비는 변의 비의 제곱입니다.',
    },
    {
      wrong: '피타고라스 정리를 둔각/예각삼각형에 적용',
      correct:
        '**Pythagorean theorem (a² + b² = c²)**은 오직 **직각삼각형**에서만 성립합니다. 직각이 아닌 삼각형에서는 사용할 수 없습니다.',
      examTip:
        '문제에서 직각이 명시되어 있는지, 또는 직각을 유추할 수 있는 조건이 있는지 먼저 확인하세요.',
    },
  ],

  theoryContent: `## 삼각형의 종류

변의 길이에 따른 분류:
- **Equilateral triangle (정삼각형)**: 세 변의 길이가 모두 같고, 세 각이 모두 60°
- **Isosceles triangle (이등변삼각형)**: 두 변의 길이가 같고, 같은 변에 대한 밑각도 같음
- **Scalene triangle (부등변삼각형)**: 세 변의 길이가 모두 다른 삼각형

각의 크기에 따른 분류:
- **Acute triangle (예각삼각형)**: 세 각이 모두 예각 (90°미만)
- **Right triangle (직각삼각형)**: 한 각이 정확히 90°
- **Obtuse triangle (둔각삼각형)**: 한 각이 둔각 (90° 초과)

## 삼각형의 넓이

가장 기본적인 넓이 공식: **Area = ½ × base × height**

여기서 **height (높이)**는 **base (밑변)**에 수직으로 내린 선분의 길이입니다.

직각삼각형의 경우, 두 직각변이 밑변과 높이가 되므로:
Area = ½ × (직각변₁) × (직각변₂)

정삼각형의 넓이: 한 변의 길이가 a일 때, **Area = (√3/4) × a²**

## 피타고라스 정리 (Pythagorean Theorem)

직각삼각형에서 빗변(hypotenuse) c와 두 직각변(legs) a, b 사이에 다음이 성립합니다:

**a² + b² = c²**

대표적인 **Pythagorean triples** (피타고라스 수):
- 3, 4, 5 (및 배수: 6-8-10, 9-12-15, ...)
- 5, 12, 13
- 8, 15, 17
- 7, 24, 25

## 특수 직각삼각형 (Special Right Triangles)

### 30-60-90 삼각형
변의 비 = **1 : √3 : 2** (30° 맞은편 : 60° 맞은편 : 90° 맞은편)
- 가장 짧은 변(30° 맞은편) = x
- 중간 변(60° 맞은편) = x√3
- 빗변(90° 맞은편) = 2x

### 45-45-90 삼각형 (이등변 직각삼각형)
변의 비 = **1 : 1 : √2** (45° 맞은편 : 45° 맞은편 : 90° 맞은편)
- 두 직각변 = x
- 빗변 = x√2

## 삼각부등식 (Triangle Inequality)

삼각형이 존재하기 위한 필수 조건: **어떤 두 변의 합은 나머지 한 변보다 커야 합니다.**

a + b > c, a + c > b, b + c > a

실전에서는 가장 긴 변 < 나머지 두 변의 합만 확인하면 됩니다.

또한 세 번째 변의 범위: |a - b| < c < a + b

## 닮음 삼각형 (Similar Triangles)

두 삼각형이 **similar (닮음)**이면:
- 대응하는 각이 모두 같음 (AA, AAA)
- 대응하는 변의 비가 일정함

닮음 조건: **AA (Angle-Angle)** — 두 각이 같으면 자동으로 닮음

닮음비가 k이면:
- 대응하는 변의 비 = k
- 넓이의 비 = k²

## 합동 삼각형 (Congruent Triangles)

두 삼각형이 **congruent (합동)**이면 모양과 크기가 완전히 같습니다.

합동 조건: SSS, SAS, ASA, AAS`,

  formulas: [
    'Area = ½ × base × height',
    '정삼각형 넓이 = (√3/4) × a²',
    'Pythagorean theorem: a² + b² = c²',
    '30-60-90 변의 비 = 1 : √3 : 2',
    '45-45-90 변의 비 = 1 : 1 : √2',
    '삼각부등식: |a - b| < c < a + b',
    '닮음비 k → 넓이비 = k²',
    'Pythagorean triples: 3-4-5, 5-12-13, 8-15-17',
  ],

  glossary: [
    {
      en: 'Right Triangle',
      kr: '직각삼각형',
      definition: '한 각이 정확히 90°인 삼각형',
    },
    {
      en: 'Hypotenuse',
      kr: '빗변',
      definition: '직각삼각형에서 직각의 맞은편에 있는 가장 긴 변',
    },
    {
      en: 'Leg',
      kr: '직각변',
      definition: '직각삼각형에서 직각을 이루는 두 변',
    },
    {
      en: 'Equilateral Triangle',
      kr: '정삼각형',
      definition: '세 변의 길이가 모두 같은 삼각형. 세 각이 모두 60°',
    },
    {
      en: 'Isosceles Triangle',
      kr: '이등변삼각형',
      definition: '두 변의 길이가 같은 삼각형. 같은 변의 밑각도 같음',
    },
    {
      en: 'Scalene Triangle',
      kr: '부등변삼각형',
      definition: '세 변의 길이가 모두 다른 삼각형',
    },
    {
      en: 'Pythagorean Theorem',
      kr: '피타고라스 정리',
      definition: '직각삼각형에서 a² + b² = c² (c는 빗변)',
    },
    {
      en: 'Similar Triangles',
      kr: '닮음 삼각형',
      definition: '대응하는 각이 같고, 대응하는 변의 비가 일정한 두 삼각형',
    },
    {
      en: 'Congruent Triangles',
      kr: '합동 삼각형',
      definition: '대응하는 변과 각이 모두 같은 (모양과 크기가 같은) 두 삼각형',
    },
    {
      en: 'Triangle Inequality',
      kr: '삼각부등식',
      definition: '삼각형의 어떤 두 변의 합은 나머지 한 변보다 커야 함',
    },
    {
      en: 'Altitude (Height)',
      kr: '높이',
      definition: '꼭짓점에서 맞은편 변(밑변)에 내린 수선의 길이',
    },
    {
      en: 'Median',
      kr: '중선',
      definition: '꼭짓점에서 맞은편 변의 중점까지 잇는 선분',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: 'tri-1',
      topicSlug: 'triangles',
      question:
        '직각삼각형의 두 직각변의 길이가 3과 4입니다. 빗변(hypotenuse)의 길이는?',
      options: ['5', '6', '7', '√7', '√24'],
      correctIndex: 0,
      explanation:
        '피타고라스 정리를 적용합니다.\n\nc² = a² + b² = 3² + 4² = 9 + 16 = 25\nc = √25 = 5\n\n3-4-5는 가장 기본적인 Pythagorean triple입니다.',
      difficulty: 'easy',
    },
    {
      id: 'tri-2',
      topicSlug: 'triangles',
      question:
        '밑변이 10이고 높이가 6인 삼각형의 넓이는?',
      options: ['16', '24', '30', '36', '60'],
      correctIndex: 2,
      explanation:
        '삼각형의 넓이 = ½ × base × height\n= ½ × 10 × 6\n= 30\n\n따라서 넓이는 30입니다.',
      difficulty: 'easy',
    },
    {
      id: 'tri-3',
      topicSlug: 'triangles',
      question:
        '정삼각형의 한 내각의 크기는?',
      options: ['45°', '50°', '55°', '60°', '90°'],
      correctIndex: 3,
      explanation:
        '정삼각형은 세 변의 길이가 모두 같으므로, 세 각도 모두 같습니다.\n\n세 내각의 합 = 180°\n한 내각 = 180° ÷ 3 = 60°\n\n따라서 정삼각형의 한 내각은 60°입니다.',
      difficulty: 'easy',
    },
    {
      id: 'tri-4',
      topicSlug: 'triangles',
      question:
        '45-45-90 직각삼각형의 빗변이 10√2일 때, 한 직각변의 길이는?',
      options: ['5', '5√2', '10', '10√2', '20'],
      correctIndex: 2,
      explanation:
        '45-45-90 삼각형의 변의 비 = 1 : 1 : √2\n\n빗변 = x√2 = 10√2이므로\nx = 10\n\n따라서 각 직각변의 길이는 10입니다.',
      difficulty: 'easy',
    },
    {
      id: 'tri-5',
      topicSlug: 'triangles',
      question:
        '다음 중 삼각형의 세 변이 될 수 없는 것은?',
      options: [
        '3, 4, 5',
        '5, 5, 8',
        '2, 3, 6',
        '7, 8, 10',
        '1, 1, 1',
      ],
      correctIndex: 2,
      explanation:
        '삼각부등식: 어떤 두 변의 합은 나머지 한 변보다 커야 합니다.\n\n(A) 3 + 4 = 7 > 5 ✓\n(B) 5 + 5 = 10 > 8 ✓\n(C) 2 + 3 = 5 < 6 ✗ → 삼각형 불가능!\n(D) 7 + 8 = 15 > 10 ✓\n(E) 1 + 1 = 2 > 1 ✓\n\n따라서 (C) 2, 3, 6은 삼각형이 될 수 없습니다.',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: 'tri-6',
      topicSlug: 'triangles',
      question:
        '30-60-90 삼각형에서 가장 짧은 변의 길이가 5일 때, 빗변의 길이는?',
      options: ['5√2', '5√3', '10', '10√2', '10√3'],
      correctIndex: 2,
      explanation:
        '30-60-90 삼각형의 변의 비 = 1 : √3 : 2\n\n가장 짧은 변(30° 맞은편) = 5\n중간 변(60° 맞은편) = 5√3\n빗변(90° 맞은편) = 5 × 2 = 10\n\n따라서 빗변의 길이는 10입니다.',
      difficulty: 'medium',
    },
    {
      id: 'tri-7',
      topicSlug: 'triangles',
      question:
        '직각삼각형의 두 직각변의 길이가 5와 12입니다. 이 삼각형의 넓이는?',
      options: ['17', '25', '30', '35', '60'],
      correctIndex: 2,
      explanation:
        '직각삼각형에서 두 직각변이 밑변과 높이가 됩니다.\n\n넓이 = ½ × 5 × 12 = 30\n\n참고: 빗변 = √(5² + 12²) = √(25 + 144) = √169 = 13\n(5-12-13은 Pythagorean triple)',
      difficulty: 'medium',
    },
    {
      id: 'tri-8',
      topicSlug: 'triangles',
      question:
        '한 변의 길이가 8인 정삼각형의 넓이는?',
      options: ['16', '16√3', '24', '32', '32√3'],
      correctIndex: 1,
      explanation:
        '정삼각형의 넓이 = (√3/4) × a²\n= (√3/4) × 8²\n= (√3/4) × 64\n= 16√3\n\n다른 풀이: 밑변 = 8, 높이 = 8 × (√3/2) = 4√3\n넓이 = ½ × 8 × 4√3 = 16√3 ✓',
      difficulty: 'medium',
    },
    {
      id: 'tri-9',
      topicSlug: 'triangles',
      question:
        '두 닮음 삼각형의 대응하는 변의 비가 2:3일 때, 넓이의 비는?',
      options: ['2:3', '4:6', '4:9', '8:27', '6:9'],
      correctIndex: 2,
      explanation:
        '닮음 삼각형에서 변의 비가 k이면, 넓이의 비는 k²입니다.\n\n변의 비 = 2:3\n넓이의 비 = 2²:3² = 4:9\n\n따라서 넓이의 비는 4:9입니다.',
      difficulty: 'medium',
    },
    {
      id: 'tri-10',
      topicSlug: 'triangles',
      question:
        '삼각형의 두 변의 길이가 7과 11일 때, 세 번째 변의 길이가 될 수 있는 정수의 개수는?',
      options: ['9', '11', '13', '15', '17'],
      correctIndex: 2,
      explanation:
        '삼각부등식에 의해 세 번째 변 c의 범위:\n|a - b| < c < a + b\n|7 - 11| < c < 7 + 11\n4 < c < 18\n\nc는 정수이므로: c = 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17\n\n개수 = 17 - 5 + 1 = 13개\n\n따라서 정답은 13개입니다.',
      difficulty: 'medium',
    },
    {
      id: 'tri-11',
      topicSlug: 'triangles',
      question:
        '직각삼각형의 빗변이 13이고 한 직각변이 5일 때, 나머지 직각변의 길이는?',
      options: ['8', '10', '12', '14', '√144'],
      correctIndex: 2,
      explanation:
        '피타고라스 정리: a² + b² = c²\n\n5² + b² = 13²\n25 + b² = 169\nb² = 144\nb = 12\n\n5-12-13은 Pythagorean triple입니다.\n(E) √144 = 12이므로 (C)와 같은 값이지만, (C) 12가 더 직접적인 답입니다.',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: 'tri-12',
      topicSlug: 'triangles',
      question:
        '30-60-90 삼각형의 넓이가 18√3일 때, 빗변(hypotenuse)의 길이는?',
      options: ['6', '6√3', '12', '12√3', '18'],
      correctIndex: 2,
      explanation:
        '30-60-90 삼각형의 변: x (30° 맞은편), x√3 (60° 맞은편), 2x (빗변)\n\n두 직각변은 x와 x√3입니다.\n넓이 = ½ × x × x√3 = (x²√3)/2\n\n(x²√3)/2 = 18√3\nx²√3 = 36√3\nx² = 36\nx = 6\n\n빗변 = 2x = 2 × 6 = 12\n\n검증: 변의 길이 = 6, 6√3, 12\n넓이 = ½ × 6 × 6√3 = 18√3 ✓\n\n따라서 빗변의 길이는 12입니다.',
      difficulty: 'hard',
    },
    {
      id: 'tri-13',
      topicSlug: 'triangles',
      question:
        '직각삼각형 ABC에서 ∠C = 90°, AC = 8, BC = 15입니다. 점 C에서 빗변 AB에 내린 수선의 발을 D라 할 때, CD의 길이는?',
      options: ['120/17', '128/17', '6', '7', '8'],
      correctIndex: 0,
      explanation:
        '먼저 빗변 AB를 구합니다.\nAB = √(AC² + BC²) = √(64 + 225) = √289 = 17\n\n삼각형의 넓이를 두 가지 방법으로 구합니다:\n방법 1: 넓이 = ½ × AC × BC = ½ × 8 × 15 = 60\n방법 2: 넓이 = ½ × AB × CD = ½ × 17 × CD\n\n두 넓이가 같으므로:\n½ × 17 × CD = 60\nCD = 120/17\n\n따라서 CD = 120/17 ≈ 7.06입니다.',
      difficulty: 'hard',
    },
    {
      id: 'tri-14',
      topicSlug: 'triangles',
      question:
        '큰 삼각형 안에 작은 닮음 삼각형이 있습니다. 큰 삼각형의 넓이가 100이고, 두 삼각형의 대응하는 변의 비가 5:3일 때, 큰 삼각형에서 작은 삼각형을 뺀 영역의 넓이는?',
      options: ['36', '48', '52', '64', '72'],
      correctIndex: 3,
      explanation:
        '닮음비 = 5:3\n넓이비 = 5²:3² = 25:9\n\n큰 삼각형 넓이 = 100\n작은 삼각형 넓이 = 100 × (9/25) = 36\n\n차이 = 100 - 36 = 64\n\n따라서 큰 삼각형에서 작은 삼각형을 뺀 영역의 넓이는 64입니다.',
      difficulty: 'hard',
    },
    {
      id: 'tri-15',
      topicSlug: 'triangles',
      question:
        '직각삼각형에서 빗변의 길이가 20이고, 한 예각이 30°입니다. 이 삼각형의 넓이는?',
      options: ['50', '50√3', '100', '100√3', '200'],
      correctIndex: 1,
      explanation:
        '30-60-90 삼각형이므로 변의 비 = 1 : √3 : 2\n\n빗변 = 2x = 20 → x = 10\n30° 맞은편 = 10\n60° 맞은편 = 10√3\n\n넓이 = ½ × 10 × 10√3 = 50√3\n\n따라서 넓이는 50√3입니다.',
      difficulty: 'hard',
    },
  ],
};
