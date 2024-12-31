import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.example.com/api/users', () => {
    return HttpResponse.json(
      [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ],
      { status: 200 },
    );
  }),

  http.post('https://api.example.com/api/users', () => {
    return HttpResponse.json(
      {
        message: 'User created successfully',
      },
      { status: 201 },
    );
  }),

  http.put('https://api.example.com/api/users/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json(
      {
        id,
        message: 'User updated successfully',
      },
      { status: 200 },
    );
  }),

  http.delete('https://api.example.com/api/users/:id', () => {
    return HttpResponse.json(
      {
        message: 'User deleted successfully',
      },
      { status: 200 },
    );
  }),
];
