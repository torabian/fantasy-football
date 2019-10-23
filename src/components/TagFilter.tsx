import React from 'react';
import classNames from 'classnames';
import './TagFilter.scss';

const FilterItems = [
  {
    label: 'gk',
    value: 'gk'
  },
  {
    label: 'def',
    value: 'def'
  },
  {
    label: 'mid',
    value: 'mid'
  },
  {
    label: 'for',
    value: 'for'
  }
];

interface IProps {
  onChange: (value: string) => void;
  selected: Array<string>;
}

class TagFilter extends React.Component<IProps> {
  onChange(value: string) {
    this.props.onChange(value);
  }

  render() {
    const { selected } = this.props
    return (
      <div className="TagFilter">
          <button
            className={classNames("tag-filter-item", !selected || !selected.length ? 'active' : null)}
            onClick={() => this.onChange('')}
          >
            All
          </button>
        {FilterItems.map(item => (
          <button
            className={classNames("tag-filter-item", selected && selected.length && selected.includes(item.value) ? 'active' : null)}
            onClick={() => this.onChange(item.value)}
            key={item.value}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }
}

export default TagFilter;
