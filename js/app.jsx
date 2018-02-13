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
                    <Profil/>
                    <Education/>
                    <Tools/>
                    <Interest/>
                </div>
            )
        }
    }
    class Profil extends React.Component{
        render(){
            return (
                <div className='paragraph'>
                    <h1 className='header'>PROFIL</h1>
                    <p className='profil'>
                        Jestem absolwentką Akademii Górniczo-Hutniczej w Krakowie kierunku Inżynieria Środowiska.<br></br>
                        W trakcie trwania studiów pojawiły się przedmioty związan z programowaniem, co też niezwykle mnie <br></br>
                        zainteresowało i popchnęło mnie do zapisania się na kurs. Jestem osobą, która cały czas chce pogłębiać <br></br>
                        swoją wiedzę i rozwijać się. Jestem przekonana, że branża IT pozwoli mi na rozwój i realizację ciekawych <br></br>
                        oraz wymagających projektów.
                    </p>
                </div>
            )
        }
    }
    class Education extends React.Component{
        render(){
            return (
                <div className='paragraph'>
                    <h1 className='header'>WYKSZTAŁCENIE</h1>
                    <div className='codersLab'>
                        <img src="images/coders.png" className='codersImg'/>
                        <h2 className='date'>
                            2017 - 2018
                        </h2>
                        <p className='study'>
                            Coders Lab – Szkoła programowania<br></br>
                            Czas trwania: 320 godzin<br></br>
                            Program: zaawansowany HTML i CSS, JavaScript, Sass, RWD, jQuery, ECMAScript6, React.js
                        </p>
                    </div>
                    <div className='educationSection'>
                        <img src="images/agh.png" className='aghImg'/>
                        <h2 className='date'>
                            2016 - 2017
                        </h2>
                        <p className='study'>
                            Akademia Górniczo - Hutnicza im. Stanisława Staszica w Krakowie<br></br>
                            Wydział Geodezji Górniczej i Inżynierii Środowiska<br></br>
                            Kierunek: Inżynieria Środowiska, Studia Magisterskie
                        </p>
                    </div>
                </div>
            )
        }
    }
    class Tools extends React.Component{

        render(){
            const toolsImg=[
                {img:"images/js.png", name:'JavaScript'},
                {img:"images/react.png", name:'React.js'},
                {img:"images/jQuery.png", name:'jQuery'},
                {img:"images/html.png", name:'HTML'},
                {img:"images/sass.svg", name:'SASS'},
                {img:"images/css.png", name:'CSS'},
                {img:"images/webpack.png", name:'Webpack'},
                {img:"images/github.svg", name:'Github'},
                {img:"images/autocad.png", name:'AutoCAD'},
            ];
            const tools=toolsImg.map((i,index)=>{
                return (
                    <img src={i.img} key={index} className='toolsImg' title={i.name}/>
                )
            });
            return (
                <div className='paragraph'>
                    <h1 className='header'>NARRZĘDZIA/TECHNOLOGIE</h1>
                    <div className="toolsBox">
                        {tools}
                    </div>
                </div>
            )
        }
    }
    class Interest extends React.Component{
        render(){
            const interestImg=[
                {img:"images/f1.png", name:'f1'},
                {img:"images/volley.png",name:'siatkówka'},
                {img:"images/football.svg",name:'piłka nożna'},
                {img:"images/ski.png",name:'skoki narciarskie'},
                {img:"images/dance.png",name:'taniec towarzyski, współczesny'}
            ];
            const interest=interestImg.map((i,index)=>{
                return (
                    <img src={i.img} key={index} className='interestImg' title={i.name}/>
                )
            });
            return(
                <div className='paragraph'>
                    <h1 className='header'>ZAINTERESOWANIA</h1>
                    <div className="interestBox">
                        {interest}
                    </div>
                </div>
            )
        }
    }


    class Projects extends React.Component{
        state={
            img1:'none',
            img2:'none',
            img3:'none'
        };
        handleMouseEnter=()=>{
            this.setState({
                img1:this.state.img1==='none'?'block':'none'
            })
        };

        handleMouseEnter1=()=>{
            this.setState({
                img2:this.state.img2==='none'?'block':'none'
            })
        };

        handleMouseEnter2=()=>{
            this.setState({
                img3:this.state.img3==='none'?'block':'none'
            })
        };

        render(){

            return (
                <div>
                    <Menu/>
                    <div className='projects'>
                        <a href='https://katherina611.github.io/Warsztat-HTML/' onMouseEnter={this.handleMouseEnter} >SIT ON CHAIR</a>
                        <img className='projectsImg' src="images/sit.png" style={{display:this.state.img1}}/>
                        <a href='https://katherina611.github.io/Projekt-koncowy/' onMouseEnter={this.handleMouseEnter1}>DESIGN YOUR HOME</a>
                        <img className='projectsImg' src="images/projekt_kocowy.png" style={{display:this.state.img2}}/>
                        <a href='https://katherina611.github.io/Warsztat-Calculator/' onMouseEnter={this.handleMouseEnter2}>CALCULATOR</a>
                        <img className='projectsImg' src="images/kalkulator.png" style={{display:this.state.img3}}/>
                    </div>
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
                {img:"images/mobile.svg", data:'795 009 790', name:'telefon'},
                {img:"images/gmail.png", data:'katarzynag0609@gmail.com', name:'email'}
            ];
            const images=[
                {img:"images/github.svg", url:'https://github.com/Katherina611', name:'github'},
                {img:"images/linkedin.png", url:'https://www.linkedin.com/in/katarzyna-gacek-4a5685143/', name:'linkedin'},
                {img:"images/fb.png", url:'https://web.facebook.com/kasia.gacek.33', name:'facebook'},
            ];

            const social=images.map((i,index)=>{
                return (
                    <a href={i.url} key={index}>
                        <img className='imgContact' key={index} src={i.img} title={i.name}/>
                    </a>
                )
            });

            const contact=imgTel.map((i,index)=>{
                return (
                    <div className='boxContact'>
                        <img className='imgContact' key={index} src={i.img} title={i.name} style={{display:this.state.img}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
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