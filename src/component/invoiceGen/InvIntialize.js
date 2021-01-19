import React from 'react';
import {printInvApi} from "../../printInvApi";


export default class InvIntialize extends React.Component{

    constructor(props){
        super(props);
       

    }

    state = {
        finalRenderData: printInvApi
    }

   

    render(){

         const {finalRenderData} = this.state;

         console.log(finalRenderData);

         let printHead,h_grp0, h_grp1, h_grp2, h_grp3, h_grp4;

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
                {printHead}
            </div>
        )
    }
}