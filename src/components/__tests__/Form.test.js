import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Form from '../Form';

afterEach(() => {
    cleanup();
});

test('should render form component', () => {
    render(<Form />);
    const formElement = screen.getByTestId('form');
    expect(formElement).toBeInTheDocument();
    expect(formElement).toHaveTextContent('search for a book');
})

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
})

// snapshot testing
it('matches snapshot', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
})

