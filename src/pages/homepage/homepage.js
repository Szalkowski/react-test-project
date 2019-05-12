import React, {Component} from 'react';
import Main from '../../sections/main/main';
import Loader from '../../components/loader/loader';
import Layout from '../../config/layout/page-layout/layout';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutText: "",
            loader: true
        }
    }

    fetchApi = (url) => {
        this.setState({
            loader: true
        });
        fetch(url)
            .then(resp => resp.json())
            .then(texts => this.setState(prevState => {
                    return {
                        aboutText: prevState.aboutText += texts.join('')
                    }

                })
            )
            .catch(err => console.error(`ERROR: ${err}`))
            .finally(() => {
                this.setState({
                    loader: false
                })
            })
    };

    componentDidMount() {
        this.fetchApi('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json');
        this.fetchApi('https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json');
    }

    render() {
        const {loader, aboutText} = this.state;
        return (
            <div>
                {
                    loader
                        ? <Loader/>
                        : <Layout>
                            <Main aboutText={aboutText}/>
                          </Layout>
                }
            </div>
        )
    }
}

export default HomePage;
