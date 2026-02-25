import { Topic } from '../types';

export const linesAnglesTopic: Topic = {
  slug: 'lines-angles',
  titleEN: 'Lines & Angles',
  titleKR: '선과 각도',
  category: 'geometry',
  estimatedMinutes: 15,
  ready: true,

  intuition: {
    analogy:
      '각도는 시계 바늘의 움직임과 같아요. 12시에서 3시 방향으로 움직이면 90°(**right angle**), 6시 방향이면 180°(**straight angle**), 한 바퀴를 다 돌면 360°(**full rotation**)입니다. 평행선에 사선이 지나가는 것은 마치 고속도로 위의 횡단보도처럼 — 같은 패턴의 각도가 반복됩니다.',
    pattern:
      '두 직선이 만나면 항상 맞꼭지각이 같고, 평행선을 횡단선이 지나면 8개의 각이 만들어지는데 실제로는 2가지 크기뿐입니다: α와 (180° - α). 삼각형 내각의 합 180°도 이 성질에서 유도됩니다.',
    whyItMatters:
      'GMAT은 직접 "각도를 구하라"고 묻기보다, 평행선 조건을 숨기고 **alternate interior angle**이나 **corresponding angle** 성질을 활용해야 풀리는 문제를 출제합니다. 기본 성질을 확실히 알면 2~3단계 추론이 빨라집니다.',
  },

  commonMistakes: [
    {
      wrong: '보각(supplementary)을 90°로 합산하는 것',
      correct:
        '**Complementary angles**의 합이 90°이고, **supplementary angles**의 합이 180°입니다. "C"omplementary = "C"orner(90°), "S"upplementary = "S"traight(180°)로 기억하세요.',
      examTip:
        'GMAT은 두 각이 "supplementary"라고 할 때 합이 180°인지, "complementary"라고 할 때 합이 90°인지 혼동하게 만드는 문제를 출제합니다.',
    },
    {
      wrong: '맞꼭지각(vertical angles)을 인접한 각으로 혼동',
      correct:
        '**Vertical angles**은 두 직선이 교차할 때 서로 마주보는 각으로, 항상 같습니다. 인접한 각끼리는 **supplementary** (합이 180°)입니다.',
      examTip:
        '그림에서 어떤 각이 맞꼭지각인지 정확히 파악하세요. X자 형태에서 마주보는 위치가 맞꼭지각입니다.',
    },
    {
      wrong: '엇각(alternate interior angles)과 동위각(corresponding angles) 혼동',
      correct:
        '**Alternate interior angles**은 횡단선의 양쪽, 평행선 사이에 있는 엇갈린 각입니다. **Corresponding angles**은 같은 위치에 있는 각입니다. 둘 다 평행선일 때 같지만, 위치가 다릅니다.',
      examTip:
        '문제에서 "평행"이라는 조건이 주어졌는지 반드시 확인하세요. 평행하지 않으면 엇각이나 동위각이 같다고 할 수 없습니다.',
    },
    {
      wrong: '외각(exterior angle)의 성질을 잘못 적용',
      correct:
        '삼각형의 한 **exterior angle**은 이웃하지 않는 두 내각(**remote interior angles**)의 합과 같습니다. 인접한 내각과 합하면 180°입니다.',
      examTip:
        'GMAT에서 삼각형의 외각 문제가 나오면, 외각 = 나머지 두 내각의 합이라는 공식을 바로 적용하세요.',
    },
  ],

  theoryContent: `## 각도의 종류

**Angle (각도)**은 두 **ray (반직선)**이 같은 꼭짓점에서 만들 때 이루는 벌어진 정도를 말합니다. 각도의 종류는 다음과 같습니다:

- **Acute angle (예각)**: 0°보다 크고 90°보다 작은 각 (0° < θ < 90°)
- **Right angle (직각)**: 정확히 90°인 각. 기호 □로 표시합니다
- **Obtuse angle (둔각)**: 90°보다 크고 180°보다 작은 각 (90° < θ < 180°)
- **Straight angle (평각)**: 정확히 180°인 각. 일직선을 이룹니다
- **Reflex angle (우각)**: 180°보다 크고 360°보다 작은 각 (180° < θ < 360°)

## 보각과 여각

- **Complementary angles (여각)**: 두 각의 합이 **90°**인 경우. 예: 30°와 60°
- **Supplementary angles (보각)**: 두 각의 합이 **180°**인 경우. 예: 120°와 60°

한 직선 위에 있는 각의 합은 항상 180° (**angles on a straight line**)이므로, 직선 위의 인접한 두 각은 항상 supplementary입니다.

## 맞꼭지각 (Vertical Angles)

두 직선이 한 점에서 교차하면 4개의 각이 생깁니다. 이때 서로 마주보는 한 쌍의 각을 **vertical angles (맞꼭지각)**이라 하며, 맞꼭지각은 항상 크기가 같습니다.

예: 두 직선이 교차하여 생긴 각 중 하나가 70°이면, 마주보는 각도 70°이고, 나머지 두 각은 각각 110°입니다.

## 평행선과 횡단선 (Parallel Lines & Transversal)

두 **parallel lines (평행선)**을 하나의 **transversal (횡단선)**이 지나면, 총 8개의 각이 만들어집니다. 이 각들 사이에는 다음의 관계가 성립합니다:

### Corresponding Angles (동위각)
횡단선의 같은 쪽, 평행선의 같은 위치에 있는 각들입니다. 평행선이면 **동위각은 서로 같습니다**.

### Alternate Interior Angles (엇각)
횡단선의 양쪽, 두 평행선 사이에 엇갈려 있는 각들입니다. 평행선이면 **엇각은 서로 같습니다**.

### Co-interior Angles (동측내각)
횡단선의 같은 쪽, 두 평행선 사이에 있는 각들입니다. 평행선이면 **동측내각의 합은 180°**입니다. Same-side interior angles라고도 합니다.

## 삼각형의 내각의 합

**삼각형의 세 내각의 합은 항상 180°**입니다. 이것은 평행선의 엇각 성질에서 증명할 수 있습니다.

응용: 삼각형의 두 각을 알면 나머지 한 각은 180°에서 빼면 됩니다.

## 삼각형의 외각 정리 (Exterior Angle Theorem)

삼각형의 한 변을 연장해서 생기는 **exterior angle (외각)**은, 이웃하지 않는 두 내각 (**remote interior angles**)의 합과 같습니다.

즉, 외각 = 내각₁ + 내각₂ (이웃하지 않는 두 내각)

이 성질은 GMAT에서 자주 출제되므로 반드시 기억하세요.`,

  formulas: [
    'Complementary angles: ∠A + ∠B = 90°',
    'Supplementary angles: ∠A + ∠B = 180°',
    'Vertical angles: ∠A = ∠C (마주보는 각)',
    '평행선 → Corresponding angles 같다',
    '평행선 → Alternate interior angles 같다',
    '평행선 → Co-interior angles 합 = 180°',
    '삼각형 내각의 합 = 180°',
    '외각 = 이웃하지 않는 두 내각의 합',
  ],

  glossary: [
    {
      en: 'Acute Angle',
      kr: '예각',
      definition: '0°보다 크고 90°보다 작은 각',
    },
    {
      en: 'Right Angle',
      kr: '직각',
      definition: '정확히 90°인 각. 기호 □로 표시',
    },
    {
      en: 'Obtuse Angle',
      kr: '둔각',
      definition: '90°보다 크고 180°보다 작은 각',
    },
    {
      en: 'Straight Angle',
      kr: '평각',
      definition: '정확히 180°인 각. 일직선을 이룸',
    },
    {
      en: 'Complementary Angles',
      kr: '여각',
      definition: '합이 90°인 두 각의 쌍',
    },
    {
      en: 'Supplementary Angles',
      kr: '보각',
      definition: '합이 180°인 두 각의 쌍',
    },
    {
      en: 'Vertical Angles',
      kr: '맞꼭지각',
      definition: '두 직선이 교차할 때 마주보는 각. 항상 크기가 같음',
    },
    {
      en: 'Parallel Lines',
      kr: '평행선',
      definition: '같은 평면 위에서 만나지 않는 두 직선',
    },
    {
      en: 'Transversal',
      kr: '횡단선',
      definition: '두 개 이상의 직선과 만나는 직선',
    },
    {
      en: 'Corresponding Angles',
      kr: '동위각',
      definition: '횡단선의 같은 쪽, 평행선의 같은 위치에 있는 각',
    },
    {
      en: 'Alternate Interior Angles',
      kr: '엇각',
      definition: '횡단선의 양쪽, 두 평행선 사이에 엇갈려 있는 각',
    },
    {
      en: 'Exterior Angle',
      kr: '외각',
      definition: '다각형의 한 변을 연장해서 생기는 각',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: 'la-1',
      topicSlug: 'lines-angles',
      question:
        '한 각의 크기가 35°일 때, 이 각의 **complementary angle (여각)**의 크기는?',
      options: ['35°', '55°', '65°', '125°', '145°'],
      correctIndex: 1,
      explanation:
        'Complementary angles의 합은 90°입니다.\n\n여각 = 90° - 35° = 55°\n\n따라서 정답은 55°입니다.',
      difficulty: 'easy',
    },
    {
      id: 'la-2',
      topicSlug: 'lines-angles',
      question:
        '한 각의 크기가 72°일 때, 이 각의 **supplementary angle (보각)**의 크기는?',
      options: ['18°', '28°', '98°', '108°', '118°'],
      correctIndex: 3,
      explanation:
        'Supplementary angles의 합은 180°입니다.\n\n보각 = 180° - 72° = 108°\n\n따라서 정답은 108°입니다.',
      difficulty: 'easy',
    },
    {
      id: 'la-3',
      topicSlug: 'lines-angles',
      question:
        '두 직선이 한 점에서 교차하여 생긴 각 중 하나가 65°입니다. 나머지 세 각의 크기를 모두 더하면?',
      options: ['245°', '255°', '275°', '295°', '315°'],
      correctIndex: 3,
      explanation:
        '두 직선이 교차하면 4개의 각이 생기고, 4개 각의 합은 360°입니다.\n\n맞꼭지각은 서로 같으므로:\n- 65°, 115°, 65°, 115° (인접한 각은 supplementary)\n\n나머지 세 각의 합 = 360° - 65° = 295°\n\n검증: 115° + 65° + 115° = 295° ✓',
      difficulty: 'easy',
    },
    {
      id: 'la-4',
      topicSlug: 'lines-angles',
      question:
        '삼각형의 두 내각이 각각 45°와 75°입니다. 세 번째 내각의 크기는?',
      options: ['50°', '55°', '60°', '65°', '70°'],
      correctIndex: 2,
      explanation:
        '삼각형의 세 내각의 합은 180°입니다.\n\n세 번째 내각 = 180° - 45° - 75° = 60°\n\n따라서 정답은 60°입니다.',
      difficulty: 'easy',
    },
    {
      id: 'la-5',
      topicSlug: 'lines-angles',
      question:
        '두 직선이 교차하여 만든 맞꼭지각(vertical angles) 중 하나가 130°일 때, 이 각에 인접한 각의 크기는?',
      options: ['40°', '50°', '60°', '70°', '130°'],
      correctIndex: 1,
      explanation:
        '맞꼭지각의 마주보는 각은 130°(같음)이고, 인접한 각은 supplementary이므로:\n\n인접한 각 = 180° - 130° = 50°\n\n따라서 정답은 50°입니다.',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: 'la-6',
      topicSlug: 'lines-angles',
      question:
        '두 평행선을 횡단선이 지날 때, 한 **alternate interior angle**이 55°입니다. 같은 쪽에 있는 **co-interior angle**의 크기는?',
      options: ['55°', '105°', '115°', '125°', '135°'],
      correctIndex: 3,
      explanation:
        'Alternate interior angles는 서로 같으므로, 횡단선 반대쪽의 엇각도 55°입니다.\n\nCo-interior angles (동측내각)의 합은 180°이므로:\n동측내각 = 180° - 55° = 125°\n\n따라서 정답은 125°입니다.',
      difficulty: 'medium',
    },
    {
      id: 'la-7',
      topicSlug: 'lines-angles',
      question:
        '삼각형의 한 외각(exterior angle)이 140°이고, 이 외각에 이웃하지 않는 두 내각 중 하나가 65°일 때, 나머지 내각은?',
      options: ['40°', '55°', '65°', '75°', '85°'],
      correctIndex: 3,
      explanation:
        '외각 정리에 의해: 외각 = 이웃하지 않는 두 내각의 합\n\n140° = 65° + x\nx = 140° - 65° = 75°\n\n검증: 외각에 인접한 내각 = 180° - 140° = 40°\n세 내각의 합: 40° + 65° + 75° = 180° ✓',
      difficulty: 'medium',
    },
    {
      id: 'la-8',
      topicSlug: 'lines-angles',
      question:
        '두 평행선을 횡단선이 지나면서 만든 8개의 각 중, 가장 작은 각이 x°일 때 가장 큰 각은 (3x + 20)°입니다. x의 값은?',
      options: ['30', '35', '40', '45', '50'],
      correctIndex: 2,
      explanation:
        '평행선과 횡단선이 만들면 두 종류의 각만 생깁니다: α와 (180° - α).\n가장 작은 각이 x°이면 가장 큰 각은 (180° - x)°입니다.\n\n180 - x = 3x + 20\n180 - 20 = 3x + x\n160 = 4x\nx = 40\n\n검증: 가장 작은 각 = 40°, 가장 큰 각 = 180° - 40° = 140°\n3(40) + 20 = 120 + 20 = 140° ✓',
      difficulty: 'medium',
    },
    {
      id: 'la-9',
      topicSlug: 'lines-angles',
      question:
        '직선 위에 3개의 각이 나란히 있으며, 크기가 각각 (2x + 10)°, (3x)°, (x + 20)°입니다. 가장 큰 각의 크기는?',
      options: ['60°', '65°', '70°', '75°', '80°'],
      correctIndex: 3,
      explanation:
        '직선 위의 각도의 합은 180°입니다.\n\n(2x + 10) + 3x + (x + 20) = 180\n6x + 30 = 180\n6x = 150\nx = 25\n\n세 각의 크기:\n- 2(25) + 10 = 60°\n- 3(25) = 75°\n- 25 + 20 = 45°\n\n가장 큰 각은 75°입니다.\n검증: 60° + 75° + 45° = 180° ✓',
      difficulty: 'medium',
    },
    {
      id: 'la-10',
      topicSlug: 'lines-angles',
      question:
        '이등변삼각형에서 꼭지각(vertex angle)이 40°일 때, 밑각(base angle) 하나의 크기는?',
      options: ['40°', '50°', '60°', '70°', '80°'],
      correctIndex: 3,
      explanation:
        '이등변삼각형에서 두 밑각은 서로 같습니다.\n\n꼭지각 + 밑각 + 밑각 = 180°\n40° + 2 × 밑각 = 180°\n2 × 밑각 = 140°\n밑각 = 70°\n\n따라서 밑각 하나의 크기는 70°입니다.',
      difficulty: 'medium',
    },
    {
      id: 'la-11',
      topicSlug: 'lines-angles',
      question:
        '두 평행선 사이에 놓인 삼각형에서, 밑변이 한 평행선 위에 있고, 꼭짓점이 다른 평행선 위에 있습니다. 밑변의 양쪽 밑각이 각각 50°와 70°일 때, 꼭지각의 크기는?',
      options: ['50°', '55°', '60°', '65°', '70°'],
      correctIndex: 2,
      explanation:
        '삼각형의 세 내각의 합은 180°입니다.\n\n꼭지각 = 180° - 50° - 70° = 60°\n\n(참고: 평행선 정보는 삼각형이 존재할 수 있는 조건을 설명하기 위한 것이며, 내각의 합 성질로 직접 풀 수 있습니다.)\n\n따라서 꼭지각은 60°입니다.',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: 'la-12',
      topicSlug: 'lines-angles',
      question:
        '두 평행선 ℓ₁, ℓ₂를 두 횡단선이 지나며 한 점 P에서 만납니다. P에서의 각이 40°이고, ℓ₁과 한 횡단선이 이루는 각이 75°일 때, ℓ₁과 다른 횡단선이 이루는 각(예각)은?',
      options: ['25°', '30°', '35°', '40°', '45°'],
      correctIndex: 2,
      explanation:
        '점 P에서 두 횡단선이 이루는 각이 40°입니다.\n\n삼각형은 두 횡단선이 ℓ₁과 만나는 두 점과 점 P로 만들어집니다.\n- ℓ₁과 첫 번째 횡단선이 이루는 각(엇각 이용): 75°\n- P에서의 각: 40°\n\n삼각형의 세 내각의 합 = 180°이므로:\nℓ₁과 두 번째 횡단선이 이루는 각 = 180° - 75° - 40° = 65°\n\n하지만 이것은 둔각 쪽이므로, 예각 = 180° - 65° = 115°... 아닙니다.\n\n다시 정리: P는 ℓ₂ 위가 아닌 두 평행선 사이에 있습니다. 삼각형의 꼭짓점이 ℓ₁ 위 두 점과 P입니다.\n\nP에서의 각 = 40°\nℓ₁ 위 한 점에서의 내각 = 75° (횡단선과 ℓ₁이 이루는 각)\n\n나머지 내각 = 180° - 40° - 75° = 65°\n\n이 65°는 ℓ₁과 다른 횡단선이 이루는 각의 보각이 아니라 내각 자체입니다.\n실제로 ℓ₁과 두 번째 횡단선이 이루는 예각 = 180° - 65° = 115°가 아니라, 직선의 같은 쪽에서 보면 65°가 맞지 않을 수 있습니다.\n\n정확한 풀이: 엇각 성질을 사용합니다. ℓ₂와 첫 번째 횡단선이 이루는 엇각 = 75° (ℓ₁에서의 각과 같음). P에서 40° 차이가 나므로, ℓ₂와 두 번째 횡단선이 이루는 각 = 75° - 40° = 35°. 엇각에 의해 ℓ₁과 두 번째 횡단선이 이루는 예각도 35°입니다.\n\n따라서 정답은 35°입니다.',
      difficulty: 'hard',
    },
    {
      id: 'la-13',
      topicSlug: 'lines-angles',
      question:
        '삼각형 ABC에서 ∠A = 2x°, ∠B = (x + 15)°, ∠C = (2x - 5)°일 때, 가장 큰 각의 크기는?',
      options: ['62°', '68°', '70°', '73°', '75°'],
      correctIndex: 1,
      explanation:
        '삼각형의 세 내각의 합 = 180°\n\n2x + (x + 15) + (2x - 5) = 180\n5x + 10 = 180\n5x = 170\nx = 34\n\n각각의 크기:\n∠A = 2(34) = 68°\n∠B = 34 + 15 = 49°\n∠C = 2(34) - 5 = 63°\n\n검증: 68° + 49° + 63° = 180° ✓\n\n가장 큰 각은 ∠A = 68°입니다.',
      difficulty: 'hard',
    },
    {
      id: 'la-14',
      topicSlug: 'lines-angles',
      question:
        '두 평행선 사이에 꺾인 선분이 있습니다(Z 모양). 윗 평행선과 선분이 이루는 각이 48°이고, 아랫 평행선과 선분이 이루는 각이 67°일 때, 꺾인 지점에서의 각도는?',
      options: ['105°', '110°', '115°', '120°', '125°'],
      correctIndex: 2,
      explanation:
        '두 평행선 사이의 꺾인 선분(Z 모양)에서, 꺾인 지점을 지나는 평행선을 하나 그으면:\n\n- 엇각 성질에 의해 위쪽 부분 = 48°\n- 엇각 성질에 의해 아래쪽 부분 = 67°\n\n꺾인 지점에서의 각도 = 48° + 67° = 115°\n\n이것은 평행선 사이의 꺾인 선분에서 성립하는 공식입니다:\n꺾인 각 = (윗 평행선과의 각) + (아랫 평행선과의 각)\n\n따라서 정답은 115°입니다.',
      difficulty: 'hard',
    },
    {
      id: 'la-15',
      topicSlug: 'lines-angles',
      question:
        '세 직선이 한 점에서 만나 6개의 각을 만듭니다. 이 중 가장 작은 각이 28°이고, 나머지 각 중 하나가 74°일 때, 6개의 각 중 아직 구하지 않은 4개의 각의 합은?',
      options: ['236°', '248°', '256°', '258°', '268°'],
      correctIndex: 2,
      explanation:
        '세 직선이 한 점에서 만나면 6개의 각이 생기고, 총합은 360°입니다.\n\n맞꼭지각 성질에 의해 마주보는 각은 같으므로 3쌍이 됩니다.\n- 28°의 맞꼭지각 = 28°\n- 74°의 맞꼭지각 = 74°\n\n지금까지의 합: 28° + 28° + 74° + 74° = 204°\n\n나머지 한 쌍 = 360° - 204° = 156°\n각각 156° ÷ 2 = 78°\n\n6개의 각: 28°, 74°, 78°, 28°, 74°, 78°\n\n아직 구하지 않은 4개의 각 = 360° - 28° - 74° - (이 두 개가 주어진 것) \n= 28° + 74° + 78° + 78° = 이 아니라\n\n주어진 각: 28°, 74° (2개)\n나머지 4개: 28°, 74°, 78°, 78°\n합 = 28 + 74 + 78 + 78 = 258°\n\n또는 간단히: 360° - 28° - 74° = 258° (나머지가 아니라, \"주어진 2개 외 나머지 4개\")\n\n실제로 6개 각의 합은 360°이고, 주어진 2개를 빼면:\n360° - 28° - 74° = 258°\n\n따라서 정답은 258°입니다.',
      difficulty: 'hard',
    },
  ],
};
