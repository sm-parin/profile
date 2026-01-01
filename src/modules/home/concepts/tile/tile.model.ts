export interface IProjectTileProps {
  title: string;
  proficiency: TProficiencyMetric;
  children?: React.ReactNode;
}

type TProficiencyMetric = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
