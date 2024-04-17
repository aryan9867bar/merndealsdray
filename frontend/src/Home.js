import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container" style={{ backgroundColor: '#87CEEB', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/">Your Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item" style={{ marginRight: '100px' }}>
                                <a className="nav-link" href="/employees/create">Create Employee</a>
                            </li>
                            <li className="nav-item" style={{ marginLeft: '100px' }}>
                                <a className="nav-link" href="/employees">Employee List</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-danger me-2">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="home-content" style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 className="text-center text-white">Welcome to Admin Panel !</h1>
            </div>
        </div>
    )
}

export default Home;