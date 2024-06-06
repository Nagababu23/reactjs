import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class MatchCard extends Component {
  render() {
    const {details} = this.props
    const {name, teamImageUrl} = details
    return (
      <Link to={`/team-matches/${name}`} className="link-sec">
        <li>
          <img src={teamImageUrl} alt={name} width="45px" />
          <p>{name}</p>
        </li>
      </Link>
    )
  }
}
export default MatchCard
