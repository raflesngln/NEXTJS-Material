const ToggleInput = Component =>{
    return class extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          enabled: false
        }
      }
      toggleComponent(e){      
        this.setState({
          enabled: e.target.checked
        })
      }
      render(){
        const props = this.props;
        const enabled = this.state.enabled;
        return (
          <div className="field">
            <div className="control">
              <input type="checkbox" 
                 onChange={this.toggleComponent.bind(this)} /> {props.checkboxLabel}
              <Component disabled={!enabled} {...props} />
            </div>
          </div>
        )
      }
    }
  }

  export default ToggleInput;