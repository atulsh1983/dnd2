import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import '../../App.css';
import axios from "axios";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import {initialJson} from "../../intiaJson";

class DragUI extends React.Component{


    state={
        "getFormFields": initialJson ,
        "fieldSaved": null,
        "headerUI":"head1",
        "bodyUI":"body1",
        "footerUI":"footer1",        
        "headerSection":[],
        "bodySection":[],
        "footerSection":[]
       
    }



    componentDidMount(){

        

        //https://run.mocky.io/v3/99759884-e9d2-40f2-b623-71360aaff5de

        // axios.get('https://run.mocky.io/v3/a0cd5d66-fb15-43bb-841d-dfdd209dd310')
        // .then(response=>{
        //     this.setState({
        //         getFormFields: response.data
        //     })
        // })
        // .catch(error=>{
        //     console.log(error);
        // });

        let headBlank, bodyBlank, footBlank;

        if(this.state.headerUI=='head1')
        {
            headBlank = [
                {"column_0":[]},
                {"column_1":[]},
                {"column_2":[]},
                {"column_3":[]},
                {"column_4":[]},
                {"column_5":[]}
            ]
        }

        if(this.state.bodyUI=='body1')
        {
            bodyBlank = [
                {"bcolumn_0":[]},
                {"bcolumn_1":[]},
                {"bcolumn_2":[]},
                {"bcolumn_3":[]},
                {"bcolumn_4":[]},
                {"bcolumn_5":[]},
                {"bcolumn_6":[]},
                {"bcolumn_7":[]},
                {"bcolumn_8":[]},
                {"bcolumn_9":[]},
                {"bcolumn_10":[]},
                {"bcolumn_11":[]},
                {"bcolumn_12":[]},
                {"bcolumn_13":[]},
                {"bcolumn_14":[]},
                {"bcolumn_15":[]},
                {"bcolumn_16":[]},
                {"bcolumn_17":[]},
                {"bcolumn_18":[]},
                {"bcolumn_19":[]},
                {"bcolumn_20":[]},
                {"bcolumn_21":[]},
                {"bcolumn_22":[]}
               
            ]
        }

        if(this.state.footerUI=='footer1')
        {
            footBlank = [ 
                {"fcolumn_0":[]}   
            ]
        }


        this.setState({
            headerSection: headBlank,
            bodySection: bodyBlank,
            footerSection: footBlank
        })
    }

