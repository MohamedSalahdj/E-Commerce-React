import './CategoryCardComponent.css'

function CategoryCardComponent(props) {
    return(
        <>
            <div className="card text-center mb-3" >
                <div className="card-body card-bo">
                    <h5 className="card-title">{props.categoryName}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </>
    )
}

export default CategoryCardComponent;