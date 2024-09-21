import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaTrash, FaClipboardList, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import UserMenuIcon from '../../../assets/user-menu.svg';
import HeaderSubMenu from './header-sub-menu/header-sub-menu';
import HeaderMenuItem from './header-menu-item/header-menu-item';
import HeaderUserMenu from './header-user-menu/header-user-menu';
import EvoWasteLogo from '../../evowaste-logo/evowaste-logo';

const MOBILE_BREAKPOINT = 768;

const NavbarHeader = () => {
  const [menuState, setMenuState] = useState({
    isSubMenuOpen: false,
    isUserMenuOpen: false,
    isMobileMenuOpen: false,
    isMobile: window.innerWidth < MOBILE_BREAKPOINT,
  });

  const toggleMenu = useCallback((key) => () => {
    setMenuState((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const closeSubMenu = useCallback(() => setMenuState((prev) => ({ ...prev, isSubMenuOpen: false })), []);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setMenuState((prev) => ({
        ...prev,
        isMobile: newIsMobile,
        isMobileMenuOpen: newIsMobile ? prev.isMobileMenuOpen : false,
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { to: '/ordens-coleta', icon: FaClipboardList, label: 'Coletas' },
    { to: '/residuos', icon: FaTrash, label: 'Resíduos' },
  ];

  const subMenuItems = [
    { to: '/empresas', label: 'Empresas' },
    { to: '/usuarios', label: 'Usuários' },
    { to: '/clientes', label: 'Clientes' },
  ];

  const renderDesktopMenu = () => (
    <div className="flex-grow flex justify-center items-center text-xs space-x-4">
      {menuItems.map((item) => (
        <HeaderMenuItem key={item.to} {...item} />
      ))}
      <div className="flex flex-col items-center relative">
        <div className="flex flex-col items-center cursor-pointer" onClick={toggleMenu('isSubMenuOpen')}>
          <FaUser size={22} />
          <span className="text-xs mt-1">Pessoas</span>
        </div>
        <HeaderSubMenu isOpen={menuState.isSubMenuOpen} onClose={closeSubMenu} items={subMenuItems} />
      </div>
      <HeaderMenuItem to="/configuracoes" icon={FaCog} label="Configurações" />
    </div>
  );

  const renderMobileMenu = () => (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300 ${menuState.isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ease-in-out ${menuState.isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b">
          <EvoWasteLogo className="text-2xl" textColor="text-[#169c56]" />
          <button onClick={toggleMenu('isMobileMenuOpen')} className="text-gray-500">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="p-4">
          {menuItems.map((item) => (
            <Link key={item.to} to={item.to} className="block py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu('isMobileMenuOpen')}>
              <item.icon className="inline-block mr-2" /> {item.label}
            </Link>
          ))}
          <div className="py-2 text-gray-800 hover:bg-gray-100 cursor-pointer" onClick={toggleMenu('isSubMenuOpen')}>
            <FaUser className="inline-block mr-2" /> Pessoas
            {menuState.isSubMenuOpen ? <FaChevronUp className="float-right mt-1" /> : <FaChevronDown className="float-right mt-1" />}
          </div>
          {menuState.isSubMenuOpen && (
            <div className="ml-4">
              {subMenuItems.map((item) => (
                <Link key={item.to} to={item.to} className="block py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu('isMobileMenuOpen')}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          <Link to="/configuracoes" className="block py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu('isMobileMenuOpen')}>
            <FaCog className="inline-block mr-2" /> Configurações
          </Link>
        </nav>
      </div>
    </div>
  );

  return (
    <nav className="bg-gradient-to-r from-[#169c56] via-[#169c56] to-[#169c56] px-3 py-2 text-white shadow-lg">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          {menuState.isMobile && (
            <button onClick={toggleMenu('isMobileMenuOpen')} className="text-white">
              <FaBars size={22} />
            </button>
          )}
          <Link to="/" className="">
            <EvoWasteLogo />
          </Link>
        </div>

        {!menuState.isMobile && renderDesktopMenu()}

        <div className="flex items-center space-x-4">
          <div className="h-6 w-px bg-white opacity-50"></div>
          <div className="relative flex items-center">
            <img
              src={UserMenuIcon}
              alt="User Menu"
              width={30}
              height={30}
              className="cursor-pointer w-7 h-7"
              onClick={toggleMenu('isUserMenuOpen')}
            />
            <HeaderUserMenu isOpen={menuState.isUserMenuOpen} />
          </div>
        </div>
      </div>
      {menuState.isMobile && renderMobileMenu()}
    </nav>
  );
};

export default NavbarHeader;
