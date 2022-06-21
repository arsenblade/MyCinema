import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useUserEdit } from './useUserEdit'
import { IUserEditInput } from './user-edit.interface'
import AuthFields from '@/components/screens/auth/AuthFields'
import classNames from 'classnames'


const UserEdit:FC = () => {

  const {handleSubmit, register, formState, setValue, control} = useForm<IUserEditInput>({
    mode: 'onChange'
  })

  const {isLoading, onSubmit} = useUserEdit(setValue)

  return (
    <Meta title='Edit genre'>
      <AdminNavigation />
      <Heading title='Edit genre' />
      <form onSubmit={handleSubmit(onSubmit)} className='admin-form'>
      {isLoading ? <SkeletonLoader count={3} /> 
      :
        <>
          <AuthFields register={register} formState={formState}  />
          <Controller 
          control={control} 
          name='isAdmin' 
          render={({field}) => (
            <button onClick={(e) => {
              e.preventDefault()
              field.onChange(!field.value)
            }} className='text-link block mb-7'>
              {field.value ? 'Make it regular user' : 'Make it admin'}
            </button>
          )}
          ></Controller>
          <Button>Update</Button>
        </>}
      </form>
    </Meta>
  )
}

export default UserEdit