import React from "react"
import MissionsList from "./MissionsList"
import {render,screen} from '@testing-library/react'


const missions=[
    { mission_name: 'Thaicom', mission_id: '9D1B7E0'},
    { mission_name: 'Telstar', mission_id: 'F4F83DE'}
]

test('missions list shows data when rerender with new missions data',()=>{
    const {rerender}=render(<MissionsList error="" missions={[]} />)
    let missionsObjects=screen.queryAllByTestId('mission')
    expect(missionsObjects).toHaveLength(0);
    rerender(< MissionsList error = "" missions = { missions} />)
    missionsObjects = screen.queryAllByTestId('mission')
    expect(missionsObjects).toHaveLength(2);
})