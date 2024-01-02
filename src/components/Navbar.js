import React from 'react'
import {NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className="nav-link actives" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className="nav-link actives" aria-current="page" to="/about">about</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className="nav-link actives" aria-current="page" to="/filter">Filter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className="nav-link actives" aria-current="page" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className="nav-link actives" aria-current="page" to="/datas">Datas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className="nav-link actives" aria-current="page" to="/data">Data</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className="nav-link actives" aria-current="page" to="/CRUD/Post">POST</NavLink>
                    </li>
                    


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


            
        </div>
    )
}

export default Navbar
