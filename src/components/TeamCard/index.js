import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachCardDetails} = props
  const {id, name, teamImageUrl} = eachCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-container">
      <li className="ipl-card">
        <img src={teamImageUrl} alt={name} className="ipl-card-img" />
        <p className="ipl-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
