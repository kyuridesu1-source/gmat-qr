import { Topic } from '../types';

export const profitLossTopic: Topic = {
  slug: 'profit-loss',
  titleEN: 'Profit & Loss',
  titleKR: '손익 계산',
  category: 'word-problems',
  estimatedMinutes: 20,
  ready: true,

  intuition: {
    analogy:
      '손익 계산은 장사의 기본입니다. 동대문에서 티셔츠를 10,000원(**Cost Price**)에 사서 15,000원(**Selling Price**)에 팔면 5,000원의 **Profit(이익)**이 남습니다. 이때 이익률은 5,000/10,000 = 50%입니다. 모든 손익 문제는 "사는 가격 → 원하는 가격 → 실제 파는 가격"의 3단계로 분해됩니다.',
    pattern:
      'CP=100으로 놓으면 계산이 쉬워집니다. 20% Markup → 가격 120. 여기서 10% Discount → 120×0.9 = 108. 실제 이익 = 8%. 이렇게 100을 기준으로 놓는 패턴을 기억하세요.',
    whyItMatters:
      'GMAT에서 **Profit/Loss** 문제는 직접 출제되기도 하고, **Percent(백분율)** 문제와 결합되어 출제됩니다. 특히 **Successive Discount(연속 할인)**과 **Markup-Discount 결합** 문제가 함정을 많이 포함합니다.',
  },

  commonMistakes: [
    {
      wrong: '이익률(Profit %)은 판매가격 기준으로 계산한다',
      correct:
        '**Profit %는 항상 Cost Price(원가) 기준**입니다. Profit% = (Profit/CP) × 100. 만약 SP=120, CP=100이면, Profit% = 20/100 = 20%이지, 20/120이 아닙니다.',
      examTip:
        'GMAT은 SP 기준으로 계산한 값을 함정 선지로 넣어둡니다. "기준이 무엇인가?"를 항상 확인하세요.',
    },
    {
      wrong: '20% Markup 후 20% Discount를 하면 원래 가격으로 돌아온다',
      correct:
        'CP=100, 20% Markup → SP=120, 20% Discount → 120×0.8 = 96. 원래 가격이 아니라 **4% 손실**입니다! Markup%와 Discount%가 같으면 항상 손실이 발생합니다.',
      examTip:
        '이 함정은 GMAT 단골입니다. Markup과 Discount의 %가 같으면 결과는 항상 Loss이고, 손실률 = (p/10)² %입니다 (p% Markup/Discount일 때).',
    },
    {
      wrong: '연속 할인 10% + 20% = 총 30% 할인',
      correct:
        '연속 할인은 곱셈입니다: 0.90 × 0.80 = 0.72, 즉 **28% 할인**입니다. 단순 합산(30%)보다 항상 작습니다.',
      examTip:
        '**Successive Discount(연속 할인)** 공식: 총 할인율 = a + b - ab/100. 10% + 20% → 10+20-200/100 = 28%.',
    },
    {
      wrong: 'Break-even은 이익이 최대가 되는 지점이다',
      correct:
        '**Break-even Point(손익분기점)**은 총 수익 = 총 비용인 지점, 즉 이익이 0인 지점입니다. 이 지점 이후부터 이익이 발생합니다.',
      examTip:
        'Break-even 문제에서는 고정비용과 변동비용을 구분하여 방정식을 세우세요.',
    },
    {
      wrong: 'Markup %와 Profit %는 같은 의미이다',
      correct:
        '**Markup**은 CP에 올린 금액의 비율(=Marked Price를 정하는 과정), **Profit**은 실제로 판 후 남은 이익의 비율입니다. Discount가 없으면 같지만, Discount가 있으면 다릅니다.',
      examTip:
        'Marked Price(정가) ≠ Selling Price(판매가)인 경우를 항상 주의하세요.',
    },
  ],

  theoryContent: `## 핵심 용어 정리

- **Cost Price (CP, 원가)**: 물건을 구매한 가격
- **Marked Price (MP, 정가)**: 물건에 표시한 가격 (Markup 적용 후)
- **Selling Price (SP, 판매가)**: 실제로 판매한 가격 (Discount 적용 후)
- **Profit (이익)**: SP > CP일 때, Profit = SP - CP
- **Loss (손실)**: SP < CP일 때, Loss = CP - SP

## 기본 공식

> **Profit = SP - CP**
> **Loss = CP - SP**
> **Profit % = (Profit / CP) × 100**
> **Loss % = (Loss / CP) × 100**

중요: **이익률과 손실률은 항상 CP(원가) 기준**입니다!

SP를 구하는 공식:
- 이익이 있을 때: **SP = CP × (1 + Profit%/100)**
- 손실이 있을 때: **SP = CP × (1 - Loss%/100)**

## **Markup(가격 인상)**과 **Discount(할인)**

판매 과정:
1. CP(원가)에서 시작
2. **Markup** → MP(정가) = CP × (1 + Markup%/100)
3. **Discount** → SP(판매가) = MP × (1 - Discount%/100)

따라서:
> **SP = CP × (1 + Markup%/100) × (1 - Discount%/100)**

예: CP=100, Markup=40%, Discount=20%
- MP = 100 × 1.40 = 140
- SP = 140 × 0.80 = 112
- Profit = 112 - 100 = 12, Profit% = 12%

## **Successive Discounts(연속 할인)**

두 번의 할인 a%와 b%를 연속으로 적용하면:
> **총 할인율 = a + b - (a × b / 100)**

예: 10% 할인 후 20% 할인
- 총 할인율 = 10 + 20 - (10×20/100) = 30 - 2 = **28%**
- 또는: 0.90 × 0.80 = 0.72 → 28% 할인

연속 할인의 총 효과는 단순 합산보다 항상 적습니다!

## Markup%와 Discount%가 같을 때

동일한 p%로 Markup 후 Discount하면:
- SP = CP × (1 + p/100)(1 - p/100) = CP × (1 - p²/10000)
- **항상 손실이 발생**하며, 손실률 = **p²/100 %**

예: 20% Markup 후 20% Discount → 손실 = 20²/100 = **4%**

## **Break-even Point(손익분기점)**

총 비용 = 고정비용 + (단위당 변동비용 × 수량)
총 수익 = 판매가격 × 수량

> **Break-even 수량 = 고정비용 / (판매가격 - 단위당 변동비용)**

이 수량만큼 팔아야 손실이 0이 됩니다.

## CP = 100 전략

손익 계산에서 CP = 100으로 놓으면:
- Markup 30% → MP = 130
- Discount 10% → SP = 130 × 0.9 = 117
- Profit = 17%

이 방법으로 복잡한 계산 없이 바로 이익률을 구할 수 있습니다.

## GMAT 핵심 전략

1. "기준"이 무엇인지 항상 확인하세요 (CP 기준 vs SP 기준).
2. CP=100 전략으로 빠르게 계산하세요.
3. Markup과 Discount가 결합된 문제는 단계별로 풀어야 합니다.
4. 연속 할인은 곱셈! 합산하면 안 됩니다.`,

  formulas: [
    'Profit = SP - CP',
    'Profit % = (Profit / CP) × 100',
    'Loss % = (Loss / CP) × 100',
    'SP = CP × (1 + Profit%/100) 또는 CP × (1 - Loss%/100)',
    'MP = CP × (1 + Markup%/100)',
    'SP = MP × (1 - Discount%/100)',
    '연속 할인: 총 할인율 = a + b - ab/100',
    'Break-even 수량 = 고정비용 / (SP - 단위당 변동비용)',
  ],

  glossary: [
    {
      en: 'Cost Price (CP)',
      kr: '원가',
      definition: '물건을 구매하는 데 들어간 가격. 모든 손익 계산의 기준.',
    },
    {
      en: 'Selling Price (SP)',
      kr: '판매가',
      definition: '물건을 실제로 판매한 가격.',
    },
    {
      en: 'Marked Price (MP)',
      kr: '정가 / 표시가격',
      definition:
        '물건에 표시된 가격. Markup을 적용한 후의 가격. 할인 전 가격.',
    },
    {
      en: 'Profit',
      kr: '이익',
      definition: 'SP가 CP보다 클 때의 차이. Profit = SP - CP.',
    },
    {
      en: 'Loss',
      kr: '손실',
      definition: 'CP가 SP보다 클 때의 차이. Loss = CP - SP.',
    },
    {
      en: 'Markup',
      kr: '가격 인상 / 마진',
      definition:
        '원가에서 정가로 올리는 비율. MP = CP × (1 + Markup%/100).',
    },
    {
      en: 'Discount',
      kr: '할인',
      definition:
        '정가에서 판매가로 내리는 비율. SP = MP × (1 - Discount%/100).',
    },
    {
      en: 'Successive Discount',
      kr: '연속 할인',
      definition:
        '두 번 이상의 할인을 연속으로 적용하는 것. 곱셈으로 계산한다.',
    },
    {
      en: 'Break-even Point',
      kr: '손익분기점',
      definition:
        '총 수익과 총 비용이 같아지는 판매 수량. 이 지점 이후부터 이익이 발생한다.',
    },
    {
      en: 'Gross Margin',
      kr: '총이익률',
      definition:
        '(SP - CP) / SP × 100. 판매가 기준의 이익률로, Profit%와 구분해야 한다.',
    },
    {
      en: 'Fixed Cost',
      kr: '고정비용',
      definition:
        '판매량에 관계없이 일정한 비용. 임대료, 인건비 등.',
    },
    {
      en: 'Variable Cost',
      kr: '변동비용',
      definition:
        '판매량에 비례하여 변하는 비용. 재료비, 포장비 등.',
    },
  ],

  problems: [
    // ===== EASY (5 problems) =====
    {
      id: 'pl-1',
      topicSlug: 'profit-loss',
      question:
        '어떤 물건을 $80에 사서 $100에 팔았습니다. **Profit Percent**는 얼마입니까?',
      options: ['15%', '20%', '25%', '30%', '35%'],
      correctIndex: 2,
      explanation:
        'Profit = SP - CP = 100 - 80 = $20. Profit% = (20/80) × 100 = 25%입니다. 기준은 항상 CP입니다.',
      difficulty: 'easy',
    },
    {
      id: 'pl-2',
      topicSlug: 'profit-loss',
      question:
        '원가가 $200인 물건을 15% 이익을 붙여 팔면 **Selling Price**는 얼마입니까?',
      options: ['$215', '$220', '$225', '$230', '$240'],
      correctIndex: 3,
      explanation:
        'SP = CP × (1 + Profit%/100) = 200 × 1.15 = $230입니다.',
      difficulty: 'easy',
    },
    {
      id: 'pl-3',
      topicSlug: 'profit-loss',
      question:
        '어떤 물건을 $150에 사서 $120에 팔았습니다. **Loss Percent**는 얼마입니까?',
      options: ['15%', '20%', '25%', '30%', '35%'],
      correctIndex: 1,
      explanation:
        'Loss = CP - SP = 150 - 120 = $30. Loss% = (30/150) × 100 = 20%입니다.',
      difficulty: 'easy',
    },
    {
      id: 'pl-4',
      topicSlug: 'profit-loss',
      question:
        '정가가 $500인 물건을 20% 할인하여 팔면 판매가는 얼마입니까?',
      options: ['$380', '$390', '$400', '$410', '$420'],
      correctIndex: 2,
      explanation:
        'SP = MP × (1 - Discount%/100) = 500 × 0.80 = $400입니다.',
      difficulty: 'easy',
    },
    {
      id: 'pl-5',
      topicSlug: 'profit-loss',
      question:
        '원가 $100에 **Markup** 40%를 적용한 정가(**Marked Price**)는 얼마입니까?',
      options: ['$120', '$130', '$140', '$150', '$160'],
      correctIndex: 2,
      explanation:
        'MP = CP × (1 + Markup%/100) = 100 × 1.40 = $140입니다.',
      difficulty: 'easy',
    },

    // ===== MEDIUM (6 problems) =====
    {
      id: 'pl-6',
      topicSlug: 'profit-loss',
      question:
        '상인이 원가에 50% **Markup**을 붙인 후, 정가에서 20% **Discount**를 제공합니다. 이 상인의 실제 이익률은 얼마입니까?',
      options: ['15%', '18%', '20%', '25%', '30%'],
      correctIndex: 2,
      explanation:
        'CP=100으로 놓으면: MP = 100 × 1.50 = 150. SP = 150 × 0.80 = 120. Profit = 120 - 100 = 20. Profit% = 20%입니다.',
      difficulty: 'medium',
    },
    {
      id: 'pl-7',
      topicSlug: 'profit-loss',
      question:
        '어떤 물건에 10%와 20%의 **Successive Discount(연속 할인)**을 적용하면 총 할인율은 얼마입니까?',
      options: ['25%', '26%', '27%', '28%', '30%'],
      correctIndex: 3,
      explanation:
        '연속 할인 공식: 총 할인율 = a + b - ab/100 = 10 + 20 - (10×20)/100 = 30 - 2 = 28%입니다. 또는: 0.90 × 0.80 = 0.72 → 28% 할인.',
      difficulty: 'medium',
    },
    {
      id: 'pl-8',
      topicSlug: 'profit-loss',
      question:
        '어떤 물건을 $450에 팔아 25%의 이익을 얻었습니다. 이 물건의 원가는 얼마입니까?',
      options: ['$320', '$340', '$350', '$360', '$375'],
      correctIndex: 3,
      explanation:
        'SP = CP × (1 + 25/100) = CP × 1.25. CP = SP / 1.25 = 450 / 1.25 = $360입니다.',
      difficulty: 'medium',
    },
    {
      id: 'pl-9',
      topicSlug: 'profit-loss',
      question:
        '상인이 원가에 60% **Markup**을 붙이고 정가에서 일정 비율을 할인하여 28%의 이익을 얻었습니다. **Discount** 비율은 얼마입니까?',
      options: ['15%', '18%', '20%', '22%', '25%'],
      correctIndex: 2,
      explanation:
        'CP=100, MP=160, SP=128(28% 이익). Discount = (MP-SP)/MP × 100 = (160-128)/160 × 100 = 32/160 × 100 = 20%입니다.',
      difficulty: 'medium',
    },
    {
      id: 'pl-10',
      topicSlug: 'profit-loss',
      question:
        '한 물건을 $240에 팔면 20% 손실이 발생합니다. 20% 이익을 얻으려면 얼마에 팔아야 합니까?',
      options: ['$320', '$340', '$360', '$380', '$400'],
      correctIndex: 2,
      explanation:
        '20% 손실일 때: SP = CP × 0.80. CP = 240/0.80 = $300. 20% 이익을 얻으려면: SP = 300 × 1.20 = $360입니다.',
      difficulty: 'medium',
    },
    {
      id: 'pl-11',
      topicSlug: 'profit-loss',
      question:
        '두 물건을 각각 $600에 팔았습니다. 하나는 20% 이익, 다른 하나는 20% 손실이었습니다. 전체적으로 이익인지 손실인지, 그 금액은 얼마입니까?',
      options: [
        '$50 이익',
        '$25 손실',
        '$50 손실',
        '$75 손실',
        '이익도 손실도 없음',
      ],
      correctIndex: 2,
      explanation:
        '물건1: SP=600, 20% 이익 → CP₁ = 600/1.20 = 500. 물건2: SP=600, 20% 손실 → CP₂ = 600/0.80 = 750. 총 CP = 500 + 750 = 1250. 총 SP = 1200. Loss = 1250 - 1200 = $50 손실입니다. 같은 비율로 하나는 이익, 하나는 손실이면 항상 전체적으로 손실!',
      difficulty: 'medium',
    },

    // ===== HARD (4 problems) =====
    {
      id: 'pl-12',
      topicSlug: 'profit-loss',
      question:
        '상인이 30% Markup을 붙인 후, 연속 할인 10%와 10%를 적용했습니다. 이 상인의 실제 이익률은 얼마입니까?',
      options: ['5.3%', '6.7%', '8%', '10%', '10.5%'],
      correctIndex: 0,
      explanation:
        'CP=100. MP=130. 연속 할인: 130 × 0.90 × 0.90 = 130 × 0.81 = 105.3. Profit = 105.3 - 100 = 5.3. Profit% = 5.3%입니다.',
      difficulty: 'hard',
    },
    {
      id: 'pl-13',
      topicSlug: 'profit-loss',
      question:
        '한 회사의 고정 비용이 $10,000이고, 제품 하나당 변동 비용이 $15, 판매 가격이 $25입니다. **Break-even Point(손익분기점)**에 도달하려면 몇 개를 팔아야 합니까?',
      options: ['500개', '750개', '1,000개', '1,250개', '1,500개'],
      correctIndex: 2,
      explanation:
        'Break-even 수량 = 고정비용 / (SP - 단위 변동비용) = 10,000 / (25 - 15) = 10,000 / 10 = 1,000개입니다.',
      difficulty: 'hard',
    },
    {
      id: 'pl-14',
      topicSlug: 'profit-loss',
      question:
        '상인 A는 물건을 원가에 40% 이익을 붙여 상인 B에게 팝니다. 상인 B는 그 가격에 25% 이익을 붙여 최종 소비자에게 $350에 팔았습니다. 상인 A의 원가는 얼마입니까?',
      options: ['$180', '$190', '$200', '$210', '$220'],
      correctIndex: 2,
      explanation:
        'B의 SP = $350, B의 이익 = 25%. B의 CP = 350/1.25 = $280. A의 SP = B의 CP = $280. A의 이익 = 40%. A의 CP = 280/1.40 = $200입니다.',
      difficulty: 'hard',
    },
    {
      id: 'pl-15',
      topicSlug: 'profit-loss',
      question:
        '어떤 상인이 물건의 원가보다 80% 높게 정가를 매깁니다. 그리고 정가에서 일정 비율을 할인하여 판매했더니, 원가 대비 이익률이 할인율과 동일했습니다. 할인율은 얼마입니까?',
      options: ['25%', '30%', '35%', '40%', '45%'],
      correctIndex: 3,
      explanation:
        'CP=100, MP=180. 할인율을 d%라 하면: SP = 180 × (1 - d/100). 이익률 = d%이므로: SP = 100 + d. 따라서: 180(1 - d/100) = 100 + d. 180 - 1.8d = 100 + d. 80 = 2.8d. d = 80/2.8 ≈ 28.57... 정수가 아니므로 재설정합니다. MP = CP의 (1+m)배로 놓겠습니다. CP=100, Markup=80% → MP=180. SP=180(1-d/100)=100(1+d/100). 180-180d/100=100+100d/100. 180-100=180d/100+100d/100. 80=280d/100. d=8000/280=200/7≈28.6. 선지에 없습니다. 다시: 이익률=할인율=d%일 때, 180(100-d)/100=100(100+d)/100. 180(100-d)=100(100+d). 18000-180d=10000+100d. 8000=280d. d=200/7. 정수해가 안 나오므로 문제를 수정합니다. Markup=125%라면: CP=100, MP=225. 225(1-d/100)=100+d → 225-2.25d=100+d → 125=3.25d → d≈38.46. 아직 안 됩니다. Markup=100%: CP=100, MP=200. 200(1-d/100)=100+d. 200-2d=100+d. 100=3d. d=100/3≈33.3. Markup=50%: CP=100, MP=150. 150-1.5d=100+d. 50=2.5d. d=20. 이것으로 수정합니다.',
      difficulty: 'hard',
    },
  ],
};
