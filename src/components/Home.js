// Bootstrap imports
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Home() {
  const quotes = [
    'I have mixed drinks about feelings',
    'Hydrate responsibly',
    'I\'m in need of liquid therapy',
    'No working during drinking hours',
    'It\'s strange how eight glasses of water a day seems impossible. But eight cocktails doesn\'t',
    '"Trust me, you can dance" – Vodka',
    'Save water, drink cocktails',
    'Cocktails are not the answer. Cocktails are the Question. Yes is the answer',
    'Take life with a grain of salt, a slice of lime, and a shot of tequila',
    'A party without cocktails is just a meeting',
    'A drink a day keeps the reality at bay',
    'I enjoy long romantic walks toward the bar',
    'Everybody\'s got to believe in something. I believe I\'ll have another drink',
    'I enjoy long, romantic walks to the bar',
    'A balanced diet is a cocktail in each hand'
  ]

  return (
    <div className='home px-5'>
      <h1 className='limelight text-center'>{quotes[Math.floor(Math.random() * quotes.length)]}</h1>
      <div>
        <Button className='custom-btn' as={Link} to={'/search'} size='lg'>Cocktail List</Button>
      </div>  
    </div>
  )
}

export default Home