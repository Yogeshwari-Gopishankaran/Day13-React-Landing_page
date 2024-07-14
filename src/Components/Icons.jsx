

function Icons(props) {
    
  return <>
   
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className={(props.data.name)=='Fully Responsive'?"bi-window m-auto text-primary":(props.data.name=='Bootstrap 5 Ready')?"bi-layers m-auto text-primary":"bi-terminal m-auto text-primary"}></i></div>
                            <h3>{props.data.name}</h3>
                            <p className="lead mb-0">{props.data.short}</p>
                        </div>
                    </div>
                   
                
  </>
}

export default Icons
