import React, { Component } from 'react';

// cubes svg img
import Cube1 from './svg/cube1.jsx';
import Cube2 from './svg/cube2.jsx';
import Cube3 from './svg/cube3.jsx';

export default class Cubes extends Component {
    render() {

        function svgFigure(figure) {
            switch (figure) {
                case "cube1":
                    return <Cube1 />
                case "cube2":
                    return <Cube2 />
                case "cube3":
                    return <Cube3 />
            }
        }

        return (
            <div className="stage">
	            <div className="cube"
	            	
	            	onClick={ this.props.click } 
	            	onMouseOver={ this.props.over } 
	            	onMouseOut={ this.props.out }

	            	>
				    <figure className={"back" + " figure" + this.props.indent}></figure>
				    <figure className={"top" + " figure" + this.props.indent}></figure>
				    <figure className={"bottom" + " figure" + this.props.indent}></figure>
				    <figure className={"left" + " figure" + this.props.indent}></figure>
				    <figure className={"right" + " figure" + this.props.indent}></figure>
				    <figure className={"front" + " figure" + this.props.indent}>
						{
							svgFigure(this.props.figure)
						}
				    </figure>
				</div> 
			</div>
        )
    }
};
