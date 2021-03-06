import { injectGlobal } from 'styled-components';
import '!!style-loader!css-loader!../node_modules/bootstrap/dist/css/bootstrap.css';
import '!!style-loader!css-loader!./assets/font-awesome/css/font-awesome.css';
import '!!style-loader!css-loader!./assets/css/style.default.css';


/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: whitesmoke;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .background-login{

    display: table;
    width: 100%;
    height: auto;
    text-align: center;
    background-color: whitesmoke;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.vertical-offset-100{
    padding-top:100px;
}
`;
