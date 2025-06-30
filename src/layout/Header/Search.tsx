import { AutoComplete } from 'antd';
import { Component } from 'react';

export default class AppHeaderSearch extends Component {
  options = [
    {
      label: 'Apple',
      value: 'Apple',
    },
    {
      label: 'Pear',
      value: 'Pear',
    },
    {
      label: 'Orange',
      value: 'Orange',
    },
  ]
  getPanelValue(text: string) {
    return this.options.filter((option) => option.value.indexOf(text) !== -1);
  }
  render() {
    return (
      <div>
        <AutoComplete
          options={this.options}
          style={{ width: 200 }}
          placeholder="Borderless"
          onSearch={(text) => this.options = this.getPanelValue(text)}
          onSelect={globalThis.console.log}
          variant="borderless"
        />
      </div>
    )
  }
}