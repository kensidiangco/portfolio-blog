import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faHome, faCaretDown, faImages, faCog, faUser, faAngleLeft, faAngleRight, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import {useTheme} from 'next-themes'
import { useRouter } from 'next/router'

export default function Navigation() {
    const [open, setOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState('main')
    const {theme, setTheme} = useTheme()
    const router = useRouter()
    const path = router.pathname

    const handleOpen = () => {
        setActiveMenu('main')
        setOpen(!open)
    }
    
    return (
        <nav className="sticky shadow-md top-0 z-50 bg-light-nav-footer dark:bg-nav-footer dark:text light-text flex items-center justify-between">
            <div className="font-semibold space-x-4 flex items-center">
                <Link href="/" passHref>
                    <span className="p-2 rounded-md cursor-pointer text-light-text dark:text-text hidden md:block">KEN.</span>
                </Link>
            </div>
            <div className="font-semibold space-x-1 flex items-center">
                <Link href="/" passHref>
                    <span className={`p-2 px-10 cursor-pointer transition delay-50 text-light-text dark:text-text ${path === "/" ? "border-b-4 border-light-focus-button-icon rounded-t-md" : "rounded-md hover:bg-light-nav-button-hover dark:hover:bg-nav-button-hover"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className={`h-7 w-7 ${path === "/" ? "fill-current text-light-focus-button-icon dark:text-button-focus-icon" : "fill-current text-gray-600 dark:text-faded-text"}`}><path d="M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"/></svg>
                        
                    </span>
                </Link>

                <Link href="/gallery" passHref>
                    <span className={`p-2 px-10 cursor-pointer transition delay-50 text-light-text dark:text-text ${path === "/gallery" ? "border-b-4 border-light-focus-button-icon rounded-t-md" : "rounded-md hover:bg-light-nav-button-hover dark:hover:bg-nav-button-hover"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`h-7 w-7 ${path === "/gallery" ? "fill-current text-light-focus-button-icon dark:text-button-focus-icon" : "fill-current text-gray-600 dark:text-faded-text"}`}><g fillRule="evenodd" transform="translate(-444 -156)"><g><path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"/><path fillRule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"/></g></g></svg>
                    </span>
                </Link>
            </div>

            <div className="font-semibold space-x-4 flex items-center">
                <a onClick={() => handleOpen()}>
                    <span className={`py-2 px-3 rounded-full cursor-pointer ${open ? "bg-light-focus-button text-light-focus-button-icon dark:bg-focus-button dark:text-focus-button-icon" : "text-light-faded-text dark:text-faded-text hover:bg-light-button-hover dark:hover:bg-button-hover bg-light-button dark:bg-button transition delay-50"}`}><FontAwesomeIcon icon={faCaretDown} size="lg"/></span>
                </a>
            </div>

            {/* Dropdown Item */}
            {open && 
                <div className="px-2 py-4 absolute shadow-lg w-full top-8 md:w-32 md:left-3/4 md:top-3/4 md:w-1/4 rounded-md mt-4 md:mr-4 font-semibold space-y-1 justify-center overflow-hidden bg-light-nav-footer dark:bg-nav-footer border border-light-border dark:border-border">
                    
                    <CSSTransition 
                        in={activeMenu === 'main'}
                        unmountOnExit
                        timeout={400}
                        classNames='menu-primary'
                    >
                        <div className="menu flex flex-col">
                            <Link href="/" passHref>
                                <span className="py-3 px-4 rounded hover:bg-light-nav-button-hover dark:hover:bg-nav-button-hover cursor-pointer transition delay-50"><span className="bg-light dark:bg-button rounded-full p-2 m-2 text-light-text dark:text-text"><FontAwesomeIcon icon={faUser} size="lg"/></span> Account</span>
                            </Link>

                            <span className="py-3 px-4 rounded hover:bg-light-nav-button-hover dark:hover:bg-nav-button-hover cursor-pointer transition delay-50" onClick={() => setActiveMenu('theme')}>
                                <span className="bg-light dark:bg-button rounded-full p-2 m-2 text-light-text dark:text-text"><FontAwesomeIcon icon={faMoon} size="lg"/>
                                </span> 
                                Display <span className="ml-2 float-right text-md text-light-text dark:text-text"><FontAwesomeIcon icon={faAngleRight} size="lg"/></span>
                            </span>
                        </div>

                    </CSSTransition>

                    <CSSTransition 
                        in={activeMenu === 'theme'}
                        unmountOnExit
                        timeout={400}
                        classNames='menu-secondary'
                    >
                        <div className="menu flex flex-col">
                            <span className="py-3 px-4 rounded transition delay-50">
                                <span className="px-3 p-2 m-2 hover:bg-light-nav-button-hover dark:hover:bg-nav-button-hover cursor-pointer rounded-full text-light-text dark:text-text" onClick={() => setActiveMenu('main')}><FontAwesomeIcon icon={faAngleLeft} size="lg"/>
                                </span> 
                                <span className="text-xl text-light-text dark:text-text">Display</span>
                            </span>

                            <span className="flex py-3 px-4 rounded transition delay-50">
                                <span className="flex items-center bg-light dark:bg-button rounded-full p-2 m-2 text-light-text dark:text-text">
                                    <FontAwesomeIcon icon={faMoon} size="lg"/>
                                </span>
                                <p className="flex flex-col text-light-text dark:text-text">
                                    Dark Mode 
                                    <small className="text-light-faded-text dark:text-faded-text">Adjust the appearance of Facebook to reduce glare and give your eyes a break.</small>
                                </p>
                            </span>
                            
                            <div className="flex flex-col py-3 px-4 rounded">
                                <span className="flex items-center p-3 hover:bg-light-nav-button-hover dark:hover:bg-nav-button-hover cursor-pointer rounded-md w-full transition delay-50 justify-between text-light-text dark:text-text" onClick={() => setTheme('light')}>
                                    <label htmlFor="off">Off</label>
                                    <input 
                                        type="radio" 
                                        name="off"
                                        value="light" 
                                        checked={theme === "light"}
                                    />
                                </span>
                                
                                <span className="flex items-center p-3 hover:bg-light-nav-button-hover dark:hover:bg-nav-button-hover cursor-pointer rounded-md w-full transition delay-50 justify-between text-light-text dark:text-text" onClick={() => setTheme('dark')}>
                                    <label htmlFor="on">On</label>
                                    <input 
                                        type="radio" 
                                        name="on"
                                        value="Dark"
                                        checked={theme === "dark"}
                                    />
                                </span>

                            </div>
                        </div>

                    </CSSTransition>
                </div>
            }

        </nav>
    )
}