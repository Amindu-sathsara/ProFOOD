import { act, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/resLIstMockData.json"
import { BrowserRouter } from "react-router-dom"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the body component with search",async()=>{
    await act(async()=>{
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>)
    })

    //Let's assert someething
    //const searchBtn=screen.getByRole("button" ,{name:"search"});
    //console.log(searchBtn);
    //expect(searchBtn).toBeInTheDocument();

    
})