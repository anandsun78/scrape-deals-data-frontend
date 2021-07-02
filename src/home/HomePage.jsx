import React from 'react';
import { CardColumns } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

import useDeals from '../apicalls/useDeals';
import Spinner from '../common/Spinner';
import CardDisplay from './CardDisplay';
import config from '../properties/config';

const HomePage = (props) => {
  const { data, error, loading } = useDeals();
  const handleClick = async (item) => {
    toast.success('Removed the Object');
    await axios.get(`${config.redflagUrl}/deal/${item._id}`);
  };

  return (
    <div>
      {loading && !error ? (
        <Spinner />
      ) : (
        <CardColumns>
          {data.map((single, index) => {
            return (
              <CardDisplay
                handleClick={handleClick}
                single={single}
                key={index}
              />
            );
          })}
        </CardColumns>
      )}
    </div>
  );
};

export default HomePage;
