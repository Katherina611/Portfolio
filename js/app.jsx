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
                <div>
                    <Menu/>
                    <div className='homePage'>
                        <h1 className='home'>Witam!</h1>
                    </div>
                </div>
            )
        }
    }
    class AboutMe extends React.Component{
        render(){
            return (
                <div>
                    <Menu/>
                    <h1>O mnie</h1>
                </div>
            )
        }
    }
    class Projects extends React.Component{

        render(){

            const adressProjects=[
                {name:'SIT ON CHAIR',img:'./../images/sit.png', url:'https://katherina611.github.io/Warsztat-HTML/'},
                {name:'DESIGN YOUR HOME',img:'./../images/projekt_kocowy.png', url:'https://katherina611.github.io/Projekt-koncowy/#/'},
                {name:'CALCULATOR',img:'./../images/kalkulator.png', url:'https://katherina611.github.io/Warsztat-Calculator/'}
            ];
            const project=adressProjects.map((i,index)=>{
                return (
                    <div key={index}><a href={i.url}>{i.name}</a></div>
                )
            });
            return (
                <div>
                    <Menu/>
                    <div className='projects'>{project}</div>
                </div>
            )

        }
    }
    class Contact extends React.Component{
        state={
            img:'block',
            par:'none'
        };
        handleMouseEnter=()=>{
            if(this.state.par==='none'){
                this.setState({
                    par:'block'
                })
            }
        };

        handleMouseLeave=()=>{
            if(this.state.par==='block'){
                this.setState({
                    par:'none'
                })
            }
        };

        render(){

            const imgTel=[
                {img:'./../images/mobile.svg', data:'795 009 790'},
                {img:'./../images/gmail.png', data:'katarzynag0609@gmail.com'}
            ];
            const images=[
                {img:'./../images/github.svg', url:'https://github.com/Katherina611'},
                {img:'./../images/linkedin.png', url:'https://www.linkedin.com/in/katarzyna-gacek-4a5685143/'},
                {img:'./../images/fb.png', url:'https://web.facebook.com/kasia.gacek.33'},
            ];

            const social=images.map((i,index)=>{
                return (
                    <a href={i.url} key={index}>
                        <img className='imgContact' key={index} src={i.img}/>
                    </a>
                )
            });

            const contact=imgTel.map((i,index)=>{
                return (
                    <div className='boxContact'>
                        <img className='imgContact' key={index} src={i.img} style={{display:this.state.img}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                        <p style={{display:this.state.par}}>{i.data}</p>
                    </div>
                )
            });
            return (
                <div>
                    <Menu/>
                    <div className='boxContact'>
                        {social}
                        {contact}
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