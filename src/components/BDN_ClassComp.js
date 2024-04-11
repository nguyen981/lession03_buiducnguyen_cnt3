import React, { Component } from 'react'

export default class BDN_ClassComp extends Component {
    constructor(props){
        super(props);
        // tao doi tuong du lieu
        this.state= {
            firsName:"Bùi",
            lastName:"Nguyên",
            userName:"k22cnt3"
        }
    }
    // arrow function
    Member = ()=>{
        return(
            <div className='alert alert-success'>
                <h3>Xin chao: {this.props.fullName} - Bạn đã {this.props.age} tuổi.</h3>
            </div>
        );
    }
    ListMember =()=>{
        return (
            <>
            <this.Member fullName="Nguyễn Văn A" age="20" />
            <this.Member fullName="Nguyễn Văn B" age="24 " />
            <this.Member fullName="Nguyễn Văn C" age="22 " />
            <this.Member fullName="Nguyễn Văn D" age="27 " />
            </>
        )
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Class Component Demo</h2>
        <hr/>
        <h3>Du lieu trong state</h3>
        <h3>Xin Chao: {this.state.firstName} {this.state.lastName} </h3>
        <hr/>
        <h3> du lieu tu props </h3>
        <p> Company: {this.props.company}</p>
        <p> Course: {this.props.course}</p>

        <hr/>
        <this.Member fullName="Bùi Đức Nguyên" age="20"/>
        <hr/>
        {/*this.ListMember */}
        <this.ListMember />
      </div>
    )
  }
}
