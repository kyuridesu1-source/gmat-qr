import { Topic } from '../types';

export const mixtureProblemsTopic: Topic = {
  slug: 'mixture-problems',
  titleEN: 'Mixture Problems',
  titleKR: '혼합 문제',
  category: 'word-problems',
  estimatedMinutes: 20,
  ready: true,

  intuition: {
    analogy:
      '혼합 문제는 커피에 우유를 타는 것과 같습니다. 진한 에스프레소(고농도)에 우유(저농도)를 섞으면 중간 농도의 라떼가 됩니다. 핵심은 "**솔질량(용질의 양)**은 섞어도 보존된다"는 것입니다. 10% 소금물 100g에는 소금이 10g인데, 여기에 물을 아무리 더해도 소금은 여전히 10g입니다.',
    pattern:
      '20% 용액 100ml + 40% 용액 100ml → 용질: 20 + 40 = 60ml, 총량: 200ml → 농도: 60/200 = 30%. 같은 양을 섞으면 농도는 정확히 중간값! 다른 양을 섞으면 가중 평균이 됩니다.',
    whyItMatters:
      'GMAT **Mixture Problem**은 매 시험 1-2문제가 출제됩니다. 특히 **Alligation(교차법)**을 알면 계산 없이 비율로 바로 풀 수 있어 시간을 크게 절약합니다. Weighted Average와 직접 연결되는 핵심 유형입니다.',
  },

  commonMistakes: [
    {
      wrong: '20% 용액과 40% 용액을 섞으면 항상 30%가 된다',
      correct:
        '같은 양을 섞을 때만 30%입니다. 서로 다른 양을 섞으면 **Weighted Average(가중 평균)**로 계산해야 합니다. 20% 용액 200ml + 40% 용액 100ml → 용질: 40 + 40 = 80ml, 총량: 300ml → 농도: 80/300 ≈ 26.7%.',
      examTip:
        '섞는 양이 다를 때 단순 평균을 구하면 함정에 빠집니다. 항상 "용질의 양"을 각각 계산하세요.',
    },
    {
      wrong: '용액에 물을 더하면 용질의 양이 줄어든다',
      correct:
        '물(순수 용매)을 더하면 농도는 낮아지지만, **용질의 양은 변하지 않습니다**. 10% 소금물 200g에서 소금 = 20g. 물 100g을 더하면 총 300g, 소금은 여전히 20g → 농도 = 20/300 ≈ 6.67%.',
      examTip:
        '"물을 더한다" = "용질은 그대로, 총량만 증가"입니다. 반대로 물을 증발시키면 "용질 그대로, 총량 감소".',
    },
    {
      wrong: '혼합 후 농도 = (농도1 + 농도2) / 2',
      correct:
        '혼합 후 농도 = (용질1 + 용질2) / (총량1 + 총량2)입니다. 농도를 직접 평균하는 것이 아니라, 용질의 총량을 전체 용액의 총량으로 나눠야 합니다.',
      examTip:
        '이 실수는 GMAT이 가장 노리는 함정입니다. "양 × 농도 = 용질"을 먼저 구하세요.',
    },
    {
      wrong: 'Alligation을 쓸 때 비율의 방향을 혼동한다',
      correct:
        '**Alligation**에서 교차 차이의 비율은 "양의 비율"입니다. 평균 농도에서 가까운 쪽이 더 많이 들어간 것입니다. 20%와 50%를 섞어 30%를 만들면, 차이는 (30-20):(50-30) = 10:20 = 1:2이므로, 20% 용액 : 50% 용액 = 2:1입니다 (교차!).',
      examTip:
        'Alligation 비율은 항상 교차합니다. 가까운 농도가 더 많은 것이 아니라, 먼 농도가 더 많습니다.',
    },
  ],

  theoryContent: `## 핵심 개념: **Mixture Problem**

**혼합 문제**의 핵심 원리는 단 하나입니다:

> **섞기 전 용질의 총량 = 섞은 후 용질의 총량**

이것을 "**용질 보존 법칙**"이라 생각하면 됩니다.

## 기본 공식

용액의 **Concentration(농도)** = 용질의 양 / 용액의 총량

따라서:
> **용질의 양 = 농도 × 용액의 총량**

## 두 용액 섞기

농도 c₁인 용액 V₁과 농도 c₂인 용액 V₂를 섞으면:
- 용질의 총량 = c₁ × V₁ + c₂ × V₂
- 혼합 후 총량 = V₁ + V₂
- **혼합 농도 = (c₁V₁ + c₂V₂) / (V₁ + V₂)**

이것은 **Weighted Average(가중 평균)** 공식과 동일합니다!

## **Alligation Method(교차법)**

두 용액을 섞어 원하는 농도를 만들 때, 양의 비율을 빠르게 구하는 방법입니다.

c₁ < c_mix < c₂일 때:
- V₁ : V₂ = |c₂ - c_mix| : |c_mix - c₁|

예: 20% 용액과 50% 용액을 섞어 30%를 만들려면:
- V₁ : V₂ = |50 - 30| : |30 - 20| = 20 : 10 = **2 : 1**
- 20% 용액이 50% 용액보다 2배 많이 필요합니다.

이 방법은 계산이 매우 빠르므로 GMAT에서 시간 절약에 효과적입니다.

## 물(순수 용매) 추가/제거

**물을 추가**하면 (농도 0%인 용액을 섞는 것과 같음):
- 용질의 양은 변하지 않음
- 새 농도 = 기존 용질 / (기존 총량 + 추가한 물)

**물을 증발(제거)**시키면:
- 용질의 양은 변하지 않음
- 새 농도 = 기존 용질 / (기존 총량 - 증발한 물)

## 용질(Solute) 추가

순수 용질을 추가하면 (농도 100%인 용액을 섞는 것과 같음):
- 새 용질의 양 = 기존 용질 + 추가한 용질
- 새 총량 = 기존 총량 + 추가한 용질
- 새 농도 = 새 용질 / 새 총량

## **Replacement(교체)** 문제

용액 일부를 꺼내고 같은 양의 다른 용액(또는 물)을 넣는 유형:

V 리터의 c% 용액에서 x 리터를 꺼내고 물을 x 리터 넣으면:
- 남은 용질 = c% × (V - x)
- 새 농도 = c% × (V - x) / V = **c% × (1 - x/V)**

이 과정을 n번 반복하면:
- **최종 농도 = c% × (1 - x/V)ⁿ**

## GMAT 핵심 전략

1. "용질의 양"을 항상 먼저 계산하세요. 농도끼리 직접 더하거나 평균하면 안 됩니다.
2. **Alligation**으로 비율을 빠르게 구하는 연습을 해두세요.
3. "물 추가" = "용질 불변, 총량 증가", "물 증발" = "용질 불변, 총량 감소"
4. 혼합 농도는 항상 두 원래 농도 **사이**에 있어야 합니다. 답이 범위를 벗어나면 계산 오류!`,

  formulas: [
    '농도(Concentration) = 용질(Solute) / 용액 총량(Total)',
    '용질의 양 = 농도 × 용액의 총량',
    '혼합 농도 = (c₁V₁ + c₂V₂) / (V₁ + V₂)',
    'Alligation: V₁ : V₂ = |c₂ - c_mix| : |c_mix - c₁|',
    '물 추가 후 농도 = 기존 용질 / (기존 총량 + 추가 물)',
    '물 증발 후 농도 = 기존 용질 / (기존 총량 - 증발 물)',
    'Replacement n회: 최종 농도 = c × (1 - x/V)ⁿ',
    '용질 추가: 새 농도 = (기존 용질 + 추가량) / (기존 총량 + 추가량)',
  ],

  glossary: [
    {
      en: 'Mixture',
      kr: '혼합물',
      definition:
        '두 가지 이상의 물질이 섞인 것. GMAT에서는 주로 용액의 혼합을 다룬다.',
    },
    {
      en: 'Concentration',
      kr: '농도',
      definition:
        '용액에서 용질이 차지하는 비율. 보통 백분율(%)로 표현한다.',
    },
    {
      en: 'Solute',
      kr: '용질',
      definition:
        '용액에 녹아 있는 물질. 예: 소금물에서 소금, 설탕물에서 설탕.',
    },
    {
      en: 'Solvent',
      kr: '용매',
      definition:
        '용질을 녹이는 물질. 대부분의 문제에서 물(water)이 용매이다.',
    },
    {
      en: 'Solution',
      kr: '용액',
      definition:
        '용질이 용매에 녹아 있는 혼합물. 용액의 총량 = 용질 + 용매.',
    },
    {
      en: 'Alligation',
      kr: '교차법',
      definition:
        '두 용액을 섞을 때 양의 비율을 빠르게 구하는 방법. 농도 차이를 교차하여 비율을 구한다.',
    },
    {
      en: 'Weighted Average',
      kr: '가중 평균',
      definition:
        '각 값에 가중치를 곱한 후 합산하여 평균을 구하는 방법. 혼합 농도 = 가중 평균.',
    },
    {
      en: 'Dilution',
      kr: '희석',
      definition:
        '물을 추가하여 용액의 농도를 낮추는 것. 용질의 양은 변하지 않는다.',
    },
    {
      en: 'Evaporation',
      kr: '증발',
      definition:
        '물이 증발하여 용액의 농도가 높아지는 것. 용질의 양은 변하지 않는다.',
    },
    {
      en: 'Replacement',
      kr: '교체',
      definition:
        '용액 일부를 꺼내고 같은 양의 다른 물질을 넣는 과정.',
    },
    {
      en: 'Pure Substance',
      kr: '순수 물질',
      definition:
        '100% 용질(또는 100% 용매). 순수 소금은 100% 농도, 순수 물은 0% 농도.',
    },
    {
      en: 'Ratio of Mixing',
      kr: '혼합 비율',
      definition:
        '두 용액을 섞는 양의 비. Alligation으로 빠르게 구할 수 있다.',
    },
  ],

  problems: [
    // ===== EASY (5 problems) =====
    {
      id: 'mix-1',
      topicSlug: 'mixture-problems',
      question:
        '10% 소금물 200g에 포함된 소금의 양은 얼마입니까?',
      options: ['10g', '15g', '20g', '25g', '30g'],
      correctIndex: 2,
      explanation:
        '소금의 양 = 농도 × 총량 = 10% × 200g = 0.10 × 200 = 20g입니다.',
      difficulty: 'easy',
    },
    {
      id: 'mix-2',
      topicSlug: 'mixture-problems',
      question:
        '20% 설탕물 100ml와 40% 설탕물 100ml를 섞으면 농도는 얼마입니까?',
      options: ['25%', '28%', '30%', '32%', '35%'],
      correctIndex: 2,
      explanation:
        '설탕: 20% × 100 + 40% × 100 = 20 + 40 = 60ml. 총량: 200ml. 농도 = 60/200 = 30%. 같은 양을 섞으면 두 농도의 정확한 중간값입니다.',
      difficulty: 'easy',
    },
    {
      id: 'mix-3',
      topicSlug: 'mixture-problems',
      question:
        '500ml의 20% 소금물에 물 500ml를 추가하면 새로운 농도는 얼마입니까?',
      options: ['5%', '8%', '10%', '12%', '15%'],
      correctIndex: 2,
      explanation:
        '소금의 양 = 20% × 500 = 100ml (변하지 않음). 새 총량 = 500 + 500 = 1000ml. 새 농도 = 100/1000 = 10%입니다.',
      difficulty: 'easy',
    },
    {
      id: 'mix-4',
      topicSlug: 'mixture-problems',
      question:
        '어떤 용액 400g에 소금 40g이 녹아 있습니다. 이 용액의 농도는 얼마입니까?',
      options: ['8%', '10%', '12%', '15%', '20%'],
      correctIndex: 1,
      explanation:
        '농도 = 용질/총량 = 40/400 = 0.10 = 10%입니다.',
      difficulty: 'easy',
    },
    {
      id: 'mix-5',
      topicSlug: 'mixture-problems',
      question:
        '30% 알코올 용액 300ml에서 알코올의 양은 얼마이고, 물의 양은 얼마입니까?',
      options: [
        '알코올 60ml, 물 240ml',
        '알코올 90ml, 물 210ml',
        '알코올 100ml, 물 200ml',
        '알코올 120ml, 물 180ml',
        '알코올 150ml, 물 150ml',
      ],
      correctIndex: 1,
      explanation:
        '알코올 = 30% × 300 = 90ml. 물 = 300 - 90 = 210ml입니다.',
      difficulty: 'easy',
    },

    // ===== MEDIUM (6 problems) =====
    {
      id: 'mix-6',
      topicSlug: 'mixture-problems',
      question:
        '15% 소금물 200g과 35% 소금물 300g을 섞으면 혼합 용액의 농도는 얼마입니까?',
      options: ['23%', '25%', '27%', '29%', '31%'],
      correctIndex: 2,
      explanation:
        '소금: 15% × 200 + 35% × 300 = 30 + 105 = 135g. 총량: 200 + 300 = 500g. 농도 = 135/500 = 27%입니다.',
      difficulty: 'medium',
    },
    {
      id: 'mix-7',
      topicSlug: 'mixture-problems',
      question:
        '20% 용액과 50% 용액을 섞어 30% 용액 600ml를 만들려 합니다. 20% 용액은 몇 ml 필요합니까?',
      options: ['200ml', '300ml', '350ml', '400ml', '450ml'],
      correctIndex: 3,
      explanation:
        'Alligation 사용: V₁(20%) : V₂(50%) = |50-30| : |30-20| = 20 : 10 = 2 : 1. 총 3 parts = 600ml이므로, 1 part = 200ml. 20% 용액 = 2 × 200 = 400ml, 50% 용액 = 1 × 200 = 200ml입니다. 검산: 0.20×400 + 0.50×200 = 80 + 100 = 180ml. 180/600 = 30%. 정확합니다.',
      difficulty: 'medium',
    },
    {
      id: 'mix-8',
      topicSlug: 'mixture-problems',
      question:
        '400g의 25% 소금물에서 물을 증발시켜 40% 소금물을 만들려 합니다. 얼마의 물을 증발시켜야 합니까?',
      options: ['100g', '120g', '140g', '150g', '160g'],
      correctIndex: 3,
      explanation:
        '소금의 양 = 25% × 400 = 100g (변하지 않음). 40% 용액이 되려면: 100/x = 0.40, x = 250g. 증발시킬 물 = 400 - 250 = 150g입니다.',
      difficulty: 'medium',
    },
    {
      id: 'mix-9',
      topicSlug: 'mixture-problems',
      question:
        '60리터의 우유와 물의 혼합물에서 우유와 물의 비율은 2:1입니다. 이 혼합물에 물을 추가하여 우유와 물의 비율을 1:2로 만들려면 물을 몇 리터 추가해야 합니까?',
      options: ['40리터', '50리터', '60리터', '70리터', '80리터'],
      correctIndex: 2,
      explanation:
        '현재: 우유 = 60 × 2/3 = 40리터, 물 = 60 × 1/3 = 20리터. 새 비율 1:2에서 우유는 40리터 그대로이므로, 물 = 40 × 2 = 80리터 필요. 추가할 물 = 80 - 20 = 60리터입니다.',
      difficulty: 'medium',
    },
    {
      id: 'mix-10',
      topicSlug: 'mixture-problems',
      question:
        '300g의 10% 소금물에 소금을 몇 g 추가하면 25% 소금물이 됩니까?',
      options: ['40g', '50g', '60g', '70g', '80g'],
      correctIndex: 2,
      explanation:
        '기존 소금 = 10% × 300 = 30g. 소금 x g을 추가하면: (30 + x)/(300 + x) = 0.25. 30 + x = 0.25(300 + x) = 75 + 0.25x. 0.75x = 45. x = 60g입니다. 검산: (30+60)/(300+60) = 90/360 = 25%.',
      difficulty: 'medium',
    },
    {
      id: 'mix-11',
      topicSlug: 'mixture-problems',
      question:
        '두 종류의 차(tea)를 섞어 판매합니다. 종류 A는 kg당 $20, 종류 B는 kg당 $30입니다. A와 B를 섞어 kg당 $24인 혼합 차를 만들려면, A와 B의 무게 비율은 얼마입니까?',
      options: ['2:1', '3:1', '1:2', '3:2', '2:3'],
      correctIndex: 3,
      explanation:
        'Alligation: A : B = |30-24| : |24-20| = 6 : 4 = 3 : 2. 검산: (20×3 + 30×2)/(3+2) = (60+60)/5 = 120/5 = 24. 정확합니다. 정답은 A:B = 3:2입니다.',
      difficulty: 'medium',
    },

    // ===== HARD (4 problems) =====
    {
      id: 'mix-12',
      topicSlug: 'mixture-problems',
      question:
        '80리터의 40% 알코올 용액이 있습니다. 이 용액에서 일정량을 꺼내고, 같은 양의 물을 넣어 25% 용액을 만들려 합니다. 꺼내야 하는 양은 몇 리터입니까?',
      options: ['20리터', '25리터', '28리터', '30리터', '35리터'],
      correctIndex: 3,
      explanation:
        'x 리터를 꺼내면, 남은 알코올 = 0.40 × (80 - x). 물 x 리터를 넣으면 총량은 다시 80리터. 새 농도 = 0.40 × (80 - x) / 80 = 0.25. 0.40(80 - x) = 20. 32 - 0.4x = 20. 0.4x = 12. x = 30리터입니다. 검산: 남은 알코올 = 0.40 × 50 = 20리터. 20/80 = 25%.',
      difficulty: 'hard',
    },
    {
      id: 'mix-13',
      topicSlug: 'mixture-problems',
      question:
        '100리터의 50% 알코올 용액에서 20리터를 꺼내고 물 20리터를 넣는 과정을 2번 반복합니다. 최종 알코올 농도는 얼마입니까?',
      options: ['28%', '30%', '32%', '35%', '36%'],
      correctIndex: 2,
      explanation:
        'Replacement 공식: 최종 농도 = c × (1 - x/V)ⁿ = 50% × (1 - 20/100)² = 50% × (0.8)² = 50% × 0.64 = 32%입니다.',
      difficulty: 'hard',
    },
    {
      id: 'mix-14',
      topicSlug: 'mixture-problems',
      question:
        '용액 A(10% 소금물)와 용액 B(unknown 농도)를 3:2의 비율로 섞으면 22% 소금물이 됩니다. 용액 B의 농도는 얼마입니까?',
      options: ['30%', '35%', '38%', '40%', '45%'],
      correctIndex: 3,
      explanation:
        '혼합 농도 공식: (c₁V₁ + c₂V₂) / (V₁ + V₂) = 22%. 비율 3:2이므로 V₁ = 3, V₂ = 2로 놓으면: (10×3 + c₂×2) / 5 = 22. 30 + 2c₂ = 110. 2c₂ = 80. c₂ = 40%입니다. 검산: (10×3 + 40×2)/5 = (30+80)/5 = 110/5 = 22%.',
      difficulty: 'hard',
    },
    {
      id: 'mix-15',
      topicSlug: 'mixture-problems',
      question:
        '세 종류의 와인을 섞습니다. 와인 A(10% 알코올) 200ml, 와인 B(20% 알코올) 300ml, 와인 C(알코올 농도 미지) 500ml를 섞어 15% 알코올 혼합 와인 1000ml를 만들었습니다. 와인 C의 알코올 농도는 얼마입니까?',
      options: ['12%', '13%', '14%', '15%', '16%'],
      correctIndex: 2,
      explanation:
        '알코올 총량: 0.10×200 + 0.20×300 + c×500 = 0.15×1000. 20 + 60 + 500c = 150. 500c = 70. c = 0.14 = 14%입니다. 검산: 20 + 60 + 70 = 150ml 알코올. 150/1000 = 15%.',
      difficulty: 'hard',
    },
  ],
};
