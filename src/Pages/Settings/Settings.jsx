import React from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import Card from '../../components/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser, faPenToSquare, faUpload } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import profile from "../../assets/profile-gen-bg-dark.jpg"
const Settings = () => {
  return (
    <div className='w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0'>
      <PageHeading>Settings</PageHeading>
      <Card tailStyle={"w-[100%] lg:w-[65%]"}>
        <h5 className="p-3 px-6 border-b border-gray-700">Personal Information</h5>
        <form action="" className='p-4 px-6 '>
          <div className='flex flex-col xl:flex-row gap-1 justify-between'>
            <div className='relative inline-flex flex-1 flex-col mb-4'>
              <label className='text-sm mb-2' htmlFor="name">Full Name</label>
              <input id='name' type="text" placeholder='John Doe' className='bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border'/>
              <FontAwesomeIcon icon={faUser} className='absolute bottom-4 left-4'/>
            </div>
            <div className='relative inline-flex flex-1 flex-col mb-4'>
              <label className='text-sm mb-2' htmlFor="phone">Phone Number</label>
              <input id='phone' type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Phone Number' className='bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border'/>
              <FontAwesomeIcon icon={faPhone} className='absolute bottom-4 left-4'/>
            </div>
          </div>
          <div className='relative inline-flex flex-col w-[100%] mb-4'>
            <label className='text-sm mb-2' htmlFor="email">Email</label>
            <input id='email' type="email" placeholder='johndoe@example.com' className='bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border'/>
            <FontAwesomeIcon icon={faEnvelope} className='absolute bottom-4 left-4'/>
          </div>
          <div className='relative inline-flex flex-col w-[100%] mb-4'>
            <label className='text-sm mb-2' htmlFor="username">Username</label>
            <input id='username' type="text" placeholder='johndoe123' className='bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border'/>
            <FontAwesomeIcon icon={faAddressCard} className='absolute bottom-4 left-4'/>
          </div>
          <div className='relative inline-flex flex-col w-[100%] mb-4'>
            <label className='text-sm mb-2' htmlFor="bio">BIO</label>
            <textarea id='bio' placeholder='Bio' className='bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet
            </textarea>
            <FontAwesomeIcon icon={faPenToSquare} className='absolute top-11 left-4' />
          </div>
          <div className='ml-auto mr-2 w-fit flex gap-4'>
            <input className='border border-gray-700 py-2 px-4 cursor-pointer rounded-md' type="reset" value={"Reset"} />
            <input className='border border-gray-700 py-2 px-4 cursor-pointer rounded-md bg-blue-700' type="submit" value={"Submit"}/>
          </div>
        </form>
      </Card>
      <Card tailStyle={"w-[100%] lg:w-[33%] h-fit"}>
      <h5 className="p-3 px-6 border-b border-gray-700">Your Photo</h5>
      <div className='p-6'>
        <div className='flex items-center justify-between gap-2 w-fit'>
          <div className="rounded-full">
            <img src={profile} alt="" className='rounded-full w-14 h-14'/>
          </div>
          <div>
            <h3>Edit your photo</h3>
            <div>
              <button className='text-gray-400 hover:text-blue-700 text-sm'>Update</button>
              <button className='text-gray-400 hover:text-blue-700 text-sm ml-2'>Delete</button>
            </div>
          </div>
        </div>
        <form action="" className='my-4'>
          <label htmlFor="update-photo" className='cursor-pointer text-center bg-gray-700 w-[100%] mb-4 block p-8 rounded-md border border-blue-600 border-dashed text-gray-400'>
            <FontAwesomeIcon icon={faUpload} className='bg-gray-800 p-3 rounded-full text-blue-600'/>
            <p><span className='text-blue-600'>Click to uplaod</span> or drag and drop here</p>
            <p>SVG, PNG, JPG or GIF</p>
            <p>(max 800 X 800px)</p>
          </label>
          <input type="file" className='hidden' id='update-photo'/>
          <div className='ml-auto mr-2 w-fit flex gap-4'>
            <input className='border border-gray-700 py-2 px-4 cursor-pointer rounded-md' type="reset" value={"Reset"} />
            <input className='border border-gray-700 py-2 px-4 cursor-pointer rounded-md bg-blue-700' type="submit" value={"Submit"}/>
          </div>
        </form>
      </div>
      </Card>
    </div>
  )
}

export default Settings