import styled from "styled-components";
import { Colors } from "../../styles";

export const JsonBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input[type="file"] {
    cursor: pointer;
  }

  .TextBox {
    background-color: ${Colors.bg_code};
    border: 1px solid ${Colors.border};
    width: 100%;
    height: 200px;
    resize: none;
    padding: 8px;
    font-family: monospace;
    font-size: 14px;
    color: ${Colors.text};
  }

  .Error {
    color: #ff4d4d;
    font-size: 14px;
    font-weight: 600;
  }
`;
