import { Topic } from '../types';

export const threeDGeometryTopic: Topic = {
  slug: '3d-geometry',
  titleEN: '3D Geometry: Volume & Surface Area',
  titleKR: '3차원 도형',
  category: 'geometry',
  estimatedMinutes: 20,
  ready: true,

  intuition: {
    analogy:
      '3차원 도형은 "포장과 채우기"의 수학이에요. **Volume (부피)**은 상자 안에 물을 얼마나 채울 수 있는지, **Surface area (겉넓이)**는 상자를 포장하는 데 종이가 얼마나 필요한지를 의미합니다. 이사할 때 박스 크기(부피)와 택배 포장지(겉넓이)를 떠올리면 됩니다.',
    pattern:
      'GMAT 3D 문제의 핵심 패턴: 치수가 k배가 되면, 길이는 k배, 넓이는 k²배, 부피는 k³배가 됩니다. 예를 들어 정육면체의 한 변이 2배가 되면 겉넓이는 4배, 부피는 8배가 됩니다. 이 "제곱-세제곱 관계"를 이해하면 복잡해 보이는 문제도 빠르게 풀 수 있습니다.',
    whyItMatters:
      'GMAT은 3D 도형의 공식을 직접 묻기보다, 실생활 상황(물탱크, 포장, 페인트칠)에 넣어서 출제합니다. 부피와 겉넓이 중 어떤 것을 구해야 하는지 판단하는 것이 첫 번째 단계이고, 올바른 공식을 적용하는 것이 두 번째 단계입니다.',
  },

  commonMistakes: [
    {
      wrong: '원기둥(cylinder) 겉넓이에서 옆면(lateral surface)을 빼먹음',
      correct:
        '원기둥의 **Surface area = 2πr² + 2πrh**입니다. 2πr²은 위아래 원 2개, 2πrh는 옆면(직사각형을 말아놓은 것)입니다. 옆면 넓이만 물으면 2πrh, 전체 겉넓이를 물으면 2πr² + 2πrh입니다.',
      examTip:
        '"total surface area"와 "lateral surface area"를 구분하세요. 문제에서 어느 것을 묻는지 꼼꼼히 읽어야 합니다.',
    },
    {
      wrong: '정육면체의 공간 대각선을 s√2로 계산 (실제로는 s√3)',
      correct:
        '정육면체의 **면 대각선(face diagonal) = s√2**, **공간 대각선(space diagonal) = s√3**입니다. 면 대각선은 한 면 위의 대각선이고, 공간 대각선은 꼭짓점에서 반대편 꼭짓점까지의 대각선입니다.',
      examTip:
        '면 대각선: 2차원이라 √2, 공간 대각선: 3차원이라 √3. 차원 수와 루트 안의 숫자가 같다고 기억하세요.',
    },
    {
      wrong: '부피가 8배 → 한 변이 8배라고 생각',
      correct:
        '부피는 길이의 세제곱에 비례합니다. **부피가 8배면 한 변은 ∛8 = 2배**입니다. 반대로 한 변이 3배면 부피는 3³ = 27배가 됩니다.',
      examTip:
        '부피 비율 → 세제곱근으로 한 변의 비율을 구하세요. 넓이 비율 → 제곱근으로 한 변의 비율을 구합니다.',
    },
    {
      wrong: '원뿔(cone) 부피에 1/3을 곱하지 않음',
      correct:
        '**Cone의 부피 = (1/3)πr²h**입니다. 같은 밑면과 높이를 가진 원기둥 부피의 1/3입니다. 마찬가지로 피라미드도 같은 밑면·높이의 직육면체 부피의 1/3입니다.',
      examTip:
        '"뾰족한 도형(cone, pyramid)은 1/3"이라고 기억하세요.',
    },
    {
      wrong: '구(sphere) 부피 공식에서 4/3을 빼먹음',
      correct:
        '**Sphere의 부피 = (4/3)πr³**이고, **겉넓이 = 4πr²**입니다. 부피의 4/3과 겉넓이의 4를 혼동하지 마세요.',
      examTip:
        '구의 공식: 부피는 (4/3)πr³ (r의 세제곱), 겉넓이는 4πr² (r의 제곱). 부피에는 분수(4/3)가 있고, 겉넓이에는 없습니다.',
    },
  ],

  theoryContent: `## 직육면체 (Rectangular Solid / Rectangular Prism)

가로(length) = l, 세로(width) = w, 높이(height) = h

**Volume (부피) = l × w × h**

**Surface area (겉넓이) = 2(lw + lh + wh)**
(6개의 직사각형 면: 마주보는 면끼리 같은 넓이)

**Space diagonal (공간 대각선) = √(l² + w² + h²)**
(한 꼭짓점에서 가장 먼 꼭짓점까지의 거리)

## 정육면체 (Cube)

모든 변의 길이 = s

**Volume = s³**

**Surface area = 6s²**
(6개의 정사각형 면, 각각 넓이 s²)

**Face diagonal (면 대각선) = s√2**
**Space diagonal (공간 대각선) = s√3**

## 원기둥 (Cylinder)

밑면의 반지름 = r, 높이 = h

**Volume = πr²h**
(밑면의 넓이 × 높이)

**Total surface area = 2πr² + 2πrh**
- 2πr²: 위아래 원 2개
- 2πrh: 옆면 (직사각형을 말아놓은 것, 가로 = 둘레 2πr, 세로 = 높이 h)

**Lateral surface area (옆면 넓이만) = 2πrh**

## 구 (Sphere)

반지름 = r

**Volume = (4/3)πr³**

**Surface area = 4πr²**

구는 같은 부피를 가진 3차원 도형 중 겉넓이가 가장 작은 도형입니다.

## 원뿔 (Cone)

밑면의 반지름 = r, 높이 = h

**Volume = (1/3)πr²h**
(같은 밑면·높이의 원기둥 부피의 1/3)

참고: 빗면의 길이(slant height) l = √(r² + h²)

## 치수 변화와 부피·넓이의 관계 (Scaling)

모든 치수(길이)가 k배가 되면:
- 길이 → k배
- **넓이(surface area) → k²배**
- **부피(volume) → k³배**

예시:
- 한 변이 2배 → 겉넓이 4배, 부피 8배
- 한 변이 3배 → 겉넓이 9배, 부피 27배

역으로:
- 부피가 27배 → 한 변은 ∛27 = 3배
- 겉넓이가 4배 → 한 변은 √4 = 2배`,

  formulas: [
    '직육면체 Volume = l × w × h',
    '직육면체 Surface area = 2(lw + lh + wh)',
    '직육면체 Space diagonal = √(l² + w² + h²)',
    'Cube Volume = s³, Surface area = 6s²',
    'Cylinder Volume = πr²h, Surface area = 2πr² + 2πrh',
    'Sphere Volume = (4/3)πr³, Surface area = 4πr²',
    'Cone Volume = (1/3)πr²h',
    '치수 k배 → 넓이 k²배, 부피 k³배',
  ],

  glossary: [
    {
      en: 'Rectangular Solid',
      kr: '직육면체',
      definition: '6개의 직사각형 면으로 이루어진 3차원 도형. 상자 모양',
    },
    {
      en: 'Cube',
      kr: '정육면체',
      definition: '모든 면이 정사각형인 직육면체. 6개의 같은 정사각형 면',
    },
    {
      en: 'Cylinder',
      kr: '원기둥',
      definition: '두 개의 평행한 원형 밑면과 곡면으로 이루어진 도형',
    },
    {
      en: 'Sphere',
      kr: '구',
      definition: '한 점(중심)에서 같은 거리(반지름)에 있는 모든 점의 집합 (3차원)',
    },
    {
      en: 'Cone',
      kr: '원뿔',
      definition: '원형 밑면과 꼭짓점을 가진 뾰족한 도형',
    },
    {
      en: 'Volume',
      kr: '부피',
      definition: '3차원 도형이 차지하는 공간의 크기. 단위: cm³, m³ 등',
    },
    {
      en: 'Surface Area',
      kr: '겉넓이',
      definition: '3차원 도형의 모든 면의 넓이의 합',
    },
    {
      en: 'Lateral Surface Area',
      kr: '옆면 넓이',
      definition: '위아래 밑면을 제외한 옆면만의 넓이',
    },
    {
      en: 'Space Diagonal',
      kr: '공간 대각선',
      definition: '직육면체에서 한 꼭짓점에서 가장 먼 꼭짓점까지의 대각선',
    },
    {
      en: 'Face Diagonal',
      kr: '면 대각선',
      definition: '직육면체의 한 면 위에서의 대각선. 정육면체의 경우 s√2',
    },
    {
      en: 'Slant Height',
      kr: '빗면의 높이 (모선)',
      definition: '원뿔의 밑면 가장자리에서 꼭짓점까지의 거리. l = √(r² + h²)',
    },
    {
      en: 'Scaling',
      kr: '배율 (스케일링)',
      definition: '치수가 k배 변할 때 넓이는 k²배, 부피는 k³배 변하는 관계',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: '3d-1',
      topicSlug: '3d-geometry',
      question:
        '가로 4, 세로 5, 높이 6인 직육면체의 부피는?',
      options: ['60', '80', '100', '120', '148'],
      correctIndex: 3,
      explanation:
        'V = l × w × h = 4 × 5 × 6 = 120\n\n따라서 부피는 120입니다.',
      difficulty: 'easy',
    },
    {
      id: '3d-2',
      topicSlug: '3d-geometry',
      question:
        '한 변의 길이가 3인 정육면체의 겉넓이는?',
      options: ['9', '18', '27', '36', '54'],
      correctIndex: 4,
      explanation:
        'Surface area = 6s² = 6 × 3² = 6 × 9 = 54\n\n정육면체는 6개의 같은 정사각형 면으로 이루어져 있으므로,\n각 면의 넓이 = 9, 총 겉넓이 = 9 × 6 = 54입니다.',
      difficulty: 'easy',
    },
    {
      id: '3d-3',
      topicSlug: '3d-geometry',
      question:
        '밑면의 반지름이 3이고 높이가 10인 원기둥의 부피는?',
      options: ['30π', '60π', '90π', '180π', '270π'],
      correctIndex: 2,
      explanation:
        'V = πr²h = π × 3² × 10 = π × 9 × 10 = 90π\n\n따라서 부피는 90π입니다.',
      difficulty: 'easy',
    },
    {
      id: '3d-4',
      topicSlug: '3d-geometry',
      question:
        '한 변의 길이가 5인 정육면체의 부피는?',
      options: ['25', '75', '100', '125', '150'],
      correctIndex: 3,
      explanation:
        'V = s³ = 5³ = 125\n\n따라서 부피는 125입니다.',
      difficulty: 'easy',
    },
    {
      id: '3d-5',
      topicSlug: '3d-geometry',
      question:
        '반지름이 3인 구의 겉넓이는?',
      options: ['9π', '18π', '27π', '36π', '108π'],
      correctIndex: 3,
      explanation:
        'Surface area = 4πr² = 4π × 3² = 4π × 9 = 36π\n\n따라서 구의 겉넓이는 36π입니다.',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: '3d-6',
      topicSlug: '3d-geometry',
      question:
        '가로 3, 세로 4, 높이 12인 직육면체의 공간 대각선(space diagonal)의 길이는?',
      options: ['5', '12', '13', '15', '√169'],
      correctIndex: 2,
      explanation:
        'Space diagonal = √(l² + w² + h²)\n= √(3² + 4² + 12²)\n= √(9 + 16 + 144)\n= √169\n= 13\n\n참고: (E) √169 = 13이므로 (C)와 같은 값이지만, (C)가 더 직접적입니다.\n\n또한 3² + 4² = 25 = 5²이므로, √(5² + 12²) = √(25+144) = √169 = 13.\n5-12-13은 Pythagorean triple입니다.',
      difficulty: 'medium',
    },
    {
      id: '3d-7',
      topicSlug: '3d-geometry',
      question:
        '밑면의 반지름이 4이고 높이가 5인 원기둥의 전체 겉넓이(total surface area)는?',
      options: ['40π', '56π', '72π', '80π', '96π'],
      correctIndex: 2,
      explanation:
        'Total SA = 2πr² + 2πrh\n= 2π(4²) + 2π(4)(5)\n= 2π(16) + 2π(20)\n= 32π + 40π\n= 72π\n\n위아래 원 2개 = 32π, 옆면 = 40π, 합계 = 72π입니다.',
      difficulty: 'medium',
    },
    {
      id: '3d-8',
      topicSlug: '3d-geometry',
      question:
        '반지름이 6인 구의 부피는?',
      options: ['48π', '144π', '216π', '288π', '864π'],
      correctIndex: 3,
      explanation:
        'V = (4/3)πr³\n= (4/3)π × 6³\n= (4/3)π × 216\n= (4 × 216/3)π\n= (864/3)π\n= 288π\n\n따라서 부피는 288π입니다.',
      difficulty: 'medium',
    },
    {
      id: '3d-9',
      topicSlug: '3d-geometry',
      question:
        '밑면의 반지름이 3이고 높이가 7인 원뿔(cone)의 부피는?',
      options: ['7π', '21π', '42π', '63π', '189π'],
      correctIndex: 1,
      explanation:
        'V = (1/3)πr²h\n= (1/3)π × 3² × 7\n= (1/3)π × 9 × 7\n= (1/3) × 63π\n= 21π\n\n원뿔의 부피는 같은 밑면·높이의 원기둥 부피(63π)의 1/3입니다.',
      difficulty: 'medium',
    },
    {
      id: '3d-10',
      topicSlug: '3d-geometry',
      question:
        '가로 2, 세로 3, 높이 5인 직육면체의 겉넓이는?',
      options: ['30', '31', '46', '62', '124'],
      correctIndex: 3,
      explanation:
        'SA = 2(lw + lh + wh)\n= 2(2×3 + 2×5 + 3×5)\n= 2(6 + 10 + 15)\n= 2 × 31\n= 62\n\n따라서 겉넓이는 62입니다.',
      difficulty: 'medium',
    },
    {
      id: '3d-11',
      topicSlug: '3d-geometry',
      question:
        '한 변의 길이가 4인 정육면체의 공간 대각선(space diagonal)의 길이는?',
      options: ['4', '4√2', '4√3', '8', '8√2'],
      correctIndex: 2,
      explanation:
        '정육면체의 공간 대각선 = s√3\n= 4√3\n\n또는 공식으로:\n√(4² + 4² + 4²) = √(16 + 16 + 16) = √48 = √(16 × 3) = 4√3\n\n참고: 면 대각선 = s√2 = 4√2 (이것과 혼동하지 마세요!)',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: '3d-12',
      topicSlug: '3d-geometry',
      question:
        '정육면체의 부피가 64일 때, 이 정육면체의 겉넓이는?',
      options: ['16', '48', '64', '96', '384'],
      correctIndex: 3,
      explanation:
        'V = s³ = 64\ns = ∛64 = 4\n\nSA = 6s² = 6 × 4² = 6 × 16 = 96\n\n부피에서 한 변의 길이를 구한 뒤 겉넓이를 계산합니다.',
      difficulty: 'hard',
    },
    {
      id: '3d-13',
      topicSlug: '3d-geometry',
      question:
        '원기둥의 반지름이 2배, 높이가 3배가 되면 부피는 원래의 몇 배가 되는가?',
      options: ['5배', '6배', '8배', '12배', '18배'],
      correctIndex: 3,
      explanation:
        '원래 부피: V = πr²h\n\n반지름이 2배 → (2r)² = 4r² → 부피에 4배 기여\n높이가 3배 → 3h → 부피에 3배 기여\n\n새 부피 = π(2r)²(3h) = π × 4r² × 3h = 12πr²h = 12V\n\n따라서 부피는 원래의 12배가 됩니다.',
      difficulty: 'hard',
    },
    {
      id: '3d-14',
      topicSlug: '3d-geometry',
      question:
        '물탱크가 가로 10, 세로 8, 높이 6인 직육면체 모양입니다. 이 탱크에 물이 높이 4까지 차 있을 때, 물의 부피는?',
      options: ['240', '320', '400', '480', '560'],
      correctIndex: 1,
      explanation:
        '물이 차 있는 부분도 직육면체입니다.\n\n가로 = 10, 세로 = 8, 물의 높이 = 4\n\n물의 부피 = 10 × 8 × 4 = 320\n\n참고: 탱크 전체 부피 = 10 × 8 × 6 = 480이고,\n물은 높이의 4/6 = 2/3만큼 차 있으므로\n480 × (2/3) = 320으로도 계산할 수 있습니다.',
      difficulty: 'hard',
    },
    {
      id: '3d-15',
      topicSlug: '3d-geometry',
      question:
        '정육면체 A의 한 변의 길이는 정육면체 B의 한 변의 3배입니다. 정육면체 A의 부피는 정육면체 B의 부피의 몇 배인가?',
      options: ['3배', '6배', '9배', '18배', '27배'],
      correctIndex: 4,
      explanation:
        '정육면체 B의 한 변 = s, 정육면체 A의 한 변 = 3s\n\nB의 부피 = s³\nA의 부피 = (3s)³ = 27s³\n\nA의 부피 / B의 부피 = 27s³ / s³ = 27\n\n따라서 A의 부피는 B의 27배입니다.\n\n핵심: 한 변이 k배 → 부피는 k³배.\n3³ = 27',
      difficulty: 'hard',
    },
  ],
};
