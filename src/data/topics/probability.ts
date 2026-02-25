import { Topic } from '../types';

export const probabilityTopic: Topic = {
  slug: 'probability',
  titleEN: 'Probability',
  titleKR: '확률',
  category: 'word-problems',
  estimatedMinutes: 25,
  ready: true,

  intuition: {
    analogy:
      '주머니에 빨간 공 3개, 파란 공 7개가 있다고 상상해 보세요. 눈을 감고 하나를 꺼낼 때 빨간 공일 **Probability (확률)**는 3/10입니다. 확률은 "원하는 결과 / 전체 가능한 결과"로 항상 0(절대 불가능)과 1(확실) 사이의 값입니다. 비가 올 확률이 70%라면, 비가 안 올 확률은 30% — 이것이 **Complementary Probability (여사건)**이에요. "적어도 한 번"이라는 말이 나오면, 직접 세는 것보다 "한 번도 안 되는 확률"을 1에서 빼는 게 훨씬 빨라요.',
    pattern:
      '"적어도 하나(at least one)" → 1 - P(none). "그리고(and)" → 곱하기. "또는(or)" → 더하기 (겹치면 빼기). 이 세 가지 패턴이 GMAT 확률 문제의 90%를 커버합니다.',
    whyItMatters:
      'GMAT 확률 문제는 복잡한 공식보다 **상황 분석력**을 테스트합니다. "독립인가 종속인가?", "배반인가 아닌가?", "직접 셀까 여사건을 쓸까?"를 빠르게 판단하는 것이 핵심입니다. 확률은 데이터 분석에서 가장 실용적인 수학이기도 합니다.',
  },

  commonMistakes: [
    {
      wrong: '독립사건(Independent)과 배반사건(Mutually Exclusive)을 혼동함',
      correct:
        '**Independent Events (독립사건)**: 한 사건의 발생이 다른 사건의 확률에 영향을 주지 않음. 예: 동전을 두 번 던지기. P(A and B) = P(A) × P(B).\n**Mutually Exclusive (배반사건)**: 두 사건이 동시에 일어날 수 없음. 예: 주사위에서 3과 5가 동시에 나올 수 없음. P(A and B) = 0.',
      examTip:
        '배반사건이면 P(A or B) = P(A) + P(B)로 간단히 계산되지만, 독립사건이면 반드시 P(A or B) = P(A) + P(B) - P(A)P(B)를 사용해야 합니다. "동시에 일어날 수 있는가?"를 먼저 확인하세요.',
    },
    {
      wrong: 'P(A or B) = P(A) + P(B)로 항상 계산함 (겹치는 경우를 빼지 않음)',
      correct:
        '두 사건이 **배반(Mutually Exclusive)**일 때만 P(A or B) = P(A) + P(B)입니다. 일반적인 경우에는 **General Addition Rule (일반 덧셈 규칙)**을 사용합니다: P(A or B) = P(A) + P(B) - P(A and B). 겹치는 부분을 빼지 않으면 두 번 세게 됩니다.',
      examTip:
        '벤 다이어그램을 떠올리세요. 두 원이 겹치면 겹치는 영역을 한 번 빼야 합니다. 문제에서 "또는(or)" 이 나오면 항상 겹침 여부를 확인하세요.',
    },
    {
      wrong: '"적어도 하나" 문제에서 여사건(complement)을 사용하지 않고 직접 셈',
      correct:
        '"적어도 하나(at least one)"는 직접 세면 경우가 많아서 실수하기 쉽습니다. **여사건**을 쓰면 훨씬 간단합니다.\nP(적어도 하나) = 1 - P(하나도 없음)\n예: 주사위 3번 던져 적어도 한 번 6이 나올 확률 = 1 - (5/6)³ = 1 - 125/216 = 91/216',
      examTip:
        '"at least one", "적어도 하나"라는 표현이 보이면 자동으로 1 - P(none)을 떠올리세요. 이것만으로 많은 문제를 빠르게 풀 수 있습니다.',
    },
    {
      wrong: '비복원 추출(without replacement)에서 확률을 복원 추출처럼 계산함',
      correct:
        '한 번 꺼낸 것을 다시 넣지 않으면(**without replacement**), 두 번째 시행의 전체 수가 줄어듭니다. 예: 10개 중 빨간 공 3개. 첫 번째 빨간 공 확률 = 3/10. 두 번째 빨간 공 확률 = 2/9 (3/10이 아님!).',
      examTip:
        '문제에서 "without replacement", "반환하지 않고", "동시에 꺼낸다" 등이 나오면 매 시행마다 전체 수와 원하는 수를 모두 1씩 줄여야 합니다.',
    },
    {
      wrong: '조건부 확률에서 전체 표본 공간을 줄이지 않음',
      correct:
        '**Conditional Probability (조건부 확률)** P(A|B)는 "B가 이미 일어났을 때 A가 일어날 확률"입니다. 전체 표본 공간이 B로 줄어든 상태에서 계산해야 합니다. P(A|B) = P(A and B) / P(B).',
      examTip:
        '"~라는 조건 하에", "~가 주어졌을 때(given that)"라는 표현이 나오면 조건부 확률입니다. 분모가 전체 표본이 아니라 조건을 만족하는 부분만이 됩니다.',
    },
  ],

  theoryContent: `## 확률의 기본 개념

**Probability (확률)**은 어떤 사건이 일어날 가능성을 0과 1 사이의 수로 나타낸 것입니다.

**P(A) = (A가 일어나는 경우의 수) / (전체 가능한 경우의 수)**

- P(A) = 0: 사건 A는 절대 일어나지 않음
- P(A) = 1: 사건 A는 반드시 일어남
- 0 ≤ P(A) ≤ 1: 모든 확률은 이 범위 안

예시: 주사위 하나를 던져 3이 나올 확률 = 1/6

## 여사건 (Complementary Probability)

어떤 사건 A가 일어나지 않을 확률을 **Complementary Probability (여사건)**이라 합니다.

**P(not A) = 1 - P(A)**

예시: 비가 올 확률이 0.3이면, 비가 오지 않을 확률은 1 - 0.3 = 0.7

이 개념은 "적어도 하나(at least one)" 문제에서 핵심적으로 사용됩니다:
**P(적어도 하나) = 1 - P(하나도 없음)**

## 독립사건 (Independent Events)

두 사건 A, B가 서로 영향을 주지 않을 때 **Independent (독립)**이라 합니다.

**독립사건의 곱셈 규칙: P(A and B) = P(A) × P(B)**

예시: 동전 던지기에서 앞면이 나온 후 다시 던질 때, 이전 결과가 다음에 영향을 주지 않으므로 독립입니다.
P(앞면 and 앞면) = 1/2 × 1/2 = 1/4

3개 이상의 독립사건도 마찬가지입니다:
P(A and B and C) = P(A) × P(B) × P(C)

## 배반사건 (Mutually Exclusive Events)

두 사건이 동시에 일어날 수 없으면 **Mutually Exclusive (배반)**이라 합니다.

**배반사건: P(A and B) = 0**
**배반사건의 덧셈 규칙: P(A or B) = P(A) + P(B)**

예시: 주사위에서 "3이 나오는 사건"과 "5가 나오는 사건"은 배반입니다.
P(3 or 5) = 1/6 + 1/6 = 2/6 = 1/3

주의: 독립 ≠ 배반입니다! 두 사건이 배반이면서 동시에 독립일 수는 없습니다(둘 다 확률이 0이 아닌 한).

## 일반 덧셈 규칙 (General Addition Rule)

두 사건이 동시에 일어날 수 있으면(배반이 아니면), 겹치는 부분을 빼야 합니다.

**P(A or B) = P(A) + P(B) - P(A and B)**

예시: 52장 카드에서 한 장을 뽑을 때, 하트이거나 킹일 확률
P(하트) = 13/52, P(킹) = 4/52, P(하트이면서 킹) = 1/52
P(하트 or 킹) = 13/52 + 4/52 - 1/52 = 16/52 = 4/13

## "적어도 하나" — 여사건 활용

"적어도 하나가 ~할 확률"은 직접 구하면 경우가 너무 많습니다. 여사건을 이용하세요.

**P(적어도 1개) = 1 - P(0개)**

예시: 동전을 5번 던져 적어도 한 번 앞면이 나올 확률
P(앞면 0번) = (1/2)⁵ = 1/32
P(적어도 1번 앞면) = 1 - 1/32 = 31/32

## 조건부 확률 (Conditional Probability)

사건 B가 이미 일어났다는 조건 하에서 사건 A가 일어날 확률:

**P(A|B) = P(A and B) / P(B)**

예시: 52장 카드에서 1장을 뽑았는데 빨간색이라는 것을 알았을 때, 그것이 하트일 확률
P(하트|빨간색) = P(하트 and 빨간색) / P(빨간색) = (13/52) / (26/52) = 13/26 = 1/2

조건부 확률에서는 전체 표본 공간이 줄어든다는 것이 핵심입니다.

## 확률과 조합의 결합

많은 GMAT 확률 문제는 **Combination (조합)**을 이용하여 경우의 수를 센 뒤 확률을 계산합니다.

P(A) = (A에 해당하는 조합의 수) / (전체 조합의 수)

예시: 10명 중 여성 4명, 남성 6명. 3명을 무작위로 뽑을 때 3명 모두 남성일 확률
전체: 10C3 = 120
남성 3명: 6C3 = 20
P(남성 3명) = 20/120 = 1/6`,

  formulas: [
    'P(A) = (원하는 결과의 수) / (전체 가능한 결과의 수), 0 ≤ P(A) ≤ 1',
    'P(not A) = 1 - P(A) — 여사건',
    'P(A and B) = P(A) × P(B) — 독립사건일 때',
    'P(A or B) = P(A) + P(B) — 배반사건일 때',
    'P(A or B) = P(A) + P(B) - P(A and B) — 일반 덧셈 규칙',
    'P(적어도 하나) = 1 - P(하나도 없음)',
    'P(A|B) = P(A and B) / P(B) — 조건부 확률',
    '조합 활용: P = (원하는 조합 수) / (전체 조합 수)',
  ],

  glossary: [
    {
      en: 'Probability',
      kr: '확률',
      definition:
        '어떤 사건이 일어날 가능성을 0에서 1 사이의 수로 나타낸 것.',
    },
    {
      en: 'Sample Space',
      kr: '표본 공간',
      definition:
        '실험에서 가능한 모든 결과의 집합. 예: 주사위 → {1, 2, 3, 4, 5, 6}.',
    },
    {
      en: 'Event',
      kr: '사건',
      definition:
        '표본 공간의 부분집합. 관심 있는 특정 결과(들). 예: "짝수가 나오는 사건" = {2, 4, 6}.',
    },
    {
      en: 'Complementary Event',
      kr: '여사건',
      definition:
        '사건 A가 일어나지 않는 사건. P(A\') = 1 - P(A). "적어도 하나" 문제에 필수.',
    },
    {
      en: 'Independent Events',
      kr: '독립사건',
      definition:
        '한 사건의 발생이 다른 사건의 확률에 영향을 주지 않는 사건들. P(A and B) = P(A)×P(B).',
    },
    {
      en: 'Mutually Exclusive',
      kr: '배반사건 / 상호 배타적',
      definition:
        '두 사건이 동시에 일어날 수 없는 경우. P(A and B) = 0. P(A or B) = P(A)+P(B).',
    },
    {
      en: 'Conditional Probability',
      kr: '조건부 확률',
      definition:
        '사건 B가 주어졌을 때 사건 A의 확률. P(A|B) = P(A∩B)/P(B).',
    },
    {
      en: 'Favorable Outcome',
      kr: '유리한 결과 / 원하는 결과',
      definition:
        '구하려는 사건에 해당하는 결과. 확률 = 유리한 결과 수 / 전체 결과 수.',
    },
    {
      en: 'With Replacement',
      kr: '복원 추출',
      definition:
        '하나를 뽑은 뒤 다시 넣고 다음을 뽑는 방식. 매번 전체 수가 동일하게 유지됨.',
    },
    {
      en: 'Without Replacement',
      kr: '비복원 추출',
      definition:
        '하나를 뽑은 뒤 다시 넣지 않는 방식. 매 시행마다 전체 수가 줄어듦.',
    },
    {
      en: 'Addition Rule',
      kr: '덧셈 규칙',
      definition:
        'P(A or B)를 구하는 규칙. 배반이면 단순 합, 아니면 겹치는 부분을 빼야 함.',
    },
    {
      en: 'Multiplication Rule',
      kr: '곱셈 규칙',
      definition:
        'P(A and B)를 구하는 규칙. 독립이면 P(A)×P(B), 종속이면 P(A)×P(B|A).',
    },
  ],

  problems: [
    // ==================== EASY (5 problems) ====================
    {
      id: 'prob-1',
      topicSlug: 'probability',
      question:
        '주머니에 빨간 공 4개, 파란 공 6개가 있습니다. 하나를 무작위로 꺼낼 때 빨간 공일 확률은?',
      options: ['1/5', '2/5', '3/5', '2/3', '4/5'],
      correctIndex: 1,
      explanation:
        '**P(빨간 공)** = 빨간 공 수 / 전체 공 수 = 4 / (4+6) = 4/10 = **2/5**\n\n확률의 기본 공식을 바로 적용하면 됩니다.',
      difficulty: 'easy',
    },
    {
      id: 'prob-2',
      topicSlug: 'probability',
      question:
        '공정한 주사위를 한 번 던질 때, 4 이상의 수가 나올 확률은?',
      options: ['1/6', '1/3', '1/2', '2/3', '5/6'],
      correctIndex: 2,
      explanation:
        '4 이상의 수: {4, 5, 6} → 3가지\n전체 가능한 결과: {1, 2, 3, 4, 5, 6} → 6가지\n\nP(4 이상) = 3/6 = **1/2**',
      difficulty: 'easy',
    },
    {
      id: 'prob-3',
      topicSlug: 'probability',
      question:
        '비가 올 확률이 0.35입니다. 비가 오지 않을 확률은?',
      options: ['0.35', '0.55', '0.60', '0.65', '0.75'],
      correctIndex: 3,
      explanation:
        '**Complementary Probability (여사건)**:\n\nP(비 안 옴) = 1 - P(비 옴) = 1 - 0.35 = **0.65**\n\n어떤 사건의 확률과 그 여사건의 확률의 합은 항상 1입니다.',
      difficulty: 'easy',
    },
    {
      id: 'prob-4',
      topicSlug: 'probability',
      question:
        '공정한 동전을 2번 던질 때, 2번 모두 앞면이 나올 확률은?',
      options: ['1/8', '1/4', '1/3', '1/2', '3/4'],
      correctIndex: 1,
      explanation:
        '두 번의 동전 던지기는 **Independent Events (독립사건)**입니다.\n\nP(앞면 and 앞면) = P(앞면) × P(앞면) = 1/2 × 1/2 = **1/4**\n\n전체 표본 공간으로 확인: {HH, HT, TH, TT} → 4가지 중 HH는 1가지 → 1/4 ✓',
      difficulty: 'easy',
    },
    {
      id: 'prob-5',
      topicSlug: 'probability',
      question:
        '52장의 표준 카드 한 벌에서 한 장을 뽑을 때, 하트(Heart)일 확률은?',
      options: ['1/13', '1/4', '1/3', '4/13', '1/2'],
      correctIndex: 1,
      explanation:
        '표준 카드 한 벌: 52장, 4개 문양(하트, 다이아, 클럽, 스페이드) 각 13장\n\nP(하트) = 13/52 = **1/4**',
      difficulty: 'easy',
    },

    // ==================== MEDIUM (6 problems) ====================
    {
      id: 'prob-6',
      topicSlug: 'probability',
      question:
        '주사위를 두 번 던질 때, 두 번 모두 짝수가 나오거나 두 번 모두 홀수가 나올 확률은?',
      options: ['1/4', '1/3', '1/2', '2/3', '3/4'],
      correctIndex: 2,
      explanation:
        '주사위의 짝수: {2, 4, 6} → P(짝수) = 3/6 = 1/2\n주사위의 홀수: {1, 3, 5} → P(홀수) = 3/6 = 1/2\n\n"두 번 모두 짝수" 와 "두 번 모두 홀수"는 **Mutually Exclusive (배반사건)**입니다.\n\nP(모두 짝수) = 1/2 × 1/2 = 1/4\nP(모두 홀수) = 1/2 × 1/2 = 1/4\n\nP(모두 짝수 or 모두 홀수) = 1/4 + 1/4 = **1/2**',
      difficulty: 'medium',
    },
    {
      id: 'prob-7',
      topicSlug: 'probability',
      question:
        '52장 카드에서 한 장을 뽑을 때, 하트이거나 에이스일 확률은?',
      options: ['4/13', '16/52', '17/52', '9/26', '18/52'],
      correctIndex: 0,
      explanation:
        '하트와 에이스는 겹칠 수 있으므로(하트 에이스!) **General Addition Rule**을 사용합니다.\n\nP(하트) = 13/52\nP(에이스) = 4/52\nP(하트 and 에이스) = 1/52 (하트 에이스 1장)\n\nP(하트 or 에이스) = 13/52 + 4/52 - 1/52 = 16/52 = **4/13**\n\n겹치는 부분(하트 에이스)을 빼지 않으면 17/52로 오답!',
      difficulty: 'medium',
    },
    {
      id: 'prob-8',
      topicSlug: 'probability',
      question:
        '상자에 불량품 3개와 정상품 7개가 있습니다. 비복원 추출로 2개를 연속으로 꺼낼 때, 두 개 모두 정상품일 확률은?',
      options: ['7/15', '49/100', '21/45', '9/20', '42/90'],
      correctIndex: 0,
      explanation:
        '**Without Replacement (비복원 추출)**이므로, 첫 번째 추출 후 전체 수가 줄어듭니다.\n\nP(첫 번째 정상) = 7/10\nP(두 번째 정상 | 첫 번째 정상) = 6/9 = 2/3\n\nP(둘 다 정상) = 7/10 × 6/9 = 42/90 = **7/15**\n\n조합으로 검증: 정상 7개 중 2개 선택 / 전체 10개 중 2개 선택\n= 7C2 / 10C2 = 21/45 = 7/15 ✓',
      difficulty: 'medium',
    },
    {
      id: 'prob-9',
      topicSlug: 'probability',
      question:
        '공정한 동전을 3번 던질 때, 적어도 한 번 앞면이 나올 확률은?',
      options: ['1/8', '3/8', '1/2', '5/8', '7/8'],
      correctIndex: 4,
      explanation:
        '"적어도 하나" → **여사건 (Complement)** 활용!\n\nP(적어도 1번 앞면) = 1 - P(앞면 0번)\n\nP(앞면 0번) = P(3번 모두 뒷면) = (1/2)³ = 1/8\n\nP(적어도 1번 앞면) = 1 - 1/8 = **7/8**\n\n직접 세면: 전체 8가지(HHH, HHT, HTH, HTT, THH, THT, TTH, TTT) 중 TTT만 제외 = 7가지 → 7/8 ✓',
      difficulty: 'medium',
    },
    {
      id: 'prob-10',
      topicSlug: 'probability',
      question:
        'A와 B 두 사람이 각각 독립적으로 시험에 합격할 확률이 0.8과 0.6입니다. 두 사람 중 적어도 한 명이 합격할 확률은?',
      options: ['0.48', '0.80', '0.88', '0.92', '0.96'],
      correctIndex: 3,
      explanation:
        '"적어도 한 명 합격" → 여사건 활용\n\nP(적어도 1명 합격) = 1 - P(둘 다 불합격)\n\nP(A 불합격) = 1 - 0.8 = 0.2\nP(B 불합격) = 1 - 0.6 = 0.4\n\n**독립사건**이므로:\nP(둘 다 불합격) = 0.2 × 0.4 = 0.08\n\nP(적어도 1명 합격) = 1 - 0.08 = **0.92**\n\n검증: P(A만) + P(B만) + P(둘 다) = 0.8×0.4 + 0.2×0.6 + 0.8×0.6 = 0.32 + 0.12 + 0.48 = 0.92 ✓',
      difficulty: 'medium',
    },
    {
      id: 'prob-11',
      topicSlug: 'probability',
      question:
        '200명의 학생을 대상으로 조사한 결과, 수학을 좋아하는 학생 120명, 과학을 좋아하는 학생 80명, 둘 다 좋아하는 학생 40명입니다. 무작위로 한 명을 선택할 때, 수학 또는 과학을 좋아할 확률은?',
      options: ['3/5', '4/5', '7/10', '9/10', '1'],
      correctIndex: 1,
      explanation:
        '**General Addition Rule (일반 덧셈 규칙)**을 사용합니다.\n\nP(수학 or 과학) = P(수학) + P(과학) - P(수학 and 과학)\n= 120/200 + 80/200 - 40/200\n= (120 + 80 - 40) / 200\n= 160/200\n= **4/5**\n\n겹치는 40명을 빼지 않으면 200/200 = 1이 되어 오답입니다.',
      difficulty: 'medium',
    },

    // ==================== HARD (4 problems) ====================
    {
      id: 'prob-12',
      topicSlug: 'probability',
      question:
        '주머니에 빨간 공 5개, 파란 공 4개, 초록 공 3개가 있습니다. 비복원 추출로 3개를 동시에 꺼낼 때, 3개 모두 같은 색일 확률은?',
      options: ['3/44', '1/11', '12/220', '14/220', '3/22'],
      correctIndex: 0,
      explanation:
        '전체 12개에서 3개를 꺼내는 경우의 수: 12C3 = (12×11×10)/(3×2×1) = 220\n\n**모두 빨간**: 5C3 = 10\n**모두 파란**: 4C3 = 4\n**모두 초록**: 3C3 = 1\n\n이 세 사건은 **Mutually Exclusive (배반)**이므로:\nP(모두 같은 색) = (10 + 4 + 1) / 220 = 15/220 = **3/44**\n\n약분: 15와 220의 최대공약수는 5. 15÷5 = 3, 220÷5 = 44.\n따라서 정답은 3/44입니다.',
      difficulty: 'hard',
    },
    {
      id: 'prob-13',
      topicSlug: 'probability',
      question:
        '어떤 공장의 기계 A는 불량률이 5%, 기계 B는 불량률이 8%입니다. 두 기계가 독립적으로 각각 1개의 제품을 생산할 때, 두 제품 중 정확히 하나만 불량일 확률은?',
      options: ['0.034', '0.004', '0.122', '0.124', '0.130'],
      correctIndex: 2,
      explanation:
        'P(A 불량) = 0.05, P(A 정상) = 0.95\nP(B 불량) = 0.08, P(B 정상) = 0.92\n\n"정확히 하나만 불량"은 두 가지 **배반** 경우입니다:\n\n**경우 1**: A 불량, B 정상 = 0.05 × 0.92 = 0.046\n**경우 2**: A 정상, B 불량 = 0.95 × 0.08 = 0.076\n\nP(정확히 1개 불량) = 0.046 + 0.076 = **0.122**',
      difficulty: 'hard',
    },
    {
      id: 'prob-14',
      topicSlug: 'probability',
      question:
        '10명(여성 6명, 남성 4명) 중 무작위로 3명을 선발할 때, 적어도 1명의 남성이 포함될 확률은?',
      options: ['1/3', '2/3', '5/6', '29/30', '13/15'],
      correctIndex: 2,
      explanation:
        '"적어도 1명 남성" → **여사건** 활용\n\nP(적어도 1명 남성) = 1 - P(남성 0명) = 1 - P(3명 모두 여성)\n\n전체에서 3명 선택: 10C3 = 120\n여성 6명에서 3명 선택: 6C3 = 20\n\nP(3명 모두 여성) = 20/120 = 1/6\n\nP(적어도 1명 남성) = 1 - 1/6 = **5/6**\n\n검증:\n남성 1명 + 여성 2명: 4C1 × 6C2 = 4 × 15 = 60\n남성 2명 + 여성 1명: 4C2 × 6C1 = 6 × 6 = 36\n남성 3명: 4C3 = 4\n합계: 60 + 36 + 4 = 100\nP = 100/120 = 5/6 ✓',
      difficulty: 'hard',
    },
    {
      id: 'prob-15',
      topicSlug: 'probability',
      question:
        '주사위를 3번 던질 때, 3번 중 정확히 2번 6이 나올 확률은?',
      options: ['1/36', '5/72', '5/216', '3/36', '25/216'],
      correctIndex: 1,
      explanation:
        'P(6이 나옴) = 1/6, P(6이 아님) = 5/6\n\n"정확히 2번 6" → 6이 나오는 2번의 위치를 선택해야 합니다.\n\n3번 중 6이 나오는 2번을 선택하는 경우: 3C2 = 3가지\n(1·2번째, 1·3번째, 2·3번째)\n\n각 경우의 확률: (1/6)² × (5/6)¹ = 1/36 × 5/6 = 5/216\n\nP(정확히 2번 6) = 3 × 5/216 = 15/216 = **5/72**\n\n검증: 15/216을 약분하면 15÷3 / 216÷3 = 5/72 ✓',
      difficulty: 'hard',
    },
  ],
};
