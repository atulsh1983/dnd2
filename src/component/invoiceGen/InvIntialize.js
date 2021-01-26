import React from 'react';
import {printInvApi} from "../../printInvApi";


export default class InvIntialize extends React.Component{

    constructor(props){
        super(props);
       

    }

    state = {
        finalRenderData: printInvApi
    }

    findtheValues = (arraybtm, idValue) => {
        //console.log("check 1---");
        //console.log(arraybtm);
        //console.log(idValue);
        //console.log(Object.keys(arraybtm).find(key => arraybtm[key] === idValue));
        for (var i=0; i < arraybtm.length; i++) {
            if (arraybtm[i].id === idValue) {
                return arraybtm[i];
            }
        }
    }

   

    render(){

         const {finalRenderData} = this.state;

         //console.log(finalRenderData);

         let printHead,h_grp0, h_grp1, h_grp2, h_grp3, h_grp4,bodyInvMid,bodyInvVal,bodyInvBtm;

         if(finalRenderData)
         {
            if(finalRenderData.header_design=='head1')
            {
                let grp0=[],grp1=[],grp2=[],grp3=[],grp4=[];
                //console.log(finalRenderData.header_field.length);
                if(finalRenderData.header_field.length>0)
                {
                    let grp0 = finalRenderData.header_field.filter(function(value){
                        return (value.group=='g0')
                    });
                    let grp1 = finalRenderData.header_field.filter(function(value){
                        return (value.group=='g1')
                    });
                    let grp2 = finalRenderData.header_field.filter(function(value){
                        return (value.group=='g2')
                    });
                    let grp3 = finalRenderData.header_field.filter(function(value){
                        return (value.group=='g3')
                    });
                    let grp4 = finalRenderData.header_field.filter(function(value){
                        return (value.group=='g4')
                    });

                 
                    
                    if(grp0.length>0)
                    {                       
                        h_grp0 = grp0.map((v,i)=>{
                            
                            return(
                                <tr key={i}>
                                    <td>
                                        <div className="setflex">
                                            <div className="p_b">{v.label}:</div>
                                            <div className="p_b">{v.value}</div>
                                        </div>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }

                    if(grp1.length>0)
                    {                       
                        h_grp1 = grp1.map((v,i)=>{
                            
                            return(
                                <tr key={i}>
                                    <td>
                                        <div className="setflex">
                                            <div className="p_b">{v.label}:</div>
                                            <div className="p_b">{v.value}</div>
                                        </div>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }

                    if(grp2.length>0)
                    {                       
                        h_grp2 = grp2.map((v,i)=>{
                            
                            return(
                                <tr key={i}>
                                    <td>
                                        <div className="setflex">
                                            <div className="p_b">{v.label}:</div>
                                            <div className="p_b">{v.value}</div>
                                        </div>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }

                    if(grp3.length>0)
                    {                       
                        h_grp3 = grp3.map((v,i)=>{
                            
                            return(
                                <tr key={i}>
                                    <td>
                                        <div className="setflex">
                                            <div className="p_b">{v.label}:</div>
                                            <div className="p_b">{v.value}</div>
                                        </div>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }

                    if(grp4.length>0)
                    {                       
                        h_grp4 = grp4.map((v,i)=>{
                            
                            return(
                                <tr key={i}>
                                    <td>
                                        <div className="setflex">
                                            <div className="p_b">{v.label}:</div>
                                            <div className="p_b">{v.value}</div>
                                        </div>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }

                   

                 


                    
                }
            }

            if(finalRenderData.body_design=='body1')
            {
                //console.log(finalRenderData.bodyTop[0].row1.length);
                let getLength;

                getLength = finalRenderData.bodyTop[0].row1.length;

                bodyInvMid = finalRenderData.bodyTop[0].row1.map((v,i)=>{

                    let tempclass;

                    if(i==(finalRenderData.bodyTop[0].row1.length-1))
                    {
                        tempclass = "p_b brd4"
                    }
                    else
                    {
                        tempclass = "p_b brd3 brd4"
                    }
                    
                    return(
                        <td className={tempclass} key={v.id}>{v.label}</td>
                    )
                    
                });

                bodyInvVal = finalRenderData.bodyTop[1].row2.map((v,i)=>{

                    let tempclass;

                    if(i==(finalRenderData.bodyTop[1].row2.length-1))
                    {
                        tempclass = "p_b brd4"
                    }
                    else
                    {
                        tempclass = "p_b brd3 brd4"
                    }
                    
                    return(
                        <td className={tempclass} key={v.id}>{v.value}</td>
                    )
                    
                });


                bodyInvBtm = finalRenderData.bodyBottom.map((v,i)=>{
                    //console.log("----");
                    //console.log(v["row"+i][0].value);  
                    let getArraybtm =  v["row"+i];                
                    let labeltemp = v["row"+i][0].value;
                    //console.log("======");
                    //console.log(this);
                    
                    

                    return(<tr key={i}>
                        {
                            finalRenderData.bodyTop[0].row1.map((value,index)=>{
                                let tempclass,id;

                                //console.log("======>>>");
                                //console.log(this);

                                if(index==(finalRenderData.bodyTop[0].row1.length-1))
                                {
                                    tempclass = "p_b brd4"
                                }
                                else
                                {
                                    tempclass = "p_b brd3 brd4"
                                }
                                if(index==0)
                                {
                                    return(
                                        <td className={tempclass} id={value.id} key={value.id}></td>
                                    )
                                }
                                else if(index==1)
                                {
                                    return(
                                        <td className={tempclass} id={value.id} key={value.id}>{labeltemp}</td>
                                    )
                                }
                                else
                                {
                                    let getvalueonId;


                                    getvalueonId = this.findtheValues(getArraybtm, value.id);
                                   
                                    if(getvalueonId)
                                    {
                                        return(
                                            <td className={tempclass} id={value.id} key={value.id}>{getvalueonId.value}</td>
                                        )
                                    }
                                    else{
                                        return(
                                            <td className={tempclass} id={value.id} key={value.id}>-</td>
                                        )
                                    }

                                    
                                }
                                
                               
                             })
                        }
                    </tr>)
                })


                // bodyInvBtm = finalRenderData.bodyTop[0].row1.map((v,i)=>{
                //     console.log("----");
                //     console.log(i);
                //     console.log(v);

                //     let tempclass,id,value;

                //     if(i==(finalRenderData.bodyTop[0].row1.length-1))
                //     {
                //         tempclass = "p_b brd4"
                //     }
                //     else
                //     {
                //         tempclass = "p_b brd3 brd4"
                //     }
                    
                    
                //     return(
                //         <td className={tempclass} id={v.id} key={v.id}>1</td>
                //     )
                    
                // })




            }
         }

        return(
            <div style={{"margin":"2px"}}>
                <table cellPadding="0" cellSpacing="0" className="fullw brd1" align="left">
                    <tbody>
                        <tr>
                            <td className="wid33p p_b">
                                <table cellPadding="0" cellSpacing="0" className="fullw ">
                                    <tbody>
                                        {h_grp0}
                                    </tbody>
                                </table>
                            </td>
                            <td className="wid33p p_b">
                                <table cellPadding="0" cellSpacing="0" className="fullw ">
                                    <tbody>
                                        {h_grp1}
                                    </tbody>
                                </table>
                            </td>
                            <td className="wid33p p_b">
                                <table cellPadding="0" cellSpacing="0" className="fullw">
                                    <tbody>
                                        {h_grp2}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="wid33p scbrd2 p_b">
                                <table cellPadding="0" cellSpacing="0" className="fullw">
                                    <tbody>
                                        {h_grp3}
                                    </tbody>
                                </table>
                            </td>
                            <td className="wid33p scbrd2 p_b">
                                <table cellPadding="0" cellSpacing="0" className="fullw">
                                    <tbody>
                                        {h_grp4}
                                    </tbody>
                                </table>
                            </td>
                            <td className="wid33p scbrd2 p_b">
                                <table cellPadding="0" cellSpacing="0" className="fullw">
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>                    
                </table>
                <table cellPadding="0" cellSpacing="0" className="fullw brd2" align="left">
                   <tbody>
                       <tr>
                          
                               {bodyInvMid}
                          
                       </tr>
                       <tr>
                           {bodyInvVal}
                       </tr>
                      
                           {bodyInvBtm}
                       
                   </tbody>
                </table>
            </div>
        )
    }
}