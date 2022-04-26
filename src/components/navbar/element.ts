import styled from 'styled-components';

export const NavWidget = styled.nav<{ isSticky?: boolean }>(({ isSticky }) => {
  return {
    ...{
      height: '5rem',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      boxShadow: '0 3px 6px 0 rgb(0 0 0 / 20%)',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '0 2rem',
      '& > div:first-of-type > img': {
        width: 98,
        height: 44,
        objectFit: 'scale-down',
      },
      '@media screen and (max-width: 600px)': {
        padding: '0 1rem',
      },
    },
    ...(isSticky && {
      position: 'fixed',
      top: 0,
      zIndex: 3,
      width: '100%',
    }),
  };
});

export const NavList = styled.ul({
  display: 'flex',
  listStyle: 'none',
  gap: '2rem',
  fontSize: 12,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '@media screen and (max-width: 600px)': {
    display: 'none',
  },
});

export const List = styled.li({
  cursor: 'pointer',
  position: 'relative',
  color: '#2B46A6',
  verticalAlign: 'middle',
  lineHeight: 2,
  '& > button': {
    backgroundColor: '#1D707A',
    border: 'none',
    padding: '5px 24px',
    borderRadius: 50,
    color: '#FFFFFF',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});

export const BurgerWidget = styled.div({
  width: 40,
  display: 'none',
  '& > img': {
    width: '100%',
    height: '100%',
  },
  '@media screen and (max-width: 600px)': {
    display: 'block',
  },
});
