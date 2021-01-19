import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import FieldsName from "../FlowTwo/FieldsName";
import "../../App.css";


const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;


export default class BodyOne extends React.Component{

    constructor(props){
        super(props);
    }



    render(){
        //console.log("[Render]: headone");
        //console.log(this.props);
        
        const {body} = this.props;

        let SectionOne , SectionTwo;

        if(body)
        {
                SectionOne = body.map((val,index)=>{               
                    if(index<22)
                    {
                        let newID = "bcolumn_"+(index);                
                        return(
                                <div key={index} className="m_a wid215 fldir">
                                    <Droppable                         
                                        droppableId={newID}>
                                        {(provided, snapshot) => 
                                            <TaskList
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            isDraggingOver={snapshot.isDraggingOver}
                                            >
                                                {val[newID].map((task, index) => (
                                                    <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
                                                ))}
                                            {provided.placeholder}
                                            </TaskList>
                                        }
                                    </Droppable>
                                </div>
                        );
                    }
                });

                SectionTwo = body.map((val,index)=>{               
                    if(index>21)
                    {
                        //console.log(val);
                        let newID = "bcolumn_"+(index);                
                        return(
                                <div key={index} className="m_a fldir">
                                    <Droppable                         
                                        droppableId={newID}>
                                        {(provided, snapshot) => 
                                            <TaskList
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            isDraggingOver={snapshot.isDraggingOver}
                                            >
                                                {val[newID].map((task, index) => (
                                                    <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
                                                ))}
                                            {provided.placeholder}
                                            </TaskList>
                                        }
                                    </Droppable>
                                </div>
                        );
                    }
                });



            
             
        }






        return(
            <div className="bg2">
                 <div className="setbox1">
                    <div className="setflex fitCont">
                        {SectionOne}
                    </div>
                </div>
                <div className="p_a">
                    {SectionTwo}
                </div>
            </div>
           
           
        )
    }
}