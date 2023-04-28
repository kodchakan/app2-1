import React from 'react' 

export default class Calendar extends React.Component{ 
    getDate(){
        const dayNames = ['อาทิตย์', 'จันนท์', 'อังคาร์', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
        const monthName = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 
        'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
        
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthName[date.getMonth()]
        const year = date.getFullYear() + 543
        const dayThai = `วัน${weekDay} ที่ ${day} ${month} ${year}`
        return dayThai
    }
    render(){
        return(
            <div style={{textAlign:'center'}}>{this.getDate()}</div>
            //<div>this is my class component</div>
        )
    }
}

