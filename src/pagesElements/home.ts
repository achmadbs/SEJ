import styled from 'styled-components';

export const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  padding: '3rem 2rem',
  '@media screen and (max-width: 600px)': {
    gridTemplateColumns: '1fr',
    rowGap: '3rem',
  },
});

export const Card = styled.div({
  height: '15rem',
  textAlign: 'center',
  border: '1px solid',
  borderRadius: 20,
  padding: 8,
  boxShadow: '3px 3px 5px 2px rgb(0 0 0 / 20%)',
  cursor: 'pointer',
  '& > img': {
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
    transition: 'all 0.8s ease',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  '& > p': {
    marginTop: 14,
  },
});