    onDragEnd = result => {
       
        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit';


        const {destination, source, draggableId } = result;
       

        // console.log("DragEnd--->");
        // console.log("[Destination}",destination);
        // console.log("[Source]", source);
        // console.log("[Draggableid]",draggableId);

        let section;

            if(source.droppableId==='column_A')
            {
                section="header";
            }
            else if(source.droppableId==='column_B')
            {
                section="body";
            }
            else if(source.droppableId==='column_C')
            {
                section="footer";
            }

        if(!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        // same block dnd logic  , need to put all same colum logic here
        if( (source.droppableId==='column_A' && destination.droppableId==='column_A') || (source.droppableId==='column_B' && destination.droppableId==='column_B') || (source.droppableId==='column_C' && destination.droppableId==='column_C'))
        {
            console.log("same movement");

            

            const newOrder = Array.from(this.state.getFormFields[section]);

            let valueObj = this.state.getFormFields[section][source.index];

            newOrder.splice(source.index, 1);

            newOrder.splice(destination.index, 0,valueObj);

            const newState = {
                ...this.state.getFormFields,
                [section]: newOrder
           
            };             

            this.setState({
                getFormFields: newState
            });

            return;
        }

        // Moving from one list to another

        let newOrderArr_2, valueObj_2, dest_Arr, newDest_Arr, newSource_Arr;

        //----if the values are dropped back into main column
        if(destination.droppableId==='column_A' || destination.droppableId==='column_B' || destination.droppableId==='column_C')
        {
            console.log("change 1");
            

            let b,newOrder_2, secname;

            if(destination.droppableId==='column_A')
            {
                b = JSON.parse(JSON.stringify(this.state.headerSection));
                newOrder_2 = Array.from(this.state.getFormFields["header"]);
                secname='header';

            }
            else if(destination.droppableId==='column_B'){
                b = JSON.parse(JSON.stringify(this.state.bodySection));
                newOrder_2 = Array.from(this.state.getFormFields["body"]);
                secname='body';
            }
            else if(destination.droppableId==='column_C'){
                b = JSON.parse(JSON.stringify(this.state.footerSection));
                newOrder_2 = Array.from(this.state.getFormFields["footer"]);
                secname='footer';
            }

            let sourceIndex;

            for (let key in b) {
                let keys = Object.keys(b[key]);               
                if(keys[0]===source.droppableId)
                {
                    sourceIndex = key;
                }                           
            }

            //console.log("[sourceIndex]", sourceIndex);

            valueObj_2 = b[sourceIndex][source.droppableId][source.index];  
            b[sourceIndex][source.droppableId].splice(source.index, 1);


            // console.log("[b]");
            // console.log(b);
            // console.log(valueObj_2);            
            //let newOrder_2 = Array.from(this.state.getFormFields.LayoutOne.headerField);

            

            newOrder_2.splice(destination.index, 0,valueObj_2);

            //console.log("newOrder_2");
            //console.log(newOrder_2);

            let newState_2 = {
                ...this.state.getFormFields,
                [secname]:newOrder_2
            }

            // let newState_2 = {
            //     ...this.state.getFormFields,
            //     LayoutOne:{
            //         ...this.state.getFormFields.LayoutOne,
            //         headerField: newOrder_2
            //     }
            // }

            //console.log(newState_2);
            

          
            

            // //----update the state with new values----
            if(secname=="header")
            {
                this.setState({
                    getFormFields: newState_2,
                    headerSection: b
                });
            }
            else if(secname=='body')
            {
                this.setState({
                    getFormFields: newState_2,
                    bodySection: b
                });
            }
            else if(secname=='footer')
            {
                this.setState({
                    getFormFields: newState_2,
                    footerSection: b
                });
            }
           
    
            
            return;

        }
        //----if values are dropped in right side from left coulmn
        else if(source.droppableId==='column_A' || source.droppableId==='column_B' || source.droppableId==='column_C')
        {
            console.log("change 2----");
            //----copy the souce array----
            newOrderArr_2 = Array.from(this.state.getFormFields[section]);

            //----find the value dropped----
            valueObj_2 = this.state.getFormFields[section][source.index];

            //----take out value from soruce array----
            newOrderArr_2.splice(source.index, 1);   
          
            //----make shallow copy of right side section array----
            let b;
            if(section=="header")
            {
                b = JSON.parse(JSON.stringify(this.state.headerSection));
            }
            else if(section=="body")
            {
                b = JSON.parse(JSON.stringify(this.state.bodySection));
            }
            else if(section=='footer')
            {
                b = JSON.parse(JSON.stringify(this.state.footerSection));
            }
            
            let indexofColumn, coulmnName;

            //----find the index which is dragged and dropped
            for (let key in b) {
                let keys = Object.keys(b[key]);
                if(keys[0]===destination.droppableId)
                {
                    indexofColumn = key;
                }                
            }

            //---- change the shallow copied array value ----
            b[indexofColumn][destination.droppableId].splice(destination.index, 0,valueObj_2);


          

            //----copy the source values in new varaible
           const newState_2 = {
                ...this.state.getFormFields,
                [section]: newOrderArr_2
            };  

            if(section=="header")
            {
                this.setState({
                    getFormFields: newState_2,
                    headerSection: b
                });
            }
            else if(section=='body')
            {
                this.setState({
                    getFormFields: newState_2,
                    bodySection: b
                });
            }
            else if(section=='footer')
            {
                this.setState({
                    getFormFields: newState_2,
                    footerSection: b
                });
            }
          

           

            return;
            
        }
        //---if values are moved in the right coulmn
        else if( (source.droppableId!=='column_A' && destination.droppableId!=='column_A') || (source.droppableId!=='column_B' && destination.droppableId!=='column_B') || (source.droppableId!=='column_C' && destination.droppableId!=='column_C'))
        {
            console.log("change 3");
            let chkSection = destination.droppableId.split('_')[0];
            console.log("chkSection",chkSection);

            let b;

            if(chkSection=='column')
            {
                b = JSON.parse(JSON.stringify(this.state.headerSection));
            }
            else if(chkSection=='bcolumn')
            {
                b = JSON.parse(JSON.stringify(this.state.bodySection));
            }
            else if(chkSection=='fcolumn')
            {
                b = JSON.parse(JSON.stringify(this.state.footerSection));
            }


           

            let sourceIndex, dropIndex, valueObj_2;

            for (let key in b) {
                let keys = Object.keys(b[key]);               
                if(keys[0]===source.droppableId)
                {
                    sourceIndex = key;
                }  
                if(keys[0]===destination.droppableId)
                {
                    dropIndex = key;
                }            
            }

            valueObj_2 = b[sourceIndex][source.droppableId][source.index];           

            b[sourceIndex][source.droppableId].splice(source.index, 1);

            b[dropIndex][destination.droppableId].splice(destination.index, 0,valueObj_2);

            if(chkSection=='column')
            {
                this.setState({
                    ...this.state,
                   headerSection: b
                   
               });
            }
            else if(chkSection=='bcolumn')
            {
                this.setState({
                    ...this.state,
                   bodySection: b
                   
               });
            }
            else if(chkSection=='fcolumn')
            {
                this.setState({
                    ...this.state,
                   footerSection: b
                   
               });
            }
            
           

            return;
            
        }

               
        
       
        

        


    }

    finalFormJson = () =>{
        //---logic to build the parser 
        //console.log("[finalFormJson]");
        this.props.history.push({ 
            pathname: '/Preview',
            currentState: this.state        
          })
    }



    render(){

        let setUILeft=null;

        const { getFormFields, headerSection, headerUI, bodyUI, footerUI, footerSection, bodySection } =  this.state;


         //console.log("[render DragUI");
        // console.log(headerSection);

        if(getFormFields)
        {
            
            setUILeft = <div id="mainCont">
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <LeftPanel dataValues={getFormFields}/>
                                <RightPanel 
                                    headerUI={headerUI} 
                                    bodyUI={bodyUI}
                                    footerUI={footerUI}
                                    headerSection={headerSection}
                                    bodySection={bodySection}
                                    footerSection={footerSection}/>
                            </DragDropContext>
                        </div>
        }

        



        return(
            <div>
                {setUILeft}
                <div onClick={this.finalFormJson}>Preview</div>
            </div>
        )
    }
};

export default DragUI;