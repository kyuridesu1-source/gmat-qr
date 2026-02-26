/**
 * 무료로 열람 가능한 토픽 10개.
 * 나머지 15개는 Google 로그인 후 이용 가능.
 *
 * TODO: 유저가 직접 10개를 선택하면 여기서 수정
 */
export const FREE_TOPIC_SLUGS = new Set<string>([
  // Arithmetic (2)
  'prime-numbers',
  'fractions-decimals-percents',
  // Algebra (2)
  'linear-equations',
  'inequalities',
  // Word Problems (2)
  'rate-time-distance',
  'work-problems',
  // Geometry (2)
  'lines-angles',
  'triangles',
  // Data (1)
  'data-interpretation-basics',
  // Bonus (1)
  'ratios-proportions',
]);

export function isFreeTopic(slug: string): boolean {
  return FREE_TOPIC_SLUGS.has(slug);
}
