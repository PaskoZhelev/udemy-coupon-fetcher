import React, { Component } from 'react'
import axios from 'axios'
import CourseTable from './CourseTable';
import ToggleButtonComponent from './ToggleButtonComponent'


const Loader = () => (
    <svg className="svgLoader" viewBox="0 0 100 100" width="5em" height="5em">
      <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
    </svg>
);

export default class SearchCourse extends Component {
    state = {
        loading: true,
        posts1ButtonClicked: true,
        posts1: [],
        posts2: [],
    }

    handleButtonClicked = (val) => {
      const clicked = val == 1 ? true : false;
      this.setState({posts1ButtonClicked: clicked})
    }

      componentDidMount() {
        axios.all([
          axios.get('/couponscorpion'), 
          axios.get('/onlinecourses')
        ])
        .then(axios.spread((obj1, obj2) => {
          // Both requests are now complete
          this.setState({ posts1: obj1.data, posts2: obj2.data, loading: false });
        }));
      }

    render() {
        return (
            <>
            <h2>100% OFF Udemy Courses</h2>
            <div style={{paddingLeft: 0.3 + 'em'}}>
            <ToggleButtonComponent handleButtonClicked={this.handleButtonClicked}/>
            </div>
            <br/>
            { this.state.loading ? 
              <Loader /> :
              this.state.posts1ButtonClicked ? <CourseTable posts={this.state.posts1}/> : <CourseTable posts={this.state.posts2}/>
            }
            </>
        )
    }
}


