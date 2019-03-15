import React from 'react';

const Filter = () => {
  return (
      <div>
        <button onClick={this.filter('finished')}>Show Finished</button>
        <button onClick={this.filter('unfinished')}>Show Unfinished</button>
        <button onClick={this.filter('showAll')}>Show All</button>
      </div>
  );
}

export default Filter;
