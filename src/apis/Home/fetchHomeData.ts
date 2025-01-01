import { BASE_URL } from '../../constants/baseUrl';

type FetchHomeDataRequestType = {
  // Define request type here
};

type FetchHomeDataResponseType = {
  // Define response type here
};

const fetchHomeData = async (
  params: FetchHomeDataRequestType,
): Promise<FetchHomeDataResponseType> => {
  try {
    const queryParams = new URLSearchParams(
      params as Record<string, string>,
    ).toString();
    const response = await fetch(`${BASE_URL}/data?queryParams`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: FetchHomeDataResponseType = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
