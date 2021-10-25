import styled from '@emotion/styled'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
  max-width: 70rem;

  @media (max-width: 78em) {
    margin-left: 5vh;
    margin-right: 5vh;
  }
  @media (max-width: 40em) {
    margin-left: 2vh;
    margin-right: 2vh;
  }
`
export const Button = styled.a`
  cursor: pointer;
  background-color: var(--primary);
  border-radius: 2em;
  padding: 0.3em 1em;
  color: white;
  display: block;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`