import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"

class AddFriend extends React.Component {
    state= {
        buddy: {
            id: "",
            name:"",
            age:"",
            email:""
        }
    }


    handleChange = e => {
        this.setState({
            buddy: {
                ...this.state.buddy,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = (e, props) => {
        e.preventDefault()
        axiosWithAuth()
            .post("/api/friends", this.state.buddy)
            .then(res => {
                console.log({res})
                //res.data
                this.setState({
                    buddy:{
                        ...this.state.buddy,
                        // friends: res.data Pass in props? to get friends [] ?
                        // id: res.data.length
                    }
                })
            })
            .catch(err => {
                console.log("Error in AddFriend", err)
            })
    }

    render(){
        return(
            <form onSubmit={this.addFriend}>
                <h2>Have a new friend? Add them here!</h2>
                <input 
                text="type"
                name="name"
                placeholder="Name"
                value={this.state.buddy.name}
                onChange={this.handleChange}
                /> &nbsp;
                <input 
                text="type"
                name="age"
                placeholder="Age"
                value={this.state.buddy.age}
                onChange={this.handleChange}
                /> &nbsp;
                <input 
                text="type"
                name="email"
                placeholder="Email"
                value={this.state.buddy.email}
                onChange={this.handleChange}
                /> &nbsp;
                <button>Add friend</button>
            </form>
        )
    }
}

export default AddFriend