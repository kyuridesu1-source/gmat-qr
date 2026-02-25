import { Topic } from '../types';

export const circlesTopic: Topic = {
  slug: 'circles',
  titleEN: 'Circles',
  titleKR: '원',
  category: 'geometry',
  estimatedMinutes: 20,
  ready: true,

  intuition: {
    analogy:
      '원은 자연에서 가장 "효율적인" 도형이에요. 같은 둘레(길이)로 만들 수 있는 도형 중 넓이가 가장 큰 것이 바로 원입니다. 비누 방울이 항상 구형인 이유도 이 때문이죠. GMAT에서 원은 딱 하나의 숫자 — **radius (반지름)** — 만 알면 모든 것(둘레, 넓이, 호의 길이, 부채꼴 넓이)을 구할 수 있다는 점이 핵심입니다.',
    pattern:
      '원 문제의 80%는 "비율 사고"로 풀립니다. 중심각이 전체(360°)의 몇 분의 몇인지만 파악하면, **arc length (호의 길이)**는 둘레의 그 비율, **sector area (부채꼴 넓이)**는 넓이의 그 비율입니다. 예: 중심각 90° → 전체의 1/4 → 호의 길이 = 둘레 × 1/4, 부채꼴 넓이 = 넓이 × 1/4.',
    whyItMatters:
      'GMAT은 원 단독 문제보다 삼각형·사각형과 결합된 문제를 자주 출제합니다. "원에 내접하는 삼각형", "원에 외접하는 정사각형" 등의 복합 문제에서 반지름을 빠르게 파악하는 능력이 핵심입니다.',
  },

  commonMistakes: [
    {
      wrong: '지름(diameter)과 반지름(radius) 혼동',
      correct:
        '**Diameter = 2 × Radius**입니다. 문제에서 "지름이 10"이라고 주면 반지름은 5입니다. C = 2πr = πd이므로, 지름이 주어지면 C = πd를 바로 쓰는 것이 더 빠릅니다.',
      examTip:
        '문제에서 d가 주어졌는지 r이 주어졌는지 항상 먼저 확인하세요. 많은 실수가 여기서 시작됩니다.',
    },
    {
      wrong: '호의 길이 구할 때 각도를 라디안(radian)으로 넣음',
      correct:
        'GMAT은 항상 **도(degree)** 단위를 사용합니다. 호의 길이 = (θ/360) × 2πr에서 θ는 반드시 도(°)로 넣어야 합니다. 라디안 공식 s = rθ는 GMAT에서 사용하지 않습니다.',
      examTip:
        'GMAT에서 라디안은 출제되지 않습니다. 항상 (각도/360) × 전체 공식을 사용하세요.',
    },
    {
      wrong: '내접각(inscribed angle)과 중심각(central angle) 관계 혼동',
      correct:
        '같은 호에 대해 **inscribed angle = ½ × central angle**입니다. 중심각이 80°면 내접각은 40°입니다. 반대로 내접각이 주어지면 중심각은 그 2배입니다.',
      examTip:
        '반원에 내접하는 각(지름 위의 내접각)은 항상 90°입니다. 이것은 GMAT 단골 출제 포인트입니다.',
    },
    {
      wrong: '접선(tangent)과 반지름이 이루는 각도를 무시',
      correct:
        '**Tangent line**은 접점에서 반지름과 항상 **90°(수직)**를 이룹니다. 이 성질을 이용하면 직각삼각형이 만들어지고, 피타고라스 정리를 적용할 수 있습니다.',
      examTip:
        '"접선"이 나오면 즉시 직각을 표시하세요. 대부분의 접선 문제는 직각삼각형 문제로 변환됩니다.',
    },
    {
      wrong: '부채꼴 넓이 공식에서 πr² 대신 2πr을 사용',
      correct:
        '**Sector area = (θ/360) × πr²** (넓이의 비율)이고, **Arc length = (θ/360) × 2πr** (둘레의 비율)입니다. 넓이를 구할 때는 πr², 길이를 구할 때는 2πr을 사용합니다.',
      examTip:
        '"넓이 → πr², 길이 → 2πr" 이렇게 짝을 지어 기억하세요.',
    },
  ],

  theoryContent: `## 원의 기본 요소

- **Center (중심)**: 원의 정가운데 점
- **Radius (반지름, r)**: 중심에서 원 위의 한 점까지의 거리
- **Diameter (지름, d)**: 원을 지나는 가장 긴 선분. **d = 2r**
- **Chord (현)**: 원 위의 두 점을 잇는 선분. 지름은 가장 긴 현입니다.

## 둘레와 넓이

**Circumference (둘레)**: 원의 테두리 길이

**C = 2πr = πd**

**Area (넓이)**: 원이 차지하는 면적

**A = πr²**

핵심: 반지름만 알면 둘레와 넓이를 모두 구할 수 있습니다.

## 호의 길이와 부채꼴 넓이

**Arc (호)**: 원 위의 두 점 사이의 곡선 부분

중심각이 θ°일 때:

**Arc length (호의 길이) = (θ/360) × 2πr**

**Sector area (부채꼴 넓이) = (θ/360) × πr²**

비율 사고: 중심각이 전체(360°)에서 차지하는 비율만큼, 호의 길이는 둘레의 비율, 부채꼴 넓이는 전체 넓이의 비율입니다.

## 중심각과 내접각 (Central Angle vs Inscribed Angle)

**Central angle (중심각)**: 꼭짓점이 원의 중심에 있는 각
**Inscribed angle (내접각)**: 꼭짓점이 원 위에 있는 각

같은 호에 대해: **Inscribed angle = ½ × Central angle**

특수한 경우: **반원에 대한 내접각 = 90°**
(지름의 양 끝점과 원 위의 한 점이 만드는 삼각형은 항상 직각삼각형)

## 현의 성질 (Chord Properties)

- 원의 중심에서 현에 내린 **수선(perpendicular)**은 그 현을 **이등분(bisect)** 합니다.
- 중심에서 같은 거리에 있는 두 현의 길이는 같습니다.
- 지름(diameter)은 원에서 가장 긴 현입니다.

## 접선의 성질 (Tangent Properties)

**Tangent (접선)**: 원과 딱 한 점에서 만나는 직선

- 접선은 접점에서 반지름과 **수직(perpendicular)**입니다. → 직각(90°)
- 외부 한 점에서 원에 그은 두 접선의 길이는 **같습니다**.

이 두 성질을 이용하면 접선 문제를 직각삼각형 문제로 바꿀 수 있습니다.`,

  formulas: [
    'Circumference: C = 2πr = πd',
    'Area: A = πr²',
    'Arc length = (θ/360) × 2πr',
    'Sector area = (θ/360) × πr²',
    'Inscribed angle = ½ × Central angle',
    'd = 2r (지름 = 2 × 반지름)',
    '반원에 대한 내접각 = 90°',
    '외부 한 점에서 그은 두 접선의 길이는 같다',
  ],

  glossary: [
    {
      en: 'Circle',
      kr: '원',
      definition: '한 점(중심)으로부터 같은 거리(반지름)에 있는 모든 점의 집합',
    },
    {
      en: 'Radius',
      kr: '반지름',
      definition: '원의 중심에서 원 위의 한 점까지의 거리 (r)',
    },
    {
      en: 'Diameter',
      kr: '지름',
      definition: '원의 중심을 지나는 선분. 가장 긴 현. d = 2r',
    },
    {
      en: 'Circumference',
      kr: '둘레',
      definition: '원의 테두리 길이. C = 2πr = πd',
    },
    {
      en: 'Arc',
      kr: '호',
      definition: '원 위의 두 점 사이의 곡선 부분',
    },
    {
      en: 'Chord',
      kr: '현',
      definition: '원 위의 두 점을 잇는 선분. 지름은 가장 긴 현',
    },
    {
      en: 'Sector',
      kr: '부채꼴',
      definition: '두 반지름과 호로 둘러싸인 영역',
    },
    {
      en: 'Central Angle',
      kr: '중심각',
      definition: '꼭짓점이 원의 중심에 있는 각',
    },
    {
      en: 'Inscribed Angle',
      kr: '내접각',
      definition: '꼭짓점이 원 위에 있고, 두 변이 현인 각',
    },
    {
      en: 'Tangent',
      kr: '접선',
      definition: '원과 정확히 한 점에서만 만나는 직선. 접점에서 반지름과 수직',
    },
    {
      en: 'Point of Tangency',
      kr: '접점',
      definition: '접선이 원과 만나는 유일한 점',
    },
    {
      en: 'Semicircle',
      kr: '반원',
      definition: '지름에 의해 나뉜 원의 절반. 반원에 대한 내접각은 90°',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: 'circ-1',
      topicSlug: 'circles',
      question:
        '반지름이 7인 원의 넓이는?',
      options: ['14π', '28π', '49π', '98π', '196π'],
      correctIndex: 2,
      explanation:
        'A = πr² = π × 7² = 49π\n\n반지름이 7이므로 넓이는 49π입니다.',
      difficulty: 'easy',
    },
    {
      id: 'circ-2',
      topicSlug: 'circles',
      question:
        '지름이 10인 원의 둘레(circumference)는?',
      options: ['5π', '10π', '20π', '25π', '100π'],
      correctIndex: 1,
      explanation:
        'C = πd = π × 10 = 10π\n\n또는 r = 5이므로 C = 2πr = 2π × 5 = 10π\n\n따라서 둘레는 10π입니다.',
      difficulty: 'easy',
    },
    {
      id: 'circ-3',
      topicSlug: 'circles',
      question:
        '원의 넓이가 36π일 때, 이 원의 지름은?',
      options: ['6', '9', '12', '18', '36'],
      correctIndex: 2,
      explanation:
        'A = πr² = 36π\nr² = 36\nr = 6\n\n지름 d = 2r = 2 × 6 = 12\n\n따라서 지름은 12입니다.',
      difficulty: 'easy',
    },
    {
      id: 'circ-4',
      topicSlug: 'circles',
      question:
        '중심각이 90°이고 반지름이 8인 부채꼴의 넓이는?',
      options: ['8π', '16π', '32π', '64π', '4π'],
      correctIndex: 1,
      explanation:
        'Sector area = (θ/360) × πr²\n= (90/360) × π × 8²\n= (1/4) × 64π\n= 16π\n\n중심각 90°는 전체의 1/4이므로, 넓이도 전체 넓이의 1/4입니다.',
      difficulty: 'easy',
    },
    {
      id: 'circ-5',
      topicSlug: 'circles',
      question:
        '반지름이 6인 원에서 중심각이 60°인 호의 길이는?',
      options: ['π', '2π', '3π', '6π', '12π'],
      correctIndex: 1,
      explanation:
        'Arc length = (θ/360) × 2πr\n= (60/360) × 2π × 6\n= (1/6) × 12π\n= 2π\n\n중심각 60°는 전체(360°)의 1/6이므로, 호의 길이도 둘레의 1/6입니다.',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: 'circ-6',
      topicSlug: 'circles',
      question:
        '원의 둘레(circumference)가 20π일 때, 이 원의 넓이는?',
      options: ['20π', '40π', '100π', '200π', '400π'],
      correctIndex: 2,
      explanation:
        'C = 2πr = 20π\nr = 10\n\nA = πr² = π × 10² = 100π\n\n둘레에서 반지름을 먼저 구한 뒤 넓이를 계산합니다.',
      difficulty: 'medium',
    },
    {
      id: 'circ-7',
      topicSlug: 'circles',
      question:
        '원에 내접하는 삼각형의 한 변이 지름이고, 지름의 길이가 10입니다. 이 삼각형의 나머지 한 변의 길이가 6일 때, 세 번째 변의 길이는?',
      options: ['4', '6', '8', '10', '√136'],
      correctIndex: 2,
      explanation:
        '반원에 대한 내접각은 90°이므로, 지름을 한 변으로 하는 내접 삼각형은 직각삼각형입니다.\n\n빗변(지름) = 10, 한 변 = 6\n세 번째 변² = 10² - 6² = 100 - 36 = 64\n세 번째 변 = 8\n\n이것은 6-8-10 (= 3-4-5의 2배) Pythagorean triple입니다.',
      difficulty: 'medium',
    },
    {
      id: 'circ-8',
      topicSlug: 'circles',
      question:
        '반지름이 10인 원에서 중심으로부터 6만큼 떨어진 현의 길이는?',
      options: ['6', '8', '12', '16', '20'],
      correctIndex: 3,
      explanation:
        '중심에서 현에 수선을 내리면, 그 수선은 현을 이등분합니다.\n\n직각삼각형이 만들어집니다:\n- 빗변(반지름) = 10\n- 한 변(중심에서 현까지 거리) = 6\n- 나머지 변(현의 절반) = √(10² - 6²) = √(100 - 36) = √64 = 8\n\n현의 전체 길이 = 8 × 2 = 16',
      difficulty: 'medium',
    },
    {
      id: 'circ-9',
      topicSlug: 'circles',
      question:
        '중심각이 120°이고 반지름이 9인 부채꼴의 호의 길이는?',
      options: ['3π', '6π', '9π', '12π', '18π'],
      correctIndex: 1,
      explanation:
        'Arc length = (θ/360) × 2πr\n= (120/360) × 2π × 9\n= (1/3) × 18π\n= 6π\n\n중심각 120°는 전체(360°)의 1/3이므로, 호의 길이도 둘레(18π)의 1/3입니다.',
      difficulty: 'medium',
    },
    {
      id: 'circ-10',
      topicSlug: 'circles',
      question:
        '원에 내접하는 각(inscribed angle)이 35°일 때, 같은 호에 대한 중심각(central angle)은?',
      options: ['17.5°', '35°', '55°', '70°', '105°'],
      correctIndex: 3,
      explanation:
        '같은 호에 대해: Inscribed angle = ½ × Central angle\n\n35° = ½ × Central angle\nCentral angle = 35° × 2 = 70°\n\n내접각은 항상 같은 호에 대한 중심각의 절반입니다.',
      difficulty: 'medium',
    },
    {
      id: 'circ-11',
      topicSlug: 'circles',
      question:
        '반지름이 5인 원의 넓이를 두 배로 만들려면, 새로운 반지름은 약 얼마여야 하는가?',
      options: ['5√2', '10', '7', '5√3', '25'],
      correctIndex: 0,
      explanation:
        '원래 넓이 = π × 5² = 25π\n새 넓이 = 2 × 25π = 50π\n\nπR² = 50π\nR² = 50\nR = √50 = 5√2 ≈ 7.07\n\n넓이가 2배가 되려면 반지름은 √2배가 되어야 합니다.',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: 'circ-12',
      topicSlug: 'circles',
      question:
        '반지름이 5인 원의 외부 한 점 P에서 원에 접선을 그었더니, 접선의 길이(P에서 접점까지)가 12입니다. 점 P에서 원의 중심까지의 거리는?',
      options: ['10', '11', '12', '13', '15'],
      correctIndex: 3,
      explanation:
        '접선은 접점에서 반지름과 수직이므로 직각삼각형이 만들어집니다.\n\n- 한 변(반지름) = 5\n- 다른 변(접선의 길이) = 12\n- 빗변(P에서 중심까지) = ?\n\nd² = 5² + 12² = 25 + 144 = 169\nd = 13\n\n5-12-13은 Pythagorean triple입니다.',
      difficulty: 'hard',
    },
    {
      id: 'circ-13',
      topicSlug: 'circles',
      question:
        '한 변의 길이가 10인 정사각형에 내접하는 원의 넓이는? (원이 정사각형의 네 변에 모두 접함)',
      options: ['10π', '20π', '25π', '50π', '100π'],
      correctIndex: 2,
      explanation:
        '정사각형에 내접하는 원의 지름 = 정사각형의 한 변의 길이\n\nd = 10이므로 r = 5\n\nA = πr² = π × 5² = 25π\n\n정사각형에 내접하는 원의 반지름은 정사각형 한 변의 절반입니다.',
      difficulty: 'hard',
    },
    {
      id: 'circ-14',
      topicSlug: 'circles',
      question:
        '반지름이 12인 원에서 길이가 12인 현이 있습니다. 이 현에 대한 중심각은?',
      options: ['30°', '45°', '60°', '90°', '120°'],
      correctIndex: 2,
      explanation:
        '중심에서 현의 양 끝점으로 반지름을 그으면 이등변삼각형이 만들어집니다.\n\n두 반지름 = 12, 12\n현의 길이 = 12\n\n세 변이 모두 12인 정삼각형!\n\n정삼각형의 모든 내각 = 60°\n\n따라서 중심각 = 60°입니다.\n\n검증: 중심에서 현에 수선을 내리면, 현의 절반 = 6\ncos(θ/2) = 6/12 = 1/2\nθ/2 = 60° → θ = ... 이 아니라\nsin(θ/2) = 6/12 = 1/2\nθ/2 = 30° → θ = 60° ✓',
      difficulty: 'hard',
    },
    {
      id: 'circ-15',
      topicSlug: 'circles',
      question:
        '큰 원의 반지름이 10이고, 이 원 안에 반지름이 6인 작은 원이 있습니다. 두 원의 중심이 같을 때(동심원), 큰 원과 작은 원 사이의 영역(annulus)의 넓이는?',
      options: ['16π', '36π', '64π', '100π', '136π'],
      correctIndex: 2,
      explanation:
        'Annulus (고리 영역)의 넓이 = 큰 원의 넓이 - 작은 원의 넓이\n\n= π × 10² - π × 6²\n= 100π - 36π\n= 64π\n\n따라서 두 동심원 사이의 넓이는 64π입니다.',
      difficulty: 'hard',
    },
  ],
};
