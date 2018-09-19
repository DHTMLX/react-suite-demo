import React, { Component } from 'react';
import Vault from "./VaultCdn";


class CDNSample extends Component {
  constructor(props){
    super(props);

    this.files = React.createRef();
  }
  render() {
    return (
      <div className='app-box'>
        <p>Code for vaults on this page is loaded through CDN on demand</p>
        <p>You can use promise or event to catch the moment when UI is ready to load the data</p>
        
        <Vault ready={this.loadData} toolbar mode="grid" class='base-size'></Vault>
        <br />
        <Vault ref="files" toolbar mode="list" class='base-size'></Vault>
      </div>
    );
  }
  componentDidMount(){
    const sub = this.refs.files;
    sub.ready.then(() => {
      sub.vault.data.add({
        name:"By-API.png", size: 12000
      });
    })
  }
  loadData(vault){
    vault.data.add({
      name:"By-Event.md", size: 44800
    });
  }
}

export default CDNSample;
