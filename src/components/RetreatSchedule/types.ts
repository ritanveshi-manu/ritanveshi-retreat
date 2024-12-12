// src/components/RetreatSchedule/types.ts
export interface Day {
    day: string;
    activities: string[];
  }
  
  export interface RetreatScheduleProps {
    title: string;
    text: string;
    days: Day[];
    id: string;
  }
  