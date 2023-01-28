
import React,{ useEffect,useState, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './Navigation.css'
import pinterestIcon from '../icons/pinterest_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import bell from '../icons/bell.png'
import message from '../icons/chat.png'
import profile from '../icons/profile.png'
import { useSelector } from 'react-redux';

const Navigation = () => {
  const [open, setOpen] = useState(false)
  let menuRef = useRef()

  const sessionUser = useSelector(state=> state.session.user)
  console.log(sessionUser)
  // useEffect(()=>{
  //   let handleSubmit = (e)=>{
  //     if(!menuRef.current.contains(e.target)){
  //     setOpen(false)
  //     }
  //   }
  //   document.addEventListener('mousedown',handleSubmit)
  
  // },[])
  useEffect(()=>{



  },[])



  return (
    <div className='Nav-container'>
    <nav id='navigation-bar'>
      <ul>
        <div className='left_side'>
             <button className='pinterest_icon'>
            <img src={pinterestIcon} className='globe' alt='globe'/>
             </button>
             <li>
              <NavLink to='/' exact={true} activeClassName='active'>
                 Home
              </NavLink>
             </li>
            <li> Today</li>
            <li>Create</li>
        </div>

        <div className='search_middle'>
            <form>
              <input type = 'Text' placeholder='Search'></input>
              <button type ='Submit'></button>
            </form>
    
        </div>

        <div className='right_side'>
            <div className='notification'>
            <button><img src={bell} alt=''></img></button>
            
            </div>

            <div className='message'>
            <button><img src={message} alt=''></img></button>
            </div>

            <div className='profile'>
            <button><img src={profile} alt=''></img></button>
            </div>

            <div className='dropdown_buttton'>
            <button className='' onClick={()=>{setOpen(!open)}} >
            <FontAwesomeIcon icon={faChevronDown } />
            </button>
            </div>
        
        </div>

        <div className={`dropdown-menu ${open ? 'active' :'inactive'} `} ref={menuRef} >
            {sessionUser&&
            <div className='menu_dropdown'>
                  <h5>Currently in</h5>
                  <div className='profile'>
                       <div className='prof_icon'>
                       <img src={profile} alt =''/>
                       </div>
                       <div className='user_info'>
                       {sessionUser.username}
                        <h5>Personal</h5>
                       {sessionUser.email}
                       </div>
                        
                  </div>
            
            

                <li>
                   <NavLink to='/sign-up' exact={true} activeClassName='active'>
                  Sign Up
                  </NavLink>
                </li>



                 <li>
                  <NavLink to='/users' exact={true} activeClassName='active'>
                   Users
                 </NavLink>
                </li>
       
                <li>
                  <LogoutButton />
                 </li>
             </div>
            }
        </div>
            
        

      </ul>
    </nav>
    </div>
  );
}

export default Navigation;
