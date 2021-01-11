import React from "react";
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import FieldsName from "./FieldsName";
import "../../App.css";

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

export default class DesignRight extends React.Component{

    render(){
        const { headDes, bodyDes, footerDes} = this.props;

        let panelHeadUI;

        console.log(this.props.headDes);
        

        
        

        
        // panelUI =  <div key={index} className="disptc vtop">
        //                     <Droppable                         
        //                         droppableId={newID}>
        //                         {(provided, snapshot) => 
        //                             <TaskList
        //                             ref={provided.innerRef}
        //                             {...provided.droppableProps}
        //                             isDraggingOver={snapshot.isDraggingOver}
        //                             >
        //                                 {headDes.map((task, index) => (
        //                                     <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
        //                                 ))}
        //                             {provided.placeholder}
        //                             </TaskList>
        //                         }
        //                     </Droppable>
        //                 </div>;
               



        return(
            <div className="rightpanel">  
               xx
            </div>
        )
    }


}

