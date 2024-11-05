import React from "react";

class InfoClass extends React.Component
{
    constructor(props)
    {
        super(props);

        console.log(this.props.index + "Child constructor");

        // State variable in Class Based component
        this.state = {
            count : 1,
            count2 : 2,
        }

    }

    componentDidMount()
    {
        console.log(this.props.index + "Child component Did Mount");
    }

    render()
    {
        console.log(this.props.index + "Child Render");
        return (
        <div className="about-info-card">
            <h2>Count : {this.state.count}</h2>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1,
                    // count2 : this.state.count2 + 1,   
                })
            }}>Increase Count</button>
            <h5>Name : {this.props.name}</h5>
            <h5>Mobile No : 9078567890</h5>
            <h5>Address : Pune, India</h5>
            <h5>Collage : PCCOE</h5>
        </div>
        );
    }
}

export default InfoClass;