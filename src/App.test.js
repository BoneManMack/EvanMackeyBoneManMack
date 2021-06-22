import { render, screen } from '@testing-library/react';
import BoneManMack from './BoneManMack';

test('renders learn react link', () => {
  render(<BoneManMack />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
