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


export default class FooterOne extends React.Component{

    constructor(props){
        super(props);
    }



    render(){
        // console.log("[Render]: footerone");
        // console.log(this.props);
        
        const {footer} = this.props;

        let SectionOne;



        if(footer)
        {
                SectionOne = footer.map((val,index)=>{
               
                
                    let newID = "fcolumn_"+(index);                
                    return(
                            <div key={index} className="disptc vtop">
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
                
            });

            
             
        }

       


        return(
            <div>
                <div  className="dispt bg2 fullw ">
                    {SectionOne}
                </div>
               
            </div>
            
        )
    }
}