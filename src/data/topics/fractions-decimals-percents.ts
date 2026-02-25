import { Topic } from '../types';

export const fractionsDecimalsPercentsTopic: Topic = {
  slug: 'fractions-decimals-percents',
  titleEN: 'Fractions, Decimals & Percents',
  titleKR: '분수, 소수, 백분율',
  category: 'arithmetic',
  estimatedMinutes: 25,
  ready: true,

  intuition: {
    analogy:
      "분수, 소수, 백분율은 같은 양을 표현하는 세 가지 '언어'예요. 피자 한 판의 반을 말할 때 1/2(분수), 0.5(소수), 50%(백분율) — 전부 같은 뜻이죠. 마치 한국어, 영어, 일본어로 '안녕'을 말하는 것처럼, 상황에 따라 가장 편한 형태를 골라 쓰면 됩니다.",
    pattern:
      '자주 나오는 변환: 1/2=0.5=50%, 1/3≈0.333=33.3%, 1/4=0.25=25%, 1/5=0.2=20%, 1/8=0.125=12.5%, 3/4=0.75=75%, 2/5=0.4=40%. 이 변환표를 외우면 GMAT에서 계산 시간을 크게 줄일 수 있어요!',
    whyItMatters:
      'GMAT QR에서 분수·소수·백분율 변환은 거의 매 시험에 출제됩니다. 특히 "percent change" 문제와 "fraction of a fraction" 문제가 빈출됩니다.',
  },

  commonMistakes: [
    {
      wrong: '20% 증가 후 20% 감소하면 원래 값으로 돌아온다',
      correct:
        '100에서 20% 증가 → 120, 120에서 20% 감소 → 120 × 0.8 = 96. 원래 값 100보다 4% 작습니다.',
      examTip:
        'GMAT에서 가장 빈출되는 함정입니다. "x% 증가 후 x% 감소"는 원래 값보다 항상 작아집니다. 감소율 = x²/100 %.',
    },
    {
      wrong: '분수를 나눌 때 그냥 분자끼리, 분모끼리 나눈다',
      correct:
        '분수의 나눗셈은 나누는 수의 역수를 곱합니다. a/b ÷ c/d = a/b × d/c = ad/bc',
      examTip:
        '"dividing by a fraction = multiply by the reciprocal"은 GMAT의 기본 중 기본입니다. 실수하면 답이 완전히 달라집니다.',
    },
    {
      wrong: '0.1%와 10%를 혼동한다',
      correct:
        '0.1% = 0.001 (1/1000), 10% = 0.1 (1/10). 백분율을 소수로 바꿀 때는 100으로 나누세요.',
      examTip:
        'GMAT은 0.5%, 0.01% 같은 작은 백분율을 의도적으로 출제합니다. percent를 decimal로 바꿀 때 소수점 위치를 정확히 확인하세요.',
    },
    {
      wrong: '분수의 분자와 분모에 같은 수를 더해도 값이 같다고 생각한다',
      correct:
        '분자와 분모에 같은 수를 곱하거나 나누면 값이 같지만, 더하거나 빼면 값이 달라집니다. 예: 1/2 ≠ 2/3 (분자분모에 1을 더한 것)',
      examTip:
        '분수의 값을 유지하려면 분자와 분모에 같은 수를 "곱하거나 나누어야" 합니다. 이 원칙을 잊으면 통분이나 약분에서 실수합니다.',
    },
    {
      wrong: 'percent change 계산에서 "of"의 기준을 잘못 잡는다',
      correct:
        'Percent Change = (New - Old) / Old × 100. 기준(분모)은 항상 "원래 값(Old)"입니다. "A가 B보다 몇 % 큰가"에서 기준은 B입니다.',
      examTip:
        'GMAT은 "A is what percent greater than B?" vs "B is what percent less than A?"를 구분하여 출제합니다. 기준이 다르면 답이 다릅니다.',
    },
  ],

  theoryContent: `## 분수 (Fractions)

**Fraction (분수)**이란 두 정수의 비로 나타낸 수입니다. a/b에서 a는 **Numerator (분자)**, b는 **Denominator (분모)**입니다. 분모는 0이 될 수 없습니다.

### 분수의 종류
- **Proper Fraction (진분수)**: 분자 < 분모. 예: 3/5
- **Improper Fraction (가분수)**: 분자 ≥ 분모. 예: 7/4
- **Mixed Number (대분수)**: 정수 + 진분수. 예: 1¾ = 7/4

### 분수의 사칙연산

**덧셈/뺄셈**: 통분 후 분자끼리 더하거나 빼기
a/b ± c/d = (ad ± bc) / bd

**곱셈**: 분자끼리, 분모끼리 곱하기
a/b × c/d = ac / bd

**나눗셈**: 나누는 수의 역수를 곱하기
a/b ÷ c/d = a/b × d/c = ad / bc

### 분수의 크기 비교

1. **통분하여 비교**: 분모를 같게 만든 후 분자를 비교
2. **교차 곱셈**: a/b와 c/d를 비교할 때, ad와 bc를 비교 (ad > bc이면 a/b > c/d)
3. **소수로 변환하여 비교**

## 소수 (Decimals)

**Decimal (소수)**은 소수점을 사용하여 분수를 표현한 것입니다.

### 유한소수와 무한소수
- **Terminating Decimal (유한소수)**: 소수점 아래 자릿수가 유한. 예: 0.25, 0.125
- **Repeating Decimal (순환소수)**: 일정 패턴이 반복. 예: 1/3 = 0.333... = 0.3̄

분수가 유한소수가 되는 조건: 기약분수의 분모가 2와 5만을 소인수로 가질 때

### 주요 분수-소수 변환표

| 분수 | 소수 | 백분율 |
|------|------|--------|
| 1/2 | 0.5 | 50% |
| 1/3 | 0.333... | 33.3...% |
| 1/4 | 0.25 | 25% |
| 1/5 | 0.2 | 20% |
| 1/6 | 0.1666... | 16.67% |
| 1/8 | 0.125 | 12.5% |
| 1/10 | 0.1 | 10% |
| 2/3 | 0.666... | 66.7% |
| 3/4 | 0.75 | 75% |
| 3/8 | 0.375 | 37.5% |

## 백분율 (Percents)

**Percent (백분율)**이란 "100분의 몇"이라는 뜻입니다. x% = x/100

### 변환 공식
- 분수 → 백분율: 분자 ÷ 분모 × 100
- 백분율 → 소수: 백분율 ÷ 100
- 소수 → 백분율: 소수 × 100

### Percent Change (변화율)

**Percent Change = (New - Old) / Old × 100**

- 증가율: New > Old → 양수
- 감소율: New < Old → 음수

### 연속 변화율 (Compound Percent Change)

연속적인 비율 변화: 최종 값 = 원래 값 × (1 + r₁) × (1 + r₂) × ...

예: 100에서 10% 증가 후 20% 감소
= 100 × 1.1 × 0.8 = 88

### Percent Of vs Percent Greater/Less

- "A is 25% of B" → A = 0.25 × B
- "A is 25% greater than B" → A = B + 0.25B = 1.25B
- "A is 25% less than B" → A = B - 0.25B = 0.75B`,

  formulas: [
    '분수 나눗셈: a/b ÷ c/d = a/b × d/c = ad/bc',
    '분수 덧셈: a/b + c/d = (ad + bc) / bd',
    'Percent = (Part / Whole) × 100',
    'Percent Change = (New − Old) / Old × 100',
    '연속 변화: Final = Original × (1 + r₁) × (1 + r₂) × ...',
    '복리: A = P(1 + r)ⁿ',
    'x% of y = y% of x = xy/100',
    '분수 → 소수: 분자 ÷ 분모',
    '소수 → 백분율: 소수 × 100',
  ],

  glossary: [
    {
      en: 'Fraction',
      kr: '분수',
      definition:
        '두 정수의 비 a/b로 표현되는 수. b ≠ 0. 예: 3/4, 7/2',
    },
    {
      en: 'Numerator',
      kr: '분자',
      definition: '분수에서 분수선 위의 수. a/b에서 a.',
    },
    {
      en: 'Denominator',
      kr: '분모',
      definition: '분수에서 분수선 아래의 수. a/b에서 b. 0이 될 수 없음.',
    },
    {
      en: 'Reciprocal',
      kr: '역수',
      definition:
        '어떤 수에 곱하면 1이 되는 수. a/b의 역수는 b/a. 0에는 역수가 없음.',
    },
    {
      en: 'Decimal',
      kr: '소수',
      definition:
        '소수점을 사용하여 표현한 수. 예: 0.75, 3.14',
    },
    {
      en: 'Percent',
      kr: '백분율',
      definition: '"100분의 몇"을 나타내는 단위. x% = x/100.',
    },
    {
      en: 'Percent Change',
      kr: '변화율',
      definition:
        '원래 값 대비 변화량의 비율. (New − Old) / Old × 100',
    },
    {
      en: 'Terminating Decimal',
      kr: '유한소수',
      definition:
        '소수점 아래 자릿수가 유한한 소수. 예: 0.25, 0.5',
    },
    {
      en: 'Repeating Decimal',
      kr: '순환소수',
      definition:
        '소수점 아래에서 일정 패턴이 무한히 반복되는 소수. 예: 0.333...',
    },
    {
      en: 'Proper Fraction',
      kr: '진분수',
      definition: '분자가 분모보다 작은 분수. 값이 0과 1 사이. 예: 3/5',
    },
    {
      en: 'Improper Fraction',
      kr: '가분수',
      definition: '분자가 분모보다 크거나 같은 분수. 예: 7/4',
    },
    {
      en: 'Mixed Number',
      kr: '대분수',
      definition: '정수와 진분수의 합으로 표현한 수. 예: 1¾ = 7/4',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: 'frac-1',
      topicSlug: 'fractions-decimals-percents',
      question: '3/4 + 2/3의 값은?',
      options: ['5/7', '5/12', '17/12', '1/2', '11/12'],
      correctIndex: 2,
      explanation:
        '통분하여 분모를 같게 만듭니다.\n\n4와 3의 최소공배수 = 12\n\n3/4 = 9/12\n2/3 = 8/12\n\n9/12 + 8/12 = 17/12\n\n검증: 17/12 = 1과 5/12 ≈ 1.417\n3/4 = 0.75, 2/3 ≈ 0.667, 합 ≈ 1.417 ✓',
      difficulty: 'easy',
    },
    {
      id: 'frac-2',
      topicSlug: 'fractions-decimals-percents',
      question: '0.125를 분수로 나타내면?',
      options: ['1/4', '1/6', '1/8', '1/10', '1/12'],
      correctIndex: 2,
      explanation:
        '0.125 = 125/1000\n\n125/1000을 약분합니다.\n125와 1000의 GCF = 125\n\n125 ÷ 125 = 1\n1000 ÷ 125 = 8\n\n0.125 = 1/8\n\n또는: 0.125 × 8 = 1.000이므로 0.125 = 1/8',
      difficulty: 'easy',
    },
    {
      id: 'frac-3',
      topicSlug: 'fractions-decimals-percents',
      question: '240의 15%는?',
      options: ['24', '30', '36', '40', '48'],
      correctIndex: 2,
      explanation:
        '240 × 15% = 240 × 15/100 = 240 × 0.15\n\n방법 1: 240 × 0.15 = 240 × 0.1 + 240 × 0.05 = 24 + 12 = 36\n\n방법 2: 15% = 10% + 5%\n240의 10% = 24\n240의 5% = 24 ÷ 2 = 12\n24 + 12 = 36',
      difficulty: 'easy',
    },
    {
      id: 'frac-4',
      topicSlug: 'fractions-decimals-percents',
      question: '다음 분수 중 가장 큰 것은?',
      options: ['3/7', '4/9', '5/11', '7/15', '2/5'],
      correctIndex: 3,
      explanation:
        '각 분수를 소수로 변환하여 비교합니다.\n\n(A) 3/7 ≈ 0.4286\n(B) 4/9 ≈ 0.4444\n(C) 5/11 ≈ 0.4545\n(D) 7/15 ≈ 0.4667\n(E) 2/5 = 0.4000\n\n가장 큰 것은 (D) 7/15 ≈ 0.4667입니다.',
      difficulty: 'easy',
    },
    {
      id: 'frac-5',
      topicSlug: 'fractions-decimals-percents',
      question:
        '어떤 수의 2/5가 24일 때, 그 수의 3/4는?',
      options: ['36', '40', '45', '48', '60'],
      correctIndex: 2,
      explanation:
        '어떤 수를 x라 하면\nx × 2/5 = 24\nx = 24 × 5/2 = 60\n\nx의 3/4 = 60 × 3/4 = 45\n\n검증: 60의 2/5 = 24 ✓, 60의 3/4 = 45 ✓',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: 'frac-6',
      topicSlug: 'fractions-decimals-percents',
      question:
        '어떤 상품의 가격이 20% 인상된 후 다시 20% 할인되었습니다. 최종 가격은 원래 가격의 몇 %입니까?',
      options: ['96%', '98%', '100%', '102%', '104%'],
      correctIndex: 0,
      explanation:
        '원래 가격을 100이라 하면\n\n20% 인상: 100 × 1.2 = 120\n20% 할인: 120 × 0.8 = 96\n\n최종 가격은 원래 가격의 96%입니다.\n\n일반화: x% 인상 후 x% 할인 = (1 + x/100)(1 − x/100) = 1 − (x/100)²\n여기서 x = 20: 1 − (20/100)² = 1 − 0.04 = 0.96 = 96%',
      difficulty: 'medium',
    },
    {
      id: 'frac-7',
      topicSlug: 'fractions-decimals-percents',
      question:
        '한 회사의 직원 수가 첫 해에 25% 증가하고, 다음 해에 20% 감소했습니다. 2년 동안의 전체 변화율은?',
      options: ['-5%', '-1%', '0%', '+1%', '+5%'],
      correctIndex: 2,
      explanation:
        '원래 직원 수를 100으로 놓습니다.\n\n첫 해 25% 증가: 100 × 1.25 = 125\n다음 해 20% 감소: 125 × 0.80 = 100\n\n2년 동안 전체 변화율 = (100 − 100) / 100 × 100 = 0%\n\n이 경우는 특수한 예입니다. 1.25 × 0.80 = 1.00이므로 정확히 원래 값으로 돌아옵니다.',
      difficulty: 'medium',
    },
    {
      id: 'frac-8',
      topicSlug: 'fractions-decimals-percents',
      question:
        '3/8 ÷ 5/6 × 2/3의 값은?',
      options: ['1/4', '3/20', '3/10', '5/12', '15/16'],
      correctIndex: 2,
      explanation:
        '순서대로 계산합니다.\n\n3/8 ÷ 5/6 = 3/8 × 6/5 = (3×6)/(8×5) = 18/40 = 9/20\n\n9/20 × 2/3 = (9×2)/(20×3) = 18/60 = 3/10\n\n검증: 3/10 = 0.3\n3/8 = 0.375, 5/6 ≈ 0.833, 0.375 ÷ 0.833 ≈ 0.45, 0.45 × 0.667 ≈ 0.3 ✓',
      difficulty: 'medium',
    },
    {
      id: 'frac-9',
      topicSlug: 'fractions-decimals-percents',
      question:
        'A가 B보다 50% 크다면, B는 A보다 몇 % 작습니까?',
      options: ['25%', '30%', '33⅓%', '40%', '50%'],
      correctIndex: 2,
      explanation:
        'A = B + 50%B = 1.5B\n\nB는 A보다 얼마나 작은지 계산:\n(A − B) / A × 100 = (1.5B − B) / 1.5B × 100 = 0.5B / 1.5B × 100\n= 0.5/1.5 × 100 = 1/3 × 100 = 33⅓%\n\n핵심: 기준(분모)이 다릅니다!\n"A가 B보다 50% 크다"의 기준은 B\n"B는 A보다 몇 % 작은가"의 기준은 A',
      difficulty: 'medium',
    },
    {
      id: 'frac-10',
      topicSlug: 'fractions-decimals-percents',
      question:
        '어떤 양의 정수 n에 대해, n/12이 유한소수(terminating decimal)가 되려면, n은 다음 중 어떤 수여야 합니까?',
      options: [
        '3의 배수',
        '4의 배수',
        '6의 배수',
        '12의 배수',
        '어떤 양의 정수 n이든 가능',
      ],
      correctIndex: 0,
      explanation:
        '분수가 유한소수가 되려면, 기약분수로 만들었을 때 분모의 소인수가 2와 5만이어야 합니다.\n\n12 = 2² × 3\n\n분모에 3이 포함되어 있으므로, 이 3을 제거해야 합니다.\nn이 3의 배수이면, n/12을 약분했을 때 분모에서 3이 사라집니다.\n\n예: n=3 → 3/12 = 1/4 = 0.25 (유한소수 ✓)\nn=6 → 6/12 = 1/2 = 0.5 (유한소수 ✓)\nn=9 → 9/12 = 3/4 = 0.75 (유한소수 ✓)\n\nn=1 → 1/12 (분모에 3이 남음) → 순환소수 ✗\nn=2 → 2/12 = 1/6 (분모에 3이 남음) → 순환소수 ✗\n\nn은 3의 배수여야 합니다.',
      difficulty: 'medium',
    },
    {
      id: 'frac-11',
      topicSlug: 'fractions-decimals-percents',
      question:
        '어떤 시험에서 총 80문제 중 학생이 60문제만 풀어서 모두 맞혔습니다. 나머지 20문제를 더 풀 수 있을 때, 전체 정답률이 85% 이상이 되려면 나머지 문제 중 최소 몇 문제를 더 맞혀야 합니까?',
      options: [
        '4문제',
        '8문제',
        '10문제',
        '12문제',
        '합격 불가능',
      ],
      correctIndex: 1,
      explanation:
        '전체 80문제 중 85% 이상을 맞혀야 합니다.\n\n80 × 0.85 = 68문제\n\n현재 60문제를 맞혔으므로, 추가로 필요한 정답 수:\n68 − 60 = 8문제\n\n나머지 20문제 중 최소 8문제를 더 맞히면 됩니다.\n\n검증: (60 + 8) / 80 = 68/80 = 0.85 = 85% ✓',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: 'frac-12',
      topicSlug: 'fractions-decimals-percents',
      question:
        '어떤 물건의 원가에 40%의 이윤을 붙여 정가를 정했습니다. 이후 정가에서 25% 할인하여 판매하면, 원가 대비 이윤율은?',
      options: ['-10%', '-5%', '0%', '+5%', '+10%'],
      correctIndex: 3,
      explanation:
        '원가를 100으로 놓습니다.\n\n정가 = 100 × 1.4 = 140\n할인 판매가 = 140 × 0.75 = 105\n\n이윤 = 105 − 100 = 5\n이윤율 = 5/100 × 100 = 5%\n\n계산 확인: 1.4 × 0.75 = 1.05 → 원가의 105% → 이윤율 +5%',
      difficulty: 'hard',
    },
    {
      id: 'frac-13',
      topicSlug: 'fractions-decimals-percents',
      question:
        '세 양의 정수 a, b, c에 대해 a/b = 2/3이고 b/c = 5/7일 때, (a+c)/b의 값은?',
      options: ['31/15', '37/15', '41/15', '43/15', '47/15'],
      correctIndex: 1,
      explanation:
        'a/b = 2/3이므로 a = 2b/3\nb/c = 5/7이므로 c = 7b/5\n\n(a + c) / b = a/b + c/b = 2/3 + 7/5\n\n통분: 2/3 = 10/15, 7/5 = 21/15\n\n(a + c) / b = 10/15 + 21/15 = 31/15\n\n잠깐, c/b = 7/5 (b/c의 역수)이므로\n\n(a + c) / b = a/b + c/b = 2/3 + 7/5 = 10/15 + 21/15 = 31/15\n\n검증: b = 15로 놓으면\na = 2×15/3 = 10\nc = 7×15/5 = 21\n(a + c)/b = (10 + 21)/15 = 31/15 ✓\n\n정답은 (A) 31/15입니다.',
      difficulty: 'hard',
    },
    {
      id: 'frac-14',
      topicSlug: 'fractions-decimals-percents',
      question:
        '1/(1×2) + 1/(2×3) + 1/(3×4) + 1/(4×5) + 1/(5×6)의 값은?',
      options: ['1/3', '5/12', '1/2', '5/6', '5/7'],
      correctIndex: 2,
      explanation:
        '부분분수 분해(partial fraction decomposition)를 사용합니다.\n\n1/(n(n+1)) = 1/n − 1/(n+1) (텔레스코핑 급수)\n\n1/(1×2) = 1/1 − 1/2\n1/(2×3) = 1/2 − 1/3\n1/(3×4) = 1/3 − 1/4\n1/(4×5) = 1/4 − 1/5\n1/(5×6) = 1/5 − 1/6\n\n합 = 1/1 − 1/6 = 5/6\n\n잠깐, 다시 계산합니다.\n합 = (1 − 1/2) + (1/2 − 1/3) + (1/3 − 1/4) + (1/4 − 1/5) + (1/5 − 1/6)\n= 1 − 1/6\n= 5/6\n\n정답은 (D) 5/6입니다.',
      difficulty: 'hard',
    },
    {
      id: 'frac-15',
      topicSlug: 'fractions-decimals-percents',
      question:
        '어떤 투자의 가치가 첫 해에 20% 증가하고, 둘째 해에 x% 감소하여 2년 동안의 전체 변화가 원래 가치와 같아졌습니다. x의 값은?',
      options: ['16%', '16⅔%', '18%', '20%', '25%'],
      correctIndex: 1,
      explanation:
        '원래 가치를 V라 하면\n\n1년 후: V × 1.2\n2년 후: V × 1.2 × (1 − x/100) = V\n\n1.2 × (1 − x/100) = 1\n1 − x/100 = 1/1.2 = 5/6\nx/100 = 1 − 5/6 = 1/6\nx = 100/6 = 16⅔\n\n따라서 x = 16⅔%\n\n검증: 1.2 × (1 − 1/6) = 1.2 × 5/6 = 6/5 × 5/6 = 1 ✓',
      difficulty: 'hard',
    },
  ],
};
