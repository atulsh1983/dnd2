import React from'react';
import {DragDropContext} from 'react-beautiful-dnd';
import AccordianLeft from "./AccordianLeft";
import DesignRight from "./designright";
import "../../App.css";

const Designjson = {
    "header":[
      {
        "designName": "head-1",
        "imgSrc": "src/img/designOne.png"
      },
      {
        "designName": "head-2",
        "imgSrc": "src/img/designtwo.png"
      },
      {
        "designName": "head-3",
        "imgSrc": "src/img/designthree.png"
      },
      {
        "designName": "head-4",
        "imgSrc": "src/img/designfour.png"
      }
    ],
    "body":[
      {
        "designName": "body-1",
        "imgSrc": "url"
      },
      {
        "designName": "body-2",
        "imgSrc": "url"
      },
      {
        "designName": "body-3",
        "imgSrc": "url"
      },
      {
        "designName": "body-4",
        "imgSrc": "url"
      }
    ]
  }


export default class DesignSel extends React.Component{


    state={
        "mainDesign": Designjson,
        "headerSection":[],
        "bodySection":[],
        "footerSection":[]
    }

    onDragEnd = result => {

        console.log("design moved");
        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit';
        const {destination, source, draggableId } = result;
        if(!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }




    }

    render(){

        let {mainDesign, headerSection, bodySection, footerSection} = this.state;
        return(
            <div className="setflex">
                <DragDropContext onDragEnd={this.onDragEnd}>
                        <AccordianLeft dataLayout={mainDesign}/>
                        <DesignRight 
                            headDes ={headerSection}
                            bodyDes={bodySection}
                            footerDes={footerSection}/>
                </DragDropContext>
            </div>
            
        )
    }
}