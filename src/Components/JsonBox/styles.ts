import styled from 'styled-components'
import { Colors } from '../../styles'

export const JsonBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    background-color: ${Colors.bg_code};
    border: 1px solid ${Colors.border};
    padding: 6px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 8px;
    width: 100%;

    .file-input {
      display: none;
    }

    .file-label {
      color: ${Colors.text};
      padding: 8px 12px;
      font-size: 14px;
      cursor: pointer;
      border: 1px solid ${Colors.border};
      border-radius: 8px;
      display: inline-flex;
      gap: 6px;
      align-items: center;
      justify-content: end;
      transition: 0.2s ease;

      &:active {
        transform: scale(0.97);
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  .Error {
    color: #ff4d4d;
    font-size: 14px;
    font-weight: 600;
  }
`
