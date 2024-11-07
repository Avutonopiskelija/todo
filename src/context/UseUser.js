
import { useContext }  from 'react'
import { UserContext } from './UserContext'

export const UseUser = () => {
    return useContext(UserContext)
}