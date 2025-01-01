import React from "react";
import { Link } from "react-router-dom";
import edits from "./../img/edit.png";
import deletes from "./../img/delete.png";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCgknERZ9U3Rf57ReGHz0SdHcDe298fPKzg&s"
          alt=""
        />
        <div className="user">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
            alt=""
          />
          <div className="info">
            <p>Baloch Sahb</p>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link>
              <img src={edits} alt="" />
            </Link>
            <img src={deletes} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            consequuntur vero! Illo, aliquid quisquam! Accusantium provident
            mollitia molestiae consequuntur reprehenderit vitae aperiam
            repellendus rerum similique dolorem? Cumque illum, necessitatibus
            dolore, voluptas fugiat quae totam consequuntur reprehenderit
            accusamus nesciunt voluptates corporis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            consequuntur vero! Illo, aliquid quisquam! Accusantium provident
            mollitia molestiae consequuntur reprehenderit vitae aperiam
            repellendus rerum similique dolorem? Cumque illum, necessitatibus
            dolore, voluptas fugiat quae totam consequuntur reprehenderit
            accusamus nesciunt voluptates corporis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            consequuntur vero! Illo, aliquid quisquam! Accusantium provident
            mollitia molestiae consequuntur reprehenderit vitae aperiam
            repellendus rerum similique dolorem? Cumque illum, necessitatibus
            dolore, voluptas fugiat quae totam consequuntur reprehenderit
            accusamus nesciunt voluptates corporis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            consequuntur vero! Illo, aliquid quisquam! Accusantium provident
            mollitia molestiae consequuntur reprehenderit vitae aperiam
            repellendus rerum similique dolorem? Cumque illum, necessitatibus
            dolore, voluptas fugiat quae totam consequuntur reprehenderit
            accusamus nesciunt voluptates corporis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            consequuntur vero! Illo, aliquid quisquam! Accusantium provident
            mollitia molestiae consequuntur reprehenderit vitae aperiam
            repellendus rerum similique dolorem? Cumque illum, necessitatibus
            dolore, voluptas fugiat quae totam consequuntur reprehenderit
            accusamus nesciunt voluptates corporis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            consequuntur vero! Illo, aliquid quisquam! Accusantium provident
            mollitia molestiae consequuntur reprehenderit vitae aperiam
            repellendus rerum similique dolorem? Cumque illum, necessitatibus
            dolore, voluptas fugiat quae totam consequuntur reprehenderit
            accusamus nesciunt voluptates corporis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Mollitia, consequuntur vero! Illo,
            aliquid quisquam! Accusantium provident mollitia molestiae
            consequuntur reprehenderit vitae aperiam repellendus rerum similique
            dolorem? Cumque illum, necessitatibus dolore, voluptas fugiat quae
            totam consequuntur reprehenderit accusamus nesciunt voluptates
            corporis?
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
