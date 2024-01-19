// import React from "react";
import * as PATH from "@/configs/routeConfig.tsx";
import "./_nav.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

// ...

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          href="/"
          onClick={() => {
            navigate(PATH.HOME_PATH);
          }}
        >
          <FontAwesomeIcon
            icon={
              faLaptopCode as IconProp
            }
          />
        </a>
        <button
          className="navbar-toggler justify-content end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                Khoá học online
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                href="#"
              >
                Đề thi online
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                Flagcards
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#"
              >
                Kích hoạt khoá học
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-login"
                onClick={() => {
                  navigate(
                    PATH.LOGIN_PATH,
                  );
                }}
              >
                Đăng nhập
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
