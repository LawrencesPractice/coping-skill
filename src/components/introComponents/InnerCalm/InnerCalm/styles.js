import styled from 'styled-components';

export const Header1 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 40px;
width: 100%;
height: min-content;
align-items: center;
padding: 56px 10%;
background-color: #fff;
overflow: hidden;
`;
export const Content = styled.div`
display: grid;
grid-gap: 12px;
height: min-content;
align-items: start;
justify-items: start;
`;

export const SectionTitle = styled.div`
  height: min-content;
  align-self: stretch;
  flex-direction: column;
  gap: 12px;
`;

export const FindYourInnerCalmToday = styled.div`
  color: #000;
  font-size: 38px;
  line-height: 120%;
  font-weight: bold;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  height: min-content;
  align-self: stretch;
  flex-direction: column;
padding-bottom: 20px
`;

export const MindspaceSGuidedMeditationsCan = styled.div`
  color: #000;
  font-size: 16px;
  line-height: 150%;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  height: min-content;
  align-self: stretch;
  flex-direction: column;
  padding-bottom: 10px

`;

export const Actions = styled.div`
  width: min-content;
  height: min-content;
  align-items: center;
  gap: 8px;
  padding: 8px 0 0;
  display: flex;

`;

export const Button3 = styled.button`
  width: min-content;
  height: min-content;
  padding: 6px 12px;
  outline: solid 0.5px #000;
  background-color: #000;
`;

export const GetStarted2 = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 150%;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  flex-direction: column;
`;

export const Button4 = styled.button`
  width: min-content;
  height: min-content;
  padding: 6px 12px;
  outline: solid 0.5px #000;
`;

export const LearnMore = styled.div`
  color: #000;
  font-size: 18px;
  line-height: 150%;
  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  flex-direction: column;
`;

export const PlaceholderImage = styled.div`
  height: 520px;
  flex: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  img{
    height: 520px;
width: auto;
  }
`;