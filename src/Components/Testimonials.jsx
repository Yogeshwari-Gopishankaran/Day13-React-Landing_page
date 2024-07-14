

function testimonials(props) {
  return<>
 
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={props.people.img} alt="..." />
                            <h5>{props.people.name}</h5>
                            <p className="font-weight-light mb-0">{props.people.comments}</p>
                        </div>
                    </div>
                   
  
               
  </>
}

export default testimonials
