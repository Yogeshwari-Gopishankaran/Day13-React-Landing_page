
import Navbar from './Components/Navbar'
import Heading from './Components/Heading'
import Icons from './Components/Icons'
import Showcase from './Components/Showcase'
import Testimonials from './Components/Testimonials'
import Action from './Components/Action'
import Footer from './Components/Footer'
import Image1 from './assets/testimonials-1.jpg'
import Image2 from './assets/testimonials-2.jpg'
import Image3 from './assets/testimonials-3.jpg'
import Pic1 from './assets/bg-showcase-1.jpg'
import Pic2 from './assets/bg-showcase-2.jpg'
import Pic3 from './assets/bg-showcase-3.jpg'


function App() {
let data=[
  {
    flag:true,
name:'Fully Responsive',
short:'This theme will look great on any device, no matter the size!',
title:'Fully Responsive Design',
description:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
img:Pic1,

},
{
  name:'Bootstrap 5 Ready',
  short:'Featuring the latest build of the new Bootstrap 5 framework!',
  title:'Updated For Bootstrap 5',
  description:"Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
img:Pic2 ,
flag:false,

},
  {id:"3",
    name:'Easy to Use',
    short:'Ready to use with your own content, or customize the source files!',
    title:'Easy to Use & Customize',
    description:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    img:Pic3,
    flag:true
  }
]
let pepople=[
  { name:'Margaret E.',
    comments:'"This is fantastic! Thanks so much guys!"',
    img:Image1
},
{ name:'Fred S.',
  comments:`"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`,
  img:Image2
},
{ name:'Sarah W.',
  comments:'"Thanks so much for making these free resources available to us!"',
  img:Image3
}
]

  return <>
  <Navbar></Navbar>
  <Heading></Heading>
  <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    {data.map((e,i)=>{ 
                      return <Icons data={e} key={i}/>
                    })}
  </div>
            </div>
        </section>
        <section className="showcase">
        <div className="container-fluid p-0">
  {
    data.map((e,i)=>{
    
      return <Showcase data={e} key={i} />
     
        
     
    })
  }
   </div>
   </section>
  <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
  {
    pepople.map((e,i)=>{
      return <Testimonials people={e} key={i}/>
    })
  }
  </div>
            </div>
        </section>      
      
  <Action></Action>
  <Footer></Footer>

  </>
}

export default App
