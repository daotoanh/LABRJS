import React from 'react'
import { Card, CardImg, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'



function RenderStaffList({ staff, onClick }) {
    return (
        <Card>
            <Link to={`/staffs/${staff.id}`} >
            <CardImg src={staff.image} alt={staff.name} />
            </Link>
            <CardTitle className='center'>{staff.name}</CardTitle>
            
        </Card>
    )
}

const StaffList = (props) => {
    const staffList = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-lg-2 col-md-4  col-12">
                 <RenderStaffList staff={staff} />
            </div>
        )
    })

    return (
        
        <div className="container">
            <div className="row">
            <h3>Nhân viên</h3> 
              {staffList}
              </div>

        </div>
    )
}





export default StaffList