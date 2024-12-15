import React from "react";
import { RetreatScheduleProps } from "./types";
import { Container, DaySchedule, DayTitle, ActivitiesList, ActivityItem } from "./styles";  // Import styled components

const RetreatSchedule: React.FC<RetreatScheduleProps> = ({ title, text, days, id }) => {
  return (
    <Container id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
      
      {days.map((day, index) => (
        <DaySchedule key={index}>
          <DayTitle>{day.day}</DayTitle>
          <ActivitiesList>
            {day.activities.map((activity, activityIndex) => (
              <ActivityItem key={activityIndex}>{activity}</ActivityItem>
            ))}
          </ActivitiesList>
        </DaySchedule>
      ))}
    </Container>
  );
};

export default RetreatSchedule;