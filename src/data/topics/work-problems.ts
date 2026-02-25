import { Topic } from '../types';

export const workProblemsTopic: Topic = {
  slug: 'work-problems',
  titleEN: 'Work Problems',
  titleKR: '작업 문제',
  category: 'word-problems',
  estimatedMinutes: 20,
  ready: true,

  intuition: {
    analogy:
      '작업 문제는 수도꼭지로 물 채우기와 같습니다. 한 시간에 욕조의 1/3을 채우는 수도꼭지 A와 1/6을 채우는 수도꼭지 B를 동시에 틀면, 한 시간에 1/3 + 1/6 = 1/2을 채우므로 2시간이면 가득 찹니다. **Work Rate(작업 속도)**는 이 "한 시간에 채우는 비율"이고, 여러 사람이 함께 일하면 각자의 rate를 더하면 됩니다.',
    pattern:
      'A가 혼자 6일, B가 혼자 12일 → A의 rate = 1/6, B의 rate = 1/12. 합산 rate = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4. 함께 하면 4일. 항상 "시간의 역수 = 속도"라는 패턴을 기억하세요.',
    whyItMatters:
      'GMAT에서 **Work Problem**은 매 시험 1-2문제가 거의 확실히 출제됩니다. 특히 "함께 일하다가 한 명이 빠지는" 변형 문제와 "파이프로 물 채우고 빼기" 문제가 자주 나옵니다. Rate 개념을 정확히 잡으면 RTD(속도/시간/거리) 문제와도 연결됩니다.',
  },

  commonMistakes: [
    {
      wrong: 'A가 6일, B가 12일 걸리면 함께 하면 (6+12)/2 = 9일이다',
      correct:
        '시간을 직접 평균하면 안 됩니다. **Rate**를 더해야 합니다: 1/6 + 1/12 = 1/4 → 함께 하면 4일입니다.',
      examTip:
        'GMAT은 시간을 직접 더하거나 평균한 값을 반드시 선지에 넣어둡니다. "시간의 역수 = 속도"를 먼저 구하세요.',
    },
    {
      wrong: 'A가 10일에 완성하면 하루에 10%를 한다 → 3일 일하면 30% 완성',
      correct:
        '계산 자체는 맞지만, 이 방식에만 의존하면 비율이 깔끔하지 않을 때 실수합니다. 분수로 1/10씩 처리하는 습관을 들이세요. 3일 = 3 × (1/10) = 3/10 완성.',
      examTip:
        '퍼센트 대신 분수로 계산하면 GMAT의 깔끔한 정답 패턴과 맞아떨어집니다.',
    },
    {
      wrong: '물을 채우는 파이프와 빼는 파이프가 있으면 둘의 rate를 더한다',
      correct:
        '채우는 파이프의 rate는 양수(+), 빼는 파이프(drain)의 rate는 음수(-)입니다. 합산 rate = 채우는 rate - 빼는 rate.',
      examTip:
        '**Pipe and Cistern** 문제에서 drain을 양수로 더하는 실수가 매우 빈번합니다. 부호를 반드시 확인하세요.',
    },
    {
      wrong: 'A와 B가 함께 일하다가 A가 먼저 그만두면, 남은 일을 B의 원래 시간으로 나눈다',
      correct:
        'A가 빠진 후 남은 작업량을 구하고, 그것을 B의 rate(1/b)로 나눠야 합니다. 남은 작업 = 1 - (함께 일한 시간 × 합산 rate). 남은 시간 = 남은 작업 / B의 rate.',
      examTip:
        '"함께 일하다가 한 명이 빠지는" 유형은 GMAT 단골 변형입니다. 단계별로 작업량을 추적하세요.',
    },
  ],

  theoryContent: `## 핵심 개념: **Work Rate**

**Work Problem(작업 문제)**의 핵심은 "작업 속도"입니다.

어떤 사람이 혼자서 일을 완성하는 데 **t시간**이 걸린다면, 그 사람의 **Work Rate(작업 속도)**는:

> **Rate = 1/t** (시간당 완성하는 작업의 비율)

예를 들어, A가 혼자 6시간에 일을 끝낸다면 A의 rate = **1/6** (매 시간 전체 작업의 1/6을 완성)

## 함께 일할 때: **Combined Rate**

여러 사람(또는 기계)이 동시에 일하면, 각각의 rate를 **더합니다**:

> **Combined Rate = 1/a + 1/b**

A가 6시간, B가 12시간이 걸린다면:
- Combined Rate = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = **1/4**
- 함께 걸리는 시간 = **1 / (1/4) = 4시간**

이를 공식화하면:

> **1/a + 1/b = 1/t** → **t = ab / (a + b)**

## 3명 이상이 함께 일할 때

A, B, C 세 사람이 각각 a, b, c 시간에 완성한다면:
- Combined Rate = 1/a + 1/b + 1/c = 1/t
- 함께 걸리는 시간 t를 구합니다.

## **Partial Work(부분 작업)**

일의 일부만 완성하는 경우:

> **완성된 작업량 = Rate × 시간**

A(rate = 1/6)가 3시간 일하면: 완성량 = 1/6 × 3 = **1/2** (절반 완성)

## 함께 일하다가 한 명이 빠지는 경우

**문제 유형**: A와 B가 함께 d일 동안 일한 후, A가 그만두고 B가 나머지를 혼자 완성

1. 함께 일한 작업량 = (1/a + 1/b) × d
2. 남은 작업량 = 1 - (함께 일한 작업량)
3. B 혼자 남은 시간 = 남은 작업량 / (1/b) = 남은 작업량 × b

## **Pipes and Cisterns(파이프와 물탱크)**

물을 채우는 파이프와 빼는 파이프가 동시에 작동하는 문제:

- **채우는 파이프(Inlet)**: rate = **+1/a** (양수)
- **빼는 파이프(Drain/Outlet)**: rate = **-1/b** (음수)
- **합산 rate** = 1/a - 1/b

예: 채우는 파이프가 10시간에 가득 채우고, 빼는 파이프가 15시간에 완전히 비운다면:
- 합산 rate = 1/10 - 1/15 = 3/30 - 2/30 = **1/30**
- 두 파이프가 동시에 열려 있으면 **30시간**에 가득 참

## **Efficiency(효율)** 비교 문제

A가 B보다 k배 효율적이라는 것은:
- A의 rate = k × B의 rate
- 즉, A의 소요 시간 = B의 소요 시간 / k

예: A가 B보다 2배 빠르고, B가 혼자 12일 걸린다면:
- A 혼자 = 6일, Combined rate = 1/6 + 1/12 = 1/4, 함께 = 4일

## GMAT 핵심 전략

1. **시간을 바로 더하지 마세요!** 반드시 rate(역수)로 변환 후 더하세요.
2. 복잡한 문제는 **전체 작업 = 1**로 놓고, 각 단계에서 완성된 비율을 추적하세요.
3. 파이프 문제에서는 채우기(+)와 빼기(-)의 부호를 정확히 설정하세요.
4. "A가 B보다 3배 빠르다"는 표현에 주의: rate가 3배, 시간은 1/3입니다.`,

  formulas: [
    'Work Rate = 1/t (t = 혼자 걸리는 시간)',
    'Combined Rate: 1/a + 1/b = 1/t',
    '두 사람 함께 걸리는 시간: t = ab/(a+b)',
    '완성된 작업량 = Rate × 시간',
    '남은 작업량 = 1 - 완성된 작업량',
    'Pipe: 합산 rate = 1/채우기 - 1/빼기',
    'A가 B보다 k배 빠르면: Rate_A = k × Rate_B',
  ],

  glossary: [
    {
      en: 'Work Rate',
      kr: '작업 속도',
      definition:
        '단위 시간당 완성하는 작업의 비율. 전체 일을 1로 놓았을 때, 혼자 t시간이 걸리면 rate = 1/t.',
    },
    {
      en: 'Combined Rate',
      kr: '합산 작업 속도',
      definition:
        '여러 작업자가 동시에 일할 때 각 rate를 더한 값. Combined Rate = 1/a + 1/b.',
    },
    {
      en: 'Partial Work',
      kr: '부분 작업',
      definition:
        '전체 작업의 일부만 완성하는 것. 완성량 = rate × 시간.',
    },
    {
      en: 'Pipe / Cistern',
      kr: '파이프 / 물탱크',
      definition:
        '물을 채우거나 빼는 파이프 문제. Inlet(채우기)은 +rate, Outlet(빼기)은 -rate로 계산.',
    },
    {
      en: 'Inlet',
      kr: '유입 파이프',
      definition:
        '물탱크에 물을 채우는 파이프. rate는 양수로 표기한다.',
    },
    {
      en: 'Outlet / Drain',
      kr: '배출 파이프',
      definition:
        '물탱크에서 물을 빼는 파이프. rate는 음수로 표기한다.',
    },
    {
      en: 'Efficiency',
      kr: '효율',
      definition:
        '작업자의 작업 속도. A가 B보다 k배 효율적이면, A의 rate는 B의 k배이다.',
    },
    {
      en: 'Man-Days / Man-Hours',
      kr: '인일 / 인시',
      definition:
        '작업량을 측정하는 단위. 3명이 5일 일하면 15 man-days의 작업량.',
    },
    {
      en: 'Reciprocal',
      kr: '역수',
      definition:
        '어떤 수 x의 역수는 1/x. 작업 시간의 역수가 작업 속도이다.',
    },
    {
      en: 'Fraction of Work',
      kr: '작업 분율',
      definition:
        '전체 작업 중 완성된 비율. 전체를 1로 놓고, 0에서 1 사이의 값으로 표현한다.',
    },
    {
      en: 'Together / Simultaneously',
      kr: '함께 / 동시에',
      definition:
        '여러 작업자가 동시에 작업하는 상황. rate를 합산하여 계산한다.',
    },
    {
      en: 'Break-even Time',
      kr: '균형 시간',
      definition:
        '채우기와 빼기가 동시에 일어날 때, 작업이 완성되는 데 걸리는 시간.',
    },
  ],

  problems: [
    // ===== EASY (5 problems) =====
    {
      id: 'work-1',
      topicSlug: 'work-problems',
      question:
        'A는 혼자서 어떤 일을 12일에 완성할 수 있습니다. A의 하루 **work rate**는 얼마입니까?',
      options: ['1/6', '1/8', '1/10', '1/12', '1/14'],
      correctIndex: 3,
      explanation:
        'Work Rate = 1/t = 1/12입니다. A는 매일 전체 작업의 1/12을 완성합니다.',
      difficulty: 'easy',
    },
    {
      id: 'work-2',
      topicSlug: 'work-problems',
      question:
        'A는 혼자서 10일, B는 혼자서 15일에 같은 일을 완성합니다. A와 B가 함께 일하면 며칠이 걸립니까?',
      options: ['5일', '6일', '7일', '8일', '12일'],
      correctIndex: 1,
      explanation:
        'Combined Rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. 함께 걸리는 시간 = 1/(1/6) = 6일입니다. 또는 공식: t = ab/(a+b) = 10×15/(10+15) = 150/25 = 6일.',
      difficulty: 'easy',
    },
    {
      id: 'work-3',
      topicSlug: 'work-problems',
      question:
        '어떤 기계가 혼자서 8시간에 작업을 완성합니다. 이 기계가 3시간 동안 작동하면 전체 작업의 얼마가 완성됩니까?',
      options: ['1/4', '1/3', '3/8', '1/2', '5/8'],
      correctIndex: 2,
      explanation:
        'Rate = 1/8. 3시간 작업량 = 1/8 × 3 = 3/8입니다. 전체 작업의 3/8이 완성됩니다.',
      difficulty: 'easy',
    },
    {
      id: 'work-4',
      topicSlug: 'work-problems',
      question:
        'A는 혼자서 6시간, B는 혼자서 6시간에 같은 일을 완성합니다. A와 B가 함께 일하면 몇 시간이 걸립니까?',
      options: ['2시간', '3시간', '4시간', '5시간', '6시간'],
      correctIndex: 1,
      explanation:
        'Combined Rate = 1/6 + 1/6 = 2/6 = 1/3. 함께 걸리는 시간 = 3시간입니다. 같은 속도의 두 사람이 함께 하면 시간이 절반이 됩니다.',
      difficulty: 'easy',
    },
    {
      id: 'work-5',
      topicSlug: 'work-problems',
      question:
        '파이프 A는 빈 수조를 20시간에 가득 채울 수 있습니다. 파이프 A의 시간당 **rate**는 얼마입니까?',
      options: ['1/10', '1/15', '1/20', '1/25', '1/30'],
      correctIndex: 2,
      explanation:
        'Rate = 1/t = 1/20입니다. 파이프 A는 매시간 수조의 1/20을 채웁니다.',
      difficulty: 'easy',
    },

    // ===== MEDIUM (6 problems) =====
    {
      id: 'work-6',
      topicSlug: 'work-problems',
      question:
        'A는 혼자서 12일, B는 혼자서 18일에 같은 일을 완성합니다. 두 사람이 함께 4일간 일한 후, A가 그만두었습니다. B 혼자 남은 일을 완성하려면 며칠이 더 필요합니까?',
      options: ['4일', '5일', '6일', '7일', '8일'],
      correctIndex: 4,
      explanation:
        'Combined Rate = 1/12 + 1/18 = 3/36 + 2/36 = 5/36. 4일 작업량 = 5/36 × 4 = 20/36 = 5/9. 남은 작업 = 1 - 5/9 = 4/9. B 혼자 남은 시간 = (4/9) ÷ (1/18) = (4/9) × 18 = 8일입니다.',
      difficulty: 'medium',
    },
    {
      id: 'work-7',
      topicSlug: 'work-problems',
      question:
        '파이프 A는 수조를 10시간에 채우고, 파이프 B는 수조를 15시간에 비웁니다. 빈 수조에 두 파이프를 동시에 열면 수조가 가득 차는 데 몇 시간이 걸립니까?',
      options: ['20시간', '25시간', '30시간', '35시간', '40시간'],
      correctIndex: 2,
      explanation:
        '채우는 rate = +1/10, 빼는 rate = -1/15. 합산 rate = 1/10 - 1/15 = 3/30 - 2/30 = 1/30. 가득 차는 시간 = 30시간입니다.',
      difficulty: 'medium',
    },
    {
      id: 'work-8',
      topicSlug: 'work-problems',
      question:
        'A는 B보다 3배 빠르게 일합니다. B 혼자서 24일이 걸리는 일을 A와 B가 함께 하면 며칠이 걸립니까?',
      options: ['4일', '5일', '6일', '8일', '10일'],
      correctIndex: 2,
      explanation:
        'B의 rate = 1/24. A는 3배 빠르므로 A의 rate = 3/24 = 1/8. Combined Rate = 1/8 + 1/24 = 3/24 + 1/24 = 4/24 = 1/6. 함께 하면 6일입니다.',
      difficulty: 'medium',
    },
    {
      id: 'work-9',
      topicSlug: 'work-problems',
      question:
        'A와 B가 함께 일하면 8일이 걸리고, B와 C가 함께 일하면 12일이 걸립니다. A와 C가 함께 일하면 어떤 일을 24일에 완성합니다. A 혼자 일하면 며칠이 걸립니까?',
      options: ['20일', '24일', '30일', '32일', '40일'],
      correctIndex: 1,
      explanation:
        '1/a + 1/b = 1/8 ...(1), 1/b + 1/c = 1/12 ...(2), 1/a + 1/c = 1/24 ...(3). (1)+(2)+(3): 2(1/a + 1/b + 1/c) = 1/8 + 1/12 + 1/24 = 3/24 + 2/24 + 1/24 = 6/24 = 1/4. 따라서 1/a + 1/b + 1/c = 1/8. (2)에서 1/b + 1/c = 1/12이므로, 1/a = 1/8 - 1/12 = 3/24 - 2/24 = 1/24. A 혼자 = 24일입니다.',
      difficulty: 'medium',
    },
    {
      id: 'work-10',
      topicSlug: 'work-problems',
      question:
        '12명의 일꾼이 어떤 일을 10일에 완성합니다. 같은 일을 8일에 완성하려면 일꾼이 몇 명 필요합니까?',
      options: ['13명', '14명', '15명', '16명', '18명'],
      correctIndex: 2,
      explanation:
        '총 작업량 = 12명 × 10일 = 120 **man-days**. 8일에 완성하려면: 필요한 일꾼 수 = 120/8 = 15명입니다.',
      difficulty: 'medium',
    },
    {
      id: 'work-11',
      topicSlug: 'work-problems',
      question:
        'A는 혼자서 어떤 일을 20일에 완성합니다. A가 5일 동안 혼자 일한 후, B가 합류하여 나머지 일을 함께 9일에 완성했습니다. B 혼자서 이 일을 하면 며칠이 걸립니까?',
      options: ['20일', '24일', '30일', '36일', '40일'],
      correctIndex: 2,
      explanation:
        'A의 rate = 1/20. A가 혼자 5일 일한 작업량 = 5/20 = 1/4. 남은 작업 = 3/4. A와 B가 함께 9일에 3/4를 완성: (1/20 + 1/b) × 9 = 3/4. 1/20 + 1/b = 3/36 = 1/12. 1/b = 1/12 - 1/20 = (5-3)/60 = 2/60 = 1/30. B 혼자 = 30일입니다.',
      difficulty: 'medium',
    },

    // ===== HARD (4 problems) =====
    {
      id: 'work-12',
      topicSlug: 'work-problems',
      question:
        '파이프 A는 빈 수조를 12시간에 채우고, 파이프 B는 같은 수조를 8시간에 채웁니다. 파이프 C는 가득 찬 수조를 6시간에 비웁니다. 세 파이프를 동시에 열면 빈 수조가 가득 차는 데 몇 시간이 걸립니까?',
      options: ['20시간', '22시간', '24시간', '26시간', '28시간'],
      correctIndex: 2,
      explanation:
        'A의 rate = +1/12, B의 rate = +1/8, C의 rate = -1/6. 합산 rate = 1/12 + 1/8 - 1/6 = 2/24 + 3/24 - 4/24 = 1/24. 가득 차는 시간 = 24시간입니다.',
      difficulty: 'hard',
    },
    {
      id: 'work-13',
      topicSlug: 'work-problems',
      question:
        'A, B, C 세 사람이 함께 일하면 4일이 걸립니다. A 혼자 12일, B 혼자 24일이 걸린다면, C 혼자 일을 완성하는 데 며칠이 걸립니까?',
      options: ['6일', '8일', '10일', '12일', '16일'],
      correctIndex: 1,
      explanation:
        '1/a + 1/b + 1/c = 1/4. 1/12 + 1/24 + 1/c = 1/4. 2/24 + 1/24 + 1/c = 1/4. 3/24 + 1/c = 1/4. 1/8 + 1/c = 1/4. 1/c = 1/4 - 1/8 = 2/8 - 1/8 = 1/8. C 혼자 = 8일입니다.',
      difficulty: 'hard',
    },
    {
      id: 'work-14',
      topicSlug: 'work-problems',
      question:
        'A는 혼자서 일을 15일에, B는 혼자서 10일에 완성합니다. 두 사람이 함께 일을 시작했지만, A가 며칠 후 그만두고 B가 나머지를 혼자 완성했습니다. 전체 작업이 8일에 끝났다면, A는 며칠 동안 일했습니까?',
      options: ['2일', '3일', '4일', '5일', '6일'],
      correctIndex: 1,
      explanation:
        'A가 x일 일하고 B가 8일 내내 일했다고 합시다. A의 작업량 + B의 작업량 = 1. (x/15) + (8/10) = 1. x/15 + 4/5 = 1. x/15 = 1 - 4/5 = 1/5. x = 15/5 = 3일입니다. A는 3일 동안 일했습니다.',
      difficulty: 'hard',
    },
    {
      id: 'work-15',
      topicSlug: 'work-problems',
      question:
        'A는 혼자서 일을 20일에 완성합니다. B는 A보다 25% 더 효율적입니다. 두 사람이 교대로 일합니다 (첫째 날 A, 둘째 날 B, 셋째 날 A, ...). 이 일이 완성되는 데 며칠이 걸립니까?',
      options: ['16일', '17일', '18일', '19일', '20일'],
      correctIndex: 2,
      explanation:
        'A의 rate = 1/20. B는 25% 더 효율적이므로 B의 rate = 1/20 × 1.25 = 1/16. 2일(A+B 한 사이클)의 작업량 = 1/20 + 1/16 = 4/80 + 5/80 = 9/80. 80/9 ≈ 8.88이므로 8사이클(16일)까지: 8 × 9/80 = 72/80 = 9/10. 남은 작업 = 1/10. 17일째(A의 차례): A가 1/20 작업. 1/20 = 0.05 < 1/10 = 0.1이므로 아직 부족. 남은 = 1/10 - 1/20 = 1/20. 18일째(B의 차례): B가 1/16 작업. 1/16 > 1/20이므로 18일째에 완성. 총 18일입니다.',
      difficulty: 'hard',
    },
  ],
};
