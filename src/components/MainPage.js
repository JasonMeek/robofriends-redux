import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

import './MainPage.css';

class MainPage extends Component {  //added export for testing
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    const {searchField} = this.props;
    return this.props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  render() {
    const { robots, onSearchChange, isPending } = this.props;
    return (
      <div className='tc'>
        <Header/>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default MainPage