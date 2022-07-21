import React,{ Component, ReactElement } from "react";

const ThemeContext = React.createContext<string>('light');

class ThemeApp extends Component{
    render(): React.ReactNode {
        return(
            <ThemeContext.Provider value="this is ThemeContext.Provider value">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
    return (
      <div>
        <ThemedButton />
      </div>
    );
}

interface IProps{
    theme:string
}

function Button(buttonProps:IProps):ReactElement{
    return (<div>{buttonProps.theme}</div>)
}

class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;
    render() {
      return (<Button theme={this.context as string} />);
    }
}

export default ThemeApp;