import React, { useContext } from 'react'
import Header from '../components/Header'
import { Context } from '../App'
import {useForm} from "react-hook-form"
function Add() {
  const {addPost} = useContext(Context)
  const {handleSubmit,register} = useForm()
  
  return (
    <div className='container'>
      <Header />
      <form onSubmit={handleSubmit(addPost)}>
      <div className="row">
        
        <div className="col-6 mt-3">
          <input
          {...register("title")}
          type="text" className='form-control form-control-lg' placeholder='title' />
        </div>
        <div className="col-6 mt-3">
        <input
        {...register("poster")}
        type="text" className='form-control form-control-lg' placeholder='poster' />

        </div>
        <div className="col-12 mt-3">
          <textarea
          {...register("text")}
          cols="30" rows="10" className='form-control form-control-lg'></textarea>
        </div>
        <div className="col-12">
          <button className='btn btn-success mt-3'>Upload Post</button>
        </div>
       
      </div>
      </form>
    </div>
  )
}

export default Add