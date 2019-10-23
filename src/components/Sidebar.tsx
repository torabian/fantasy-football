import React from 'react';
import './Sidebar.scss';
import TagFilter from './TagFilter';
import PlayersList from './PlayersList';

class Sidebar extends React.Component {

  state = {
    filterRole: []
  }

  onSelectedRoleChange = (value: string) => {
    if (!value) {
      return this.setState({
        filterRole: []
      })
    }
    this.setState({
      filterRole: [value]
    })
  }

  render() {
    return (
      <div className="Sidebar">
        <TagFilter onChange={this.onSelectedRoleChange} selected={this.state.filterRole} />
        <PlayersList showRoles={this.state.filterRole} />
      </div>
    );
  }
}

export default Sidebar;
