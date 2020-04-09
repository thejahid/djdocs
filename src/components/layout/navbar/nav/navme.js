import React from "react"
import Navitem from "./navitem"

const Navme = () => {
    return(
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Developer Jahid</div>
            <div className="list-group list-group-flush">
                <Navitem name="Dashboard" to="#" />
                <Navitem name="Option 1" to="#" />
                <Navitem name="Option 2" to="#" />
            </div>
        </div>
    )
}

export default Navme
