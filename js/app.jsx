import React from 'react';
import ReactDOM from 'react-dom';
import "./../sass/style.scss";
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
document.addEventListener('DOMContentLoaded',function() {
    class Template extends React.Component {
        render() {
            return <div>
                {this.props.children}
            </div>;
        }
    }
    class Home extends React.Component{
        render(){
            return (
                <div className='homePage'>
                    <Menu/>
                    <h1>Strona główna</h1>
                </div>
            )
        }
    }
    class AboutMe extends React.Component{
        render(){
            return (
                <div>
                    <Menu/>
                    <h1>O nnie</h1>
                </div>
            )
        }
    }
    class Projects extends React.Component{
        render(){
            return (
                <div>
                    <Menu/>
                    <h1>Projekty</h1>
                </div>
            )
        }
    }
    class Contact extends React.Component{
        render(){
            const images=[
                {img:'./../images/github.svg', url:'https://github.com/Katherina611'},
                {img:'./../images/linkedin.png', url:'https://www.linkedin.com/in/katarzyna-gacek-4a5685143/'},
                {img:'./../images/fb.png', url:'https://web.facebook.com/kasia.gacek.33'}
            ];
            const contacts=images.map((i,index)=>{
                return (
                    <a href={i.url} key={index}><img className='images' key={index} src={i.img}/></a>
                )
            });
            return (
                <div>
                    <Menu/>
                    <div>
                        {contacts}
                    </div>
                </div>
            )
        }
    }
    class Menu extends React.Component{
        render(){
            const style={
                borderBottom:'2px solid grey'
            };
            return(
                <div>
                    <ul className='links'>
                        <li><IndexLink to="/" className='indexLink' activeStyle={style}>Strona główna</IndexLink></li>
                        <li><IndexLink to="/aboutMe" className='indexLink' activeStyle={style}>O mnie</IndexLink></li>
                        <li><IndexLink to="/projects" className='indexLink' activeStyle={style}>Projekty</IndexLink></li>
                        <li><IndexLink to="/contact" className='indexLink' activeStyle={style}>Kontakt</IndexLink></li>
                    </ul>
                    {this.props.children}
                </div>
            )
        }
    }
    class App extends React.Component{
        render(){
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Home} />
                        <Route path='/aboutMe' component={AboutMe} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/contact' component={Contact} />
                    </Route>
                </Router>
            )
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});