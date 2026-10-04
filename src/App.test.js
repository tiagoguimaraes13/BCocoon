import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('./components/NavBar/NavBar', () => { const {Link} = require('react-router-dom'); return {NavBar: () => <nav><Link to="/store">Store</Link><Link to="/cart">Basket</Link></nav>}; });
jest.mock('./components/Store/Store', () => ({Store: ({addToCart}) => <><button onClick={() => addToCart({id:1,name:'Bloomers',price:46,selectedSize:'Small',selectedColor:'Cream'})}>Add small</button><button onClick={() => addToCart({id:1,name:'Bloomers',price:46,selectedSize:'Large',selectedColor:'Cream'})}>Add large</button></>}));
jest.mock('framer-motion', () => ({AnimatePresence: ({children}) => <>{children}</>, motion:{div: ({children}) => <div>{children}</div>}}));

function openStore() { render(<MemoryRouter initialEntries={['/store']}><App /></MemoryRouter>); }
test('repeated matching options merge into one basket line and quantities total correctly', () => {
  openStore(); fireEvent.click(screen.getByText('Add small')); fireEvent.click(screen.getByText('Add small')); fireEvent.click(screen.getAllByRole('link',{name:'Basket'})[0]);
  expect(screen.getAllByRole('heading',{name:'Bloomers'})).toHaveLength(1);
  expect(screen.getByLabelText('Quantity')).toHaveTextContent('2');
  fireEvent.click(screen.getByRole('button',{name:'Decrease quantity of Bloomers'}));
  expect(screen.getByLabelText('Quantity')).toHaveTextContent('1');
  fireEvent.click(screen.getByRole('button',{name:'Preview order'}));
  expect(screen.getByRole('status')).toHaveTextContent('1 items · €46.00');
  expect(screen.queryByLabelText(/card number/i)).not.toBeInTheDocument();
});
test('different sizes remain separate and removing one preserves the other', () => {
  openStore(); fireEvent.click(screen.getByText('Add small')); fireEvent.click(screen.getByText('Add large')); fireEvent.click(screen.getAllByRole('link',{name:'Basket'})[0]);
  expect(screen.getAllByRole('heading',{name:'Bloomers'})).toHaveLength(2);
  fireEvent.click(screen.getAllByRole('button',{name:'Remove Bloomers'})[0]);
  expect(screen.getAllByRole('heading',{name:'Bloomers'})).toHaveLength(1);
  expect(screen.getByText('Large · Cream')).toBeInTheDocument();
});
test('decreasing the last item to zero shows the empty state without checkout', () => {
  openStore(); fireEvent.click(screen.getByText('Add small')); fireEvent.click(screen.getAllByRole('link',{name:'Basket'})[0]);
  fireEvent.click(screen.getByRole('button',{name:'Decrease quantity of Bloomers'}));
  expect(screen.getByText('Your basket is empty.')).toBeInTheDocument();
  expect(screen.queryByRole('button',{name:'Preview order'})).not.toBeInTheDocument();
});
