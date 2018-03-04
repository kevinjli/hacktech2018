import React, {Component} from 'react';
import {Button, Container, Divider, Dropdown, Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './SaveExercisePage.css';

class SaveExercisePage extends Component {
  constructor(props) {
    super(props);

    var exerciseTypeOptions = [
      {value:'chest', text:'Chest'},
      {value:'legs', text:'Legs'}
    ];

    var exerciseNames = {
      chest:[
        {value:'benchpress', text:'Benchpress'},
        {value:'inclinedumbbellpress', text:'Incline Dumbbell Press'}
      ],
      legs:[
        {value:'squat', text:'Squat'},
        {value:'legpress', text:'Leg Press'}
      ]
    };

    var exerciseWeightOptions = [];
    for(var i = 0; i < 15; i++) {
      var weightVal = ''+(i*10);
      exerciseWeightOptions.push({
        value:weightVal,
        text:weightVal
      });
    }

    this.state = {
      exerciseTypeOptions: exerciseTypeOptions,
      exerciseNameOptions: [],
      exerciseWeightOptions: exerciseWeightOptions,
      exerciseNames: exerciseNames
    };

    this.exerciseTypeSelected = this.exerciseTypeSelected.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
  }

  exerciseTypeSelected(event, data) {
    console.log('exercise type selected');
    this.setState({
      exerciseNameOptions: this.state.exerciseNames[data.value]
    });
  }

  saveExercise() {
    console.log('save exercise');
    //Do some databasing
  }

  render() {
    return (
      <div className="SaveExercisePage">
        <Container className='center aligned'>
          <div className="topheader">
            <Header as='h1'>New Exercise</Header>
          </div>

          <Divider hidden />
          <Header className='centered' as='h2'>Exercise Type:</Header>
          <Dropdown 
            placeholder='Exercise Type' 
            selection
            search
            options={this.state.exerciseTypeOptions}
            onChange={this.exerciseTypeSelected}
            />

          <Divider hidden />
          <Header as='h2'>Exercise Name:</Header>
          <Dropdown 
            placeholder='Exercise Name' 
            selection
            search
            options={this.state.exerciseNameOptions}
            />

          <Divider hidden />
          <Header as='h2'>Weight (lbs):</Header>
          <Dropdown 
            placeholder='Exercise Weight' 
            selection
            search
            options={this.state.exerciseWeightOptions}
            />

          <Divider hidden />
          <div className='save-button' onClick={this.saveExercise}>Save Exercise</div>
        </Container>
      </div>
    );
  }
}

export default SaveExercisePage;
