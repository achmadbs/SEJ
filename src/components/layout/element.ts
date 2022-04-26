import styled from 'styled-components';

export const LayoutWidget = styled.div<{ isShowSideBar: boolean }>(
  ({ isShowSideBar }) => ({
    display: 'flex',
    position: 'relative',
    overflowY: 'hidden',
    ...(isShowSideBar && {
      height: '100vh',
    }),
  })
);
