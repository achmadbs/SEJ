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

const DetailCategory = () => {
  const { state }: any = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValue, setFilterValue] = useState('');
  const [listBooks, setListBooks] = useState<ListBooks[]>([]);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const { data }: { data: ListBooks[] } = await ax.get('./data.json');
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

  const handlePageChange = (e: any) => {
    setCurrentPage(e.selected);
  };

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
            <button>Add to bookmark</button>
          </ContentWidget>
        </div>
      ))}
      <Paginate
        breakLabel="..."
        pageCount={Math.ceil(listBooks.length / 10)}
        pageRangeDisplayed={5}
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default DetailCategory;
