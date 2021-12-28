import React, {Component} from 'react'
import Staffslist from './components/StaffListComponent'
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap'
import { STAFFS } from './shared/StaffList'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      staffs: STAFFS
    }
  }

  render() {
    return (
      <div className="App">
         <Navbar dark color="primary">
           <div className="container">
              <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
           </div>
         </Navbar>
         <Staffslist 
         staffs={this.state.staffs} 
         
         />
      <div className='container'>
      <h5>Bấm vào tên để xem thông tin</h5>
      </div>
      </div>
    )
  }
}



export default App;
