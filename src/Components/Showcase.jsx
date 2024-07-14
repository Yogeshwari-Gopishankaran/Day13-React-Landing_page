
function Showcase(props) {
   
  return <>

                <div className={props.data.flag?"row g-0":"row direction g-0"}>
                    <div className="col-lg-6 order-lg-2 text-white">
                    <img className="design"src={props.data.img}/>
                    </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{props.data.title}</h2>
                        <p className="lead mb-0">{props.data.description}</p>
                    </div>
                </div>
               
           
  </>
}

export default Showcase
