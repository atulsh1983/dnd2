import React from'react';
import "../../App.css";
import { Droppable } from 'react-beautiful-dnd';
import FieldsName from "./FieldsName";
import styled from 'styled-components';

const DesignList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;



export default class AccordianLeft extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            optionNum: "1"
        }
    }


    faqsHandler = (optionNum) => {
        this.setState({
            optionNum
        })
    }

    

   

    render(){

        let headerDesign;

        let {dataLayout} = this.props; 

        //console.log(Designjson.header);

        



        return(
            <div className="leftpanel">
                <ul className="maintab">
                    <li className={this.state.optionNum === "1" ? 'active' : ""}>
                        <div className="setTab" onClick={() => this.faqsHandler("1")}>Header Layouts</div>
                        <div className="showField">
                                <Droppable                         
                                droppableId="Design_A">
                                {(provided, snapshot) => 
                                    <DesignList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                    >
                                        {dataLayout.header.map((task, index) => (
                                            <FieldsName keyid={task.designName} key={task.designName} path={task.imgSrc} index={index} />
                                        ))}
                                    {provided.placeholder}
                                    </DesignList>
                                }
                                </Droppable>
                        </div>
                    </li>
                    <li className={this.state.optionNum === "2" ? 'active' : ""}>
                        <div className="setTab" onClick={() => this.faqsHandler("2")}>Body Layouts</div>
                        <div className="showField">
                            Body Design
                        </div>
                    </li>
                    <li className={this.state.optionNum === "3" ? 'active' : ""}>
                        <div className="setTab" onClick={() => this.faqsHandler("3")}>Footer Layouts</div>
                        <div className="showField">
                            Footer Design
                        </div>
                    </li>
                </ul>
          </div>
        )
    }



}