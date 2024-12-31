import { http, HttpResponse } from 'msw';
import { BASE_URL } from '../constants/baseUrl';

export const handlers = [
  http.get(`${BASE_URL}/users`, () => {
    console.log('hello');
    return HttpResponse.json(
      [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ],
      { status: 200 },
    );
  }),

  http.post(`${BASE_URL}/users`, () => {
    return HttpResponse.json(
      {
        message: 'User created successfully',
      },
      { status: 201 },
    );
  }),

  http.put(`${BASE_URL}/users/:id`, ({ params }) => {
    const { id } = params;
    return HttpResponse.json(
      {
        id,
        message: 'User updated successfully',
      },
      { status: 200 },
    );
  }),

  http.delete(`${BASE_URL}/users/:id`, () => {
    return HttpResponse.json(
      {
        message: 'User deleted successfully',
      },
      { status: 200 },
    );
  }),
];
