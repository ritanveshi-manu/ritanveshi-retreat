import styled from "styled-components";
import { Row } from "antd";

// General container for the schedule section
export const ScheduleSection = styled.section`
  position: relative;
  padding: 50px 20px;
  background-color: #9DD9EE;
  margin: 4rem 0; /* Add top and bottom margin */
  border-radius: 10px;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
    margin: 2rem 0; /* Adjust margin for smaller screens */
  }
`;

// Title for the schedule section
export const ScheduleTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

// Wrapper for each schedule item (day and activities)
export const ScheduleItemWrapper = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #E7F9FF;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

// The clickable day title styling
export const DayTitle = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
  color: #09326C;
  background-color: #E7F9FF; /* Updated color */
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #D1F2FF;
    color: #AE4787;
  }
`;

// The activities list styling
export const ActivitiesList = styled.div`
  padding: 1.2rem;
  font-size: 1rem;
  color: #555;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 1rem;
  transition: max-height 0.3s ease;

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th {
    background-color: #09326C; /* Header background color */
    color: #fff; /* Header text color */
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #E7F9FF; /* Alternate row color */
  }

  tr:nth-child(odd) {
    background-color: #fff; /* Alternate row color */
  }

  td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    vertical-align: top; /* Align text to the top */
  }

  td:nth-child(1) {
    width: 15%; /* Set width for the first column */
  }

  td:nth-child(2) {
    width: 15%; /* Set width for the second column */
  }

  td:nth-child(3) {
    width: 70%; /* Set width for the third column */
    word-wrap: break-word; /* Wrap text for the description column */
  }
`;

// Icon wrapper for the expand/collapse icons
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// A container for the schedule list wrapper if you need a specific width
export const ScheduleListWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;