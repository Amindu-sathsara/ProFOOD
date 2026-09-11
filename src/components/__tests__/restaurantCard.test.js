import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json'
it('should render the restaurant card component with props data ',()=>{
    render(<RestaurantCard  resData={MOCK_DATA}/>) 

    const name =screen.getByText('Beats Flex Wireless Earphones');

    //Assertion is goes here 
    expect(name).toBeInTheDocument();
    

})