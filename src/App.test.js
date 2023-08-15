import React from 'react';
import App from './App.js'
import {render,screen,fireEvent,wait} from '@testing-library/react';

import fetchMissions  from './api/fetchMissions.js';
// we will  use the jest.mock function to make mocks of the asynchronous functions
// so we won't have to wait for the actual call to be made.

//create mock *before* setting up test
jest.mock('./api/fetchMissions')

test('renders without errors',()=>{
    render( <App />);

})
test('fetches and renders mission data',async()=>{
    render(<App />);
    fetchMissions.mockResolvedValueOnce({
        data:[
            {mission_name:"Mission 1",mission_id:"mission 1"},
            { mission_name: "Mission 2", mission_id: "mission 2" },
            
        ]
    })
    const button=screen.getByRole('button')
    fireEvent.click(button)
    await wait()
    expect(screen.getAllByTestId("mission")).toHaveLength(2)


})