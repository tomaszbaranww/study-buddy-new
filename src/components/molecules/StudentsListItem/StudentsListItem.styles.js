import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1%;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledAvarage = styled.div`
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  width: 35px;
  height: 35px;
`;

export const StyledNameAndAttendance = styled.div`
  margin: 0 10px;
  padding: 30px 10px;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0;
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
