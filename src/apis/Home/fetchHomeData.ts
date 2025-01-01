import { BASE_URL } from '../../constants/baseUrl';

export type FetchHomeDataResponseType = {
  id: number;
  name: string;
};

export const fetchHomeData = async (): Promise<FetchHomeDataResponseType> => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();

  if (!response.ok) {
    console.log('Error response:', data);
    throw new Error(data.error || 'Network response was not ok');
  }

  return data as FetchHomeDataResponseType;
};
