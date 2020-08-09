

const WithLabel = Component => {
    return props => (
      <div className="field">
        <label className="label">{props.label} {props.className}</label>
        <div className="control">
          <Component {...props} />
        </div>
        
        <style jsx>{`
        .field {
          margin: 50px;
          background:green;
          padding:20px;
        }
        .label {
          color: blue;
        }
        .warna {
          background:yellow;
          height:55px;
        }
      `}</style>
      </div>

    );
  };
  export default WithLabel