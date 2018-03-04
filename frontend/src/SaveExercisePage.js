import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './SaveExercisePage.css';
import HeaderBar from './HeaderBar';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fetchRelativeURL} from './utils/FetchUserID';
import swal from 'sweetalert2';
import { api } from './provider/API';


class SaveExercisePage extends Component {
  constructor(props) {
    super(props);
    this.state = {exerciseCategory: 0};
  }
  handleChange (event, index, value) {
    this.setState({exerciseCategory: value});
  }

  fetchImagesForText(text) {
    fetch("https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" + text, {
      headers: new Headers({
        'Ocp-Apim-Subscription-Key': 'd7d5635088284aeca8dc9eb6868574c4',
      }),
      method: 'GET', // *GET, PUT, DELETE, etc.
    }).then((response) => response.json()).then((response) => {
      const imageUrls = [];
      for (let image of response.value) {
        imageUrls.push(image.thumbnailUrl)
      }
      this.setState({imageURLs: imageUrls})
    })
  }

  onTextChange (ev, text) {
    setTimeout(() => {
      if (document.getElementById('new-exercise-field').value == text)
        this.fetchImagesForText(text);
    }, 500);
  }

  renderImages() {
    const images = [];
    if (!this.state.imageURLs)
      return [];
    const imageURLS = this.state.imageURLs.slice(0, 6);

    for (const imageURL of imageURLS) {
      images.push(
        <img className="image-result" onClick={this.selectImage.bind(this)} key={imageURL} src={imageURL} />
      );
    }
    return images;
  }

  selectImage(ev, el) {
    const selectedImages = document.getElementsByClassName("image-selected");
    for (const image of selectedImages) {
      image.classList.remove("image-selected");
    }
    ev.target.classList.add("image-selected");
  }

  submitNewExercise(ev) {
    if (this.state.exerciseCategory == 0) {
      swal("Uh oh", "Please select an exercise category", "error");
      ev.preventDefault();
    }
    else if (document.getElementById("new-exercise-field").value.trim().length == 0) {
      swal("Uh oh", "Please provide an exercise name", "error");
      ev.preventDefault();
    }
    else if (document.getElementsByClassName("image-selected").length == 0) {
      swal("Uh oh", "Please select an exercise image", "error");
      ev.preventDefault();
    }
    else {
      const types = ["", "Chest", "Biceps", "Triceps", "Abs", "Legs", "Neck", "Shoulders", "Glutes"];
      const data = {
        exerciseType: types[this.state.exerciseCategory],
        exerciseName: document.getElementById("new-exercise-field").value,
        imageURL: document.getElementsByClassName("image-selected")[0].src,
        Progress: {
          NumSets: 10,
          NumReps: 10,
          Weight: 10
        }
      }
      api.createExercise(data.exerciseName, data.imageURL, data.exerciseType, data.Progress)
        .then(exercise => api.addExerciseForUser('-L6hunulp8Xw93HEn5DN', exercise));
    }
  }

  render() {
    return (
      <div style={{"textAlign": "center"}}>
        <HeaderBar hideWorkoutTime={true} header_title="Add Exercise" />
        <div style={{"marginTop": "100px", "textAlign": "left"}}>
          <MuiThemeProvider>
            <TextField
              id="new-exercise-field"
              hintText="i.e. Bench Press"
              floatingLabelText="Exercise Name"
              floatingLabelFixed={true}
              className="exercise-name-field"
              onChange={this.onTextChange.bind(this)}
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <DropDownMenu className="exercise-category" onChange={this.handleChange.bind(this)} value={this.state.exerciseCategory}  openImmediately={false}>
              <MenuItem value={0} primaryText="Choose an Exercise Type" />
              <MenuItem value={1} primaryText="Chest" />
              <MenuItem value={2} primaryText="Biceps" />
              <MenuItem value={3} primaryText="Triceps" />
              <MenuItem value={4} primaryText="Abs" />
              <MenuItem value={5} primaryText="Legs" />
              <MenuItem value={6} primaryText="Neck" />
              <MenuItem value={7} primaryText="Shoulders" />
              <MenuItem value={8} primaryText="Glutes" />
            </DropDownMenu>
          </MuiThemeProvider>
          <div className="images">
            {this.renderImages()}
          </div>
        </div>
        <Link to ={fetchRelativeURL('/Home')} onClick={this.submitNewExercise.bind(this)}>
          <div className="start_workout_div">
            Save Exercise
          </div>
         </Link>
      </div>
    );
  }
}

export default SaveExercisePage;
