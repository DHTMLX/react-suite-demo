import React, { Component } from 'react';
import RichtextComponent from "./Richtext";


class DataSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '<h1>Meet DHTMLX Rich Text Editor!</h1><p>This demo will show you the main features of our highly customizable JavaScript rich text editor.</p><p>Type in any text here, apply text formatting and use the controls below to change the editor\'s look and feel and convert your text into HTML or markdown.</p> <p><strong><i>To learn more, read our </i></strong><a href="https://docs.dhtmlx.com/richtext/index.html" title="documentation"><strong><i>documentation</i></strong></a><strong><i> and check the </i></strong><a href="https://docs.dhtmlx.com/richtext/samples/" title="samples"><strong><i>samples</i></strong></a></p>',
      markdown:  `# Meet DHTMLX Rich Text Editor!

This JavaScript rich text editor is highly customizable. It makes text editing quick and comfortable due to the inbuilt
set of handy formatting tools.
      
Besides, it will convert your text into HTML or Markdown in the blink of an eye. Another bonus of DHTMLX Rich Text is
its flexible configuration settings which allow you to fine-tune the look and feel of the editor without effort.
      
To learn more, read our [documentation](https://docs.dhtmlx.com/richtext/index.html) and check the [samples](https://docs.dhtmlx.com/richtext/samples/).`
    }
  }
  render() {
    return (
      <div className='app-box'>
        <p>HTML serialize</p>
        <RichtextComponent value={this.state.html}></RichtextComponent>
        <textarea readOnly value={this.state.html}></textarea>

        <hr />
        <p>Markdown serialize</p>
        <RichtextComponent value={this.state.markdown} dataType="markdown" onChange={val => this.updateMarkdown(val)}></RichtextComponent>
        <textarea readOnly value={this.state.markdown}></textarea>
      </div>
    );
  }
  updateMarkdown(value) {
    this.setState({...this.state, markdown: value});
  }
  updateHTML(value) {
    this.setState({...this.state, html: value});
  }
}

export default DataSample;
