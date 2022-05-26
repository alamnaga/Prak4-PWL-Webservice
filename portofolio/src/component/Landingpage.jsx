import React from 'react'
import {createUseStyles} from 'react-jss'
import Alam from '../assets/profile.gif'
import {useNavigate} from "react-router-dom";

const Landingpage = () => {
  const classes = useStyles()
  return (

    <div className={classes.container}>
        <div>
            <ul className={classes.ul}>
                <li className={classes.title}><a href="/" className={classes.a}> Portofolio </a></li>
                <li><a href="/"                           className={classes.a}> Resume     </a></li>
                <li><a href="/skill"                      className={classes.a}> Skill      </a></li>
            </ul>
        </div>

        <div className={classes.body}>
            <div className={classes.wrapFoto}>
                <img src={Alam} className={classes.foto} alt="Alam" />
            </div>
            <div className={classes.wrapText}>
                <h1 className={classes.introduce}> HAY! Welcome</h1>
                <h2 className={classes.introduce2}> My name is Alam</h2>
                <h3 className={classes.introduce3}> From Indonesia</h3>
            </div>
        </div>

    </div>
  )
}

const useStyles = createUseStyles({
    container: {
        backgroundColor : '#fff',
        margin: 'auto',
        color : 'white',
        width: '100%',
        height : '100%',
    },
    introduce : {
        fontSize : 50,
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#0062FF',
    },
    introduce2 : {
        fontSize : 40,
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#0062FF',
    },
    introduce3 : {
        fontSize : 30,
        marginTop : '10px',
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#0062FF',
    },
    foto : {
        width : '100%',
        height : '100%',       
    },
    wrapText : {
        width : '50%',
        height : '100%',
        alignItems : 'center',  
        alignSelf : 'center',     
    },
    wrapFoto : {
        width : '70%',
        height : '100%',       
    },
    body : {
        display : 'flex',
        flexDirection : 'row',
    },
    ul : {
        position : 'fixed', 
        width : '100%',
        listStyle : 'none',
        marginTop: 0,
        padding: 0,
        backgroundColor : '#fff',
    }, 
    a : {
        float : 'right',
        alignItems : 'center',
        textAlign : 'center',
        color : '#0062FF',
        padding : '16px',
        textDecoration : 'none',
        fontWeight :'bold',
        fontSize: 20,
    },
    title : {
        float : 'left',
        color : '#0062FF',
        fontSize : 40,
        fontWeight : 'bold',
    }
})

export default Landingpage;