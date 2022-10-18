import GlobalStyles from "./globalstyles"
import { ThemeProvider } from "styled-components"
import { DarkTheme, LightTheme } from "./components/Themes"
import { Route, Switch } from "react-router-dom"
import Main from "./components/Main"
import Contact from "./Pages/Contact"
import Skills from "./Pages/Skills"
import Work from "./Pages/Work"
import About from "./Pages/About"
function App() {
  return <>
    <GlobalStyles scrollbar={false} />
    <ThemeProvider theme={LightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/about" component={About} />
      </Switch>
    </ThemeProvider>
  </>

}

export default App

