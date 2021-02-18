import React, { Component } from 'react'
import axios from 'axios'

const Loader = () => (
    <svg className="svgLoader" viewBox="0 0 100 100" width="5em" height="5em">
      <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
    </svg>
);

export default class SearchCourse extends Component {
    state = {
        loading: true,
        posts: [],
        pattern: ['java','python', 'aws', 'react', 'node', 'amazon', 'spring',
         'unity', 'docker', 'kubernetes', 'devops', 'vue', 'database', 'rest', 'flutter']
    }

   contains = (target, pattern) => {
     var doesContain = false;
      pattern.forEach(function(word){
        if(target.toLowerCase().includes(word)) {
          doesContain = true;
        }
      });
      return doesContain;
    }

      componentDidMount() {
        axios.get('/wp-json/wp/v2/posts')
        .then(res => {
          this.setState({ posts: res.data, loading: false });
        })
      }

    render() {
        return (
            <>
            <h2>100% off Udemy Courses</h2>
            <table>
            <tr>
              <th>Course Title</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
              { this.state.loading ? 
              <Loader /> :
              this.state.posts.map(post => 
                <tr>
                  <td>{this.contains(post.title.rendered, this.state.pattern) ? <strong dangerouslySetInnerHTML={{__html: post.title.rendered}}></strong> : <span dangerouslySetInnerHTML={{__html: post.title.rendered}}/>}</td>
                  <td>{post.modified}</td>
                  <td><strong><a href={post.link} target="_blank">Link</a></strong></td>
              </tr>
              )}
            </table>
            </>
        )
    }
}
