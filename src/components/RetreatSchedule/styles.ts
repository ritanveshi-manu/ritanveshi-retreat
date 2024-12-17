import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 20px;
  background-color: #E9F2FF;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

export const DaySchedule = styled.div`
  margin-bottom: 20px;
`;

export const DayTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #09326C;
  text-align: center; /* Center the day title */
`;

export const ActivitiesList = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd; /* Add border for the table */
`;

export const TableHeader = styled.th`
  background-color: #5E4DB2;
  color: #fff;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd; /* Add border for column separations */
`;

export const ActivityItem = styled.tr`
  border-bottom: 1px solid #ddd;
  background-color: ${({ index }: { index: number }) => (index % 2 === 0 ? '#F3F0FF' : '#DFD8FD')};
`;

export const ActivityTime = styled.td`
  padding: 10px;
  font-size: 1rem;
  color: #555;
  width: 20%;
  text-align: left;
  border: 1px solid #ddd; /* Add border for column separations */
`;

export const ActivityDuration = styled.td`
  padding: 10px;
  font-size: 1rem;
  color: #555;
  width: 20%;
  text-align: left;
  border: 1px solid #ddd; /* Add border for column separations */
`;

export const ActivityDescription = styled.td`
  padding: 10px;
  font-size: 1rem;
  color: #555;
  width: 60%;
  text-align: left;
  border: 1px solid #ddd; /* Add border for column separations */
`;