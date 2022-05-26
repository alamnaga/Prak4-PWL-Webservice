import React from 'react'
import {createUseStyles} from 'react-jss'


const Skill = () => {
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

        <h1 className={classes.judul}>Skill</h1> 
        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 1. Programming</h1>

            </div>
            <div className={classes.wrapFoto}>
                <img src="https://www.dicoding.com/blog/wp-content/uploads/2020/04/internship-rendi-photo-backend.png" className={classes.foto} alt="" />
            </div>
        </div>   

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 2. UI/UX</h1>
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://buildwithangga.com/storage/assets/portfolio/E2G3GbucuRPG5RYRuVVclMBsZoe1XZTrDe1sLQgg.png" className={classes.foto} alt="" />
            </div>
        </div>       

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 3. Copywriting</h1>
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://www.jetorbit.com/blog/wp-content/uploads/2021/05/Contoh-Copywriting-Yang-Memikat-Pembaca.png" className={classes.foto} alt="Sophia" />
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
        // alignItems : 'center',
    },
    gallery : {
        margin: '10px',
        padding : '5px',
        border: '2px solid #0062FF',
        width : '20%',
    },
    galleryImg : {
        width : '100%',
        height : 'auto',
    },
    desc : {
        padding : '15px',
        textAlign : 'center',
        color : 'black',
        backgroundColor :'white',
    },
    wrapGallery : {
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
    },
    judul : {
        fontSize : 40,
        // marginTop : '50px',
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#0062FF',
    },
    page1 : {
        display : 'flex',
        flexDirection : 'row',

    },
    introduce : {
        fontSize : 20,
        // marginTop : '50px',
        margin: 0,
        marginLeft : '100px',
        padding: 0, 
        width : '100%',
        alignItems :'center',
        // textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#0062FF',
    },
    foto : {
        width : '100%',
        height : '100%', 
        margin: '10px',
        padding : '5px',
        border: '2px solid #0062FF',
    },
    wraph1 : {
        width : '60%',
        height : '100%',
        alignItems : 'center',  
        alignSelf : 'center',     
    },
    wrapFoto : {
        width : '30%',
        height : '100%',       
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

export default Skill;