import { useSelector } from 'react-redux'
import { gantiBioData } from '../actions/actionApp'

const Counter = () => {
  const biodata = useSelector((state) => state.myBioData)

  return (
    <>
      <h2>Profile : {JSON.stringify(biodata)} </h2>
    </>
  )
}

export default Counter