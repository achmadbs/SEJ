import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ContentWidget,
  TableWidget,
  Container,
  Paginate,
} from '../pagesElements/detail-category';
import ax from '../service/axiosInstance';

interface ListBooks {
  id: number;
  title: string;
  category_id: number;
  authors: string[];
  cover_url: string;
  description: string;
  sections: Record<string, string>[];
  audio_length: number;
}

const getLocalBooks = () => {
  return JSON.parse(localStorage.getItem('books') || '[]');
};

const DetailCategory = () => {
  const { state }: any = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValue, setFilterValue] = useState('');
  const [listBooks, setListBooks] = useState<ListBooks[]>([]);
  const [localBooks, setLocalBooks] = useState<ListBooks[]>(getLocalBooks());

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const { data }: { data: ListBooks[] } = await ax.get(
          `fee-assessment-books?categoryId=${state.categoryId}&page=${
            currentPage + 1
          }&size=10`
        );
        setListBooks(
          data.filter(
            ({ title }) =>
              title.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryDetails();
  }, [state.categoryId, currentPage, filterValue]);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(localBooks));
  }, [localBooks]);

  const handleSaveToLocal = (books: ListBooks) => {
    setLocalBooks([...localBooks, books]);
    alert('berhasil di tambahkan ke bookmark');
  };

  const handlePageChange = (e: any) => {
    setCurrentPage(e.selected);
  };

  const renderBookList = () => (
    <>
      {listBooks.map((book, i) => (
        <div key={i}>
          <div>
            <img src={book.cover_url} alt="book-cover" />
          </div>
          <ContentWidget>
            <h4>{book.title}</h4>
            <TableWidget>
              <table>
                <tr>
                  <th>Authors</th>
                  <td>
                    <ul>
                      {book.authors.map((value, i) => (
                        <li key={i}>{value}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Total Chapter</th>
                  <td>{`${book.sections.length} chapter`}</td>
                </tr>
                <tr>
                  <th>Total Minutes</th>
                  <td>{`${Math.ceil(book.audio_length / 60)} minutes`}</td>
                </tr>
                <tr>
                  <th>What's it about</th>
                  <td>{book.description}</td>
                </tr>
                <tr>
                  <th>What's inside</th>
                  <td>
                    <ul>
                      {book.sections.map((section, i) => (
                        <li key={i}>{section.title}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </table>
            </TableWidget>
            <button onClick={() => handleSaveToLocal(book)}>
              Add to bookmark
            </button>
          </ContentWidget>
        </div>
      ))}
      <Paginate
        breakLabel="..."
        pageCount={100}
        pageRangeDisplayed={5}
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageChange}
      />
    </>
  );

  return (
    <Container>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={filterValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFilterValue(e.target.value)
          }
        />
      </div>
      {listBooks.length ? (
        renderBookList()
      ) : (
        <h2 style={{ textAlign: 'center' }}>No Item</h2>
      )}
    </Container>
  );
};

export default DetailCategory;
