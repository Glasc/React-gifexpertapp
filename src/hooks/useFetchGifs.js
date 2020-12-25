import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    // getGifs(category).then((data) => {
    //   setState({ data: [...data], loading: false });
    // });
    (async () => {
      const responseJSON = await getGifs(category);
      console.log('hey');
      setState({
        data: [...responseJSON],
        loading: false,
      });
    })();
  }, [category]);

  return state;
};

export default useFetchGifs;
