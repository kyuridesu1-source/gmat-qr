import { Topic } from '../types';

// Arithmetic
import { primeNumbersTopic } from './prime-numbers';
import { integersNumberPropertiesTopic } from './integers-number-properties';
import { fractionsDecimalsPercentsTopic } from './fractions-decimals-percents';
import { ratiosProportionsTopic } from './ratios-proportions';
import { powersRootsTopic } from './powers-roots';
import { absoluteValueTopic } from './absolute-value';

// Algebra
import { linearEquationsTopic } from './linear-equations';
import { inequalitiesTopic } from './inequalities';
import { quadraticEquationsTopic } from './quadratic-equations';
import { functionsTopic } from './functions';
import { sequencesTopic } from './sequences';

// Word Problems
import { rateTimeDistanceTopic } from './rate-time-distance';
import { workProblemsTopic } from './work-problems';
import { mixtureProblemsTopic } from './mixture-problems';
import { profitLossTopic } from './profit-loss';
import { statisticsTopic } from './statistics';
import { probabilityTopic } from './probability';
import { combinatoricsTopic } from './combinatorics';

// Geometry
import { linesAnglesTopic } from './lines-angles';
import { trianglesTopic } from './triangles';
import { quadrilateralsPolygonsTopic } from './quadrilaterals-polygons';
import { circlesTopic } from './circles';
import { coordinateGeometryTopic } from './coordinate-geometry';
import { threeDGeometryTopic } from './3d-geometry';

// Data Interpretation
import { dataInterpretationTopic } from './data-interpretation-basics';

export const ALL_TOPICS: Topic[] = [
  // Arithmetic
  primeNumbersTopic,
  integersNumberPropertiesTopic,
  fractionsDecimalsPercentsTopic,
  ratiosProportionsTopic,
  powersRootsTopic,
  absoluteValueTopic,
  // Algebra
  linearEquationsTopic,
  inequalitiesTopic,
  quadraticEquationsTopic,
  functionsTopic,
  sequencesTopic,
  // Word Problems
  rateTimeDistanceTopic,
  workProblemsTopic,
  mixtureProblemsTopic,
  profitLossTopic,
  statisticsTopic,
  probabilityTopic,
  combinatoricsTopic,
  // Geometry
  linesAnglesTopic,
  trianglesTopic,
  quadrilateralsPolygonsTopic,
  circlesTopic,
  coordinateGeometryTopic,
  threeDGeometryTopic,
  // Data Interpretation
  dataInterpretationTopic,
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return ALL_TOPICS.find((t) => t.slug === slug);
}

export function getTopicsByCategory(category: string): Topic[] {
  return ALL_TOPICS.filter((t) => t.category === category);
}
