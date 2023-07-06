import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Categories = () => {
  // const category = [
  //   {
  //     name: "Upperbody",
  //     img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJvcGElMjBob21icmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     name: "Lowerbody",
  //     img: "https://images.unsplash.com/photo-1552668693-2be72c866be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJvcGElMjBob21icmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     name: "Accesories",
  //     img: "https://images.unsplash.com/photo-1578238591955-f360d5eda965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHJvcGElMjBob21icmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
  //   },
  // ];

  return (
    <>
      <Container fluid className="">
        <div className="pt-5 pb-5">
          <h5 className="ps-5">Top categories</h5>
          <div className="card-container">
            <div className="card-1 mx-2">
              <div className="content">
                <h6>UpperBody</h6>
                <Link to="/categories">View More</Link>
                
              </div>
            </div>
            <div className="card-2 mx-2">
              <div className="content">
                <h6>LowerBody</h6>
                <Link to="/categories">View More</Link>
              </div>
            </div>
            <div className="card-3 mx-2">
              <div className="content">
                <h6>Accesories</h6>
                <Link to="/categories">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="view-categories mt-2 mb-5 mx-0 px-0">
        <h5>View All Categories</h5>
      </div>
    </>
  );
};

export default Categories;
