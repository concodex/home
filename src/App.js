import './App.css';
import React, { Component } from "react";
import {
  MainBody,
  SimpleLoader,
  MdBox,
} from "./Containers";
import sb from './Services/StringBundleService';
import util from "./Utils/util";
import {Container, List} from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);

    let lang = sb.lang;
    let param = util.getUrlParams();
    if (param.lang) {
      lang = param.lang;
    }

    this.state = {
      language: lang,
    };
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = async() => {
    let param = util.getUrlParams();
    if (param.op == 'privacy') {
      this.onClickPrivacy();
    } else if (param.op == 'terms') {
      this.onClickTerms();
    }
  };

  onClickPrivacy = () => {
    MdBox.show("/privacy/" + this.state.language + ".md");
  };

  onClickTerms = () => {
    MdBox.show("/terms/" + this.state.language + ".md");
  };

  render() {
    const {
      language,
    } = this.state;

    return (
      <div className="App">
        <MainBody/>
        <SimpleLoader/>
        <footer>
          <Container>
            <List horizontal divided link size='small'>
              <List.Item>
                <span onClick={this.onClickTerms}>Terms and Conditions</span>
              </List.Item>
              <List.Item>
                <span onClick={this.onClickPrivacy}>Privacy Policy</span>
              </List.Item>
            </List>
          </Container>
        </footer>
        <MdBox/>
      </div>
    );
  }
}

export default App;
