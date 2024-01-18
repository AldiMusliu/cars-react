import React, { useRef } from 'react'

const CarPicture = ({ imgSource = '', changeProfileImage }) => {
  const fileRef = useRef(null)

  const handleImageChange = (e) => {
    e.preventDefault()
    changeProfileImage(fileRef.current.files[0])
  }

  return (
    <div>
      <img src={imgSource.startsWith('http') ? imgSource : process.env.REACT_APP_API_URL + imgSource} alt={'profile'} />
      <input ref={fileRef} type="file" onChange={handleImageChange} name="profile-image" accept="image/png, image/jpeg" />
    </div>
  )
}

export default CarPicture
