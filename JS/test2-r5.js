

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
            inputTxt: 'sss',
            texts: '哈哈哈',
            value: [
                {value1: 'grapefruit', txt: '葡萄柚'},
                {value1: 'lime', txt: '酸橙'},
                {value1: 'coconut', txt: '椰子'},
                {value1: 'mango', txt: '芒果'},
            ],
            valueReal: 'coconut'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event){
        const target = event.target
        const name = target.name
        if (name === 'isGoing'){
            const value = target.checked
            this.setState({[name]: value})
        }
        else if (name === 'value'){
            const value = target.value
            // console.log(value)
            // console.log(target)
            this.setState({valueReal: value})
        }else {
            const value = target.value
            this.setState({[name]: value})
        }
    }

    handleSubmit (event){
        event.preventDefault()
    }

    render (){
        return (
            <form>
                <label>
                    参与:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    来宾人数:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    名字:
                    <input type="text" name='inputTxt' value={this.state.inputTxt} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    文章:
                    <textarea value={this.state.texts} name='texts' onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    选择你喜欢的风味:
                    <NumList value={this.state.value} onChange={this.handleChange} valuereal={this.state.valueReal}/>
                </label>
                <br />
                <input type="submit" value="提交" />
            </form>
        )
    }
}

function ListItem (props){
    return <option value={props.value}>{props.txt}</option>
}

function NumList (props){
    const val = props.value
    const real = props.valuereal
    // console.log(real)
    return (
        <select onChange={props.onChange} name='value' value={real}>
            {val.map((item,index)=>
                <ListItem key={index} value={item.value1} txt={item.txt}/>
            )}
        </select>
    )
}

ReactDOM.render(
    <Reservation/>,
    document.getElementById('root')
)