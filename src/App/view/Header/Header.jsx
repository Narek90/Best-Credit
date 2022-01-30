import React from 'react'
import  './index.css'
import logo from '../../../assets/img/header/images.svg'
import { Link } from 'react-router-dom'

function Header() {
	const [isActive,setIsActive]=React.useState('')
	
	return (
		<div className='header-general'> 
		<div></div>
			<div className='logo-conteiner'>
				<img className="logo-img" src={logo} alt="Logo" />
				Best Credit
			</div>
			<div className='menu-conteiner'>
				
				<div 
				className={`menu-items ${isActive==="about"?isActive:""}`} 
				onClick={()=>setIsActive("about")} 
				><Link to="/about">About </Link></div>
				
				<div className={`menu-items ${isActive==="loans"?isActive:""}`} 
				onClick={()=>setIsActive("loans")}>
					<Link to="/loans">Loans</Link>
					</div>
				<div className={`menu-items ${isActive==="contact-us"?isActive:""}`} 
				onClick={()=>setIsActive("contact-us")}><Link to="/contact">Contact us</Link></div>
			</div>
			<div className='login-menu'></div>
			<div></div>
		</div>
	)
}

export default Header
