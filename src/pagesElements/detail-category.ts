import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Container = styled.div({
  padding: '2.5rem 5rem',
  '& > div:nth-child(1)': {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem',
    '& > input': {
      width: '400px',
      height: '2rem',
      borderRadius: 8,
      paddingLeft: 10,
      border: '1px solid',
    },
  },
  '& > div:nth-child(n+2)': {
    display: 'flex',
    gap: '3rem',
    marginBottom: '1rem',
  },
  '& > div > div > img': {
    height: '25rem',
  },
  '@media screen and (max-width: 600px)': {
    padding: '1rem 2rem',
    '& > div:nth-child(n+2)': {
      display: 'grid',
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      gap: '2rem',
    },
  },
});

export const ContentWidget = styled.div({
  button: {
    cursor: 'pointer',
  },
  '& > h4': {
    position: 'relative',
    margin: 0,
    width: 'max-content',
    ':after': {
      content: '""',
      position: 'absolute',
      bottom: '-0.625rem',
      left: '0',
      right: '0',
      border: '1px solid #2B46A6',
    },
  },
});

export const TableWidget = styled.div({
  display: 'flex',
  marginTop: '1rem',
  ul: {
    padding: 0,
    margin: 0,
  },
  '& > table': {
    borderSpacing: '0 1rem',
  },
  '& > table > tr > th': {
    width: '200px',
    textAlign: 'start',
    verticalAlign: 'top',
  },
});

export const Paginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  gap: 1rem;
  padding: 0 5rem;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
