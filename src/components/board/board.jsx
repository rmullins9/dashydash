"use strict";

var React = require('react');
var Weather = require('../modules/weather/weather.jsx');
var Blog = require('../modules/blog/blog.jsx');
var Bus = require('../modules/bus/bus.jsx');
var Birthday = require('../modules/birthdays/birthdays.jsx');
var TimeOfDay = require('../modules/timeofday/timeofday.jsx');
var Abc = require('../modules/abc/abc.jsx');
var Family = require('../modules/family/family.jsx');
var Appointments = require('../modules/appointments/appointments.jsx');
var Pics = require('../modules/pics/pics.jsx');


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : props.match.params.boardId,
      name : '',
      modules: []
    };
  }

  componentDidMount() {
    this.setState({ 
      name : 'Board',
      modules : [ 
        //{ name : 'abc' },
        //{ name : 'family' },
        //{ name : 'appointments' },
        //{ name : 'birthdays' },
        //{ name : 'timeofday' },
        { name : 'weather' },
        //{ name : 'blog' },
        //{ name : 'bus' },
        { name : 'pics' },
      ]
    });
  }
  
  render() {
    var createModule = function(moduleInfo) {
      if (!moduleInfo.id) {
        moduleInfo.id = moduleInfo.name;
      }
      const name = moduleInfo.name;
      const id = moduleInfo.id;
      var Module = require('../modules/' + name + '/' + name + '.jsx');
      return <Module key={id} id={id}/>
    };

    return (
      <div>
        <h1>{this.state.name} : {this.state.id}</h1>
        {this.state.modules.map(createModule, this)}
      </div>
    );
  }
};

module.exports = Board;