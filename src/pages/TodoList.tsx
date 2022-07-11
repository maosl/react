
import React, { ChangeEvent }  from "react";

interface Iprops{
    
}
interface  IState{
    inputValue:string
    list:string[]
}

export class TodoList extends React.Component<Iprops,IState>{
   
    constructor(props:Iprops){
        super(props);
       
        this.state ={
            inputValue:'',
            list:[]
        
        } 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>):void =>{

    } 

    handleBtnClick = (e:any) =>{
    }
    handleItemDelete = (e:EventTarget) =>{

    }
   
    componentDidMount(){

    }
    render(){
        return (<div>
        <div>
                <label htmlFor="insertArea">输入内容</label>
                <input id="inertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick} >提交</button>
            </div>
        </div>)
    }
}
