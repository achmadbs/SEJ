import React, { useEffect, useState } from 'react';
import ax from '../service/axiosInstance';
import images from '../assets';
import { Card, Container } from '../pagesElements/home';
import { useNavigate } from 'react-router-dom';

const coverImage = [
  images.mind,
  images.career,
  images.product,
  images.society,
  images.finance,
];

const Home = () => {
  const [listCategories, setListCategories] = useState<
    Record<string, string>[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await ax.get('fee-assessment-categories');
        setListCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Container>
      {listCategories.map((category, i) => (
        <Card
          onClick={() =>
            navigate(`category?categoryId=${category.id}`, {
              state: { categoryId: category.id },
            })
          }
          key={i}>
          <img src={coverImage[i]} alt="cover" />
          <p>{category.name}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Home;
