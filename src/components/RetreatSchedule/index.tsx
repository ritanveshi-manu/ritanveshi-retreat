import React, { useState } from "react";
import { RetreatScheduleProps } from "./types";
import {
  ScheduleSection,
  ScheduleItemWrapper,
  DayTitle,
  ActivitiesList,
  ScheduleTitle,
  IconWrapper,
  ScheduleListWrapper,
} from "./styles"; // Import styled components
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons

const RetreatSchedule: React.FC<RetreatScheduleProps> = ({ title, text, days, id }) => {
  const [expandedDays, setExpandedDays] = useState<boolean[]>(new Array(days.length).fill(false));

  const toggleExpand = (index: number) => {
    const newExpandedDays = [...expandedDays];
    newExpandedDays[index] = !newExpandedDays[index];
    setExpandedDays(newExpandedDays);
  };

  return (
    <ScheduleSection id={id}>
      <ScheduleTitle>{title}</ScheduleTitle>
      <p>{text}</p>

      <ScheduleListWrapper>
        {days.map((day, index) => (
          <ScheduleItemWrapper key={index}>
            <DayTitle onClick={() => toggleExpand(index)}>
              {day.day}
              <IconWrapper>
                {expandedDays[index] ? <FaChevronUp /> : <FaChevronDown />}
              </IconWrapper>
            </DayTitle>
            {expandedDays[index] && (
              <ActivitiesList>
                <table>
                  <thead>
                    <tr>
                      <th>Start Time</th>
                      <th>Schedule</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.activities.map((activity, activityIndex) => (
                      <tr key={activityIndex}>
                        <td>{activity.startTime}</td>
                        <td>{activity.duration}</td>
                        <td>{activity.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ActivitiesList>
            )}
          </ScheduleItemWrapper>
        ))}
      </ScheduleListWrapper>
    </ScheduleSection>
  );
};

export default RetreatSchedule;