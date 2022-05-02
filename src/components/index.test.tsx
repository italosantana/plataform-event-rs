import React from 'react';
import { render, screen } from '@testing-library/react';
import { BookList } from './index';

test('renders dom casmurro text', () => {

    render(<BookList />);

    const book = screen.getByRole('h1');

    expect(book).toHaveAttribute('h1', 'Dom Casmurro Capa comum');
});
