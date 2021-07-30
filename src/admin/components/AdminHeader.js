import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../vendor/fontawesome-free/css/all.min.css'
import '../css/sb-admin-2.min.css'
import '../styles/AdminHeader.css'

function AdminHeader() {
    return (
        <div className="adminHeader">
              
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <img src={require("../img/logo.jpg")} className="adminHeader__logo" alt="logo" />
        </div>
        <div class="sidebar-brand-text mx-3">Sílaba corp. Admin</div>
      </Link>

       
      <hr class="sidebar-divider my-0" />
      <li class="nav-item active">
        <Link class="nav-link" to="/admin">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr class="sidebar-divider" />
      <li class="nav-item">
        <Link class="nav-link" to="/adminBills">
          <i class="fas fa-fw fa-receipt"></i>
          <span>Facturas</span></Link>
      </li>
      <hr class="sidebar-divider d-none d-md-block" />
      <li class="nav-item">
        <Link class="nav-link" to="/adminTable">
          <i class="fas fa-fw fa-table"></i>
          <span>Ítems</span></Link>
      </li>
      <hr class="sidebar-divider d-none d-md-block" />
      <li class="nav-item">
        <Link class="nav-link" to="/adminDonations">
          <i class="fas fa-fw fa-hand-holding-usd"></i>
          <span>Donaciones</span></Link>
      </li>
      <hr class="sidebar-divider d-none d-md-block" />
      <li class="nav-item">
        <Link class="nav-link" to="/">
            <i class="fas fa-fw fa-store"></i>
            <span>Ir a la tienda</span>
          </Link>
      </li>

       
      <hr class="sidebar-divider d-none d-md-block" />

      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
        </div>
    )
}

export default AdminHeader
