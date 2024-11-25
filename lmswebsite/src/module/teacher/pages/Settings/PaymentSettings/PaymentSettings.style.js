// src/PaymentSettings/style.js
import styled from "styled-components"; // Ensure this line is included

export const Container = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    overflow-x: auto; /* Enable horizontal scrolling */
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    min-width: 600px; /* Set a minimum width for the table to enable scrolling */
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  font-weight: bold;
  padding: 10px;
  border-bottom: 2px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const ExportButton = styled.button`
  background-color: #fa5a7d;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #e0004c;
  }
`;

