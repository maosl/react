interface IState{
    defaultSelectedKeys:string[]
}

interface IAction{
    type:string
}

const defaultState:IState = {
    defaultSelectedKeys:['我来自于Sotre初始值++++']
}
const reducer = (state:IState = defaultState, action:IAction) => {
	return state;
};

export default reducer;
