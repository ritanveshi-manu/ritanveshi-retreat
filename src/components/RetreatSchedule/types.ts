export interface Activity {
  startTime: string;
  duration: string;
  activity: string;
}

export interface Day {
  day: string;
  activities: Activity[];
}

export interface RetreatScheduleProps {
  title: string;
  text: string;
  days: Day[];
  id: string;
}