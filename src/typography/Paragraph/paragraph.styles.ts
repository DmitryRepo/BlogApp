import styled from 'styled-components';

export type ParagraphStyles = object;

export const StyledParagraph = styled.p<ParagraphStyles>`
  font-size: 12px;
  line-height: 22px;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;
