import React from "react";


interface  IState{
    inputValue:string
    list:string[]
}
interface IPros{
    id:string
}

export default class TodoList extends React.Component<IPros,IState>{
   
    constructor(props:any){
        super(props);
        this.state ={
            inputValue:'',
            list:[]
        } 
    }

    render(){
        return (<div>
            {/* <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input id="inertArea"
                            className="input"
                            value={this.state.inputValue}
                    />
                    <button >提交</button>
            </div> */}
        </div>)
    }
}
