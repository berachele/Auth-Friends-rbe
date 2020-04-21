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
            })
            .catch(err => {
                console.log({err})
            })
    }
    render(){
        return(
            <div className="friends-wrapper">
                <header>
                    <h1>F R I E N D S !</h1>
                </header>
                <p>List of friends here</p>
            </div>
        )
    }
}

export default Friends