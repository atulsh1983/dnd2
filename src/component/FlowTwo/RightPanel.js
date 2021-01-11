import React from "react";
import HeadDesign from "../HeadDesign/headDesign";
import FooterDesign from "../footerDesign/footerDesign";
import BodyDesign from "../BodyDesign/BodyDesign";
import "../../App.css";


export default class RightPanel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            headerSection: null
        }
    }

    componentDidMount(){
       
    }

    render(){
        // console.log("[render RightPanel");
        // console.log(this.props);

        const { headerUI, headerSection, footerUI, footerSection, bodyUI, bodySection} = this.props;

        

            

        let getHeadDesign,getBodyDesign, getFooterDesign;
        getHeadDesign = <HeadDesign designParam={headerUI} header={headerSection}/>;
        getBodyDesign = <BodyDesign bodyParam={bodyUI} body={bodySection}/>;
        getFooterDesign = <FooterDesign footerParam={footerUI} footer={footerSection} />



        
       




        return(
            <div className="rightpanel">  
                <div id="head1">
                    {getHeadDesign}  
                    {getBodyDesign} 
                    {getFooterDesign}                 
                </div>                 
            </div>
        )
    }


}





 // SectionOne = header.map((val,index)=>{
        //     if(index<3)
        //     {
        //        // console.log(val);
        //         let newID = "column_"+(index);
        //        // console.log(val[newID]);
        //         return(
        //                 <div key={index} className="disptc vtop">
        //                     <Droppable                         
        //                         droppableId={newID}>
        //                         {(provided, snapshot) => 
        //                             <TaskList
        //                             ref={provided.innerRef}
        //                             {...provided.droppableProps}
        //                             isDraggingOver={snapshot.isDraggingOver}
        //                             >
        //                                 {val[newID].map((task, index) => (
        //                                     <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
        //                                 ))}
        //                             {provided.placeholder}
        //                             </TaskList>
        //                         }
        //                     </Droppable>
        //                 </div>
        //         );
        //     }
        // });

        // SectionTwo = header.map((val,index)=>{
        //     //console.log(typeof index);
        //     if(2 < index )
        //     {
        //        // console.log("second", index);
        //         let newID = "column_"+(index);
               
        //         return(
        //                 <div key={index} className="disptc vtop">
        //                     <Droppable                         
        //                         droppableId={newID}>
        //                         {(provided, snapshot) => 
        //                             <TaskList
        //                             ref={provided.innerRef}
        //                             {...provided.droppableProps}
        //                             isDraggingOver={snapshot.isDraggingOver}
        //                             >
        //                                 {val[newID].map((task, index) => (
        //                                     <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
        //                                 ))}
        //                             {provided.placeholder}
        //                             </TaskList>
        //                         }
        //                     </Droppable>
        //                 </div>
        //         );
        //     }
        // })

