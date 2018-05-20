import React, { Component } from 'react'
import { render } from 'react-dom'
import { Document, Page } from 'react-pdf/dist/entry.webpack'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import './styles/home.less'

const timeImg = require('./files/timg.jpeg')
const addImg = require('./files/add.png')

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: '',
            numPages: null,
        }
    }
    
    onDocumentLoadSuccess = ({ numPages }) =>
        this.setState({
            numPages,
        })
    
    onFileChange = (event) => {
        this.setState({
            file: event.target.files[0],
        });
    }
  
    render() {
        const { file, numPages } = this.state;
        return (
            <div>
              <div className="Example">
                <div className="Example__container">
                  <div className="Example__container__document">
                    <Document
                        file={file}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                        options={options}
                        loading={null}
                        noData={null}
                    >
                        {
                            Array.from(
                                new Array(numPages),
                                (el, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        loading={`加载中`}
                                    />
                                )
                            )
                        }
                    </Document>
                  </div>
                </div>
              </div>
              <div className="Example__container__load" style={{opacity: !!file && '0.8'}}>
                <input
                    type="file"
                    onChange={this.onFileChange}
                />
                <img src={addImg} />
              </div>
            </div>
        );
    }
}