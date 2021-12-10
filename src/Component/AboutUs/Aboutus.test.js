import {render, screen} from '@testing-library/react'
import AboutUs from './AboutUs'

test("if About Us exist", () => {
    render(<AboutUs/>)
    const headerElement = screen.getByText(/About Us/i)
    expect(headerElement).toBeInTheDocument();
})