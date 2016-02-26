import React, {Component} from 'react';
import DOM from 'react-dom';

export default class Main extends Component {
    componentDidMount() {
        let mutator = document.querySelector(".ul_mutator");
        mutator.addEventListener("animationend", (event)=> {
            console.log("ready")
        });
    }

    render() {
        return (
              <div className="main-main">
                <div className="main__st_top"></div>
                <div className="main__st_mid">
                    <div className="conta_input_mutator">
                        <ul className="quest_circles">
                            <li className="classAut0"></li>
                            <li className="other"></li>
                            <li className="start"></li>
                        </ul>
                        <div className="con_inputs_mutator">
                            <ul className="ul_mutator">
                                <li className="icon_type"><i className="child icon"></i></li>
                                <li className="input_mut"><input placeholder="usuario" type="text" className="input_mutator"/></li>
                                <li className="icon_arrow"><i className="chevron down icon"></i></li>
                            </ul>
                       </div>
                    </div>
                </div>
                <div className="main__st_bot"></div> 
              </div>
      )
  }
};

