import { Topic } from '../types';

export const rateTimeDistanceTopic: Topic = {
  slug: 'rate-time-distance',
  titleEN: 'Rate / Time / Distance',
  titleKR: '속도/시간/거리',
  category: 'word-problems',
  estimatedMinutes: 25,
  ready: true,

  intuition: {
    analogy: "속도/시간/거리는 '물 채우기'와 같아요. 수도꼭지(속도)가 빠르면 욕조(거리)가 빨리 차고, 느리면 오래 걸려요. D=S×T는 '물의 양 = 유량 × 시간'과 완전히 같은 구조입니다.",
    pattern: "60km/h로 2시간 = 120km, 3시간 = 180km. 속도가 일정하면 거리와 시간은 정비례. 거리가 고정되면 속도와 시간은 반비례. 이 두 가지 관계만 기억하면 모든 RTD 문제의 출발점이 됩니다.",
    whyItMatters: "GMAT Word Problem에서 가장 많이 출제되는 유형입니다. 단순 D=ST뿐 아니라 상대 속도, 평균 속도, 만남/추월 문제까지 확장되어 매 시험 3-4문제가 출제됩니다.",
  },

  commonMistakes: [
    {
      wrong: '왕복 평균 속도 = (가는 속도 + 오는 속도) / 2',
      correct: '같은 거리를 다른 속도로 왕복할 때, 평균 속도 = 2ab/(a+b) (조화평균)입니다. 40km/h로 가고 60km/h로 오면, 평균 속도는 50이 아니라 48km/h입니다.',
      examTip: 'GMAT이 가장 좋아하는 함정입니다. 산술 평균(50)은 반드시 선지에 포함되어 있습니다.',
    },
    {
      wrong: '두 사람이 만나는 데 걸리는 시간 = 거리 / 한 사람의 속도',
      correct: '마주 보고 오면 상대 속도 = v₁+v₂, 같은 방향이면 = |v₁-v₂|. 만남 시간 = 거리 / 상대 속도입니다.',
      examTip: '"같은 방향 vs 반대 방향" 조건을 정확히 읽어야 합니다. 문제에서 deliberately 방향을 모호하게 하는 경우가 있습니다.',
    },
    {
      wrong: 'km/h를 m/s로 바꿀 때 1000을 곱하면 된다',
      correct: 'km/h → m/s는 ×(5/18), m/s → km/h는 ×(18/5)입니다. 1km=1000m이고 1h=3600s이므로, 1000/3600 = 5/18입니다.',
      examTip: '단위 변환 실수로 답이 틀리는 경우가 많습니다. 72km/h = 20m/s를 기준점으로 외워두면 검산이 쉽습니다.',
    },
    {
      wrong: '열차가 다리를 지나는 거리 = 다리의 길이',
      correct: '열차가 다리를 완전히 통과하는 거리 = 다리 길이 + 열차 길이입니다. 열차의 머리가 다리에 들어선 순간부터 꼬리가 나올 때까지의 거리입니다.',
      examTip: '"열차/기차 통과" 문제는 GMAT 단골입니다. 두 열차가 교차하면 거리 = 열차1 길이 + 열차2 길이입니다.',
    },
  ],

  theoryContent: `## 핵심 공식

**Distance(거리)** = **Speed/Rate(속도)** × **Time(시간)**

이를 줄여서 **D = S × T** 로 표기합니다. 이 공식에서 세 변수 중 두 개를 알면 나머지 하나를 구할 수 있습니다:
- **S = D / T** (속도 = 거리 ÷ 시간)
- **T = D / S** (시간 = 거리 ÷ 속도)

## 단위 변환 (**Unit Conversion**)

속도 단위를 변환할 때 다음 공식을 사용합니다:
- **km/h → m/s**: × 5/18 (예: 72 km/h = 72 × 5/18 = 20 m/s)
- **m/s → km/h**: × 18/5 (예: 20 m/s = 20 × 18/5 = 72 km/h)

이 변환은 1 km = 1000 m, 1 h = 3600 s 라는 관계에서 유도됩니다.

## **Average Speed(평균 속도)**

**평균 속도**는 **총 거리 / 총 시간**으로 계산합니다. 주의할 점은 각 구간 속도의 단순 산술 평균이 아니라는 것입니다!

예를 들어, 같은 거리 d를 속도 a로 갔다가 속도 b로 돌아오는 경우:
- 총 거리 = 2d
- 총 시간 = d/a + d/b = d(a + b) / ab
- **평균 속도 = 2d / [d(a + b) / ab] = 2ab / (a + b)**

이 공식 **2ab / (a + b)**는 같은 거리를 서로 다른 두 속도로 이동할 때의 평균 속도(**Harmonic Mean**)입니다. GMAT에서 매우 자주 출제됩니다.

## **Relative Speed(상대 속도)**

두 물체가 동시에 움직일 때, 상대적인 속도를 고려해야 합니다:
- **같은 방향(Same Direction)**: 상대 속도 = |v₁ - v₂| (빠른 쪽이 느린 쪽을 따라잡는 속도)
- **반대 방향(Opposite Direction)**: 상대 속도 = v₁ + v₂ (서로 멀어지거나 가까워지는 속도)

## **Meeting Problems(만남 문제)**

두 물체가 거리 D만큼 떨어져 서로를 향해 이동할 때:
- 만나는 시간 = D / (v₁ + v₂)
- 이는 반대 방향 상대 속도를 적용한 것입니다.

## **Catching Up Problems(추격 문제)**

한 물체가 다른 물체보다 앞서 있고, 뒤의 물체가 더 빠를 때:
- 따라잡는 시간 = 격차(gap) / |v₁ - v₂|
- 같은 방향 상대 속도를 적용합니다.

## **Round Trip(왕복 문제)**

왕복 문제에서는 가는 길과 오는 길의 거리가 같다는 점을 이용합니다:
- 가는 시간 = d / v₁, 오는 시간 = d / v₂
- 총 시간 = d/v₁ + d/v₂
- 평균 속도 = 2ab / (a + b) 공식을 바로 적용할 수 있습니다.

## **Circular Track(원형 트랙 문제)**

원형 트랙(둘레 L)에서 두 사람이 같은 지점에서 출발할 때:
- **같은 방향**: 다시 만나는 시간 = L / |v₁ - v₂| (빠른 사람이 느린 사람보다 정확히 한 바퀴 더 돌아야 만남)
- **반대 방향**: 다시 만나는 시간 = L / (v₁ + v₂) (둘이 합쳐서 한 바퀴를 완성하면 만남)

## GMAT 핵심 팁

1. 문제에서 주어진 단위가 일치하는지 항상 확인하세요.
2. "평균 속도"를 물으면 절대 속도를 단순 평균하지 마세요.
3. 기차/열차 문제에서는 열차의 길이를 거리에 포함해야 합니다.
4. 복잡한 문제는 표(거리/속도/시간)를 그려서 정리하면 쉽습니다.`,

  formulas: [
    '거리(D) = 속도(S) × 시간(T)',
    'S = D/T, T = D/S',
    '평균 속도 = 총 거리 / 총 시간',
    '같은 거리 왕복 평균 속도 = 2ab/(a+b)',
    '같은 방향 상대 속도 = |v₁ - v₂|',
    '반대 방향 상대 속도 = v₁ + v₂',
    'km/h → m/s: × 5/18',
  ],

  glossary: [
    {
      en: 'Distance',
      kr: '거리',
      definition: '두 지점 사이의 떨어진 정도. 단위는 km, m, mile 등을 사용한다.',
    },
    {
      en: 'Speed / Rate',
      kr: '속도 / 속력',
      definition: '단위 시간당 이동한 거리. 단위는 km/h, m/s 등을 사용한다.',
    },
    {
      en: 'Time',
      kr: '시간',
      definition: '이동하는 데 걸리는 시간. 단위는 시간(h), 분(min), 초(s) 등을 사용한다.',
    },
    {
      en: 'Average Speed',
      kr: '평균 속도',
      definition: '총 이동 거리를 총 소요 시간으로 나눈 값. 각 구간 속도의 단순 산술 평균이 아니다.',
    },
    {
      en: 'Relative Speed',
      kr: '상대 속도',
      definition: '두 물체 사이의 상대적인 속도. 같은 방향이면 속도 차, 반대 방향이면 속도 합이다.',
    },
    {
      en: 'Round Trip',
      kr: '왕복',
      definition: '출발지에서 목적지까지 갔다가 다시 출발지로 돌아오는 여행. 가는 거리와 오는 거리가 같다.',
    },
    {
      en: 'Unit Conversion',
      kr: '단위 변환',
      definition: '속도, 거리, 시간 등의 단위를 다른 단위로 바꾸는 것. 예: km/h를 m/s로 변환.',
    },
    {
      en: 'Acceleration',
      kr: '가속도',
      definition: '단위 시간당 속도의 변화량. GMAT에서는 주로 등속 운동을 다루지만, 개념을 알아두면 좋다.',
    },
    {
      en: 'Uniform Motion',
      kr: '등속 운동',
      definition: '속도가 일정한 운동. GMAT 문제 대부분은 등속 운동을 전제로 출제된다.',
    },
    {
      en: 'Meeting Point',
      kr: '만남 지점',
      definition: '두 물체가 서로를 향해 또는 같은 방향으로 이동하다가 만나는 지점.',
    },
  ],

  problems: [
    // ===== EASY (5 problems) =====
    {
      id: 'rtd-1',
      topicSlug: 'rate-time-distance',
      question:
        '한 자동차가 시속 60km로 240km를 이동합니다. 이 여행에 걸리는 시간은 얼마입니까?',
      options: ['3시간', '4시간', '5시간', '6시간', '2시간 30분'],
      correctIndex: 1,
      explanation:
        'D = S × T 공식에서 T = D / S = 240 / 60 = 4시간입니다. 거리를 속도로 나누면 시간이 나옵니다.',
      difficulty: 'easy',
    },
    {
      id: 'rtd-2',
      topicSlug: 'rate-time-distance',
      question:
        '길이가 200m인 기차가 전봇대를 10초 만에 통과합니다. 이 기차의 속도는 얼마입니까?',
      options: ['72 km/h', '54 km/h', '60 km/h', '80 km/h', '90 km/h'],
      correctIndex: 0,
      explanation:
        '기차가 전봇대를 완전히 통과하려면 기차 길이만큼의 거리를 이동해야 합니다. 속도 = 200m / 10s = 20 m/s. 이를 km/h로 변환하면 20 × 18/5 = 72 km/h입니다.',
      difficulty: 'easy',
    },
    {
      id: 'rtd-3',
      topicSlug: 'rate-time-distance',
      question:
        'A는 시속 5km로 걷고, B는 시속 3km로 걷습니다. 두 사람이 같은 지점에서 같은 방향으로 동시에 출발했을 때, 2시간 후 두 사람 사이의 거리는 얼마입니까?',
      options: ['2 km', '4 km', '6 km', '8 km', '10 km'],
      correctIndex: 1,
      explanation:
        '같은 방향으로 이동하므로 상대 속도 = |5 - 3| = 2 km/h입니다. 2시간 후 두 사람 사이의 거리 = 2 × 2 = 4 km입니다.',
      difficulty: 'easy',
    },
    {
      id: 'rtd-4',
      topicSlug: 'rate-time-distance',
      question:
        '한 사람이 시속 90km로 달리는 자동차를 타고 3시간 동안 이동했습니다. 이동한 총 거리는 얼마입니까?',
      options: ['240 km', '250 km', '260 km', '270 km', '280 km'],
      correctIndex: 3,
      explanation:
        'D = S × T = 90 × 3 = 270 km입니다.',
      difficulty: 'easy',
    },
    {
      id: 'rtd-5',
      topicSlug: 'rate-time-distance',
      question:
        '시속 36km를 m/s(초속)로 변환하면 얼마입니까?',
      options: ['5 m/s', '10 m/s', '15 m/s', '20 m/s', '25 m/s'],
      correctIndex: 1,
      explanation:
        'km/h를 m/s로 변환하려면 5/18을 곱합니다. 36 × 5/18 = 10 m/s입니다.',
      difficulty: 'easy',
    },

    // ===== MEDIUM (6 problems) =====
    {
      id: 'rtd-6',
      topicSlug: 'rate-time-distance',
      question:
        '두 자동차가 같은 지점에서 출발하여 반대 방향으로 각각 시속 50km와 시속 70km로 이동합니다. 몇 시간 후에 두 자동차 사이의 거리가 360km가 됩니까?',
      options: ['2시간', '2.5시간', '3시간', '3.5시간', '4시간'],
      correctIndex: 2,
      explanation:
        '반대 방향으로 이동하므로 상대 속도 = 50 + 70 = 120 km/h입니다. 거리가 360km가 되려면 T = 360 / 120 = 3시간이 걸립니다.',
      difficulty: 'medium',
    },
    {
      id: 'rtd-7',
      topicSlug: 'rate-time-distance',
      question:
        'John은 출근할 때 시속 40km로 운전하고, 퇴근할 때 같은 경로를 시속 60km로 운전합니다. John의 왕복 평균 속도는 얼마입니까?',
      options: ['45 km/h', '48 km/h', '50 km/h', '52 km/h', '55 km/h'],
      correctIndex: 1,
      explanation:
        '같은 거리를 두 가지 속도로 이동했으므로 평균 속도 = 2ab/(a+b) = 2 × 40 × 60 / (40 + 60) = 4800 / 100 = 48 km/h입니다. 단순 평균 (40+60)/2 = 50이 아닙니다!',
      difficulty: 'medium',
    },
    {
      id: 'rtd-8',
      topicSlug: 'rate-time-distance',
      question:
        '한 사람이 목적지까지 시속 4km로 걸어가고, 시속 12km로 자전거를 타고 돌아옵니다. 왕복에 총 4시간이 걸렸다면, 편도 거리는 얼마입니까?',
      options: ['10 km', '12 km', '14 km', '16 km', '18 km'],
      correctIndex: 1,
      explanation:
        '편도 거리를 d라 하면, 걸어간 시간 = d/4, 자전거 탄 시간 = d/12입니다. d/4 + d/12 = 4. 양변에 12를 곱하면 3d + d = 48, 4d = 48, d = 12 km입니다.',
      difficulty: 'medium',
    },
    {
      id: 'rtd-9',
      topicSlug: 'rate-time-distance',
      question:
        'A 도시와 B 도시는 300km 떨어져 있습니다. 차량 X는 A에서 B를 향해 시속 50km로, 차량 Y는 B에서 A를 향해 시속 70km로 동시에 출발합니다. 두 차량이 만나는 것은 출발 후 몇 시간 뒤입니까?',
      options: ['2시간', '2시간 30분', '3시간', '3시간 30분', '4시간'],
      correctIndex: 1,
      explanation:
        '서로를 향해 이동하므로 상대 속도 = 50 + 70 = 120 km/h입니다. 만나는 시간 = 300 / 120 = 2.5시간 = 2시간 30분입니다.',
      difficulty: 'medium',
    },
    {
      id: 'rtd-10',
      topicSlug: 'rate-time-distance',
      question:
        '길이가 150m인 기차가 길이 350m인 다리를 완전히 통과하는 데 25초가 걸립니다. 이 기차의 속도는 얼마입니까?',
      options: ['54 km/h', '64 km/h', '72 km/h', '80 km/h', '90 km/h'],
      correctIndex: 2,
      explanation:
        '기차가 다리를 완전히 통과하려면 (기차 길이 + 다리 길이)만큼 이동해야 합니다. 총 거리 = 150 + 350 = 500m. 속도 = 500 / 25 = 20 m/s = 20 × 18/5 = 72 km/h입니다.',
      difficulty: 'medium',
    },
    {
      id: 'rtd-11',
      topicSlug: 'rate-time-distance',
      question:
        '한 자동차가 첫 번째 구간 120km를 시속 40km로, 두 번째 구간 180km를 시속 60km로 이동했습니다. 전체 여행의 평균 속도는 얼마입니까?',
      options: ['48 km/h', '50 km/h', '52 km/h', '54 km/h', '55 km/h'],
      correctIndex: 1,
      explanation:
        '총 거리 = 120 + 180 = 300 km. 첫 구간 시간 = 120/40 = 3시간, 두 번째 구간 시간 = 180/60 = 3시간. 총 시간 = 6시간. 평균 속도 = 300/6 = 50 km/h입니다.',
      difficulty: 'medium',
    },

    // ===== HARD (4 problems) =====
    {
      id: 'rtd-12',
      topicSlug: 'rate-time-distance',
      question:
        '둘레가 400m인 원형 트랙에서 두 주자가 같은 지점에서 같은 방향으로 동시에 출발합니다. 한 명은 초속 5m, 다른 한 명은 초속 3m로 달립니다. 출발 후 처음으로 다시 만나는 것은 몇 초 후입니까?',
      options: ['100초', '150초', '200초', '250초', '300초'],
      correctIndex: 2,
      explanation:
        '같은 방향이므로 상대 속도 = |5 - 3| = 2 m/s입니다. 빠른 주자가 느린 주자보다 정확히 한 바퀴(400m)를 더 앞서야 만나므로, 만나는 시간 = 400 / 2 = 200초입니다.',
      difficulty: 'hard',
    },
    {
      id: 'rtd-13',
      topicSlug: 'rate-time-distance',
      question:
        'A는 오전 8시에 시속 40km로 출발합니다. B는 같은 경로를 오전 9시 30분에 시속 60km로 뒤따라 출발합니다. B가 A를 따라잡는 시각은 언제입니까?',
      options: [
        '오후 12시',
        '오후 12시 30분',
        '오후 1시',
        '오후 1시 30분',
        '오후 2시',
      ],
      correctIndex: 1,
      explanation:
        'B가 출발할 때(9시 30분), A는 이미 1.5시간 × 40 = 60km를 앞서 있습니다. 상대 속도 = 60 - 40 = 20 km/h. 따라잡는 시간 = 60 / 20 = 3시간. B 출발 시각 9시 30분 + 3시간 = 오후 12시 30분입니다.',
      difficulty: 'hard',
    },
    {
      id: 'rtd-14',
      topicSlug: 'rate-time-distance',
      question:
        '길이가 각각 120m와 180m인 두 기차가 서로 반대 방향에서 다가옵니다. 속도는 각각 시속 54km와 시속 36km입니다. 두 기차가 서로 완전히 지나치는 데 걸리는 시간은 얼마입니까?',
      options: ['8초', '10초', '12초', '14초', '16초'],
      correctIndex: 2,
      explanation:
        '반대 방향이므로 상대 속도 = 54 + 36 = 90 km/h = 90 × 5/18 = 25 m/s입니다. 두 기차가 완전히 지나치려면 (120 + 180) = 300m를 이동해야 합니다. 시간 = 300 / 25 = 12초입니다.',
      difficulty: 'hard',
    },
    {
      id: 'rtd-15',
      topicSlug: 'rate-time-distance',
      question:
        '한 보트가 강물의 흐름 방향(하류)으로 이동하면 시속 24km이고, 흐름 반대 방향(상류)으로 이동하면 시속 16km입니다. 이 보트가 하류로 48km를 갔다가 다시 상류로 48km를 돌아오는 데 걸리는 총 시간은 얼마입니까?',
      options: ['4시간', '4.5시간', '5시간', '5.5시간', '6시간'],
      correctIndex: 2,
      explanation:
        '하류 이동 시간 = 48 / 24 = 2시간. 상류 이동 시간 = 48 / 16 = 3시간. 총 시간 = 2 + 3 = 5시간입니다. 참고로, 보트 자체 속도 = (24 + 16) / 2 = 20 km/h, 강물 속도 = (24 - 16) / 2 = 4 km/h입니다.',
      difficulty: 'hard',
    },
  ],
};
