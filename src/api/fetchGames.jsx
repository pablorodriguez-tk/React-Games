import axios from 'axios';

export const fetchGames = async () => {
  try {
    const { data } = await axios.get(
      'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
