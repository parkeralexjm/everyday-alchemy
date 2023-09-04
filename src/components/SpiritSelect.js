// ! Bootstrap imports
import Form from 'react-bootstrap/Form'

export default function SpiritSelect({ setSpirit, spiritList }) {
  function handleChange(e) {
    setSpirit(e.target.value)
  }

  return (
    <Form.Select aria-label="Default select" style={{ display: 'inline', width: '200px' }} onChange={handleChange}>
      <option selected disabled>Choose a spirit</option>
      {
        spiritList.map((spirit, idx) => {
          return <option key={idx} value={spirit}>{spirit}</option>
        }) 
      }
    </Form.Select>
  )
}