import styled from 'styled-components';

export const Container = styled.div<{ isShowSideBar: boolean }>(
  ({ isShowSideBar }) => ({
    width: 0,
    overflow: 'hidden',
    backgroundColor: '#FFFAFA',
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    transition: 'all 0.4s ease-in-out',
    ...(isShowSideBar && {
      width: '100%',
    }),
  })
);

export const ButtonWidget = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  '& > button': {
    cursor: 'pointer',
    width: '2.5rem',
    height: '2.5rem',
    border: 'none',
    backgroundColor: 'transparent',
    '& > img': {
      width: '100%',
      height: '100%',
    },
  },
});

export const ListWrapper = styled.div({
  textAlign: 'center',
  padding: '0 2rem',
  '& > ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    '& > li > a > button': {
      backgroundColor: '#1D707A',
      border: 'none',
      padding: '5px 24px',
      borderRadius: 50,
      color: '#FFFFFF',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '1.5rem',
    },
    '& > li > div': {
      borderBottom: '1px solid',
      lineHeight: '3rem',
      verticalAlign: 'middle',
    },
  },
});
