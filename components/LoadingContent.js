// HOC  => WithLoading.js
import React from 'react';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<p>Loading....Be Hold, fetching data may take some time :)</p>);
  }
}
export default WithLoading;


// LIST DATA => List.js
const List = props => {
  const { datas } = props;
  
  if (!datas) return null;
  if (!datas.length) return (<p>No data, sorry</p>)
  return (
    <ul>
      {
        datas.map(repo => {
          return (
            <li key={repo.id}>{repo.full_name}</li>
          )
         })
       }
    </ul>
  )
}
export default List;



// PENGGUNAAN DI VIEW app.js
import React from 'react';
import List from './List.js';
import WithLoading from './WithLoading.js';

const ListWithLoading = WithLoading(List);

export default class App extends React.Component {
  state = {loading: false,datas: null}

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/farskid/users`)
      .then(json => json.json())
      .then(datas => {
        this.setState({ loading: false, datas: datas });
      });
  }
render() {
    return (
      <ListWithLoading isLoading={this.state.loading} datas={this.state.datas} />
    )
  }
}