import React from "react";
import { RetreatScheduleProps } from "./types";
import { Container, DaySchedule, DayTitle, ActivitiesList, TableHeader, ActivityItem, ActivityTime, ActivityDuration, ActivityDescription } from "./styles";  // Import styled components

const RetreatSchedule: React.FC<RetreatScheduleProps> = ({ title, text, days, id }) => {
  return (
    <Container id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
      
      {days.map((day, index) => (
        <DaySchedule key={index}>
          <DayTitle>{day.day}</DayTitle>
          <ActivitiesList>
            <thead>
              <tr>
                <TableHeader>Start Time</TableHeader>
                <TableHeader>Schedule</TableHeader>
                <TableHeader>Activity</TableHeader>
              </tr>
            </thead>
            <tbody>
              {day.activities.map((activity, activityIndex) => (
                <ActivityItem key={activityIndex} index={activityIndex}>
                  <ActivityTime>{activity.startTime}</ActivityTime>
                  <ActivityDuration>{activity.duration}</ActivityDuration>
                  <ActivityDescription>{activity.activity}</ActivityDescription>
                </ActivityItem>
              ))}
            </tbody>
          </ActivitiesList>
        </DaySchedule>
      ))}
    </Container>
  );
};

export default RetreatSchedule;