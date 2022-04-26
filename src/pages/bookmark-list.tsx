import React, { useState } from 'react';
import {
  ContentWidget,
  TableWidget,
  Container,
} from '../pagesElements/detail-category';

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

const BookmarkList = () => {
  const [localBooks] = useState<ListBooks[]>(getLocalBooks());

  console.log(localBooks);

  const renderBookList = () => (
    <>
      {localBooks.map((book, i) => (
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
          </ContentWidget>
        </div>
      ))}
    </>
  );

  return (
    <Container>
      {localBooks.length ? (
        renderBookList()
      ) : (
        <h2 style={{ textAlign: 'center' }}>Bookmark kosong</h2>
      )}
    </Container>
  );
};

export default BookmarkList;
