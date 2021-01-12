import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import FieldsName from "./FieldsName";
import styled from 'styled-components';
import "../../App.css";


const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;



export default class LeftPanel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            optionNum: "3"
        }
    }

    faqsHandler = (optionNum) => {
        this.setState({
            optionNum
        })
    }





    render(){

        const {dataValues} = this.props;

        //console.log(dataValues);
       

        let headerFields, bodyfield, footerfield,panelUI;

        if(dataValues)
        {
            headerFields = dataValues["header"];
            bodyfield = dataValues["body"];
            footerfield = dataValues["footer"];
        }



        panelUI = <ul className="maintab">
            <li className={this.state.optionNum === "1" ? 'active' : ""}>
                <div className="setTab" onClick={() => this.faqsHandler("1")}>Header Fields</div>
				<div className="showField sethgt1">
                    <Droppable                         
                        droppableId="column_A">
                        {(provided, snapshot) => 
                            <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                            >
                                {headerFields.map((task, index) => (
                                <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
                                ))}
                            {provided.placeholder}
                            </TaskList>
                        }
                    </Droppable>
                </div>
            </li>
            <li className={this.state.optionNum === "2" ? 'active' : ""}>
                <div className="setTab" onClick={() => this.faqsHandler("2")}>Body Fields</div>
                <div className="showField sethgt1">
                        <Droppable                         
                            droppableId="column_B">
                            {(provided, snapshot) => 
                                <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                                >
                                    {bodyfield.map((task, index) => (
                                    <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
                                    ))}
                                {provided.placeholder}
                                </TaskList>
                            }
                        </Droppable>
                </div>
            </li>
            <li className={this.state.optionNum === "3" ? 'active' : ""}>
                <div className="setTab" onClick={() => this.faqsHandler("3")}>Footer Fields</div>
                <div className="showField sethgt1">
                <Droppable                         
                            droppableId="column_C">
                            {(provided, snapshot) => 
                                <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                                >
                                    {footerfield.map((task, index) => (
                                    <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
                                    ))}
                                {provided.placeholder}
                                </TaskList>
                            }
                        </Droppable>
                </div>
            </li>
        </ul>

       

       
        
        return(
            <div className="leftpanel">
                 {panelUI}              
            </div>
        )
    }
}