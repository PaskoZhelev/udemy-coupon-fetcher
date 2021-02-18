import React, { Component } from 'react'
import axios from 'axios'
import cheerio from 'cheerio'

export default class OnlineCourseScraper extends Component {

    componentDidMount() {
        axios.get('/page/2/')
        .then(res => {
            const $ = cheerio.load(res.data);
            
            var list = [];
            $('div[class="box-holder"]').find('div > div > div > .item-panel > .entry-title > a').each(function (index, element) {
                //list.push($(element).attr('href'));
                console.log($(element).attr('href'))
                console.log($(element).text())
            });

        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
