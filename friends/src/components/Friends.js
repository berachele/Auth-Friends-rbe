import React from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log({res})
                //res.data
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => {
                console.log("Error in Friends", err)
            })
    }

    render(){
        return(
            <div className="friends-wrapper">
                <header>
                    <h1>F R I E N D S !</h1>
                </header>
                {this.state.friends.map(friend => {
                    return <h3>{friend.name}</h3>
                })}
            </div>
        )
    }
}

export default Friends