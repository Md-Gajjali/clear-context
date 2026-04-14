import React from 'react'
import { useContext } from 'react'
import { User } from '../Context/UserContext'
import UserCard from './UserCard'

const HeroSection = () => {

    const {user} = useContext(User)



  return (
    <div className='mt-20 container mx-auto'>
      <div className='flex flex-wrap justify-center gap-10'>
        {
            user.map((item)=>{
                return(
                    <UserCard 
                      key={item.id}
                      name={item.firstName}
                      email={item.email}
                      number={item.phone}
                      images={item.image}
                    />
                )
            })
        }
      </div>
    </div>
  )
}

export default HeroSection
