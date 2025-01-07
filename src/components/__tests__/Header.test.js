import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import '@testing-library/jest-dom';

it('should load the header component with the login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole('button');

    // Assertion
    expect(loginButton).toBeInTheDocument();
});



it('should change the login button to logout on click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole('button', { name: 'Login' });

    fireEvent.click(loginButton);

    // Now the button should display as Logout
    const logoutButton = screen.getByRole('button', { name: 'Logout' });

    // Assertion
    expect(logoutButton).toBeInTheDocument();
});
