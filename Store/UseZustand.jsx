import {create} from 'zustand'

export const UseZustand=create((set)=>({
    Mode:false,
    Place:"",
    Date:"",
    SelectedCount:0,
    arr:[false,false,false,false,false],
    ResetCount:false,
    SetMode:(mode)=>set({Mode:mode}),
    SetPlace:(place)=>set({Place:place}),
    SetDate:(date)=>set({Date:date}),   
    SetSelectedCount:(count)=>set({SelectedCount:count}),
    Setarr:(index)=>set((state)=>state.arr.map((item,i)=>(i==index?!item:item))),
    SetResetCount:(val)=>set({ResetCount:val}),
    ResetArr:()=>set({arr:[false,false,false,false,false]})

}))

