import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import Counter from '../components/Counter';

// Cleanup unmounts everything in the dom, giving us a clean slate
afterEach(cleanup);

// Change test name to "<Component /> with ..." when props is passed"
test('<Counter />', () => {
    // const wrapper = render(<Counter />);
    const { debug, getByTestId, queryByTestId, container, getByText } = render(<Counter />);

    // queryBy... versus getBy...; queryBy says it might exist, getBy means it must exist, or it will break

    // debug();    // Outputs dom as string
    const counterButton = getByTestId('counter-button');

    // console.log(wrapper.getByText('0').tagName);

    // Assets counter-button is a button
    expect(counterButton.tagName).toBe('BUTTON');
    // Assets counter-button starts at 0
    expect(counterButton.textContent).toBe('0');

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1');

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2');

})
