import React, {Component} from 'react';
import Box from "../components/box";
import styled from 'styled-components';

const SplitBox = styled.div`
  display: flex;
  justify-content: center;
  min-height: 400px;
  margin-bottom: 20px;
  .half-horizontal {
    width: calc(50% - 10px);
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutText: "",
        }
    }

    componentDidMount() {
        const fetchApi = (url) => {
            fetch(url)
                .then(resp => resp.json())
                .then(texts => this.setState(prevState => {
                        return {
                            aboutText: prevState.aboutText += texts.join('')
                        }
                    })
                );
        };
        fetchApi('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json');
        fetchApi('https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json');
    }

    render() {
        const {aboutText} = this.state;
        return (
            <SplitBox>
                <div className='half-horizontal'>
                    <Box classes='about' text={aboutText}/>
                </div>
                <div className='half-horizontal'>
                    <Box classes='half-vertical' text='quick links'/>
                    <Box classes='half-vertical' text='quick links'/>
                </div>
            </SplitBox>
        )
    }
}

export default Main;
