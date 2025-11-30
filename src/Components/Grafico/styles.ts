import styled from 'styled-components'
import { Colors } from '../../styles'

export const GraficoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    background-color: ${Colors.bg_code};
    border: 1px solid ${Colors.border};
    padding: 16px;
    border-radius: 12px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;

    canvas,
    svg {
      border-radius: 10px;
    }

    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;

      button,
      select {
        color: ${Colors.text};
        padding: 8px 12px;
        font-size: 14px;
        cursor: pointer;
        border: 1px solid ${Colors.border};
        background-color: ${Colors.bg_code};
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
  }
`
