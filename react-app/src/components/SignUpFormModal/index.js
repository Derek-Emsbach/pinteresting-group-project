import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import SignUpForm from '../auth/SignUpForm'

function SignupFormModal() {

    const [showModal, setShowModal] = useState(false)
  return (
    <>
    <button onClick={() => setShowModal(true)}>Sign upasdasd</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <SignUpForm/>
      </Modal>
    )}
    </>
  )
}
export default SignupFormModal
