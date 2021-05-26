import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export default class CourseTable extends Component {
    pattern = ['java', 'aws', 'react', 'node', 'amazon', 'spring',
    'unity', 'docker', 'kubernetes', 'devops', 'vue', 'database', 'rest', 
    'flutter', 'microservice', 'crypto', 'azure', 'sql']


    contains = (target, pattern) => {
        var doesContain = false;
         pattern.forEach(function(word){
           if(target.toLowerCase().includes(word)) {
             doesContain = true;
           }
         });
         return doesContain;
       }

    render() {
        return (
            <>
            <Table striped bordered hover>
            <thead>   
            <tr>
              <th>Course Title</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
            </thead>
            <tbody>
              {this.props.posts.map(post => 
                <tr>
                  <td>{this.contains(post.title.rendered, this.pattern) ? <strong dangerouslySetInnerHTML={{__html: post.title.rendered}}></strong> : <span dangerouslySetInnerHTML={{__html: post.title.rendered}}/>}</td>
                  <td>{post.modified}</td>
                  <td><strong><a href={post.link} target="_blank" rel="noreferrer noopener">Link</a></strong></td>
                </tr>
              )}
              </tbody>
            </Table>
            </>
        )
    }
}
