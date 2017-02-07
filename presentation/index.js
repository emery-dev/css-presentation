// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Image,
  CodePane,
  Code,
  Slide,
  Link,
  Text,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  header: require("../assets/header-setup.png"),
  formNoCss: require("../assets/form-no-css.png"),
  formCss: require("../assets/form-css.png")
};

preloader(images);

const theme = createTheme({
  primary: "#FFF9F9",
  secondary: "#002050",
  tertiary: "#0C10FF",
  quartenary: "#3DD1FF",
  quinary: "#FF3D07"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={750} theme={theme}>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Cascading Style Sheets
          </Heading>
          <Text margin="10px 0 0" textColor="quartenary" size={1} fit bold>
            CSS
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="quinary" caps>Structure</Heading>
          <Text margin="10px 0 10px 0" textColor="quartenary" size={3} bold>
            HTML (Markup), Site plan
          </Text>
          <Heading margin="20px 0 0 0" size={1} textColor="quinary" caps>Styling</Heading>
          <Text margin="10px 0 10px 0" textColor="quartenary" size={3} bold>
            CSS, Images
          </Text>
          <Heading margin="20px 0 0 0" size={1} textColor="quinary" caps>Behavior</Heading>
          <Text margin="10px 0 10px 0" textColor="quartenary" size={3} bold>
            Javascript
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="quartenary">
          <Heading size={1} textColor="secondary" caps>"Style Sheet"</Heading>
          <Text margin="25px 0 10px 0" textColor="primary" size={3} >
            Defines the set of rules about how an HTML element will be viewed in the browser.
          </Text>
          <Text margin="25px 0 0 0" textColor="primary" size={3} >
            Target specificly defined elements from the HTML document.
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="quartenary">
          <Heading size={1} textColor="primary" margin="0 0 40px 0" caps>"Cascading"</Heading>
          <Text margin="25px 0 25px 0" textColor="secondary" size={3} >
            A file containing our set of rules with multiple rules applied to the same elements.
          </Text>
          <Text margin="25px 0 0 0" textColor="secondary" size={3}  >
            If you have two rules defining one element,the lowest in order takes precedence.
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={3} textColor="primary" caps>"Header cascading"</Heading>
          <Image src={images.header.replace("/", "")} height="350px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={3} textColor="quartenary" margin="0 0 40px 0" caps>"Inheritance"</Heading>
          <CodePane
            lang="html"
            source={require("raw-loader!../assets/inheritance.example")}
            margin="20px auto"
          />
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/inheritance2.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="quartenary">
          <Heading size={3} textColor="quinary" margin="0 0 40px 0" caps>Form HTML</Heading>
          <CodePane
            lang="html"
            source={require("raw-loader!../assets/form-html.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="quartenary">
          <Heading size={3} textColor="quinary" margin="0 0 40px 0" caps>Form HTML</Heading>
          <Image src={images.formNoCss.replace("/", "")} height="50px" />
        </Slide>

        <Slide align="flex-start" transition={["slide"]} bgColor="quartenary">
          <Heading size={2} textColor="quinary" margin="60px 0 20px 0" caps>Form CSS</Heading>
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/form-css.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="quartenary">
          <Heading size={3} textColor="quinary" margin="0 0 40px 0" caps>Form HTML + CSS</Heading>
          <Image src={images.formCss.replace("/", "")} margin="20px 0" height="300px" /> <br />
          <Link href="http://codepen.io/anon/pen/PWBPqG" target="_blank"> codepen.io/anon/pen/PWBPqG </Link>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="quinary" caps bold>A few CSS tricks</Heading>
          <List size={5} caps bold textColor="quartenary">
            <ListItem>Hover, Active, Link</ListItem>
            <ListItem>Centering an element</ListItem>
            <ListItem>Making a sticky footer</ListItem>
            <ListItem>Media Queries</ListItem>
          </List>
        </Slide>

        <Slide align="flex-start flex-start" transition={["slide"]} bgColor="quartenary">
          <Heading margin="50px 0 50px 0" size={3} textColor="primary" caps fit>Hover, Active, Link</Heading>
            <CodePane
              lang="html"
              source={require("raw-loader!../assets/hoverhtml.example")}
              margin="20px auto"
            />
            <CodePane
              lang="css"
              source={require("raw-loader!../assets/hovercss.example")}
              margin="20px auto"
            />
          <Link href="http://codepen.io/anon/pen/LxBzqq" target="_blank"> codepen.io/anon/pen/LxBzqq </Link>
        </Slide>

        <Slide align="flex-start flex-start" transition={["slide"]} bgColor="quartenary">
          <Heading margin="50px 0 50px 0" size={3} textColor="primary" caps fit>Center div</Heading>
            <CodePane
              lang="html"
              source={require("raw-loader!../assets/centerdivhtml.example")}
              margin="20px auto"
            />
            <CodePane
              lang="css"
              source={require("raw-loader!../assets/centerdivcss.example")}
              margin="20px auto"
            />
          <Link href="http://codepen.io/Tipue/pen/apDLG" target="_blank"> codepen.io/Tipue/pen/apDLG </Link>
        </Slide>

        <Slide align="flex-start flex-start" transition={["slide"]} bgColor="secondary">
          <Heading margin="50px 0 50px 0" size={4} textColor="primary" caps fit>Absolute header/footer</Heading>
            <CodePane
              lang="html"
              source={require("raw-loader!../assets/stickyhtml.example")}
              margin="20px auto"
            />
            <CodePane
              lang="css"
              source={require("raw-loader!../assets/stickycss.example")}
              margin="20px auto"
            />
          <Link href="https://codepen.io/anon/pen/vgaWYY" target="_blank"> codepen.io/anon/pen/vgaWYY </Link>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary" caps fit>
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
